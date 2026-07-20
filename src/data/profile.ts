import type { LocalizedString } from "@/lib/i18n";

/**
 * ┌─────────────────────────────────────────────────────────────┐
 * │  个人信息 — 在这里修改你的名字、标题、联系方式等基础信息。      │
 * │  EDIT ME: your name, headline, contacts live here.            │
 * └─────────────────────────────────────────────────────────────┘
 */
export const profile = {
  name: { zh: "卢浩楠", en: "Haonan Lu" } satisfies LocalizedString,

  // 出现在浏览器标签 / SEO
  initials: "HL",

  role: {
    zh: "AI 全栈开发工程师",
    en: "AI Full-Stack Engineer",
  } satisfies LocalizedString,

  // 首屏轮播的几个动态头衔
  taglines: [
    { zh: "AI 全栈开发工程师", en: "AI Full-Stack Engineer" },
    { zh: "大模型应用构建者", en: "LLM Application Builder" },
    { zh: "从原型到生产", en: "From Prototype to Production" },
    { zh: "Agent / RAG 工程", en: "Agent & RAG Engineering" },
  ] satisfies LocalizedString[],

  summary: {
    zh: "我专注于将大语言模型转化为真正可用的产品 —— 从前端交互、后端服务到模型编排与推理优化，独立闭环交付。热爱用代码把复杂的 AI 能力变得简单好用。",
    en: "I turn large language models into products people actually use — owning the full loop from front-end interaction to backend services, model orchestration and inference optimization. I love making complex AI capabilities feel simple.",
  } satisfies LocalizedString,

  location: { zh: "中国 · 远程可", en: "China · Remote-friendly" } satisfies LocalizedString,

  // 顶部一句状态
  availability: {
    zh: "正在寻找新机会",
    en: "Open to new opportunities",
  } satisfies LocalizedString,

  // 关键数据，会在首屏做数字滚动动画
  stats: [
    { value: 5, suffix: "+", label: { zh: "年开发经验", en: "Years building" } },
    { value: 30, suffix: "+", label: { zh: "交付项目", en: "Projects shipped" } },
    { value: 12, suffix: "+", label: { zh: "AI 模型集成", en: "AI models integrated" } },
    { value: 99, suffix: "%", label: { zh: "线上稳定性", en: "Uptime delivered" } },
  ],

  // 联系方式 —— 改成你自己的
  contacts: {
    email: "haonan.lu@elevatesphere.com",
    github: "https://github.com/JavaLyHn",
    linkedin: "https://linkedin.com/in/your-handle",
    resumeUrl: "/resume.pdf", // 把简历 PDF 放到 public/resume.pdf
  },
};
