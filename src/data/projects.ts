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
  /** 2–4 quantified highlights, shown on the card. */
  highlights: LocalizedString[];
  year: string;
  /** GitHub stars (real, from the repo). */
  stars?: number;
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
 * ║  真实项目列表 —— 数据来源：github.com/JavaLyHn 各仓库 README。   ║
 * ║  复制任意一项改 id / 内容 / stack / links 即可新增。            ║
 * ║  featured: true 的项目以大卡片（整行）展示。                     ║
 * ╚══════════════════════════════════════════════════════════════╝
 */
export const projects: Project[] = [
  {
    id: "raguide",
    title: { zh: "RAGuide · 对话式 AI 导购", en: "RAGuide — Conversational AI Shopping Agent" },
    tagline: {
      zh: "双层 RAG 的 3C 电子产品导购 Agent",
      en: "Two-layer RAG shopping guide for consumer electronics",
    },
    description: {
      zh: "对话式 3C 电子产品 AI 导购系统：外层多 Agent 编排自主决策「要不要检索、检索什么」，内层 6 阶段可组合检索管道（改写 → 三路并发召回 → RRF 融合 → 重排压缩 → 自评 → 联网兜底），评测驱动优化 + 全链路可观测，Web / iOS / API 三端全栈。",
      en: "A conversational AI shopping guide built on two-layer RAG — an outer multi-agent orchestrator that decides whether/what to retrieve, over an inner 6-stage composable pipeline (rewrite → parallel recall → RRF fusion → rerank+compress → self-eval → web fallback), with eval-driven optimization, full observability, and Web / iOS / API clients.",
    },
    category: "ai",
    stack: ["FastAPI", "LangGraph", "Next.js 15", "SwiftUI", "Qdrant", "PostgreSQL", "Claude", "Langfuse"],
    highlights: [
      { zh: "双层 RAG · 6 阶段检索", en: "Two-layer RAG · 6-stage" },
      { zh: "评测加权分 0.712 → 0.838", en: "Eval score 0.712 → 0.838" },
      { zh: "安全维度 1.000 / 922 测试", en: "Safety 1.000 · 922 tests" },
      { zh: "Web · iOS · API 三端", en: "Web · iOS · API clients" },
    ],
    year: "2026",
    stars: 2,
    featured: true,
    links: { github: "https://github.com/JavaLyHn/raguide" },
    gradient: "from-cyan-500/20 via-blue-500/10 to-violet-500/20",
  },
  {
    id: "deepdimension",
    title: { zh: "DeepDimension · 企业知识库", en: "DeepDimension — Enterprise RAG" },
    tagline: {
      zh: "企业级 RAG 知识库管理系统",
      en: "Enterprise RAG knowledge-base system",
    },
    description: {
      zh: "面向企业的检索增强知识库，打通「文档上传 → 智能解析 → 向量化 → 混合检索 → AI 对话」全闭环。三阶段并行混合检索（KNN + BM25 + Cross-Encoder 重排）配合动态 Top-K 大幅降低 Token 成本，前后端分离，含 99 个单元测试。",
      en: "An enterprise retrieval-augmented knowledge base spanning upload → parsing → vectorization → hybrid retrieval → streaming chat. Three-stage hybrid retrieval (KNN + BM25 + cross-encoder rerank) with dynamic Top-K sharply cuts token cost; full-stack with 99 unit tests.",
    },
    category: "ai",
    stack: ["Spring Boot 3", "Elasticsearch", "Vue 3", "Kafka", "Redis", "MinIO", "DeepSeek"],
    highlights: [
      { zh: "三阶段混合检索 + 重排", en: "3-stage hybrid retrieval" },
      { zh: "动态 Top-K 省 Token 30–80%", en: "30–80% fewer tokens" },
      { zh: "口语化查询检测 86.7%", en: "86.7% query detection" },
    ],
    year: "2025",
    stars: 9,
    featured: true,
    links: { github: "https://github.com/JavaLyHn/DeepDimension" },
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-pink-500/20",
  },
  {
    id: "intelligentflow",
    title: { zh: "IntelligentFlow · 工作流编排平台", en: "IntelligentFlow — Agent Orchestration" },
    tagline: {
      zh: "企业级可视化 AI Agent 工作流平台",
      en: "Enterprise visual AI-agent workflow platform",
    },
    description: {
      zh: "企业级 AI Agent 工作流编排平台：拖拽画布编排 20+ 类节点，自研 DAG 引擎（拓扑排序 + 环检测）保证 50+ 节点并行分支的执行顺序；支持 Supervisor / Pipeline / Swarm 三种多 Agent 拓扑与 LangGraph4j 有状态编排。Java + Python 微服务架构。",
      en: "An enterprise AI-agent workflow platform: a drag-and-drop canvas with 20+ node types, a custom DAG engine (topological sort + cycle detection) that guarantees ordering for 50+ node parallel workflows, three multi-agent topologies (Supervisor / Pipeline / Swarm), and LangGraph4j stateful orchestration on a Java + Python microservices stack.",
    },
    category: "fullstack",
    stack: ["Java 21", "Spring AI", "LangGraph4j", "React", "ReactFlow", "MySQL", "Redis", "Docker"],
    highlights: [
      { zh: "拖拽编排 20+ 节点类型", en: "20+ node visual editor" },
      { zh: "多 Agent 三种协作拓扑", en: "3 multi-agent topologies" },
      { zh: "SSE 首字延迟 < 200ms", en: "<200ms first token" },
    ],
    year: "2026",
    stars: 8,
    featured: true,
    links: { github: "https://github.com/JavaLyHn/IntelligentFlow" },
    gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
  },
  {
    id: "wraith",
    title: { zh: "Wraith · 幽灵编程 Agent", en: "Wraith — AI Coding Agent" },
    tagline: {
      zh: "潜伏终端与桌面的 AI 编程 Agent",
      en: "A ghost-themed AI coding agent for terminal & desktop",
    },
    description: {
      zh: "一套 Java 内核（ReAct / Plan-and-Execute / 多 Agent / RAG / MCP / Skill / HITL）在 CLI、macOS 桌面 App、常驻 IM 网关三种形态间复用。历经 24+ 期迭代，支持完整 MCP（stdio + HTTP）、危险工具人工审批、异步后台任务与运行时 HTTP API，已发布可下载 DMG。",
      en: "A single Java engine (ReAct / Plan-and-Execute / multi-agent / RAG / MCP / Skill / HITL) reused across a CLI, a macOS desktop app, and a resident IM gateway. Evolved over 24+ phases with full MCP (stdio + HTTP), human-in-the-loop approval for dangerous tools, async background tasks, and a runtime HTTP API — shipped as a downloadable DMG.",
    },
    category: "ai",
    stack: ["Java", "Electron", "MCP", "SQLite", "DeepSeek", "OkHttp"],
    highlights: [
      { zh: "24+ 期持续迭代", en: "24+ dev iterations" },
      { zh: "CLI · 桌面 · IM 三形态", en: "CLI · Desktop · IM" },
      { zh: "MCP + RAG + HITL 审批", en: "MCP + RAG + HITL" },
    ],
    year: "2026",
    stars: 8,
    featured: true,
    links: { github: "https://github.com/JavaLyHn/wraith" },
    gradient: "from-slate-500/20 via-violet-500/10 to-indigo-500/20",
  },
  {
    id: "musical-groove",
    title: { zh: "声音星球 · 音乐可视化", en: "Musical Groove — Music Visualizer" },
    tagline: {
      zh: "随系统音乐全屏律动的 macOS 可视化",
      en: "Fullscreen macOS music visualizer",
    },
    description: {
      zh: "一款让 macOS 随系统音乐全屏律动的可视化桌面 App：弯曲穹顶上的方块柱场随声音起伏、中心发光反应堆核心，配当前歌曲卡与同步歌词。通过 ScreenCaptureKit 直接捕获系统声音回环，自定义 GLSL 着色器实时渲染。",
      en: "A fullscreen macOS music visualizer: a curved dome of audio-reactive block pillars with a glowing reactor core, a live now-playing card, and synced lyrics. Captures system audio via ScreenCaptureKit (no virtual device) and renders in real time with custom GLSL shaders.",
    },
    category: "frontend",
    stack: ["Three.js", "GLSL", "Electron", "Web Audio", "ScreenCaptureKit", "Vite"],
    highlights: [
      { zh: "自定义 GLSL 着色器渲染", en: "Custom GLSL shaders" },
      { zh: "ScreenCaptureKit 系统取声", en: "System-audio capture" },
      { zh: "已发布 · 最受欢迎 (21★)", en: "Shipped · most-starred (21★)" },
    ],
    year: "2026",
    stars: 21,
    links: { github: "https://github.com/JavaLyHn/musical-groove" },
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-cyan-500/20",
  },
  {
    id: "qa-platform",
    title: { zh: "AI 员工评测决策平台", en: "AI-Agent Evaluation Platform" },
    tagline: {
      zh: "面向 AI Agent 的评测与上线决策",
      en: "Evaluation & release-decision for AI agents",
    },
    description: {
      zh: "把「挑题 → 答题 → 评分 → 看板 → 出报告」固化成平台：被测 / 判官分离、多 LLM 裁判打分 + 一致率校准，接入 SkillOpt 做 Skill 优化闭环并给出发版结论；本地优先、断网可用、恢复自动同步。",
      en: "Turns pick → answer → score → dashboard → report into a platform: separated subject/judge with multi-LLM scoring and agreement-rate calibration, a SkillOpt optimization loop producing release verdicts, and local-first UX that works offline and auto-syncs on reconnect.",
    },
    category: "fullstack",
    stack: ["React", "FastAPI", "PostgreSQL", "SQLModel", "Zustand", "Radix UI", "Tailwind"],
    highlights: [
      { zh: "多裁判 LLM 打分 + 校准", en: "Multi-judge scoring" },
      { zh: "本地优先 · 自动同步", en: "Local-first sync" },
      { zh: "SkillOpt 优化闭环", en: "SkillOpt loop" },
    ],
    year: "2025",
    stars: 1,
    links: { github: "https://github.com/JavaLyHn/qa-platform" },
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  },
  {
    id: "cairn-tabs",
    title: { zh: "Cairn Tabs · 标签上下文管理器", en: "Cairn Tabs — Tab Context Manager" },
    tagline: {
      zh: "面向开发者的浏览器标签管理扩展",
      en: "A tab context manager for developers",
    },
    description: {
      zh: "Chrome / Edge 侧边栏扩展：按任务自动分组标签页、整任务归档 / 恢复、全局秒搜、可选 AI 整理。双向同步原生标签组，含 localhost 端口→项目名映射、GitHub/Bitbucket PR/Issue 徽章。本地优先、无需账号。",
      en: "A Chrome/Edge side-panel extension that auto-groups tabs by task, archives/restores whole tasks, offers instant global search and optional AI organization. Two-way native tab-group sync, localhost port→project mapping, and GitHub/Bitbucket PR/Issue badges — local-first, no account.",
    },
    category: "frontend",
    stack: ["WXT", "React 19", "TypeScript", "Dexie", "Zustand", "fuse.js", "Vitest"],
    highlights: [
      { zh: "按任务自动分组", en: "Auto task grouping" },
      { zh: "本地优先 · 无账号", en: "Local-first · no account" },
      { zh: "PR / Issue 元数据徽章", en: "PR / Issue badges" },
    ],
    year: "2025",
    stars: 4,
    links: { github: "https://github.com/JavaLyHn/cairn-tabs" },
    gradient: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
  },
  {
    id: "experiment-proto",
    title: { zh: "零知识匿名认证原型", en: "Zero-Knowledge Anonymous Auth" },
    tagline: {
      zh: "工业设备匿名调度认证 · Halo2 ZK",
      en: "Halo2 ZK auth for industrial IoT",
    },
    description: {
      zh: "面向工业互联网调度的统一匿名认证原型：用 Halo2 零知识证明把匿名凭证、状态新鲜性、Merkle 成员见证与门限可追责绑定为单条 ZK 陈述（16 条约束），含形式化安全证明与配套论文。",
      en: "A unified anonymous-authentication prototype for industrial IoT scheduling that binds anonymous credentials, state freshness, Merkle membership witnesses, and threshold accountability into a single ZK statement (16 constraints) using Halo2 — with formal security proofs and a companion paper.",
    },
    category: "tool",
    stack: ["Rust", "Halo2", "Pallas", "Poseidon", "Python", "TeX"],
    highlights: [
      { zh: "单条 ZK 陈述绑定四要素", en: "One ZK statement, 4 bindings" },
      { zh: "验证 6.7–10.7ms / 证明 6KB", en: "Verify 6.7–10.7ms · 6KB proof" },
      { zh: "形式化安全证明 + 论文", en: "Formal proofs + paper" },
    ],
    year: "2026",
    stars: 1,
    links: { github: "https://github.com/JavaLyHn/experiment_proto" },
    gradient: "from-indigo-500/20 via-blue-500/10 to-cyan-500/20",
  },
  {
    id: "streamlinedb",
    title: { zh: "StreamlineDB · 手写关系数据库", en: "StreamlineDB — RDBMS from Scratch" },
    tagline: {
      zh: "从零用 Java 实现的关系型数据库",
      en: "A relational database built from scratch in Java",
    },
    description: {
      zh: "用 Java 17 从零实现的轻量级关系型数据库，模拟 MySQL 核心：C/S 架构 + Socket 多客户端、自研 SQL 解析器、MVCC 多版本并发（RC/RR）、2PL + 死锁检测、完整 B+ 树索引、WAL 崩溃恢复与页式存储 + LRU 缓存。",
      en: "A lightweight relational database written from scratch in Java 17 that mimics MySQL's core: a C/S Socket architecture, a hand-written SQL parser, MVCC (RC/RR isolation), 2PL with deadlock detection, a full B+ tree index, WAL crash recovery, and paged storage with an LRU cache.",
    },
    category: "tool",
    stack: ["Java 17", "Socket", "NIO", "B+Tree", "MVCC", "WAL"],
    highlights: [
      { zh: "MVCC + 2PL 事务", en: "MVCC + 2PL transactions" },
      { zh: "完整 B+ 树索引", en: "Full B+ tree index" },
      { zh: "WAL 预写日志崩溃恢复", en: "WAL crash recovery" },
    ],
    year: "2026",
    stars: 3,
    links: { github: "https://github.com/JavaLyHn/StreamlineDB" },
    gradient: "from-teal-500/20 via-emerald-500/10 to-green-500/20",
  },
  {
    id: "product-audit",
    title: { zh: "自动化深度产品测评 Skill", en: "Product Audit Skill" },
    tagline: {
      zh: "把 2 小时产品调研压到 5–60 分钟",
      en: "2 hours of product research in 5–60 min",
    },
    description: {
      zh: "一个 Claude Code Skill：parse intent → Playwright 浏览 → 截图 → LLM 解读 → 多页面 BFS 探索 → 合成，聚焦产品功能层的可理解性与完整性，产出 5000–15000 字的结构化 Markdown + HTML 报告，含实体身份验证等安全红线。",
      en: "A Claude Code Skill that runs parse-intent → Playwright browse → screenshot → LLM read → multi-page BFS → synthesis, focusing on functional understandability and completeness, and emitting 5,000–15,000-word structured Markdown + HTML reports with safety rules like entity-identity verification.",
    },
    category: "tool",
    stack: ["Python", "Playwright", "Claude", "WebSearch"],
    highlights: [
      { zh: "2 小时 → 5–60 分钟", en: "2h → 5–60 min" },
      { zh: "Playwright 全自动调研", en: "Automated browsing" },
      { zh: "结构化 MD + HTML 报告", en: "MD + HTML reports" },
    ],
    year: "2026",
    stars: 2,
    links: { github: "https://github.com/JavaLyHn/product-audit" },
    gradient: "from-rose-500/20 via-pink-500/10 to-fuchsia-500/20",
  },
  {
    id: "paper-analyzer",
    title: { zh: "论文精读 Skill", en: "Paper Analyzer Skill" },
    tagline: {
      zh: "PDF / arXiv → 翻译 + 笔记 + PPT",
      en: "PDF / arXiv → translation + notes + slides",
    },
    description: {
      zh: "一站式学术论文精读 Skill：把 PDF / arXiv / DOI 变成逐段完整中文翻译 + 中英双语结构化笔记 + 抽取的图表/代码 + 可选 .pptx。领域感知术语保留，图表抽取用列感知边界检测按原序编号，支持 Claude Code / Codex / Cursor 等多工具。",
      en: "A one-stop paper-reading Skill turning a PDF / arXiv / DOI into a full paragraph-by-paragraph Chinese translation, bilingual structured notes, extracted figures/code, and an optional .pptx. Domain-aware term preservation, column-aware figure extraction numbered in original order, across Claude Code / Codex / Cursor and more.",
    },
    category: "tool",
    stack: ["Python", "PyMuPDF", "pdfplumber", "python-pptx", "matplotlib"],
    highlights: [
      { zh: "逐段完整中文翻译", en: "Full ZH translation" },
      { zh: "图表 / 表格 / 代码抽取", en: "Figure / table extraction" },
      { zh: "一键生成演示 PPT", en: "Auto-generated slides" },
    ],
    year: "2025",
    stars: 3,
    links: { github: "https://github.com/JavaLyHn/paper-analyzer" },
    gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
  },
  {
    id: "opsagent",
    title: { zh: "Alice · 市场增长搭档 Agent", en: "Alice — Growth Partner Agent" },
    tagline: {
      zh: "百万字知识库的营销增长 Agent",
      en: "A marketing-growth agent over a 1M-char KB",
    },
    description: {
      zh: "「Alice」是部署在 OpenClaw + 飞书 Bot 上的市场增长搭档 Agent：19 个 Skill（核心 + 方法论 + 平台战法）配约 100 万字手写结构化知识库，多轮战略对话中真实调用工具，让创始人拿到接近资深 marketer 的可执行方案。含 5 级来源引用与 17 项回归测试。",
      en: "\"Alice\" is a marketing-growth partner agent on OpenClaw + a Feishu bot: 19 skills (core + methodologies + platform playbooks) over a ~1M-character hand-written KB, holding multi-turn strategy conversations with real tool calls so founders get near-senior-marketer plans. Includes 5-tier source citations and 17 regression tests.",
    },
    category: "ai",
    stack: ["Claude", "MCP", "Python", "Feishu Bot", "LLM-as-judge"],
    highlights: [
      { zh: "19 Skill · 百万字知识库", en: "19 skills · 1M-char KB" },
      { zh: "5 级来源引用可信度", en: "5-tier source citations" },
      { zh: "17 项 gold 回归测试", en: "17 gold-standard tests" },
    ],
    year: "2026",
    stars: 2,
    links: { github: "https://github.com/JavaLyHn/OpsAgent" },
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
  },
  {
    id: "sage-research",
    title: { zh: "Sage Research · 研究展示站", en: "Sage Research — Showcase Site" },
    tagline: {
      zh: "Next.js 16 研究报告展示型前端",
      en: "Next.js 16 research showcase frontend",
    },
    description: {
      zh: "基于 Next.js 16 App Router + React 19 + Tailwind v4 的研究 / 展示型 Web 前端，Markdown 驱动内容，含 Hero、方法论、概览、产品网格与报告正文等组件，配动画数字与滚动揭示效果，已部署上线。",
      en: "A research/showcase web frontend on Next.js 16 App Router + React 19 + Tailwind v4, Markdown-driven, with Hero, Methodology, Overview, product-grid and report-content components plus animated numbers and scroll-reveal — deployed live.",
    },
    category: "frontend",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "react-markdown"],
    highlights: [
      { zh: "Next.js 16 · React 19", en: "Next.js 16 · React 19" },
      { zh: "Markdown 内容管线", en: "Markdown pipeline" },
      { zh: "已部署上线", en: "Deployed live" },
    ],
    year: "2026",
    stars: 2,
    links: { demo: "https://sage-research.vercel.app/", github: "https://github.com/JavaLyHn/sage-research" },
    gradient: "from-purple-500/20 via-violet-500/10 to-blue-500/20",
  },
];

export const projectFilters: { key: ProjectCategory | "all"; label: LocalizedString }[] = [
  { key: "all", label: { zh: "全部", en: "All" } },
  { key: "ai", label: { zh: "AI / Agent", en: "AI / Agent" } },
  { key: "fullstack", label: { zh: "全栈平台", en: "Full-stack" } },
  { key: "frontend", label: { zh: "前端 / 可视化", en: "Frontend" } },
  { key: "tool", label: { zh: "系统 / 工具", en: "Systems & Tools" } },
];
