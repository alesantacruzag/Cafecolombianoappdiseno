interface TagProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  icon?: 'check' | 'plus' | 'none';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'purple' | 'yellow' | 'green' | 'discount';
  size?: 'sm' | 'md' | 'lg';
}

export default function Tag({ 
  label, 
  selected = false, 
  onClick, 
  icon = 'none',
  variant = 'primary',
  size = 'md'
}: TagProps) {
  
  const baseStyles = "inline-flex items-center gap-2 rounded-[32px] transition-all font-['Poppins:Medium',sans-serif] border-none";
  
  const sizeStyles = {
    sm: 'px-3 py-1 text-[12px] leading-[18px]',
    md: 'px-4 py-2 text-[14px] leading-[20px]',
    lg: 'px-5 py-3 text-[16px] leading-[24px]'
  };
  
  const variantStyles = {
    primary: selected 
      ? 'bg-[#f72585] text-white'
      : 'bg-white border border-[#e9eaeb] text-black',
    secondary: selected
      ? 'bg-[#24b15e] text-white'
      : 'bg-white border border-[#e9eaeb] text-black',
    success: 'bg-[#24b15e] text-white',
    warning: 'bg-[#c4f00f] text-[#58660e]',
    purple: 'bg-[#c4c4ff] text-[#5e2fd3]',
    yellow: 'bg-[#f97066] text-white',
    green: 'bg-[#c4f00f] text-[#5d6c00]',
    discount: 'bg-[#c4f00f] text-[#5d6c00]'
  };
  
  const cursorStyle = onClick ? 'cursor-pointer' : '';
  
  const Component = onClick ? 'button' : 'div';
  
  return (
    <Component
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${cursorStyle}`}
    >
      {icon === 'check' && selected && (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
          <path 
            d="M13.3333 4L6 11.3333L2.66667 8" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )}
      {icon === 'plus' && !selected && (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
          <path 
            d="M8 3.33333V12.6667M3.33333 8H12.6667" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span>{label}</span>
    </Component>
  );
}