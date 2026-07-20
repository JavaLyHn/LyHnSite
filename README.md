# 个人作品集 · AI 全栈工程师

一个用于求职的炫技型个人网站。深色 + 神经网络粒子背景 + 玻璃拟态 + 中英双语切换，所有内容数据化，方便持续维护。

技术栈：**Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion**

---

## 本地开发

```bash
npm run dev      # 启动开发服务器 http://localhost:3000
npm run build    # 生产构建
npm run start    # 本地预览生产版本
```

---

## 📝 如何修改成你自己的内容

所有文字、项目、技能、经历都集中在 `src/data/` 目录，**不需要碰组件代码**。每条文案都是 `{ zh, en }` 双语对象。

| 文件 | 改什么 |
| --- | --- |
| `src/data/profile.ts` | 姓名、头衔、简介、首屏数据、联系方式（邮箱 / GitHub / 简历链接） |
| `src/data/projects.ts` | **项目列表**（你最常改的）。复制任意一项改 `id`/内容/`stack`/`links` 即可新增；`featured: true` 会以大卡片展示 |
| `src/data/skills.ts` | 技能矩阵（按领域分组）+ 首屏跑马灯关键词 |
| `src/data/experience.ts` | 工作 / 项目经历时间线 |
| `src/data/nav.ts` | 导航项与各区块标题 |

### 新增一个项目

打开 `src/data/projects.ts`，复制一项并修改：

```ts
{
  id: "my-new-project",                       // 唯一 id
  title: { zh: "项目名", en: "Project Name" },
  tagline: { zh: "一句话简介", en: "One-liner" },
  description: { zh: "详细描述…", en: "Description…" },
  category: "ai",                             // ai | fullstack | frontend | tool
  stack: ["Next.js", "FastAPI", "OpenAI"],
  highlights: [{ zh: "准确率 +42%", en: "+42% accuracy" }],
  year: "2025",
  featured: true,                             // 大卡片（可省略）
  links: { demo: "https://…", github: "https://…" },
  gradient: "from-cyan-500/20 via-blue-500/10 to-violet-500/20",
},
```

### 放简历

把 PDF 放到 `public/resume.pdf`（首屏「下载简历」按钮已指向它）。
路径可在 `profile.contacts.resumeUrl` 修改。

### 换主题色

配色集中在 `src/app/globals.css` 顶部的 `:root` 变量：`--accent-cyan`、`--accent-violet`、`--accent-fuchsia`、`--bg` 等，改这几个值即可全站换色。

---

## 🎨 已实现的炫技点

- **神经网络粒子背景**（Canvas，随鼠标交互）—— `NeuralBackground.tsx`
- **光标光晕**跟随 —— `Spotlight.tsx`
- **首屏头衔轮播**、数字滚动动画
- **项目卡 3D 倾斜**悬停 —— `TiltCard.tsx`
- **滚动揭示**动画 —— `Reveal.tsx`
- **中英双语**一键切换（记忆到 localStorage）—— `lib/i18n.tsx`
- 导航**滚动高亮** + 移动端菜单
- 全站响应式、支持 `prefers-reduced-motion` 无障碍降级

---

## 🚀 部署到 Vercel

```bash
npx vercel          # 预览部署
npx vercel --prod   # 生产部署
```

或在 [vercel.com](https://vercel.com) 导入此仓库，零配置自动部署。
