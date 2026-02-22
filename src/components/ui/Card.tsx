import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  border?: boolean;
}

export default function Card({ 
  children, 
  onClick, 
  padding = 'md',
  hover = true,
  border = true
}: CardProps) {
  
  const baseStyles = "bg-white rounded-[32px] transition-all";
  
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };
  
  const borderStyle = border ? 'border border-[#e9eaeb]' : '';
  const hoverStyle = hover ? 'hover:shadow-md' : '';
  const clickStyle = onClick ? 'cursor-pointer' : '';
  
  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${paddingStyles[padding]} ${borderStyle} ${hoverStyle} ${clickStyle}`}
    >
      {children}
    </div>
  );
}
