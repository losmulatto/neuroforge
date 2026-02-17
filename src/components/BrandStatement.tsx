"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimationControls } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

export default function BrandStatement() {
  const ref = useRef<HTMLElement>(null);
  const redControls = useAnimationControls();
  const blueControls = useAnimationControls();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Periodic glitch — fires every 4–8 seconds
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const triggerGlitch = async () => {
      await Promise.all([
        redControls.start({
          x: [0, -8, 5, -3, 0],
          opacity: [0, 0.75, 0.75, 0.5, 0],
          clipPath: [
            "inset(20% 0 55% 0)",
            "inset(5% 0 80% 0)",
            "inset(65% 0 15% 0)",
            "inset(35% 0 45% 0)",
            "inset(100% 0 0 0)",
          ],
          transition: { duration: 0.45, ease: "linear" },
        }),
        blueControls.start({
          x: [0, 8, -5, 3, 0],
          opacity: [0, 0.65, 0.65, 0.4, 0],
          clipPath: [
            "inset(60% 0 20% 0)",
            "inset(82% 0 5% 0)",
            "inset(15% 0 70% 0)",
            "inset(48% 0 32% 0)",
            "inset(100% 0 0 0)",
          ],
          transition: { duration: 0.45, ease: "linear" },
        }),
      ]);
      schedule();
    };

    const schedule = () => {
      const delay = 4000 + Math.random() * 4000;
      timeout = setTimeout(triggerGlitch, delay);
    };

    schedule();
    return () => clearTimeout(timeout);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const textStyle = {
    fontSize: "clamp(4rem, 13vw, 13rem)",
    letterSpacing: "-0.02em",
  };

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden" style={{ position: "relative" }}>
      {/* Tagline above */}
      <ScrollReveal className="relative z-10 text-center mb-8">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-[#94A3B8] font-medium">
          Rewire. Train. Transcend.
        </p>
      </ScrollReveal>

      {/* Giant animated NEUROFORGE text with glitch */}
      <motion.div className="relative" style={{ x, opacity }}>
        <div className="relative select-none text-center">
          {/* Base text */}
          <h2
            className="gradient-text-animated font-extrabold leading-none"
            style={textStyle}
          >
            NEUROFORGE
          </h2>

          {/* Glitch layer: red channel */}
          <motion.h2
            aria-hidden
            animate={redControls}
            initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)", x: 0 }}
            className="font-extrabold leading-none absolute inset-0 pointer-events-none"
            style={{
              ...textStyle,
              color: "#FF0044",
              mixBlendMode: "screen",
            }}
          >
            NEUROFORGE
          </motion.h2>

          {/* Glitch layer: blue/cyan channel */}
          <motion.h2
            aria-hidden
            animate={blueControls}
            initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)", x: 0 }}
            className="font-extrabold leading-none absolute inset-0 pointer-events-none"
            style={{
              ...textStyle,
              color: "#00D4FF",
              mixBlendMode: "screen",
            }}
          >
            NEUROFORGE
          </motion.h2>
        </div>
      </motion.div>

      {/* Subtle radial glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0,212,255,0.06) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)",
        }}
      />
    </section>
  );
}
