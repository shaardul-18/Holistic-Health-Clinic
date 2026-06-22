"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail, X } from "lucide-react";

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname?.startsWith("/admin")) {
      const hasSeenPopup = sessionStorage.getItem("newsletter_seen");
      if (!hasSeenPopup) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          sessionStorage.setItem("newsletter_seen", "true");
        }, 10000); // 10 seconds delay
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        toast.success("Thank you for subscribing!");
        handleClose();
      } else {
        toast.error("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-none shadow-2xl bg-gradient-to-br from-background to-secondary/30">
        <div className="flex flex-col">
          <div className="bg-primary/10 p-8 flex items-center justify-center">
            <div className="bg-primary/20 p-4 rounded-full">
              <Mail className="h-10 w-10 text-primary" />
            </div>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="space-y-2 text-center">
              <DialogTitle className="text-2xl font-bold tracking-tight">Stay Healthy & Informed</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">
                Get practical mental wellness tips, ergonomic desk guides, and clinic updates directly from Holistic Health Clinic.
              </DialogDescription>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="pl-4 pr-10 py-6 bg-background rounded-xl border-secondary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe Now"}
              </Button>
            </form>
            <p className="text-xs text-center text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
