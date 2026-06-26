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
      name: "Neck & Cervical Spine",
      cx: 200,
      cy: 100,
      href: "/blog/cervical-lumbar-spondylosis",
      description: "Cervical Spondylosis, Tech Neck, Whiplash"
    },
    {
      id: "shoulder-l",
      name: "Left Shoulder",
      cx: 130,
      cy: 140,
      href: "/blog/frozen-shoulder-rehab",
      description: "Frozen Shoulder, Rotator Cuff Tears"
    },
    {
      id: "shoulder-r",
      name: "Right Shoulder",
      cx: 270,
      cy: 140,
      href: "/blog/frozen-shoulder-rehab",
      description: "Frozen Shoulder, Rotator Cuff Tears"
    },
    {
      id: "elbow-l",
      name: "Left Elbow & Wrist",
      cx: 105,
      cy: 280,
      href: "/blog/tennis-elbow-carpal-tunnel",
      description: "Tennis Elbow, Carpal Tunnel Syndrome"
    },
    {
      id: "elbow-r",
      name: "Right Elbow & Wrist",
      cx: 295,
      cy: 280,
      href: "/blog/tennis-elbow-carpal-tunnel",
      description: "Tennis Elbow, Carpal Tunnel Syndrome"
    },
    {
      id: "lower-back",
      name: "Lumbar Spine & Pelvis",
      cx: 200,
      cy: 350,
      href: "/blog/sciatica-pain-relief",
      description: "Sciatica, Disc Herniation, SI Joint Pain"
    },
    {
      id: "hip-l",
      name: "Left Hip",
      cx: 160,
      cy: 400,
      href: "/blog/post-surgical-rehab",
      description: "Hip Bursitis, Post-Surgical Rehab"
    },
    {
      id: "hip-r",
      name: "Right Hip",
      cx: 240,
      cy: 400,
      href: "/blog/post-surgical-rehab",
      description: "Hip Bursitis, Post-Surgical Rehab"
    },
    {
      id: "knee-l",
      name: "Left Knee",
      cx: 145,
      cy: 560,
      href: "/blog/knee-osteoarthritis",
      description: "Osteoarthritis, ACL/MCL Tears"
    },
    {
      id: "knee-r",
      name: "Right Knee",
      cx: 255,
      cy: 560,
      href: "/blog/knee-osteoarthritis",
      description: "Osteoarthritis, ACL/MCL Tears"
    },
    {
      id: "foot-l",
      name: "Left Ankle & Foot",
      cx: 135,
      cy: 740,
      href: "/blog/plantar-fasciitis-relief",
      description: "Plantar Fasciitis, Achilles Tendinopathy"
    },
    {
      id: "foot-r",
      name: "Right Ankle & Foot",
      cx: 265,
      cy: 740,
      href: "/blog/plantar-fasciitis-relief",
      description: "Plantar Fasciitis, Achilles Tendinopathy"
    }
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto p-4 md:p-10 rounded-[40px] bg-secondary/5 border border-border/50 shadow-sm overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="text-center mb-12 relative z-10">
        <h3 className="text-3xl font-bold mb-3 tracking-tight">Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Symptom Map</span></h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">Select a joint or region to explore highly targeted clinical treatments and rehabilitation protocols.</p>
      </div>
      
      <div className="relative w-full max-w-[500px] aspect-[1/1.6] mx-auto z-10 group">
        
        {/* High-Fidelity Anatomical Vector Base */}
        <svg viewBox="0 0 400 800" className="w-full h-full drop-shadow-2xl absolute inset-0 pointer-events-none" fill="none" stroke="currentColor">
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.05" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <g className="text-primary/60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="url(#bodyGradient)">
            {/* Highly detailed male anatomical silhouette path */}
            <path d="M 200, 20
                     C 185, 20 175, 35 175, 55
                     C 175, 75 185, 90 190, 95
                     L 190, 110
                     C 160, 110 130, 125 115, 145
                     C 100, 165 95, 200 95, 220
                     C 95, 260 85, 320 80, 380
                     C 75, 420 90, 430 95, 410
                     C 105, 360 115, 300 120, 260
                     L 135, 250
                     L 135, 380
                     C 135, 460 120, 560 115, 680
                     C 110, 740 125, 760 145, 750
                     C 165, 740 175, 710 180, 680
                     L 200, 420
                     L 220, 680
                     C 225, 710 235, 740 255, 750
                     C 275, 760 290, 740 285, 680
                     C 280, 560 265, 460 265, 380
                     L 265, 250
                     L 280, 260
                     C 285, 300 295, 360 305, 410
                     C 310, 430 325, 420 320, 380
                     C 315, 320 305, 260 305, 220
                     C 305, 200 300, 165 285, 145
                     C 270, 125 240, 110 210, 110
                     L 210, 95
                     C 215, 90 225, 75 225, 55
                     C 225, 35 215, 20 200, 20 Z" />
          </g>
          
          {/* Subtle Anatomical Lines */}
          <path d="M 200 120 L 200 380" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
        </svg>

        {/* Interactive Points */}
        {bodyParts.map((part) => (
          <Link key={part.id} href={part.href}>
            <motion.div
              className={`absolute flex items-center justify-center cursor-pointer transition-all ${activePart === part.id ? 'z-30' : 'z-20'}`}
              style={{
                left: `${(part.cx / 400) * 100}%`,
                top: `${(part.cy / 800) * 100}%`,
                width: '32px',
                height: '32px',
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => setActivePart(part.id)}
              onMouseLeave={() => setActivePart(null)}
              whileHover={{ scale: 1.15 }}
            >
              <div className={`absolute inset-0 rounded-full animate-ping opacity-60 ${activePart === part.id ? 'bg-secondary' : 'bg-primary'}`}></div>
              <div className={`relative w-4 h-4 rounded-full transition-colors duration-300 ${activePart === part.id ? 'bg-secondary shadow-[0_0_20px_rgba(var(--secondary),0.9)]' : 'bg-primary shadow-[0_0_12px_rgba(var(--primary),0.6)]'}`}></div>
              
              {/* Premium Tooltip */}
              <motion.div 
                initial={{ opacity: 0, y: 15, scale: 0.95, pointerEvents: 'none' }}
                animate={{ 
                  opacity: activePart === part.id ? 1 : 0,
                  y: activePart === part.id ? 0 : 15,
                  scale: activePart === part.id ? 1 : 0.95,
                  pointerEvents: activePart === part.id ? 'auto' : 'none'
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-full ml-5 top-1/2 -translate-y-1/2 w-64 bg-background/90 backdrop-blur-xl border border-primary/20 p-4 rounded-xl shadow-2xl z-50"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Info className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="block font-bold text-foreground text-sm mb-1">{part.name}</span>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{part.description}</p>
                    <div className="inline-flex items-center text-xs font-semibold text-primary bg-primary/5 px-2 py-1 rounded-md group-hover:bg-primary/10 transition-colors">
                      View Recovery Plan &rarr;
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
