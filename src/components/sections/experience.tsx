import { Briefcase, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Turing",
    role: "Business Analyst (AI Data Evaluation)",
    period: "Jan 2026 — Present",
    location: "Palo Alto, CA (Remote)",
    description:
      "Governing data quality and auditing large-scale AI datasets to optimize modern LLM, RLHF, and SXS evaluation models.",
    achievements: [
      "Evaluated, validated, and normalized over 1,000+ AI prompts, responses, and evaluation datasets.",
      "Conducted detailed data quality audits to correct structural anomalies and optimize model accuracy for end users.",
      "Authored clear technical documentation and workflows to align remote engineering workstreams.",
    ],
    skills: ["AI Evaluation", "RLHF Metrics", "Data Quality Auditing", "Validation Workflows"],
  },
  {
    company: "Guinness Ghana Breweries PLC (Diageo)",
    role: "Divisional Performance Analyst / Data Analyst",
    period: "Nov 2023 — Oct 2025",
    location: "Accra, Ghana",
    description:
      "Led operational intelligence, commercial reporting frameworks, and telematics programs across regional distribution divisions.",
    achievements: [
      "Engineered a multi-source data triangulation model resolving Returnable Glass shortages, driving a 95%+ recovery rate.",
      "Owned the B2B Diageo One application reporting framework, tracking user acquisition, active usage, and order frequency.",
      "Country Program Manager for the Brightmile telematics program, achieving a 0% accident/incident rate across 120+ fleet members.",
      "Managed Sales Executives and Vehicle Sales Executives Performance Tracking reports.",
    ],
    skills: ["Excel Power Query", "SAP", "Power BI", "Commercial Operations", "Telematics Analytics"],
  },
];

export function ExperienceSection() {
  return (
    <Section className="py-16 sm:py-24" id="experience">
      <Container>
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Briefcase className="size-3.5" />
            Career Journey
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Professional Experience
          </h2>
        </div>

        <div className="mt-12 space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company + exp.role}
              className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-sm font-semibold text-primary">{exp.company}</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs font-medium text-muted-foreground">{exp.period}</span>
                  <p className="text-xs text-muted-foreground">{exp.location}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

              <ul className="mt-4 space-y-2">
                {exp.achievements.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground sm:text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border/80 bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}