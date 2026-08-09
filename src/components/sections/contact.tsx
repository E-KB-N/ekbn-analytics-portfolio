import { Mail, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <Section className="py-16 sm:py-24" id="contact">
      <Container>
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's connect & collaborate.
          </h2>
          <p className="text-base text-muted-foreground">
            Whether you want to discuss data pipelines, operational analytics, AI evaluation, or sports data, feel free to reach out.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              render={
                <a href="mailto:kojobateng514@gmail.com" />
              }
              size="lg"
            >
              <Mail className="size-4" />
              kojobateng514@gmail.com
            </Button>

            <Button
              render={
                <a
                  href="https://www.linkedin.com/in/edward-kojo-boateng-n-346111136/"
                  rel="noreferrer"
                  target="_blank"
                />
              }
              size="lg"
              variant="outline"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn Profile
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}