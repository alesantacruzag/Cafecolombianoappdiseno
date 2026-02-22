import { ImageWithFallback } from './figma/ImageWithFallback';
import Tag from './ui/Tag';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    badge?: {
      text: string;
      variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'purple' | 'yellow' | 'green' | 'discount';
      color?: string; // Legacy support for shop screen
    };
  };
  onClick: (product: any) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  // Map legacy color names to variants if needed
  const getVariant = (badge: any) => {
    if (badge.variant) return badge.variant;
    if (badge.color === 'purple') return 'purple';
    if (badge.color === 'green') return 'green';
    if (badge.color === 'red') return 'yellow';
    return 'primary';
  };

  return (
    <button
      onClick={() => onClick(product)}
      className="bg-white border border-[#e9eaeb] rounded-[24px] overflow-hidden text-left flex flex-col w-full"
    >
      {/* Product Image Container */}
      <div className="relative bg-white h-[170px] flex items-center justify-center p-4">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Tag
              label={product.badge.text}
              variant={getVariant(product.badge)}
              size="sm"
            />
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="px-4 pb-5 flex-1 flex flex-col justify-end">
        <h4 className="font-poppins font-semibold text-[15px] text-black mb-2 line-clamp-1">
          {product.name}
        </h4>
        <div className="flex flex-col">
          {product.originalPrice && (
            <p className="font-poppins font-normal text-[13px] text-[#a4a7ae] line-through mb-0.5">
              ${product.originalPrice.toLocaleString('es-CO')}
            </p>
          )}
          <p className="font-poppins font-semibold text-[18px] text-black">
            ${product.price.toLocaleString('es-CO')}
          </p>
        </div>
      </div>
    </button>
  );
}
