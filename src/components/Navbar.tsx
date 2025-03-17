
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter">
          <span className="text-brand-red">Ero</span>
          <span className="text-brand-dark">Horse</span>
        </a>
        
        <div className="hidden md:flex space-x-8 items-center">
          <nav className="flex space-x-6 items-center">
            <a href="#benefits" className="text-sm font-medium text-gray-800 hover:text-brand-red transition-colors link-hover">
              Korzyści
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-800 hover:text-brand-red transition-colors link-hover">
              Opinie
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-800 hover:text-brand-red transition-colors link-hover">
              Jak działa
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-800 hover:text-brand-red transition-colors link-hover">
              FAQ
            </a>
          </nav>
          
          <a
            href="#order"
            className="inline-flex h-10 items-center justify-center rounded-md bg-brand-red px-8 text-sm font-medium text-white shadow transition-colors hover:bg-brand-red/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red"
          >
            Zamów teraz
          </a>
        </div>
        
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
        >
          <div className="relative w-5 h-5">
            <span 
              className={cn(
                "absolute block w-5 h-0.5 bg-gray-800 transform transition-all duration-300",
                menuOpen ? "rotate-45 top-2" : "rotate-0 top-1"
              )}
            />
            <span 
              className={cn(
                "absolute block w-5 h-0.5 bg-gray-800 top-2 transition-all duration-300",
                menuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span 
              className={cn(
                "absolute block w-5 h-0.5 bg-gray-800 transform transition-all duration-300",
                menuOpen ? "-rotate-45 top-2" : "rotate-0 top-3"
              )}
            />
          </div>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out",
          menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col px-6 pt-20 h-full overflow-y-auto">
          <nav className="flex flex-col space-y-6 text-center">
            <a 
              href="#benefits" 
              className="text-xl font-medium py-2"
              onClick={toggleMenu}
            >
              Korzyści
            </a>
            <a 
              href="#testimonials" 
              className="text-xl font-medium py-2"
              onClick={toggleMenu}
            >
              Opinie
            </a>
            <a 
              href="#how-it-works" 
              className="text-xl font-medium py-2"
              onClick={toggleMenu}
            >
              Jak działa
            </a>
            <a 
              href="#faq" 
              className="text-xl font-medium py-2"
              onClick={toggleMenu}
            >
              FAQ
            </a>
          </nav>
          
          <div className="mt-auto pb-10 pt-10">
            <a
              href="#order"
              className="flex items-center justify-center rounded-md bg-brand-red w-full px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-brand-red/90 transition-colors"
              onClick={toggleMenu}
            >
              Zamów teraz
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
