import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haonan Lu · AI Full-Stack Engineer",
  description:
    "卢浩楠 — AI 全栈开发工程师。专注大模型应用、RAG、Agent 与全栈工程。AI Full-Stack Engineer building LLM products end to end.",
  keywords: [
    "AI Engineer",
    "Full-Stack Developer",
    "LLM",
    "RAG",
    "Next.js",
    "卢浩楠",
  ],
  openGraph: {
    title: "Haonan Lu · AI Full-Stack Engineer",
    description: "AI 全栈开发工程师作品集 · LLM / RAG / Agent / Full-Stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
