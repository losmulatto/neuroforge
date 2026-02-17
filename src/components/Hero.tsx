"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import GradientButton from "./ui/GradientButton";
import NeuralBackground from "./ui/NeuralBackground";

function useCountUp(target: number, duration: number, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // Ease out quad — fast start, smooth deceleration
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(target * eased));
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [inView, target, duration]);

  return count;
}

function StatCounter({
  value,
  suffix,
  label,
  duration = 2,
}: {
  value: number;
  suffix: string;
  label: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, duration, inView);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <motion.span
        className="text-2xl font-bold text-white"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {count.toLocaleString()}
        {suffix}
      </motion.span>
      <span>{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural Network Background */}
      <NeuralBackground />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050507]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-[#94A3B8]"
        >
          <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
          AI-Powered Neural Optimization
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Rewire Your Nervous System.{" "}
          <span className="gradient-text">Unlock Peak Performance.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-[#94A3B8] leading-relaxed mb-12"
        >
          AI-powered neuro-coaching that combines neural training, cognitive formulas,
          and personalized programming to forge your strongest self.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GradientButton size="lg" href="#cta">
            Join the Waitlist
          </GradientButton>
          <GradientButton variant="outline" size="lg" href="#how-it-works">
            See How It Works
          </GradientButton>
        </motion.div>

        {/* Stats — animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 mt-16 text-sm text-[#94A3B8]"
        >
          <StatCounter value={2400} suffix="+" label="Athletes Optimized" duration={2.2} />
          <div className="w-px h-8 bg-white/[0.1] hidden sm:block" />
          <StatCounter value={47} suffix="%" label="Faster Adaptation" duration={1.8} />
          <div className="w-px h-8 bg-white/[0.1] hidden sm:block" />
          <StatCounter value={98} suffix="%" label="Satisfaction Rate" duration={2} />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-[#94A3B8] tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border border-white/[0.2] flex items-start justify-center p-1"
          animate={{ borderColor: ["rgba(255,255,255,0.2)", "rgba(0,212,255,0.5)", "rgba(255,255,255,0.2)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-[#00D4FF]"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
