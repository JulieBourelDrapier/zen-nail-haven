
import React from 'react';
import { Sparkles, Circle } from 'lucide-react';

const MassageServices = () => {
  const massageServices = [
    {
      title: "Massage Corps Complet",
      description: "Relaxation totale avec un massage professionnel du corps entier pour évacuer toutes les tensions accumulées.",
      duration: "1h30",
      price: "À partir de 65€"
    },
    {
      title: "Massage du Visage",
      description: "Soin anti-âge et relaxant du visage pour retrouver éclat et sérénité dans un moment de pure détente.",
      duration: "45 min",
      price: "À partir de 35€"
    },
    {
      title: "Massage Ciblé",
      description: "Traitement spécifique des zones de tension (dos, nuque, jambes) pour un soulagement immédiat et durable.",
      duration: "30 min",
      price: "À partir de 25€"
    },
    {
      title: "Massage Technologique",
      description: "Soin innovant avec équipements professionnels pour une expérience de massage révolutionnaire et apaisante.",
      duration: "1h",
      price: "À partir de 55€"
    }
  ];

  return (
    <section className="py-20 bg-zen-secondary/10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Massages & Détente
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Découvrez nos soins de massage pour une relaxation profonde 
            et un bien-être total dans notre espace dédié à la sérénité à Lille.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {massageServices.map((service, index) => (
            <article 
              key={index}
              className="sparkle-container zen-card-gradient bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-border cursor-pointer group relative overflow-hidden"
            >
              {/* Sparkle overlay effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-4 left-4 w-2 h-2 bg-zen-secondary rounded-full animate-sparkle"></div>
                <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-zen-accent rounded-full animate-sparkle animation-delay-500"></div>
                <div className="absolute bottom-6 left-12 w-1 h-1 bg-zen-primary rounded-full animate-sparkle animation-delay-1000"></div>
                <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-zen-secondary rounded-full animate-sparkle animation-delay-1500"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-zen-accent rounded-full animate-sparkle animation-delay-2000"></div>
              </div>

              <header className="flex items-start mb-4 relative z-10">
                <Sparkles className="h-6 w-6 text-zen-accent mt-1 mr-3 flex-shrink-0 group-hover:animate-spin transition-transform duration-500" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-card-foreground group-hover:text-zen-accent transition-colors duration-300">
                  {service.title}
                </h3>
              </header>
              
              <p className="text-card-foreground/80 mb-6 leading-relaxed relative z-10">
                {service.description}
              </p>
              
              <footer className="flex justify-between items-center pt-4 border-t border-border relative z-10">
                <div className="flex items-center text-card-foreground/70">
                  <Circle className="h-4 w-4 mr-2 group-hover:fill-zen-primary transition-colors duration-300" aria-hidden="true" />
                  <span className="text-sm">{service.duration}</span>
                </div>
                <div className="text-zen-accent font-semibold group-hover:text-zen-primary transition-colors duration-300">
                  {service.price}
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MassageServices;
