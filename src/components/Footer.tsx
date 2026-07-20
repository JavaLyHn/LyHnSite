"use client";

import { useI18n } from "@/lib/i18n";
import { profile } from "@/data/profile";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted sm:flex-row sm:px-8">
        <p>
          © 2026 {t(profile.name)} · {t(profile.role)}
        </p>
        <p className="text-xs">
          {t({
            zh: "用 Next.js · TypeScript · Framer Motion 构建",
            en: "Built with Next.js · TypeScript · Framer Motion",
          })}
        </p>
      </div>
    </footer>
  );
}
