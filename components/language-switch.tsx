// components/LanguageSwitch.tsx
"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 text-sm font-bold"
      onClick={toggleLanguage}
    >
      {language.toUpperCase()}
    </button>
  );
}
