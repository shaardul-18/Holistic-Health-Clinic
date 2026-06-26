"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function ParallaxImage({ src, alt, className = "" }: { src: string, alt: string, className?: string }) {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Only calculate if visible
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        // Calculate offset based on scroll position relative to screen center
        const scrollPercent = (rect.top - window.innerHeight / 2) / window.innerHeight;
        setOffset(scrollPercent * -15); // max 15% translate
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 w-[110%] h-[120%] -left-[5%] -top-[10%] transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: `translateY(${offset}%)` }}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
      </div>
    </div>
  );
}
