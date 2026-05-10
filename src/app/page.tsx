import { Awards } from "@/components/Awards";
import { Career } from "@/components/Career";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Skills } from "@/components/Skills";
import { aiProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Career />
        <Skills />
        <Awards />
        <ProjectsSection
          id="ai"
          label="04 / AI Projects"
          title="WIGTN 팀으로 만든 AI 프로젝트"
          projects={aiProjects}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
