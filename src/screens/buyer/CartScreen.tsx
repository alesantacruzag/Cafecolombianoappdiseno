import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import BottomNav from '../../components/BottomNav';
import ProcessingModal from '../../components/ProcessingModal';
import SuccessModal from '../../components/SuccessModal';
import { useApp } from '../../context/AppContext';
import type { Screen } from '../../App';
import { useState } from 'react';

interface CartScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function CartScreen({ onNavigate }: CartScreenProps) {
  const { cart, updateCartItem, removeFromCart, clearCart } = useApp();
  const [showProcessing, setShowProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 8000;
  const total = subtotal + shipping;

  const handlePayment = () => {
    // Mostrar modal de procesamiento
    setShowProcessing(true);
    
    // Simular procesamiento de pago (2-3 segundos)
    setTimeout(() => {
      setShowProcessing(false);
      // Mostrar modal de éxito
      setShowSuccess(true);
    }, 2500);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    // Limpiar carrito después de cerrar el modal
    clearCart();
    onNavigate('buyer-home');
  };

  const handleViewOrder = () => {
    setShowSuccess(false);
    // Limpiar carrito después de cerrar el modal
    clearCart();
    onNavigate('orders');
  };

  // Calcular fecha de entrega estimada (5-7 días hábiles)
  const getEstimatedDelivery = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date.toLocaleDateString('es-CO', { day: 'numeric', month: 'long' });
  };

  if (cart.length === 0) {
    return (
      <div className="relative w-full h-full bg-white flex flex-col">
        
        <div className="bg-white border-b border-[#e9eaeb] px-4 py-4">
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">Mi Carrito</h1>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
          <svg className="w-24 h-24 mb-4" fill="none" viewBox="0 0 24 24">
            <path d="M2 2H3.74C4.82 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89 16.99 7.53 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22ZM8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="#D5D7DA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-black mb-2">
            Tu carrito está vacío
          </h2>
          <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680] mb-6">
            Explora nuestra tienda y agrega productos
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="bg-[#f72585] rounded-[32px] px-8 py-3 font-['Poppins:SemiBold',sans-serif] text-[16px] text-white"
          >
            Ir a la tienda
          </button>
        </div>

        <BottomNav activeTab="cart" onNavigate={onNavigate} />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      
      <div className="bg-white border-b border-[#e9eaeb] px-4 py-4">
        <h1 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">
          Mi Carrito ({cart.length})
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-64">
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <svg className="w-24 h-24 mb-4" fill="none" viewBox="0 0 24 24">
              <path d="M2 2H3.74C4.82 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89 16.99 7.53 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22ZM8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="#D5D7DA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-black mb-2">
              Tu carrito está vacío
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680] mb-6">
              Explora nuestra tienda y agrega productos
            </p>
            <button
              onClick={() => onNavigate('shop')}
              className="bg-[#f72585] rounded-[32px] px-8 py-3 font-['Poppins:SemiBold',sans-serif] text-[16px] text-white"
            >
              Ir a la tienda
            </button>
          </div>
        ) : (
          <div className="px-4 py-4 space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="bg-white border border-[#e9eaeb] rounded-xl p-4">
                <div className="flex gap-4">
                  <div className="w-20 h-20 flex-shrink-0 bg-[#f9f9f9] rounded-lg overflow-hidden">
                    <ImageWithFallback 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black">
                          {item.name}
                        </h3>
                        <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">
                          {item.weight} • {item.grind}
                        </p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="p-1">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                          <path d="M15 5L5 15M5 5L15 15" stroke="#717680" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black">
                        ${item.price.toLocaleString('es-CO')}
                      </p>
                      
                      <div className="flex items-center gap-3 bg-[#f9f9f9] rounded-full px-3 py-1">
                        <button 
                          onClick={() => updateCartItem(item.id, Math.max(1, item.quantity - 1))}
                          className="w-6 h-6 flex items-center justify-center"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                            <path d="M3.33334 8H12.6667" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <span className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black w-6 text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateCartItem(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                            <path d="M8 3.33333V12.6667M3.33334 8H12.6667" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fixed Bottom Summary - Above BottomNav */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-[#e9eaeb] px-4 py-4 z-10">
        <div className="space-y-3 mb-4">
          <div className="flex justify-between">
            <span className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680]">Subtotal</span>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black">
              ${subtotal.toLocaleString('es-CO')}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680]">Envío</span>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black">
              ${shipping.toLocaleString('es-CO')}
            </span>
          </div>
          <div className="h-px bg-[#e9eaeb]" />
          <div className="flex justify-between">
            <span className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black">Total</span>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#f72585]">
              ${total.toLocaleString('es-CO')}
            </span>
          </div>
        </div>
        
        <button
          onClick={handlePayment}
          className="w-full bg-[#f72585] border border-[#f72585] rounded-[32px] px-5 py-3 font-['Poppins:SemiBold',sans-serif] text-[16px] text-white"
        >
          Pagar
        </button>
      </div>

      <BottomNav activeTab="cart" onNavigate={onNavigate} />
      
      {/* Modales */}
      <ProcessingModal isOpen={showProcessing} type="order" />
      <SuccessModal 
        isOpen={showSuccess}
        type="order"
        onClose={handleSuccessClose}
        onViewDetails={handleViewOrder}
      />
    </div>
  );
}