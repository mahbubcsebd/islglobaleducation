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
    <div className="inline-flex items-center gap-1 p-1 bg-surface-alt border border-border rounded-lg shadow-2xs">
      <div className="flex items-center pl-1.5 pr-1 text-primary">
        <Globe className="size-3.5" />
      </div>
      <button
        type="button"
        onClick={() => handleLanguageChange("en")}
        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
          currentLang === "en"
            ? "bg-primary text-primary-foreground font-semibold shadow-2xs"
            : "text-foreground-secondary hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => handleLanguageChange("bn")}
        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
          currentLang === "bn"
            ? "bg-primary text-primary-foreground font-semibold shadow-2xs"
            : "text-foreground-secondary hover:text-foreground"
        }`}
      >
        বাং
      </button>
    </div>
  );
}
