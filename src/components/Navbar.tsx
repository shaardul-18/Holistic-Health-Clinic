"use client";

import Link from "next/link";
import Image from "next/image";
import { WhatsAppButton } from "./WhatsAppButton";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
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
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-foreground/80">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/location" className="hover:text-primary transition-colors">Location</Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <WhatsAppButton />
        </div>
      </div>
    </header>
  );
}
