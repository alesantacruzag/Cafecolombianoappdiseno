import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  icon,
  iconPosition = 'left'
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-[32px] transition-all font-['Poppins:SemiBold',sans-serif] border-none";
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-[14px] leading-[20px]',
    md: 'px-5 py-3 text-[16px] leading-[24px]',
    lg: 'px-6 py-4 text-[18px] leading-[26px]'
  };
  
  const variantStyles = {
    primary: 'bg-[#f72585] text-white hover:bg-[#e01575] disabled:bg-[#d5d7da] disabled:text-[#717680]',
    secondary: 'bg-white border-2 border-[#f72585] text-[#f72585] hover:bg-[#fff5fa] disabled:border-[#d5d7da] disabled:text-[#717680]',
    tertiary: 'bg-white border border-[#e9eaeb] text-black hover:border-[#717680] disabled:text-[#717680]',
    ghost: 'bg-transparent text-[#f72585] hover:bg-[#fff5fa] disabled:text-[#717680]'
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} disabled:cursor-not-allowed`}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
}