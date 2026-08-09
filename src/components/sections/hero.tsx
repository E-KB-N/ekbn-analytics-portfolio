import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Database,
  Download,
  GitBranch,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    title: "Data Analysis & Operations",
    description:
      "Transforming raw operational data into actionable business intelligence, predictive pipelines, and automated reporting.",
    icon: BarChart3,
  },
  {
    title: "Analytics Engineering",
    description:
      "Building tested SQL/PostgreSQL databases, Python ETL pipelines, and clean data architectures for dependable decision-making.",
    icon: GitBranch,
  },
  {
    title: "AI Model Evaluation",
    description:
      "Auditing, normalizing, and governing large-scale datasets (10k+ records) to optimize RLHF and SXS evaluation models.",
    icon: Bot,
  },
] as const;

export function HeroSection() {
  return (
    <Section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden py-20 sm:py-24 lg:flex lg:items-center lg:py-28">
      {/* Background Grid Accent */}
      <div
        aria-hidden="true"
        className="data-grid-background absolute inset-0 -z-20 opacity-70"
      />

      {/* Blur Glow Highlights */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-chart-2/10 blur-3xl"
      />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-[0_0_30px_-14px_var(--primary)] sm:text-sm">
            <Database aria-hidden="true" className="size-4" />
            Business Analyst & Data Specialist
          </div>

          {/* Main Headline */}
          <h1 className="mt-8 text-balance text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
            Turning complex data into{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-chart-2 bg-clip-text text-transparent">
              clear, actionable decisions.
            </span>
          </h1>

          {/* Brief Bio */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I engineer data pipelines, build interactive operational dashboards,
            and evaluate complex AI evaluation datasets. Ex-Guinness Ghana (Diageo) and remote AI Business Analyst at Turing.
          </p>

          {/* Action Buttons: GitHub Projects + Download CV */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button render={<Link href="/projects" />} size="lg">
              Explore GitHub Projects
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>

            {/* Directly links to the PDF resume in your /public folder */}
            <Button
              render={
                <a
                  download="Edward_Kojo_Boateng_Ntow_Resume.pdf"
                  href="/EKBNLTSTRES2026.pdf"
                />
              }
              size="lg"
              variant="outline"
            >
              <Download aria-hidden="true" className="size-4" />
              Download CV (PDF)
            </Button>
          </div>
        </div>

        {/* Capability Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-4 md:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <div
                key={capability.title}
                className="group relative rounded-2xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card/90"
              >
                <div className="flex size-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}