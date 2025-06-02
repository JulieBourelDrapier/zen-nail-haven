
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Calendar, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    
    toast.success("Votre demande a été envoyée avec succès ! Nous vous répondrons dans les plus brefs délais.", {
      duration: 5000,
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      preferredDate: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-zen-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-zen-forest mb-4">
            Réservez Votre Moment de Sérénité
          </h2>
          <p className="text-lg text-zen-forest/80 max-w-2xl mx-auto">
            Contactez-nous pour planifier votre expérience zen personnalisée. 
            Chaque détail compte pour votre bien-être.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="zen-card-gradient border-zen-sand/20 shadow-lg">
              <CardHeader className="text-center">
                <Calendar className="h-8 w-8 text-zen-sage mx-auto mb-2" aria-hidden="true" />
                <CardTitle className="text-zen-forest">Horaires</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-zen-forest/80">
                <p>Lundi - Vendredi</p>
                <p className="font-semibold">9h00 - 18h00</p>
                <p className="mt-2">Samedi</p>
                <p className="font-semibold">9h00 - 16h00</p>
                <p className="mt-2 text-sm">Sur rendez-vous uniquement</p>
              </CardContent>
            </Card>

            <Card className="zen-card-gradient border-zen-sand/20 shadow-lg">
              <CardHeader className="text-center">
                <Heart className="h-8 w-8 text-zen-sage mx-auto mb-2" aria-hidden="true" />
                <CardTitle className="text-zen-forest">Localisation</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-zen-forest/80">
                <p>Salon à domicile</p>
                <p>Paris 15ème</p>
                <p className="mt-2 text-sm">Adresse exacte communiquée lors de la prise de rendez-vous</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 zen-card-gradient border-zen-sand/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-zen-forest flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" aria-hidden="true" />
                Demande de Rendez-vous
              </CardTitle>
              <CardDescription className="text-zen-forest/70">
                Remplissez ce formulaire et nous vous recontacterons rapidement pour confirmer votre créneau.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-zen-forest font-medium">
                      Prénom *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="border-zen-sand focus:border-zen-sage focus:ring-zen-sage/20"
                      aria-describedby="firstName-error"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-zen-forest font-medium">
                      Nom *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="border-zen-sand focus:border-zen-sage focus:ring-zen-sage/20"
                      aria-describedby="lastName-error"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zen-forest font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-zen-sand focus:border-zen-sage focus:ring-zen-sage/20"
                      aria-describedby="email-error"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-zen-forest font-medium">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-zen-sand focus:border-zen-sage focus:ring-zen-sage/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-zen-forest font-medium">
                      Service souhaité
                    </Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-zen-sand rounded-md focus:border-zen-sage focus:ring-zen-sage/20 focus:ring-2 focus:outline-none bg-zen-pearl"
                    >
                      <option value="">Sélectionner un service</option>
                      <option value="manucure-classique">Manucure Classique</option>
                      <option value="manucure-semi-permanent">Manucure Semi-Permanent</option>
                      <option value="soin-zen-complet">Soin Zen Complet</option>
                      <option value="nail-art">Nail Art Personnalisé</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredDate" className="text-zen-forest font-medium">
                      Date souhaitée
                    </Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="border-zen-sand focus:border-zen-sage focus:ring-zen-sage/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-zen-forest font-medium">
                    Message (optionnel)
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-zen-sand rounded-md focus:border-zen-sage focus:ring-zen-sage/20 focus:ring-2 focus:outline-none bg-zen-pearl resize-none"
                    placeholder="Dites-nous en plus sur vos attentes ou préférences..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-zen-sage hover:bg-zen-forest text-zen-pearl font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                </Button>

                <p className="text-sm text-zen-forest/60 text-center">
                  * Champs obligatoires. Vos données sont traitées de manière confidentielle.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
