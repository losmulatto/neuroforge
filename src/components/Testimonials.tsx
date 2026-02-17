"use client";

import ScrollReveal from "./ui/ScrollReveal";
import GlassCard from "./ui/GlassCard";

const testimonials = [
  {
    name: "Alex K.",
    role: "MMA Fighter",
    quote:
      "NeuroForge completely changed how I approach training. The neural protocols gave me reflexes I didn't know I had. My coach noticed the difference within weeks.",
    rating: 5,
    gradient: "from-[#00D4FF] to-[#0EA5E9]",
  },
  {
    name: "Sarah M.",
    role: "Powerlifter",
    quote:
      "The formula stack is insane. My focus during heavy lifts is night and day different. I hit PRs every session for the first two months straight.",
    rating: 5,
    gradient: "from-[#8B5CF6] to-[#D946EF]",
  },
  {
    name: "James L.",
    role: "Biohacker",
    quote:
      "After 3 months, my reaction time improved 34%. The data doesn't lie. This is the future of training and I'm glad I got in early.",
    rating: 5,
    gradient: "from-[#D946EF] to-[#00D4FF]",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#F59E0B"
          stroke="none"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 px-6">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#D946EF] mb-4">
            Testimonials
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
          >
            What Our <span className="gradient-text">Athletes Say</span>
          </h2>
        </ScrollReveal>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.15}>
              <GlassCard className="h-full flex flex-col" glowColor="rgba(139, 92, 246, 0.08)">
                {/* Quote icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white/10 mb-4"
                >
                  <path
                    d="M3 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                    fill="currentColor"
                  />
                  <path
                    d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                    fill="currentColor"
                  />
                </svg>

                {/* Quote */}
                <p className="text-[#94A3B8] leading-relaxed mb-6 flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Rating */}
                <StarRating count={testimonial.rating} />

                {/* Author */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/[0.06]">
                  {/* Avatar placeholder */}
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-sm font-bold text-white`}
                  >
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-[#94A3B8]">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
