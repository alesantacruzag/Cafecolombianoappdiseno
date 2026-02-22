import { useState } from 'react';
import { X, Search, MapPin } from 'lucide-react';

interface SearchDestinationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (destination: string) => void;
  currentValue?: string;
}

const DESTINATIONS = [
  { id: '1', name: 'Quindío', region: 'Eje Cafetero', type: 'Departamento' },
  { id: '2', name: 'Salento', region: 'Quindío', type: 'Municipio' },
  { id: '3', name: 'Filandia', region: 'Quindío', type: 'Municipio' },
  { id: '4', name: 'Pijao', region: 'Quindío', type: 'Municipio' },
  { id: '5', name: 'Risaralda', region: 'Eje Cafetero', type: 'Departamento' },
  { id: '6', name: 'Pereira', region: 'Risaralda', type: 'Ciudad' },
  { id: '7', name: 'Santa Rosa de Cabal', region: 'Risaralda', type: 'Municipio' },
  { id: '8', name: 'Caldas', region: 'Eje Cafetero', type: 'Departamento' },
  { id: '9', name: 'Manizales', region: 'Caldas', type: 'Ciudad' },
  { id: '10', name: 'Chinchiná', region: 'Caldas', type: 'Municipio' },
];

export default function SearchDestinationModal({ isOpen, onClose, onSelect, currentValue }: SearchDestinationModalProps) {
  const [searchTerm, setSearchTerm] = useState(currentValue || '');

  if (!isOpen) return null;

  const filteredDestinations = DESTINATIONS.filter(dest =>
    dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dest.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (destination: string) => {
    onSelect(destination);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end animate-fade-in">
      <div className="bg-white rounded-t-[24px] w-full max-h-[80vh] flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e9eaeb]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">Selecciona destino</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b border-[#e9eaeb]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717680]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar destino..."
              className="w-full pl-10 pr-4 py-3 border border-[#d5d7da] rounded-[12px] font-['Poppins:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#f72585]"
              autoFocus
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-4 h-4 text-[#717680]" />
              </button>
            )}
          </div>
        </div>

        {/* Destinations List */}
        <div className="flex-1 overflow-y-auto">
          {filteredDestinations.length > 0 ? (
            <div className="p-4 space-y-2">
              {filteredDestinations.map((dest) => (
                <button
                  key={dest.id}
                  onClick={() => handleSelect(dest.name)}
                  className="w-full flex items-center gap-3 p-3 hover:bg-[#fafafa] rounded-[12px] transition-colors text-left"
                >
                  <div className="w-10 h-10 bg-[#f72585]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#f72585]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black">{dest.name}</p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">{dest.region} · {dest.type}</p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680]">No se encontraron destinos</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
