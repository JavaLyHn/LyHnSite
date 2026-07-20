"use client";

import { MapPin, Sparkles, Target, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/data/profile";
import { sections } from "@/data/nav";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { GithubIcon } from "./BrandIcons";

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
        {/* Profile card */}
        <Reveal className="flex justify-center lg:justify-start">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-violet/25 via-accent-blue/10 to-accent-cyan/20 blur-2xl" />
            <div className="glass rounded-[2rem] border border-white/10 p-8">
              {/* avatar with clean spinning gradient ring */}
              <div className="relative mx-auto h-28 w-28">
                <div className="conic-ring absolute inset-0 rounded-full" />
                <div className="absolute inset-[3px] grid place-items-center rounded-full bg-surface">
                  <span className="gradient-text text-4xl font-bold">
                    {profile.initials}
                  </span>
                </div>
              </div>

              <div className="mt-5 text-center">
                <h3 className="text-2xl font-bold">{t(profile.name)}</h3>
                <p className="mt-1 text-sm font-medium text-accent-cyan">
                  {t(profile.role)}
                </p>
              </div>

              <div className="my-6 h-px bg-white/10" />

              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-muted">
                    <MapPin className="h-4 w-4" />
                    {t({ zh: "位置", en: "Location" })}
                  </span>
                  <span className="text-foreground/90">{t(profile.location)}</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-muted">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>
                    {t({ zh: "状态", en: "Status" })}
                  </span>
                  <span className="text-emerald-400">{t(profile.availability)}</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-muted">
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </span>
                  <a
                    href={profile.contacts.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/90 transition-colors hover:text-accent-cyan"
                  >
                    @JavaLyHn
                  </a>
                </li>
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {profile.stats.slice(0, 2).map((s, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center"
                  >
                    <div className="gradient-text text-xl font-bold">
                      {s.value}
                      {s.suffix}
                    </div>
                    <div className="text-xs text-muted">{t(s.label)}</div>
                  </div>
                ))}
              </div>
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
