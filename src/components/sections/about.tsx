import Link from "next/link";
import { Award, BarChart2, Bot, BrainCircuit, Globe, Trophy } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function AboutSection() {
  return (
    <Section className="py-16 sm:py-24" id="about">
      <Container>
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <BrainCircuit className="size-4" />
            About Me
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Analyzing numbers by day, breaking down match tactics by night.
          </h2>

          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            I’m a Business Analyst and Data Specialist driven by turning complex, unorganized datasets into clear operational strategy. Beyond enterprise business intelligence, my world revolves around sports, specifically football and basketball.
          </p>

          <blockquote className="my-6 rounded-xl border-l-4 border-primary bg-muted/40 p-4 text-sm italic text-foreground sm:text-base">
            "I may not have made it as the next Kylian Mbappé, but give me a messy dataset and I’ll still find the space, spot the patterns, and create something valuable. ⚽📊"
          </blockquote>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Currently, I’m channeling that analytical energy into exploring <strong>sports analytics</strong> as a personal venture—building models to evaluate match momentum, player performance metrics, and operational statistics.
          </p>
        </div>
      </Container>
    </Section>
  );
}