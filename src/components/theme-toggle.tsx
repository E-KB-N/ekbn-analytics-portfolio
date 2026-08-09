"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        aria-label="Loading theme control"
        className="shrink-0"
        disabled
        size="icon"
        type="button"
        variant="ghost"
      >
        <span className="size-5" aria-hidden="true" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <Button
      aria-label={`Switch to ${nextTheme} mode`}
      className="group shrink-0"
      onClick={() => setTheme(nextTheme)}
      size="icon"
      title={`Switch to ${nextTheme} mode`}
      type="button"
      variant="ghost"
    >
      {isDark ? (
        <Sun
          aria-hidden="true"
          className="size-5 transition-transform duration-300 group-hover:rotate-12"
        />
      ) : (
        <Moon
          aria-hidden="true"
          className="size-5 transition-transform duration-300 group-hover:-rotate-12"
        />
      )}
      <span className="sr-only">Switch to {nextTheme} mode</span>
    </Button>
  );
}