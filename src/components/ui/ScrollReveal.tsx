"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 60,
  duration = 0.8,
  once = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const offset = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset, scale: 0.94, filter: "blur(8px)" }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, ...offset, scale: 0.94, filter: "blur(8px)" }
      }
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // expo out — fast start, dramatic decel
        scale: { duration: duration * 1.1, ease: [0.16, 1, 0.3, 1] },
        filter: { duration: duration * 0.8 },
      }}
    >
      {children}
    </motion.div>
  );
}
