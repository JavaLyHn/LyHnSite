"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/data/profile";
import NeuralBackground from "./NeuralBackground";
import Counter from "./Counter";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Hero() {
  const { t } = useI18n();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % profile.taglines.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Layers */}
      <NeuralBackground />
      <div className="grid-overlay pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="blob pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-accent-violet/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="blob pointer-events-none absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-accent-cyan/20 blur-[120px]"
        style={{ animationDelay: "-6s" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-muted backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t(profile.availability)}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="text-foreground">{t(profile.name)}</span>
        </motion.h1>

        <div className="mt-3 flex h-[1.4em] items-center overflow-hidden text-3xl font-bold sm:text-4xl md:text-5xl">
          <AnimatePresence mode="wait">
            <motion.span
              key={idx}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="gradient-text inline-block"
            >
              {t(profile.taglines[idx])}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {t(profile.summary)}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            {t({ zh: "查看项目", en: "View projects" })}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={profile.contacts.resumeUrl}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
          >
            <Download className="h-4 w-4" />
            {t({ zh: "下载简历", en: "Résumé" })}
          </a>

          <div className="ml-1 flex items-center gap-1">
            {[
              { href: `mailto:${profile.contacts.email}`, Icon: Mail },
              { href: profile.contacts.github, Icon: GithubIcon },
              { href: profile.contacts.linkedin, Icon: LinkedinIcon },
            ].map(({ href, Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-muted transition-all hover:border-accent-violet/50 hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4"
        >
          {profile.stats.map((s, i) => (
            <div key={i} className="bg-bg/60 px-5 py-5 backdrop-blur">
              <dd className="gradient-text text-3xl font-bold">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-1 text-xs text-muted">{t(s.label)}</dt>
            </div>
          ))}
        </motion.dl>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted/60 transition-colors hover:text-foreground"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
