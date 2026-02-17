"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import GradientButton from "./ui/GradientButton";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Programs", href: "#pillars" },
  { label: "Formula", href: "#pillars" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 600);
  });

  return (
    <>
      <motion.nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl"
        initial={{ y: -100, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex items-center justify-between px-6 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-2xl">
          {/* Logo */}
          <a href="#" className="text-lg font-extrabold tracking-widest">
            <span className="gradient-text">NEURO</span>
            <span className="text-white">FORGE</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <GradientButton size="sm" href="#cta">
              Start Now
            </GradientButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-5 h-0.5 bg-white"
              animate={isMobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-white"
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-white"
              animate={isMobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden mt-3 rounded-3xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-2xl overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={isMobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#94A3B8] hover:text-white transition-colors py-2"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <GradientButton size="sm" href="#cta" className="mt-2 w-full">
              Start Now
            </GradientButton>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
