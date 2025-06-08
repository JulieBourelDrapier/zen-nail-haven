
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
    <section className="py-20 bg-zen-accent/10 dark:bg-zen-accent-dark/10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Massages & Détente
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Découvrez nos soins de massage pour une relaxation profonde 
            et un bien-être total dans notre espace dédié à la sérénité.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {massageServices.map((service, index) => (
            <article 
              key={index}
              className={`
                zen-card-gradient bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 
                border border-border cursor-pointer group
                ${index % 2 === 0 
                  ? 'animate-slide-up opacity-0 animation-delay-300' 
                  : 'animate-bounce-in opacity-0 animation-delay-500'
                }
                hover:scale-105 hover:rotate-1 transform-gpu
              `}
            >
              <header className="flex items-start mb-4">
                <Sparkles className="h-6 w-6 text-zen-accent dark:text-zen-accent-dark mt-1 mr-3 flex-shrink-0 group-hover:animate-spin transition-transform duration-500" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-card-foreground group-hover:text-zen-accent dark:group-hover:text-zen-accent-dark transition-colors duration-300">
                  {service.title}
                </h3>
              </header>
              
              <p className="text-card-foreground/80 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <footer className="flex justify-between items-center pt-4 border-t border-border">
                <div className="flex items-center text-card-foreground/70">
                  <Circle className="h-4 w-4 mr-2 group-hover:fill-zen-primary dark:group-hover:fill-zen-primary-dark transition-colors duration-300" aria-hidden="true" />
                  <span className="text-sm">{service.duration}</span>
                </div>
                <div className="text-zen-accent dark:text-zen-accent-dark font-semibold group-hover:text-zen-primary dark:group-hover:text-zen-primary-dark transition-colors duration-300">
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
