import { useState } from 'react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import BottomNav from '../../components/BottomNav';
import { useApp } from '../../context/AppContext';
import FilterModal, { FilterOptions } from '../../components/FilterModal';
import SortModal, { SortOption } from '../../components/SortModal';
import { ProductCard } from '../../components/ProductCard';
import type { Screen } from '../../App';
import imgCafe1 from "figma:asset/835062bbc8c4f70c48314738c1dada92fde739c5.png";
import imgCafe2 from "figma:asset/0479a0625ae1cac4470061a496b52f3f343a0414.png";
import imgCafe3 from "figma:asset/245315345536c43caaa155f247b37d6cee9f161a.png";
import imgCafe4 from "figma:asset/e0fcb7655ec92cdc5a6473a3802042003dc5bc2e.png";
import imgCafe5 from "figma:asset/a58c40e03a996dfedd78d17574e663750e4fc3f9.png";

interface ShopScreenProps {
  onNavigate: (screen: Screen) => void;
  onProductSelect: (product: any) => void;
}

const products = [
  {
    id: '1',
    name: 'Café Quindio',
    price: 26000,
    image: imgCafe1,
    badge: { text: 'Nuevo', color: 'purple' },
    origin: 'Quindío',
    location: 'Armenia - Quindio',
    profile: 'Floral'
  },
  {
    id: '2',
    name: 'Buenavista',
    price: 40800,
    originalPrice: 48000,
    image: imgCafe2,
    badge: { text: '15% dcto', color: 'green' },
    origin: 'Antioquia',
    location: 'Buenavista - Quindio',
    profile: 'Achocolatado'
  },
  {
    id: '3',
    name: 'Delirante',
    price: 26000,
    image: imgCafe3,
    badge: { text: 'Quedan 2', color: 'red' },
    origin: 'Huila',
    location: 'Salento - Quindio',
    profile: 'Frutal'
  },
  {
    id: '4',
    name: 'Guanes',
    price: 31000,
    image: imgCafe4,
    origin: 'Santander',
    location: 'Socorro - Santander',
    profile: 'Cítrico'
  },
  {
    id: '5',
    name: 'Delirante',
    price: 26000,
    image: imgCafe5,
    origin: 'Huila',
    location: 'Gigante - Huila',
    profile: 'Frutal'
  },
  {
    id: '6',
    name: 'Guanes',
    price: 31000,
    image: imgCafe4,
    origin: 'Santander',
    location: 'Socorro - Santander',
    profile: 'Cítrico'
  }
];

export default function ShopScreen({ onNavigate, onProductSelect }: ShopScreenProps) {
  const { notificationCount } = useApp();
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    priceRange: [0, 100000],
    categories: [],
    inStock: false
  });
  const [sortOption, setSortOption] = useState<SortOption>('relevant');

  const handleApplyFilters = (filters: FilterOptions) => {
    setFilterOptions(filters);
  };

  const handleApplySort = (sort: SortOption) => {
    setSortOption(sort);
  };

  // Filtrar productos por búsqueda
  const filteredProducts = products.filter(product => {
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.profile.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  // Ordenar productos
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'name-a-z':
        return a.name.localeCompare(b.name);
      case 'name-z-a':
        return b.name.localeCompare(a.name);
      case 'newest':
        return 0; // Mantener orden actual
      default:
        return 0; // Más relevante - mantener orden actual
    }
  });

  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      
      {/* Header with search */}
      <div className="bg-white border-b border-[#e9eaeb] px-4 py-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 bg-[#fafafa] rounded-[40px] px-3.5 py-2.5 flex items-center gap-2 shadow-sm">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path 
                d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" 
                stroke="#717680" 
                strokeWidth="1.67" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M17.5 17.5L13.875 13.875" 
                stroke="#717680" 
                strokeWidth="1.67" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Buscar en origen"
              className="flex-1 bg-transparent font-['Poppins:Regular',sans-serif] text-[16px] leading-[24px] text-black placeholder:text-[#717680] outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <button className="relative p-1">
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
                <span className="font-['Poppins:SemiBold',sans-serif] text-[10px] text-white">
                  {notificationCount}
                </span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="space-y-6 px-4 py-4">
          {/* Filter and Sort buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-white border border-[#d5d7da] rounded-[40px] px-3.5 py-2 flex items-center gap-2 shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path 
                  d="M2.5 5.83333H6.66667M6.66667 5.83333C6.66667 7.2141 7.78595 8.33333 9.16667 8.33333C10.5474 8.33333 11.6667 7.2141 11.6667 5.83333C11.6667 4.45262 10.5474 3.33333 9.16667 3.33333C7.78595 3.33333 6.66667 4.45262 6.66667 5.83333ZM17.5 5.83333H11.6667H17.5ZM2.5 14.1667H8.33333H2.5ZM8.33333 14.1667C8.33333 15.5474 9.45262 16.6667 10.8333 16.6667C12.2141 16.6667 13.3333 15.5474 13.3333 14.1667C13.3333 12.7859 12.2141 11.6667 10.8333 11.6667C9.45262 11.6667 8.33333 12.7859 8.33333 14.1667ZM17.5 14.1667H13.3333H17.5Z" 
                  stroke="black" 
                  strokeWidth="1.6" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-['Poppins:SemiBold',sans-serif] text-[14px] leading-[20px] text-[#414651]">
                Filtrar
              </span>
            </button>

            <button
              onClick={() => setShowSort(!showSort)}
              className="bg-white border border-[#d5d7da] rounded-[40px] px-3.5 py-2 flex items-center gap-2 shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path 
                  d="M5.83333 15V5M5.83333 5L2.5 8.33333M5.83333 5L9.16667 8.33333M14.1667 5V15M14.1667 15L17.5 11.6667M14.1667 15L10.8333 11.6667" 
                  stroke="black" 
                  strokeWidth="1.6" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-['Poppins:SemiBold',sans-serif] text-[14px] leading-[20px] text-[#414651]">
                Ordenar
              </span>
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 gap-4">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={onProductSelect}
              />
            ))}
          </div>
        </div>
      </div>

      <BottomNav activeTab="shop" onNavigate={onNavigate} />

      {/* Filter Modal */}
      <FilterModal
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
        currentFilters={filterOptions}
        onApply={handleApplyFilters}
      />

      {/* Sort Modal */}
      <SortModal
        isOpen={showSort}
        onClose={() => setShowSort(false)}
        currentSort={sortOption}
        onApply={handleApplySort}
      />
    </div>
  );
}