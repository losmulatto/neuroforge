"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ui/ScrollReveal";

const problems = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
    title: "Generic Programs",
    description: "One-size-fits-all ignores your unique neural wiring. Cookie-cutter plans train muscles but leave your nervous system stagnant.",
    accent: "#EF4444",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z" />
        <line x1="8" y1="10" x2="16" y2="10" />
      </svg>
    ),
    title: "Missing the Mind",
    description: "Muscles grow but neural pathways stay dormant. Without neurological training, you plateau before ever reaching your true ceiling.",
    accent: "#F59E0B",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
    title: "No Synergy",
    description: "Training and nutrition disconnected from brain chemistry. Your supplements and workouts operate in silos, leaving massive performance gaps.",
    accent: "#EF4444",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-6">
      {/* Subtle red tint background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.04)_0%,transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section heading */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#EF4444] mb-4">
            The Problem
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
          >
            Traditional Training Misses{" "}
            <span className="text-[#EF4444]">90%</span> of Your Potential
          </h2>
        </ScrollReveal>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => (
            <ScrollReveal key={problem.title} delay={index * 0.15}>
              <motion.div
                className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] group"
                whileHover={{
                  borderColor: `${problem.accent}33`,
                  boxShadow: `0 0 30px ${problem.accent}15`,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-8 right-8 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${problem.accent}40, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `${problem.accent}10`,
                    color: problem.accent,
                  }}
                >
                  {problem.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white">{problem.title}</h3>
                <p className="text-[#94A3B8] leading-relaxed">{problem.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
