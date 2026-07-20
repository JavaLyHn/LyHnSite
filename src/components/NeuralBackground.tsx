"use client";

import { useEffect, useRef } from "react";

/**
 * Animated neural-network canvas: drifting nodes connected by fading edges,
 * reacting to the cursor. The signature "炫技" backdrop for the hero.
 */
export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }
    let nodes: Node[] = [];

    const mouse = { x: -9999, y: -9999 };

    function resize() {
      const parent = canvas!.parentElement ?? document.body;
      width = parent.clientWidth;
      height = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density scales with viewport, capped for perf.
      const count = Math.min(Math.floor((width * height) / 16000), 90);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }));
    }

    const palette = ["34, 211, 238", "139, 92, 246", "232, 121, 249"];
    const LINK_DIST = 140;
    const MOUSE_DIST = 200;

    function step() {
      ctx!.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        // Gentle attraction toward the cursor.
        const mdx = mouse.x - n.x;
        const mdy = mouse.y - n.y;
        const md = Math.hypot(mdx, mdy);
        if (md < MOUSE_DIST && md > 0) {
          const force = (1 - md / MOUSE_DIST) * 0.4;
          n.x += (mdx / md) * force;
          n.y += (mdy / md) * force;
        }

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      }

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.5;
            ctx!.strokeStyle = `rgba(120, 130, 200, ${alpha})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const color = palette[i % palette.length];
        const mdx = mouse.x - n.x;
        const mdy = mouse.y - n.y;
        const near = Math.hypot(mdx, mdy) < MOUSE_DIST;
        const glow = near ? 1 : 0.55;

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r + (near ? 0.8 : 0), 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${color}, ${glow})`;
        ctx!.shadowBlur = near ? 12 : 6;
        ctx!.shadowColor = `rgba(${color}, 0.8)`;
        ctx!.fill();
      }
      ctx!.shadowBlur = 0;

      raf = requestAnimationFrame(step);
    }

    let raf = 0;
    function onMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    if (reduced) {
      // Draw a single static frame.
      step();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
