
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-6 w-6 text-zen-accent animate-glow" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-foreground">Zen Nails</h3>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Votre oasis de sérénité et de beauté à Lille. 
            Prenez soin de vous dans un environnement pensé pour votre bien-être.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div className="text-center">
              <p className="text-zen-accent font-medium">Téléphone</p>
              <a 
                href="tel:+33320123456" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="Call us at +33 3 20 12 34 56"
              >
                03 20 12 34 56
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-zen-accent font-medium">Email</p>
              <a 
                href="mailto:contact@zen-nails-lille.fr" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="Send us an email"
              >
                contact@zen-nails-lille.fr
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-zen-accent font-medium">Localisation</p>
              <p className="text-muted-foreground">Lille, Nord</p>
            </div>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
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
