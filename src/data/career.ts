export type Career = {
  company: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
};

export const careers: Career[] = [
  {
    company: "사운드마인드",
    role: "Full-Stack 개발",
    period: "2025.02 - 현재",
    description:
      "React Native 기반 크로스 플랫폼 애플리케이션 개발 및 프론트엔드와 백엔드를 아우르는 풀스택 개발을 담당하고 있습니다.",
    stack: ["React", "Next.js", "React Native", "Docker", "Spring Boot"],
  },
  {
    company: "네오젠소프트",
    role: "학부 연계 인턴",
    period: "2021.07 - 2021.08",
    description:
      "학부 연계 인턴십으로 Android Application 개발에 참여하며 실무 개발 경험을 쌓았습니다.",
    stack: ["Android", "Kotlin", "SOAP", "Oracle Database"],
  },
];

export const education = {
  school: "광운대학교",
  major: "컴퓨터정보공학과",
  period: "2016.03 - 2022.02",
  description:
    "컴퓨터정보공학과에서 소프트웨어 공학, 알고리즘, 데이터베이스, 인공지능 등을 학습하고 다수의 팀 프로젝트를 수행했습니다.",
};
