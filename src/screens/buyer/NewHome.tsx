import { useState } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import Tag from '../../components/ui/Tag';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import PaymentLogos from '../../components/PaymentLogos';
import { ProductCard } from '../../components/ProductCard';
import type { Screen } from '../../App';
import { useApp } from '../../context/AppContext';
import BottomNav from '../../components/BottomNav';
import { LogoOrigen } from '../../components/LogoOrigen';
import imgHeroBanner from "figma:asset/c1c92d626b1a30a85e24c7653894a4c01041286b.png";
import imgCafe1 from "figma:asset/835062bbc8c4f70c48314738c1dada92fde739c5.png";
import imgCafe2 from "figma:asset/0479a0625ae1cac4470061a496b52f3f343a0414.png";
import imgCafe3 from "figma:asset/245315345536c43caaa155f247b37d6cee9f161a.png";
import imgCafe4 from "figma:asset/e0fcb7655ec92cdc5a6473a3802042003dc5bc2e.png";
import imgExperience from "figma:asset/4849884d7a1d305584a1bc53d73e0e9f702dad30.png";

interface NewHomeProps {
  onNavigate: (screen: Screen) => void;
  onProductSelect?: (product: any) => void;
}

export default function NewHome({ onNavigate, onProductSelect }: NewHomeProps) {
  const { notificationCount } = useApp();
  const [activeTab, setActiveTab] = useState('oferta');
  const [showPromoBanner, setShowPromoBanner] = useState(true);

  const tabs = [
    { id: 'oferta', label: 'Oferta' },
    { id: 'frutales', label: 'Frutales' },
    { id: 'dulces', label: 'Dulces' },
    { id: 'citricos', label: 'Cítricos' }
  ];

  const allProducts = [
    // Oferta
    {
      id: '1',
      name: 'Café Quindio',
      price: 26000,
      badge: { text: 'Nuevo', variant: 'purple' as const },
      image: imgCafe1,
      category: 'oferta',
      location: 'Armenia - Quindio'
    },
    {
      id: '2',
      name: 'Buenavista',
      price: 40800,
      originalPrice: 48000,
      badge: { text: '15% dcto', variant: 'discount' as const },
      image: imgCafe2,
      category: 'oferta',
      location: 'Buenavista - Quindio'
    },
    {
      id: '3',
      name: 'Delirante',
      price: 26000,
      badge: { text: 'Quedan 2', variant: 'yellow' as const },
      image: imgCafe3,
      category: 'oferta',
      location: 'Salento - Quindio'
    },
    {
      id: '4',
      name: 'Guanes',
      price: 31000,
      image: imgCafe4,
      category: 'oferta',
      location: 'Socorro - Santander'
    },
    // Frutales
    {
      id: '5',
      name: 'Café Frutal Premium',
      price: 28000,
      badge: { text: 'Nuevo', variant: 'purple' as const },
      image: imgCafe1,
      category: 'frutales',
      location: 'Pitalito - Huila'
    },
    {
      id: '6',
      name: 'Bosque de Frutas',
      price: 35000,
      originalPrice: 42000,
      badge: { text: '15% dcto', variant: 'discount' as const },
      image: imgCafe2,
      category: 'frutales',
      location: 'Sevilla - Valle'
    },
    {
      id: '7',
      name: 'Delirante',
      price: 26000,
      badge: { text: 'Quedan 2', variant: 'yellow' as const },
      image: imgCafe3,
      category: 'frutales',
      location: 'Salento - Quindio'
    },
    {
      id: '8',
      name: 'Notas de Frutos Rojos',
      price: 32000,
      image: imgCafe4,
      category: 'frutales',
      location: 'Santa Rosa - Risaralda'
    },
    // Dulces
    {
      id: '9',
      name: 'Caramelo Intenso',
      price: 27000,
      image: imgCafe1,
      category: 'dulces',
      location: 'Gigante - Huila'
    },
    {
      id: '10',
      name: 'Miel Silvestre',
      price: 38000,
      originalPrice: 45000,
      badge: { text: '15% dcto', variant: 'discount' as const },
      image: imgCafe2,
      category: 'dulces',
      location: 'Mistrató - Risaralda'
    },
    {
      id: '11',
      name: 'Chocolate y Vainilla',
      price: 29000,
      badge: { text: 'Nuevo', variant: 'purple' as const },
      image: imgCafe3,
      category: 'dulces',
      location: 'Fredonia - Antioquia'
    },
    {
      id: '12',
      name: 'Dulzura Natural',
      price: 33000,
      image: imgCafe4,
      category: 'dulces',
      location: 'Jericó - Antioquia'
    },
    // Cítricos
    {
      id: '13',
      name: 'Mandarina Aromática',
      price: 30000,
      image: imgCafe1,
      category: 'citricos',
      location: 'Fresno - Tolima'
    },
    {
      id: '14',
      name: 'Limón y Bergamota',
      price: 36000,
      badge: { text: 'Nuevo', variant: 'purple' as const },
      image: imgCafe2,
      category: 'citricos',
      location: 'Libano - Tolima'
    },
    {
      id: '15',
      name: 'Guanes',
      price: 31000,
      image: imgCafe4,
      category: 'citricos',
      location: 'Socorro - Santander'
    },
    {
      id: '16',
      name: 'Naranja Valencia',
      price: 34000,
      originalPrice: 40000,
      badge: { text: '15% dcto', variant: 'discount' as const },
      image: imgCafe3,
      category: 'citricos',
      location: 'Caicedonia - Valle'
    }
  ];

  const filteredProducts = allProducts.filter(p => p.category === activeTab);

  return (
    <div className="relative w-full h-full bg-white flex flex-col">

      {/* Header */}
      <div className="bg-white border-b border-[#e9eaeb] px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <LogoOrigen className="h-6" />

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('shop')}
              className="p-1"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 20L16 16" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => onNavigate('notifications')}
              className="p-1 relative"
            >
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
                <div className="absolute -top-1 -right-1 bg-[#f72585] rounded-full px-1.5 py-0.5 min-w-[18px] flex items-center justify-center">
                  <span className="font-['Poppins:SemiBold',sans-serif] text-[10px] text-white">
                    {notificationCount}
                  </span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-24">
        {/* Promo Banner */}
        {showPromoBanner && (
          <div className="bg-black px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" viewBox="0 0 16 16">
                <path
                  d="M8 4.29333V6.51333M8.01333 1.33333C5.56 1.33333 3.57333 3.32 3.57333 5.77333V7.17333C3.57333 7.62667 3.38667 8.30667 3.15333 8.69333L2.30667 10.1067C1.78667 10.98 2.14667 11.9533 3.10667 12.2733C6.29333 13.3333 9.74667 13.3333 12.9333 12.2733C13.8267 11.9733 14.2133 10.92 13.7267 10.1067L12.88 8.69333C12.6467 8.28667 12.46 7.62 12.46 7.17333V5.77333C12.4533 3.33333 10.4533 1.33333 8.01333 1.33333ZM10.2267 12.5467C10.2267 13.7667 9.22667 14.7667 8.00667 14.7667C7.40001 14.7667 6.83334 14.5133 6.43334 14.1133C6.03334 13.7133 5.78001 13.1467 5.78001 12.5467"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
              <p className="font-['Poppins'] font-normal text-[13px] text-white truncate">
                <span className="font-['Poppins'] font-semibold">Hasta 20% dcto.</span> en todos los accesorios
              </p>
            </div>
            <button
              onClick={() => setShowPromoBanner(false)}
              className="text-white p-1 flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Hero Banner */}
        <div className="px-4 pt-4 pb-3">
          <div className="relative bg-white rounded-[20px] overflow-hidden h-[180px] flex">
            {/* Left side - Image */}
            <div className="w-[45%] relative bg-[#494949]">
              <ImageWithFallback
                src={imgHeroBanner}
                alt="Promo banner"
                className="w-full h-full object-cover"
              />
              {/* Logo Badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5">
                <LogoOrigen className="h-3" />
                <span className="text-[10px]">|</span>
                <div className="flex gap-0.5">
                  <div className="w-3 h-3 bg-[#eb001b] rounded-full" />
                  <div className="w-3 h-3 bg-[#f79e1b] rounded-full -ml-1.5" />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-[55%] bg-[#f72585] relative flex flex-col justify-between p-4">
              <div>
                <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] leading-[24px] text-white mb-3">
                  Hasta 10% dcto. pagando con tu Mastercard
                </h2>
                <button
                  onClick={() => onNavigate('shop')}
                  className="bg-black text-white rounded-full px-5 py-2 font-['Poppins:SemiBold',sans-serif] text-[13px]"
                >
                  Comprar
                </button>
              </div>
              <p className="font-['Poppins:Regular',sans-serif] text-[9px] text-white/90">
                Aplican TyC
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 py-3">
          <div className="w-2 h-2 rounded-full bg-[#f72585]" />
          <div className="w-2 h-2 rounded-full bg-[#d5d7da]" />
          <div className="w-2 h-2 rounded-full bg-[#d5d7da]" />
        </div>

        {/* Products Section */}
        <div className="px-4 pb-6">
          <h3 className="font-['Poppins'] font-semibold text-[18px] text-black mb-4">
            Explora nuestras categorías
          </h3>

          {/* Category Tabs */}
          <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full font-['Poppins:Medium',sans-serif] text-[14px] whitespace-nowrap transition-colors ${activeTab === tab.id
                  ? 'bg-[#f72585] text-white'
                  : 'bg-white border-2 border-[#e9eaeb] text-black'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={onProductSelect!}
              />
            ))}
          </div>
        </div>

        {/* Experience Card */}
        <div className="px-4 pb-6">
          <button
            onClick={() => onNavigate('experiences-home')}
            className="w-full bg-white border-2 border-[#e9eaeb] rounded-2xl overflow-hidden text-left"
          >
            {/* Experience Image */}
            <div className="relative h-[160px]">
              <ImageWithFallback
                src={imgExperience}
                alt="Del grano a la taza"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <Tag label="Tour destacado" variant="green" size="sm" />
              </div>
            </div>

            {/* Experience Info */}
            <div className="p-4">
              <h4 className="font-['Poppins'] font-semibold text-[16px] text-black mb-3">
                Del grano a la taza
              </h4>
              <div className="bg-[#f72585] rounded-full py-2.5 flex items-center justify-center">
                <span className="font-['Poppins'] font-semibold text-[14px] text-white">
                  Reservar
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Payment Methods */}
        <div className="px-4 pb-6">
          <PaymentLogos />
        </div>
      </div>

      <BottomNav activeTab="home" onNavigate={onNavigate} />
    </div>
  );
}