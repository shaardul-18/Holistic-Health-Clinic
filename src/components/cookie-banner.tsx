"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem("cookie_consent");
    if (!hasAccepted && !pathname?.startsWith("/admin")) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-full duration-500">
      <div className="mx-auto max-w-4xl bg-background/95 backdrop-blur-md border shadow-2xl rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full hidden sm:block">
            <Cookie className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Your Privacy Matters</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              We use anonymous cookies to analyze site traffic and improve your experience. 
              By clicking "Accept", you consent to our use of these technologies. 
              Read our <Link href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link> for more details.
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 self-end md:self-center shrink-0">
          <Button variant="outline" onClick={() => setIsVisible(false)} className="hidden sm:flex">
            Decline
          </Button>
          <Button onClick={handleAccept} className="w-full sm:w-auto font-semibold">
            Accept
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsVisible(false)}
            className="sm:hidden absolute top-2 right-2 h-8 w-8 text-muted-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
