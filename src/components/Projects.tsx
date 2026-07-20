"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { useI18n } from "@/lib/i18n";
import {
  projectFilters,
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { sections } from "@/data/nav";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

function ProjectCard({ project, big }: { project: Project; big: boolean }) {
  const { t } = useI18n();
  return (
    <TiltCard className="group relative h-full overflow-hidden rounded-3xl border border-white/10">

      {/* gradient wash */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden
      />
      <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" aria-hidden />

      <div className="relative flex h-full flex-col p-7" style={{ transform: "translateZ(40px)" }}>
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-muted">
            {project.category}
          </span>
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>

        <h3 className={`font-bold ${big ? "text-2xl" : "text-xl"}`}>
          {t(project.title)}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent-cyan/90">
          {t(project.tagline)}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {t(project.description)}
        </p>

        {/* highlights */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.highlights.map((h, i) => (
            <span
              key={i}
              className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-foreground/80"
            >
              {t(h)}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          {/* stack */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="text-xs text-muted/70">
                #{s}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-accent-cyan"
              >
                {t({ zh: "在线演示", en: "Live demo" })}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
              >
                <GithubIcon className="h-4 w-4" />
                {t({ zh: "源码", en: "Code" })}
              </a>
            )}
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

export default function Projects() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading
        kicker={sections.projects.kicker}
        title={sections.projects.title}
      />

      {/* filters */}
      <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
        <div className="flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                filter === f.key
                  ? "text-bg"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {filter === f.key && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {t(f.label)}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className={p.featured ? "lg:col-span-2" : ""}
            >
              <ProjectCard project={p} big={!!p.featured} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
