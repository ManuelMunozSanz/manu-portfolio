// context/language-context.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "es";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
    setLanguage(newLang);
    window.localStorage.setItem("language", newLang);
  };

  useEffect(() => {
    const storedLang = window.localStorage.getItem(
      "language"
    ) as Language | null;
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }
  return context;
}
