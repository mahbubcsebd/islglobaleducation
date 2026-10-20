"use client";

import * as React from "react";

const ThemeContext = React.createContext({
  theme: "dark",
  resolvedTheme: "dark",
  setTheme: () => null,
});

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "isl-theme-v2",
}) {
  const [theme, setThemeState] = React.useState(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = React.useState(defaultTheme);

  // Apply theme class to documentElement
  const applyTheme = React.useCallback((targetTheme) => {
    const root = document.documentElement;
    let effective = targetTheme;

    if (targetTheme === "system") {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      effective = systemDark ? "dark" : "light";
    }

    if (effective === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    setResolvedTheme(effective);
  }, []);

  React.useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(storageKey);
      const initial = savedTheme || defaultTheme;
      setThemeState(initial);
      applyTheme(initial);
    } catch {
      applyTheme(defaultTheme);
    }

    // Listener for system theme change if theme is 'system'
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const current = localStorage.getItem(storageKey);
      if (current === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [defaultTheme, storageKey, applyTheme]);

  const setTheme = React.useCallback(
    (newTheme) => {
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {
        // Storage unavailable
      }
      setThemeState(newTheme);
      applyTheme(newTheme);
    },
    [storageKey, applyTheme]
  );

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
