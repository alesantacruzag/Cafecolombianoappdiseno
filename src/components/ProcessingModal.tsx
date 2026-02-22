import { useEffect, useState } from 'react';

interface ProcessingModalProps {
  isOpen: boolean;
  type: 'order' | 'booking';
}

export default function ProcessingModal({ isOpen, type }: ProcessingModalProps) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const message = type === 'order' ? 'Procesando tu pedido' : 'Procesando tu reserva';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Modal */}
      <div className="relative bg-white rounded-[24px] p-8 mx-6 max-w-sm w-full animate-slide-up">
        <div className="flex flex-col items-center">
          {/* Loading Spinner */}
          <div className="relative w-16 h-16 mb-6">
            <div className="absolute inset-0 border-4 border-[#f0f0f0] rounded-full"></div>
            <div className="absolute inset-0 border-4 border-[#f72585] border-t-transparent rounded-full animate-spin"></div>
          </div>

          {/* Message */}
          <h3 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black text-center mb-2">
            {message}{dots}
          </h3>
          <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680] text-center">
            Por favor espera un momento
          </p>
        </div>
      </div>
    </div>
  );
}
