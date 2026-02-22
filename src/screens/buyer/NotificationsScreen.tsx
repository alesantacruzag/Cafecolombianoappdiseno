import { useApp } from '../../context/AppContext';
import BottomNav from '../../components/BottomNav';
import type { Screen } from '../../App';
import { Package, Calendar, Tag as TagIcon, Heart, Bell } from 'lucide-react';

interface NotificationsScreenProps {
  onNavigate: (screen: Screen) => void;
}

const notifications = [
  {
    id: '1',
    type: 'order',
    icon: Package,
    iconBg: 'bg-[#24b15e]/10',
    iconColor: 'text-[#24b15e]',
    title: 'Pedido entregado',
    description: 'Tu pedido #ORD-001 ha sido entregado exitosamente',
    time: 'Hace 2 horas',
    unread: true
  },
  {
    id: '2',
    type: 'booking',
    icon: Calendar,
    iconBg: 'bg-[#f72585]/10',
    iconColor: 'text-[#f72585]',
    title: 'Recordatorio de reserva',
    description: 'Tu experiencia "Tour del Café" es mañana a las 9:00 AM',
    time: 'Hace 5 horas',
    unread: true
  },
  {
    id: '3',
    type: 'promo',
    icon: TagIcon,
    iconBg: 'bg-[#c4f00f]/20',
    iconColor: 'text-[#58660e]',
    title: '20% de descuento en accesorios',
    description: 'Aprovecha el descuento en toda nuestra colección de accesorios',
    time: 'Hace 1 día',
    unread: false
  },
  {
    id: '4',
    type: 'order',
    icon: Package,
    iconBg: 'bg-[#f72585]/10',
    iconColor: 'text-[#f72585]',
    title: 'Pedido en camino',
    description: 'Tu pedido #ORD-002 está en camino. Llegará hoy antes de las 6:00 PM',
    time: 'Hace 1 día',
    unread: false
  },
  {
    id: '5',
    type: 'favorite',
    icon: Heart,
    iconBg: 'bg-[#ff6b9d]/10',
    iconColor: 'text-[#ff6b9d]',
    title: 'Producto disponible',
    description: 'El Café Delirante que te gusta ya está disponible nuevamente',
    time: 'Hace 2 días',
    unread: false
  },
  {
    id: '6',
    type: 'booking',
    icon: Calendar,
    iconBg: 'bg-[#24b15e]/10',
    iconColor: 'text-[#24b15e]',
    title: 'Reserva confirmada',
    description: 'Tu reserva para "Cata de Café Premium" ha sido confirmada',
    time: 'Hace 3 días',
    unread: false
  }
];

export default function NotificationsScreen({ onNavigate }: NotificationsScreenProps) {
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      
      {/* Header */}
      <div className="bg-white border-b border-[#e9eaeb] px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('buyer-home')} className="p-1">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path 
                  d="M19 12H5M5 12L12 19M5 12L12 5" 
                  stroke="black" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h1 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">
              Notificaciones
            </h1>
          </div>
          
          {unreadCount > 0 && (
            <button className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#f72585]">
              Marcar como leídas
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {notifications.length > 0 ? (
          <div className="divide-y divide-[#e9eaeb]">
            {notifications.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <button
                  key={notification.id}
                  className={`w-full px-4 py-4 flex gap-3 hover:bg-[#f9f9f9] transition-colors text-left ${
                    notification.unread ? 'bg-[#fff5fa]' : ''
                  }`}
                >
                  <div className={`${notification.iconBg} rounded-full p-2 flex-shrink-0 h-10 w-10 flex items-center justify-center`}>
                    <IconComponent className={`w-5 h-5 ${notification.iconColor}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black">
                        {notification.title}
                      </p>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-[#f72585] rounded-full flex-shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680] mb-1 line-clamp-2">
                      {notification.description}
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#a4a7ae]">
                      {notification.time}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
            <Bell className="w-20 h-20 text-[#d5d7da] mb-4" />
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-black mb-2">
              No tienes notificaciones
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680]">
              Te mantendremos informado sobre tus pedidos y reservas
            </p>
          </div>
        )}
      </div>
    </div>
  );
}