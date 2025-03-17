
import React, { useEffect, useRef } from 'react';
import { AnimatedText, AnimatedElement } from '@/utils/animations';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      heroRef.current.style.setProperty('--move-x', `${moveX}px`);
      heroRef.current.style.setProperty('--move-y', `${moveY}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 px-4 sm:px-6 md:px-8"
      style={{ 
        background: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)'
      }}
    >
      {/* Background effects */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 70%, rgba(200, 0, 0, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 40%, rgba(200, 0, 0, 0.4) 0%, transparent 40%)'
        }}
      />
      
      <div 
        className="absolute top-1/2 left-1/2 w-[140%] h-[140%] rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,0,0.3) 0%, transparent 70%)'
        }}
      />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="mb-6">
              <AnimatedElement animation="slide-down">
                <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/20 mb-3">
                  Naturalna moc
                </span>
              </AnimatedElement>
            </div>
            
            <AnimatedText element="h1" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" animation="slide-up">
              Pewność siebie w sypialni i maksymalna męska moc
            </AnimatedText>
            
            <AnimatedText element="p" className="text-xl text-gray-300 mb-8 leading-relaxed" animation="fade-in" delay={300}>
              Naturalny booster potencji, który doda Ci energii, wytrzymałości i rozpali libido do granic możliwości. Poznaj moc 12 naturalnych afrodyzjaków.
            </AnimatedText>
            
            <AnimatedElement animation="fade-in" delay={0}>
              <div className="mb-6 flex items-center space-x-2">
                <div className="flex -space-x-1">
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs">
                    ★
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs">
                    ★
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs">
                    ★
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs">
                    ★
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs">
                    ★
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  <span className="font-medium text-white">5.0/5.0</span> na podstawie opinii klientów
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in" delay={600}>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#order" 
                  className="inline-flex h-12 items-center justify-center rounded-md bg-brand-red px-6 text-base font-medium text-white shadow-sm hover:bg-brand-red/90 transition-colors"
                >
                  Zamów teraz
                </a>
                <a 
                  href="#benefits" 
                  className="inline-flex h-12 items-center justify-center rounded-md border border-gray-700 bg-black/30 backdrop-blur-sm px-6 text-base font-medium text-white shadow-sm hover:bg-black/50 transition-colors"
                >
                  Dowiedz się więcej
                </a>
              </div>
            </AnimatedElement>
          </div>
          
          {/* Product Image */}
          <div className="relative hidden lg:block">
            <AnimatedElement animation="scale-up" delay={300}>
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-red-500 to-red-800 opacity-20 blur-xl"></div>
                <img 
                  src="/lovable-uploads/2bbf25e0-ec9d-4844-926b-fa183eef8ee4.png" 
                  alt="EroHorse Produkt" 
                  className="w-full h-auto object-contain relative rounded-3xl"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#ffffff">
          <path fillOpacity="1" d="M0,160L48,154.7C96,149,192,139,288,149.3C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
