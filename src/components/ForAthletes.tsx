"use client";

import ScrollReveal from "./ui/ScrollReveal";
import GlassCard from "./ui/GlassCard";
import CountUp from "./ui/CountUp";

const stats = [
  {
    value: 34,
    suffix: "%",
    label: "Reaction Time Improvement",
    description: "Average improvement after 12 weeks",
  },
  {
    value: 2,
    suffix: "x",
    label: "Recovery Speed",
    description: "Faster neural recovery vs baseline",
  },
  {
    value: 47,
    suffix: "%",
    label: "Cognitive Load Handling",
    description: "Better decision-making under pressure",
  },
];

export default function ForAthletes() {
  return (
    <section className="relative py-24 sm:py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Dashboard Mockup */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,transparent_70%)] blur-2xl" />

              <GlassCard className="relative" padding="p-0" hover={false}>
                <div className="aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a0a1a] to-[#050507] p-6 sm:p-8 flex flex-col">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-xs text-[#94A3B8] mb-1">Athlete Dashboard</div>
                      <div className="text-sm font-bold text-white">Neural Performance Overview</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30">
                      <span className="text-xs text-[#8B5CF6]">Elite</span>
                    </div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="flex-1 flex items-end gap-1 sm:gap-2 px-2 mb-4">
                    {[40, 55, 45, 70, 60, 80, 75, 90, 85, 95, 88, 92].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          height: `${height}%`,
                          background: `linear-gradient(to top, rgba(139, 92, 246, 0.3), rgba(0, 212, 255, ${0.3 + (i / 12) * 0.5}))`,
                          border: "1px solid rgba(0, 212, 255, 0.1)",
                        }}
                      />
                    ))}
                  </div>

                  {/* Bottom stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Sessions", value: "124" },
                      { label: "PR Rate", value: "89%" },
                      { label: "Neural Index", value: "9.4" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="text-sm font-bold text-white">{stat.value}</div>
                        <div className="text-[10px] text-[#94A3B8]">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Preview label */}
                  <div className="mt-4 text-center">
                    <span className="text-xs text-[#94A3B8]/50">DASHBOARD PREVIEW</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <p className="text-sm font-semibold tracking-widest uppercase text-[#8B5CF6] mb-4">
                For Athletes
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
                style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
              >
                Dominate Through{" "}
                <span className="gradient-text">Neural Superiority</span>
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-10">
                In competition, milliseconds separate winners from the rest.
                NeuroForge gives serious athletes the neural edge -- faster
                reaction times, sharper decision-making under fatigue, and
                recovery protocols that keep your nervous system operating at
                elite levels when others fade.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={0.1 + index * 0.15}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex-shrink-0 text-3xl font-extrabold gradient-text min-w-[80px]">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{stat.label}</div>
                      <div className="text-sm text-[#94A3B8]">{stat.description}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
