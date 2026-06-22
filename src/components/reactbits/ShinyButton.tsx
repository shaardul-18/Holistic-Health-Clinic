import React from "react";
import { cn } from "@/lib/utils";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
        <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    );
  }
);
ShinyButton.displayName = "ShinyButton";
