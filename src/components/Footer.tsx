
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zen-forest text-zen-pearl py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-6 w-6 text-zen-sage animate-glow" aria-hidden="true" />
            <h3 className="text-xl font-semibold">Zen Nails</h3>
          </div>
          
          <p className="text-zen-pearl/80 mb-6 max-w-md mx-auto">
            Votre oasis de sérénité et de beauté. 
            Prenez soin de vous dans un environnement pensé pour votre bien-être.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div className="text-center">
              <p className="text-zen-sage font-medium">Téléphone</p>
              <a 
                href="tel:+33123456789" 
                className="text-zen-pearl/80 hover:text-zen-pearl transition-colors duration-300"
                aria-label="Call us at +33 1 23 45 67 89"
              >
                01 23 45 67 89
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-zen-sage font-medium">Email</p>
              <a 
                href="mailto:contact@zen-nails.fr" 
                className="text-zen-pearl/80 hover:text-zen-pearl transition-colors duration-300"
                aria-label="Send us an email"
              >
                contact@zen-nails.fr
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-zen-sage font-medium">Localisation</p>
              <p className="text-zen-pearl/80">Paris 15ème</p>
            </div>
          </div>
          
          <div className="border-t border-zen-sage/20 pt-8">
            <p className="text-zen-pearl/60 text-sm">
              © 2024 Zen Nails. Tous droits réservés. 
              <span className="block mt-2">
                Créé avec ♡ pour votre bien-être et votre sérénité.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
