
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 zen-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-zen-gray dark:text-zen-warm-dark mb-8">
            Un Espace Pensé pour Votre Bien-être
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <p className="text-lg text-zen-gray/80 dark:text-zen-warm-dark/80 leading-relaxed">
                Bienvenue dans mon univers dédié à la beauté et à la sérénité. 
                Passionnée par l'art de la manucure depuis plus de 5 ans, 
                j'ai créé un espace unique où chaque femme peut se reconnecter à elle-même.
              </p>
              
              <p className="text-lg text-zen-gray/80 dark:text-zen-warm-dark/80 leading-relaxed">
                Mon salon à domicile est pensé comme un cocon de douceur, 
                où les parfums apaisants, la musique zen et l'attention personnalisée 
                se conjuguent pour vous offrir une parenthèse de pure détente.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-zen-red dark:bg-zen-red-dark rounded-full mr-4" aria-hidden="true"></div>
                  <span className="text-zen-gray dark:text-zen-warm-dark">Produits haut de gamme et naturels</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-zen-red dark:bg-zen-red-dark rounded-full mr-4" aria-hidden="true"></div>
                  <span className="text-zen-gray dark:text-zen-warm-dark">Environnement 100% zen et relaxant</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-zen-red dark:bg-zen-red-dark rounded-full mr-4" aria-hidden="true"></div>
                  <span className="text-zen-gray dark:text-zen-warm-dark">Accompagnement personnalisé</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-zen-red dark:bg-zen-red-dark rounded-full mr-4" aria-hidden="true"></div>
                  <span className="text-zen-gray dark:text-zen-warm-dark">Respect total de votre intimité</span>
                </div>
              </div>
            </div>
            
            <div className="zen-card-gradient p-8 rounded-2xl shadow-lg">
              <blockquote className="text-zen-gray/80 dark:text-zen-warm-dark/80 italic text-lg mb-4 leading-relaxed">
                "Chaque rendez-vous est une invitation au lâcher-prise. 
                Ici, le temps vous appartient, et votre bien-être est ma priorité absolue."
              </blockquote>
              <cite className="text-zen-red dark:text-zen-red-dark font-semibold not-italic">
                — Sarah, Votre Praticienne Zen
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
