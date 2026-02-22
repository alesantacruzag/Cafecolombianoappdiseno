import { useApp } from '../context/AppContext';
import { Home, ShoppingBag, ShoppingCart, MapPin, User, LayoutDashboard, Package, ClipboardList } from 'lucide-react';
import type { Screen } from '../App';

interface BottomNavProps {
  activeTab: string;
  onNavigate: (screen: Screen) => void;
  role?: 'buyer' | 'admin';
}

export default function BottomNav({ activeTab, onNavigate, role = 'buyer' }: BottomNavProps) {
  const { cartCount } = useApp();

  const buyerTabs = [
    { 
      id: 'home', 
      label: 'Inicio', 
      icon: Home,
      screen: 'buyer-home' as Screen
    },
    { 
      id: 'shop', 
      label: 'Tienda', 
      icon: ShoppingBag,
      screen: 'shop' as Screen
    },
    { 
      id: 'cart', 
      label: 'Carrito', 
      icon: ShoppingCart,
      screen: 'cart' as Screen,
      special: true
    },
    { 
      id: 'plans', 
      label: 'Planes', 
      icon: MapPin,
      screen: 'experiences-home' as Screen
    },
    { 
      id: 'profile', 
      label: 'Mi cuenta', 
      icon: User,
      screen: 'profile' as Screen
    }
  ];

  const adminTabs = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      screen: 'admin-dashboard' as Screen
    },
    {
      id: 'products',
      label: 'Productos',
      icon: Package,
      screen: 'admin-products' as Screen
    },
    {
      id: 'orders',
      label: 'Pedidos',
      icon: ClipboardList,
      screen: 'admin-orders' as Screen
    },
    {
      id: 'profile',
      label: 'Perfil',
      icon: User,
      screen: 'admin-profile' as Screen
    }
  ];

  const tabs = role === 'admin' ? adminTabs : buyerTabs;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e9eaeb] flex flex-col w-full z-50 safe-area-bottom">
      {/* Tab Bar */}
      <div className={`flex items-end px-4 gap-4 ${role === 'admin' ? 'h-[64px]' : 'h-[57px]'}`}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          if (tab.special && role === 'buyer') {
            // Special cart tab with circular background
            return (
              <button
                key={tab.id}
                onClick={() => onNavigate(tab.screen)}
                className="flex-1 flex flex-col gap-1 items-center pb-1 pt-2 min-w-0 relative"
              >
                <div className="relative bg-[#fafafa] rounded-full w-12 h-12 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#a4a7ae]" strokeWidth={1.8} />
                  {cartCount > 0 && activeTab !== 'cart' && (
                    <div className="absolute -top-0.5 -right-0.5 bg-[#f72585] text-white text-[10px] font-['Poppins:SemiBold',sans-serif] rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                      {cartCount}
                    </div>
                  )}
                </div>
                <p className="font-['Poppins:Regular',sans-serif] text-[10px] leading-[14px] text-[#717680]">
                  {tab.label}
                </p>
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.screen)}
              className="flex-1 flex flex-col gap-1 items-center pb-2 pt-2 min-w-0 relative"
            >
              {/* Active indicator - top border for buyer, color for admin */}
              {isActive && role === 'buyer' && (
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#f72585]" />
              )}
              
              <Icon 
                className={`w-6 h-6 ${isActive ? 'text-[#f72585]' : 'text-[#a4a7ae]'}`} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <p className={`font-['Poppins:Regular',sans-serif] text-[10px] leading-[14px] ${isActive ? 'text-[#f72585] font-semibold' : 'text-[#717680]'}`}>
                {tab.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}