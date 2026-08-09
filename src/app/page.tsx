import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Hero Landing Area */}
      <HeroSection />

      {/* 2. About Section (id="about") */}
      <AboutSection />

      {/* 3. Experience Section (id="experience") */}
      <ExperienceSection />

      {/* 4. Contact Section (id="contact") */}
      <ContactSection />
    </main>
  );
}