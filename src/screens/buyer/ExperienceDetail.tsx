import { useState } from 'react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import BottomNav from '../../components/BottomNav';
import ProcessingModal from '../../components/ProcessingModal';
import SuccessModal from '../../components/SuccessModal';
import type { Screen } from '../../App';

interface ExperienceDetailProps {
  experience: any;
  onNavigate: (screen: Screen) => void;
}

export default function ExperienceDetail({ experience, onNavigate }: ExperienceDetailProps) {
  const [showProcessing, setShowProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBooking = () => {
    // Mostrar modal de procesamiento
    setShowProcessing(true);
    
    // Simular procesamiento de reserva (2-3 segundos)
    setTimeout(() => {
      setShowProcessing(false);
      // Mostrar modal de éxito
      setShowSuccess(true);
    }, 2500);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onNavigate('buyer-home');
  };

  const handleViewBookings = () => {
    setShowSuccess(false);
    onNavigate('bookings');
  };

  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      
      <div className="bg-white border-b border-[#e9eaeb] px-4 py-4">
        <button onClick={() => onNavigate('experiences-list')} className="p-1">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-[120px]">
        <div className="h-[250px] relative">
          <ImageWithFallback 
            src={experience?.image || 'https://images.unsplash.com/photo-1567726843492-df0484bb0b05?w=800'}
            alt={experience?.name || 'Experiencia'}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="px-4 py-6 space-y-6">
          <div>
            <h1 className="font-['Poppins:SemiBold',sans-serif] text-[24px] leading-[32px] text-black mb-2">
              {experience?.name || 'Tour "Del Grano a la Taza"'}
            </h1>
            <p className="font-['Poppins:Regular',sans-serif] text-[16px] text-[#717680]">
              {experience?.location || 'Finca La Esperanza, Armenia, Quindío'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="7.5" stroke="#717680" strokeWidth="1.5"/>
                <path d="M10 5.83333V10L12.5 12.5" stroke="#717680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680]">
                {experience?.duration || '2 horas'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d="M10 10.625C11.3807 10.625 12.5 9.50571 12.5 8.125C12.5 6.74429 11.3807 5.625 10 5.625C8.61929 5.625 7.5 6.74429 7.5 8.125C7.5 9.50571 8.61929 10.625 10 10.625Z" stroke="#717680" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.01675 7.07499C4.65841 -0.141677 15.3501 -0.133343 16.9834 7.08332C17.9417 11.3167 15.3084 14.9 13.0001 17.1167C11.3251 18.7333 8.67508 18.7333 6.99175 17.1167C4.69175 14.9 2.05841 11.3083 3.01675 7.07499Z" stroke="#717680" strokeWidth="1.67"/>
              </svg>
              <button className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#f72585] underline">Ver en mapa</button>
            </div>
          </div>

          <div className="h-px bg-[#e9eaeb]" />

          <div>
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black mb-3">Descripción</h3>
            <p className="font-['Poppins:Regular',sans-serif] text-[14px] leading-[22px] text-[#717680]">
              Vive una experiencia única recorriendo nuestra finca cafetera. Aprende todo el proceso del café desde la semilla hasta la taza, participa en la recolección de café y disfruta de una cata profesional guiada por nuestros expertos caficultores.
            </p>
          </div>

          <div>
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black mb-3">¿Qué incluye?</h3>
            <ul className="space-y-2">
              {['Tour guiado por la finca', 'Degustación de café', 'Snacks y refrigerios', 'Material educativo'].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                    <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#414651]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Bar - Above BottomNav */}
      <div className="absolute bottom-[57px] left-0 right-0 bg-white border-t border-[#e9eaeb] px-4 py-4 z-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680] mb-1">Desde</p>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-black leading-none">
              ${(experience?.price || 65000).toLocaleString('es-CO')}
              <span className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680]"> /persona</span>
            </p>
          </div>
          <button
            onClick={handleBooking}
            className="bg-[#f72585] rounded-full px-8 py-3.5 font-['Poppins:SemiBold',sans-serif] text-[16px] text-white flex-shrink-0 whitespace-nowrap"
          >
            Reservar
          </button>
        </div>
      </div>

      <BottomNav activeTab="plans" onNavigate={onNavigate} />

      {/* Modales */}
      <ProcessingModal isOpen={showProcessing} type="booking" />
      <SuccessModal 
        isOpen={showSuccess}
        type="booking"
        onClose={handleSuccessClose}
        onViewDetails={handleViewBookings}
      />
    </div>
  );
}