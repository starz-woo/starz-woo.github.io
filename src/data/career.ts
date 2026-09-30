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
    company: "WIGTN",
    role: "AI Product Engineer",
    period: "2026.01 - 현재",
    description:
      "AI 리서치 & 엔지니어링 회사 WIGTN에서 AI 에이전트 제품과 웹 서비스를 만들고 있습니다.",
    highlights: [
      "프로 e스포츠 팀과 PoC 진행 중(2026.09 착수): 격투 게임 선수의 피격 원인을 구분하는 프레임 단위 영상 분석 시스템. 제안서와 로드맵을 작성하고, 공개 60fps 경기 영상으로 피격 검출과 체력바 추적을 프로토타이핑",
      "Web Agency 세일즈 데모(커뮤니티, 회사 리뷰, 채용, 운영 백오피스를 갖춘 커리어 플랫폼) 개발. 시안 마크업만 있던 화면 20종을 실제로 동작하게 배선하고, 팀 코어 모듈을 벤더링해 비공개 레지스트리 토큰 없이 정적 빌드되도록 구성",
      "권한 확인, step-up 재인증, 멱등키를 순서대로 통과한 조치만 상태에 반영되고 감사 기록에 남도록 관리자 조치 흐름을 연결하고, 게스트·회원·운영자 역할 전환으로 권한 게이트 3단이 실제로 관찰되도록 구성",
      "로컬 저장 상태의 스키마 변경으로 화면이 깨지던 문제를 행 단위 병합과 스키마 버전 스탬프 두 겹으로 해결",
      "오픈소스 Claude Code 플러그인 WIGTN Plugins에 기여: frontend-development 플러그인 초기 버전(frontend-developer 에이전트, Next.js App Router·React·Tailwind·테스트 스킬, /add-feature 명령)을 작성하고, /screen-spec 스킬을 그레이스케일 와이어프레임, 모바일 와이어프레임 템플릿, --interview·--platform 옵션으로 개편",
    ],
    stack: ["React", "Next.js", "TypeScript", "Playwright"],
  },
  {
    company: "사운드마인드",
    role: "Full-Stack 개발",
    period: "2025.02 - 2026.06",
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
