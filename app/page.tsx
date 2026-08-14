import Footer from "@/components/footer/footer";
import { PortfolioShell } from "@/components/layout/portfolio-shell";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";

export default function Home() {
  return (
    <PortfolioShell>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </PortfolioShell>
  );
}
