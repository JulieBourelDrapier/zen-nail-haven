
import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import ZenNailsLogo from './ZenNailsLogo';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <ZenNailsLogo size="md" />
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-foreground hover:text-zen-accent transition-colors duration-300 font-medium"
              aria-label="Go to home section"
            >
              Accueil
            </a>
            <a 
              href="#services" 
              className="text-foreground hover:text-zen-accent transition-colors duration-300 font-medium"
              aria-label="View our services"
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-zen-accent transition-colors duration-300 font-medium"
              aria-label="Learn about us"
            >
              À propos
            </a>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <a 
                href="#contact" 
                className="bg-zen-accent text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
                aria-label="Contact us"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              className="p-2 text-foreground hover:text-zen-accent transition-colors duration-300"
              aria-label="Open mobile menu"
              aria-expanded="false"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
