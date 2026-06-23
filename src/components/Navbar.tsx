"use client";

import Link from "next/link";
import Image from "next/image";
import { WhatsAppButton } from "./WhatsAppButton";
import { ThemeToggle } from "./theme-toggle";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105" onClick={() => setIsOpen(false)}>
          <Image 
            src="/logo-new.png" 
            alt="Holistic Health Clinic Logo" 
            width={60} 
            height={60}
            className="object-contain"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-xl font-bold text-primary leading-none tracking-tight">HOLISTIC HEALTH</span>
            <span className="text-sm font-medium text-secondary">Physiotherapy & Counselling</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-lg text-foreground/90">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/events" className="hover:text-primary transition-colors">Events</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/location" className="hover:text-primary transition-colors">Location</Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <WhatsAppButton />
          
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden text-foreground hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t bg-background/98 backdrop-blur shadow-lg animate-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col p-4 space-y-2 font-bold text-lg text-foreground/90">
            <Link href="/" className="hover:text-primary transition-colors py-2 border-b border-border/50" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/services" className="hover:text-primary transition-colors py-2 border-b border-border/50" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/events" className="hover:text-primary transition-colors py-2 border-b border-border/50" onClick={() => setIsOpen(false)}>Events</Link>
            <Link href="/about" className="hover:text-primary transition-colors py-2 border-b border-border/50" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/location" className="hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>Location</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
