import { ProjectsSection } from "@/components/sections/projects";

export const metadata = {
  title: "Projects | EKBN Analytics",
  description:
    "Explore featured sports analytics portals, operational BI dashboards, and data engineering projects.",
};

export const dynamic = "force-dynamic";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background pt-12 md:pt-16">
      <ProjectsSection />
    </main>
  );
}