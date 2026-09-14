import { createContext, useContext, useEffect, useMemo } from "react";
import { translations } from "./translations.js";
import { applyShareMeta } from "../shareMeta.js";

const LANG = "hy";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const t = translations;

  useEffect(() => {
    document.documentElement.lang = LANG;
  }, []);

  useEffect(() => {
    applyShareMeta();
  }, []);

  const value = useMemo(() => ({ lang: LANG, t }), [t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return ctx;
}
