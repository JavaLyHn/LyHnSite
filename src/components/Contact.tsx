"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/data/profile";
import { sections } from "@/data/nav";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useI18n();
  const channels = [
    { Icon: Mail, label: "Email", value: profile.contacts.email, href: `mailto:${profile.contacts.email}` },
    { Icon: GithubIcon, label: "GitHub", value: "@JavaLyHn", href: profile.contacts.github },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-5 py-28 sm:px-8">
      <SectionHeading
        kicker={sections.contact.kicker}
        title={sections.contact.title}
      />

      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center">
          <div
            className="blob pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-violet/20 blur-[100px]"
            aria-hidden
          />
          <p className="relative mx-auto max-w-md text-muted">
            {t({
              zh: "无论是全职机会、合作还是只想聊聊 AI，我都很乐意收到你的消息。",
              en: "Whether it's a full-time role, a collaboration, or just to talk AI — I'd love to hear from you.",
            })}
          </p>

          <a
            href={`mailto:${profile.contacts.email}`}
            className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet px-7 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            {t({ zh: "给我发邮件", en: "Send me an email" })}
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="relative mx-auto mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
            {channels.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-accent-violet/40"
              >
                <Icon className="h-5 w-5 text-accent-cyan transition-transform group-hover:scale-110" />
                <span className="text-xs uppercase tracking-wider text-muted">{label}</span>
                <span className="text-sm text-foreground/80">{value}</span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
