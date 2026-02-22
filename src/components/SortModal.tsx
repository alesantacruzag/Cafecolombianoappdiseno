import { X } from 'lucide-react';
import { useState } from 'react';
import Button from './ui/Button';

interface SortModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (sortBy: SortOption) => void;
  currentSort: SortOption;
}

export type SortOption = 
  | 'relevant'
  | 'price-low-high'
  | 'price-high-low'
  | 'name-a-z'
  | 'name-z-a'
  | 'newest';

export default function SortModal({ isOpen, onClose, onApply, currentSort }: SortModalProps) {
  const [selectedSort, setSelectedSort] = useState<SortOption>(currentSort);

  if (!isOpen) return null;

  const sortOptions: { id: SortOption; label: string }[] = [
    { id: 'relevant', label: 'Más relevante' },
    { id: 'price-low-high', label: 'Precio: menor a mayor' },
    { id: 'price-high-low', label: 'Precio: mayor a menor' },
    { id: 'name-a-z', label: 'Nombre: A - Z' },
    { id: 'name-z-a', label: 'Nombre: Z - A' },
    { id: 'newest', label: 'Más recientes' }
  ];

  const handleApply = () => {
    onApply(selectedSort);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full bg-white rounded-t-[24px] animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e9eaeb]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">
            Ordenar
          </h2>
          <button 
            onClick={onClose}
            className="p-2 -mr-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <div className="space-y-2">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedSort(option.id)}
                className={`w-full px-4 py-3 rounded-xl border-2 text-left font-['Poppins:Medium',sans-serif] text-[14px] flex items-center justify-between transition-colors ${
                  selectedSort === option.id
                    ? 'bg-[#f72585] border-[#f72585] text-white'
                    : 'bg-white border-[#e9eaeb] text-black'
                }`}
              >
                <span>{option.label}</span>
                {selectedSort === option.id && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path 
                      d="M16.6667 5L7.5 14.1667L3.33334 10" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <Button onClick={handleApply} fullWidth>
            Aplicar
          </Button>
        </div>
      </div>
    </div>
  );
}
