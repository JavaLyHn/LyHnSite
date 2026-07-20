import type { LocalizedString } from "@/lib/i18n";

export interface SkillCategory {
  title: LocalizedString;
  icon: string; // lucide-react icon name
  blurb: LocalizedString;
  items: string[];
}

/**
 * 技能矩阵 —— 按领域分组。新增技能直接往 items 里加字符串即可。
 * Skill matrix grouped by domain. Add a string to `items` to add a skill.
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
      "OpenAI / Claude / Gemini",
      "LangChain / LlamaIndex",
      "RAG / Vector DB",
      "Agent / Function Calling",
      "Fine-tuning / LoRA",
      "Prompt Engineering",
      "vLLM / Ollama",
      "Hugging Face",
    ],
  },
  {
    title: { zh: "前端", en: "Frontend" },
    icon: "MonitorSmartphone",
    blurb: {
      zh: "高性能、可访问、可维护的界面",
      en: "Fast, accessible, maintainable UIs",
    },
    items: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js / WebGL",
      "Zustand / Redux",
      "Vite",
    ],
  },
  {
    title: { zh: "后端", en: "Backend" },
    icon: "Server",
    blurb: {
      zh: "可扩展的服务与 API",
      en: "Scalable services & APIs",
    },
    items: [
      "Node.js / NestJS",
      "Python / FastAPI",
      "PostgreSQL / Redis",
      "GraphQL / tRPC",
      "WebSocket / SSE",
      "Message Queues",
    ],
  },
  {
    title: { zh: "工程化 / 部署", en: "DevOps" },
    icon: "Cloud",
    blurb: {
      zh: "从本地到云端的交付链路",
      en: "From localhost to the cloud",
    },
    items: [
      "Docker / K8s",
      "Vercel / AWS",
      "CI/CD",
      "Serverless",
      "Monitoring",
      "Cloudflare",
    ],
  },
];

/** 首屏滚动的技术栈跑马灯。 */
export const marqueeTech = [
  "Next.js", "React", "TypeScript", "Python", "FastAPI", "Node.js",
  "LangChain", "OpenAI", "Claude", "RAG", "PostgreSQL", "Redis",
  "Docker", "Kubernetes", "Vercel", "AWS", "Tailwind", "Three.js",
];
