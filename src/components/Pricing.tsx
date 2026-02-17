"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";
import GradientButton from "./ui/GradientButton";

const plans = [
  {
    name: "NEURAL STARTER",
    price: "Free",
    period: "7-day trial",
    description: "Experience the foundations of neural training.",
    features: [
      "Neural assessment baseline",
      "7-day starter program",
      "Basic formula guide",
      "Community access",
      "Intro neural drills",
    ],
    highlighted: false,
    badge: null,
    ctaText: "Start Free Trial",
    ctaVariant: "outline" as const,
    glowColor: "rgba(0, 212, 255, 0.15)",
  },
  {
    name: "NEURAL PRO",
    price: "$49",
    period: "/month",
    description: "Full neural optimization system for serious athletes.",
    features: [
      "Full training programs",
      "Monthly formula supply",
      "AI-powered adjustments",
      "Private community",
      "Weekly neural assessments",
      "Progress analytics",
      "Recovery protocols",
    ],
    highlighted: true,
    badge: "Most Popular",
    ctaText: "Get Neural Pro",
    ctaVariant: "filled" as const,
    glowColor: "rgba(139, 92, 246, 0.25)",
  },
  {
    name: "NEURAL ELITE",
    price: "$149",
    period: "/month",
    description: "The ultimate neural transformation with 1:1 coaching.",
    features: [
      "1:1 neuro-coaching",
      "Custom formula blends",
      "Priority AI adjustments",
      "VIP community",
      "Quarterly lab work",
      "Daily neural protocols",
      "Direct coach messaging",
      "Competition prep",
    ],
    highlighted: false,
    badge: null,
    ctaText: "Go Elite",
    ctaVariant: "outline" as const,
    glowColor: "rgba(217, 70, 239, 0.15)",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#00D4FF] mb-4">
            Pricing
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
          >
            Choose Your <span className="gradient-text">Neural Level</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-[#94A3B8] text-lg">
            Every plan includes our core neural training methodology. Scale your
            optimization as your performance grows.
          </p>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.12}>
              <motion.div
                className={`
                  relative rounded-3xl overflow-hidden
                  ${plan.highlighted
                    ? "bg-white/[0.05] border-2 border-[#8B5CF6]/40 shadow-[0_0_40px_rgba(139,92,246,0.15)]"
                    : "bg-white/[0.03] border border-white/[0.08]"
                  }
                `}
                whileHover={{
                  scale: plan.highlighted ? 1.02 : 1.01,
                  boxShadow: plan.highlighted
                    ? "0 0 60px rgba(139, 92, 246, 0.3), 0 0 120px rgba(139, 92, 246, 0.1)"
                    : `0 0 30px ${plan.glowColor}`,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 py-2 text-center bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#D946EF]">
                    <span className="text-xs font-bold tracking-widest uppercase text-white">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Shimmer sweep — only on highlighted card */}
                {plan.highlighted && (
                  <motion.div
                    className="absolute top-0 bottom-0 pointer-events-none z-10"
                    style={{
                      left: 0,
                      width: "60%",
                      background:
                        "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.07) 50%, transparent 80%)",
                    }}
                    animate={{ x: ["-120%", "280%"] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                  />
                )}

                {/* Pulsing border glow — only on highlighted card */}
                {plan.highlighted && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    animate={{
                      boxShadow: [
                        "inset 0 0 0px rgba(139,92,246,0)",
                        "inset 0 0 20px rgba(139,92,246,0.15)",
                        "inset 0 0 0px rgba(139,92,246,0)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}

                <div className={`relative z-10 p-8 ${plan.badge ? "pt-14" : ""}`}>
                  {/* Plan name */}
                  <h3 className="text-sm font-bold tracking-widest text-[#94A3B8] mb-4">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white">
                      {plan.price}
                    </span>
                    <span className="text-[#94A3B8] text-lg">{plan.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-[#94A3B8] text-sm mb-8">{plan.description}</p>

                  {/* CTA */}
                  <GradientButton
                    variant={plan.ctaVariant}
                    className="w-full mb-8"
                    href="#cta"
                  >
                    {plan.ctaText}
                  </GradientButton>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={plan.highlighted ? "#8B5CF6" : "#00D4FF"}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-sm text-[#94A3B8]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
