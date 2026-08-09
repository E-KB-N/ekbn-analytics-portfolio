"use client";

import Link from "next/link";
import { BarChart3, Download, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-2 text-sm font-bold tracking-tight">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <BarChart3 className="size-4" />
            </div>
            <span>EKBN Analytics</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <Link href="/projects" className="transition-colors hover:text-foreground">
              Projects
            </Link>
            <Link href="/#about" className="transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="/#experience" className="transition-colors hover:text-foreground">
              Experience
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>

          {/* Actions: Theme Toggle & Resume Download */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <Button
              aria-label="Toggle theme"
              size="icon"
              variant="ghost"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Resume Button */}
            <Button
              render={
                <a
                  download="Edward_Kojo_Boateng_Ntow_Resume.pdf"
                  href="/EKBNLTSTRES2026.pdf"
                />
              }
              size="sm"
              variant="outline"
            >
              <Download className="size-3.5" />
              <span className="hidden sm:inline">Resume</span>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}