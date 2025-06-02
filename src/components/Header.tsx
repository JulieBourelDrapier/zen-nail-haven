
import React from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zen-pearl/95 backdrop-blur-sm border-b border-zen-sand/20">
      <nav className="container mx-auto px-4 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-zen-sage animate-glow" aria-hidden="true" />
            <h1 className="text-xl font-semibold text-zen-forest">Zen Nails</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-zen-forest hover:text-zen-sage transition-colors duration-300 font-medium"
              aria-label="Go to home section"
            >
              Accueil
            </a>
            <a 
              href="#services" 
              className="text-zen-forest hover:text-zen-sage transition-colors duration-300 font-medium"
              aria-label="View our services"
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-zen-forest hover:text-zen-sage transition-colors duration-300 font-medium"
              aria-label="Learn about us"
            >
              À propos
            </a>
            <a 
              href="#contact" 
              className="bg-zen-sage text-zen-pearl px-6 py-2 rounded-full hover:bg-zen-forest transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
              aria-label="Contact us"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-zen-forest hover:text-zen-sage transition-colors duration-300"
            aria-label="Open mobile menu"
            aria-expanded="false"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
