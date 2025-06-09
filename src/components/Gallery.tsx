
import React from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const Gallery = () => {
  const nailArtGallery = [
    {
      quote: "Manucure duck green mat - Une couleur tendance qui apporte élégance et modernité à vos ongles.",
      name: "Manucure Duck Green",
      designation: "Style Mat & Élégant",
      src: "/lovable-uploads/747d1cbf-a94c-4e41-8dd3-2bb5068f7f76.png",
    },
    {
      quote: "Nail art coloré et ludique - Parfait pour exprimer votre créativité avec des teintes vives et joyeuses.",
      name: "Nail Art Coloré",
      designation: "Style Créatif & Fun",
      src: "/lovable-uploads/148c1851-b559-4659-bee7-ad91bc098961.png",
    },
    {
      quote: "Manucure sophistiquée avec effet miroir - L'alliance parfaite entre le noir profond et les reflets dorés.",
      name: "Manucure Miroir",
      designation: "Style Sophistiqué",
      src: "/lovable-uploads/4aa4c0af-1bb1-4baf-ae89-74bfee50bafe.png",
    },
    {
      quote: "French manucure revisitée - Un classique intemporel avec une touche moderne et raffinée.",
      name: "French Moderne",
      designation: "Style Classique & Chic",
      src: "/lovable-uploads/341e5786-6e56-463e-9c13-a0f817be95fb.png",
    },
    {
      quote: "Nail art pastel dégradé - Douceur et féminité avec des nuances délicates qui subliment vos mains.",
      name: "Dégradé Pastel",
      designation: "Style Doux & Romantique",
      src: "/lovable-uploads/2cb4ae1e-55bf-4bdc-9b86-893f88a08455.png",
    }
  ];

  return (
    <section id="gallery" className="py-20 zen-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galerie de Mes Créations
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Découvrez quelques-unes de mes réalisations. Chaque manucure est unique 
            et créée avec passion pour sublimer vos mains.
          </p>
        </div>
        
        <AnimatedTestimonials testimonials={nailArtGallery} autoplay={true} />
      </div>
    </section>
  );
};

export default Gallery;
