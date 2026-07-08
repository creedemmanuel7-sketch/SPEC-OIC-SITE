"use client";

import * as React from "react";

type Theme = "dark" | "light" | "system";

const ThemeContext = React.createContext<{
  theme: Theme | undefined;
  setTheme: (theme: Theme) => void;
  systemTheme: "dark" | "light" | undefined;
}>({
  theme: undefined,
  setTheme: () => null,
  systemTheme: undefined,
});

export const useTheme = () => React.useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme | undefined>(undefined);
  const [systemTheme, setSystemTheme] = React.useState<"dark" | "light" | undefined>(undefined);

  React.useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme;
    if (saved) {
      setThemeState(saved);
    } else {
      setThemeState("system");
    }
    
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(media.matches ? "dark" : "light");
    
    const listener = (e: MediaQueryListEvent) => setSystemTheme(e.matches ? "dark" : "light");
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  }, []);

  React.useEffect(() => {
    if (!theme || !systemTheme) return;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme, systemTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, systemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
