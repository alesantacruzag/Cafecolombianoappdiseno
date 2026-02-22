import { useState } from 'react';
import BottomNav from '../../components/BottomNav';
import ProcessingModal from '../../components/ProcessingModal';
import SuccessModal from '../../components/SuccessModal';
import { useApp } from '../../context/AppContext';
import type { Screen } from '../../App';

interface CheckoutScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function CheckoutScreen({ onNavigate }: CheckoutScreenProps) {
  const { cart, clearCart } = useApp();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showProcessing, setShowProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 8000;

  const handleCheckout = () => {
    // Mostrar modal de procesamiento
    setShowProcessing(true);
    
    // Simular procesamiento de pago (2-3 segundos)
    setTimeout(() => {
      setShowProcessing(false);
      clearCart();
      // Mostrar modal de éxito
      setShowSuccess(true);
    }, 2500);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onNavigate('buyer-home');
  };

  const handleViewOrders = () => {
    setShowSuccess(false);
    onNavigate('orders');
  };

  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      
      <div className="bg-white border-b border-[#e9eaeb] px-4 py-4 flex items-center gap-4">
        <button onClick={() => onNavigate('cart')} className="p-1">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">Finalizar compra</h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        <div className="px-4 py-6 space-y-6">
          <div>
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black mb-4">Dirección de envío</h2>
            <div className="space-y-3">
              <input placeholder="Nombre completo" className="w-full px-4 py-3 border border-[#d5d7da] rounded-lg font-['Poppins:Regular',sans-serif] text-[16px]" />
              <input placeholder="Dirección" className="w-full px-4 py-3 border border-[#d5d7da] rounded-lg font-['Poppins:Regular',sans-serif] text-[16px]" />
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="Ciudad" className="px-4 py-3 border border-[#d5d7da] rounded-lg font-['Poppins:Regular',sans-serif] text-[16px]" />
                <input placeholder="Código postal" className="px-4 py-3 border border-[#d5d7da] rounded-lg font-['Poppins:Regular',sans-serif] text-[16px]" />
              </div>
              <input placeholder="Teléfono" className="w-full px-4 py-3 border border-[#d5d7da] rounded-lg font-['Poppins:Regular',sans-serif] text-[16px]" />
            </div>
          </div>

          <div>
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black mb-4">Método de pago</h2>
            <div className="space-y-3">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`w-full flex items-center gap-3 p-4 border rounded-xl ${paymentMethod === 'card' ? 'border-[#f72585] bg-pink-50' : 'border-[#e9eaeb]'}`}
              >
                <div className={`w-5 h-5 rounded-full border-2 ${paymentMethod === 'card' ? 'border-[#f72585]' : 'border-[#d5d7da]'} flex items-center justify-center`}>
                  {paymentMethod === 'card' && <div className="w-2.5 h-2.5 rounded-full bg-[#f72585]" />}
                </div>
                <span className="font-['Poppins:Medium',sans-serif] text-[14px]">Tarjeta de crédito/débito</span>
              </button>
              <button
                onClick={() => setPaymentMethod('pse')}
                className={`w-full flex items-center gap-3 p-4 border rounded-xl ${paymentMethod === 'pse' ? 'border-[#f72585] bg-pink-50' : 'border-[#e9eaeb]'}`}
              >
                <div className={`w-5 h-5 rounded-full border-2 ${paymentMethod === 'pse' ? 'border-[#f72585]' : 'border-[#d5d7da]'} flex items-center justify-center`}>
                  {paymentMethod === 'pse' && <div className="w-2.5 h-2.5 rounded-full bg-[#f72585]" />}
                </div>
                <span className="font-['Poppins:Medium',sans-serif] text-[14px]">PSE</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#e9eaeb] px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <span className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black">Total</span>
          <span className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-[#f72585]">
            ${total.toLocaleString('es-CO')}
          </span>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full bg-[#f72585] rounded-[32px] px-5 py-3 font-['Poppins:SemiBold',sans-serif] text-[16px] text-white"
        >
          Confirmar pedido
        </button>
      </div>

      <ProcessingModal isOpen={showProcessing} type="order" />
      <SuccessModal
        isOpen={showSuccess}
        type="order"
        onClose={handleSuccessClose}
        onViewDetails={handleViewOrders}
      />
    </div>
  );
}