import type { LocalizedString } from "@/lib/i18n";

export interface SkillCategory {
  title: LocalizedString;
  icon: string; // lucide-react icon name
  blurb: LocalizedString;
  items: string[];
}

/**
 * 技能矩阵 —— 覆盖真实项目中用到的技术。
 * Skill matrix reflecting the tech actually used across the projects.
 * 新增技能直接往 items 里加字符串即可。
 */
export const skillCategories: SkillCategory[] = [
  {
    title: { zh: "AI / 大模型", en: "AI / LLM" },
    icon: "BrainCircuit",
    blurb: {
      zh: "把模型能力工程化、产品化",
      en: "Productionizing model capabilities",
    },
    items: [
      "Claude / GPT / DeepSeek / Qwen",
      "LangGraph / LangGraph4j / Spring AI",
      "RAG (Agentic · Modular · Hybrid)",
      "Multi-Agent 编排",
      "MCP · Function Calling",
      "Embeddings · Rerank (bge / JinaCLIP)",
      "LLM-as-Judge 评测",
      "Langfuse 可观测",
    ],
  },
  {
    title: { zh: "前端 / 可视化", en: "Frontend / Visual" },
    icon: "MonitorSmartphone",
    blurb: {
      zh: "高性能界面与图形可视化",
      en: "Fast UIs and graphics",
    },
    items: [
      "React 19 / Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Vue 3",
      "Three.js / WebGL / GLSL",
      "Framer Motion",
      "ReactFlow · Zustand",
      "SwiftUI · WXT 扩展",
    ],
  },
  {
    title: { zh: "后端 / 分布式", en: "Backend / Distributed" },
    icon: "Server",
    blurb: {
      zh: "可扩展的服务与微服务架构",
      en: "Scalable services & microservices",
    },
    items: [
      "Java 21 / Spring Boot / Spring Cloud",
      "Python / FastAPI",
      "Node.js · Electron",
      "PostgreSQL / MySQL",
      "Redis · Kafka · MinIO",
      "Elasticsearch · Qdrant",
      "WebSocket / SSE 流式",
    ],
  },
  {
    title: { zh: "系统 / 工程", en: "Systems / Engineering" },
    icon: "Cpu",
    blurb: {
      zh: "底层功底与交付工程",
      en: "Low-level depth & delivery",
    },
    items: [
      "Docker / 微服务 (Nacos · Sentinel · Seata)",
      "Rust",
      "零知识证明 · Halo2",
      "数据库内核 (MVCC · B+Tree · WAL)",
      "Prometheus / Grafana",
      "CI/CD · Vercel",
    ],
  },
];

/** 首屏滚动的技术栈跑马灯。 */
export const marqueeTech = [
  "Next.js", "React", "TypeScript", "Vue", "Java", "Spring Cloud",
  "Python", "FastAPI", "LangGraph", "Claude", "RAG", "Multi-Agent",
  "MCP", "Qdrant", "Elasticsearch", "PostgreSQL", "Redis", "Kafka",
  "Three.js", "Rust", "Halo2", "Electron", "Docker", "SwiftUI",
];
