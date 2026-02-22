import { useState } from 'react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import BottomNav from '../../components/BottomNav';
import SearchDestinationModal from '../../components/SearchDestinationModal';
import DatePickerModal from '../../components/DatePickerModal';
import GuestPickerModal from '../../components/GuestPickerModal';
import { Button } from '../../components/ui/button';
import Tag from '../../components/ui/Tag';
import { Card } from '../../components/ui/card';
import { useApp } from '../../context/AppContext';
import { LogoOrigen } from '../../components/LogoOrigen';
import type { Screen } from '../../App';

interface ExperiencesHomeProps {
  onNavigate: (screen: Screen) => void;
  onSearch: (destination: string) => void; // Actualizado para pasar el destino
}

export default function ExperiencesHome({ onNavigate, onSearch }: ExperiencesHomeProps) {
  const { notificationCount } = useApp();
  const [destination, setDestination] = useState('');
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date } | null>(null);
  const [guests, setGuests] = useState({ adults: 1, children: 0 });

  // Modal states
  const [showDestinationModal, setShowDestinationModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showGuestModal, setShowGuestModal] = useState(false);

  const formatDateRange = () => {
    if (!dateRange) return '';
    const start = dateRange.start.toLocaleDateString('es-CO', { day: '2-digit', month: 'short' });
    const end = dateRange.end.toLocaleDateString('es-CO', { day: '2-digit', month: 'short' });
    return `${start} - ${end}`;
  };

  const formatGuests = () => {
    const parts = [];
    if (guests.adults > 0) parts.push(`${guests.adults} ${guests.adults === 1 ? 'adulto' : 'adultos'}`);
    if (guests.children > 0) parts.push(`${guests.children} ${guests.children === 1 ? 'niño' : 'niños'}`);
    return parts.length > 0 ? parts.join(', ') : '';
  };

  const handleSearch = () => {
    if (destination && dateRange) {
      onSearch(destination);
    }
  };

  return (
    <div className="relative w-full h-full bg-white flex flex-col">

      {/* Header */}
      <div className="bg-white border-b border-[#e9eaeb] px-4 py-4">
        <div className="flex items-center justify-between">
          <LogoOrigen className="h-6" />

          <button onClick={() => onNavigate('notifications')} className="relative p-1">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 6.44V9.77M12.02 2C8.34 2 5.36 4.98 5.36 8.66V10.76C5.36 11.44 5.08 12.46 4.73 13.04L3.46 15.16C2.68 16.47 3.22 17.93 4.66 18.41C9.44 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2ZM15.33 18.82C15.33 20.65 13.83 22.15 12 22.15C11.09 22.15 10.25 21.77 9.65 21.17C9.05 20.57 8.67 19.73 8.67 18.82"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
            {notificationCount > 0 && (
              <div className="absolute -top-1 -right-1 bg-[#f72585] rounded-full w-5 h-5 flex items-center justify-center">
                <span className="font-['Poppins'] font-semibold text-[10px] text-white">
                  {notificationCount}
                </span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Hero Section */}
        <div className="px-4 py-6 space-y-8">
          {/* Search Form */}
          <div className="space-y-6">
            <h1 className="font-['Poppins'] font-semibold text-[18px] leading-[28px] text-black">
              ¿A donde quieres ir?
            </h1>

            {/* Destination */}
            <div className="space-y-1.5">
              <label className="font-['Poppins'] font-medium text-[14px] leading-[20px] text-[#414651]">
                Destino
              </label>
              <button
                onClick={() => setShowDestinationModal(true)}
                className="w-full bg-white relative rounded-lg border border-[#d5d7da] shadow-sm"
              >
                <div className="flex items-center gap-2 px-3.5 py-2.5 text-left">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                    <path
                      d="M10 10.625C11.3807 10.625 12.5 9.50571 12.5 8.125C12.5 6.74429 11.3807 5.625 10 5.625C8.61929 5.625 7.5 6.74429 7.5 8.125C7.5 9.50571 8.61929 10.625 10 10.625Z"
                      stroke="#717680"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.01675 7.07499C4.65841 -0.141677 15.3501 -0.133343 16.9834 7.08332C17.9417 11.3167 15.3084 14.9 13.0001 17.1167C11.3251 18.7333 8.67508 18.7333 6.99175 17.1167C4.69175 14.9 2.05841 11.3083 3.01675 7.07499Z"
                      stroke="#717680"
                      strokeWidth="1.67"
                    />
                  </svg>
                  <span className={`flex-1 font-['Poppins'] font-normal text-[16px] leading-[24px] ${destination ? 'text-black' : 'text-[#a4a7ae]'}`}>
                    {destination || 'Elige el destino'}
                  </span>
                </div>
              </button>
            </div>

            {/* Dates */}
            <div className="space-y-1.5">
              <label className="font-['Poppins'] font-medium text-[14px] leading-[20px] text-[#414651]">
                Fechas
              </label>
              <button
                onClick={() => setShowDateModal(true)}
                className="w-full bg-white relative rounded-lg border border-[#d5d7da] shadow-sm"
              >
                <div className="flex items-center gap-2 px-3.5 py-2.5 text-left">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                    <path
                      d="M6.66667 1.66667V4.16667M13.3333 1.66667V4.16667M2.91667 7.575H17.0833M17.5 7.08333V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V7.08333C2.5 4.58333 3.75 2.91667 6.66667 2.91667H13.3333C16.25 2.91667 17.5 4.58333 17.5 7.08333Z"
                      stroke="#717680"
                      strokeWidth="1.67"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.0791 11.4167H13.0866M13.0791 13.9167H13.0866M9.99579 11.4167H10.0033M9.99579 13.9167H10.0033M6.91162 11.4167H6.91912M6.91162 13.9167H6.91912"
                      stroke="#717680"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className={`flex-1 font-['Poppins'] font-normal text-[16px] leading-[24px] ${formatDateRange() ? 'text-black' : 'text-[#a4a7ae]'}`}>
                    {formatDateRange() || 'Ingresa tus fechas'}
                  </span>
                </div>
              </button>
            </div>

            {/* Visitors */}
            <div className="space-y-1.5">
              <label className="font-['Poppins'] font-medium text-[14px] leading-[20px] text-[#414651]">
                Visitantes
              </label>
              <button
                onClick={() => setShowGuestModal(true)}
                className="w-full bg-white relative rounded-lg border border-[#d5d7da] shadow-sm"
              >
                <div className="flex items-center gap-2 px-3.5 py-2.5 text-left">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                    <path
                      d="M10 10C12.3012 10 14.1667 8.13452 14.1667 5.83333C14.1667 3.53215 12.3012 1.66667 10 1.66667C7.69881 1.66667 5.83333 3.53215 5.83333 5.83333C5.83333 8.13452 7.69881 10 10 10Z"
                      stroke="#717680"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.1583 18.3333C17.1583 15.1083 13.95 12.5 10 12.5C6.05 12.5 2.84167 15.1083 2.84167 18.3333"
                      stroke="#717680"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className={`flex-1 font-['Poppins'] font-normal text-[16px] leading-[24px] ${formatGuests() ? 'text-black' : 'text-[#a4a7ae]'}`}>
                    {formatGuests() || '1 adulto'}
                  </span>
                </div>
              </button>
            </div>

            {/* Search Button */}
            <Button
              onClick={handleSearch}
              fullWidth
            >
              Buscar
            </Button>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#e9eaeb]" />

          {/* Recommendations */}
          <div className="space-y-4">
            <h2 className="font-['Poppins'] font-semibold text-[18px] leading-[28px] text-black">
              Te recomendamos visitar
            </h2>

            <Card onClick={() => onSearch('Salento')}>
              <div className="h-[137px] relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1567726843492-df0484bb0b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYXJtJTIwdG91ciUyMGd1aWRlfGVufDF8fHx8MTc3MDczMzE3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Finca cafetera"
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-4 text-left space-y-2">
                <Tag
                  label="Nueva Ruta"
                  variant="warning"
                  size="sm"
                />
                <p className="font-['Poppins'] font-semibold text-[14px] leading-[20px] text-black">
                  Finca cafetera Don Elías
                </p>
                <p className="font-['Poppins'] font-normal text-[12px] leading-[18px] text-[#717680]">
                  Conoce el proceso desde la siembra hasta la taza con el mejor café orgánico de la región.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <BottomNav activeTab="plans" onNavigate={onNavigate} />

      {/* Modals */}
      <SearchDestinationModal
        isOpen={showDestinationModal}
        onClose={() => setShowDestinationModal(false)}
        onSelect={(dest) => setDestination(dest)}
        currentValue={destination}
      />

      <DatePickerModal
        isOpen={showDateModal}
        onClose={() => setShowDateModal(false)}
        onSelect={(start, end) => setDateRange({ start, end })}
      />

      <GuestPickerModal
        isOpen={showGuestModal}
        onClose={() => setShowGuestModal(false)}
        onSelect={(adults, children) => setGuests({ adults, children })}
        initialAdults={guests.adults}
        initialChildren={guests.children}
      />
    </div>
  );
}