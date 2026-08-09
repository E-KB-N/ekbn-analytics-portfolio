"use client";

import Link from "next/link";
import { BarChart3, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
] as const;

export function MobileNavigation() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger
          aria-label="Open navigation menu"
          className="inline-flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Menu aria-hidden="true" className="size-5" />
          <span className="sr-only">Open navigation menu</span>
        </SheetTrigger>

        <SheetContent
          className="w-[min(22rem,calc(100vw-2rem))] border-border/70 bg-background/95 p-0 backdrop-blur-xl"
          side="right"
        >
          <SheetHeader className="border-b border-border/70 px-6 py-5 text-left">
            <SheetTitle className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary shadow-[0_0_24px_-8px_var(--primary)]">
                <BarChart3 aria-hidden="true" className="size-5" />
              </span>

              <span className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight">
                  EKBN Analytics
                </span>
                <span className="text-xs font-normal text-muted-foreground">
                  Data portfolio
                </span>
              </span>
            </SheetTitle>

            <SheetDescription className="sr-only">
              Navigate to the main sections of the EKBN Analytics portfolio.
            </SheetDescription>
          </SheetHeader>

          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-2 px-4 py-6"
          >
            {navigationItems.map((item, index) => (
              <SheetClose
                key={item.href}
                render={
                  <Link
                    className="group flex min-h-12 items-center justify-between rounded-xl border border-transparent px-4 py-3 text-base font-medium text-foreground transition-colors hover:border-border hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    href={item.href}
                  />
                }
              >
                <span>{item.label}</span>

                <span
                  aria-hidden="true"
                  className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </SheetClose>
            ))}
          </nav>

          <div className="mx-4 mt-auto rounded-xl border border-border/70 bg-muted/40 p-4">
            <p className="text-sm font-medium text-foreground">
              Data translated into decisions.
            </p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Analytics engineering, business intelligence, and decision-ready
              visualizations.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}