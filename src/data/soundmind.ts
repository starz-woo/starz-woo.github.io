export type CaseStudy = {
  title: string;
  problem: string;
  myRole: string;
  approach: string;
  result: string;
};

export type SoundmindProject = {
  slug: string;
  name: string;
  period: string;
  summary: string;
  highlights: string[];
  image?: string;
  about?: string;
  myRole?: string;
  badge?: string;
  stack?: string[];
  caseStudies?: CaseStudy[];
};

export type SoundmindGroup = {
  category: string;
  projects: SoundmindProject[];
};

export const soundmindCareer: {
  company: string;
  role: string;
  period: string;
  groups: SoundmindGroup[];
} = {
  company: "(주)사운드마인드",
  role: "Manager · MX팀",
  period: "2025.02 - 2026.06",
  groups: [
    {
      category: "B2B 사업",
      projects: [
        {
          slug: "odiya",
          name: "오디야",
          period: "2025.02 - 2025.06",
          summary: "GPS 기반 자녀 위치 추적 및 안심 관리 플랫폼",
          image: "/projects/odiya.png",
          about:
            "보호자가 자녀의 실시간 위치와 이동 패턴을 확인하고 안전 구역 알림을 받는 B2B 위치 기반 안심 관리 서비스입니다. React Native 보호자 앱, 위치 수집 SDK, 운영 관리자 웹 대시보드로 구성되며, 분당 수천 건의 위치 데이터를 안정적으로 처리하면서 디바이스 배터리 소모를 줄이는 것이 핵심 과제였습니다.",
          myRole:
            "백엔드 성능 최적화, 보호자 앱(React Native) 신규 개발, 관리자 웹 대시보드 구축을 담당했습니다.",
          badge: "B2B 매출 약 230% 성장 기여",
          stack: ["React Native", "Redis", "DB Partitioning", "Activity Recognition API", "Android Sensors"],
          highlights: [
            "분당 3,000~5,000건 위치 데이터의 처리 병목과 DB 부하를 Redis 캐싱, batch 처리, DB partitioning/indexing으로 개선",
            "Activity Recognition API와 Android 센서로 실제 이동 시점에만 고정밀 추적을 켜 배터리 사용량 개선",
            "웹 기반 보호자 시스템의 접근성 한계를 넘기 위해 React Native 보호자 앱을 신규 개발",
            "관리자 웹 대시보드로 사용자 상태와 위치 데이터를 운영 중 모니터링",
            "서비스 안정화와 고도화에 참여해 B2B 사업 매출 약 230% 성장에 기여",
          ],
        },
        {
          slug: "mohani",
          name: "모하니",
          period: "2026.01 - 2026.06",
          summary: "자녀 스마트폰 사용 관리 및 부모 제어 서비스",
          image: "/projects/mohani.png",
          about:
            "자녀의 스마트폰 사용을 부모가 원격으로 관리하는 부모 제어 서비스입니다. 보호자 앱에서 앱 사용 제한, 수면 모드, 특정 콘텐츠 차단을 설정하고 앱별 사용 통계를 확인합니다. 보호자의 제어 요청이 자녀 디바이스에 끊김 없이 즉시 반영되는 실시간성이 핵심 과제였습니다.",
          myRole:
            "실시간 제어 구조 설계부터 부모 제어 기능 구현, 사용 통계 집계와 시각화까지 담당했습니다.",
          stack: ["FCM", "Redis", "Android"],
          highlights: [
            "FCM 기반 실시간 제어 구조를 설계해 보호자 앱의 요청이 자녀 디바이스에 즉시 반영되도록 구성",
            "Android foreground/background 상태 차이로 생기던 이벤트 누락을 상태 재동기화와 fallback 처리로 해결",
            "앱 사용 제한, 수면 모드, 특정 콘텐츠 차단 등 부모 제어 기능을 설계하고 구현",
            "Redis 기반 상태 캐싱으로 실시간 상태 조회와 제어 안정성 개선",
            "앱별 사용 통계를 집계하고 시각화해 사용 패턴을 분석할 수 있도록 구성",
          ],
        },
        {
          slug: "soundmind-auth",
          name: "통합 인증 시스템",
          period: "2026.01 - 2026.06",
          summary: "다중 서비스 대상 인증 및 사용자 관리 시스템",
          image: "/projects/soundmind.png",
          about:
            "오디야, 모하니 등 서비스별로 나뉘어 있던 인증을 하나로 통합한 공통 인증 시스템입니다. 보호자/피보호자 구조에 맞춘 역할 기반 권한 체계와 무중단 배포, 메트릭·로그 통합 모니터링을 갖춘 공통 인프라입니다.",
          myRole:
            "분산된 인증 구조의 설계와 통합, 인증 서버 부하 제어, 무중단 배포와 모니터링 환경 구축을 담당했습니다.",
          stack: ["Role-based Access", "Token Management", "Blue-Green Deployment", "Prometheus", "Grafana", "Loki"],
          highlights: [
            "서비스별로 흩어져 있던 인증 구조를 통합한 공통 인증 시스템을 설계하고 구축",
            "보호자/피보호자 구조에 맞춘 역할 기반 인증 정책과 토큰 관리 구조를 설계",
            "반복 인증 요청과 비정상 트래픽에서도 안정적으로 동작하도록 인증 서버 부하 제어 구조 개선",
            "Blue-Green 무중단 배포 환경을 구축해 운영 중 서비스 중단 없이 배포",
            "Prometheus / Grafana / Loki 기반 메트릭·로그 통합 모니터링으로 장애 원인 추적과 운영 가시성 개선",
          ],
        },
      ],
    },
    {
      category: "R&D 과제",
      projects: [
        {
          slug: "kocca-korean-speaking",
          name: "KOCCA 한국어 말하기 평가 플랫폼",
          period: "2025.11 - 2025.12",
          summary: "한국어능력시험 말하기 평가 및 관리 시스템",
          image: "/projects/kocca.png",
          about:
            "연세대학교와 협업한 KOCCA R&D 과제로, 한국어능력시험 말하기 영역의 평가와 채점을 디지털화한 플랫폼입니다. 평가자 120명과 채점자 20명이 실제 시험 환경에서 동시에 사용하며, 음성 녹음·재생·파형 시각화와 STT 기반 채점 보조를 제공합니다.",
          myRole:
            "평가 워크플로와 상태 관리 구조 설계, 평가 데이터 유실 방지, 음성 처리 환경 구축을 담당했습니다.",
          badge: "평가자 120명 · 채점자 20명 동시 사용",
          stack: ["AWS S3", "Wavesurfer.js", "STT"],
          highlights: [
            "동시 접속에서 생기는 평가 상태 충돌과 중복 채점을 막기 위해 단계별 평가 workflow와 상태 관리 구조를 설계",
            "네트워크 불안정과 브라우저 이탈 상황에서도 평가 데이터 유실을 줄이도록 임시 저장과 상태 복구 로직 구현",
            "대용량 음성 파일의 업로드·재생 지연을 AWS S3 저장 구조와 Wavesurfer.js 스트리밍 파형 시각화로 개선",
            "STT 기반 음성 처리를 도입해 채점과 검수 운영 효율 개선",
            "평가 루브릭 기반 결과 분석 기능으로 평가 결과 관리와 운영 가시성 향상",
          ],
        },
      ],
    },
  ],
};
