"use client";

import * as React from "react";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle({ className }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className={`rounded-full border-border/60 bg-background/50 backdrop-blur-sm ${className || ""}`}
        aria-label="Toggle theme"
      >
        <Moon className="size-4 opacity-70" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative rounded-full border-border/60 bg-background/50 hover:bg-muted/80 backdrop-blur-sm transition-transform active:scale-95 ${className || ""}`}
      title={isDark ? "Switch to Light mode" : "Switch to Dark mode"}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="size-4 text-amber-300 transition-all duration-300 rotate-0 scale-100" />
      ) : (
        <Moon className="size-4 text-purple-700 transition-all duration-300 rotate-0 scale-100" />
      )}
    </Button>
  );
}
