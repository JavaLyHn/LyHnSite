"use client";

import { useEffect, useState } from "react";

/**
 * A soft radial glow that follows the cursor across the whole page.
 * Pure CSS gradient driven by mouse position — cheap and atmospheric.
 */
export default function Spotlight() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{
        opacity: visible ? 1 : 0,
        background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(139,92,246,0.10), transparent 70%)`,
      }}
    />
  );
}
