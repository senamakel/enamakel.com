"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Pinned top right. Both icons are rendered and swapped with CSS, so nothing
 * here depends on client state and the markup matches the server.
 */
export function ThemeButton() {
  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title="Toggle theme"
      className="bg-foreground text-background fixed top-4 right-4 z-50 flex size-7 items-center justify-center rounded-full shadow-sm transition-opacity hover:opacity-80"
    >
      <Moon className="size-[13px] dark:hidden" />
      <Sun className="hidden size-[13px] dark:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
