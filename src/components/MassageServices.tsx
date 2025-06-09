
import React, { useEffect, useState } from 'react';
import { Sparkles, Circle } from 'lucide-react';

const MassageServices = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 4
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

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
    <section className="py-20 bg-zen-secondary/5">
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
              className="relative bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-border cursor-pointer group overflow-hidden"
            >
              {/* Animated background with particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {particles.slice(index * 12, (index + 1) * 12).map((particle) => (
                  <div
                    key={particle.id}
                    className="particle w-1 h-1 bg-zen-accent/30 animate-particle-float absolute"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      animationDelay: `${particle.delay}s`
                    }}
                  />
                ))}
                
                {/* Gradient overlays inspired by the 21st dev animation */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-zen-accent/20 to-transparent h-[2px] w-3/4 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-zen-accent/40 to-transparent h-px w-3/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-zen-primary/30 to-transparent h-[3px] w-1/4 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Radial gradient mask */}
                <div className="absolute inset-0 w-full h-full bg-card/50 [mask-image:radial-gradient(300px_150px_at_center,transparent_20%,white)] group-hover:[mask-image:radial-gradient(400px_200px_at_center,transparent_10%,white)] transition-all duration-500"></div>
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
                  <Circle className="h-4 w-4 mr-2 group-hover:text-zen-primary transition-colors duration-300" aria-hidden="true" />
                  <span className="text-sm">{service.duration}</span>
                </div>
                <div className="text-zen-accent font-semibold group-hover:text-zen-primary transition-colors duration-300">
                  {service.price}
                </div>
              </footer>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-zen-accent/5 to-zen-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MassageServices;
