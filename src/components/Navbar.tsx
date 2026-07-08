"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Location", href: "/location" }
  ];

  return (
    <header className="fixed top-2 sm:top-4 inset-x-2 sm:inset-x-4 z-50 flex flex-col items-center pointer-events-none">
      <div className="w-full max-w-6xl bg-background/60 backdrop-blur-xl border border-white/50 border-b-border/30 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-white/50 flex h-16 sm:h-20 items-center justify-between px-4 sm:px-8 pointer-events-auto transition-all duration-300">
        
        {/* Logo and title */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 transition-transform hover:scale-102" onClick={() => setIsOpen(false)}>
          <Image 
            src="/logo-new.png" 
            alt="Holistic Health Clinic Logo" 
            width={48} 
            height={48}
            className="object-contain"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-base font-black tracking-widest text-foreground leading-none">HOLISTIC HEALTH</span>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-1">Physiotherapy & Counselling</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  isActive 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Fallback Nav for medium screens (between md and xl) where we have less space */}
          <nav className="hidden md:flex xl:hidden items-center gap-1 mr-2">
            {navItems.slice(0, 5).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-300 ${
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <WhatsAppButton 
            className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 shadow-none text-[10px] sm:text-xs font-bold tracking-wider uppercase px-3 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center gap-1 sm:gap-1.5 shrink-0 transition-colors"
            message="Hello, I would like to book a consultation at your clinic. Please provide more details. Thank you!"
          >
            <span className="hidden lg:inline">Book Consultation</span>
            <span className="lg:hidden">Book Now</span>
          </WhatsAppButton>
          
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 sm:p-2 md:hidden text-foreground hover:text-primary transition-colors focus:outline-none pointer-events-auto shrink-0"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="w-full max-w-[calc(100%-1rem)] sm:max-w-md mt-2 md:hidden bg-background/95 backdrop-blur-xl border border-border/60 rounded-3xl shadow-xl p-4 flex flex-col space-y-2 animate-in slide-in-from-top-4 duration-300 pointer-events-auto">
          <nav className="flex flex-col space-y-1 text-foreground/90">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className={`flex items-center justify-between py-2.5 px-4 rounded-2xl text-xs font-extrabold tracking-widest uppercase transition-all duration-200 ${
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "hover:bg-muted/50 text-foreground/80 hover:text-foreground"
                  }`} 
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.name}</span>
                  <span className="text-muted-foreground/30 font-light">&rarr;</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
