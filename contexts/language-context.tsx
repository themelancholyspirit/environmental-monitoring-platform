"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, Translations, Language } from "@/translations/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  getText: (obj: { en: string; ka: string }) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("language")) as Language | null;
    if (saved === "en" || saved === "ka") {
      setLanguageState(saved);
    } else {
      // Optional: auto-detect browser language
      const navLang = navigator.language?.toLowerCase().startsWith("ka") ? "ka" : "en";
      setLanguageState(navLang as Language);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") localStorage.setItem("language", lang);
  };

  const getText = (obj: { en: string; ka: string }) => obj[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations, getText }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);

  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}