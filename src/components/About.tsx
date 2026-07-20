"use client";

import { Sparkles, Target, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/data/profile";
import { sections } from "@/data/nav";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const pillars = [
  {
    Icon: Sparkles,
    title: { zh: "AI 产品思维", en: "AI product sense" },
    body: {
      zh: "理解模型能力边界，知道哪里该用大模型、哪里该用工程手段。",
      en: "I know where an LLM belongs — and where plain engineering wins.",
    },
  },
  {
    Icon: Zap,
    title: { zh: "全栈闭环", en: "Full-stack ownership" },
    body: {
      zh: "前端、后端、数据、部署一人闭环，快速从想法到上线。",
      en: "Frontend, backend, data and deploy — idea to production, solo.",
    },
  },
  {
    Icon: Target,
    title: { zh: "结果导向", en: "Outcome-driven" },
    body: {
      zh: "关注延迟、成本、准确率等真实指标，而不仅是 demo。",
      en: "I optimize latency, cost and accuracy — not just demos.",
    },
  },
];

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading kicker={sections.about.kicker} title={sections.about.title} />

      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Avatar / portrait card */}
        <Reveal className="flex justify-center">
          <div className="relative">
            <div className="conic-ring absolute -inset-1 rounded-[2rem] opacity-60 blur-md" />
            <div className="glass relative grid h-72 w-72 place-items-center rounded-[2rem] sm:h-80 sm:w-80">
              <div className="float grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-accent-cyan/30 to-accent-violet/30 text-6xl font-bold">
                <span className="gradient-text">{profile.initials}</span>
              </div>
              <span className="absolute bottom-5 text-xs uppercase tracking-[0.3em] text-muted">
                {t(profile.location)}
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground/90">
              {t(profile.summary)}
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-1">
            {pillars.map((p, i) => (
              <Reveal key={i} delay={i + 1}>
                <div className="glass glow-border flex gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 text-accent-cyan">
                    <p.Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t(p.title)}</h3>
                    <p className="mt-1 text-sm text-muted">{t(p.body)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
