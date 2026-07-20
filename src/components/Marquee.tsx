"use client";

import { marqueeTech } from "@/data/skills";

/** Infinite horizontal scroll of tech keywords. Pauses on hover. */
export default function Marquee() {
  const row = [...marqueeTech, ...marqueeTech];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-5">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent"
        aria-hidden
      />
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {row.map((tech, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-lg font-medium text-muted/70"
          >
            {tech}
            <span className="text-accent-violet/50">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
