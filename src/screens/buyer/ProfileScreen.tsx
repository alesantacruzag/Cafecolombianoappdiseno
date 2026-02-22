import { useApp } from '../../context/AppContext';
import BottomNav from '../../components/BottomNav';
import type { Screen } from '../../App';
import { 
  Package, 
  Ticket, 
  Heart, 
  MapPin, 
  CreditCard, 
  Bell, 
  HelpCircle, 
  Settings, 
  ChevronRight,
  ShoppingBag,
  Award,
  User
} from 'lucide-react';

interface ProfileScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const { user, setUser, bookings } = useApp();

  const handleLogout = () => {
    setUser(null);
    onNavigate('auth');
  };

  const menuItems = [
    { icon: <Package size={20} />, label: 'Mis pedidos', count: 3, action: () => onNavigate('orders') },
    { icon: <Ticket size={20} />, label: 'Mis reservas', count: bookings.length, action: () => onNavigate('bookings') },
    { icon: <Heart size={20} />, label: 'Favoritos', count: 5, action: () => {} },
    { icon: <MapPin size={20} />, label: 'Direcciones guardadas', action: () => {} },
    { icon: <CreditCard size={20} />, label: 'Métodos de pago', action: () => {} },
    { icon: <Bell size={20} />, label: 'Notificaciones', action: () => {} },
    { icon: <HelpCircle size={20} />, label: 'Ayuda y soporte', action: () => {} },
    { icon: <Settings size={20} />, label: 'Configuración', action: () => {} }
  ];

  const stats = [
    { label: 'Compras', value: '12', period: 'Este año', color: '#f72585', icon: <ShoppingBag size={18} /> },
    { label: 'Puntos', value: '850', period: 'Nivel Oro', color: '#4cc9f0', icon: <Award size={18} /> }
  ];

  return (
    <div className="relative w-full h-full bg-[#f9fafb] flex flex-col">
      
      {/* Header */}
      <div className="bg-white px-4 py-5 flex items-center justify-between border-b border-[#e9eaeb]">
        <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#181d27]">Mi Cuenta</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-6 space-y-8">
          {/* Profile Card */}
          <div className="bg-[#f72585] rounded-[24px] p-6 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="relative flex items-center gap-5">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl shadow-inner border-2 border-white/20 text-[#f72585]">
                <User size={32} />
              </div>
              <div>
                <h2 className="font-['Poppins:SemiBold',sans-serif] text-[20px] leading-tight">{user?.name || 'Usuario'}</h2>
                <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-white/80">{user?.email || 'usuario@origen.co'}</p>
                <div className="mt-2 inline-block px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full">
                  <span className="font-['Poppins:Medium',sans-serif] text-[11px] uppercase tracking-wider">Miembro Origen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white border border-[#e9eaeb] rounded-[16px] p-4 flex flex-col items-center text-center shadow-sm">
                <div 
                  className="w-10 h-10 rounded-full mb-3 flex items-center justify-center" 
                  style={{ backgroundColor: `${stat.color}15`, color: stat.color }} 
                >
                  {stat.icon}
                </div>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#181d27] mb-1">{stat.value}</p>
                <p className="font-['Poppins:Medium',sans-serif] text-[10px] text-[#717680] uppercase tracking-tighter">{stat.label}</p>
                <div className="mt-2 py-0.5 px-2 bg-[#f2f4f7] rounded-full">
                  <p className="font-['Poppins:Medium',sans-serif] text-[9px] text-[#475467]">{stat.period}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Menu Items */}
          <div className="space-y-3">
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#717680] uppercase tracking-widest px-1 mb-2">Mi Actividad</h3>
            <div className="bg-white border border-[#e9eaeb] rounded-[24px] overflow-hidden shadow-sm">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className={`w-full flex items-center justify-between p-4 hover:bg-[#f9fafb] transition-colors ${
                    index !== menuItems.length - 1 ? 'border-b border-[#f2f4f7]' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#fef2f8] text-[#f72585] rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#344054]">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.count !== undefined && (
                      <span className="bg-[#f72585] text-white text-[12px] font-['Poppins:SemiBold',sans-serif] px-2.5 py-0.5 rounded-full">
                        {item.count}
                      </span>
                    )}
                    <ChevronRight size={18} className="text-[#98a2b3]" />
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="pb-8">
            <button
              onClick={handleLogout}
              className="w-full bg-[#f72585] border border-[#f72585] rounded-[32px] px-5 py-4 font-['Poppins:SemiBold',sans-serif] text-[16px] leading-[24px] text-white hover:bg-[#e01575] transition-colors shadow-lg shadow-[#f72585]/20"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>

      <BottomNav activeTab="profile" onNavigate={onNavigate} />
    </div>
  );
}