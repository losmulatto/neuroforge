"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  radius: number;
  pulsePhase: number;
}

interface Particle {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export default function NeuralBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const nodeCount = 40;
    const particleCount = 25;
    const connectionDistance = 200;
    const repulsionRadius = 160;
    const repulsionStrength = 0.9;
    const nodes: Node[] = [];
    const particles: Particle[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const vx = (Math.random() - 0.5) * 0.4;
      const vy = (Math.random() - 0.5) * 0.4;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx,
        vy,
        baseVx: vx,
        baseVy: vy,
        radius: Math.random() * 2 + 1,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        fromNode: Math.floor(Math.random() * nodeCount),
        toNode: Math.floor(Math.random() * nodeCount),
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.005,
      });
    }

    // Track mouse relative to canvas via window (works through overlapping elements)
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const time = Date.now() * 0.001;
      const mouse = mouseRef.current;

      // Update nodes with repulsion
      for (const node of nodes) {
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < repulsionRadius && dist > 0) {
          const force = (1 - dist / repulsionRadius) * repulsionStrength;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }

        // Gentle drift back to base velocity
        node.vx += (node.baseVx - node.vx) * 0.03;
        node.vy += (node.baseVy - node.vy) * 0.03;

        // Speed limit
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > 3) {
          node.vx = (node.vx / speed) * 3;
          node.vy = (node.vy / speed) * 3;
        }

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.3 + 0.7;

        const mouseDx = node.x - mouse.x;
        const mouseDy = node.y - mouse.y;
        const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        const proximity = Math.max(0, 1 - mouseDist / repulsionRadius);

        const radius = node.radius * pulse * (1 + proximity * 2);
        const glowSize = radius * (4 + proximity * 6);
        const glowAlpha = (0.6 + proximity * 0.4) * pulse;

        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowSize);
        gradient.addColorStop(0, `rgba(0, 212, 255, ${glowAlpha})`);
        gradient.addColorStop(0.4, `rgba(139, 92, 246, ${0.25 * pulse})`);
        gradient.addColorStop(1, "rgba(0, 212, 255, 0)");

        ctx.beginPath();
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core dot — brighter when near cursor
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${(0.8 + proximity * 0.2) * pulse})`;
        ctx.fill();
      }

      // Draw traveling particles
      for (const particle of particles) {
        particle.progress += particle.speed;

        if (particle.progress >= 1) {
          particle.progress = 0;
          particle.fromNode = particle.toNode;
          particle.toNode = Math.floor(Math.random() * nodeCount);
        }

        const from = nodes[particle.fromNode];
        const to = nodes[particle.toNode];
        const x = from.x + (to.x - from.x) * particle.progress;
        const y = from.y + (to.y - from.y) * particle.progress;
        const particleAlpha = Math.sin(particle.progress * Math.PI);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 6);
        gradient.addColorStop(0, `rgba(217, 70, 239, ${0.8 * particleAlpha})`);
        gradient.addColorStop(0.5, `rgba(0, 212, 255, ${0.4 * particleAlpha})`);
        gradient.addColorStop(1, "rgba(0, 212, 255, 0)");

        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * particleAlpha})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ opacity: 0.65 }}
    />
  );
}
