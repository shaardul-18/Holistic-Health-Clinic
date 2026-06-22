import Link from "next/link";
import { Stethoscope } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background/50 mt-16">
      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-primary">
            <Stethoscope className="h-5 w-5" />
            <span>Holistic Health Clinic</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Empowering your journey to optimal wellness through expert physiotherapy and counselling.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </nav>
          <p className="text-xs text-muted-foreground/60">
            &copy; {currentYear} Holistic Health Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
