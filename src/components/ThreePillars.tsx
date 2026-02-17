"use client";

import ScrollReveal from "./ui/ScrollReveal";
import GlassCard from "./ui/GlassCard";

const pillars = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <path d="M12 2a8 8 0 0 0-8 8c0 1.5.5 3 1.5 4l.5 1h12l.5-1c1-1 1.5-2.5 1.5-4a8 8 0 0 0-8-8z" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2v4" />
        <path d="M4.9 7.1l2.8 2.8" />
        <path d="M19.1 7.1l-2.8 2.8" />
      </svg>
    ),
    title: "Neural Training",
    description:
      "Workouts engineered to optimize nervous system response. Reaction drills, neural activation protocols, and progressive overload for your brain-body connection. Every rep strengthens the signal between thought and action.",
    stat: "47% faster neural adaptation",
    gradient: "from-[#00D4FF] to-[#0EA5E9]",
    glowColor: "rgba(0, 212, 255, 0.12)",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#D946EF" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="4" r="1.5" />
        <circle cx="18.36" cy="8" r="1.5" />
        <circle cx="18.36" cy="16" r="1.5" />
        <circle cx="12" cy="20" r="1.5" />
        <circle cx="5.64" cy="16" r="1.5" />
        <circle cx="5.64" cy="8" r="1.5" />
        <line x1="12" y1="5.5" x2="12" y2="9" />
        <line x1="17.1" y1="8.9" x2="14.6" y2="10.5" />
        <line x1="17.1" y1="15.1" x2="14.6" y2="13.5" />
        <line x1="12" y1="18.5" x2="12" y2="15" />
        <line x1="6.9" y1="15.1" x2="9.4" y2="13.5" />
        <line x1="6.9" y1="8.9" x2="9.4" y2="10.5" />
      </svg>
    ),
    title: "Neuro Formulas",
    description:
      "Precision supplement stacks targeting neurotransmitters. Custom nootropic and training fuel formulas that amplify every session. Designed for dopamine, acetylcholine, and GABA optimization.",
    stat: "12 targeted neural compounds",
    gradient: "from-[#8B5CF6] to-[#D946EF]",
    glowColor: "rgba(139, 92, 246, 0.12)",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D946EF" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
        </defs>
        <path d="M2 12h4l3-9 6 18 3-9h4" />
      </svg>
    ),
    title: "1:1 Neuro Coaching",
    description:
      "Personalized programming that combines neural training and formula protocols. Your dedicated neuro-coach adapts everything to your response data, ensuring continuous breakthroughs.",
    stat: "100% personalized protocols",
    gradient: "from-[#D946EF] to-[#00D4FF]",
    glowColor: "rgba(217, 70, 239, 0.12)",
  },
];

export default function ThreePillars() {
  return (
    <section id="pillars" className="relative py-24 sm:py-32 px-6">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#8B5CF6] mb-4">
            The System
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
          >
            Three Pillars of{" "}
            <span className="gradient-text">Neural Performance</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-[#94A3B8] text-lg">
            Each pillar is powerful alone. Together, they create an unbreakable
            neural architecture for peak human performance.
          </p>
        </ScrollReveal>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 0.15}>
              <GlassCard
                className="h-full flex flex-col"
                glowColor={pillar.glowColor}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-[#94A3B8] leading-relaxed mb-8 flex-grow">
                  {pillar.description}
                </p>

                {/* Stat Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${pillar.gradient} bg-opacity-10 self-start`}
                  style={{
                    background: `linear-gradient(135deg, ${pillar.glowColor}, rgba(255,255,255,0.03))`,
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00D4FF]">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm font-medium text-white">
                    {pillar.stat}
                  </span>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
