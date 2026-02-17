"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ui/ScrollReveal";
import GlassCard from "./ui/GlassCard";

const steps = [
  {
    number: "01",
    title: "Neural Assessment",
    description:
      "AI maps your unique neural patterns, reaction times, and cognitive baselines. We establish a complete neurological profile before designing your program.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Custom Protocol",
    description:
      "Personalized training and formula stack designed for YOUR nervous system. Every exercise, every compound, every dose calibrated to your neural profile.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Progressive Overload",
    description:
      "Neural training that systematically strengthens mind-body pathways. Reaction drills, proprioception work, and cognitive loading that scales with your growth.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Adapt & Evolve",
    description:
      "Real-time AI adjustments based on your neural response data. Your program evolves weekly as your nervous system adapts, ensuring perpetual progress.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        <polyline points="22 2 22 8 16 8" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgTextY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Scroll-driven progress line: fills as section scrolls into view
  const lineScaleRaw = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);
  const lineScale = useSpring(lineScaleRaw, { stiffness: 60, damping: 20 });

  // Traveling orb position along the line
  const orbY = useTransform(lineScaleRaw, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-24 sm:py-32 px-6 overflow-hidden">
      {/* Parallax background text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ y: bgTextY }}
      >
        <span className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-extrabold tracking-widest text-white/[0.015] whitespace-nowrap">
          NEUROFORGE
        </span>
      </motion.div>

      {/* Gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.05)_0%,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#00D4FF] mb-4">
            The Method
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
          >
            The <span className="gradient-text">NeuroForge</span> Method
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-[#94A3B8] text-lg">
            A four-phase system that systematically upgrades your nervous system
            for lasting performance gains.
          </p>
        </ScrollReveal>

        {/* Layout: progress line (desktop only) + steps grid */}
        <div className="relative flex gap-8">
          {/* Scroll-driven vertical progress line — desktop only */}
          <div className="hidden lg:flex flex-col items-center relative flex-shrink-0 w-8">
            {/* Track */}
            <div className="absolute top-0 bottom-0 w-px bg-white/[0.06]" />

            {/* Filled beam */}
            <motion.div
              className="absolute top-0 left-0 w-px origin-top"
              style={{
                scaleY: lineScale,
                background: "linear-gradient(to bottom, rgba(0,212,255,0.8), rgba(139,92,246,0.6), rgba(217,70,239,0.4))",
              }}
            />

            {/* Traveling glow orb */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 -translate-y-1/2 pointer-events-none"
              style={{ top: orbY }}
            >
              <div className="w-3 h-3 rounded-full bg-[#00D4FF] shadow-[0_0_12px_4px_rgba(0,212,255,0.6)]" />
            </motion.div>

            {/* Step markers */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full border border-[#00D4FF]/40 bg-[#050507]"
                style={{
                  top: `${(i / 3) * 100}%`,
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
              />
            ))}
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 flex-1">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.12}>
                <GlassCard className="h-full group" glowColor="rgba(0, 212, 255, 0.08)">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <motion.div
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D4FF]/10 to-[#8B5CF6]/10 border border-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF]"
                        whileHover={{
                          boxShadow: "0 0 20px rgba(0,212,255,0.4)",
                          borderColor: "rgba(0,212,255,0.5)",
                          scale: 1.05,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {step.icon}
                      </motion.div>
                    </div>

                    <div>
                      <span className="text-xs font-bold tracking-widest text-[#00D4FF]/60 uppercase">
                        Step {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#94A3B8] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
