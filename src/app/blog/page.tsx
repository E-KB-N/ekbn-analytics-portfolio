import { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Projects | EKBN Analytics",
  description:
    "Explore featured sports analytics portals, operational BI dashboards, and data engineering projects built by EKBN.",
  openGraph: {
    title: "Projects | EKBN Analytics",
    description:
      "Featured sports analytics portals, operational BI dashboards, and data engineering pipelines.",
    type: "website",
  },
};

// Force dynamic rendering to prevent stale cached versions during development
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background pt-12 md:pt-16">
      {/* Primary Projects Section containing all 6 featured cards */}
      <ProjectsSection />
    </main>
  );
}