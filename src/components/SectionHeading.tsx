"use client";

import { useI18n, type LocalizedString } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
}: {
  kicker: LocalizedString;
  title: LocalizedString;
}) {
  const { t } = useI18n();
  return (
    <div className="mb-14 flex flex-col items-center text-center">
      <Reveal>
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
          {t(kicker)}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {t(title)}
        </h2>
      </Reveal>
    </div>
  );
}
