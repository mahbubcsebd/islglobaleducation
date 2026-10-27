"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className={`p-2 rounded-xl border border-white/15 bg-white/5 text-slate-300 ${className || ""}`}
        aria-label="Toggle theme"
      >
        <Sun className="w-4 h-4 text-gold-400" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`p-2 rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer ${className || ""}`}
      title={isDark ? "Switch to Light mode" : "Switch to Dark mode"}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-gold-400 transition-transform duration-200" />
      ) : (
        <Moon className="w-4 h-4 text-gold-400 transition-transform duration-200" />
      )}
    </button>
  );
}
