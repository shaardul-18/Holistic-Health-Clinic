"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale-up";
  duration?: number;
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  animation = "slide-up",
  duration = 800,
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        } else {
          setIsRevealed(false);
        }
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  const animationStyles = {
    "fade-in": "opacity-0",
    "slide-up": "opacity-0 translate-y-10",
    "slide-down": "opacity-0 -translate-y-10",
    "slide-left": "opacity-0 translate-x-10",
    "slide-right": "opacity-0 -translate-x-10",
    "scale-up": "opacity-0 scale-95",
  };

  const revealedStyles = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={elementRef}
      className={`${className} transition-all ease-out`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className={`transition-all duration-inherit ease-inherit ${isRevealed ? revealedStyles : animationStyles[animation]}`}>
        {children}
      </div>
    </div>
  );
}
