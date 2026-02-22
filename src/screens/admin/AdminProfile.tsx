import { useApp } from '../../context/AppContext';
import BottomNav from '../../components/BottomNav';
import type { Screen } from '../../App';
import { ChevronRight, Bell, Settings, Package, Ticket, ClipboardList, Wallet, Store, BarChart3, Star } from 'lucide-react';

interface AdminProfileProps {
  onNavigate: (screen: Screen) => void;
}

export default function AdminProfile({ onNavigate }: AdminProfileProps) {
  const { user, setUser, products, experiences } = useApp();

  const handleLogout = () => {
    setUser(null);
    onNavigate('auth');
  };

  const menuItems = [
    { icon: <Package size={20} />, label: 'Mis productos', count: products.length, action: () => onNavigate('admin-products') },
    { icon: <Ticket size={20} />, label: 'Mis experiencias', count: experiences.length, action: () => onNavigate('admin-products') },
    { icon: <ClipboardList size={20} />, label: 'Historial de ventas', action: () => onNavigate('admin-orders') },
    { icon: <Wallet size={20} />, label: 'Pagos y comisiones' },
    { icon: <Store size={20} />, label: 'Información de la finca' },
    { icon: <BarChart3 size={20} />, label: 'Estadísticas' },
    { icon: <Bell size={20} />, label: 'Notificaciones' },
    { icon: <Settings size={20} />, label: 'Configuración' }
  ];

  const stats = [
    { label: 'Productos', value: products.length.toString(), period: products.filter(p => p.status === 'out').length + ' agotados', color: '#4361ee', icon: <Package size={18} /> },
    { label: 'Experiencias', value: experiences.length.toString(), period: experiences.reduce((sum, e) => sum + e.bookings, 0) + ' reservas', color: '#4cc9f0', icon: <Star size={18} /> }
  ];

  return (
    <div className="relative w-full h-full bg-[#f9fafb] flex flex-col">
      
      {/* Header */}
      <div className="bg-white px-4 py-5 flex items-center justify-between border-b border-[#e9eaeb]">
        <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#181d27]">Mi Perfil</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-6 space-y-8">
          {/* Profile Card */}
          <div className="bg-[#f72585] rounded-[24px] p-6 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="relative flex items-center gap-5">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl shadow-inner border-2 border-white/20">
                <span className="grayscale opacity-80">🌱</span>
              </div>
              <div>
                <h2 className="font-['Poppins:SemiBold',sans-serif] text-[20px] leading-tight">{user?.name || 'Carlos Ruiz'}</h2>
                <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-white/80">{user?.email || 'carlos.finca@origen.co'}</p>
                <div className="mt-2 inline-block px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full">
                  <span className="font-['Poppins:Medium',sans-serif] text-[11px] uppercase tracking-wider">Caficultor • Administrador</span>
                </div>
              </div>
            </div>
          </div>

          {/* Redesigned Stats Cards */}
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
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#717680] uppercase tracking-widest px-1 mb-2">Gestión de Negocio</h3>
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

      <BottomNav activeTab="profile" onNavigate={onNavigate} role="admin" />
    </div>
  );
}