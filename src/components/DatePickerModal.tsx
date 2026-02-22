import { useState } from 'react';
import { X, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface DatePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (startDate: Date, endDate: Date) => void;
}

export default function DatePickerModal({ isOpen, onClose, onSelect }: DatePickerModalProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  if (!isOpen) return null;

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const handleDateClick = (day: number) => {
    const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    if (!startDate || (startDate && endDate)) {
      setStartDate(selectedDate);
      setEndDate(null);
    } else if (selectedDate >= startDate) {
      setEndDate(selectedDate);
    } else {
      setStartDate(selectedDate);
      setEndDate(null);
    }
  };

  const handleApply = () => {
    if (startDate && endDate) {
      onSelect(startDate, endDate);
      onClose();
    }
  };

  const isDateInRange = (day: number) => {
    if (!startDate) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (endDate) {
      return date >= startDate && date <= endDate;
    }
    return date.getTime() === startDate.getTime();
  };

  const isStartDate = (day: number) => {
    if (!startDate) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date.getTime() === startDate.getTime();
  };

  const isEndDate = (day: number) => {
    if (!endDate) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date.getTime() === endDate.getTime();
  };

  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end animate-fade-in">
      <div className="bg-white rounded-t-[24px] w-full max-h-[80vh] flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e9eaeb]">
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">Selecciona fechas</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Range Display */}
        <div className="p-4 bg-[#fafafa]">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#717680]" />
              <div>
                <p className="font-['Poppins:Regular',sans-serif] text-[10px] text-[#717680]">Desde</p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black">
                  {startDate ? startDate.toLocaleDateString('es-CO', { day: '2-digit', month: 'short' }) : '--'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#717680]" />
              <div>
                <p className="font-['Poppins:Regular',sans-serif] text-[10px] text-[#717680]">Hasta</p>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black">
                  {endDate ? endDate.toLocaleDateString('es-CO', { day: '2-digit', month: 'short' }) : '--'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </p>
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
              <div key={day} className="text-center">
                <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#717680]">{day}</p>
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: startingDayOfWeek }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const inRange = isDateInRange(day);
              const isStart = isStartDate(day);
              const isEnd = isEndDate(day);

              return (
                <button
                  key={day}
                  onClick={() => handleDateClick(day)}
                  className={`
                    aspect-square flex items-center justify-center rounded-[8px] font-['Poppins:Medium',sans-serif] text-[14px] transition-colors
                    ${isStart || isEnd ? 'bg-[#f72585] text-white' : ''}
                    ${inRange && !isStart && !isEnd ? 'bg-[#f72585]/10 text-[#f72585]' : ''}
                    ${!inRange && !isStart && !isEnd ? 'hover:bg-gray-100 text-black' : ''}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="p-4 border-t border-[#e9eaeb] flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-[#e9eaeb] rounded-[32px] font-['Poppins:SemiBold',sans-serif] text-[14px] text-black hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleApply}
            disabled={!startDate || !endDate}
            className={`
              flex-1 px-4 py-3 rounded-[32px] font-['Poppins:SemiBold',sans-serif] text-[14px] text-white transition-colors
              ${startDate && endDate ? 'bg-[#f72585] hover:bg-[#d91f72]' : 'bg-gray-300 cursor-not-allowed'}
            `}
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
}
