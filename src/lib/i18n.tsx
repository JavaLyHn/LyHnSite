"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "zh" | "en";

/** A bilingual string. Use t() to resolve against the active language. */
export type LocalizedString = Record<Lang, string>;

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Resolve a bilingual string to the active language. */
  t: (s: LocalizedString) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "preferred-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh");

  // Hydrate from localStorage / browser language after mount.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "zh" || stored === "en") {
      setLangState(stored);
    } else if (navigator.language && !navigator.language.startsWith("zh")) {
      setLangState("en");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
  };

  const toggle = () => setLang(lang === "zh" ? "en" : "zh");

  const t = (s: LocalizedString) => s[lang];

  return (
    <I18nContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within <I18nProvider>");
  return ctx;
}
