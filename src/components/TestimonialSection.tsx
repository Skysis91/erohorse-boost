
import React, { useState, useEffect } from 'react';
import { AnimatedElement, AnimatedText } from '@/utils/animations';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

const testimonials = [
  {
    id: 1,
    name: 'Janusz',
    age: '42 lata',
    rating: 5,
    quote: 'Wziąłem zgodnie z instrukcją 5 kapsułek przed stosunkiem i wszystko zadziałało jak trzeba! Zero skutków ubocznych, żadnych bólów głowy czy skoków ciśnienia. Następnego dnia wciąż byłem w gotowości. EroHorse daje prawdziwego kopa!',
  },
  {
    id: 2,
    name: 'Andrzej',
    age: '35 lat',
    rating: 5,
    quote: 'Bałem się, że zawiodę partnerkę, ale na szczęście EroHorse mnie nie zawiodło. Mogłem działać dłużej i intensywniej, a nasze zbliżenie było niesamowite. Jestem bardzo zadowolony z tego produktu!',
  },
  {
    id: 3,
    name: 'Marcin',
    age: '50 lat',
    rating: 5,
    quote: 'Miałem dość chemicznych pigułek typu Viagra. Po nich czułem się fatalnie. Spróbowałem EroHorse z ciekawości – i pozytywnie się zaskoczyłem. Mocny wzwód i niesamowite uczucie "ognia w lędźwiach", bez skutków ubocznych. Naturalnie i skutecznie.',
  },
  {
    id: 4,
    name: 'Piotr',
    age: '38 lat',
    rating: 5,
    quote: 'Po miesiącu stosowania czuję się jak nowy człowiek. Więcej energii, lepsza koncentracja i oczywiście znaczna poprawa w sypialni. Polecam każdemu, kto chce naturalnie wspomóc swoją męskość!',
  },
];

const effectivenessStats = [
  { id: 1, label: 'mężczyzn potwierdza poprawę erekcji', percentage: 95 },
  { id: 2, label: 'odczuło zwiększone libido', percentage: 89 },
  { id: 3, label: 'deklaruje większą satysfakcję ze współżycia', percentage: 93 },
];

const TestimonialSection = () => {
  const isMobile = useIsMobile();
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col">
      <div className="flex items-center space-x-1 mb-4">
        {renderStars(testimonial.rating)}
      </div>
      
      <blockquote className="text-lg text-gray-800 leading-relaxed mb-6 flex-grow">
        "{testimonial.quote}"
      </blockquote>
      
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-brand-red font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-gray-500 text-sm">{testimonial.age}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      id="testimonials"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ 
          background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 100%)'
        }}
      />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedElement animation="slide-up" className="mb-2">
            <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
              Dowody skuteczności
            </span>
          </AnimatedElement>
          
          <AnimatedText element="h2" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" animation="fade-in" delay={200}>
            Co mówią zadowoleni klienci
          </AnimatedText>
          
          <AnimatedText element="p" className="text-xl text-gray-600 max-w-3xl mx-auto" animation="fade-in" delay={400}>
            Nie musisz wierzyć nam na słowo – poznaj opinie mężczyzn, którzy już wypróbowali EroHorse.
          </AnimatedText>
        </div>
        
        <AnimatedElement animation="fade-in" delay={500} className="max-w-6xl mx-auto mb-16">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className={`pl-4 ${isMobile ? 'basis-full' : 'basis-1/3'}`}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={600} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Skuteczność EroHorse w liczbach:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {effectivenessStats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="#f1f1f1" 
                      strokeWidth="10"
                    />
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="#cc0000" 
                      strokeWidth="10"
                      strokeDasharray="283"
                      strokeDashoffset={`${283 * (1 - stat.percentage / 100)}`}
                      transform="rotate(-90 50 50)"
                      strokeLinecap="round"
                    />
                    <text 
                      x="50" 
                      y="55" 
                      textAnchor="middle" 
                      fontSize="24"
                      fontWeight="bold"
                      fill="#111111"
                    >
                      {stat.percentage}%
                    </text>
                  </svg>
                  <div className="absolute -left-2 -top-1 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-brand-red">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                </div>
                <p className="text-center text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-gray-500 mt-6 text-center">Na podstawie ankiety wśród pierwszych 100 klientów EroHorse.</p>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default TestimonialSection;
