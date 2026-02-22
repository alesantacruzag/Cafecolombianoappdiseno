import { useState } from 'react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import BottomNav from '../../components/BottomNav';
import { useApp } from '../../context/AppContext';
import { LogoOrigen } from '../../components/LogoOrigen';
import type { Screen } from '../../App';
import imgProduct from "figma:asset/835062bbc8c4f70c48314738c1dada92fde739c5.png";
import { Share2, Heart, ShoppingCart, ChevronDown } from 'lucide-react';

interface ProductDetailProps {
  product: any;
  onNavigate: (screen: Screen) => void;
}

export default function ProductDetail({ product, onNavigate }: ProductDetailProps) {
  const { addToCart } = useApp();
  const [selectedWeight, setSelectedWeight] = useState('250 gr');
  const [selectedGrind, setSelectedGrind] = useState('Grano');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const weights = ['250 gr', '450 gr', '2.500 gr'];
  const grinds = ['Grano', 'Molido'];
  const maxStock = 10; // Stock máximo disponible

  const handleAddToCart = () => {
    addToCart({
      id: product?.id || '1',
      name: product?.name || 'Café Obraje',
      price: product?.price || 26000,
      image: product?.image || imgProduct,
      weight: selectedWeight,
      grind: selectedGrind,
      quantity: quantity
    });
  };

  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      
      {/* Header */}
      <div className="bg-white px-4 pt-6 pb-4 flex items-center justify-between">
        <LogoOrigen className="h-[28px]" />
        <div className="flex items-center gap-3">
          <button className="p-2">
            <Share2 className="w-5 h-5 text-black" />
          </button>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="p-2"
          >
            <Heart 
              className={`w-5 h-5 ${isFavorite ? 'fill-[#f72585] text-[#f72585]' : 'text-black'}`}
            />
          </button>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 pb-32">
          {/* Product Title */}
          <div className="mb-4">
            <h1 className="font-['Poppins'] font-semibold text-[18px] leading-[28px] text-black">
              {product?.name || 'Café Obraje'}
            </h1>
            <p className="font-['Poppins'] font-normal text-[12px] leading-[18px] text-[#717680]">
              {product?.location || 'Tarqui - Huila'}
            </p>
          </div>

          {/* Product Image */}
          <div className="h-[240px] mb-6 flex items-center justify-center">
            <ImageWithFallback 
              src={product?.image || imgProduct}
              alt={product?.name || 'Café'}
              className="h-full object-contain"
            />
          </div>

          {/* Weight Selection */}
          <div className="mb-4">
            <p className="font-['Poppins'] font-medium text-[14px] leading-[20px] text-[#414651] mb-2">
              Peso
            </p>
            <div className="flex gap-2">
              {weights.map((weight) => (
                <button
                  key={weight}
                  onClick={() => setSelectedWeight(weight)}
                  className={`px-4 py-2 rounded-[32px] font-['Poppins'] font-medium text-[14px] leading-[20px] transition-all ${
                    selectedWeight === weight
                      ? 'bg-[#b4aeff] text-white shadow-sm'
                      : 'bg-[#f9f9f9] text-black'
                  }`}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>

          {/* Grind Selection */}
          <div className="mb-6">
            <p className="font-['Poppins'] font-medium text-[14px] leading-[20px] text-[#414651] mb-2">
              Molienda
            </p>
            <div className="flex gap-2">
              {grinds.map((grind) => (
                <button
                  key={grind}
                  onClick={() => setSelectedGrind(grind)}
                  className={`px-4 py-2 rounded-[32px] font-['Poppins'] font-medium text-[14px] leading-[20px] transition-all ${
                    selectedGrind === grind
                      ? 'bg-[#b4aeff] text-white shadow-sm'
                      : 'bg-[#f9f9f9] text-black'
                  }`}
                >
                  {grind}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="mb-2">
            <p className="font-['Poppins'] font-semibold text-[28px] leading-[36px] text-black">
              ${(product?.price || 26000).toLocaleString('es-CO')}
            </p>
          </div>

          {/* Discount Badge */}
          <div className="mb-4">
            <div className="bg-[#cee90d] px-3 py-1 rounded-[16px] inline-block">
              <p className="font-['Poppins'] font-medium text-[12px] text-[#5f6b05]">
                10% dcto con Mastercard
              </p>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block font-['Poppins'] font-medium text-[14px] text-black mb-2">
              Elige la cantidad
            </label>
            <select 
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full px-4 py-3 border border-[#e9eaeb] rounded-[8px] font-['Poppins'] font-normal text-[14px] text-black bg-white appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%23717680' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: '20px 20px'
              }}
            >
              {Array.from({ length: maxStock }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  Cantidad {num}
                </option>
              ))}
            </select>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#f72585] rounded-[32px] py-3 mb-6 flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
            <span className="font-['Poppins'] font-semibold text-[16px] text-white">
              Agregar al carrito
            </span>
          </button>

          {/* Seller Info */}
          <div className="mb-6">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-[#f9f9f9] overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                  alt="Carlos Ruiz"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins'] font-semibold text-[14px] text-black">
                  Vendido por: Carlos Ruiz
                </p>
                <p className="font-['Poppins'] font-normal text-[12px] text-[#717680]">
                  Miembro hace 5 años
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="font-['Poppins'] font-normal text-[14px] leading-[22px] text-black mb-4">
              Caficultor de tercera generación que cultiva en café en las montañas de su finca, donde el clima y la altura crean un terroir único. El café se cultiva con cuidado desde la siembra hasta la cosecha manual.
            </p>
            <p className="font-['Poppins'] font-normal text-[14px] leading-[22px] text-black mb-4">
              Su compromiso con la calidad, la sostenibilidad y las prácticas éticas se refleja en cada taza. Al elegir este café, obtendrás un sabor excepcional y apoyarás una producción consciente que valora tanto al agricultor como al medio ambiente.
            </p>
            <button className="w-full border border-black rounded-[32px] py-3">
              <span className="font-['Poppins'] font-semibold text-[16px] text-black">
                Contactar
              </span>
            </button>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <p className="font-['Poppins'] font-semibold text-[16px] text-black mb-3">
              Medios de pago
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="h-[24px] w-[38px] bg-[#f9f9f9] rounded flex items-center justify-center">
                <svg className="w-8 h-5" viewBox="0 0 32 20">
                  <circle cx="10" cy="10" r="10" fill="#EB001B"/>
                  <circle cx="22" cy="10" r="10" fill="#F79E1B"/>
                </svg>
              </div>
              <div className="h-[24px] px-2 bg-[#f9f9f9] rounded flex items-center justify-center">
                <span className="font-['Poppins'] font-semibold text-[12px] text-[#1434CB]">VISA</span>
              </div>
              <div className="h-[24px] px-2 bg-[#f9f9f9] rounded flex items-center justify-center">
                <span className="font-['Poppins'] font-semibold text-[10px] text-[#006FCF]">AMERICAN EXPRESS</span>
              </div>
              <div className="h-[24px] px-2 bg-[#f9f9f9] rounded flex items-center justify-center">
                <span className="font-['Poppins'] font-semibold text-[12px] text-[#0079BE]">Diners Club</span>
              </div>
              <div className="h-[24px] px-2 bg-[#f9f9f9] rounded flex items-center justify-center">
                <span className="font-['Poppins'] font-semibold text-[12px] text-[#EF3340]">Nequi</span>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mb-6">
            <p className="font-['Poppins'] font-semibold text-[16px] text-black mb-3">
              Opiniones
            </p>
            <div className="flex items-center gap-2 mb-4">
              <p className="font-['Poppins'] font-bold text-[32px] text-black">4.5</p>
              <div>
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4].map((i) => (
                    <svg key={i} className="w-4 h-4" viewBox="0 0 16 16" fill="#FDB813">
                      <path d="M8 0L10.163 5.032L15.511 5.854L11.756 9.512L12.702 14.854L8 12.512L3.298 14.854L4.244 9.512L0.489 5.854L5.837 5.032L8 0Z"/>
                    </svg>
                  ))}
                  <svg className="w-4 h-4" viewBox="0 0 16 16">
                    <defs>
                      <linearGradient id="half-star">
                        <stop offset="50%" stopColor="#FDB813"/>
                        <stop offset="50%" stopColor="#E9EAEB"/>
                      </linearGradient>
                    </defs>
                    <path fill="url(#half-star)" d="M8 0L10.163 5.032L15.511 5.854L11.756 9.512L12.702 14.854L8 12.512L3.298 14.854L4.244 9.512L0.489 5.854L5.837 5.032L8 0Z"/>
                  </svg>
                </div>
                <p className="font-['Poppins'] font-normal text-[12px] text-[#717680]">
                  56 calificaciones
                </p>
              </div>
            </div>

            {/* Review Item */}
            <div className="border-t border-[#e9eaeb] pt-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#f9f9f9] overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                    alt="Daniela Vélez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-['Poppins'] font-semibold text-[14px] text-black">
                    Daniela Vélez
                  </p>
                  <p className="font-['Poppins'] font-normal text-[12px] text-[#717680]">
                    Medellín, Colombia
                  </p>
                </div>
              </div>
              <p className="font-['Poppins'] font-normal text-[14px] leading-[22px] text-black mb-2">
                Un café increíble, la frescura y la calidad del grano hacen toda la diferencia. Definitivamente volveré a comprar.
              </p>
              <p className="font-['Poppins'] font-normal text-[12px] text-[#717680]">
                hace 2 semanas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="shop" onNavigate={onNavigate} />
    </div>
  );
}