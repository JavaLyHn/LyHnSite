import type { LocalizedString } from "@/lib/i18n";

export type ProjectCategory = "ai" | "fullstack" | "frontend" | "tool";

export interface Project {
  id: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  category: ProjectCategory;
  /** Tech stack chips. */
  stack: string[];
  /** 2–4 quantified highlights, shown on hover / detail. */
  highlights: LocalizedString[];
  year: string;
  featured?: boolean;
  links?: {
    demo?: string;
    github?: string;
  };
  /** Tailwind gradient classes used for the card's accent. */
  gradient: string;
}

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  项目列表 —— 这是你后续最常编辑的文件。                          ║
 * ║  复制任意一项，改 id / 内容 / stack / links 即可新增项目。       ║
 * ║  featured: true 的项目会以大卡片展示。                           ║
 * ║                                                                ║
 * ║  Your project list — the file you'll edit most. Duplicate any  ║
 * ║  entry to add a project. `featured: true` renders a big card.  ║
 * ╚══════════════════════════════════════════════════════════════╝
 */
export const projects: Project[] = [
  {
    id: "ai-knowledge-copilot",
    title: { zh: "企业知识库 Copilot", en: "Enterprise Knowledge Copilot" },
    tagline: {
      zh: "面向企业文档的 RAG 问答系统",
      en: "RAG-powered Q&A over enterprise docs",
    },
    description: {
      zh: "支持百万级文档的检索增强问答平台，混合检索 + 重排序保证答案可溯源，内置流式回答与引用高亮。",
      en: "A retrieval-augmented Q&A platform over millions of documents. Hybrid search + reranking keeps answers grounded, with streaming responses and citation highlighting.",
    },
    category: "ai",
    stack: ["Next.js", "FastAPI", "LangChain", "pgvector", "OpenAI", "Redis"],
    highlights: [
      { zh: "检索准确率提升 42%", en: "+42% retrieval accuracy" },
      { zh: "首字延迟 < 800ms", en: "< 800ms time-to-first-token" },
      { zh: "支持 100w+ 文档", en: "Scales to 1M+ documents" },
    ],
    year: "2025",
    featured: true,
    links: { demo: "#", github: "#" },
    gradient: "from-cyan-500/20 via-blue-500/10 to-violet-500/20",
  },
  {
    id: "autonomous-agent-platform",
    title: { zh: "多智能体编排平台", en: "Multi-Agent Orchestration Platform" },
    tagline: {
      zh: "可视化编排自主 Agent 工作流",
      en: "Visual orchestration for autonomous agents",
    },
    description: {
      zh: "拖拽式构建 Agent 协作流程，支持工具调用、记忆、人工介入节点，实时可视化执行轨迹与 token 成本。",
      en: "Drag-and-drop builder for agent workflows with tool calling, memory and human-in-the-loop steps. Visualizes execution traces and token cost in real time.",
    },
    category: "ai",
    stack: ["React", "TypeScript", "Node.js", "WebSocket", "Claude", "Postgres"],
    highlights: [
      { zh: "任务自动化率 70%", en: "70% task automation" },
      { zh: "实时执行追踪", en: "Live execution tracing" },
      { zh: "成本下降 35%", en: "-35% token cost" },
    ],
    year: "2025",
    featured: true,
    links: { demo: "#", github: "#" },
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-pink-500/20",
  },
  {
    id: "realtime-voice-assistant",
    title: { zh: "实时语音助手", en: "Real-time Voice Assistant" },
    tagline: {
      zh: "低延迟语音对话 + 工具调用",
      en: "Low-latency voice chat with tools",
    },
    description: {
      zh: "端到端语音交互系统，流式 ASR/TTS + 大模型，平均往返延迟低于 1 秒。",
      en: "End-to-end voice interaction with streaming ASR/TTS and an LLM core, sub-second average round-trip latency.",
    },
    category: "ai",
    stack: ["Python", "WebRTC", "Whisper", "FastAPI", "React"],
    highlights: [
      { zh: "往返延迟 < 1s", en: "< 1s round-trip" },
      { zh: "支持打断", en: "Barge-in support" },
    ],
    year: "2024",
    links: { demo: "#", github: "#" },
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  },
  {
    id: "saas-analytics-dashboard",
    title: { zh: "SaaS 数据分析看板", en: "SaaS Analytics Dashboard" },
    tagline: {
      zh: "实时指标与 AI 洞察",
      en: "Real-time metrics with AI insights",
    },
    description: {
      zh: "为 SaaS 产品打造的实时分析平台，自然语言查询数据，自动生成图表与异常洞察。",
      en: "A real-time analytics platform for SaaS products. Query data in natural language and get auto-generated charts and anomaly insights.",
    },
    category: "fullstack",
    stack: ["Next.js", "tRPC", "PostgreSQL", "Recharts", "OpenAI"],
    highlights: [
      { zh: "自然语言查询", en: "Natural-language queries" },
      { zh: "秒级实时刷新", en: "Sub-second refresh" },
    ],
    year: "2024",
    links: { demo: "#", github: "#" },
    gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
  },
  {
    id: "code-review-bot",
    title: { zh: "AI 代码审查机器人", en: "AI Code Review Bot" },
    tagline: {
      zh: "自动化 PR 审查与建议",
      en: "Automated PR review & suggestions",
    },
    description: {
      zh: "接入 GitHub 的代码审查助手，自动发现 bug、安全隐患并给出可应用的修复建议。",
      en: "A GitHub-integrated reviewer that surfaces bugs and security issues with applyable fix suggestions.",
    },
    category: "tool",
    stack: ["TypeScript", "Node.js", "GitHub API", "Claude"],
    highlights: [
      { zh: "覆盖 5+ 语言", en: "5+ languages" },
      { zh: "误报率 < 8%", en: "< 8% false positives" },
    ],
    year: "2024",
    links: { github: "#" },
    gradient: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
  },
  {
    id: "generative-ui-playground",
    title: { zh: "生成式 UI 实验场", en: "Generative UI Playground" },
    tagline: {
      zh: "用自然语言生成可交互界面",
      en: "Generate interactive UIs from prompts",
    },
    description: {
      zh: "输入一句话即可生成可运行的 React 组件，支持实时预览、编辑与导出。",
      en: "Describe a UI in plain language and get runnable React components with live preview, editing and export.",
    },
    category: "frontend",
    stack: ["React", "Three.js", "Tailwind", "OpenAI"],
    highlights: [
      { zh: "实时预览", en: "Live preview" },
      { zh: "一键导出代码", en: "One-click code export" },
    ],
    year: "2023",
    links: { demo: "#", github: "#" },
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-indigo-500/20",
  },
];

export const projectFilters: { key: ProjectCategory | "all"; label: LocalizedString }[] = [
  { key: "all", label: { zh: "全部", en: "All" } },
  { key: "ai", label: { zh: "AI / 大模型", en: "AI / LLM" } },
  { key: "fullstack", label: { zh: "全栈", en: "Full-stack" } },
  { key: "frontend", label: { zh: "前端", en: "Frontend" } },
  { key: "tool", label: { zh: "工具", en: "Tools" } },
];
