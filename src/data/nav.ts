import type { LocalizedString } from "@/lib/i18n";

export const navLinks: { id: string; label: LocalizedString }[] = [
  { id: "home", label: { zh: "首页", en: "Home" } },
  { id: "about", label: { zh: "关于", en: "About" } },
  { id: "skills", label: { zh: "技能", en: "Skills" } },
  { id: "projects", label: { zh: "项目", en: "Projects" } },
  { id: "experience", label: { zh: "经历", en: "Experience" } },
  { id: "contact", label: { zh: "联系", en: "Contact" } },
];

/** Reusable section headings. */
export const sections = {
  about: {
    kicker: { zh: "关于我", en: "About" },
    title: { zh: "我是谁", en: "Who I am" },
  },
  skills: {
    kicker: { zh: "技术栈", en: "Tech Stack" },
    title: { zh: "我能做什么", en: "What I work with" },
  },
  projects: {
    kicker: { zh: "作品集", en: "Selected Work" },
    title: { zh: "精选项目", en: "Featured Projects" },
  },
  experience: {
    kicker: { zh: "履历", en: "Journey" },
    title: { zh: "我的经历", en: "Experience" },
  },
  contact: {
    kicker: { zh: "保持联系", en: "Get in touch" },
    title: { zh: "一起做点酷的", en: "Let's build something" },
  },
} satisfies Record<string, { kicker: LocalizedString; title: LocalizedString }>;
