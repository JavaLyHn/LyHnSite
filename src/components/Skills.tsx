"use client";

import { BrainCircuit, Cpu, MonitorSmartphone, Server, type LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { skillCategories } from "@/data/skills";
import { sections } from "@/data/nav";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  MonitorSmartphone,
  Server,
  Cpu,
};

export default function Skills() {
  const { t } = useI18n();
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading kicker={sections.skills.kicker} title={sections.skills.title} />

      <div className="grid gap-5 sm:grid-cols-2">
        {skillCategories.map((cat, i) => {
          const Icon = iconMap[cat.icon] ?? BrainCircuit;
          return (
            <Reveal key={i} delay={i}>
              <div className="glass glow-border group h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="mb-5 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 text-accent-cyan transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{t(cat.title)}</h3>
                    <p className="text-sm text-muted">{t(cat.blurb)}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent-violet/40 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
