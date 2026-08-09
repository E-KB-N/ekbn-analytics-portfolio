import Link from "next/link";
import { BarChart3, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";

const footerLinks = [
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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-muted/20">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-start">
          <div className="max-w-md">
            <Link
              aria-label="EKBN Analytics home"
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href="/"
            >
              <span className="flex size-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <BarChart3 aria-hidden="true" className="size-5" />
              </span>

              <span className="font-semibold tracking-tight">
                EKBN Analytics
              </span>
            </Link>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              A portfolio of analytics engineering, business intelligence, and
              data-visualization projects designed to turn complex information
              into clear business decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h2 className="text-sm font-semibold text-foreground">
                Explore
              </h2>

              <ul className="mt-4 space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2">
              <h2 className="text-sm font-semibold text-foreground">
                Connect
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {/* GitHub */}
                <Link
                  aria-label="View GitHub profile"
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href="https://github.com/E-KB-N"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </Link>

                {/* LinkedIn */}
                <Link
                  aria-label="View LinkedIn profile"
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href="https://www.linkedin.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </Link>

                {/* Email */}
                <Link
                  aria-label="Open contact section"
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href="/#contact"
                >
                  <Mail aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} EKBN Analytics. All rights reserved.</p>

          <p className="font-mono uppercase tracking-[0.14em]">
            Built with Next.js and TypeScript
          </p>
        </div>
      </Container>
    </footer>
  );
}