
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import FaqSection from '@/components/FaqSection';
import OrderSection from '@/components/OrderSection';
import { AnimatedElement } from '@/utils/animations';

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Feature Section */}
      <FeatureSection />
      
      {/* Testimonial Section */}
      <TestimonialSection />
      
      {/* FAQ Section */}
      <FaqSection />
      
      {/* Order Section */}
      <OrderSection />
      
      {/* Footer */}
      <AnimatedElement animation="fade-in" className="py-12 bg-brand-dark text-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EroHorse</h3>
              <p className="text-gray-400 mb-4">Naturalne wsparcie męskiej witalności i pewności siebie. Produkt firmy Laboheals Group.</p>
              <p className="text-gray-400">© {new Date().getFullYear()} Laboheals Group. Wszelkie prawa zastrzeżone.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Kontakt</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: kontakt@labohealsgroup.pl</li>
                <li>Telefon: +48 123 456 789</li>
                <li>Adres: ul. Przykładowa 123, 00-001 Warszawa</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Informacje</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-brand-red transition-colors">Polityka prywatności</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Regulamin</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Dostawa i płatności</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Reklamacje i zwroty</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>Suplement diety. Nie przekraczać zalecanej porcji do spożycia w ciągu dnia. Suplement diety nie może być stosowany jako substytut zróżnicowanej diety. Zalecany jest zrównoważony sposób żywienia i zdrowy tryb życia.</p>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default Index;
