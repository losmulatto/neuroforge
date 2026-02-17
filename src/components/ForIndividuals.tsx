"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";
import GlassCard from "./ui/GlassCard";

const features = [
  "Personalized neural assessment",
  "Custom training protocols",
  "Nootropic formula guide",
  "Weekly AI adjustments",
  "Progress tracking dashboard",
];

export default function ForIndividuals() {
  return (
    <section className="relative py-24 sm:py-32 px-6 overflow-hidden">
      {/* Cosmic background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,212,255,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.06)_0%,transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <p className="text-sm font-semibold tracking-widest uppercase text-[#00D4FF] mb-4">
                For Individuals
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
                style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
              >
                Forge Your{" "}
                <span className="gradient-text">Neural Edge</span>
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
                Whether you are a weekend warrior or a dedicated biohacker,
                NeuroForge adapts to your goals. Our AI analyzes your unique
                neurological profile and builds a complete system -- training,
                formulas, and recovery -- designed to unlock capabilities you
                never knew you had.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    className="flex items-center gap-3 text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-[#94A3B8]">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Phone Mockup */}
          <ScrollReveal delay={0.3} direction="right">
            <div className="relative flex items-center justify-center">
              {/* Glow behind device */}
              <div className="absolute w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.15)_0%,transparent_70%)] blur-2xl" />

              <GlassCard className="relative w-72 sm:w-80 mx-auto" padding="p-0" hover={false}>
                {/* Phone screen mockup */}
                <div className="aspect-[9/16] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a0a1a] to-[#050507] flex flex-col items-center justify-center p-8">
                  {/* Status bar */}
                  <div className="w-full flex items-center justify-between mb-auto pt-4 px-2">
                    <span className="text-xs text-[#94A3B8]">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 rounded-sm bg-[#94A3B8]/30" />
                      <div className="w-3 h-2 rounded-sm bg-[#94A3B8]/30" />
                    </div>
                  </div>

                  {/* App content preview */}
                  <div className="flex-1 flex flex-col items-center justify-center gap-6 w-full">
                    {/* Logo */}
                    <div className="text-sm font-extrabold tracking-widest">
                      <span className="gradient-text">NEURO</span>
                      <span className="text-white">FORGE</span>
                    </div>

                    {/* Neural score circle */}
                    <div className="relative w-32 h-32 rounded-full border-2 border-[#00D4FF]/30 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.1)_0%,transparent_70%)]" />
                      <div className="text-center">
                        <div className="text-3xl font-extrabold gradient-text">87</div>
                        <div className="text-xs text-[#94A3B8]">Neural Score</div>
                      </div>
                    </div>

                    {/* Mini stats */}
                    <div className="grid grid-cols-3 gap-3 w-full px-2">
                      {[
                        { label: "Reaction", value: "142ms" },
                        { label: "Focus", value: "94%" },
                        { label: "Recovery", value: "8.2h" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="text-center p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                        >
                          <div className="text-sm font-bold text-white">{stat.value}</div>
                          <div className="text-[10px] text-[#94A3B8]">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Preview label */}
                    <div className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                      <span className="text-xs text-[#94A3B8]">APP PREVIEW</span>
                    </div>
                  </div>

                  {/* Home indicator */}
                  <div className="w-32 h-1 rounded-full bg-white/[0.2] mt-auto mb-2" />
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
