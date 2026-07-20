import type { LocalizedString } from "@/lib/i18n";

/**
 * ┌─────────────────────────────────────────────────────────────┐
 * │  个人信息 — 在这里修改你的名字、标题、联系方式等基础信息。      │
 * │  EDIT ME: your name, headline, contacts live here.            │
 * └─────────────────────────────────────────────────────────────┘
 */
export const profile = {
  name: { zh: "陆昊男", en: "Haonan Lu" } satisfies LocalizedString,

  // 出现在浏览器标签 / SEO
  initials: "HL",

  role: {
    zh: "AI 全栈开发工程师",
    en: "AI Full-Stack Engineer",
  } satisfies LocalizedString,

  // 首屏轮播的几个动态头衔
  taglines: [
    { zh: "AI 全栈开发工程师", en: "AI Full-Stack Engineer" },
    { zh: "RAG · Agent 工程", en: "RAG & Agent Engineering" },
    { zh: "从大模型到系统底层", en: "From LLMs down to Systems" },
    { zh: "Web · 桌面 · 移动 · CLI", en: "Web · Desktop · Mobile · CLI" },
  ] satisfies LocalizedString[],

  summary: {
    zh: "AI 全栈工程师，独立交付从大模型应用到系统底层的完整产品 —— RAG 检索、多 Agent 编排、可视化工作流平台，也写数据库内核与零知识证明。热衷把复杂的 AI 能力做成好用、能上线的东西。",
    en: "AI full-stack engineer shipping complete products end to end — from RAG systems and multi-agent orchestration to database internals and zero-knowledge proofs. I love turning complex AI capability into things people can actually ship and use.",
  } satisfies LocalizedString,

  location: { zh: "中国 · 远程可", en: "China · Remote-friendly" } satisfies LocalizedString,

  // 顶部一句状态
  availability: {
    zh: "正在寻找新机会",
    en: "Open to new opportunities",
  } satisfies LocalizedString,

  // 关键数据，会在首屏做数字滚动动画（均为真实值）
  stats: [
    { value: 15, suffix: "+", label: { zh: "开源项目", en: "Open-source projects" } },
    { value: 70, suffix: "+", label: { zh: "GitHub Stars", en: "GitHub stars" } },
    { value: 10, suffix: "+", label: { zh: "AI 模型 / 框架", en: "AI models & frameworks" } },
    { value: 4, suffix: "", label: { zh: "端全栈交付", en: "Platforms shipped" } },
  ],

  // 联系方式 —— 改成你自己的
  contacts: {
    email: "javalyhn@163.com",
    github: "https://github.com/JavaLyHn",
  },
};
