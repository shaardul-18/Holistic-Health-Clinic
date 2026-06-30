"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale-up" | "blur-in" | "elegant-slide";
  duration?: number;
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  animation = "slide-up",
  duration = 4000,
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
    "slide-up": "opacity-0 translate-y-16",
    "slide-down": "opacity-0 -translate-y-16",
    "slide-left": "opacity-0 translate-x-16",
    "slide-right": "opacity-0 -translate-x-16",
    "scale-up": "opacity-0 scale-[0.92]",
    "blur-in": "opacity-0 blur-xl scale-[1.03]",
    "elegant-slide": "opacity-0 translate-y-20 scale-[0.97]",
  };

  const revealedStyles = "opacity-100 translate-y-0 translate-x-0 scale-100 blur-0";

  return (
    <div
      ref={elementRef}
      className={`${className} transition-all ease-out`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
      }}
    >
      <div className={`transition-all duration-inherit ease-inherit ${isRevealed ? revealedStyles : animationStyles[animation]}`}>
        {children}
      </div>
    </div>
  );
}
