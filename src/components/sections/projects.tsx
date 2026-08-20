"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, BarChart3 } from "lucide-react";
import { Container } from "@/components/layout/container";

interface FeaturedProject {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  imageSrc: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    title: "African World Cup Performance Index (2014–Present)",
    category: "Sports Data & Historical Intelligence",
    description:
      "A statistical evaluation tracking the trajectory, operational telemetry, and tactical efficiency of African national teams across FIFA World Cup tournaments since 2014.",
    highlights: [
      "Aggregated and modeled multi-tournament match telemetry to identify underlying performance trends and tactical shifts.",
      "Evaluated key performance indicators across shot efficiency, defensive resilience, and transition dynamics against global opposition.",
    ],
    techStack: ["Python", "SQL", "Sports Analytics", "Data Visualization"],
    githubUrl: "https://github.com/E-KB-N/african-football-operations-portal",
    imageSrc: "/images/projects/Half-space insights.png",
  },
  {
    title: "Half-Space Predictive Intelligence Engine",
    category: "Predictive Analytics & Modeling",
    description:
      "An analytical data engine leveraging Expected Goals (xG) frameworks and match sequence data to forecast match outcomes, Over/Under (1.5, 2.5) total goals, and Both Teams to Score (BTTS) probabilities across Europe's top 5 leagues and the UEFA Champions League.",
    highlights: [
      "Engineered machine learning models to generate high-probability win and goal-market predictions.",
      "Integrated positional tracking and team sequence metrics to evaluate goal-scoring likelihoods.",
    ],
    techStack: ["Python", "xG Modeling", "Machine Learning", "Predictive Analytics"],
    githubUrl: "https://github.com/E-KB-N/half-space-analytics",
    imageSrc: "/images/projects/Half-space analytics.png",
  },
  {
    title: "BetEKBN Ghana CX & Operations Analytics",
    category: "iGaming & Customer Experience",
    description:
      "Operational analytics isolating sign-up friction, KYC verification drop-offs, and onboarding bottlenecks to optimize customer conversion pipelines.",
    highlights: [
      "Identified that 38% of sign-up delays stemmed from unreadable ID uploads.",
      "Engineered multi-stage funnel models in Power BI to monitor drop-offs.",
    ],
    techStack: ["Power BI", "DAX", "SQL", "Process Analytics"],
    githubUrl: "https://github.com/E-KB-N",
    imageSrc: "/images/projects/betekbn-ghana-cx-analytics.png",
  },
  {
    title: "MEKBN Telesales Commercial Performance",
    category: "Sales & Operational Intelligence",
    description:
      "Commercial operations dashboard tracking telesales output, rep efficiency, conversion velocity, and call outcome distribution.",
    highlights: [
      "Visualized revenue drivers and agent performance metrics across operational shifts.",
      "Streamlined commercial reporting for executive review.",
    ],
    techStack: ["Power BI", "Excel", "SQL", "Data Modeling", "Commercial BI"],
    githubUrl: "https://github.com/E-KB-N",
    imageSrc: "/images/projects/mekbn-telesales-analytics.png",
  },
  {
    title: "UK Student Accommodation Investment Analysis",
    category: "Market Research & Real Estate BI",
    description:
      "Exploratory analytics model examining market density, pricing trends, and regional yield potential across UK student housing sectors.",
    highlights: [
      "Mapped key supply/demand indicators across regional hubs.",
      "Provided data-driven property performance dynamic insights.",
    ],
    techStack: ["Excel", "SQL", "Data Analysis", "Market Research"],
    githubUrl: "https://github.com/E-KB-N",
    imageSrc: "/images/projects/uk-student-accommodation-analysis.png",
  },
  {
    title: "Invisible Worker Index (IWI)",
    category: "AI Governance & Data Quality",
    description:
      "Analytical framework designed to evaluate data annotation quality, model oversight metrics, and workforce productivity dynamics.",
    highlights: [
      "Structured evaluation metrics for tracking human-in-the-loop data quality.",
      "Engineered clear visual benchmarks for auditability and compliance.",
    ],
    techStack: ["Python", "SQL", "Power BI", "Data Governance"],
    githubUrl: "https://github.com/E-KB-N",
    imageSrc: "/images/projects/Invisible-Worker-Index-IWI-.png",
  },
];

function CardImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted/60 text-muted-foreground">
        <BarChart3 className="size-10 opacity-40" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      onError={() => setError(true)}
      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
    />
  );
}

export function ProjectsSection() {
  return (
    <section className="py-20 lg:py-28" id="projects">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Analytics Projects
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Explore dashboards, predictive engines, and full-stack analytics applications.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm hover:bg-muted"
              href="https://github.com/E-KB-N"
              rel="noreferrer"
              target="_blank"
            >
              <span>GitHub</span>
            </Link>
            <Link
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm hover:bg-muted"
              href="https://linkedin.com"
              rel="noreferrer"
              target="_blank"
            >
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                <CardImage src={project.imageSrc} alt={project.title} />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <span className="inline-block rounded-full border border-border/80 bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground group-hover:text-primary">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4">
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/80 bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    href={project.githubUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>View on GitHub</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}