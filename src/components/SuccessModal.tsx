import { Check } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  type: 'order' | 'booking';
  onClose: () => void;
  onViewDetails?: () => void;
}

export default function SuccessModal({ isOpen, type, onClose, onViewDetails }: SuccessModalProps) {
  if (!isOpen) return null;

  const isOrder = type === 'order';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-white rounded-[24px] p-8 max-w-sm w-full">
        <div className="flex flex-col items-center">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-[#24b15e] rounded-full flex items-center justify-center mb-6">
            <Check className="w-8 h-8 text-white" strokeWidth={3} />
          </div>

          {/* Title */}
          <h3 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-black text-center mb-3">
            {isOrder ? '¡Pedido confirmado!' : '¡Reserva confirmada!'}
          </h3>

          {/* Message */}
          <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680] text-center mb-8 leading-[20px]">
            {isOrder 
              ? 'Tu pedido ha sido confirmado. Te hemos enviado todos los detalles por correo.'
              : 'Tu reserva ha sido confirmada. Te hemos enviado todos los detalles por correo.'
            }
          </p>

          {/* Actions */}
          <div className="w-full space-y-3">
            {onViewDetails && (
              <button
                onClick={onViewDetails}
                className="w-full bg-[#f72585] rounded-full px-6 py-3 font-['Poppins:SemiBold',sans-serif] text-[16px] text-white"
              >
                Ver detalles
              </button>
            )}
            <button
              onClick={onClose}
              className="w-full bg-white border-2 border-[#e9eaeb] rounded-full px-6 py-3 font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#717680]"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}