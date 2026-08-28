// skills.js

const skillCategories = [
  {
    id: "backend",
    label: "Backend",
    description: "각 항목은 그 기술을 사용한 프로젝트를 가리킨다. 담당 범위는 프로젝트 항목에 적혀 있다.",
    skills: [
      { id: "java",        name: "Java",            note: "TripCrew Java 17 · YORR" },
      { id: "springboot",  name: "Spring Boot",     note: "TripCrew Spring Boot 3 · YORR" },
      { id: "security",    name: "Spring Security", note: "TripCrew 인증" },
      { id: "jpa",         name: "JPA",             note: "YORR" },
      { id: "mybatis",     name: "MyBatis",         note: "TripCrew" },
      { id: "jwt",         name: "JWT",             note: "TripCrew, JWT + Refresh Token" },
      { id: "oauth",       name: "OAuth 2.0",       note: "TripCrew Kakao·Naver 소셜 로그인" },
      { id: "react",       name: "React",           note: "yorr-arcade", subGroup: "frontend" },
      { id: "typescript",  name: "TypeScript",      note: "yorr-arcade", subGroup: "frontend" },
      { id: "threejs",     name: "Three.js",        note: "yorr-arcade 3D 렌더링", subGroup: "frontend" },
      { id: "vite",        name: "Vite",            note: "yorr-arcade", subGroup: "frontend" },
      { id: "vue",         name: "Vue 3",           note: "TripCrew", subGroup: "frontend" },
    ],
  },
  {
    id: "realtime",
    label: "실시간 통신",
    description: "게임 상태 동기화와 음성 채널을 분리해 설계한 경험",
    skills: [
      { id: "websocket", name: "WebSocket", note: "YORR raw handler(GameWebSocketHandler) · TripCrew STOMP" },
      { id: "stomp",     name: "STOMP",     note: "TripCrew 공동 편집, 인메모리 SimpleBroker · 단일 인스턴스" },
      { id: "webrtc",    name: "WebRTC",    note: "YORR 풀메시 P2P 음성, ICE 후보만 서버 중계" },
      { id: "coturn",    name: "coturn",    note: "YORR TURN, NAT 직결 실패 시에만 중계" },
      { id: "socketio",  name: "Socket.IO", note: "yorr-arcade 실시간 이벤트 동기화" },
    ],
  },
  {
    id: "infra",
    label: "인프라 · 데이터베이스",
    description: "실배포 환경 구성과 형상 관리",
    skills: [
      { id: "mysql",   name: "MySQL",          note: "TripCrew MySQL 8 · YORR" },
      { id: "redis",   name: "Redis",          note: "TripCrew, Docker Compose 4컨테이너 구성 요소" },
      { id: "flyway",  name: "Flyway",         note: "TripCrew, DB 마이그레이션 V1~V17" },
      { id: "docker",  name: "Docker Compose", note: "TripCrew 4컨테이너(MySQL·Redis·Backend·Caddy)" },
      { id: "caddy",   name: "Caddy",          note: "TripCrew 리버스 프록시, HTTPS 운영" },
      { id: "ec2",     name: "AWS EC2",        note: "TripCrew · YORR 라이브 운영" },
      { id: "git",     name: "Git · GitLab",   note: "YORR, 협업 컨벤션(CONTRIBUTING.md) · MR 21건 통합" },
      { id: "jira",    name: "Jira",           note: "YORR, 이슈 · 일정 · 릴리스 관리" },
    ],
  },
  {
    id: "data",
    label: "데이터 · ML",
    description: "각 항목은 그 기술을 사용한 프로젝트를 가리킨다. 담당 범위는 프로젝트 항목에 적혀 있다.",
    skills: [
      { id: "python",   name: "Python",            note: "달리셔스 · 무신사" },
      { id: "pandas",   name: "Pandas",            note: "달리셔스 · 무신사" },
      { id: "sklearn",  name: "Scikit-learn",      note: "달리셔스 · 무신사" },
      { id: "pyspark",  name: "PySpark",           note: "달리셔스 · 마포구 카페 분석" },
      { id: "rf",       name: "Random Forest",     note: "무신사, 3진 분류 채택 모델" },
      { id: "xgboost",  name: "XGBoost",           note: "무신사, 비교 모델" },
      { id: "keras",    name: "Keras",             note: "무신사, GRU 리뷰 긍부정 분류" },
      { id: "cosine",   name: "Cosine Similarity", note: "달리셔스 Content-Based 추천" },
      { id: "selenium", name: "Selenium",          note: "무신사 데이터 수집" },
      { id: "bs4",      name: "BeautifulSoup",     note: "무신사 데이터 수집" },
      { id: "devtools", name: "DevTools (Network)", note: "무신사, HTTP 요청 패턴 추적" },
    ],
  },
];

export { skillCategories };
