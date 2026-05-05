import { About } from "@/components/About";
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
        <ProjectsSection
          id="work"
          label="04 / Work Projects"
          title="Soundmind"
          description="MX팀에서 풀스택으로 참여하고 있는 B2B / Assignment 프로젝트입니다."
          projects={workProjects}
        />
        <ProjectsSection
          id="ai"
          label="05 / AI Projects"
          title="WIGTN"
          description="OpenAI Realtime, Gemini Live, Claude Code 등 최신 AI 모델을 프로덕션 수준에서 다룬 7개 프로젝트입니다."
          projects={aiProjects}
        />
        <ProjectsSection
          id="side"
          label="06 / Side Projects"
          title="개인·팀 단위로 진행한 사이드 프로젝트들."
          projects={sideProjects}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
