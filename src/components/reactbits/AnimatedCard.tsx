import React from "react";
import { cn } from "@/lib/utils";

export const AnimatedCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "group relative rounded-2xl bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-border/50",
        className
      )}
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10" />
      {children}
    </div>
  );
};
