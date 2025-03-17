
import React from 'react';
import { AnimatedElement, AnimatedText } from '@/utils/animations';

const features = [
  {
    id: 1,
    title: 'Pewność siebie w sypialni',
    description: 'Naturalne afrodyzjaki w formule EroHorse zapewniają mocny wzwód i długotrwały efekt, dzięki czemu zawsze będziesz gotowy sprostać wyzwaniu.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Maksymalne libido i przyjemność',
    description: 'Skutecznie pobudza Twoje pragnienia, sprawiając, że życie intymne nabierze nowej energii. Każde zbliżenie stanie się bardziej intensywne i satysfakcjonujące.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Wyższy poziom testosteronu',
    description: 'Starannie dobrane składniki naturalnie stymulują produkcję testosteronu, hormonu kluczowego dla męskiej energii, libido i siły mięśni.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Większa wytrzymałość fizyczna',
    description: 'Regularne stosowanie EroHorse poprawia wydolność organizmu, co przekłada się na dłuższe i intensywniejsze zbliżenia oraz lepsze wyniki w codziennej aktywności.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 5,
    title: '100% naturalna skuteczność',
    description: 'EroHorse to synergiczne połączenie 12 naturalnych składników, które wspierają również Twoje zdrowie, wzmacniają odporność i poprawiają krążenie krwi.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    )
  }
];

const FeatureSection = () => {
  return (
    <section 
      id="benefits"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedElement animation="slide-up" className="mb-2">
            <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
              Dlaczego warto wybrać EroHorse?
            </span>
          </AnimatedElement>
          
          <AnimatedText element="h2" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" animation="fade-in" delay={200}>
            Kompleksowe wsparcie męskości
          </AnimatedText>
          
          <AnimatedText element="p" className="text-xl text-gray-600 max-w-3xl mx-auto" animation="fade-in" delay={400}>
            EroHorse to coś więcej niż zwykły suplement – to kompletne rozwiązanie dla mężczyzn pragnących odzyskać pewność siebie i witalność.
          </AnimatedText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedElement 
              key={feature.id} 
              animation="slide-up" 
              delay={200 + index * 100}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative overflow-hidden group"
            >
              {/* Subtle red gradient accent in the corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-red-400/20 to-red-600/30 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-4 p-3 rounded-full bg-red-50 w-fit">
                <div className="text-brand-red">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </AnimatedElement>
          ))}
        </div>
        
        <AnimatedElement animation="fade-in" delay={700} className="mt-16 text-center">
          <a 
            href="#order" 
            className="inline-flex items-center justify-center rounded-md bg-brand-red px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-brand-red/90 transition-colors"
          >
            Dołącz do grona pewnych siebie mężczyzn
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default FeatureSection;
