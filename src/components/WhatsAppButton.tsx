"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const WhatsAppButton = React.forwardRef<HTMLButtonElement, WhatsAppButtonProps>(
  ({ children = <><span className="hidden sm:inline">Chat on WhatsApp</span><span className="sm:hidden">Chat</span></>, className, ...props }, ref) => {
    const handleClick = () => {
      // Log event
      fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType: "WHATSAPP_CLICK",
          path: window.location.pathname,
          sessionId: localStorage.getItem("analytics_session_id") || "unknown",
        }),
      }).catch(err => console.error(err));

      const message = "Hello, I would like to inquire about an appointment.";
      const whatsappUrl = `https://wa.me/918591180090?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    };

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(
          "group relative overflow-hidden rounded-full bg-[#25D366] px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 shrink-0",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <MessageCircle className="h-5 w-5" />
          {children}
        </span>
        <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    );
  }
);
WhatsAppButton.displayName = "WhatsAppButton";
