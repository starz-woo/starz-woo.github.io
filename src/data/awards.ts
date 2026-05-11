export type Award = {
  title: string;
  org: string;
  date: string;
  description?: string;
};

export const awards: Award[] = [
  {
    title: "대상",
    org: "Build with TRAE Seoul Hackathon 2026",
    date: "2026",
    description: "WIGENT — AI 멀티 에이전트 토론 플랫폼",
  },
  {
    title: "준우승",
    org: "Snowflake AI & Data Hackathon 2026 Korea — Final Round",
    date: "2026",
    description: "WIGTN FLAKE — 목적 기반 동네 인텔리전스",
  },
  {
    title: "Dean's List",
    org: "광운대학교 컴퓨터정보공학과",
    date: "2019",
  },
];
