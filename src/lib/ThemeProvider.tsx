"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeCtx = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "light", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeCtx);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    let stored: Theme | null = null;
    try { stored = localStorage.getItem("theme") as Theme | null; } catch {}
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved: Theme = stored ?? (prefersDark ? "dark" : "light");
    applyTheme(resolved);
    setTheme(resolved);
  }, []);

  function applyTheme(t: Theme) {
    document.documentElement.classList.toggle("dark", t === "dark");
  }

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      try { localStorage.setItem("theme", next); } catch {}
      applyTheme(next);
      return next;
    });
  };

  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>
      {children}
    </ThemeCtx.Provider>
  );
}
