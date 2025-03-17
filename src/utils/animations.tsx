
import React, { useEffect, useState, useRef } from 'react';

export function useIntersectionObserver(
  options = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isVisible] as const;
}

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'scale-up';
  delay?: number;
}

export const AnimatedElement = ({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0
}: AnimatedElementProps) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
};

export const AnimatedText = ({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0,
  element = 'p'
}: AnimatedElementProps & { element?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const Tag = element;
  
  return React.createElement(
    Tag,
    {
      ref,
      className: `${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`,
      style: { animationDelay: `${delay}ms`, animationFillMode: 'forwards' }
    },
    children
  );
};

export const ParallaxElement: React.FC<{
  children: React.ReactNode;
  className?: string;
  speed?: number; // Positive values move element down, negative values move up
}> = ({ children, className = '', speed = -0.2 }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const elementTop = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const distanceFromCenter = elementTop - windowHeight / 2;
      setOffset(distanceFromCenter * speed);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return (
    <div 
      ref={ref}
      className={`${className} relative overflow-hidden`}
    >
      <div 
        style={{ transform: `translateY(${offset}px)` }}
        className="transition-transform duration-300 ease-out"
      >
        {children}
      </div>
    </div>
  );
};
