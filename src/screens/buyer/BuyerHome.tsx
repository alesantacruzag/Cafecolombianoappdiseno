import { BannerCarousel } from '../../components/BannerCarousel';
import { LogoOrigen } from '../../components/LogoOrigen';
import type { Screen } from '../../App';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useApp } from '../../context/AppContext';
import { ProductCard } from '../../components/ProductCard';
import BottomNav from '../../components/BottomNav';
import imgPromo from "figma:asset/835062bbc8c4f70c48314738c1dada92fde739c5.png";
import imgPromo2 from "figma:asset/0479a0625ae1cac4470061a496b52f3f343a0414.png";

interface BuyerHomeProps {
  onNavigate: (screen: Screen) => void;
}

const categories = [
  { id: 'offer', label: 'Oferta', active: true },
  { id: 'frutales', label: 'Frutales', active: false },
  { id: 'dulces', label: 'Dulces', active: false },
  { id: 'citricos', label: 'Cítricos', active: false }
];

import { useMemo, useEffect } from 'react';

export default function BuyerHome({ onNavigate }: BuyerHomeProps) {
  const { products, refreshProducts, notificationCount } = useApp();

  useEffect(() => {
    refreshProducts();
  }, []);

  // Mostrar solo 2 productos en el grid por ser Home
  const displayProducts = products.slice(0, 2);

  return (
    <div className="relative w-full h-full bg-white flex flex-col">

      {/* Header with search and notification */}
      <div className="bg-white px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoOrigen className="h-6" />
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('shop')}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 22L20 20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="relative p-1" onClick={() => onNavigate('profile')}>
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
                <div className="absolute -top-1 -right-1 bg-[#f72585] rounded-full w-4 h-4 flex items-center justify-center">
                  <span className="font-poppins font-semibold text-[10px] text-white">
                    {notificationCount}
                  </span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="bg-black px-4 py-3 flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
            <path
              d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 6.66667V10"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 13.3333H10.0083"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-poppins font-semibold text-[14px] leading-[20px] text-white">
            Hasta 20% dcto. en todos los accesorios
          </p>
        </div>
        <button>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="white"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Banner Carousel */}
        <BannerCarousel />

        {/* Categories Section */}
        <div className="px-4 mt-8">
          <h2 className="font-poppins font-semibold text-[20px] leading-[28px] text-black mb-6">
            Explora nuestras categorías
          </h2>

          <div className="flex border-b border-[#e9eaeb] mb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`flex-1 pb-2 font-poppins font-medium text-[16px] relative transition-colors ${cat.active ? 'text-black' : 'text-[#717680]'
                  }`}
                onClick={() => onNavigate('shop')}
              >
                {cat.label}
                {cat.active && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f72585]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="px-4 grid grid-cols-2 gap-4">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product as any}
              onClick={() => onNavigate('product-detail')}
            />
          ))}
        </div>
      </div>

      <BottomNav activeTab="home" onNavigate={onNavigate} />
    </div>
  );
}