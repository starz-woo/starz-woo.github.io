export type Skill = {
  name: string;
  slug: string;
};

export type SkillCategory = {
  category: string;
  items: Skill[];
};

export const skills: SkillCategory[] = [
  {
    category: "Language",
    items: [
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Python", slug: "python" },
      { name: "Kotlin", slug: "kotlin" },
      { name: "Java", slug: "openjdk" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", slug: "react" },
      { name: "React Native", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "HTML", slug: "html5" },
      { name: "CSS", slug: "css" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Spring Boot", slug: "springboot" },
      { name: "FastAPI", slug: "fastapi" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", slug: "mysql" },
      { name: "Supabase", slug: "supabase" },
      { name: "Firebase", slug: "firebase" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Docker", slug: "docker" },
      { name: "Vercel", slug: "vercel" },
      { name: "Expo", slug: "expo" },
    ],
  },
];
