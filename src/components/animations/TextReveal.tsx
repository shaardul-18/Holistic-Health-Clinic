"use client";

import { motion } from "framer-motion";

export function TextReveal({ 
  children, 
  className = "", 
  gradientClass = "",
  delay = 0,
  direction = "up"
}: { 
  children: string, 
  className?: string, 
  gradientClass?: string,
  delay?: number,
  direction?: "up" | "down"
}) {
  const words = children.split(" ");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay / 1000,
      }
    }
  };
  
  const wordVariants = {
    hidden: { 
      y: direction === "up" ? "120%" : "-120%",
      opacity: 0,
      rotateX: 45,
    },
    visible: { 
      y: "0%",
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    }
  };

  return (
    <motion.span 
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={containerVariants}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-bottom pb-1 -mb-1" style={{ perspective: '1000px' }}>
          <motion.span
            className={`inline-block ${gradientClass}`}
            variants={wordVariants}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
