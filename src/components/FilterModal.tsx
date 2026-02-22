import { X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterOptions) => void;
  currentFilters: FilterOptions;
}

export interface FilterOptions {
  priceRange: [number, number];
  categories: string[];
  inStock: boolean;
}

export default function FilterModal({ isOpen, onClose, onApply, currentFilters }: FilterModalProps) {
  const [filters, setFilters] = useState<FilterOptions>(currentFilters);

  if (!isOpen) return null;

  const categories = [
    { id: 'frutales', label: 'Frutales' },
    { id: 'dulces', label: 'Dulces' },
    { id: 'citricos', label: 'Cítricos' },
    { id: 'achocolatados', label: 'Achocolatados' }
  ];

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters: FilterOptions = {
      priceRange: [0, 100000],
      categories: [],
      inStock: false
    };
    setFilters(resetFilters);
  };

  const toggleCategory = (categoryId: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(c => c !== categoryId)
        : [...prev.categories, categoryId]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full bg-white rounded-t-[24px] max-h-[85vh] flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e9eaeb]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">
            Filtrar
          </h2>
          <button
            onClick={onClose}
            className="p-2 -mr-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black mb-3">
              Rango de precio
            </h3>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680] mb-1 block">
                  Mínimo
                </label>
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    priceRange: [Number(e.target.value), prev.priceRange[1]]
                  }))}
                  className="w-full px-4 py-2 border-2 border-[#e9eaeb] rounded-xl font-['Poppins:Regular',sans-serif] text-[14px]"
                  placeholder="$0"
                />
              </div>
              <div className="flex-1">
                <label className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680] mb-1 block">
                  Máximo
                </label>
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    priceRange: [prev.priceRange[0], Number(e.target.value)]
                  }))}
                  className="w-full px-4 py-2 border-2 border-[#e9eaeb] rounded-xl font-['Poppins:Regular',sans-serif] text-[14px]"
                  placeholder="$100.000"
                />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black mb-3">
              Categorías
            </h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className={`w-full px-4 py-3 rounded-xl border-2 text-left font-['Poppins:Medium',sans-serif] text-[14px] transition-colors ${filters.categories.includes(category.id)
                      ? 'bg-[#f72585] border-[#f72585] text-white'
                      : 'bg-white border-[#e9eaeb] text-black'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stock */}
          <div className="mb-6">
            <button
              onClick={() => setFilters(prev => ({ ...prev, inStock: !prev.inStock }))}
              className="flex items-center gap-3"
            >
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${filters.inStock
                  ? 'bg-[#f72585] border-[#f72585]'
                  : 'bg-white border-[#d5d7da]'
                }`}>
                {filters.inStock && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-black">
                Solo productos en stock
              </span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#e9eaeb] space-y-3">
          <Button onClick={handleApply} fullWidth>
            Aplicar filtros
          </Button>
          <button
            onClick={handleReset}
            className="w-full py-3 font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#717680]"
          >
            Limpiar filtros
          </button>
        </div>
      </div>
    </div>
  );
}
