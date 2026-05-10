export type SoundmindProject = {
  name: string;
  period: string;
  summary: string;
  highlights: string[];
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
  role: "Manager · Full-Stack 개발",
  period: "2025.02 - 재직 중",
  groups: [
    {
      category: "B2B 사업",
      projects: [
        {
          name: "오디야",
          period: "2025.02 - 현재",
          summary: "GPS 기반 자녀 위치 추적 및 안심 관리 플랫폼",
          highlights: [
            "Redis caching, batch 처리, DB partitioning/indexing 전략을 적용하여 분당 3,000~5,000건 규모의 위치 데이터 환경에서 발생하던 처리 병목 및 DB 부하 문제 개선",
            "Activity Recognition API 및 Android 센서를 활용해 실제 이동 시점에만 고정밀 위치 추적이 활성화되도록 최적화하고 배터리 사용량 개선",
            "기존 웹 기반 보호자 시스템의 접근성 한계를 개선하기 위해 React Native 기반 보호자 앱 신규 개발",
            "관리자 웹 대시보드를 구축하여 사용자 상태 및 위치 데이터 운영 모니터링 환경 개선",
            "오디야 서비스 안정화 및 고도화 과정에 참여하여 B2B 사업 매출 약 230% 성장에 기여",
          ],
        },
        {
          name: "모하니",
          period: "2026.01 - 현재",
          summary: "자녀 스마트폰 사용 관리 및 부모 제어 서비스",
          highlights: [
            "FCM 기반 실시간 디바이스 제어 구조를 설계하여 보호자 앱의 제어 요청이 자녀 디바이스에 즉시 반영될 수 있는 환경 구축",
            "Android foreground/background 상태 차이로 발생하는 이벤트 누락 문제를 해결하기 위해 상태 재동기화 및 fallback 처리 로직 구현",
            "앱 사용 제한, 수면 모드, 특정 콘텐츠 차단 등 부모 제어 기능 설계 및 구현",
            "Redis 기반 상태 캐싱 구조를 적용하여 실시간 상태 조회 및 제어 안정성 개선",
            "앱별 사용 통계 집계 및 시각화 기능을 구축하여 사용자 사용 패턴 분석 환경 구성",
          ],
        },
        {
          name: "통합 인증 시스템",
          period: "2026.01 - 현재",
          summary: "다중 서비스 대상 인증 및 사용자 관리 시스템",
          highlights: [
            "서비스별로 분산되어 있던 인증 구조를 통합하기 위해 공통 인증 시스템 설계 및 구축",
            "보호자/피보호자 구조에 맞춰 역할 기반 인증 정책 및 토큰 관리 구조 설계",
            "반복 인증 요청 및 비정상 트래픽 상황에서도 안정적으로 동작할 수 있도록 인증 서버 부하 제어 구조 개선",
            "Blue-Green 기반 무중단 배포 환경을 구축하여 운영 중 서비스 중단 없이 배포 가능한 구조 구성",
            "Prometheus / Grafana / Loki 기반 메트릭·로그 통합 모니터링 환경을 구축하여 장애 원인 추적 및 운영 가시성 개선",
          ],
        },
      ],
    },
    {
      category: "R&D 과제",
      projects: [
        {
          name: "KOCCA 한국어 말하기 평가 플랫폼",
          period: "2025.11 - 2025.12",
          summary: "한국어능력시험 말하기 평가 및 관리 시스템",
          highlights: [
            "연세대학교 한국어능력시험 환경에서 실제 120명의 평가자 및 20명의 채점자가 동시에 사용하는 말하기 평가 플랫폼 구축",
            "다수 평가자가 동시에 접속하는 환경에서 발생할 수 있는 평가 상태 충돌 및 중복 채점 문제를 해결하기 위해 단계별 평가 workflow 및 상태 관리 구조 설계",
            "평가 진행 중 네트워크 불안정 및 브라우저 이탈 상황에서도 평가 데이터 유실을 최소화할 수 있도록 임시 저장 및 상태 복구 로직 구현",
            "대용량 음성 파일 처리 과정에서 발생하는 업로드·재생 지연 문제를 개선하기 위해 AWS S3 기반 저장 구조 및 Wavesurfer.js 기반 스트리밍형 음성 파형 시각화 환경 구축",
            "STT 기반 음성 처리 기능을 도입하여 채점 및 검수 과정의 운영 효율 개선",
            "평가 루브릭 기반 결과 데이터 분석 기능을 구축하여 평가 결과 관리 및 운영 가시성 향상",
          ],
        },
      ],
    },
  ],
};
