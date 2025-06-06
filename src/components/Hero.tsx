
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen zen-gradient flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-zen-forest mb-6 leading-tight animate-fade-in opacity-0 animation-delay-300">
            Votre Oasis de
            <span className="text-gradient block mt-2 animate-fade-in opacity-0 animation-delay-500">Sérénité et Beauté</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zen-forest/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in opacity-0 animation-delay-700">
            Découvrez un havre de paix où le temps s'arrête. Dans mon salon à domicile, 
            chaque soin devient un moment de détente absolue, pensé spécialement pour vous.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in opacity-0 animation-delay-900">
            <a 
              href="#contact" 
              className="bg-zen-sage text-zen-pearl px-8 py-4 rounded-full hover:bg-zen-forest transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 font-medium shadow-lg text-lg hover:shadow-xl group"
              aria-label="Book an appointment"
            >
              <span className="group-hover:animate-pulse">Prendre Rendez-vous</span>
            </a>
            <a 
              href="#services" 
              className="border-2 border-zen-sage text-zen-sage px-8 py-4 rounded-full hover:bg-zen-sage hover:text-zen-pearl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 font-medium text-lg hover:shadow-lg"
              aria-label="View our services"
            >
              Découvrir nos Soins
            </a>
          </div>
        </div>
        
        {/* Enhanced floating elements with different animations */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-zen-mint/30 rounded-full animate-float opacity-0 animation-delay-1000 hidden lg:block" aria-hidden="true"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-zen-lavender/30 rounded-full animate-float animation-delay-1500 opacity-0 hidden lg:block" aria-hidden="true"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-zen-sage/30 rounded-full animate-float animation-delay-2000 opacity-0 hidden lg:block" aria-hidden="true"></div>
        <div className="absolute top-1/3 right-10 w-8 h-8 bg-zen-cream/40 rounded-full animate-float animation-delay-2500 opacity-0 hidden lg:block" aria-hidden="true"></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-zen-stone/30 rounded-full animate-float animation-delay-3000 opacity-0 hidden lg:block" aria-hidden="true"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-br from-zen-mint/10 to-zen-sage/10 rounded-full blur-xl animate-pulse animation-delay-1200 opacity-0"></div>
          <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-br from-zen-lavender/10 to-zen-stone/10 rounded-full blur-xl animate-pulse animation-delay-1800 opacity-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
