"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Info } from "lucide-react";

export function InteractiveBodyMap() {
  const [activePart, setActivePart] = useState<string | null>(null);

  const bodyParts = [
    {
      id: "neck",
      name: "Neck & Spine",
      cx: 100,
      cy: 70,
      r: 15,
      href: "/blog/cervical-lumbar-spondylosis",
      description: "Cervical Spondylosis & Neck Pain"
    },
    {
      id: "shoulder",
      name: "Shoulder Joint",
      cx: 60,
      cy: 100,
      r: 18,
      href: "/blog/frozen-shoulder-rehab",
      description: "Frozen Shoulder & Rotator Cuff"
    },
    {
      id: "lower-back",
      name: "Lower Back",
      cx: 100,
      cy: 180,
      r: 20,
      href: "/blog/sciatica-pain-relief",
      description: "Sciatica & Lumbar Pain"
    },
    {
      id: "knee",
      name: "Knee Joint",
      cx: 75,
      cy: 320,
      r: 18,
      href: "/blog/knee-osteoarthritis",
      description: "Osteoarthritis & Ligament Injuries"
    }
  ];

  return (
    <div className="relative w-full max-w-md mx-auto p-8 rounded-2xl bg-secondary/5 border border-border/50">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Where does it hurt?</h3>
        <p className="text-muted-foreground text-sm">Select a body part to explore targeted treatments</p>
      </div>
      
      <div className="relative aspect-[1/2] w-full max-w-[200px] mx-auto">
        {/* Abstract Body SVG Background */}
        <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-2xl opacity-80" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Head */}
          <circle cx="100" cy="30" r="20" className="text-muted-foreground/30" />
          {/* Torso */}
          <path d="M70,80 Q100,100 130,80 L120,200 Q100,220 80,200 Z" className="text-muted-foreground/30" />
          {/* Left Arm */}
          <path d="M70,80 Q40,90 40,160 L50,220" className="text-muted-foreground/30" />
          {/* Right Arm */}
          <path d="M130,80 Q160,90 160,160 L150,220" className="text-muted-foreground/30" />
          {/* Left Leg */}
          <path d="M80,200 Q60,300 70,380" className="text-muted-foreground/30" />
          {/* Right Leg */}
          <path d="M120,200 Q140,300 130,380" className="text-muted-foreground/30" />
        </svg>

        {/* Interactive Points */}
        {bodyParts.map((part) => (
          <Link key={part.id} href={part.href}>
            <motion.div
              className={`absolute flex items-center justify-center cursor-pointer transition-all ${activePart === part.id ? 'z-20' : 'z-10'}`}
              style={{
                left: `${(part.cx / 200) * 100}%`,
                top: `${(part.cy / 400) * 100}%`,
                width: `${part.r * 2}px`,
                height: `${part.r * 2}px`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => setActivePart(part.id)}
              onMouseLeave={() => setActivePart(null)}
              whileHover={{ scale: 1.2 }}
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75"></div>
              <div className="relative w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
              
              {/* Tooltip */}
              <motion.div 
                initial={{ opacity: 0, y: 10, pointerEvents: 'none' }}
                animate={{ 
                  opacity: activePart === part.id ? 1 : 0,
                  y: activePart === part.id ? 0 : 10,
                  pointerEvents: activePart === part.id ? 'auto' : 'none'
                }}
                className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-48 bg-card border border-border p-3 rounded-lg shadow-xl"
              >
                <div className="flex items-center space-x-2 text-primary mb-1">
                  <Info className="w-4 h-4" />
                  <span className="font-semibold text-sm">{part.name}</span>
                </div>
                <p className="text-xs text-muted-foreground">{part.description}</p>
                <div className="mt-2 text-xs font-medium text-foreground flex items-center group-hover:text-primary transition-colors">
                  View Treatment &rarr;
                </div>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
