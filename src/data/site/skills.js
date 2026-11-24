// src/data/site/skills.js — #skill 「기술」
// 근거: REDESIGN_BRIEF.md §6.7 (이력서와 같은 6묶음). 강조 표시(primary)와 숨은 note는 없앤다.
// LightGBM의 근거는 PROFILE.md 「기술 스택 근거 — 프로젝트 밖」. 회사명은 쓰지 않는다.

const skillGroups = [
  {
    id: "backend",
    label: "Backend",
    desc: "Spring Boot 기반 서버 개발 · REST API · 인증",
    items: ["Java", "Spring Boot", "Spring Security", "MyBatis", "JPA", "REST API", "JWT"],
  },
  {
    id: "database",
    label: "Database & Query",
    desc: "쿼리 최적화 · 인덱스 설계 · 스키마 관리",
    items: ["MySQL", "Redis", "SQL (SQLD)", "EXPLAIN·인덱스 최적화", "복합 인덱스 설계", "Flyway"],
  },
  {
    id: "realtime",
    label: "Realtime",
    desc: "실시간 통신 규격 설계 · 양방향 통신 · P2P",
    items: ["WebSocket (STOMP)", "WebSocket (raw handler)", "WebRTC", "coturn TURN", "Socket.IO", "프로토콜 계약 설계"],
  },
  {
    id: "ai",
    label: "AI-Assisted Development",
    desc: "AI 도구 기반 개발 워크플로 구성 · 검증",
    items: ["Claude Code", "MCP (Jira · Notion)", "프롬프트 엔지니어링", "CLAUDE.md 규칙 정의"],
  },
  {
    id: "infra",
    label: "Infra & Tools",
    desc: "컨테이너 · 배포 · 협업 환경 구성",
    items: ["Docker / Compose", "AWS EC2", "Caddy", "Git / GitLab", "Vue 3", "React / TypeScript", "Notion / Jira"],
  },
  {
    id: "data",
    label: "Data & ML",
    desc: "데이터 수집 · EDA · 모델링 (ML/DL)",
    items: ["Python", "Pandas", "Scikit-learn", "PySpark", "Random Forest", "LightGBM", "PyTorch / TensorFlow", "Cosine Similarity"],
  },
];

export { skillGroups };
