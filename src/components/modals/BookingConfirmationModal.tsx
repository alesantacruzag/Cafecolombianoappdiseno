import { motion } from 'motion/react';
import Button from '../ui/Button';
import { CheckCircle, Calendar, MapPin, Users, Clock } from 'lucide-react';

interface BookingConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingNumber: string;
  experienceName: string;
  date: string;
  time: string;
  location: string;
  guests: number;
  total: number;
}

export default function BookingConfirmationModal({ 
  isOpen, 
  onClose, 
  bookingNumber,
  experienceName,
  date,
  time,
  location,
  guests,
  total
}: BookingConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl p-6 max-w-sm w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#24b15e]/10 rounded-full p-4">
            <CheckCircle className="w-16 h-16 text-[#24b15e]" />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-center text-black mb-2">
          ¡Reserva Confirmada!
        </h2>

        {/* Description */}
        <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-center text-[#717680] mb-6">
          Tu experiencia ha sido reservada exitosamente
        </p>

        {/* Booking Details Card */}
        <div className="bg-[#f9f9f9] rounded-2xl p-4 mb-6 space-y-4">
          <div>
            <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#717680] mb-1">
              Código de reserva
            </p>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black">
              {bookingNumber}
            </p>
          </div>

          <div className="h-px bg-[#e9eaeb]" />

          <div>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black mb-3">
              {experienceName}
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#717680]" />
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">
                  {location}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#717680]" />
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">
                  {date}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#717680]" />
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">
                  {time}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#717680]" />
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">
                  {guests} {guests === 1 ? 'persona' : 'personas'}
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#e9eaeb]" />

          <div className="flex justify-between">
            <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#717680]">
              Total pagado
            </p>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">
              ${total.toLocaleString('es-CO')}
            </p>
          </div>
        </div>

        {/* Info Note */}
        <div className="bg-[#fff5fa] border border-[#f72585]/20 rounded-2xl p-4 mb-6">
          <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680] text-center">
            Hemos enviado los detalles de tu reserva a tu correo electrónico
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button onClick={onClose} fullWidth>
            Ver mi reserva
          </Button>
          <Button onClick={onClose} variant="tertiary" fullWidth>
            Explorar más experiencias
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
