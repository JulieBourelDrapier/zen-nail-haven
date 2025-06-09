
import React from 'react';
import { Heart, Hand } from 'lucide-react';

interface ZenNailsLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ZenNailsLogo = ({ size = 'md', className = '' }: ZenNailsLogoProps) => {
  const sizes = {
    sm: { container: 'w-8 h-8', icon: 'w-4 h-4', text: 'text-lg' },
    md: { container: 'w-12 h-12', icon: 'w-6 h-6', text: 'text-xl' },
    lg: { container: 'w-16 h-16', icon: 'w-8 h-8', text: 'text-2xl' }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${currentSize.container} relative flex items-center justify-center bg-zen-accent rounded-full shadow-lg`}>
        {/* Background gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zen-accent via-zen-primary to-zen-accent opacity-80"></div>
        
        {/* Central hand icon representing peace and care */}
        <Hand className={`${currentSize.icon} text-white relative z-10`} />
        
        {/* Small heart accent */}
        <Heart className="absolute -top-1 -right-1 w-3 h-3 text-zen-primary" fill="currentColor" />
      </div>
      
      <div className="flex flex-col">
        <h1 className={`${currentSize.text} font-bold text-foreground leading-tight`}>
          Zen Nails
        </h1>
        <p className="text-xs text-zen-accent font-medium tracking-wide">
          SÉRÉNITÉ & BEAUTÉ
        </p>
      </div>
    </div>
  );
};

export default ZenNailsLogo;
