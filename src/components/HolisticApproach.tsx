"use client";

import React, { useState, useEffect, useRef } from "react";

interface RingProps {
  label: string;
  rotationDirection: "normal" | "reverse";
  colorClass: string;
  tiltAngle: number;
  speed?: number;
  isMerged: boolean;
  isFullyMerged: boolean;
  transformOffset: string;
  isCenter?: boolean;
}

function HolisticRing({
  label,
  rotationDirection,
  colorClass,
  tiltAngle,
  speed = 30,
  isMerged,
  isFullyMerged,
  transformOffset,
  isCenter = false,
}: RingProps) {
  const size = 360;
  const count = 90;
  const radius = size / 2;
  const innerRadius = radius - 45;
  const ticks = [];

  for (let i = 0; i < count; i++) {
    const angle = (i * 360) / count;
    const rad = (angle * Math.PI) / 180;
    const x1 = (radius + innerRadius * Math.cos(rad)).toFixed(2);
    const y1 = (radius + innerRadius * Math.sin(rad)).toFixed(2);
    const x2 = (radius + radius * Math.cos(rad)).toFixed(2);
    const y2 = (radius + radius * Math.sin(rad)).toFixed(2);
    
    // Vary opacity around the circle to create the open gradient look
    const opacity = (0.05 + 0.95 * (i / count)).toFixed(3);

    ticks.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="currentColor"
        strokeWidth="2"
        opacity={opacity}
      />
    );
  }

  // Calculate current transform style
  const currentTransform = isMerged ? `${transformOffset} rotate(0deg)` : `translate(0px, 0px) rotate(${tiltAngle}deg)`;

  // When merged, all rings fade out except the center one, or they all change color.
  // The user wants it to look like it merged into ONE. We'll fade out the outer rings.
  const ringOpacity = isMerged && !isCenter ? "opacity-0" : "opacity-100";

  return (
    <div 
      className={`relative flex items-center justify-center w-[360px] h-[360px] transition-all duration-[7000ms] ease-[cubic-bezier(0.25,1,0.5,1)] select-none ${ringOpacity}`}
      style={{
        transform: currentTransform,
      }}
    >
      {/* Rotating SVG Ticks Ring */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          isMerged ? "text-secondary" : colorClass
        } transition-colors duration-[7000ms]`}
        style={{
          animation: `spin ${speed}s linear infinite ${rotationDirection === "reverse" ? "reverse" : ""}`,
        }}
      >
        <div className={`relative w-full h-full flex items-center justify-center ${isFullyMerged && isCenter ? "animate-ring-breathe" : ""}`}>
          <svg 
            width={size} 
            height={size} 
            viewBox={`0 0 ${size} ${size}`} 
            className={`absolute inset-0 w-full h-full transition-opacity duration-[7000ms] ${
              isMerged ? "opacity-95" : "opacity-60"
            }`}
          >
            {ticks}
          </svg>

          {/* Radiating Circular Ripples */}
          {isFullyMerged && isCenter && (
            <>
              <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 w-full h-full opacity-0 animate-ring-radiate pointer-events-none" style={{ animationDelay: "0s" }}>
                <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/70" />
              </svg>
              <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 w-full h-full opacity-0 animate-ring-radiate pointer-events-none" style={{ animationDelay: "0.8s" }}>
                <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="currentColor" strokeWidth="1.5" className="text-secondary/60" />
              </svg>
              <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 w-full h-full opacity-0 animate-ring-radiate pointer-events-none" style={{ animationDelay: "1.6s" }}>
                <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-500/50" />
              </svg>
            </>
          )}
        </div>
      </div>

      {/* Center Label Text */}
      <div 
        className="absolute flex flex-col items-center justify-center text-center px-6 pointer-events-none transition-all duration-[7000ms]"
      >
        {isCenter ? (
          <div className="relative w-full flex items-center justify-center min-h-[60px]">
            {/* Original "Physical Health" Label */}
            <span 
              className={`font-serif text-xl md:text-2xl font-medium tracking-tight text-foreground/85 leading-snug transition-all duration-[7000ms] ${
                isMerged ? "opacity-0 scale-75 blur-xs" : "opacity-100 scale-100"
              }`}
            >
              Physical<br />Health
            </span>
            
            {/* Merged "Complete Wellness" Label */}
            <span 
              className={`absolute font-serif text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-amber-500 bg-clip-text text-transparent leading-tight transition-all duration-[7000ms] filter drop-shadow-[0_0_12px_rgba(31,164,75,0.4)] ${
                isMerged ? "opacity-100 scale-110 translate-y-0" : "opacity-0 scale-90 translate-y-2 pointer-events-none blur-xs"
              }`}
            >
              Complete<br />Wellness
            </span>
          </div>
        ) : (
          <span 
            className={`font-serif text-lg md:text-xl font-medium tracking-tight text-foreground/85 leading-snug transition-all duration-[7000ms] ${
              isMerged ? "opacity-0 scale-75 blur-xs" : "opacity-100 scale-100"
            }`}
          >
            {label.split(" ").map((word, index) => (
              <React.Fragment key={index}>
                {word}
                {index < label.split(" ").length - 1 && <br />}
              </React.Fragment>
            ))}
          </span>
        )}
      </div>
    </div>
  );
}

export function HolisticApproach() {
  const [isMerged, setIsMerged] = useState(false);
  const [isFullyMerged, setIsFullyMerged] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;
    
    const currentRef = containerRef.current;
    let timeoutId: NodeJS.Timeout;
    
    // Setup IntersectionObserver for auto-triggering animation on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.7) {
          setIsMerged(true);
          // Wait for the slide-in transition to finish before radiating
          timeoutId = setTimeout(() => setIsFullyMerged(true), 7000);
        } else if (!entry.isIntersecting) {
          setIsMerged(false);
          setIsFullyMerged(false);
          clearTimeout(timeoutId);
        }
      },
      {
        threshold: [0, 0.7], // Trigger when 70% visible to merge, trigger at 0 to reset
        rootMargin: "0px"
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      clearTimeout(timeoutId);
    };
  }, [mounted]);

  // Avoid SSR hydration error by rendering a static placeholder until mounted
  if (!mounted) {
    return (
      <div className="w-full py-8 flex flex-col items-center min-h-[360px] justify-center">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 dark:bg-slate-800 h-28 w-28"></div>
          <div className="rounded-full bg-slate-200 dark:bg-slate-800 h-28 w-28"></div>
          <div className="rounded-full bg-slate-200 dark:bg-slate-800 h-28 w-28"></div>
        </div>
      </div>
    );
  }

  // Horizontal translation on desktop, vertical on mobile
  const leftOffset = isMobile ? "translateY(320px)" : "translateX(280px)";
  const rightOffset = isMobile ? "translateY(-320px)" : "translateX(-280px)";

  return (
    <div 
      ref={containerRef}
      className="w-full py-12 flex flex-col items-center select-none overflow-hidden"
    >
      
      <style>{`
        @keyframes ringBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        @keyframes ringRadiate {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .animate-ring-breathe {
          animation: ringBreathe 3.5s ease-in-out infinite;
        }
        .animate-ring-radiate {
          animation: ringRadiate 2.5s cubic-bezier(0.1, 0.4, 0.2, 1) infinite;
        }
      `}</style>
      
      <div className="relative flex flex-col items-center justify-center w-full max-w-5xl">

        {/* Overlapping Rings Container */}
        <div 
          className="relative flex flex-col md:flex-row items-center justify-center -space-y-10 md:-space-y-0 md:-space-x-16 w-full transition-all duration-500 py-10"
        >
          {/* Ring 1: Emotional Health */}
          <HolisticRing
            label="Emotional Health"
            rotationDirection="normal"
            colorClass="text-primary/70"
            tiltAngle={-12}
            speed={180}
            isMerged={isMerged}
            isFullyMerged={isFullyMerged}
            transformOffset={leftOffset}
          />
          {/* Ring 2: Physical Health */}
          <HolisticRing
            label="Physical Health"
            rotationDirection="reverse"
            colorClass="text-secondary/70"
            tiltAngle={0}
            speed={150}
            isMerged={isMerged}
            isFullyMerged={isFullyMerged}
            transformOffset="translate(0px, 0px)"
            isCenter={true}
          />
          {/* Ring 3: Mental Wellbeing */}
          <HolisticRing
            label="Mental Wellbeing"
            rotationDirection="normal"
            colorClass="text-amber-500/70"
            tiltAngle={12}
            speed={190}
            isMerged={isMerged}
            isFullyMerged={isFullyMerged}
            transformOffset={rightOffset}
          />
        </div>
      </div>

    </div>
  );
}
