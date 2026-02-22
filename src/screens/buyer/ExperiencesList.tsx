import { useState, useMemo } from 'react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import BottomNav from '../../components/BottomNav';
import Tag from '../../components/ui/Tag';
import { Card } from '../../components/ui/card';
import { useApp } from '../../context/AppContext';
import type { Screen } from '../../App';

interface ExperiencesListProps {
  destination: string;
  onNavigate: (screen: Screen) => void;
  onExperienceSelect: (experience: any) => void;
}

export default function ExperiencesList({ destination, onNavigate, onExperienceSelect }: ExperiencesListProps) {
  const { experiences, refreshExperiences } = useApp();
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'tours' | 'gastronomia' | 'naturaleza' | 'cultura' | 'aventura'>('todos');

  useMemo(() => {
    refreshExperiences();
  }, []);

  // Filtrar experiencias por destino y categoría
  const filteredExperiences = useMemo(() => {
    let filtered = experiences;

    // Filtrar por destino si hay uno seleccionado
    if (destination && typeof destination === 'string' && destination.trim() !== '') {
      filtered = filtered.filter(exp =>
        exp.destination?.toLowerCase().includes(destination.toLowerCase()) ||
        exp.location?.toLowerCase().includes(destination.toLowerCase())
      );
    }

    // Filtrar por categoría
    if (selectedFilter !== 'todos') {
      filtered = filtered.filter(exp => exp.category === selectedFilter);
    }

    return filtered;
  }, [experiences, destination, selectedFilter]);

  return (
    <div className="relative w-full h-full bg-white flex flex-col">

      {/* Header */}
      <div className="bg-white border-b border-[#e9eaeb] px-4 py-4">
        <button onClick={() => onNavigate('experiences-home')} className="p-1">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Search Summary */}
      <div className="bg-white border-b border-[#e9eaeb] px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Search Info - Clickeable para editar */}
          <button
            onClick={() => onNavigate('experiences-home')}
            className="flex-1 min-w-0 text-left"
          >
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                <path d="M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.41351 5.66C3.72684 -0.113333 12.2802 -0.106667 13.5868 5.66667C14.3535 9.05333 12.2402 11.92 10.4002 13.6933C9.06017 14.9867 6.94017 14.9867 5.59351 13.6933C3.76017 11.92 1.64684 9.04667 2.41351 5.66Z" stroke="black" />
              </svg>
              <span className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-black truncate">
                {destination || 'Todos los destinos'}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-[#717680]">
              <span className="font-['Poppins:Regular',sans-serif]">Experiencias disponibles</span>
            </div>
          </button>

          {/* Search Button */}
          <button
            onClick={() => onNavigate('experiences-home')}
            className="bg-[#f72585] rounded-full p-2.5 flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.5 17.5L13.875 13.875" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Filters - Tags consistentes con iconos */}
      <div className="px-4 py-4 border-b border-[#e9eaeb]">
        <div className="flex gap-2 overflow-x-auto">
          <button
            onClick={() => setSelectedFilter('todos')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 whitespace-nowrap transition-colors ${selectedFilter === 'todos'
              ? 'bg-[#f72585] border-[#f72585] text-white'
              : 'bg-white border-[#e9eaeb] text-[#414651]'
              }`}
          >
            <span className="font-['Poppins:SemiBold',sans-serif] text-[14px]">Todos</span>
          </button>

          <button
            onClick={() => setSelectedFilter('tours')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 whitespace-nowrap transition-colors ${selectedFilter === 'tours'
              ? 'bg-[#f72585] border-[#f72585] text-white'
              : 'bg-white border-[#e9eaeb] text-[#414651]'
              }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path
                d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 5.33334V8.66668L10 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[14px]">Tours</span>
          </button>

          <button
            onClick={() => setSelectedFilter('gastronomia')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 whitespace-nowrap transition-colors ${selectedFilter === 'gastronomia'
              ? 'bg-[#f72585] border-[#f72585] text-white'
              : 'bg-white border-[#e9eaeb] text-[#414651]'
              }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path
                d="M2 2V6C2 7.10457 2.89543 8 4 8V14M6 2V8M10 2V8M6 8C6 9.10457 6.89543 10 8 10V14M14 14V2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[14px]">Gastronomía</span>
          </button>

          <button
            onClick={() => setSelectedFilter('naturaleza')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 whitespace-nowrap transition-colors ${selectedFilter === 'naturaleza'
              ? 'bg-[#f72585] border-[#f72585] text-white'
              : 'bg-white border-[#e9eaeb] text-[#414651]'
              }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path
                d="M8 2V14M8 2C6 2 4 4 4 6C4 8 6 10 8 10M8 2C10 2 12 4 12 6C12 8 10 10 8 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[14px]">Naturaleza</span>
          </button>

          <button
            onClick={() => setSelectedFilter('cultura')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 whitespace-nowrap transition-colors ${selectedFilter === 'cultura'
              ? 'bg-[#f72585] border-[#f72585] text-white'
              : 'bg-white border-[#e9eaeb] text-[#414651]'
              }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path
                d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M2 8H14" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 2C9.5 4 9.5 12 8 14C6.5 12 6.5 4 8 2Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[14px]">Cultura</span>
          </button>

          <button
            onClick={() => setSelectedFilter('aventura')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 whitespace-nowrap transition-colors ${selectedFilter === 'aventura'
              ? 'bg-[#f72585] border-[#f72585] text-white'
              : 'bg-white border-[#e9eaeb] text-[#414651]'
              }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path
                d="M2 14L8 2L14 14H2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[14px]">Aventura</span>
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 py-4 space-y-4">
          <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680]">
            {filteredExperiences.length} {filteredExperiences.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
          </p>

          {filteredExperiences.length > 0 ? (
            <div className="space-y-4">
              {filteredExperiences.map((exp) => (
                <Card
                  key={exp.id}
                  onClick={() => onExperienceSelect(exp)}
                >
                  <div className="relative h-[160px]">
                    <ImageWithFallback
                      src={exp.image}
                      alt={exp.name}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                    {exp.badge && (
                      <div className="absolute top-3 left-3">
                        <Tag
                          label={exp.badge.text}
                          variant={exp.badge.color === 'green' ? 'warning' : 'primary'}
                          size="sm"
                        />
                      </div>
                    )}
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] leading-[24px] text-black">
                      {exp.name}
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680]">
                      {exp.location || exp.destination}
                    </p>
                    <div className="flex items-center gap-2 text-[14px]">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="6" stroke="#717680" strokeWidth="1.5" />
                          <path d="M8 4.66667V8L10 10" stroke="#717680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[#717680]">Duración: {exp.duration}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-[#e9eaeb]">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">
                        ${exp.price.toLocaleString('es-CO')}
                        <span className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680]"> / Por persona</span>
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 space-y-3">
              <div className="w-20 h-20 mx-auto bg-[#f5f6f7] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#a4a7ae]" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black">
                No hay experiencias disponibles
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680]">
                Intenta buscar otro destino o ajusta tus filtros
              </p>
            </div>
          )}
        </div>
      </div>

      <BottomNav activeTab="plans" onNavigate={onNavigate} />
    </div>
  );
}