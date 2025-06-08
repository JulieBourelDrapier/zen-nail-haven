
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import MassageServices from '@/components/MassageServices';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main role="main">
        <Hero />
        <Services />
        <MassageServices />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
