import { useApp } from '../../context/AppContext';
import BottomNav from '../../components/BottomNav';
import type { Screen } from '../../App';
import { Calendar, MapPin, Users, Clock, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

interface BookingsScreenProps {
  onNavigate: (screen: Screen) => void;
}

// Mock data for bookings
const mockBookings = [
  {
    id: 'RES-001',
    name: 'Tour del Café - Experiencia Completa',
    location: 'Finca El Paraíso, Quindío',
    date: '25 Feb 2026',
    time: '09:00 AM',
    guests: 2,
    status: 'Confirmada',
    statusColor: 'bg-[#cee90d]',
    statusTextColor: 'text-[#5f6b05]',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop'
  },
  {
    id: 'RES-002',
    name: 'Cata de Café Premium',
    location: 'Café Origen, Medellín',
    date: '18 Feb 2026',
    time: '03:00 PM',
    guests: 4,
    status: 'Confirmada',
    statusColor: 'bg-[#cee90d]',
    statusTextColor: 'text-[#5f6b05]',
    price: 80000,
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop'
  },
  {
    id: 'RES-003',
    name: 'Taller de Barismo',
    location: 'Escuela de Café, Bogotá',
    date: '10 Ene 2026',
    time: '10:00 AM',
    guests: 1,
    status: 'Completada',
    statusColor: 'bg-[#717680]',
    statusTextColor: 'text-white',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop'
  }
];

export default function BookingsScreen({ onNavigate }: BookingsScreenProps) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      
      {/* Header */}
      <div className="bg-white border-b border-[#e9eaeb] px-4 py-4">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('profile')} className="p-1">
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
            Mis Reservas
          </h1>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 py-4 space-y-4">
          {mockBookings.map((booking) => (
            <div 
              key={booking.id} 
              className="bg-white border border-[#e9eaeb] rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Booking Image */}
              <div className="h-[140px] w-full bg-[#f9f9f9] overflow-hidden">
                <ImageWithFallback 
                  src={booking.image}
                  alt={booking.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                {/* Status Badge */}
                <div className="mb-3">
                  <div className={`${booking.statusColor} px-3 py-1 rounded-full inline-block`}>
                    <p className={`font-['Poppins:SemiBold',sans-serif] text-[12px] ${booking.statusTextColor}`}>
                      {booking.status}
                    </p>
                  </div>
                </div>

                {/* Booking Title */}
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black mb-3">
                  {booking.name}
                </h3>

                {/* Booking Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#717680]" />
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">
                      {booking.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#717680]" />
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">
                      {booking.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#717680]" />
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">
                      {booking.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#717680]" />
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">
                      {booking.guests} {booking.guests === 1 ? 'persona' : 'personas'}
                    </p>
                  </div>
                </div>

                {/* Booking Footer */}
                <div className="pt-4 border-t border-[#e9eaeb] flex items-center justify-between">
                  <div>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680] mb-1">
                      Total pagado
                    </p>
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">
                      ${booking.price.toLocaleString('es-CO')}
                    </p>
                  </div>
                  <button className="flex items-center gap-2 bg-[#f9f9f9] px-4 py-2 rounded-[32px]">
                    <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-black">
                      Ver detalles
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#717680]" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Empty state if no bookings */}
          {mockBookings.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
              <Calendar className="w-20 h-20 text-[#d5d7da] mb-4" />
              <h2 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-black mb-2">
                No tienes reservas
              </h2>
              <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680] mb-6">
                Descubre experiencias únicas y reserva tu próxima aventura cafetera
              </p>
              <button
                onClick={() => onNavigate('experiences')}
                className="bg-[#f72585] border border-[#f72585] rounded-[32px] px-8 py-3 font-['Poppins:SemiBold',sans-serif] text-[16px] text-white"
              >
                Explorar experiencias
              </button>
            </div>
          )}
        </div>
      </div>

      <BottomNav activeTab="profile" onNavigate={onNavigate} />
    </div>
  );
}