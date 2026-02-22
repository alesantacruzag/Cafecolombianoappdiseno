import { useApp } from '../../context/AppContext';
import BottomNav from '../../components/BottomNav';
import type { Screen } from '../../App';
import { Package, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useEffect } from 'react';
import imgProduct from "figma:asset/835062bbc8c4f70c48314738c1dada92fde739c5.png";

interface OrdersScreenProps {
  onNavigate: (screen: Screen) => void;
}

// Mock data for orders
export default function OrdersScreen({ onNavigate }: OrdersScreenProps) {
  const { orders, refreshOrders } = useApp();

  // Cargar pedidos al montar
  useEffect(() => {
    refreshOrders();
  }, []);

  const getStatusDisplay = (status: string) => {
    switch (status) {
      case 'pendiente':
      case 'pending':
        return { text: 'Pendiente', color: 'bg-amber-100', textColor: 'text-amber-700' };
      case 'confirmado':
      case 'processing':
        return { text: 'Procesando', color: 'bg-blue-100', textColor: 'text-blue-700' };
      case 'completado':
      case 'delivered':
        return { text: 'Entregado', color: 'bg-emerald-100', textColor: 'text-emerald-700' };
      case 'cancelled':
        return { text: 'Cancelado', color: 'bg-red-100', textColor: 'text-red-700' };
      case 'shipped':
        return { text: 'En camino', color: 'bg-[#f72585]', textColor: 'text-white' };
      default:
        return { text: status, color: 'bg-gray-100', textColor: 'text-gray-700' };
    }
  };

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
          {orders.map((order) => {
            const status = getStatusDisplay(order.status);
            return (
              <div
                key={order.id}
                className="bg-white border border-[#e9eaeb] rounded-2xl p-4 hover:shadow-md transition-shadow"
              >
                {/* Order Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black mb-1">
                      Pedido #{order.id.slice(0, 8)}
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">
                      {order.date}
                    </p>
                  </div>
                  <div className={`${status.color} px-3 py-1 rounded-full`}>
                    <p className={`font-['Poppins:SemiBold',sans-serif] text-[12px] ${status.textColor}`}>
                      {status.text}
                    </p>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="space-y-3 mb-4">
                  <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-black">
                    {order.items} {order.items === 1 ? 'producto' : 'productos'}
                  </p>
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
            );
          })}

          {/* Empty state if no orders */}
          {orders.length === 0 && (
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