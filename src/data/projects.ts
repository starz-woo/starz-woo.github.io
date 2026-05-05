export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  subtitle?: string;
  period: string;
  role: string;
  description: string;
  stack: string[];
  highlights: string[];
  award?: string;
  aiModel?: string;
  links?: ProjectLink[];
  image?: string;
};

export const workProjects: Project[] = [
  {
    title: "Soundmind 통합 회원 시스템",
    subtitle: "B2B",
    period: "2025 - 현재",
    role: "MX",
    description:
      "자사 제품군 공통 회원 관리 시스템. 오디야, 레디투스쿨, 모하니 서비스 연동 — 추후 서비스 추가 예정",
    stack: ["Node.js", "Authentication", "OAuth"],
    highlights: [
      "다수 서비스 통합 인증",
      "세션 관리 및 토큰 정책 설계",
      "부모 - 자녀 연동 관리",
      "통합 관리 대시보드 제작",
    ],
    image: "/projects/soundmind.png",
  },
  {
    title: "오디야",
    subtitle: "위치 기반 케어 서비스 · B2B",
    period: "2025 - 현재",
    role: "MX",
    description:
      "자녀/부모를 위한 위치 기반 안전 모니터링 및 커뮤니케이션 앱 (Full / Light 버전)",
    stack: ["React Native", "Next.js", "Node.js", "Firebase"],
    highlights: [
      "Full / Light 버전 분리 아키텍처 설계",
      "부모 앱과 자녀 앱 실시간 위치 동기화",
      "어드민 웹 리빌딩 및 백엔드 개발",
    ],
    image: "/projects/odiya.png",
  },
  {
    title: "레디투스쿨",
    subtitle: "학교 생활 도우미 · B2B",
    period: "2025 - 현재",
    role: "MX",
    description:
      "아이들의 등교 준비 루틴을 도와주는 부모/자녀용 모바일 앱. Expo 기반으로 재구축",
    stack: ["React Native", "Expo", "TypeScript", "Zustand", "React Query"],
    highlights: [
      "부모 앱 - 자녀 앱 구조 설계",
      "Neis API 연동 / 스케줄링 및 루틴 관리 기능 구현",
      "react-native-calendars 기반 커스텀 일정 UI",
    ],
    image: "/projects/ready2school.png",
  },
  {
    title: "모하니",
    subtitle: "스마트폰 관리 서비스 · B2B",
    period: "2026 - 현재",
    role: "MX",
    description:
      "어린이 전용 스마트폰 관리 서비스. 앱 차단/허용, 스케줄링, 관리자 어드민을 제공",
    stack: ["Node.js", "Admin Dashboard", "App Block"],
    highlights: [
      "앱 차단 / 허용 정책 관리 / 도메인 차단",
      "슬립타임 기능 구현",
      "관리자 / 관찰자 시스템 제어",
    ],
    image: "/projects/mohani.png",
  },
  {
    title: "KOCCA 평가 도구",
    subtitle: "Assignment",
    period: "2025 - 현재",
    role: "Full-Stack 개발",
    description:
      "한국콘텐츠진흥원(KOCCA) 평가 프로세스 지원 도구. 평가자 명단 관리 및 평가 기록 추적",
    stack: ["Next.js", "TypeScript", "Prisma", "Docker"],
    highlights: [
      "Next.js + Prisma 기반 평가 관리 시스템",
      "HTTPS 자체 서명 인증 서버 운영",
      "Docker Compose 기반 배포 환경 구성",
      "Tool1 / Tool3 2종 도구 개발",
    ],
    image: "/projects/kocca.png",
  },
  {
    title: "Audio Detect",
    subtitle: "오디오 이벤트 감지 · Assignment",
    period: "2026 - 현재",
    role: "Backend 개발",
    description:
      "실시간 오디오 녹음 및 이벤트 감지 서버. 업로드된 오디오를 분석해 이벤트를 검출",
    stack: ["Python", "Audio Processing", "REST API"],
    highlights: [
      "Kotlin 기반 안드로이드 앱 개발",
      "Watch OS 개발 및 연동",
      "녹음 / 업로드 / 감지 파이프라인 구성",
      "FCM 연동 — Wake up 알림",
    ],
    image: "/projects/audio_detect.jpg",
  },
];

export const aiProjects: Project[] = [
  {
    title: "WIGVO",
    subtitle: "AI 실시간 전화 통역",
    period: "2026.02 - Present",
    role: "팀 개발",
    award: "ACL 2026 System Demonstration 채택",
    description:
      "일반 전화망(PSTN)을 통해 실시간 양방향 음성 통역을 제공하는 AI 전화 통역 플랫폼. ACL 2026 System Demonstration 부문 채택",
    aiModel: "OpenAI Realtime API",
    stack: [
      "Next.js",
      "React Native",
      "FastAPI",
      "Twilio",
      "Supabase",
      "Docker",
    ],
    highlights: [
      "OpenAI Realtime API 듀얼 세션 아키텍처로 557ms 중앙값 지연시간 달성",
      "3단계 에코 필터링 파이프라인 (147건 프로덕션 통화 중 번역 루프 0건)",
      "Voice-to-Voice, Text-to-Voice, Agent 모드 3가지 통역 방식 지원",
      "430+ pytest 테스트 커버리지",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/wigtn/wigvo-v2" },
      { label: "Demo", url: "https://youtu.be/_ixVEnHJxjk" },
    ],
  },
  {
    title: "TimeLens",
    subtitle: "AI 박물관 큐레이터",
    period: "2026.03 - Present",
    role: "팀 개발",
    description:
      "카메라로 유물을 비추면 AI 큐레이터가 실시간 음성 대화로 역사적 맥락을 설명하고, 손상된 유물의 복원 이미지를 생성하는 앱",
    aiModel: "Gemini Live API",
    stack: ["Next.js", "Firebase", "Google ADK", "Gemini API", "Docker"],
    highlights: [
      "Gemini Live API 기반 실시간 음성+영상 스트리밍 대화",
      "유물 인식 및 역사적 복원 이미지 AI 생성",
      "WebSocket 듀얼 파이프라인 (실시간 스트리밍 + REST 중량 작업)",
      "자동 생성 일러스트 방문 다이어리 기능",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/wigtn/wigtn-timelens" },
      { label: "Demo", url: "https://youtu.be/ITaMtVO5jFg" },
    ],
  },
  {
    title: "WIGTN Coding Plugin",
    period: "2026.01 - Present",
    role: "팀 개발",
    description:
      "12개 전문 AI 에이전트를 병렬 오케스트레이션하여 기획부터 배포까지 개발 전 과정을 자동화하는 Claude Code 플러그인",
    aiModel: "Claude (Anthropic)",
    stack: ["Claude Code", "AI Agent", "Markdown", "TypeScript"],
    highlights: [
      "12개 병렬 AI 에이전트 (디자인, 백엔드, 프론트, 모바일, AI, Ops)",
      "17가지 디자인 시스템 프리셋 (Glassmorphism, Brutalism 등)",
      "100점 만점 코드 품질 스코어링 게이트",
      "/prd → /implement → /auto-commit 3단계 자동화 파이프라인",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/wigtn/wigtn-plugins-with-claude-code",
      },
    ],
  },
  {
    title: "WIGEX",
    subtitle: "해외여행 가계부",
    period: "2026",
    role: "팀 개발",
    description:
      "해외 여행 중 지출을 간편하게 기록·관리하는 모바일 앱. Monorepo + MSA 구조로 Mobile / API / Admin을 통합 관리",
    aiModel: "wigtn-plugin (Claude Code)",
    stack: [
      "Expo",
      "React Native",
      "NestJS",
      "Next.js",
      "TypeScript",
      "pnpm",
    ],
    highlights: [
      "Monorepo + MSA 아키텍처 (Mobile / API / Admin / Shared)",
      "pnpm workspaces 기반 공용 타입·상수 관리",
      "Expo Router 파일 기반 라우팅 + SQLite 로컬 DB 동기화",
      "Zustand 상태 관리 및 토큰/네트워크 서비스 분리",
    ],
    links: [{ label: "GitHub", url: "https://github.com/wigtn/wigex" }],
  },
  {
    title: "WIGENT",
    subtitle: "Agent Arena",
    period: "2026",
    role: "팀 개발",
    description:
      "AI 에이전트들이 아이디어를 두고 토론한 뒤 랜딩 페이지까지 자동 생성하는 멀티 에이전트 토론 플랫폼",
    award: "Build with TRAE Seoul Hackathon 2026 대상",
    aiModel: "GPT-4o",
    stack: ["Next.js 16", "TypeScript", "GPT-4o", "Multi-Agent"],
    highlights: [
      "PM 에이전트 + 주제별 자동 생성 전문가 에이전트 멀티턴 토론",
      "토론 라운드마다 에이전트 은퇴·교체 (Agent Lifecycle Orchestration)",
      "Slack 스타일 실시간 토론 UI → 랜딩 페이지 자동 생성 트랜지션",
      "7종 이상 에이전트 디자인 패턴 (Orchestrator, Specialist, Retirement 등)",
    ],
    links: [{ label: "GitHub", url: "https://github.com/wigtn/wigent" }],
    image: "/projects/trae_hackthon_seoul.png",
  },
  {
    title: "WIGTN FLAKE",
    subtitle: "목적 기반 동네 인텔리전스",
    period: "2026",
    role: "팀 개발",
    award: "Snowflake AI & Data Hackathon 2026 Korea Final Round 준우승",
    description:
      "사용자가 목적(창업·투자·광고·마케팅·상권 이상 감지)을 선택하면 AI 전문가 5명이 Snowflake 데이터를 교차 분석해 Top 3 동네 추천·이상 시그널·6개월 예측·실행 액션을 생성",
    aiModel: "GPT-4o + Snowflake Cortex",
    stack: [
      "Next.js",
      "TypeScript",
      "Snowflake Cortex",
      "GPT-4o",
      "PLpgSQL",
    ],
    highlights: [
      "Purpose-first UX: 5개 프리셋 + 자유 입력 목적 기반 분석",
      "Snowflake Cortex 11개 기능 활용 (Analyst / Anomaly Detection / Forecast)",
      "GPT-4o 오케스트레이터 + 목적 특화 전문가 5명 동적 소환",
      "3단계 폴백 아키텍처 (Cortex Agent → Analyst → GPT-4o Function Calling)",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/wigtn/wigtn-for-snowflake",
      },
      { label: "Demo", url: "https://www.youtube.com/watch?v=BHwb6zbUZuE" },
    ],
  },
  {
    title: "WIGSS",
    subtitle: "Visual AI Code Refactoring",
    period: "2026",
    role: "팀 개발",
    description:
      "웹 페이지의 UI 컴포넌트를 드래그·리사이즈하면 소스 코드(Tailwind CSS)가 자동으로 수정되는 비주얼 리팩토링 도구. npm 패키지 배포 (npx wigss)",
    aiModel: "AI Agent",
    stack: ["TypeScript", "Tailwind CSS", "npx", "AI Agent"],
    highlights: [
      "항상 동작하는 AI 에이전트 기반 실시간 코드 재작성",
      "Drag & Resize 조작이 Tailwind 클래스로 자동 변환",
      "npx 실행 기반 Zero-Install CLI 워크플로우",
      "데모 모드 지원 (기존 프로젝트 없이 바로 체험 가능)",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/wigtn/wigss" },
      { label: "npm", url: "https://www.npmjs.com/package/wigss" },
    ],
    image: "/projects/wigss-npm.png",
  },
];

export const sideProjects: Project[] = [
  {
    title: "Blossom 소개팅 앱",
    subtitle: "Team Watermelon",
    period: "2024.05",
    role: "Front-End 개발 (4명)",
    description: "React Native 기반 모바일 소개팅 앱",
    stack: [
      "React Native",
      "TypeScript",
      "React Query",
      "Zustand",
      "Expo",
    ],
    highlights: [
      "공용 컴포넌트 구현 및 명세 작성",
      "React Native Reanimated를 사용한 프로필 카드 애니메이션 구현",
      "React Query & Axios를 이용한 API 연동",
    ],
    links: [{ label: "GitHub", url: "https://github.com/watermelon-blossom" }],
    image: "/projects/blossom.png",
  },
  {
    title: "다중 관리 시스템",
    period: "2023.12 - 2024.01",
    role: "Front-End 개발 (3명)",
    description: "계정, 회원, 문서, 고유 단어 관리를 위한 통합 관리 시스템",
    stack: ["React", "JavaScript", "Node.js", "HTML", "CSS"],
    highlights: [
      "Front-end 담당",
      "무료 dashboard 템플릿을 이용한 디자인 기획",
      "계정 관리, 고유 단어 관리 페이지 구현",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/Hyunwoo-CHO/ATRAN_Front" },
    ],
    image: "/projects/atran.png",
  },
  {
    title: "한 번에 요양보호사 되기",
    period: "2023.07 - 2023.12",
    role: "전체 개발 (1명)",
    description:
      "요양보호사 시험을 위한 모의고사 및 단원별 문제 풀이 앱",
    stack: ["Kotlin", "Android Studio", "Firebase", "RESTful API"],
    highlights: [
      "전체 디자인 및 기획",
      "카카오 및 네이버 로그인과 Firebase를 이용한 회원 관리",
      "구글 스프레드 시트 REST API를 이용한 문제 관리",
      "Android Room Database를 사용하여 개인 오답 저장",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/Hyunwoo-CHO/Caregiver" },
    ],
    image: "/projects/caregiver.png",
  },
  {
    title: "온라인 게임 쇼핑몰",
    period: "2021.05 - 2021.06",
    role: "Front-End 개발 및 디자인 (3명)",
    description: "Vue & Express 통합 온라인 게임 쇼핑몰",
    stack: ["Vue", "JavaScript", "Node.js", "HTML"],
    highlights: [
      "홈페이지 전체 UI 디자인",
      "전체적인 Front-end 담당",
      "유튜브 동영상 연동",
    ],
    links: [{ label: "GitHub", url: "https://github.com/Ryeoly/SW_Project3" }],
    image: "/projects/game-shop.png",
  },
  {
    title: "건강관리 모니터링 시스템",
    period: "2020.09 - 2021.05",
    role: "딥러닝 모델 설계 및 Android 개발 (4명)",
    description: "딥러닝을 통한 생체 신호 분석 및 건강 지표 모니터링 시스템",
    award: "대한 산업 생체 공학회 학술 대회 참가",
    stack: ["Android Studio", "Python", "TensorFlow", "Django", "RESTful API"],
    highlights: [
      "BCG(심탄도) 신호를 이용한 맥박 측정 딥러닝 모델 연구 및 설계",
      "생체 신호 데이터 수집에 필요한 실험 참여",
      "맥박 및 건강 지표 모니터링 애플리케이션 데모 버전 제작",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/Hyunwoo-CHO/TOG_Android" },
    ],
    image: "/projects/health-monitor.png",
  },
];
