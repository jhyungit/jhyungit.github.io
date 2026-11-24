// skills.js
// note 형식: "프로젝트 — 그 프로젝트에서의 사실". 사실이 없으면 프로젝트명만 쓴다.
// 여러 프로젝트는 " · "로 잇는다. 근거는 PROFILE.md §2·§3 뿐이다.
// 현재 화면에는 기술 이름 pill만 보인다. note는 나중에 쓰려고 남겨 둔 데이터다.
// primary: 대표 프로젝트의 핵심 성과에 쓴 기술 (skillIntro가 설명한다)

const skillIntro =
  "강조 표시는 대표 프로젝트의 핵심 성과에 쓴 기술입니다";

const skillCategories = [
  {
    id: "backend",
    label: "Backend",
    skills: [
      { id: "java",        name: "Java",            note: "TripCrew (Java 17) · YORR", primary: true },
      { id: "springboot",  name: "Spring Boot",     note: "TripCrew (Spring Boot 3) · YORR", primary: true },
      { id: "security",    name: "Spring Security", note: "TripCrew — 인증" },
      { id: "jpa",         name: "JPA",             note: "YORR" },
      { id: "mybatis",     name: "MyBatis",         note: "TripCrew", primary: true },
      { id: "jwt",         name: "JWT",             note: "TripCrew — JWT + Refresh Token" },
      { id: "oauth",       name: "OAuth 2.0",       note: "TripCrew — Kakao·Naver 소셜 로그인" },
    ],
  },
  {
    id: "realtime",
    label: "실시간 통신",
    skills: [
      { id: "websocket", name: "WebSocket", note: "YORR — raw handler (GameWebSocketHandler) · TripCrew — STOMP", primary: true },
      { id: "stomp",     name: "STOMP",     note: "TripCrew — 공동 편집, 인메모리 SimpleBroker · 단일 인스턴스" },
      { id: "webrtc",    name: "WebRTC",    note: "YORR — 풀메시 P2P 음성, ICE 후보만 서버 중계", primary: true },
      { id: "coturn",    name: "coturn",    note: "YORR — TURN, NAT 직결 실패 시에만 중계" },
      { id: "socketio",  name: "Socket.IO", note: "yorr-arcade — 실시간 이벤트 동기화" },
    ],
  },
  {
    id: "infra",
    label: "인프라 · DB · 협업",
    skills: [
      { id: "mysql",   name: "MySQL",          note: "TripCrew (MySQL 8) · YORR", primary: true },
      { id: "redis",   name: "Redis",          note: "TripCrew — Docker Compose 4컨테이너 구성 요소" },
      { id: "flyway",  name: "Flyway",         note: "TripCrew — DB 마이그레이션 V1~V17" },
      { id: "docker",  name: "Docker Compose", note: "TripCrew — 4컨테이너 (MySQL·Redis·Backend·Caddy)" },
      { id: "caddy",   name: "Caddy",          note: "TripCrew — 리버스 프록시, HTTPS 운영" },
      { id: "ec2",     name: "AWS EC2",        note: "TripCrew · YORR — 라이브 운영" },
      { id: "git",     name: "Git · GitLab",   note: "YORR — 협업 컨벤션(CONTRIBUTING.md)" },
      { id: "jira",    name: "Jira",           note: "YORR — 이슈·일정·릴리스 관리" },
    ],
  },
  {
    id: "frontend",
    label: "프론트엔드",
    skills: [
      { id: "react",       name: "React",      note: "yorr-arcade" },
      { id: "typescript",  name: "TypeScript", note: "yorr-arcade" },
      { id: "threejs",     name: "Three.js",   note: "yorr-arcade — 3D 렌더링" },
      { id: "vite",        name: "Vite",       note: "yorr-arcade" },
      { id: "vue",         name: "Vue 3",      note: "TripCrew" },
    ],
  },
  // 데이터·ML은 백엔드 뒤에 둔다 (PROFILE.md §5)
  {
    id: "data",
    label: "데이터 · ML",
    skills: [
      { id: "python",   name: "Python",             note: "달리셔스 · 무신사", primary: true },
      { id: "pandas",   name: "Pandas",             note: "달리셔스 · 무신사" },
      { id: "sklearn",  name: "Scikit-learn",       note: "달리셔스 · 무신사" },
      { id: "pyspark",  name: "PySpark",            note: "달리셔스 · 마포구 카페 분석" },
      { id: "rf",       name: "Random Forest",      note: "무신사 — 3진 분류 채택 모델" },
      { id: "xgboost",  name: "XGBoost",            note: "무신사 — 비교 모델" },
      { id: "keras",    name: "Keras",              note: "무신사 — GRU 리뷰 긍부정 분류" },
      { id: "cosine",   name: "Cosine Similarity",  note: "달리셔스 — Content-Based 추천" },
      { id: "selenium", name: "Selenium",           note: "무신사 — 데이터 수집" },
      { id: "bs4",      name: "BeautifulSoup",      note: "무신사 — 데이터 수집" },
    ],
  },
];

export { skillIntro, skillCategories };
