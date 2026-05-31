/* ============================================================
   LATTE — language state + provider (EN ⇄ Egyptian Arabic)
   Persists the choice to localStorage and mirrors it onto
   <html lang dir> so CSS RTL overrides apply globally.
   ============================================================ */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { DICTIONARY, type Content, type Lang } from "./dictionary";

const STORAGE_KEY = "latte-lang";

interface LangContextValue {
  lang: Lang;
  t: Content;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  t: DICTIONARY.en,
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "ar") return saved;
    } catch {
      /* localStorage unavailable */
    }
    return "ar"; // Arabic is the default; a visitor's toggle is remembered.
  });

  const t = DICTIONARY[lang];

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", t.dir);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang, t.dir]);

  return (
    <LangContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  return useContext(LangContext);
}
