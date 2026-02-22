import { useApp } from '../../context/AppContext';
import BottomNav from '../../components/BottomNav';
import type { Screen } from '../../App';
import { Package, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import imgProduct from "figma:asset/835062bbc8c4f70c48314738c1dada92fde739c5.png";

interface OrdersScreenProps {
  onNavigate: (screen: Screen) => void;
}

// Mock data for orders
const mockOrders = [
  {
    id: 'ORD-001',
    date: '15 Ene 2026',
    status: 'Entregado',
    statusColor: 'bg-[#cee90d]',
    statusTextColor: 'text-[#5f6b05]',
    total: 60000,
    items: [
      { name: 'Café Obraje', weight: '250 gr', quantity: 1, image: imgProduct },
      { name: 'Café Quindío Gourmet', weight: '450 gr', quantity: 1, image: imgProduct }
    ]
  },
  {
    id: 'ORD-002',
    date: '8 Ene 2026',
    status: 'En camino',
    statusColor: 'bg-[#f72585]',
    statusTextColor: 'text-white',
    total: 34000,
    items: [
      { name: 'Café Huila Premium', weight: '250 gr', quantity: 1, image: imgProduct }
    ]
  },
  {
    id: 'ORD-003',
    date: '2 Ene 2026',
    status: 'Entregado',
    statusColor: 'bg-[#cee90d]',
    statusTextColor: 'text-[#5f6b05]',
    total: 78000,
    items: [
      { name: 'Café Obraje', weight: '2.500 gr', quantity: 1, image: imgProduct }
    ]
  }
];

export default function OrdersScreen({ onNavigate }: OrdersScreenProps) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      
      {/* Header */}
      <div className="bg-white border-b border-[#e9eaeb] px-4 py-4">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('profile')} className="p-1">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path 
                d="M19 12H5M5 12L12 19M5 12L12 5" 
                stroke="black" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">
            Mis Pedidos
          </h1>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 py-4 space-y-4">
          {mockOrders.map((order) => (
            <div 
              key={order.id} 
              className="bg-white border border-[#e9eaeb] rounded-2xl p-4 hover:shadow-md transition-shadow"
            >
              {/* Order Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black mb-1">
                    Pedido {order.id}
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">
                    {order.date}
                  </p>
                </div>
                <div className={`${order.statusColor} px-3 py-1 rounded-full`}>
                  <p className={`font-['Poppins:SemiBold',sans-serif] text-[12px] ${order.statusTextColor}`}>
                    {order.status}
                  </p>
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-3 mb-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-16 h-16 bg-[#f9f9f9] rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black">
                        {item.name}
                      </p>
                      <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">
                        {item.weight} • Cantidad: {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="pt-4 border-t border-[#e9eaeb] flex items-center justify-between">
                <div>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680] mb-1">
                    Total
                  </p>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">
                    ${order.total.toLocaleString('es-CO')}
                  </p>
                </div>
                <button className="flex items-center gap-2 bg-[#f9f9f9] px-4 py-2 rounded-[32px]">
                  <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-black">
                    Ver detalles
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#717680]" />
                </button>
              </div>
            </div>
          ))}

          {/* Empty state if no orders */}
          {mockOrders.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
              <Package className="w-20 h-20 text-[#d5d7da] mb-4" />
              <h2 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-black mb-2">
                No tienes pedidos
              </h2>
              <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680] mb-6">
                Explora nuestra tienda y realiza tu primera compra
              </p>
              <button
                onClick={() => onNavigate('shop')}
                className="bg-[#f72585] border border-[#f72585] rounded-[32px] px-8 py-3 font-['Poppins:SemiBold',sans-serif] text-[16px] text-white"
              >
                Ir a la tienda
              </button>
            </div>
          )}
        </div>
      </div>

      <BottomNav activeTab="profile" onNavigate={onNavigate} />
    </div>
  );
}