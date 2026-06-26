"use client";

import { useEffect, useRef, useState } from "react";

export function TextReveal({ 
  children, 
  className = "", 
  gradientClass = "",
  delay = 0,
  direction = "up"
}: { 
  children: string, 
  className?: string, 
  gradientClass?: string,
  delay?: number,
  direction?: "up" | "down"
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsRevealed(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [delay]);

  const words = children.split(" ");
  const transformStart = direction === "up" ? "translate-y-[120%]" : "-translate-y-[120%]";

  return (
    <span ref={elementRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-bottom pb-1 -mb-1">
          <span
            className={`inline-block transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isRevealed ? "translate-y-0" : transformStart
            } ${gradientClass}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
