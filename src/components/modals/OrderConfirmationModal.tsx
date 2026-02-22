import { motion } from 'motion/react';
import { CheckCircle, Package } from 'lucide-react';

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewDetails?: () => void;
  orderNumber: string;
  total?: number;
  estimatedDelivery: string;
  type?: 'order' | 'booking';
}

export default function OrderConfirmationModal({ 
  isOpen, 
  onClose, 
  onViewDetails,
  orderNumber,
  total,
  estimatedDelivery,
  type = 'order'
}: OrderConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl p-6 max-w-sm w-full"
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#24b15e]/10 rounded-full p-4">
            <CheckCircle className="w-16 h-16 text-[#24b15e]" />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-center text-black mb-2">
          ¡Pedido Confirmado!
        </h2>

        {/* Description */}
        <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-center text-[#717680] mb-6">
          Tu pedido ha sido procesado exitosamente
        </p>

        {/* Order Details Card */}
        <div className="bg-[#f9f9f9] rounded-2xl p-4 mb-6 space-y-3">
          <div className="flex items-center gap-3">
            <Package className="w-5 h-5 text-[#f72585]" />
            <div className="flex-1">
              <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#717680]">
                Número de pedido
              </p>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black">
                {orderNumber}
              </p>
            </div>
          </div>

          {total !== undefined && (
            <>
              <div className="h-px bg-[#e9eaeb]" />

              <div className="flex justify-between">
                <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#717680]">
                  Total pagado
                </p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">
                  ${total.toLocaleString('es-CO')}
                </p>
              </div>
            </>
          )}

          <div className="flex justify-between">
            <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#717680]">
              Entrega estimada
            </p>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black">
              {estimatedDelivery}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={onViewDetails || onClose}
            className="w-full bg-[#f72585] border border-[#f72585] rounded-[32px] px-5 py-3 font-['Poppins:SemiBold',sans-serif] text-[16px] text-white"
          >
            Ver mi pedido
          </button>
          <button
            onClick={onClose}
            className="w-full bg-white border border-[#d5d7da] rounded-[32px] px-5 py-3 font-['Poppins:SemiBold',sans-serif] text-[16px] text-black"
          >
            Seguir comprando
          </button>
        </div>
      </motion.div>
    </div>
  );
}