export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectArchitecture = {
  image: string;
  alt?: string;
  caption?: string;
  description: string[];
};

export type Project = {
  slug: string;
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
  images?: string[];
  details?: string[];
  githubStars?: number;
  architecture?: ProjectArchitecture;
};

export const aiProjects: Project[] = [
  {
    slug: "wigtn-coding",
    title: "WIGTN Coding",
    subtitle: "Claude Code 멀티 에이전트 플러그인",
    period: "2026.01 - Present",
    role: "팀 개발",
    githubStars: 44,
    description:
      "기획부터 PR까지의 개발 사이클 전체를 13개의 전문 에이전트로 병렬 자동화하는 Claude Code 플러그인. /prd → /implement → /auto-commit + /review-pr 4개 명령으로 PRD 생성, 4-카테고리 품질 분석, 아키텍처 결정, 팀 단위 병렬 빌드, 3-에이전트 코드 리뷰, PR 리뷰까지 일괄 처리합니다.",
    aiModel: "Claude (Opus / Sonnet)",
    stack: [
      "Claude Code Plugins",
      "Anthropic Claude",
      "Markdown",
      "YAML frontmatter",
      "Bash (hooks)",
    ],
    highlights: [
      "/prd → /implement → /auto-commit 3-스테이지 파이프라인 + /review-pr — 순차 ~20분 → 병렬 ~6분 (3~5배 단축)",
      "13개 전문 에이전트 (코디네이터 4 · 개발자 4 · 품질 5)를 동적 팀 분배해 동시 실행",
      "20개 디자인 스타일 가이드 + VS(Verbalized Sampling) 기반 design-discovery 에이전트로 컨텍스트 맞춤 추천",
      "/auto-commit 3-에이전트 리뷰(가독성·성능·보안) → 100점 게이트, ≥80 자동 커밋 / 60–79 수정 / <60 차단, 보안 치명적은 강제 FAIL",
      "Project-Native Build — 코드 작성 전 Context Harvesting으로 기존 패턴을 자동 수집, generic best practice 대신 프로젝트 실제 컨벤션 준수",
      "team-memory-protocol 스킬로 SHARED_CONTEXT 파일 + TaskCreate + Auto Memory 3-레이어 공유 메모리 운영",
      "4개 훅으로 위험 명령(rm -rf /, git push --force, DROP TABLE) 차단 + .tsx/.py/.go 파일 포맷팅·패턴 자동 검증",
      "/auto-commit Stale Branch Detection — squash-merge 후 closed PR 브랜치에 재push해 변경이 invisible해지는 문제를 `gh pr list --state all` 사전 검증 + 자동 신규 브랜치 분기로 차단 (2026.05 도입)",
      "Apache 2.0 라이선스 · 다국어 README (EN/KO/CN) 글로벌 공개, GitHub 44 stars",
    ],
    details: [
      "Claude Code 단일 컨텍스트로 중대형 기능을 만들면 컨텍스트 오염, 패턴 일관성 부재, 순차 실행으로 인한 시간 손실이 발생합니다. Vibe coder는 PRD 없이 바로 코딩에 들어가 누락 요건과 보안 갭을 만들고, 시니어는 매번 같은 절차(요구사항 → 아키텍처 결정 → 빌드 → 리뷰 → 커밋)를 반복합니다. WIGTN Coding은 이 사이클 전체를 명시적 파이프라인 + 병렬 에이전트로 자동화합니다.",
      "/prd는 parallel-digging-coordinator를 통해 4-카테고리(완전성·실현가능성·보안·일관성) 갭 분석을 병렬 수행해 PRD.md와 PLAN_{feature}.md를 생성합니다. /implement는 architecture-decision(MSA / 모놀리식 / 모듈러 모놀리스)을 결정한 뒤 — 프론트엔드 포함 시 design-discovery가 20개 스타일 중 컨텍스트 맞춤 추천 — team-build-coordinator가 백엔드 · 프론트엔드 · AI 서버 · 운영 4개 팀에 작업을 동적 분배합니다. 각 팀은 독립된 서브에이전트로 동시 빌드.",
      "/auto-commit은 parallel-review-coordinator가 3개 리뷰 에이전트(가독성·성능·보안)를 병렬 실행해 점수를 병합합니다. code-reviewer는 5개 카테고리(가독성·유지보수성·성능·테스터빌리티·베스트 프랙티스)를 100점 만점으로 평가하며, ≥80은 자동 커밋, 60–79는 수정 후 재시도, <60은 차단됩니다. 보안 치명적 이슈는 점수와 무관하게 zero-tolerance로 FAIL 처리. 별도 /review-pr 명령으로 GitHub PR 리뷰도 동일 품질 게이트로 처리합니다.",
      "핵심 원칙은 'Project-Native' — 모든 에이전트는 코드 작성 전 Context Harvesting으로 프로젝트의 실제 패턴(폴더 구조 · 네이밍 컨벤션 · 에러 핸들링 방식 · 테스트 스타일)을 스캔하고, team-memory-protocol 스킬을 통해 SHARED_CONTEXT 파일 + Claude Code TaskCreate + Auto Memory 3-레이어 공유 메모리에 기록합니다. 결과적으로 generic best practice가 아닌 이 코드베이스의 실제 컨벤션 위에서 일관된 코드가 생성됩니다.",
      "운영 안전성은 4개 훅(위험 명령 차단 · 프론트엔드 포맷팅 · 백엔드 패턴 검증 · 파이프라인 완료 알림)과 최근 추가된 Stale Branch Detection으로 강화했습니다. squash-merge 후 close된 PR의 브랜치에 추가 commit이 invisible해지는 실제 사고에서 출발한 개선으로, /auto-commit 진입 시 `gh pr list --head <current> --state all`로 사전 검증 후 stale 판별 시 자동으로 신규 브랜치 분기 + cherry-pick + stash 복구를 수행합니다. Apache 2.0으로 공개되어 있으며 README는 EN/KO/CN 3개 언어로 동기화됩니다.",
    ],
    images: [
      "/projects/wigtn_logo_banner.jpg",
      "/projects/wigtn-coding/architecture.svg",
    ],
    architecture: {
      image: "/projects/wigtn-coding/architecture.svg",
      alt: "WIGTN Coding — 3-Stage Pipeline (/prd → /implement → /auto-commit) × 3-Tier Agent Composition (Coordinators · Developers · Quality)",
      caption:
        "3-Stage Pipeline (/prd → /implement → /auto-commit) × 3-Tier Agent Composition (Coordinators · Developers · Quality) 매트릭스 — 개발 사이클을 워크플로우 단계와 에이전트 역할 두 축으로 직교 분리한 설계.",
      description: [
        "WIGTN Coding의 핵심은 **3-Stage Pipeline × 3-Tier Agent Composition** 매트릭스입니다. 개발 사이클을 **워크플로우 단계**(언제)와 **에이전트 역할**(누가)이라는 두 축으로 직교 분리하고, 각 셀에 가장 적합한 전문 에이전트를 배치해 단일 컨텍스트 진행에서 발생하는 컨텍스트 오염·순차 실행 병목·패턴 일관성 부재를 동시에 해결합니다. 순차 ~20분 작업이 병렬 ~6분으로 단축되는 것이 결과적 효과입니다.",
        "**Stage 1 — /prd (PLAN).** parallel-digging-coordinator가 4-카테고리(완전성·실현가능성·보안·일관성) 갭 분석을 병렬 수행해 PRD.md와 단계별 PLAN_{feature}.md를 생성합니다. 사용자가 \"OAuth 기반 SaaS 대시보드\" 한 줄을 던지면 30초 안에 완전한 요구사항 문서가 나옵니다. **Stage 2 — /implement (BUILD).** architecture-decision이 MSA/모놀리식/모듈러 모놀리스를 결정하고, 프론트엔드가 포함되면 design-discovery가 20개 스타일 중 VS(Verbalized Sampling) 기법으로 컨텍스트 맞춤 추천한 뒤, team-build-coordinator가 백엔드·프론트엔드·AI·운영 4개 팀을 동적 분배해 동시 빌드합니다. **Stage 3 — /auto-commit (SHIP).** parallel-review-coordinator가 3개 리뷰 에이전트(가독성·성능·보안)를 병렬 실행해 100점 만점으로 점수를 병합하고, ≥80은 자동 커밋, 60–79는 자동 수정 후 재시도, <60은 차단합니다. 보안 치명적 이슈는 zero-tolerance로 점수 무관 강제 FAIL.",
        "**Coordinators (4) — 오케스트레이션 레이어.** team-build-coordinator · parallel-review-coordinator · parallel-digging-coordinator · architecture-decision이 단계별 의사결정과 병렬 분기를 담당합니다. **Developers (4) — 도메인 빌더 레이어.** frontend-developer(React 19 · Next.js 16+) · backend-architect(API · DB · 백엔드 패턴) · mobile-developer(React Native · Expo) · ai-agent(WhisperX · OpenAI · Anthropic)가 각 도메인 코드를 작성하며, 모든 에이전트는 코드 작성 전 **Context Harvesting**으로 프로젝트의 실제 패턴(폴더 구조·네이밍·에러 핸들링·테스트 스타일)을 수집해 generic best practice 대신 코드베이스 컨벤션을 따릅니다. **Quality (5) — 품질 게이트 레이어.** code-reviewer(100점 평가) · prd-reviewer(PRD 갭) · pr-reviewer(/review-pr GitHub PR 리뷰) · code-formatter(다중 언어 자동 포맷) · design-discovery(VS 스타일 추천)가 단계마다 품질을 강제합니다.",
        "**운영 안전성 — Skills · Hooks · Stale Branch Detection.** 3개 Skill로 횡단 관심사를 분리합니다 — `code-review-levels`(Level 3 심층 리뷰 / Level 4 아키텍처 리뷰), `design-system-reference`(20개 스타일 가이드 + 안티패턴 체크리스트), `team-memory-protocol`(병렬 빌드 중 SHARED_CONTEXT 파일 + TaskCreate + Auto Memory 3-레이어 공유 메모리). 4개 Hook이 위험 명령(`rm -rf /`, `git push --force`, `DROP TABLE`)을 PreToolUse에서 차단하고, `.tsx/.py/.go` 파일 작성 후 포맷·패턴 검증을 비동기 실행합니다. 2026.05에는 **Stale Branch Detection**을 /auto-commit에 추가 — squash-merge 후 close된 PR의 브랜치에 commit이 invisible해지는 실제 사고에서 출발한 개선으로, `gh pr list --head <current> --state all` 사전 검증 + 자동 신규 브랜치 분기 + cherry-pick + stash 복구까지 자동화합니다. Apache 2.0 라이선스 · EN/KO/CN 3개 언어 README로 글로벌 공개.",
      ],
    },
    links: [
      {
        label: "GitHub",
        url: "https://github.com/wigtn/wigtn-plugins-with-claude-code",
      },
    ],
  },
  {
    slug: "wigtn-flake",
    title: "WIGTN FLAKE",
    subtitle: "목적 기반 동네 인텔리전스",
    period: "2026.03 - 2026.04",
    role: "팀 개발 (4인)",
    award: "Snowflake AI & Data Hackathon 2026 Korea Final Round 준우승",
    description:
      "사용자가 '카페 창업 / 렌탈 가전 타겟 / 광고판 입지 / 부동산 투자 / 상권 이상 감지' 같은 목적을 선택하면, 목적에 맞는 AI 전문가 에이전트가 동적으로 소환되어 Snowflake Cortex 기반으로 부동산 시세 × 유동인구 × 카드매출 × 통신계약 4개 데이터셋을 교차 분석하고, Top 3 동네 추천 + 이상 시그널 감지 + 6개월 예측 + 실행 액션을 자동 생성합니다.",
    aiModel: "Snowflake Cortex (claude-4-sonnet) · GPT-4o",
    stack: [
      "Next.js 16",
      "React 19 (Compiler)",
      "TypeScript 5.9",
      "Tailwind CSS 4",
      "Framer Motion",
      "Vega-Lite",
      "snowflake-sdk",
      "Snowflake Cortex",
      "OpenAI SDK",
    ],
    highlights: [
      "Purpose-first UX — '무엇을 하고 싶은지'에서 시작하는 5개 프리셋(창업·렌탈·광고·투자·이상감지) + 자유 입력",
      "목적 기반 에이전트 동적 생성 — PM 진행자 + 데이터 분석가만 고정, 나머지 도메인·Cortex 분석가는 목적에 맞춰 매 세션 다르게 소환",
      "Snowflake Cortex 11개 기능 풀 활용 — Agent · Analyst · LLM · FORECAST · ANOMALY_DETECTION · AI Function · Dynamic Tables · Python UDF · Semantic Model",
      "ANOMALY_DETECTION 주연 승격 — 랭킹 결과에 이상 시그널 자동 주입으로 데모 클라이맥스 구성",
      "데이터셋 4종 전수 활용 — SPH · RichGo · NextTrade · AJD를 Semantic YAML로 통합 그라운딩",
    ],
    details: [
      "Snowflake AI & Data Hackathon 2026 Tech Track 출품작. 일반적인 '데이터 대시보드'가 아니라, 의사결정자(소상공인·B2B 마케터·프랜차이즈·개인 투자자·상권 운영자)가 자기 목적을 직접 선택하면 '어느 동네가 그 목적에 맞는지'를 데이터로 답해 주는 도구를 목표로 했습니다. 같은 쿼리라도 목적이 다르면 해석이 달라진다는 점이 핵심 가설.",
      "오케스트레이션은 GPT-4o 진행자(PM 에이전트)가 목적 컨텍스트를 받아 고정 멤버(데이터 분석가) + 동적 전문가(목적 도메인 + Cortex Forecast / Insight / Sentiment / News / Anomaly)를 소환하고, Slack 스타일 토론방에서 SSE로 발언이 스트리밍됩니다. Cortex Agent가 Semantic Model 4개를 활용해 자연어→SQL을 수행하고, FORECAST는 Top 3 대상 6개월 예측, ANOMALY_DETECTION은 랭킹 결과에 이상 시그널을 자동 주입합니다.",
      "신뢰성은 3-Tier 폴백으로 확보 — Tier 1 Cortex Agent(Analyst×4 + data_to_chart), trial 제약 시 Cortex Analyst 직접 호출로 하강. Tier 2 GPT-4o Function Calling(execute_snowflake_sql / web_search Tavily / real_estate_transaction 국토부 / statistical_analysis), Tier 3 GPT-4o 순수 추론. 또한 Cortex LLM이 가비지 토큰(`<|reserved_special_token|>`, `Dünnschicht` 등)을 흘릴 경우 `hasGarbageTokens()`가 스트리밍 중 감지해 즉시 GPT-4o로 전환합니다.",
      "데이터 측면은 SPH·RichGo·NextTrade·아정당 4개 데이터셋을 모두 Semantic Model YAML로 정의해 Cortex Analyst가 단일 자연어 입력으로 4 도메인을 교차 조회하도록 했고, Dynamic Tables(`DT_DISTRICT_HEALTH`, `DT_DISTRICT_DNA`)와 Python UDF(디커플링 지수·DNA 유사도·목적 적합도)로 의사결정 점수를 계산합니다. 결과적으로 단순 추천이 아니라 '왜 1위인가'를 데이터로 논쟁하는 토론 + 이상 시그널이 결합된 데모로 Final Round 준우승을 수상했습니다.",
    ],
    images: [
      "/projects/wigtn-flake.jpg",
      "/projects/wigtn-flake-architecture.png",
    ],
    architecture: {
      image: "/projects/wigtn-flake-architecture.png",
      alt: "WIGTN FLAKE 3-Layer Hybrid AI 아키텍처 — Brain · Data · Render",
      caption:
        "Brain(GPT-4o) · Data(Snowflake Cortex) · Render(Cortex LLM) 3-Layer Hybrid AI 아키텍처 — 외부 모델의 유연한 추론과 Cortex의 견고한 데이터 엔진을 결합한 설계.",
      description: [
        "WIGTN FLAKE의 핵심은 **3-Layer Hybrid AI 아키텍처**입니다. 데이터의 정확성과 풍부한 인사이트를 동시에 달성하기 위해 시스템을 **Brain · Data · Render** 세 계층으로 분리하고, 각 계층마다 가장 적합한 모델과 도구를 배치했습니다.",
        "**Brain Layer — GPT-4o 오케스트레이터.** Cortex 내부에서 멀티 에이전트 토론 페르소나를 완전히 구현하기엔 기술적 제약이 있어, 외부 모델의 유연한 추론 능력을 빌렸습니다. GPT-4o가 사용자 목적에 맞춰 전문가 페르소나를 구성하고, 토론 흐름을 주도하며 서로 반론을 제기해 인사이트의 밀도를 끌어올립니다.",
        "**Data Layer — Snowflake Cortex 풀스택.** 정확성을 책임지는 계층으로 Cortex의 Agent · LLM · ML Function · AI Function을 모두 적용했습니다. Trial 계정 제약으로 Cortex Agent를 직접 사용할 수 없어 Analyst 기능을 엔드포인트로 직접 호출하는 방식을 채택했고, 데이터셋별 정교한 Semantic YAML 설계로 자연어 질문이 정확한 SQL 쿼리로 변환되는 '데이터 그라운딩'을 실현했습니다. 토론 중 제기되는 가설은 사전 구축한 FORECAST 모델과 ANOMALY_DETECTION으로 즉시 검증·이상 징후를 포착하고, AI Sentiment / Classify로 비정형 데이터 분석 가능성도 열어 두었으며, SPH · RichGo · NextTrade · AJD 4개 데이터셋을 모두 활용했습니다.",
        "**Render Layer — Cortex LLM 마크다운 스트리밍.** 토론 결과물을 단순 요약이 아닌, 핵심 지표 + 6개월 예측 전망 + 구체적 액션 아이템이 포함된 전문가 수준의 인사이트 리포트로 마크다운 스트리밍 렌더링합니다. 외부의 유연한 지능과 Snowflake의 견고한 데이터 엔진(Cortex)을 결합해, 누구에게나 전문가 수준 인텔리전스를 제공하는 것이 최종 목표입니다.",
      ],
    },
    links: [
      {
        label: "GitHub",
        url: "https://github.com/wigtn/wigtn-for-snowflake",
      },
      { label: "Demo Video", url: "https://youtu.be/1YzSp3SdzTk?si=XdEld5BCL4ZfRiAA" },
    ],
  },
  {
    slug: "wigent",
    title: "WIGENT",
    subtitle: "Agent Arena — AI 토론 → 랜딩 페이지 자동 생성",
    period: "2026.03.28",
    role: "팀 개발",
    description:
      "주제만 던지면 PM + 도메인 전문가 에이전트들이 Slack 스타일 채팅 UI에서 30턴 자유 토론을 벌이고, 결론이 나오는 순간 9개 디자인 템플릿 중 키워드 매칭으로 0초에 랜딩 페이지를 렌더링하는 멀티 에이전트 디베이트 플랫폼. Build with TRAE Seoul Hackathon 2026 대상 수상작.",
    award: "Build with TRAE Seoul Hackathon 2026 대상",
    aiModel: "GPT-4o",
    stack: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript 5.9 (strict)",
      "Tailwind CSS v4",
      "Framer Motion",
      "Archiver",
      "OpenAI GPT-4o",
      "SSE (Server-Sent Events)",
    ],
    highlights: [
      "30턴 자유 토론 + 확정 교체(turn 12 / 22) — 초기 라운드제를 폐기하고 자유 흐름으로 피봇해 데모 안정성 + 토론 깊이 동시 확보",
      "이중 경로 랜딩 생성 — FINAL_RESULT 수신 즉시 9개 템플릿 키워드 매칭으로 0초 렌더링(Primary), GPT-4o HTML streaming(180s)은 백그라운드 fallback으로 동작",
      "Slack 스타일 다크테마 UI — 사이드바·채널·아바타·타이핑 인디케이터·입퇴장·시스템 메시지를 13종 SSE 이벤트로 실시간 시각화",
      "AsyncGenerator<SSEEvent> 오케스트레이션 — 5-step 파이프라인(agents_created → 30턴 free debate → summarize → final_result → landing_page) + AbortController 타임아웃(JSON 30s / streaming 180s) + MAX_RETRIES=1",
      "토론 페이즈 자동 전환 — opening(0–2) → mid(3–14) → late(15–24) → closing(25–29, 강제 수렴 프롬프트)으로 발산만 하다 끝나는 문제 차단",
      "7+ 멀티 에이전트 디자인 패턴 — Orchestrator / Specialist / Persistent (PM + Designer) / Spawning / Retirement / Multi-turn Debate / Result Synthesis + Human-in-the-Loop (결과 반려 시 추가 8턴 토론)",
      "토론 히스토리 localStorage 영속화 + Archiver 기반 /api/export ZIP 다운로드로 생성된 랜딩 페이지 즉시 배포 가능",
      "MIT 라이선스 공개 · types.ts 281줄 계약 우선 개발로 3인 병렬 작업 안정화 (해커톤 당일 단일 세션 완성)",
    ],
    details: [
      "Build with TRAE Seoul Hackathon 2026 대상 수상작. '에이전트끼리 토론하면 더 나은 결과가 나오는가'라는 가설을 가장 직관적인 형태로 시연하는 데모를 목표로 했습니다 — 사용자는 토픽 한 줄만 던지면, AI들이 토론하는 모습을 실시간으로 보고, 결론이 나오는 순간 채팅 화면이 동작하는 랜딩 페이지로 변신하는 경험을 합니다.",
      "오케스트레이션은 `orchestrator.ts`의 AsyncGenerator&lt;SSEEvent&gt; 패턴으로 구현됐습니다. 5단계 — 에이전트 생성(GPT-4o JSON) → 30턴 자유 토론(streamSpeak + pickNextSpeaker로 균등 발언 분배) → 토론 요약(JSON) → 최종 결과 합성(JSON) → 랜딩 페이지 생성(streaming) — 가 SSE로 클라이언트에 흘러가고, 프론트엔드는 useReducer로 13종 이벤트를 단일 상태 머신에서 처리합니다. PM과 Designer는 isFixed로 항상 존재하며(Designer는 turn 3에 합류), 그 외 도메인 전문가는 turn 12·22에 확정 교체됩니다.",
      "초기 설계는 라운드제(R1 브레인스토밍 → R2 토론 → R3 수렴) + GPT-4o 풀 HTML 생성이었지만, 두 번의 큰 피봇이 있었습니다. (1) **라운드 → 30턴 자유 토론**: 라운드 전환 로직의 엣지 케이스를 피하고 토론 깊이를 확보하기 위해 turnCount 기반 단일 프롬프트로 단순화. 마지막 5턴(25–29)에는 강제 수렴 프롬프트를 주입해 결론 도출을 보장. (2) **GPT 생성 → 템플릿 즉시 렌더링**: 토론 5–8분에 더해 HTML 생성 30–60초 대기는 데모에서 치명적이었고, GPT-4o가 랜딩페이지 생성을 거부/저품질 반환하는 경우도 있어, `landing-templates.ts`의 9개 템플릿(Glassmorphism / Neobrutalism / Editorial / Minimalism / Dark Neon / Bento Grid / Organic Shapes / Corporate / Gradient Mesh)을 키워드 매칭으로 즉시 선택하는 Primary 경로로 전환. GPT-4o 백그라운드 생성은 fallback으로 남겨둬 이중 경로를 유지합니다.",
      "한 제품 안에서 7개 이상의 멀티 에이전트 디자인 패턴(Orchestrator·Specialist·Persistent Anchor·Spawning·Retirement·Multi-turn Debate·Result Synthesis) + Human-in-the-Loop(결과 반려 시 rejectDebatePrompt로 추가 8턴 토론)을 모두 시연한다는 점이 심사에서 좋게 평가됐습니다. 통신은 SSE 단방향 스트리밍(WebSocket은 양방향이라 오버엔지니어링)으로 단순화했고, types.ts에 Agent · ChatItem · SSEEvent 등 인터페이스 281줄을 먼저 확정해 3인 병렬 개발의 충돌을 최소화했습니다. MIT 라이선스로 공개되어 있습니다.",
    ],
    images: [
      "/projects/trae_hackthon_seoul.png",
      "/projects/wigent/architecture.svg",
    ],
    architecture: {
      image: "/projects/wigent/architecture.svg",
      alt: "Agent Arena — 3-Tier (Browser · Orchestrator · AI) + 30-Turn Debate Timeline + Dual-Path Landing",
      caption:
        "Browser(React 19 useReducer) · Orchestrator(Next.js AsyncGenerator) · AI(GPT-4o) 3-Tier 위에 30턴 토론 타임라인과 Dual-Path 랜딩 생성(템플릿 0초 · GPT-4o 백그라운드)을 결합한 설계 — 라운드제와 GPT 단일 생성에서 피봇한 두 번의 핵심 결정이 그대로 구조에 반영되어 있습니다.",
      description: [
        "Agent Arena의 핵심은 **3-Tier Streaming Architecture + 30-Turn Free Debate + Dual-Path Landing Generation** 입니다. 해커톤 당일 두 번의 큰 피봇(라운드제 → 30턴 자유 토론 / GPT 생성 → 템플릿 즉시 렌더링)이 그대로 구조에 새겨져 있고, 모든 통신이 SSE로 단방향 스트리밍되는 일관된 흐름을 가집니다.",
        "**Browser Layer — React 19 + useReducer.** TopicInput에서 토픽이 들어오면 `useDebate` 훅이 SSE 13종 이벤트를 단일 상태 머신(idle → creating → debating ⇄ retiring → spawning → debating → generating_landing → landing)에서 처리합니다. ChatLayout은 Slack을 메타포로 한 다크테마 UI로 사이드바·채널·아바타·타이핑 인디케이터·입퇴장·시스템 메시지를 시각화하며, 최종 랜딩은 LandingPageView가 iframe sandbox로 격리 렌더링합니다. 토론 히스토리는 localStorage에 영속화되고 결과 반려 시 Human-in-the-Loop 8턴 추가 토론 경로로 진입합니다.",
        "**Orchestrator Layer — AsyncGenerator&lt;SSEEvent&gt;.** `orchestrator.ts`는 5단계 파이프라인(agents_created → 30-turn free debate → summarize → final_result → landing_page)을 AsyncGenerator로 yield하고, `/api/debate`가 이를 SSE 형식으로 스트리밍합니다. 30턴 루프 내부에서는 `pickNextSpeaker`가 발언 횟수 균등 분배를 보장하고, turn 12와 22에서 `doRetireSpawn`이 도메인 전문가를 핸드오프 메시지와 함께 교체합니다. 페이즈(opening/mid/late/closing)는 turnCount로 자동 전환되며 25–29 마무리 단계에서는 강제 수렴 프롬프트를 주입해 발산만 하다 끝나는 문제를 차단합니다.",
        "**Dual-Path Landing Generation.** FINAL_RESULT가 도착하면 **Path 1(Primary)**: 9개 디자인 템플릿(Glassmorphism · Neobrutalism · Editorial · Minimalism · Dark Neon · Bento Grid · Organic Shapes · Corporate · Gradient Mesh) 중 키워드 매칭으로 즉시 렌더링 — 대기 시간 0초. 동시에 **Path 2(Background)**: GPT-4o HTML streaming(180s timeout, t=0.7)이 백그라운드로 진행되지만, 이미 템플릿이 렌더링된 경우 chunk 이벤트는 무시됩니다. 'first arrived wins' 정책으로 데모 안정성과 GPT 거부/저품질 fallback을 동시에 보장하며, `/api/export`는 Archiver로 ZIP 다운로드를 제공해 배포 가능한 정적 페이지를 즉시 내보낼 수 있습니다. MIT · TRAE 2026 Grand Prize.",
      ],
    },
    links: [{ label: "GitHub", url: "https://github.com/wigtn/wigent" }],
  },
  {
    slug: "wigvo",
    title: "WIGVO",
    subtitle: "AI 실시간 PSTN 전화 통역",
    period: "2026.02 - Present",
    role: "팀 개발",
    award: "ACL 2026 System Demonstration 채택",
    description:
      "공중전화망(PSTN) 위에서 양방향 LLM 음성 번역을 수행하는 서버사이드 릴레이. 발신자는 브라우저에서 말하거나 타이핑하고, 수신자는 일반 전화를 받기만 하면 됩니다 — 앱 설치, 통신사 연동, 전용 하드웨어가 모두 불필요합니다.",
    aiModel: "OpenAI Realtime API (GPT-4o) · GPT-4o-mini · Whisper",
    stack: [
      "Python",
      "FastAPI",
      "Next.js 16",
      "React 19",
      "React Native (Expo)",
      "Twilio",
      "Supabase",
      "Docker",
      "Cloud Run",
    ],
    highlights: [
      "OpenAI Realtime 듀얼 세션 + 3단계 에코 게이팅(Echo Gate → RMS Energy → Silero VAD)으로 147건 PSTN 통화에서 자기 강화 번역 루프 0건 달성",
      "Session A E2E 중앙값 555ms (P95 1,169ms) — 인터랙티브 통신 임계값 내",
      "분당 비용 USD 0.28 (통화당 USD 0.41), 전문 전화 통역 서비스(USD 1–3/min) 대비 약 10배 저렴",
      "Echo Gate 활성화 1,046회(avg 7.1/call), Gate Break 354회로 자연스러운 turn-taking 보존, Settling Breakthrough 17회",
      "Voice→Voice / Text→Voice / Full-Agent 3개 모드를 Strategy 패턴으로 분기 — 콜포비아·언어 장애·외국인 등 다중 페르소나 커버",
      "Silero VAD 비대칭 히스테리시스(onset 96ms / offset 480ms)로 speech_stopped 레이턴시 15–72초 → 480ms 단축",
      "15-pattern Whisper hallucination blocklist로 broadcast-style artifacts 100건 차단 (148 instrumented calls 기준)",
      "OpenAI Realtime 세션 끊김 대비 30초 링 버퍼 + Whisper 일괄 재주입 기반 복구, 10초 실패 시 Degraded 모드(STT+Chat) 폴백",
      "Translation Quality (vs. Gemini 2.5 Flash offline ref): en→ko COMET 0.7078 / BLEU 15.9, ko→en COMET 0.6242 / BLEU 17.4",
      "430+ pytest 테스트(단위/통합/E2E) — Twilio 전화 자동 발신 시나리오 포함",
    ],
    details: [
      "기존 스트리밍 음성 번역 시스템(SeamlessM4T, Moshi 등)은 광대역 오디오와 클라이언트측 음향 에코 제거(AEC)를 전제합니다. 그러나 PSTN은 여전히 병원·식당·관공서의 주요 인바운드 채널이며 G.711 μ-law 8kHz 코덱, 80–600ms 지연, AEC 부재라는 제약을 가집니다. 재한 외국인 220만, 콜포비아 Gen-Z 약 400만 등 명확한 수요가 있음에도 소프트웨어만으로 이 문제를 해결한 시스템은 존재하지 않았습니다.",
      "WIGVO는 두 개의 독립적인 OpenAI Realtime 세션을 운영합니다. Session A는 브라우저 PCM16 오디오를 G.711로 변환해 Twilio에 송출하고, Session B는 PSTN G.711 8kHz를 받아 번역된 오디오/자막을 브라우저로 돌려보냅니다. AudioRouter가 Strategy 패턴으로 V2V·T2V·Full-Agent 파이프라인에 이벤트를 분기하며, T2V/Agent 모드의 번역은 GPT-4o-mini Chat Completion(temperature=0)에 위임해 생성적 할루시네이션을 차단합니다.",
      "단순 단일 세션 설계에서 가장 치명적이었던 문제는 자기 강화 번역 루프였습니다. 수신자에게 재생된 TTS가 80–600ms 후 PSTN을 타고 다시 들어와 번역 사이클을 무한 반복하는 현상으로, 게이팅 없이 테스트 통화 10건 중 8건에서 발생했고 Pearson-correlation echo detector를 적용해도 10건 중 3건에서 루프가 재발했습니다(μ-law 비선형 양자화와 가변 지연 때문). Echo Gate는 Session A가 TTS 스트리밍을 시작하면 동적 쿨다운(TTS 길이 + 0.3초 마진) 동안 수신 PSTN 오디오를 μ-law 무음(0xFF)으로 적극 주입해 Realtime API의 server-side VAD가 silence-to-speech transition을 정상 관측하도록 유지합니다. 뒤이은 RMS Energy Gate(에코 윈도우 ≥400 RMS만 통과)와 Silero VAD가 잔여 잡음을 걸러 147건 completed PSTN 통화에서 에코 루프 0건을 달성했습니다.",
      "또한 3단계 가드레일(L1 통과 / L2 반말 백그라운드 교정 / L3 욕설·유해 콘텐츠 차단 + 필러 음성)로 95%+ 케이스에서 추가 지연 0ms를 유지했습니다. 평가는 2026.02.23–27 5일간 155건 PSTN 통화(148 instrumented, 147 completed)에서 수행되었으며 — Session A E2E P50 555ms(P95 1,169ms)로 인터랙티브 통신 임계값 내, Session B는 STT(Whisper)가 평균 3,544ms를 차지해 P50 2,684ms(전문 동시통역 ear-voice span 2–5초의 하한)였습니다. 220.2분 통화에서 1,870,657 tokens / USD 61.26을 소비해 분당 USD 0.28, 통화당 USD 0.41로 전문 통역 서비스(USD 1–3/min) 대비 약 10배 저렴합니다. ACL 2026 System Demonstrations에 'WIGVO: Real-Time Bidirectional Speech Translation over Legacy PSTN Calls via Dual-Session Echo Gating'으로 채택되었습니다.",
    ],
    images: [
      "/projects/wigvo/app-screenshot.png",
      "/projects/wigvo/system-architecture-1.png",
      "/projects/wigvo/echo-gate-flow-1.png",
      "/projects/wigvo/technical-guide-2.png",
      "/projects/wigvo/technical-guide-5.png",
      "/projects/wigvo/technical-guide-6.png",
    ],
    architecture: {
      image: "/projects/wigvo/system-architecture-1.png",
      alt: "WIGVO Dual-Session Architecture — Session A(발신용) / Session B(수신용) + 3-Stage Echo Gate",
      caption:
        "Dual-Session 아키텍처와 3-Stage Echo Gate — 발신용(Session A)과 수신용(Session B) OpenAI Realtime 세션을 완전히 분리하고, Session B 입력 경로에 Echo Gate → RMS Energy Gate → Silero VAD를 직렬 배치해 PSTN의 echo-induced 번역 루프를 근본 차단합니다.",
      description: [
        "WIGVO의 핵심은 **Dual-Session 아키텍처와 3-Stage Echo Gate**입니다. 광대역 오디오와 클라이언트측 AEC를 전제로 한 기존 음성 번역 시스템(SeamlessM4T, Moshi 등)이 PSTN 환경에서 무너지는 두 가지 원인 — **자기 강화 번역 루프**와 **가변 80–600ms 지연** — 을 해결하기 위해, 시스템을 **Directional Separation · Deterministic Silence Injection · Energy + Neural Gating** 세 축으로 분리해 각 단계마다 가장 적합한 결정 메커니즘을 배치했습니다.",
        "**Directional Separation — Session A / Session B 분리.** 발신자용(Session A)과 수신자용(Session B)으로 OpenAI Realtime API 세션을 두 개 독립 운영합니다. Session A는 브라우저 PCM16(16kHz)을 G.711 μ-law(8kHz)로 변환해 Twilio Media Stream으로 송출하고, Session B는 PSTN G.711(8kHz)을 받아 번역된 오디오/자막을 브라우저로 돌려보냅니다. AudioRouter가 Strategy 패턴으로 V2V·T2V·Full-Agent 파이프라인을 분기하며, T2V/Agent 모드 번역은 GPT-4o-mini Chat Completion(temperature=0)에 위임해 Realtime API의 생성적 hallucination을 차단합니다. 단일 세션 설계에서는 echo loop가 10건 중 8건에서 발생했지만, 방향성 분리만으로 루프의 토대가 사라집니다.",
        "**Deterministic Silence Injection — Stage 0 Echo Gate.** Session A의 TTS 재생 동안 Session B 입력 오디오를 G.711 μ-law 무음 신호(0xFF)로 **적극 대체**합니다. 단순히 audio를 drop하면 Realtime API의 server-side VAD가 silence-to-speech transition을 관측하지 못해 \"speaking\" 상태에 무한정 갇히는데, 무음 신호를 결정론적으로 주입함으로써 VAD가 정상적으로 음성 감지를 재개합니다. 초기 프로토타입의 Pearson-correlation echo detector는 μ-law 비선형 양자화와 가변 지연 때문에 10건 중 3건에서 루프가 재발해 폐기했습니다.",
        "**Energy + Neural Gating — Stage 1 RMS / Stage 2 Silero VAD.** Stage 0를 통과한 잔여 신호는 RMS Energy Gate(echo window ≥400 RMS, callee > caller > AI TTS 3-tier interrupt priority)로 일반적 echo 에너지 대역(100–400 RMS)을 차단한 뒤, Silero VAD가 8kHz PSTN audio를 zero-order hold로 16kHz upsampling해 신경망 기반 최종 판별합니다. 비대칭 히스테리시스(onset 96ms / offset 480ms)로 server VAD의 speech_stopped 레이턴시를 15–72초 → 480ms로 단축하고, 147건 completed call에서 echo loop 0건 · gate break 354회로 자연스러운 turn-taking을 보존했습니다. 이 3단계 결합으로 분당 USD 0.28에 P50 555ms를 달성해 ACL 2026 System Demonstrations에 채택되었습니다.",
      ],
    },
    links: [
      { label: "GitHub", url: "https://github.com/wigtn/wigvo-v2" },
      { label: "Live Demo", url: "https://wigvo.run" },
      { label: "Demo Video", url: "https://youtu.be/_ixVEnHJxjk" },
    ],
  },
  {
    slug: "wigss",
    title: "WIGSS",
    subtitle: "Style Shaper — Visual AI Code Refactoring",
    period: "2026.03 - Present",
    role: "팀 개발",
    description:
      "실제로 떠 있는 dev 서버 위에 항시 연결된 AI 에이전트를 띄워, UI 컴포넌트를 드래그·리사이즈하면 소스의 Tailwind 클래스가 결정론적으로 수정되는 비주얼 리팩토링 도구. `npx wigss --port 3000` 한 줄로 실행되는 npm 패키지(Trae.ai 해커톤 2026 출품작).",
    aiModel: "GPT-4o (function calling) + Direct Tailwind Mapping",
    stack: [
      "TypeScript",
      "Next.js (App Router)",
      "ws (WebSocket)",
      "OpenAI GPT-4o",
      "Zustand",
      "Tailwind CSS",
      "commander (CLI)",
      "Node fs",
      "pnpm Workspaces",
      "Vitest",
    ],
    highlights: [
      "5가지 자율 에이전트 행동 — 컴포넌트 자동 인식 / 디자인 제안(신뢰도 점수) / 실시간 편집 피드백 / 채팅 상담 / 코드 리팩토링 — 도구가 아닌 항시 연결 에이전트로 동작",
      "WebSocket 기반 양방향 스트리밍(`ws-server.ts` + mutex 큐) — 드래그/리사이즈 이벤트가 실시간으로 GPT-4o에 흘러가고 'X px 차이납니다, 맞출까요?' 같은 능동적 제안이 다시 흘러옴",
      "AI 없는 결정론적 리팩토링 — Save 시 `fullClassName` 기반 줄 단위 매칭 + Tailwind 토큰 매핑(TW_MAP)으로 diff 생성, fs로 직접 적용. 코드 변경의 안정성과 예측 가능성을 AI 외부에 둠",
      "iframe-overlay 비주얼 에디터 — dev 서버를 iframe으로 감싸고 오버레이에서 컴포넌트 박스를 렌더, 30fps 스로틀로 라이브 미리보기 + Undo/Redo 50단계 히스토리",
      "보안 가드 — origin 검증, rate limit, 경로 순회 공격 방지, diff 검증(className/style만, JS 변경 거부), `.bak` 백업 자동 생성으로 사용자 코드 보호",
      "Zero-install 배포 — `npx wigss@latest --port 3000` 한 줄로 즉시 실행, `--demo` 플래그로 기존 프로젝트 없이도 체험 가능, 키 미제공 시 대화형 입력",
      "npm 패키지 공식 배포 (`wigss`) + Apache 2.0 라이선스, Vitest 단위 테스트 포함",
    ],
    details: [
      "Trae.ai 해커톤 2026 ('에이전트' 주제) 출품작. 출발점은 코딩 에이전트(Cursor/Claude Code/Trae)로 화면을 대충 만드는 건 잘 되지만 '디자인을 다듬는 단계'는 여전히 고통이라는 관찰이었습니다 — '이 카드를 좀 더 크게'를 정확히 말로 옮기기 어렵고, CSS 수정 → 새로고침 → 확인 루프는 느립니다. WIGSS는 Figma 없이, CSS 수동 수정 없이, 그냥 화면에서 드래그하면 소스가 바뀌는 경험을 목표로 합니다.",
      "핵심 아키텍처는 두 개의 구분 — '제안과 대화'는 AI(GPT-4o function calling)에 맡기되, '실제 코드 변경'은 결정론적 매핑(`refactor-client.ts`)으로 처리합니다. 드래그 후 Save를 누르면 `fullClassName`을 키로 소스 줄을 매칭하고 Tailwind 토큰 변환표(TW_MAP)로 px↔클래스를 양방향 변환해 CodeDiff[]를 생성합니다. 이 분리 덕분에 AI가 환각해도 사용자 파일이 망가지지 않습니다.",
      "통신 계층은 항시 연결 WebSocket(`ws` 포트 4001) + mutex 큐로 동시성 안전 — 일반 AI 도구가 'request → response' 모델이라면 WIGSS는 항시 연결 + 능동적 개입에 가깝습니다. 드래그/리사이즈 이벤트가 30fps로 스로틀되어 흐르고, GPT-4o가 'X px 차이납니다, 맞출까요?' 같은 정렬 보정 제안을 실시간으로 돌려줍니다. Editor/Agent 두 개의 Zustand 스토어로 상태가 분리되어 있고, 50단계 Undo/Redo 히스토리를 지원합니다.",
      "운영 안전성은 다층 가드 — origin 검증, rate limit, 경로 순회 공격 방지, diff 검증(className/style만 허용·JS 변경 거부), `.bak` 자동 백업으로 사용자 코드 변경을 안전 범위 안에 가둡니다. 배포는 `npx wigss --port 3000` 한 줄 실행을 목표로 commander 기반 CLI 진입점과 Next.js instrumentation으로 부팅 시 WS 서버 + 에이전트를 자동 기동합니다. `--demo`로 데모 페이지 즉시 체험 가능, npm 패키지로 정식 배포됐습니다.",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/wigtn/wigss" },
      { label: "npm", url: "https://www.npmjs.com/package/wigss" },
    ],
    image: "/projects/wigss-npm.png",
  },
  {
    slug: "timelens",
    title: "TimeLens",
    subtitle: "AI 문화유산 컴패니언",
    period: "2026.03 - Present",
    role: "팀 개발",
    description:
      "카메라를 유물에 비추면 Gemini Live 큐레이터가 음성으로 역사적 맥락을 설명하고, 손상된 유물의 복원 이미지와 일러스트 방문 다이어리까지 실시간 생성하는 박물관 컴패니언 앱. Gemini Live Agent Challenge 출품작.",
    aiModel: "Gemini Live API · Gemini 2.5 Flash · Gemini 3 Pro Image",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript 5",
      "Tailwind CSS 4",
      "Google ADK",
      "@google/genai",
      "Firebase Firestore",
      "Google Places API",
      "Cloud Run (Seoul)",
      "Docker",
    ],
    highlights: [
      "Gemini Live API(`gemini-2.5-flash-native-audio`) WebSocket 세션으로 PCM16 16kHz 마이크 + 1fps 카메라 프레임을 동시 스트리밍 — 별도 인텐트 분류기 없이 모델이 4개 Function Declaration으로 의도 라우팅",
      "듀얼 파이프라인 — Live(스트리밍 음성·영상) + REST(이미지 생성·외부 API) 분리로 저지연과 무거운 작업의 책임 분리",
      "`recognize_artifact`만 Live 세션 내부에서 Google Search Grounding과 함께 처리, `generate_restoration` / `discover_nearby` / `create_diary`는 REST 엔드포인트로 위임",
      "Google GenAI SDK + ADK 이중 경로 — WebSocket 가용 시 Live 메인, 폴백은 ADK `LlmAgent` 5개(orchestrator + curator/restoration/discovery/diary)로 텍스트 에이전트 오케스트레이션",
      "Firebase Auth(익명) + Firestore에 세션·다이어리 저장, Google Places API(New)로 GPS 기반 박물관 검색 및 주변 문화유산 추천",
      "Cloud Run(asia-northeast3 서울) + GitHub Actions 자동 배포, Ephemeral Token 발급 라우트로 클라이언트 키 노출 없이 Gemini 세션 생성",
    ],
    details: [
      "TimeLens는 박물관 방문이라는 짧은 문맥 안에서 음성 대화·시각 인식·이미지 생성·기록 보존을 하나의 흐름으로 연결합니다. 사용자는 박물관을 선택해 세션을 열고(Search Grounding으로 오늘의 전시까지 반영된 인사를 받음), 유물을 카메라로 비추며 자연스럽게 질문하면 AI 큐레이터가 시대·문명·맥락을 설명하고, '원래 모습 보여줘'로 복원 이미지를, '다이어리 만들어줘'로 일러스트 방문 기록을 즉석에서 만들어 줍니다.",
      "핵심 아키텍처는 듀얼 파이프라인입니다. 파이프라인 1은 앱 사용 내내 열려 있는 Gemini Live WebSocket 세션 — 마이크 PCM16/16kHz 오디오와 카메라 JPEG/1fps 프레임이 동시 송출되고, 모델이 실시간 음성 응답과 Function Call을 반환합니다. 파이프라인 2는 이미지 생성·Places 호출 같은 무거운 작업을 처리하는 Next.js API 라우트로, Function Call이 이 라우트를 트리거합니다. 인텐트 분류기를 별도로 두지 않고 모델의 도구 선택 능력에 라우팅을 위임한 것이 핵심 결정.",
      "Function Declaration은 4개 — `recognize_artifact`만 카메라 프레임이 이미 스트리밍 중이라는 점을 활용해 Live 세션 안에서 Google Search Grounding과 함께 처리하고(REST 호출 없음), 나머지 3개(`generate_restoration` → Gemini 2.5 Flash Image, `discover_nearby` → Places API, `create_diary` → Gemini 3 Pro Image + Firestore)는 REST로 위임됩니다. WebSocket을 사용할 수 없는 환경에서는 `@google/adk` 기반의 텍스트 에이전트 오케스트레이션(orchestrator + 4 전문가)로 폴백되며, 두 경로 모두 동일한 백엔드 API를 공유합니다.",
      "프로덕션은 Cloud Run 서울 리전에 GitHub Actions로 자동 배포되고, 클라이언트는 직접 Gemini 키를 들고 있지 않습니다 — `POST /api/session`이 Ephemeral Token을 발급해 보안과 비용 통제를 동시에 잡습니다. Firebase Firestore에는 세션·방문 기록·공유 가능한 다이어리가 저장되며, Firebase 키 없이도 앱은 정상 동작하도록 그레이스풀 디그레이드 처리됐습니다.",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/wigtn/wigtn-timelens" },
      { label: "Demo Video", url: "https://youtu.be/ITaMtVO5jFg" },
    ],
  },
  /*
  {
    title: "WIGEX",
    subtitle: "해외여행 가계부 (개발 중)",
    period: "2026.03 - In Development",
    role: "팀 개발",
    description:
      "해외 여행 중 지출을 18개 통화 실시간 환율로 즉시 기록하고, 영수증을 OCR로 자동 입력하며, 오프라인에서도 동작하는 가계부 앱. Mobile · API · Admin · Shared 4개 워크스페이스를 Monorepo + MSA 패턴으로 묶어 동일 저장소에서 통합 관리합니다.",
    aiModel: "wigtn-coding (Claude Code) · OCR API",
    stack: [
      "React Native 0.81",
      "Expo 54",
      "Expo Router 6",
      "NestJS 10",
      "Next.js 15",
      "React 19",
      "TypeScript 5.9",
      "Prisma 6",
      "PostgreSQL 16",
      "AWS SQS",
      "Zustand 5",
      "Tailwind CSS",
      "pnpm Workspaces",
      "Turbo",
      "Docker",
    ],
    highlights: [
      "Monorepo + MSA 패턴 — apps/mobile (Expo), apps/api (NestJS), apps/admin (Next.js), packages/shared(공용 타입·상수) 4 워크스페이스를 pnpm Workspaces + Turbo로 빌드 그래프 관리",
      "오프라인 우선 모바일 — expo-sqlite 로컬 DB에 지출을 즉시 기록하고, /sync/push & /sync/pull 엔드포인트로 서버와 양방향 동기화 (네트워크 복구 시 자동 머지)",
      "영수증 AI OCR — apps/api의 ai 모듈이 영수증 사진을 받아 항목·금액·통화를 자동 추출, AWS SQS로 비동기 큐잉해 모바일 응답 지연 방지",
      "18개 통화 실시간 환율 환산 — exchange-rate 모듈에서 환율 캐싱, 식비·교통·쇼핑·숙박·관광·기타 6 카테고리로 통계·캘린더·파이차트 자동 집계",
      "JWT 기반 Passport.js 인증 + class-validator 입력 검증 + Swagger(OpenAPI) 문서 자동 생성, expo-secure-store로 모바일 토큰 안전 저장",
      "관리자 대시보드 — Next.js 15 + Radix UI + Recharts로 회원/AI 사용량/API 트래픽/시스템 상태/설정 5개 패널 운영",
      "Docker Compose 환경 분리(local/dev/prod) + GitHub Actions CI/CD로 모노레포 단일 파이프라인 자동 배포",
    ],
    details: [
      "현재 활발히 개발 중인 프로젝트입니다. 해외 여행 중 가장 마찰이 큰 두 지점 — '환율 계산이 귀찮아서 기록을 미루다 까먹는' 경험과 '영수증을 한 장씩 수동 입력하는 피로' — 를 모바일 환경에서 한 번에 해소하는 것이 목표입니다. 18개 통화 실시간 환율과 영수증 OCR 자동 입력으로 기록 마찰을 최소화하고, 오프라인 우선 설계로 비행기·해외 데이터 환경에서도 안정적으로 동작하도록 만들고 있습니다.",
      "코드 구조는 의도적으로 Monorepo + MSA 패턴 — 모놀리식이 아니라 각 서비스(Mobile/API/Admin)가 독립적으로 배포 가능한 MSA이지만, packages/shared로 공용 타입과 상수를 통합 관리해 'Single Source of Truth + Atomic Change' 두 이점을 동시에 노립니다. 모바일에서 정의한 Expense 타입을 API와 Admin이 그대로 import하므로 한 번의 PR로 3개 앱이 동기화됩니다.",
      "백엔드는 NestJS 10 + Prisma 6 + PostgreSQL 16로 도메인 모듈(auth · user · trip · expense · wallet · exchange-rate · ai · sync · queue · health)을 분리했고, AI OCR과 같은 무거운 작업은 AWS SQS로 비동기 큐잉해 모바일 응답 시간을 지키도록 설계했습니다. 모바일은 Expo Router 6 파일 기반 라우팅 + Zustand 5 상태 관리 + expo-sqlite 로컬 DB로 오프라인 캐시 + 동기화 흐름을 단순화했습니다.",
      "운영 측면에서는 Docker Compose 환경 분리(local/dev/prod)와 GitHub Actions로 단일 파이프라인을 구성, Swagger 자동 문서화와 Admin 대시보드(회원·AI 사용량·트래픽·시스템 상태)로 관측성을 확보합니다. 현재 핵심 흐름(여행 생성 → 지출 기록 → OCR → 통계)이 동작하는 단계이며, 다국어 / 결제 연동 / 영수증 자동 분류 정확도 개선 등이 로드맵에 있습니다.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/wigtn/wigex" }],
  },
  */
];
