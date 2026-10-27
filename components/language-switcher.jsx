"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ currentLang = "en" }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLang) => {
    if (newLang === currentLang) return;

    // Set cookie for proxy detection
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; SameSite=Lax`;

    // Calculate new path by replacing current locale segment
    let newPath = `/${newLang}`;
    if (pathname) {
      const segments = pathname.split("/").filter(Boolean);
      if (segments.length > 0 && (segments[0] === "en" || segments[0] === "bn")) {
        segments[0] = newLang;
        newPath = `/${segments.join("/")}`;
      } else {
        newPath = `/${newLang}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
      }
    }

    router.push(newPath);
    router.refresh();
  };

  return (
    <div className="inline-flex items-center gap-0.5 p-1 bg-white/5 border border-white/15 rounded-xl backdrop-blur-md">
      <div className="flex items-center pl-1 pr-0.5 text-gold-400">
        <Globe className="w-3.5 h-3.5" />
      </div>
      <button
        type="button"
        onClick={() => handleLanguageChange("en")}
        className={`px-2 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
          currentLang === "en"
            ? "bg-gold-500 text-navy-950 shadow-sm"
            : "text-slate-300 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => handleLanguageChange("bn")}
        className={`px-2 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
          currentLang === "bn"
            ? "bg-gold-500 text-navy-950 shadow-sm"
            : "text-slate-300 hover:text-white"
        }`}
      >
        বাং
      </button>
    </div>
  );
}
