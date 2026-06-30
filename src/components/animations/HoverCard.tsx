"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  whileHover?: any;
  whileTap?: any;
  transition?: any;
}

export function HoverCard({ children, className = "", whileHover = { y: -5, scale: 1.02 }, whileTap = { scale: 0.98 }, transition }: HoverCardProps) {
  return (
    <motion.div
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition || { type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
