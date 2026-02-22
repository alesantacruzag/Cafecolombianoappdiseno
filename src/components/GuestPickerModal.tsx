import { useState } from 'react';
import { X, Plus, Minus, Users } from 'lucide-react';

interface GuestPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (adults: number, children: number) => void;
  initialAdults?: number;
  initialChildren?: number;
}

export default function GuestPickerModal({ isOpen, onClose, onSelect, initialAdults = 2, initialChildren = 0 }: GuestPickerModalProps) {
  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(initialChildren);

  if (!isOpen) return null;

  const handleApply = () => {
    onSelect(adults, children);
    onClose();
  };

  const incrementAdults = () => setAdults(prev => Math.min(prev + 1, 10));
  const decrementAdults = () => setAdults(prev => Math.max(prev - 1, 1));
  const incrementChildren = () => setChildren(prev => Math.min(prev + 1, 10));
  const decrementChildren = () => setChildren(prev => Math.max(prev - 1, 0));

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end animate-fade-in">
      <div className="bg-white rounded-t-[24px] w-full animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e9eaeb]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">Viajeros</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Adults */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f72585]/10 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-[#f72585]" />
              </div>
              <div>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black">Adultos</p>
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">18 años o más</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={decrementAdults}
                disabled={adults <= 1}
                className={`
                  w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors
                  ${adults <= 1 
                    ? 'border-[#e9eaeb] text-[#d5d7da] cursor-not-allowed' 
                    : 'border-[#f72585] text-[#f72585] hover:bg-[#f72585] hover:text-white'
                  }
                `}
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black w-8 text-center">
                {adults}
              </span>
              <button
                onClick={incrementAdults}
                disabled={adults >= 10}
                className={`
                  w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors
                  ${adults >= 10 
                    ? 'border-[#e9eaeb] text-[#d5d7da] cursor-not-allowed' 
                    : 'border-[#f72585] text-[#f72585] hover:bg-[#f72585] hover:text-white'
                  }
                `}
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="border-t border-[#e9eaeb]" />

          {/* Children */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f72585]/10 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-[#f72585]" />
              </div>
              <div>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black">Niños</p>
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">Menores de 18 años</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={decrementChildren}
                disabled={children <= 0}
                className={`
                  w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors
                  ${children <= 0 
                    ? 'border-[#e9eaeb] text-[#d5d7da] cursor-not-allowed' 
                    : 'border-[#f72585] text-[#f72585] hover:bg-[#f72585] hover:text-white'
                  }
                `}
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black w-8 text-center">
                {children}
              </span>
              <button
                onClick={incrementChildren}
                disabled={children >= 10}
                className={`
                  w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors
                  ${children >= 10 
                    ? 'border-[#e9eaeb] text-[#d5d7da] cursor-not-allowed' 
                    : 'border-[#f72585] text-[#f72585] hover:bg-[#f72585] hover:text-white'
                  }
                `}
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="px-4 py-3 bg-[#fafafa]">
          <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680] text-center">
            Total: {adults + children} {adults + children === 1 ? 'viajero' : 'viajeros'}
          </p>
        </div>

        {/* Actions */}
        <div className="p-4 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-[#e9eaeb] rounded-[32px] font-['Poppins:SemiBold',sans-serif] text-[14px] text-black hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleApply}
            className="flex-1 px-4 py-3 bg-[#f72585] rounded-[32px] font-['Poppins:SemiBold',sans-serif] text-[14px] text-white hover:bg-[#d91f72] transition-colors"
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
}
