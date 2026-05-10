export type Career = {
  company: string;
  role: string;
  period: string;
  description: string;
  stack?: string[];
  highlights?: string[];
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
      "학부 연계 인턴십으로 기존 Android 솔루션의 현대화 작업과 백엔드 연동 실무를 경험했습니다.",
    highlights: [
      "기존 Java 기반 Android Application을 Kotlin으로 마이그레이션",
      "MVVM 아키텍처 패턴 학습 및 적용",
      "SOAP 웹 서비스와 Oracle Database 연동을 직접 구현하며 클라이언트–백엔드 통신 흐름 학습",
    ],
  },
];

export const education = {
  school: "광운대학교",
  major: "컴퓨터정보공학과",
  period: "2016 - 2022",
  gpa: "3.77 / 4.5",
  thesis: {
    title: "딥러닝을 통한 생체 신호 분석 및 건강 지표 모니터링 시스템",
    description:
      "BCG(Ballistocardiogram, 심탄도), ECG(Electrocardiogram, 심전도), PPG(Photoplethysmogram, 광혈류측정) 신호를 이용한 혈압 측정 딥러닝 모델 연구 및 설계",
  },
};
