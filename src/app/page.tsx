import { About } from "@/components/About";
import { Awards } from "@/components/Awards";
import { Career } from "@/components/Career";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Skills } from "@/components/Skills";
import { aiProjects, sideProjects, workProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Career />
        <Skills />
        <Awards />
        <ProjectsSection
          id="work"
          label="05 / Work Projects"
          title="Soundmind에서의 작업물"
          projects={workProjects}
          defaultExpanded
        />
        <ProjectsSection
          id="ai"
          label="06 / AI Projects"
          title="WIGTN 팀으로 만든 AI 프로젝트"
          projects={aiProjects}
        />
        <ProjectsSection
          id="side"
          label="07 / Side Projects"
          title="개인·팀 단위 사이드 프로젝트"
          projects={sideProjects}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
