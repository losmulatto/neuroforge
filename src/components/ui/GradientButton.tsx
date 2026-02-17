"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "filled" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
}

export default function GradientButton({
  children,
  className = "",
  variant = "filled",
  size = "md",
  href,
  onClick,
}: GradientButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-4.5 text-lg",
  };

  const baseClasses = `
    relative inline-flex items-center justify-center
    font-semibold rounded-full cursor-pointer
    transition-all duration-300
    ${sizeClasses[size]}
    ${className}
  `;

  const filledClasses = `
    bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#D946EF]
    text-white
    hover:shadow-[0_0_30px_rgba(0,212,255,0.4),0_0_60px_rgba(139,92,246,0.2)]
  `;

  const outlineClasses = `
    bg-transparent text-white
    gradient-border
    hover:shadow-[0_0_30px_rgba(0,212,255,0.3),0_0_60px_rgba(139,92,246,0.15)]
  `;

  const variantClasses = variant === "filled" ? filledClasses : outlineClasses;

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
