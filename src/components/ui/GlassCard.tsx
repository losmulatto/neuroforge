"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: string;
  padding?: string;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glowColor = "rgba(0, 212, 255, 0.1)",
  padding = "p-8",
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`
        relative overflow-hidden rounded-3xl
        bg-white/[0.03] border border-white/[0.08]
        backdrop-blur-xl
        ${padding}
        ${className}
      `}
      style={hover ? { rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 } : {}}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={hover ? {
        boxShadow: `0 0 40px ${glowColor}, 0 0 80px ${glowColor}, 0 25px 50px rgba(0,0,0,0.4)`,
        borderColor: "rgba(255, 255, 255, 0.2)",
        scale: 1.01,
      } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Cursor glow that follows mouse */}
      {hover && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 rounded-3xl transition-opacity duration-300"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]) =>
                `radial-gradient(circle at ${gx} ${gy}, ${glowColor.replace("0.1", "0.18")} 0%, transparent 60%)`
            ),
          }}
          whileHover={{ opacity: 1 }}
        />
      )}

      {/* Top shimmer line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${glowColor.replace("0.1", "0.6")}, transparent)`,
          scaleX: 0,
          originX: 0,
        }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Content lifted in 3D */}
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
