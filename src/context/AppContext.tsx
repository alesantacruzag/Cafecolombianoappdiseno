import { createContext, useContext, useState, ReactNode } from 'react';

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
  capacity?: number;
  status: 'active' | 'inactive';
  destination: string; // Destino de la experiencia
  location?: string; // Ubicación específica
  category?: 'tours' | 'gastronomia' | 'naturaleza' | 'cultura' | 'aventura';
  badge?: { text: string; color: string };
}

export interface Order {
  id: string;
  customer: string;
  customerEmail: string;
  items: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
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
  role: 'user' | 'admin';
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
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
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

// Mock data inicial
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Café Quindío Premium',
    price: 26000,
    stock: 45,
    description: 'Café de altura del Quindío con notas frutales',
    image: 'https://images.unsplash.com/photo-1763924996486-aa3aeacaf15e?w=400',
    status: 'active',
    category: 'Premium'
  },
  {
    id: '2',
    name: 'Buenavista Especial',
    price: 40800,
    stock: 12,
    description: 'Variedad Caturra con perfil chocolate y caramelo',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400',
    status: 'low',
    category: 'Especial'
  },
  {
    id: '3',
    name: 'Delirante Suave',
    price: 26000,
    stock: 2,
    description: 'Perfil suave con acidez media',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    status: 'low',
    category: 'Suave'
  },
  {
    id: '4',
    name: 'Guanes Orgánico',
    price: 31000,
    stock: 0,
    description: 'Café orgánico certificado',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    status: 'out',
    category: 'Orgánico'
  }
];

const MOCK_EXPERIENCES: Experience[] = [
  // QUINDÍO
  {
    id: '1',
    name: 'Tour "Del Grano a la Taza"',
    price: 65000,
    description: 'Recorrido completo por el proceso del café, desde la planta hasta tu taza',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
    bookings: 8,
    duration: '3 horas',
    capacity: 15,
    status: 'active',
    destination: 'Quindío',
    location: 'Finca Cafetera',
    category: 'tours',
    badge: { text: 'Popular', color: 'blue' }
  },
  {
    id: '2',
    name: 'Cata de Café Especial',
    price: 45000,
    description: 'Aprende a catar diferentes perfiles de café de especialidad',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    bookings: 12,
    duration: '2 horas',
    capacity: 10,
    status: 'active',
    destination: 'Quindío',
    location: 'Finca Cafetera',
    category: 'gastronomia'
  },
  {
    id: '3',
    name: 'Taller de Barista Profesional',
    price: 80000,
    description: 'Certificación básica de barismo con expertos',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    bookings: 5,
    duration: '4 horas',
    capacity: 8,
    status: 'active',
    destination: 'Quindío',
    location: 'Finca Cafetera',
    category: 'gastronomia'
  },
  {
    id: '4',
    name: 'Paseo en Jeep Willys Cafetero',
    price: 55000,
    description: 'Recorrido tradicional en Jeep por las fincas cafeteras del Quindío',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400',
    bookings: 15,
    duration: '4 horas',
    capacity: 20,
    status: 'active',
    destination: 'Quindío',
    location: 'Finca Cafetera',
    category: 'aventura'
  },
  {
    id: '5',
    name: 'Desayuno Campesino Tradicional',
    price: 35000,
    description: 'Disfruta de un auténtico desayuno paisa en finca cafetera',
    image: 'https://images.unsplash.com/photo-1644753787071-8933b5daed2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBicmVha2Zhc3QlMjBlZ2dzJTIwYXJlcGF8ZW58MXx8fHwxNzcxNzY5ODQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gastronomia',
    destination: 'Quindío',
    location: 'Finca El Descanso, Quindío',
    duration: '2 horas'
  },

  // SALENTO
  {
    id: '6',
    name: 'Senderismo Valle de Cocora',
    price: 50000,
    description: 'Caminata guiada entre las palmas de cera más altas del mundo',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    bookings: 28,
    duration: '5 horas',
    capacity: 15,
    status: 'active',
    destination: 'Salento',
    location: 'Valle de Cocora',
    category: 'naturaleza',
    badge: { text: 'Más vendido', color: 'blue' }
  },
  {
    id: '7',
    name: 'Tour Calles Coloniales Salento',
    price: 25000,
    description: 'Recorrido por el pueblo más pintoresco del Eje Cafetero',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400',
    bookings: 18,
    duration: '2 horas',
    capacity: 25,
    status: 'active',
    destination: 'Salento',
    location: 'Centro Histórico Salento',
    category: 'cultura'
  },
  {
    id: '8',
    name: 'Cabalgata Montañas Cafeteras',
    price: 70000,
    description: 'Paseo a caballo por senderos cafeteros con vistas espectaculares',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400',
    bookings: 10,
    duration: '3 horas',
    capacity: 12,
    status: 'active',
    destination: 'Salento',
    location: 'Montañas Salento',
    category: 'aventura'
  },

  // FILANDIA
  {
    id: '9',
    name: 'Ruta del Café en Filandia',
    price: 60000,
    description: 'Experiencia completa de café en el pueblo de los colores',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400',
    bookings: 14,
    duration: '3.5 horas',
    capacity: 18,
    status: 'active',
    destination: 'Filandia',
    location: 'Centro Filandia',
    category: 'tours'
  },
  {
    id: '10',
    name: 'Mirador Colina Iluminada',
    price: 20000,
    description: 'Visita guiada al mirador más hermoso de Filandia',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    bookings: 25,
    duration: '1.5 horas',
    capacity: 30,
    status: 'active',
    destination: 'Filandia',
    location: 'Mirador Colina Iluminada',
    category: 'naturaleza'
  },
  {
    id: '11',
    name: 'Artesanías y Café Tradicional',
    price: 40000,
    description: 'Taller de artesanías locales con degustación de café',
    image: 'https://images.unsplash.com/photo-1610337673044-720471f83677?w=400',
    bookings: 8,
    duration: '2.5 horas',
    capacity: 15,
    status: 'active',
    destination: 'Filandia',
    location: 'Centro Filandia',
    category: 'gastronomia'
  },

  // PIJAO
  {
    id: '12',
    name: 'Finca Ecológica Pijao',
    price: 55000,
    description: 'Tour por finca con agricultura sostenible y café orgánico',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    bookings: 12,
    duration: '4 horas',
    capacity: 20,
    status: 'active',
    destination: 'Pijao',
    location: 'Finca Ecológica',
    category: 'tours'
  },
  {
    id: '13',
    name: 'Caminata Ecológica Río Verde',
    price: 35000,
    description: 'Senderismo ecológico con avistamiento de aves',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
    bookings: 9,
    duration: '3 horas',
    capacity: 15,
    status: 'active',
    destination: 'Pijao',
    location: 'Río Verde',
    category: 'naturaleza'
  },

  // RISARALDA
  {
    id: '14',
    name: 'Parque Nacional Natural Los Nevados',
    price: 120000,
    description: 'Expedición guiada a los nevados con vista a volcanes',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400',
    bookings: 6,
    duration: '8 horas',
    capacity: 10,
    status: 'active',
    destination: 'Risaralda',
    location: 'Parque Nacional Natural Los Nevados',
    category: 'naturaleza'
  },
  {
    id: '15',
    name: 'Hacienda Cafetera Premium Risaralda',
    price: 85000,
    description: 'Experiencia VIP en hacienda con almuerzo gourmet',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
    bookings: 11,
    duration: '5 horas',
    capacity: 12,
    status: 'active',
    destination: 'Risaralda',
    location: 'Hacienda Cafetera Premium',
    category: 'tours'
  },

  // PEREIRA
  {
    id: '16',
    name: 'City Tour Pereira Moderna',
    price: 30000,
    description: 'Recorrido urbano por la capital de Risaralda',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400',
    bookings: 20,
    duration: '3 horas',
    capacity: 25,
    status: 'active',
    destination: 'Pereira',
    location: 'Centro Pereira',
    category: 'cultura'
  },
  {
    id: '17',
    name: 'Parque Consotá y Avistamiento Aves',
    price: 45000,
    description: 'Naturaleza y biodiversidad en el corazón de Pereira',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400',
    bookings: 13,
    duration: '4 hours',
    capacity: 18,
    status: 'active',
    destination: 'Pereira',
    location: 'Parque Consotá',
    category: 'naturaleza'
  },
  {
    id: '18',
    name: 'Gastronomía Pereirense',
    price: 50000,
    description: 'Tour gastronómico por los mejores restaurantes locales',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
    bookings: 16,
    duration: '3.5 horas',
    capacity: 20,
    status: 'active',
    destination: 'Pereira',
    location: 'Centro Pereira',
    category: 'gastronomia'
  },

  // SANTA ROSA DE CABAL
  {
    id: '19',
    name: 'Termas de Santa Rosa',
    price: 65000,
    description: 'Relájate en aguas termales naturales rodeado de naturaleza',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
    bookings: 30,
    duration: '4 horas',
    capacity: 40,
    status: 'active',
    destination: 'Santa Rosa de Cabal',
    location: 'Termas de Santa Rosa',
    category: 'naturaleza',
    badge: { text: 'Más vendido', color: 'blue' }
  },
  {
    id: '20',
    name: 'Cascadas y Café Santa Rosa',
    price: 55000,
    description: 'Visita cascadas naturales con tour cafetero incluido',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400',
    bookings: 14,
    duration: '5 horas',
    capacity: 15,
    status: 'active',
    destination: 'Santa Rosa de Cabal',
    location: 'Cascadas',
    category: 'tours'
  },

  // CALDAS
  {
    id: '21',
    name: 'Recorrido Histórico Haciendas',
    price: 75000,
    description: 'Tour por haciendas históricas cafeteras de Caldas',
    image: 'https://images.unsplash.com/photo-1567726843492-df0484bb0b05?w=400',
    bookings: 7,
    duration: '6 horas',
    capacity: 15,
    status: 'active',
    destination: 'Caldas',
    location: 'Haciendas Históricas',
    category: 'tours'
  },
  {
    id: '22',
    name: 'Volcanes y Paisajes Caldenses',
    price: 90000,
    description: 'Expedición fotográfica a paisajes volcánicos únicos',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    bookings: 5,
    duration: '7 horas',
    capacity: 10,
    status: 'active',
    destination: 'Caldas',
    location: 'Parque Natural',
    category: 'naturaleza'
  },

  // MANIZALES
  {
    id: '23',
    name: 'Recorrido Cable Aéreo Manizales',
    price: 40000,
    description: 'Vista panorámica de la ciudad desde el teleférico',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400',
    bookings: 24,
    duration: '2 horas',
    capacity: 30,
    status: 'active',
    destination: 'Manizales',
    location: 'Cable Aéreo',
    category: 'tours'
  },
  {
    id: '24',
    name: 'Catedral Basílica y Centro Histórico',
    price: 25000,
    description: 'Tour cultural por la arquitectura emblemática de Manizales',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400',
    bookings: 18,
    duration: '3 horas',
    capacity: 25,
    status: 'active',
    destination: 'Manizales',
    location: 'Centro Histórico',
    category: 'cultura'
  },
  {
    id: '25',
    name: 'Feria del Café de Manizales',
    price: 100000,
    description: 'Experiencia completa en la feria más importante del café',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    bookings: 35,
    duration: '8 horas',
    capacity: 50,
    status: 'active',
    destination: 'Manizales',
    location: 'Feria del Café',
    category: 'tours',
    badge: { text: 'Popular', color: 'blue' }
  },

  // CHINCHINÁ
  {
    id: '26',
    name: 'Hacienda Guayabal Chinchiná',
    price: 70000,
    description: 'Tour exclusivo en una de las haciendas más premiadas',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400',
    bookings: 10,
    duration: '4 horas',
    capacity: 12,
    status: 'active',
    destination: 'Chinchiná',
    location: 'Hacienda Guayabal',
    category: 'tours'
  },
  {
    id: '27',
    name: 'Procesamiento Industrial del Café',
    price: 60000,
    description: 'Conoce el proceso industrial del café colombiano',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
    bookings: 8,
    duration: '3 horas',
    capacity: 20,
    status: 'active',
    destination: 'Chinchiná',
    location: 'Planta Industrial',
    category: 'tours'
  },
  {
    id: '28',
    name: 'Cata de Cafés Especiales Chinchiná',
    price: 50000,
    description: 'Degustación de los mejores cafés de la región',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    bookings: 12,
    duration: '2.5 horas',
    capacity: 15,
    status: 'active',
    destination: 'Chinchiná',
    location: 'Laboratorio de Catación',
    category: 'gastronomia'
  }
];

const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-001',
    customer: 'María García',
    customerEmail: 'maria@example.com',
    items: 2,
    total: 52000,
    status: 'processing',
    date: '2026-02-20',
    products: [
      { name: 'Café Quindío Premium', quantity: 2, price: 26000 }
    ]
  },
  {
    id: 'ORD-002',
    customer: 'Juan Pérez',
    customerEmail: 'juan@example.com',
    items: 1,
    total: 40800,
    status: 'shipped',
    date: '2026-02-19',
    products: [
      { name: 'Buenavista Especial', quantity: 1, price: 40800 }
    ]
  }
];

const MOCK_BOOKINGS: ExperienceBooking[] = [
  {
    id: 'RES-001',
    customer: 'Ana López',
    customerEmail: 'ana@example.com',
    experienceName: 'Tour "Del Grano a la Taza"',
    experienceDate: '2026-03-15',
    visitors: 4,
    total: 260000,
    status: 'confirmed',
    date: '2026-02-18'
  }
];

// Usuarios demo
const DEMO_USERS = {
  admin: {
    id: '1',
    email: 'admin@origen.com',
    name: 'Admin Origen',
    role: 'admin' as const,
    password: 'admin123'
  },
  user: {
    id: '2',
    email: 'user@origen.com',
    name: 'Usuario Demo',
    role: 'user' as const,
    password: 'user123'
  }
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [notificationCount] = useState(2);
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [experiences, setExperiences] = useState<Experience[]>(MOCK_EXPERIENCES);
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  const [experienceBookings, setExperienceBookings] = useState<ExperienceBooking[]>(MOCK_BOOKINGS);

  // ============================================
  // AUTH FUNCTIONS (DEMO)
  // ============================================

  const signIn = async (email: string, password: string) => {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 500));

    const demoUser = Object.values(DEMO_USERS).find(
      u => u.email === email && u.password === password
    );

    if (demoUser) {
      const { password: _, ...userWithoutPassword } = demoUser;
      setUser(userWithoutPassword);
    } else {
      throw new Error('Credenciales inválidas');
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name: fullName,
      role: 'user'
    };
    
    setUser(newUser);
  };

  const signOut = async () => {
    setUser(null);
    setCart([]);
  };

  // ============================================
  // PRODUCTS
  // ============================================

  const refreshProducts = async () => {
    // En modo demo, no hace nada
    await new Promise(resolve => setTimeout(resolve, 100));
  };

  const addProduct = async (product: Omit<Product, 'id'>) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const newProduct: Product = {
      ...product,
      id: Date.now().toString()
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = async (id: string, updates: Partial<Product>) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, ...updates } : p))
    );
  };

  const deleteProduct = async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  // ============================================
  // EXPERIENCES
  // ============================================

  const refreshExperiences = async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
  };

  const addExperience = async (experience: Omit<Experience, 'id' | 'bookings'>) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const newExperience: Experience = {
      ...experience,
      id: Date.now().toString(),
      bookings: 0
    };
    setExperiences(prev => [...prev, newExperience]);
  };

  const updateExperience = async (id: string, updates: Partial<Experience>) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    setExperiences(prev =>
      prev.map(e => (e.id === id ? { ...e, ...updates } : e))
    );
  };

  const deleteExperience = async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    setExperiences(prev => prev.filter(e => e.id !== id));
  };

  // ============================================
  // ORDERS
  // ============================================

  const refreshOrders = async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
  };

  const createOrder = async (items: any[], total: number) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newOrder: Order = {
      id: `ORD-${Date.now()}`,
      customer: user?.name || 'Cliente',
      customerEmail: user?.email || '',
      items: items.length,
      total,
      status: 'pending',
      date: new Date().toISOString().split('T')[0],
      products: items.map(item => ({
        name: item.name || item.product_name,
        quantity: item.quantity,
        price: item.price
      }))
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
  };

  const updateOrderStatus = async (id: string, status: Order['status']) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    setOrders(prev =>
      prev.map(o => (o.id === id ? { ...o, status } : o))
    );
  };

  // ============================================
  // EXPERIENCE BOOKINGS
  // ============================================

  const refreshBookings = async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
  };

  const createExperienceBooking = async (booking: Omit<ExperienceBooking, 'id' | 'date'>) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newBooking: ExperienceBooking = {
      ...booking,
      id: `RES-${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };

    setExperienceBookings(prev => [newBooking, ...prev]);
  };

  const updateBookingStatus = async (id: string, status: ExperienceBooking['status']) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    setExperienceBookings(prev =>
      prev.map(b => (b.id === id ? { ...b, status } : b))
    );
  };

  // ============================================
  // CART
  // ============================================

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => 
        i.id === item.id && 
        i.weight === item.weight && 
        i.grind === item.grind
      );
      if (existing) {
        return prev.map(i => 
          i.id === item.id && i.weight === item.weight && i.grind === item.grind
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateCartItem = (id: string, quantity: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const addBooking = (booking: Booking) => {
    setBookings(prev => [...prev, booking]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

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