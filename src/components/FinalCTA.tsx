"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";
import GradientButton from "./ui/GradientButton";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32 px-6">
      <div className="relative max-w-4xl mx-auto">
        <ScrollReveal>
          {/* Large glass card */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 via-[#8B5CF6]/10 to-[#D946EF]/10" />
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl" />

            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-white/[0.1]" />

            {/* Glow effects */}
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#00D4FF]/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[#D946EF]/10 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/[0.06] border border-white/[0.1] text-sm text-[#94A3B8]"
              >
                <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
                Limited Early Access
              </motion.div>

              {/* Heading */}
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
                style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
              >
                Your Neural Evolution{" "}
                <span className="gradient-text">Starts Today</span>
              </h2>

              {/* Copy */}
              <p className="max-w-xl mx-auto text-[#94A3B8] text-lg leading-relaxed mb-10">
                Join thousands rewiring their potential with NeuroForge. Get
                early access to AI-powered neural optimization before the
                general launch.
              </p>

              {/* Email form */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:flex-1 px-6 py-4 rounded-full bg-white/[0.05] border border-white/[0.1] text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#00D4FF]/50 focus:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all"
                />
                <GradientButton size="lg" className="w-full sm:w-auto whitespace-nowrap">
                  Join the Waitlist
                </GradientButton>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-[#94A3B8]/60">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  No spam, ever
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Free to join
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
