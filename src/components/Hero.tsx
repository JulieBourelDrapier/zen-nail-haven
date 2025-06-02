
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen zen-gradient flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-zen-forest mb-6 leading-tight">
            Votre Oasis de
            <span className="text-gradient block mt-2">Sérénité et Beauté</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zen-forest/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Découvrez un havre de paix où le temps s'arrête. Dans mon salon à domicile, 
            chaque soin devient un moment de détente absolue, pensé spécialement pour vous.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="bg-zen-sage text-zen-pearl px-8 py-4 rounded-full hover:bg-zen-forest transition-all duration-300 transform hover:scale-105 font-medium shadow-lg text-lg"
              aria-label="Book an appointment"
            >
              Prendre Rendez-vous
            </a>
            <a 
              href="#services" 
              className="border-2 border-zen-sage text-zen-sage px-8 py-4 rounded-full hover:bg-zen-sage hover:text-zen-pearl transition-all duration-300 font-medium text-lg"
              aria-label="View our services"
            >
              Découvrir nos Soins
            </a>
          </div>
        </div>
        
        {/* Floating elements for zen atmosphere */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-zen-mint/20 rounded-full animate-float hidden lg:block" aria-hidden="true"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-zen-lavender/20 rounded-full animate-float animation-delay-1000 hidden lg:block" aria-hidden="true"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-zen-sage/20 rounded-full animate-float animation-delay-2000 hidden lg:block" aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default Hero;
