import type { LocalizedString } from "@/lib/i18n";

export interface ExperienceItem {
  company: LocalizedString;
  role: LocalizedString;
  period: LocalizedString;
  description: LocalizedString;
  tags: string[];
}

/**
 * 工作 / 项目经历时间线。最新的放最前面。
 * Experience timeline — most recent first.
 */
export const experience: ExperienceItem[] = [
  {
    company: { zh: "ElevateSphere", en: "ElevateSphere" },
    role: { zh: "AI 全栈工程师", en: "AI Full-Stack Engineer" },
    period: { zh: "2024 — 至今", en: "2024 — Present" },
    description: {
      zh: "主导多个大模型应用从 0 到 1 落地，搭建 RAG 与 Agent 基础设施，负责前后端及推理部署全链路。",
      en: "Led several LLM applications from zero to one, built RAG and agent infrastructure, owned the full stack from frontend to inference deployment.",
    },
    tags: ["LLM", "RAG", "Next.js", "FastAPI"],
  },
  {
    company: { zh: "某科技公司", en: "Tech Company" },
    role: { zh: "全栈工程师", en: "Full-Stack Engineer" },
    period: { zh: "2022 — 2024", en: "2022 — 2024" },
    description: {
      zh: "负责 SaaS 产品核心模块，从前端体验到后端服务，将关键页面性能提升 50%。",
      en: "Owned core modules of a SaaS product end to end, improving key-page performance by 50%.",
    },
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    company: { zh: "某初创公司", en: "Startup" },
    role: { zh: "前端工程师", en: "Frontend Engineer" },
    period: { zh: "2020 — 2022", en: "2020 — 2022" },
    description: {
      zh: "构建产品前端体系与组件库，参与从设计到上线的完整迭代。",
      en: "Built the product's frontend system and component library across the full design-to-ship cycle.",
    },
    tags: ["React", "TypeScript", "Design System"],
  },
];
