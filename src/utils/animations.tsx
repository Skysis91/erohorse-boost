
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
