"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChart3, Download, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center gap-2 text-sm font-bold tracking-tight">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <BarChart3 className="size-4" />
            </div>
            <span>EKBN Analytics</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions: Theme Toggle, Resume & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
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

            {/* Mobile Hamburger Menu Trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                aria-label="Open mobile menu"
                className="inline-flex size-9 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground md:hidden"
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent className="flex flex-col justify-between" side="right">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center gap-2 text-base font-bold">
                    <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <BarChart3 className="size-3.5" />
                    </div>
                    <span>EKBN Analytics</span>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Navigation Links */}
                <nav className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Drawer Footer Action */}
                <div className="mt-auto pt-6 border-t border-border/60">
                  <Button
                    className="w-full justify-center"
                    render={
                      <a
                        download="Edward_Kojo_Boateng_Ntow_Resume.pdf"
                        href="/EKBNLTSTRES2026.pdf"
                      />
                    }
                    size="default"
                  >
                    <Download className="size-4 mr-2" />
                    Download Resume (PDF)
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}