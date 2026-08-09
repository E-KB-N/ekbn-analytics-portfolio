import Link from "next/link";
import { ArrowUpRight, BarChart3, Database, GitBranch, Terminal } from "lucide-react";
import { Container } from "@/components/layout/container";

interface GitHubProject {
  title: string;
  repoName: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

const githubProjects: GitHubProject[] = [
  {
    title: "Uber Marketplace Cancellation Telemetry",
    repoName: "uber-marketplace-cancellation-telemetry",
    category: "Data Engineering & Pipeline",
    description:
      "Programmatic data pipeline and relational database model engineered to simulate, ingest, and analyze driver-rider cancellation patterns and supply/demand bottlenecks.",
    highlights: [
      "Generated PostgreSQL database schemas to model ride-hailing cancellations.",
      "Engineered Python ETL scripts to normalize unstructured ride telemetry data.",
      "Connected relational data models directly to Power BI for interactive dashboarding.",
    ],
    techStack: ["Python", "PostgreSQL", "Power BI", "SQL", "ETL"],
    githubUrl: "https://github.com/E-KB-N/uber-marketplace-cancellation-telemetry",
  },
  {
    title: "EKBN Analytics Portfolio",
    repoName: "ekbn-analytics-portfolio",
    category: "Full-Stack Web & BI Showcase",
    description:
      "Modern, fast portfolio site built with Next.js, Tailwind CSS, and Base UI to highlight data analytics case studies, projects, and professional background.",
    highlights: [
      "Built with Next.js App Router, TypeScript, and Tailwind CSS.",
      "Custom dark-mode responsive layouts and accessible UI components.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Base UI"],
    githubUrl: "https://github.com/E-KB-N/ekbn-analytics-portfolio",
  },
  {
    title: "iGaming Customer Experience Dashboard",
    repoName: "igaming-cx-dashboard",
    category: "Business Intelligence",
    description:
      "Power BI operational dashboard designed to isolate sign-up bottlenecks, track KYC verification drop-offs, and monitor customer journey friction.",
    highlights: [
      "Identified that 38% of sign-up delays stemmed from unreadable ID uploads.",
      "Built interactive funnel visualizations and KPI tracking models.",
    ],
    techStack: ["Power BI", "DAX", "Data Visualization", "Process Analytics"],
    githubUrl: "https://github.com/E-KB-N",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-20 lg:py-28" id="projects">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <GitBranch className="size-3.5" />
              <span>GitHub Repositories</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Open-Source & Analytical Projects
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Data pipelines, relational database models, and web applications built from scratch.
            </p>
          </div>

          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            href="https://github.com/E-KB-N"
            rel="noreferrer"
            target="_blank"
          >
            <span>View GitHub Profile</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {githubProjects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-primary font-medium">
                    {project.repoName}
                  </span>
                  <span className="rounded-full border border-border/80 bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-foreground group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-6 space-y-2">
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

              <div className="mt-8 border-t border-border/60 pt-6">
                <div className="flex flex-wrap gap-1.5 mb-4">
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
                  <span>View Repository</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}