import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export interface Booking {
  id: string;
  experienceName: string;
  destination: string;
  dates: string;
  visitors: number;
  price: number;
  status: 'pending' | 'confirmed' | 'completed';
}

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  description?: string;
  image: string;
  status: 'active' | 'low' | 'out';
  category?: string;
}

export interface Experience {
  id: string;
  name: string;
  price: number;
  description?: string;
  image: string;
  bookings: number;
  duration?: string;
  capacity: number;
  status: 'active' | 'inactive';
  destination: string;
  location?: string;
  category?: 'tours' | 'gastronomia' | 'naturaleza' | 'cultura' | 'aventura';
  badge?: { text: string; color: string };
}

export interface Order {
  id: string;
  customer: string;
  customerEmail: string;
  items: number;
  total: number;
  status: 'pendiente' | 'confirmado' | 'completado' | 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  products: { name: string; quantity: number; price: number }[];
}

export interface ExperienceBooking {
  id: string;
  customer: string;
  customerEmail: string;
  experienceName: string;
  experienceDate: string;
  visitors: number;
  total: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  date: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'buyer' | 'admin';
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  weight?: string;
  grind?: string;
  image: string;
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
  // Auth
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string, role?: 'buyer' | 'admin') => Promise<void>;
  signOut: () => Promise<void>;
  // Cart
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateCartItem: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  // Bookings
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  notificationCount: number;
  // Products
  products: Product[];
  refreshProducts: () => Promise<void>;
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
  updateProduct: (id: string, product: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  // Experiences
  experiences: Experience[];
  refreshExperiences: () => Promise<void>;
  addExperience: (experience: Omit<Experience, 'id' | 'bookings'>) => Promise<void>;
  updateExperience: (id: string, experience: Partial<Experience>) => Promise<void>;
  deleteExperience: (id: string) => Promise<void>;
  // Orders
  orders: Order[];
  refreshOrders: () => Promise<void>;
  createOrder: (items: any[], total: number) => Promise<void>;
  updateOrderStatus: (id: string, status: Order['status']) => Promise<void>;
  // Experience Bookings
  experienceBookings: ExperienceBooking[];
  refreshBookings: () => Promise<void>;
  createExperienceBooking: (booking: Omit<ExperienceBooking, 'id' | 'date'>) => Promise<void>;
  updateBookingStatus: (id: string, status: ExperienceBooking['status']) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);




// ============================================
// PROVIDER
// ============================================

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [notificationCount] = useState(2);
  const [products, setProducts] = useState<Product[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [experienceBookings, setExperienceBookings] = useState<ExperienceBooking[]>([]);

  // ============================================
  // AUTH (SUPABASE)
  // ============================================

  useEffect(() => {
    // Escuchar cambios en la sesión
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        // Cargar perfil con rol (con reintentos para dar tiempo al trigger)
        let profile = null;
        let retries = 3;
        while (retries > 0) {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          if (data) {
            profile = data;
            break;
          }

          if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows found"
            console.error("Error fetching profile:", error);
            break;
          }

          retries--;
          if (retries > 0) await new Promise(res => setTimeout(res, 800));
        }

        setUser({
          id: session.user.id,
          email: session.user.email || '',
          name: (profile as any)?.full_name || session.user.user_metadata?.full_name || 'Usuario',
          role: ((profile as any)?.role === 'admin' ? 'admin' : 'buyer')
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    const safetyTimer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => {
      subscription.unsubscribe();
      clearTimeout(safetyTimer);
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const signUp = async (email: string, password: string, fullName: string, role: 'buyer' | 'admin' = 'buyer') => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: role
        }
      }
    });
    if (error) throw error;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  // ============================================
  // PRODUCTS & EXPERIENCES (SUPABASE)
  // ============================================

  const refreshProducts = async () => {
    const { data, error } = await supabase
      .from('cafes')
      .select('*')
      .order('nombre');

    if (!error && data) {
      setProducts(data.map(c => ({
        id: c.id,
        name: c.nombre,
        price: c.precio,
        stock: c.stock,
        image: c.image_url || '',
        status: c.stock > 10 ? 'active' : c.stock > 0 ? 'low' : 'out',
        origen: c.origen
      })));
    }
  };

  const refreshExperiences = async () => {
    const { data, error } = await supabase
      .from('experiencias')
      .select('*')
      .order('titulo');

    if (!error && data) {
      setExperiences(data.map(e => ({
        id: e.id,
        name: e.titulo,
        price: e.precio,
        image: e.image_url || '',
        capacity: e.cupos,
        status: e.is_active ? 'active' : 'inactive',
        destination: e.ubicacion,
        bookings: 0 // Simplificado
      })));
    }
  };

  const addProduct = async (product: Omit<Product, 'id'>) => {
    const { error } = await supabase
      .from('cafes')
      .insert({
        nombre: product.name,
        precio: product.price,
        stock: product.stock,
        image_url: product.image,
        origen: (product as any).origen || ''
      });
    if (error) throw error;
    await refreshProducts();
  };

  const updateProduct = async (id: string, updates: Partial<Product>) => {
    const { error } = await supabase
      .from('cafes')
      .update({
        nombre: updates.name,
        precio: updates.price,
        stock: updates.stock,
        image_url: updates.image,
        origen: (updates as any).origen
      })
      .eq('id', id);
    if (error) throw error;
    await refreshProducts();
  };

  const deleteProduct = async (id: string) => {
    const { error } = await supabase
      .from('cafes')
      .delete()
      .eq('id', id);
    if (error) throw error;
    await refreshProducts();
  };

  const addExperience = async (experience: Omit<Experience, 'id' | 'bookings'>) => {
    const { error } = await supabase
      .from('experiencias')
      .insert({
        titulo: experience.name,
        precio: experience.price,
        cupos: experience.capacity,
        image_url: experience.image,
        ubicacion: experience.destination
      });
    if (error) throw error;
    await refreshExperiences();
  };

  const updateExperience = async (id: string, updates: Partial<Experience>) => {
    const { error } = await supabase
      .from('experiencias')
      .update({
        titulo: updates.name,
        precio: updates.price,
        cupos: updates.capacity,
        image_url: updates.image,
        ubicacion: updates.destination
      })
      .eq('id', id);
    if (error) throw error;
    await refreshExperiences();
  };

  const deleteExperience = async (id: string) => {
    const { error } = await supabase
      .from('experiencias')
      .delete()
      .eq('id', id);
    if (error) throw error;
    await refreshExperiences();
  };

  // ============================================
  // ORDERS
  // ============================================

  const refreshOrders = async () => {
    if (!user) return;

    let query = supabase
      .from('pedidos')
      .select(`
        *,
        items_pedido (
          *
        )
      `)
      .order('created_at', { ascending: false });

    // Si no es admin, solo ver los propios
    if (user.role !== 'admin') {
      query = query.eq('user_id', user.id);
    }

    const { data, error } = await query;

    if (!error && data) {
      setOrders(data.map((o) => ({
        id: o.id,
        customer: o.user_id === user.id ? user.name : 'Cliente',
        customerEmail: '',
        items: o.items_pedido.length,
        total: o.total,
        status: o.status,
        date: o.created_at.split('T')[0],
        products: o.items_pedido.map((item: any) => ({
          name: item.nombre || 'Producto',
          quantity: item.cantidad,
          price: item.precio || 0
        }))
      })));
    }
  };

  const createOrder = async (items: any[], total: number) => {
    if (!user) throw new Error('Usuario no autenticado');

    // Mapear cart items al formato JSONB que espera el RPC
    const mappedItems = items.map(item => ({
      tipo: item.tipo || 'cafe',
      item_id: item.id, // Si no es UUID, el RPC lo manejará como NULL
      cantidad: item.quantity || 1,
      precio: item.price || 0,
      nombre: item.name
    }));

    const { data: pedidoId, error } = await supabase.rpc('create_order_transactional', {
      p_total: total,
      p_items: mappedItems
    });

    if (error) {
      console.error('Error en RPC create_order_transactional:', error);
      throw error;
    }

    console.log('Pedido creado con ID:', pedidoId);
    await refreshOrders();
  };

  const updateOrderStatus = async (id: string, status: Order['status']) => {
    const { error } = await supabase
      .from('pedidos')
      .update({ status })
      .eq('id', id);

    if (error) throw error;
    await refreshOrders();
  };

  // ============================================
  // EXPERIENCE BOOKINGS
  // ============================================

  const refreshBookings = async () => {
    // En este esquema, las reservas son items_pedido de tipo 'experiencia'
    // Para simplificar la UI actual, podríamos filtrar de pedidos
    await refreshOrders();
  };

  const createExperienceBooking = async (booking: Omit<ExperienceBooking, 'id' | 'date'>) => {
    // Usar la misma lógica de create-order para consistencia
    await createOrder([{
      tipo: 'experiencia',
      item_id: (booking as any).experienceId, // Asumiendo que el componente pasa esto
      cantidad: booking.visitors,
      price: booking.total / booking.visitors
    }], booking.total);
  };

  const updateBookingStatus = async (id: string, status: ExperienceBooking['status']) => {
    // Mapear status de reserva a status de pedido
    const orderStatus = status === 'confirmed' ? 'confirmado' : 'pendiente';
    await updateOrderStatus(id, orderStatus as any);
  };

  // ============================================
  // CART
  // ============================================

  const addToCart = (item: CartItem) => {
    setCart((prev: CartItem[]) => {
      const existing = prev.find((i: CartItem) =>
        i.id === item.id &&
        i.weight === item.weight &&
        i.grind === item.grind
      );
      if (existing) {
        return prev.map((i: CartItem) =>
          i.id === item.id && i.weight === item.weight && i.grind === item.grind
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev: CartItem[]) => prev.filter((item: CartItem) => item.id !== id));
  };

  const updateCartItem = (id: string, quantity: number) => {
    setCart((prev: CartItem[]) => prev.map((item: CartItem) =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const addBooking = (booking: Booking) => {
    setBookings((prev: Booking[]) => [...prev, booking]);
  };

  const cartCount = cart.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      loading,
      // Auth
      signIn,
      signUp,
      signOut,
      // Cart
      cart,
      addToCart,
      removeFromCart,
      updateCartItem,
      clearCart,
      cartCount,
      // Bookings
      bookings,
      addBooking,
      notificationCount,
      // Products
      products,
      refreshProducts,
      addProduct,
      updateProduct,
      deleteProduct,
      // Experiences
      experiences,
      refreshExperiences,
      addExperience,
      updateExperience,
      deleteExperience,
      // Orders
      orders,
      refreshOrders,
      createOrder,
      updateOrderStatus,
      // Experience Bookings
      experienceBookings,
      refreshBookings,
      createExperienceBooking,
      updateBookingStatus
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}