import BottomNav from '../../components/BottomNav';
import type { Screen } from '../../App';
import { Plus, MoreVertical, Calendar } from 'lucide-react';

interface AdminExperiencesProps {
  onNavigate: (screen: Screen) => void;
}

export default function AdminExperiences({ onNavigate }: AdminExperiencesProps) {
  const experiences = [
    { id: '1', name: 'Tour "Del Grano a la Taza"', price: 65000, bookings: 12, status: 'active', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200' },
    { id: '2', name: 'Cata de Café Especial', price: 45000, bookings: 8, status: 'active', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200' },
    { id: '3', name: 'Taller de Barista', price: 80000, bookings: 3, status: 'active', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200' }
  ];

  return (
    <div className="relative w-full h-full bg-[#f9fafb] flex flex-col">
      
      <div className="bg-white border-b border-[#e9eaeb] px-4 py-4 flex items-center justify-between shadow-sm">
        <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#181d27]">Experiencias</h1>
        <button className="bg-[#f72585] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
          <Plus size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-6 space-y-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white border border-[#e9eaeb] rounded-2xl p-4 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-[#f9fafb] rounded-xl overflow-hidden border border-[#f2f4f7]">
                    <img src={exp.image} alt={exp.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#181d27] mb-1 leading-tight">{exp.name}</h3>
                    <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#f72585]">
                      ${exp.price.toLocaleString('es-CO')}
                    </p>
                  </div>
                </div>
                <button className="p-1 text-[#98a2b3]">
                  <MoreVertical size={20} />
                </button>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-[#f2f4f7]">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f2f4f7] rounded-full">
                  <Calendar size={14} className="text-[#717680]" />
                  <span className="font-['Poppins:SemiBold',sans-serif] text-[12px] text-[#344054]">
                    {exp.bookings} reservas activas
                  </span>
                </div>
                <button className="px-5 py-2 bg-white border border-[#e9eaeb] text-[#344054] rounded-xl text-[13px] font-['Poppins:SemiBold',sans-serif] hover:bg-[#f9fafb] transition-colors">
                  Gestionar
                </button>
              </div>
            </div>
          ))}
          <div className="h-4" />
        </div>
      </div>

      <BottomNav activeTab="products" onNavigate={onNavigate} role="admin" />
    </div>
  );
}