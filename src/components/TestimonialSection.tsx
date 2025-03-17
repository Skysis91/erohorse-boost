
import React, { useState, useRef, useEffect } from 'react';
import { AnimatedElement, AnimatedText } from '@/utils/animations';

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

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);

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
        
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="fade-in" delay={500} className="relative">
            {/* Testimonial slider */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <div 
                ref={slideRef}
                className="flex transition-transform duration-500 ease-out"
                style={{ width: `${testimonials.length * 100}%` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 bg-white p-8 sm:p-12 relative"
                    style={{ width: `${100 / testimonials.length}%` }}
                  >
                    {/* Decorative quote icon */}
                    <div className="absolute -top-2 -left-2 text-red-100 opacity-30">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.13456 9H5.37685C4.95344 9 4.71138 8.5 5.00344 8.2C6.1 7 7.5 5 7.5 3.5C7.5 2.67 8.17 2 9 2C9.83 2 10.5 2.67 10.5 3.5C10.5 4.6 10.05 5.7 9.27 6.5C9.0105 6.77224 8.83949 7.1084 8.77066 7.46909L9.13456 9Z" fill="currentColor"/>
                        <path d="M19.1346 9H15.3769C14.9534 9 14.7114 8.5 15.0034 8.2C16.1 7 17.5 5 17.5 3.5C17.5 2.67 18.17 2 19 2C19.83 2 20.5 2.67 20.5 3.5C20.5 4.6 20.05 5.7 19.27 6.5C19.0105 6.77224 18.8395 7.1084 18.7707 7.46909L19.1346 9Z" fill="currentColor"/>
                        <path d="M6.44 22H2.5C2.18 22 1.92 21.76 1.9 21.44L1.5 17.56C1.48 17.24 1.74 17 2.06 17H6C6.32 17 6.58 17.24 6.6 17.56L7 21.44C7.02 21.76 6.76 22 6.44 22Z" fill="currentColor"/>
                        <path d="M16.44 22H12.5C12.18 22 11.92 21.76 11.9 21.44L11.5 17.56C11.48 17.24 11.74 17 12.06 17H16C16.32 17 16.58 17.24 16.6 17.56L17 21.44C17.02 21.76 16.76 22 16.44 22Z" fill="currentColor"/>
                      </svg>
                    </div>
                    
                    <div className="flex items-center space-x-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <blockquote className="text-xl text-gray-800 leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-brand-red font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.age}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-6">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow hover:shadow-md transition-shadow border border-gray-200"
                aria-label="Poprzednia opinia"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${index === activeIndex ? 'bg-brand-red' : 'bg-gray-300'}`}
                    aria-label={`Przejdź do opinii ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow hover:shadow-md transition-shadow border border-gray-200"
                aria-label="Następna opinia"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={600} className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Skuteczność EroHorse w liczbach:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-brand-red mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>95% mężczyzn potwierdza poprawę erekcji</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-brand-red mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>89% odczuło zwiększone libido</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-brand-red mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>93% deklaruje większą satysfakcję ze współżycia</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-2">Na podstawie ankiety wśród pierwszych 100 klientów EroHorse.</p>
              </div>
              
              <div className="w-32 h-32 relative">
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
                    strokeDashoffset="14" // 283 * (1 - 0.95) for 95% rating
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
                    95%
                  </text>
                </svg>
                <div className="absolute -left-2 -top-1 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-brand-red">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
