"use client";

import { useI18n } from "@/lib/i18n";
import { experience } from "@/data/experience";
import { sections } from "@/data/nav";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  const { t } = useI18n();
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-5 py-28 sm:px-8">
      <SectionHeading
        kicker={sections.experience.kicker}
        title={sections.experience.title}
      />

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-cyan/60 via-accent-violet/40 to-transparent sm:left-[9px]" />

        <ol className="space-y-10">
          {experience.map((item, i) => (
            <Reveal as="li" key={i} delay={i} className="relative pl-10 sm:pl-12">
              {/* node */}
              <span className="absolute left-0 top-1.5 grid h-[18px] w-[18px] place-items-center rounded-full border border-accent-violet/50 bg-bg">
                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet" />
              </span>

              <div className="glass glow-border rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{t(item.role)}</h3>
                  <span className="font-mono text-xs text-accent-cyan/80">
                    {t(item.period)}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-foreground/80">
                  {t(item.company)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t(item.description)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
