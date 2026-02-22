import BottomNav from '../../components/BottomNav';
import type { Screen } from '../../App';
import { User } from 'lucide-react';

interface AdminDashboardProps {
  onNavigate: (screen: Screen) => void;
}

import { useMemo } from 'react';
import { useApp } from '../../context/AppContext';

export default function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const { orders, products, experienceBookings, refreshOrders, refreshProducts, refreshBookings } = useApp();

  useMemo(() => {
    refreshOrders();
    refreshProducts();
    refreshBookings();
  }, []);

  const today = new Date().toISOString().split('T')[0];
  const todayOrders = orders.filter(o => o.date === today);
  const totalSalesToday = todayOrders.reduce((sum, o) => sum + o.total, 0);

  const stats = [
    { label: 'Ventas hoy', value: `$${totalSalesToday.toLocaleString('es-CO')}`, change: '+12%', positive: true },
    { label: 'Pedidos', value: orders.length.toString(), change: '+5', positive: true },
    { label: 'Reservas', value: experienceBookings.length.toString(), change: '+3', positive: true },
    { label: 'Productos', value: products.length.toString(), change: `${products.filter(p => p.stock === 0).length} agotados`, positive: false }
  ];

  const quickActions = [
    { icon: '📦', label: 'Gestionar productos', screen: 'admin-products' as Screen },
    { icon: '🎫', label: 'Gestionar experiencias', screen: 'admin-experiences' as Screen },
    { icon: '📋', label: 'Ver pedidos', screen: 'admin-orders' as Screen },
    { icon: '📊', label: 'Reportes', screen: 'admin-dashboard' as Screen }
  ];

  const recentActivity = orders.slice(0, 3).map(o => ({
    type: 'order',
    text: `Pedido de ${o.customer}`,
    time: 'Reciente',
    amount: `$${o.total.toLocaleString('es-CO')}`
  }));

  return (
    <div className="relative w-full h-full bg-[#f9fafb] flex flex-col">

      <div className="bg-[#f72585] px-4 py-8 text-white rounded-b-[32px] shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-['Poppins:SemiBold',sans-serif] text-[26px]">Dashboard</h1>
            <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-white/80">Bienvenido, Caficultor</p>
          </div>
          <button
            onClick={() => onNavigate('admin-profile')}
            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all border border-white/20"
          >
            <User size={24} color="white" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-6 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white border border-[#e9eaeb] rounded-2xl p-4 shadow-sm">
                <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#717680] mb-2 uppercase tracking-tighter">{stat.label}</p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-[#181d27] mb-2">{stat.value}</p>
                <div className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-['Poppins:SemiBold',sans-serif] ${stat.positive ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                  }`}>
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[17px] text-[#181d27] mb-4">Acciones rápidas</h2>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(action.screen)}
                  className="bg-white border border-[#e9eaeb] rounded-2xl p-5 flex flex-col items-center gap-3 hover:bg-[#f9fafb] transition-all shadow-sm group"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">{action.icon}</span>
                  <span className="font-['Poppins:Medium',sans-serif] text-[13px] text-center text-[#344054]">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[17px] text-[#181d27] mb-4">Actividad reciente</h2>
            <div className="bg-white border border-[#e9eaeb] rounded-[24px] overflow-hidden shadow-sm">
              {[
                { type: 'order', text: 'Nuevo pedido de María G.', time: 'Hace 5 min', amount: '$52.000' },
                { type: 'booking', text: 'Reserva confirmada para tour', time: 'Hace 15 min', amount: '$65.000' },
                { type: 'order', text: 'Pedido enviado a Carlos M.', time: 'Hace 1 hora', amount: '$31.000' }
              ].map((activity, index) => (
                <div key={index} className={`flex items-center justify-between p-4 ${index !== 2 ? 'border-b border-[#f2f4f7]' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#f9fafb] rounded-full flex items-center justify-center text-xl">
                      {activity.type === 'order' ? '📦' : '🎫'}
                    </div>
                    <div>
                      <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#181d27]">{activity.text}</p>
                      <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">{activity.time}</p>
                    </div>
                  </div>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#181d27]">{activity.amount}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-4" />
        </div>
      </div>

      <BottomNav activeTab="dashboard" onNavigate={onNavigate} role="admin" />
    </div>
  );
}