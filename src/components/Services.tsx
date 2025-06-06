
import React from 'react';
import { Heart, Circle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Manucure Classique",
      description: "Soin complet des ongles avec lime, cuticules et vernis de votre choix dans une ambiance apaisante.",
      duration: "45 min",
      price: "À partir de 25€"
    },
    {
      title: "Manucure Semi-Permanent",
      description: "Tenue longue durée avec nos vernis de qualité professionnelle pour des ongles parfaits pendant 3 semaines.",
      duration: "1h15",
      price: "À partir de 35€"
    },
    {
      title: "Soin Zen Complet",
      description: "L'expérience ultime : manucure, gommage des mains, massage relaxant et moment de méditation.",
      duration: "1h30",
      price: "À partir de 45€"
    },
    {
      title: "Nail Art Personnalisé",
      description: "Créations uniques et artistiques adaptées à vos goûts et à votre personnalité.",
      duration: "1h - 2h",
      price: "Sur devis"
    }
  ];

  return (
    <section id="services" className="py-20 bg-zen-cream">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-zen-forest mb-4">
            Nos Soins Signature
          </h2>
          <p className="text-lg text-zen-forest/80 max-w-2xl mx-auto">
            Chaque soin est pensé comme un rituel de bien-être, 
            dans le respect de votre rythme et de vos besoins.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto" itemScope itemType="https://schema.org/ItemList">
          {services.map((service, index) => (
            <article 
              key={index}
              className="zen-card-gradient p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-zen-sand/20"
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              <header className="flex items-start mb-4">
                <Heart className="h-6 w-6 text-zen-sage mt-1 mr-3 flex-shrink-0" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-zen-forest" itemProp="name">
                  {service.title}
                </h3>
              </header>
              
              <p className="text-zen-forest/80 mb-6 leading-relaxed" itemProp="description">
                {service.description}
              </p>
              
              <footer className="flex justify-between items-center pt-4 border-t border-zen-sand/30">
                <div className="flex items-center text-zen-forest/70">
                  <Circle className="h-4 w-4 mr-2" aria-hidden="true" />
                  <span className="text-sm" itemProp="duration">{service.duration}</span>
                </div>
                <div className="text-zen-sage font-semibold" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <span itemProp="price">{service.price}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
