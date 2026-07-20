"use client";

import { motion } from "framer-motion";

/**
 * Decorative "terminal" card for the hero's right side — a bit of engineer
 * personality that fills the empty space and reinforces the AI/dev identity.
 */
export default function HeroTerminal() {
  const line = "transition-opacity";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* glow behind */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-violet/25 via-accent-blue/10 to-accent-cyan/20 blur-3xl" />

      <div className="float glass overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-2 font-mono text-xs text-muted">~/lyhn — zsh</span>
        </div>

        {/* body */}
        <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
          <p className={line}>
            <span className="text-emerald-400">$</span>{" "}
            <span className="text-foreground">whoami</span>
          </p>
          <p className="text-muted">陆昊男 — AI Full-Stack Engineer</p>

          <p className={`${line} pt-2`}>
            <span className="text-emerald-400">$</span>{" "}
            <span className="text-foreground">cat stack.json</span>
          </p>
          <div className="text-muted">
            <p>{"{"}</p>
            <p className="pl-4">
              <span className="text-accent-cyan">&quot;ai&quot;</span>:{" "}
              <span className="text-accent-fuchsia">
                [&quot;RAG&quot;, &quot;Multi-Agent&quot;, &quot;MCP&quot;]
              </span>
              ,
            </p>
            <p className="pl-4">
              <span className="text-accent-cyan">&quot;web&quot;</span>:{" "}
              <span className="text-accent-fuchsia">
                [&quot;Next.js&quot;, &quot;React&quot;, &quot;TS&quot;]
              </span>
              ,
            </p>
            <p className="pl-4">
              <span className="text-accent-cyan">&quot;backend&quot;</span>:{" "}
              <span className="text-accent-fuchsia">
                [&quot;FastAPI&quot;, &quot;Java&quot;, &quot;Spring&quot;]
              </span>
              ,
            </p>
            <p className="pl-4">
              <span className="text-accent-cyan">&quot;systems&quot;</span>:{" "}
              <span className="text-accent-fuchsia">
                [&quot;DB kernel&quot;, &quot;ZK / Halo2&quot;]
              </span>
            </p>
            <p>{"}"}</p>
          </div>

          <p className={`${line} pt-2`}>
            <span className="text-emerald-400">$</span>{" "}
            <span className="text-foreground">./ship --status</span>
          </p>
          <p className="text-muted">
            <span className="text-accent-cyan">▸</span> 15+ projects · 70+ stars{" "}
            <span className="text-emerald-400">✓</span>
            <span className="cursor-blink ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent-cyan" />
          </p>
        </div>
      </div>
    </motion.div>
  );
}
