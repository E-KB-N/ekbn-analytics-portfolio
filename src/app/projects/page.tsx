import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

// Inline Brand Icon Components
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string[];
  imageSrc: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "BetEKBN Ghana CX & Operations Analytics",
    category: "iGaming & Customer Experience",
    description:
      "Operational analysis isolating sign-up friction, KYC verification drop-offs, and onboarding bottlenecks to optimize customer conversion pipelines.",
    highlights: [
      "Identified that 38% of sign-up delays stemmed from unreadable Ghana Card uploads.",
      "Engineered multi-stage funnel models in Power BI to monitor drop-offs.",
    ],
    techStack: ["Power BI", "DAX", "SQL", "Process Analytics"],
    imageSrc: "/images/projects/betekbn-ghana-cx-analytics.png",
    githubUrl: "https://github.com/E-KB-N/betekbn-ghana-cx-analytics",
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
    techStack: ["Power BI", "Excel", "Data Modeling", "Commercial BI"],
    imageSrc: "/images/projects/mekbn-telesales-analytics.png",
    githubUrl: "https://github.com/E-KB-N/mekbn-telesales-analytics",
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
    techStack: ["Power BI", "Data Analysis", "Market Research"],
    imageSrc: "/images/projects/uk-student-accommodation-analysis.png",
    githubUrl: "https://github.com/E-KB-N/uk-student-accommodation-analysis",
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
    techStack: ["Python", "Power BI", "Data Governance"],
    imageSrc: "/images/projects/Invisible-Worker-Index-IWI-.png",
    githubUrl: "https://github.com/E-KB-N/Invisible-Worker-Index-IWI-",
  },
  {
    title: "EKBN Analytics Portfolio",
    category: "Full-Stack Web & BI Showcase",
    description:
      "Modern portfolio site engineered with Next.js App Router, Tailwind CSS, and Base UI to display data analytics case studies, repository links, and resume access.",
    highlights: [
      "Built with high-performance Next.js, TypeScript, and accessible UI components.",
      "Custom responsive layouts with clean dark-mode visuals and direct CV download integration.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Base UI"],
    imageSrc: "/images/projects/ekbn-analytics-portfolio.png",
    githubUrl: "https://github.com/E-KB-N/ekbn-analytics-portfolio",
  },
];

export default function ProjectsPage() {
  return (
    <Section className="py-16 sm:py-24">
      <Container>
        {/* Header & External Profile Links */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Featured Analytics Projects
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg">
              Explore dashboards, data quality indexes, and full-stack analytics applications.
            </p>
          </div>

          {/* Social / Profile Links */}
          <div className="flex items-center gap-3">
            <Button
              render={
                <a
                  href="https://github.com/E-KB-N"
                  rel="noreferrer"
                  target="_blank"
                />
              }
              variant="outline"
            >
              <GithubIcon className="size-4" />
              GitHub
            </Button>
            <Button
              render={
                <a
                  href="https://www.linkedin.com/in/edward-kojo-boateng-n-346111136/"
                  rel="noreferrer"
                  target="_blank"
                />
              }
              variant="outline"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md"
            >
              <div>
                {/* Image Preview Container */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-border/60 bg-muted">
                  <Image
                    alt={project.title}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src={project.imageSrc}
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <span className="rounded-full border border-border/80 bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {project.category}
                  </span>

                  <h2 className="mt-3 text-xl font-bold tracking-tight text-foreground group-hover:text-primary">
                    {project.title}
                  </h2>

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
              </div>

              {/* Card Footer Tech Stack & Repository Links */}
              <div className="p-6 pt-0 sm:p-8 sm:pt-0">
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

                {project.githubUrl && (
                  <a
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    href={project.githubUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>View on GitHub</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}