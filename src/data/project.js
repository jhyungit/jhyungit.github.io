//project.js
import nyamCard from "../assets/project-photo/nyam_card.webp";
import nyamModal from "../assets/project-photo/nyam_modal.png";
import pysparkCard from "../assets/project-photo/pyspark_card.webp";
import pysparkModal from "../assets/project-photo/pyspark_modal.png";

import daliImage from "../assets/project-photo/dali.webp";
import daliHero from "../assets/project-photo/dali-hero.webp";

import ibkImage from "../assets/project-photo/ibk.webp";
import ibkPos from "../assets/project-photo/ibkPos.webp";
import ibkBank from "../assets/project-photo/ibkBank.webp";
import ibkProduct from "../assets/project-photo/ibkProduct.webp";
import ibkPay from "../assets/project-photo/ibkPay.webp";
import ibkChang1 from "../assets/project-photo/ibkChang1.webp";
import ibkChang2 from "../assets/project-photo/ibkChang2.webp";
import ibkBoard1 from "../assets/project-photo/ibkBoard1.webp";
import ibkBoard2 from "../assets/project-photo/ibkBoard2.webp";

import mlbImage from "../assets/project-photo/mlb.webp";
import mlbHero from "../assets/project-photo/mlb2.png";

import tripcrewCard from "../assets/project-photo/tripcrew-card.webp";
import tripcrewHero from "../assets/project-photo/tripcrew-hero.webp";

import yorrCard from "../assets/project-photo/yorr-card.webp";
import musinsaCard from "../assets/project-photo/musinsa-card.webp";

const projectCategories = [
  // ── YORR ─────────────────────────────────────────────
  {
    id: "yorr",
    featured: 1,
    title: "YORR",
    image: yorrCard,
    subtitle: "실시간 웹 파티게임",
    period: "2026.07–2026.08",
    role: "PM/팀장 · 실시간 통신 설계",
    teamSize: "6인 팀",
    summaryLines: [
      "앱 설치·회원가입 없이 브라우저만으로",
      "스마트폰을 컨트롤러로 쓰는 실시간 파티게임",
    ],
    tags: ["Spring Boot", "WebSocket", "WebRTC"],
    live: { url: "https://yorr.site" },
    award: "SSAFY 우수상 (1등)",
    githubUrls: [
      { label: "Live 데모", url: "https://yorr.site" },
      { label: "GitHub", url: "https://github.com/team-yorr/yorr" },
    ],
    modal: {
      badge: "SSAFY 공통 프로젝트 우수상 (1등)",
      intro: [
        "스마트폰을 게임 컨트롤러로 쓰는 브라우저 기반 실시간 파티게임",
        "SSAFY 공통 프로젝트 · 6인 팀 · PM/팀장",
        "AWS EC2 운영, 2회 배포 (2026.07.30 / 2026.08.05)",
      ],

      myWork: [
        "WebSocket 이벤트 스키마 28종 단독 설계: 공통 봉투(WsEnvelope)를 record + 제네릭으로 정의해 페이로드 타입을 컴파일 시점에 검증. 요청 msgId를 응답에 포함해 요청과 응답을 매칭",
        "WebRTC 풀메시 음성 채팅 BE·FE 전 구간 구현: 음성은 P2P로 분리하고 서버는 ICE 후보 교환만 중계. coturn TURN 연동, CORS·에코 문제 수정, 세션 레지스트리 단위 테스트 작성",
        "12라운드 종료 판정 로직 구현",
        "개인 레포(yorr-arcade)에서 1인 개발한 게임 2종(탁구·석양이 진다)이 팀 서비스 최종 3종 중 2종으로 채택",
        "팀장: 통합 브랜치 보호로 직접 push 차단, Jira 티켓 번호 브랜치·리뷰 승인 규칙을 CONTRIBUTING.md로 문서화. 티켓 번호 없는 MR과 develop 검증 없이 main으로 향한 MR은 반려. Jira 이슈·일정·v0.1 릴리스 관리",
        "AI 개발 워크플로: CLAUDE.md로 팀 코딩 규칙을 고정하고, MCP로 Jira·Notion을 연동해 티켓 발급·문서화 자동화. 생성된 코드는 커밋 단위로 검토 후 반영",
      ],
      teamWork: [
        "Redis 스냅샷 기반 재접속 복구 (재접속 DTO 규격은 본인 정의, 복구 로직은 팀원 구현)",
        "CI/CD(Jenkins), Prometheus·Grafana 모니터링, Micrometer 커스텀 지표",
        "게임 모듈 추상화, Expectimax 요트 AI",
        "서버 권위 주사위 생성",
        "yorr-arcade 게임 2종의 팀 서비스 이식",
      ],

      diagram: "yorr-architecture",

      decisions: [
        {
          title: "판정 권한 분리: 동작 판정은 클라이언트, 점수·상태는 서버",
          problem:
            "센서 조작이 화면에 늦게 반영되면 게임이 성립하지 않는다. 반면 클라이언트가 점수·상태를 결정하면 값을 위조할 수 있다. 지연을 줄이는 방향과 위조를 막는 방향이 충돌했다.",
          rejected: {
            what: "센서 원시값을 전량 서버로 보내 서버에서 판정",
            why: "센서 이벤트는 초당 수십 회 발생한다. 전량 전송하면 네트워크·서버 부하가 커지고 전송 자체가 지연 요인이 된다.",
          },
          chosen:
            "동작 판정은 클라이언트에서 끝내고 판정 결과만 1회 전송한다. 점수·턴 순서·게임 상태 변경은 서버 이벤트로만 가능하도록 스키마를 정의했고, 이 규칙을 28종 전체에 적용했다. 이후 게임을 3종으로 늘릴 때 봉투 구조는 그대로 두고 페이로드만 추가했다.",
          breaksWhen:
            "서버가 받은 값을 검증하지 않으면 계약만으로는 조작을 막지 못한다. 1차 배포(2026.07.30) 뒤 한 사용자가 WebSocket 메시지를 손대면 점수를 바꿀 수 있다고 제보했다. 가장 먼저 고칠 문제로 잡았다. 주사위 눈은 서버가 정하고, 점수는 그 결과로만 계산하도록 팀원과 함께 고쳐 바로 반영했다.",
        },
        {
          title: "음성은 서버를 거치지 않는 WebRTC P2P로 분리",
          problem:
            "플레이어 간 음성 대화가 게임 진행의 일부라 낮은 지연이 필요했다.",
          rejected: {
            what: "서버가 음성 트래픽을 중계",
            why: "경로가 한 단계 늘어 지연이 커지고, 접속자 수에 비례해 서버 대역폭이 증가한다. 음성은 서버가 검증할 데이터가 아니라서 서버를 거칠 이유가 없었다.",
          },
          chosen:
            "게임 상태는 WebSocket으로 서버를 거치고, 음성은 WebRTC P2P로 직접 연결했다. 서버는 연결 수립에 필요한 ICE 후보 교환만 중계한다. NAT 환경에서 직결이 실패하는 경우에 대비해 coturn TURN 서버를 두었다.",
          breaksWhen:
            "풀메시 구조라 참여자가 n명이면 클라이언트마다 n−1개, 방 전체로는 n(n−1)/2개 연결이 생긴다. 한 방에 소수가 모이는 파티게임에서는 문제없지만 인원이 늘면 SFU 구조로 바꿔야 한다.",
        },
      ],

      incidents: [
        {
          title: "대기실 화면 멈춤",
          tag: "QA #110",
          symptom: "대기실에서 화면이 멈춰 게임에 진입할 수 없었다.",
          cause:
            "세션 토큰이 만료된 연결과 정상 연결을 구분하지 않아, 만료된 세션이 유효한 것으로 처리되면서 흐름이 중단됐다.",
          fix: "세션↔playerId 매핑을 정리하고 SESSION_EXPIRED를 별도 상태로 분리했다. 만료가 만료로 전달되면서 클라이언트가 재연결 흐름으로 넘어갈 수 있게 됐다.",
        },
        {
          title: "관전 화면에 결과가 먼저 표시됨",
          tag: "이벤트 계약 수정",
          symptom: "관전자 화면에 주사위를 굴리기 전 결과가 먼저 보였다.",
          cause:
            "조작 시작과 결과 확정을 구분하는 이벤트가 없었다. 화면별로 표시 시점을 늦추면 당장은 해결되지만 다른 이벤트에서도 같은 문제가 반복될 수 있었다.",
          fix: "dice.shake(조작 시작)와 dice.shaken(결과 확정) 이벤트를 새로 정의해 순서를 프로토콜 수준에서 보장했다.",
        },
      ],

      metrics: "yorr-metrics",
      results: [
        "최고 동시접속 80명, 누적 참여 635건 · 플레이 487판",
        "만족도 설문(n=17) 4점 이상 94.1% (5점 58.8% · 4점 35.3%)",
        "1차 배포 피드백을 백로그로 정리해 2차 배포에 반영: 튜토리얼·툴팁, 센서 보정, 버튼 조작 지원",
        "SSAFY 공통 프로젝트 우수상 (1등 · 2026.08)",
      ],
      techStack: [
        "Java", "Spring Boot", "JPA", "WebSocket", "WebRTC", "coturn",
        "MySQL", "Docker", "AWS EC2", "Jira", "GitLab",
      ],
    },
  },

  // ── TripCrew ─────────────────────────────────────────
  {
    id: "tripcrew",
    featured: 2,
    title: "TripCrew",
    image: tripcrewCard,
    subtitle: "여행 계획 협업 플랫폼",
    period: "2026.04–2026.06",
    role: "팀장 · Backend",
    teamSize: "2인 팀",
    summaryLines: [
      "여러 명이 함께 편집하는 여행 계획 플랫폼",
      "30만 건 회원 조회 응답 26배 개선",
    ],
    tags: ["Spring Boot", "MySQL", "Redis"],
    live: { url: "https://tripcrew.duckdns.org" },
    award: "SSAFY 우수상 (2등)",
    githubUrls: [
      { label: "Live 데모", url: "https://tripcrew.duckdns.org" },
      { label: "GitHub", url: "https://github.com/tripcrew/tripcrew" },
    ],
    modal: {
      badge: "SSAFY 관통 프로젝트 우수상 (2등)",
      intro: [
        "여행 일정을 여러 사용자가 실시간으로 함께 편집하는 협업 플랫폼",
        "SSAFY 관통 프로젝트 · 2인 팀 · 팀장, 백엔드 담당",
        "AWS EC2 + Docker Compose 배포, 운영 중",
      ],
      roles: [
        "관리자 회원 조회 API: 서버 사이드 페이징 전환, (role, created_at) 복합 인덱스 설계",
        "공동 편집 동시 수정 충돌 제어: 낙관적 락(version 컬럼), 충돌 시 409. 최신본과 내 수정본 중 고르는 선택 화면까지 구현",
        "인증: JWT + Refresh Token, Kakao/Naver 소셜 로그인(OAuth 2.0). 토큰이 URL·로그에 남지 않도록 일회용 코드(TTL 60초, 조회 즉시 삭제)로 교환",
        "STOMP 기반 실시간 공동 편집 (인메모리 SimpleBroker, 단일 인스턴스)",
        "LLM 출력 검증: Gemini 챗봇 답변에서 장소명을 추출해 관광지 DB와 이름(길이 60% 기준)·지역으로 대조. 검증된 장소만 찜·일정 추가 카드로 노출하는 후처리 계층 단독 구현 (LLM 연동은 팀원 담당)",
      ],

      incidents: [
        {
          title: "관리자 회원 조회 0.473초 → 0.018초",
          tag: "EXPLAIN 실측",
          symptom:
            "초기 구현(AI 코딩 도구로 작성)은 회원 전체를 불러와 애플리케이션 메모리에서 정렬·페이징했다. 화면은 정상이었지만 데이터가 늘면 그대로 느려질 구조였다.",
          cause:
            "먼저 EXPLAIN으로 실행계획을 열었다. 전체 테이블 스캔(type ALL)과 별도 정렬(Using filesort)이었다. 회원 30만 건을 넣고 재니 조회에 0.473초가 걸렸다.",
          fix: "DB에서 페이징하도록 바꾸고 (role, created_at) 복합 인덱스를 추가했다. 등호 조건인 role을 앞에, 정렬 기준인 created_at을 뒤에 두어 인덱스 순서대로 읽고 LIMIT에서 바로 멈추게 했다. EXPLAIN으로 type ref 전환과 filesort 제거를 확인했다.",
        },
      ],

      decisions: [
        {
          title: "공동 편집 충돌 제어에 낙관적 락 선택",
          problem:
            "두 사용자가 같은 일정을 동시에 수정하면 나중에 저장한 쪽이 앞의 수정을 덮어썼다.",
          rejected: {
            what: "비관적 락(수정 시작 시 행 잠금)",
            why: "공동 편집은 같은 항목을 동시에 고치는 경우가 드물다. 드문 충돌을 막으려고 모든 수정에 잠금을 거는 비용이 더 크다고 판단했다.",
          },
          chosen:
            "version 컬럼을 두고 UPDATE 시 version을 조건에 포함했다. 영향받은 행이 0이면 409를 반환한다. 화면은 최신본과 내 수정본 중 고르는 선택 화면을 띄운다.",
          breaksWhen:
            "충돌이 잦은 데이터라면 재조회·재시도가 반복돼 사용자 경험이 나빠진다. 그런 경우에는 비관적 락이나 편집 단위 분할이 필요하다.",
        },
      ],

      results: [
        "회원 조회 30만 건 기준 0.473초 → 0.018초 (약 26배)",
        "한계: OFFSET 10만 이후 페이지는 인덱스 적용 후에도 0.244초. 대용량 페이징은 커서 방식이 필요하다는 것을 실측으로 확인 (미적용)",
        "AWS EC2 + Docker Compose(MySQL·Redis·Backend·Caddy) 배포, Caddy로 HTTPS 적용",
        "SSAFY 관통 프로젝트 우수상 (2등 · 2026.06)",
      ],
      resultBadges: [
        { icon: "👥", label: "2인 팀" },
        { icon: "⚡", label: "응답 26배 개선" },
        { icon: "🏆", label: "SSAFY 우수상" },
      ],
      techStack: ["Java", "Spring Boot", "MyBatis", "MySQL", "Redis", "Vue 3", "JWT", "STOMP", "Flyway", "Docker", "AWS EC2"],
      heroImages: [tripcrewHero],
      diagram: "tripcrew-architecture",
    },
  },

  // ── 무신사 향수 평점 예측 ─────────────────────────────
  {
    id: "musinsa",
    featured: 4,
    title: "무신사",
    image: musinsaCard,
    subtitle: "향수 평점 예측",
    period: "2022–2023 · ASAC",
    role: "데이터 수집·EDA 담당, 모델링 공동",
    teamSize: "6인 팀",
    summaryLines: [
      "HTML 파싱으로 잡히지 않는 리뷰 데이터를",
      "리뷰 요청 API를 찾아내 수집",
    ],
    tags: ["Python", "Random Forest", "크롤링"],
    modal: {
      badge: "3클래스 분류 정확도 84.62%",
      intro: [
        "가격·출고 정보·리뷰를 피처로 향수 평점을 예측하는 분류 모델",
        "T-academy ASAC 과정 · 6인 팀 · 데이터 수집·EDA 담당, 모델링 공동",
      ],
      roles: [
        "리뷰 수집: HTML 파싱으로는 리뷰가 잡히지 않아, 비동기 로딩이라고 가정하고 DevTools Network 탭에서 리뷰 요청 API를 특정. 페이지 파라미터를 포함한 GET 요청을 코드로 재현해 수집",
        "EDA: 리뷰가 없는 상품이 0점으로 처리되어 0점과 5점에 분포가 몰림 (0점 800건 · 5점 337건)",
        "모델링(6인 공동): Random Forest·XGBoost 교차검증, GridSearch 튜닝",
        "리뷰 감성 분류: Keras GRU 72.36% (공동)",
      ],
      decisions: [
        {
          title: "분류 기준 설계: 6클래스 → 2클래스 → 3클래스",
          problem:
            "평점(0~5점)을 6클래스로 분류하면 정확도가 36.15%였다. EDA에서 확인한 분포 편중이 원인이라고 보고 분류 기준을 바꿨다.",
          rejected: {
            what: "0점(리뷰 없음)을 제외하고 1–4점 / 5점 2클래스로 분류",
            why: "정확도는 71.53%로 올랐지만 0점 상품을 모두 버려야 했고, 예측 결과가 5점 여부뿐이라 활용도가 낮았다.",
          },
          chosen:
            "0점 / 1–4점 / 5점 3클래스를 채택했다. 0으로 채워진 결측을 버리지 않고 별도 클래스로 분리했다. Random Forest 교차검증 5회 평균 84.62%(GridSearch 후 86.00%), XGBoost 평균 84.96%(GridSearch 후 86.42%). 피처 중요도는 리뷰 수, 가격 순이었다.",
          breaksWhen:
            "0점 클래스는 리뷰 수가 0인 상품과 사실상 같아서 리뷰 수 피처로 쉽게 구분된다. 정확도 상승분 일부는 여기서 나왔을 수 있다. 또 1–4점을 한 클래스로 묶었으므로 중간 평점 간 차이는 예측하지 못한다. 이 차이가 중요하다면 회귀나 순서형 분류가 맞다.",
        },
      ],
      results: [
        "3클래스 정확도(교차검증 평균): Random Forest 84.62% · XGBoost 84.96%",
        "GridSearch 후: Random Forest 86.00% · XGBoost 86.42%",
        "분류 기준별 RF 정확도: 6클래스(0~5점) 36.15% → 2클래스 71.53% → 3클래스 84.62%",
      ],
      resultBadges: [
        { icon: "👥", label: "6인 팀" },
        { icon: "🎯", label: "정확도 84.62%" },
      ],
      techStack: [
        "Python", "Pandas", "Scikit-learn", "Random Forest", "XGBoost",
        "Selenium", "BeautifulSoup", "Keras (GRU)", "DevTools (Network)",
      ],
    },
  },

  // ── 달리셔스 ─────────────────────────────────────────
  {
    id: "kurrant",
    featured: 3,
    title: "달리셔스",
    image: daliImage,
    subtitle: "메뉴 추천 시스템",
    period: "2023.01–2023.03",
    role: "Content-Based 모델 구현",
    teamSize: "6인 팀",
    summaryLines: [
      "구독형 외식 플랫폼 기업 연계 프로젝트",
      "고객·메뉴 데이터 5만 건 기반 메뉴 추천",
    ],
    tags: ["Python", "sklearn", "Pandas"],
    award: "ASAC 우수상 (6팀 중 1등)",
    githubUrls: [
      { label: "CB 모델 구현", url: "https://github.com/jhyungit/Final_project" },
      { label: "관련 기사", url: "https://www.donga.com/news/It/article/all/20230503/119128322/1" },
    ],
    modal: {
      badge: "ASAC 우수상 (6팀 중 1등)",
      intro: [
        "T-academy ASAC 기업 연계 프로젝트 (기업: 달리셔스, 구독형 외식 플랫폼)",
        "6인 팀 · Content-Based 모델 담당 · 고객사 사무실 3개월 상주",
      ],
      roles: [
        "사내 제공 고객·메뉴 데이터 약 5만 건 전처리·EDA",
        "음식 속성 기반 유사도 행렬 설계, Cosine Similarity 기반 Content-Based 모델 구현",
        "주문 기록이 1건뿐인 사용자도 추천받을 수 있게 설계 (콜드 스타트 대응)",
        "팀 공동: CF·ML·DL 모델과 결합한 하이브리드 추천으로 고도화",
      ],
      results: [
        "운영팀 수동 메뉴 선정 30분 → 3분 (약 90% 단축)",
        "잠재고객 2만 명 규모 고객사 계약 성사에 기여",
        "ASAC 빅데이터 분석가 과정 우수상 (6팀 중 1등)",
      ],
      resultBadges: [
        { icon: "👥", label: "6인 팀" },
        { icon: "⏱", label: "30분 → 3분" },
      ],
      techStack: ["Python", "Pandas", "Scikit-learn"],
      heroImages: [daliHero],
    },
  },

  // ── 냐암냐암 ─────────────────────────────────────────
  {
    id: "capstone1",
    featured: false,
    title: "냐암냐암",
    image: nyamCard,
    subtitle: "캡스톤디자인 1",
    role: "조장 · 구현·DB·발표",
    teamSize: "3인 팀",
    summaryLines: [
      "대학생을 위한 맛집 웹 사이트",
      "PHP + 관계형 DB",
    ],
    tags: ["PHP", "관계형 DB"],
    modal: {
      badge: "웹 서비스",
      intro: [
        "캡스톤디자인 1 · 3인 팀 · 조장",
        "PHP + 관계형 DB 기반 맛집 웹 사이트",
      ],
      roles: [
        "조장: 일정 관리, 역할 분담",
        "웹 페이지 구현, 리뷰 기능용 DB 설계",
        "DB 경험이 적은 팀원과 스키마 설계·SQL을 단계별로 함께 학습해, 전원이 리뷰 기능 구현에 참여",
        "최종 발표",
      ],
      results: ["리뷰 기능을 포함한 맛집 웹 사이트 완성"],
      resultBadges: [
        { icon: "👥", label: "3인 팀" },
        { icon: "🗄", label: "DB 설계" },
      ],
      techStack: ["PHP", "관계형 DB"],
      heroImages: [nyamModal],
    },
  },

  // ── MLB ──────────────────────────────────────────────
  {
    id: "mlb",
    featured: false,
    title: "MLB",
    image: mlbImage,
    subtitle: "선수 연봉 예측",
    period: "2023.02",
    role: "데이터 수집·분석",
    summaryLines: [
      "MLB Stats API로 수집한 선수 기록으로",
      "연봉을 예측하는 회귀 모델",
    ],
    tags: ["Python", "Stats API", "회귀"],
    githubUrls: [
      { label: "GitHub", url: "https://github.com/jhyungit/ML_baseball_project" },
    ],
    modal: {
      badge: "ML",
      intro: [
        "MLB 선수 기록 기반 연봉 예측",
        "데이터 수집 → 전처리 → EDA → 회귀 모델링",
      ],
      roles: [
        "MLB Stats API로 선수 기록 수집",
        "전처리·EDA, Linear Regression 연봉 예측 모델 구축",
      ],
      // TODO: 레포에서 R²·RMSE 등 평가 수치를 확인해 한 줄로 교체
      results: ["Linear Regression 기반 연봉 예측 모델 구축"],
      resultBadges: [
        { icon: "🤖", label: "회귀 모델" },
        { icon: "📊", label: "EDA" },
      ],
      techStack: ["Python", "MLB Stats API", "Pandas", "sklearn"],
      heroImages: [mlbHero],
    },
  },

  // ── PySpark ──────────────────────────────────────────
  {
    id: "pyspark",
    featured: false,
    title: "PySpark",
    image: pysparkCard,
    subtitle: "마포구 카페 현황 분석",
    period: "2023.01",
    role: "데이터 분석",
    summaryLines: [
      "PySpark로 마포구 카페 데이터를",
      "정제·집계하고 지역별 분포를 시각화",
    ],
    tags: ["PySpark", "Python", "EDA"],
    githubUrls: [
      { label: "GitHub", url: "https://github.com/jhyungit/PySpark-project" },
    ],
    modal: {
      badge: "PySpark",
      intro: [
        "PySpark 기반 마포구 카페 현황 분석",
        "Spark DataFrame으로 데이터 정제·집계 실습",
      ],
      roles: [
        "PySpark로 카페 데이터 수집·정제",
        "지역별 카페 분포 분석 및 시각화",
      ],
      results: ["지역별 카페 분포 시각화"],
      resultBadges: [
        { icon: "⚡", label: "PySpark" },
        { icon: "📊", label: "시각화" },
      ],
      techStack: ["PySpark", "Python", "Pandas", "Matplotlib"],
      heroImages: [pysparkModal],
    },
  },

  // ── IBK 슈퍼앱 ───────────────────────────────────────
  {
    id: "supperapp",
    featured: 5,
    title: "SUPER APP",
    image: ibkImage,
    subtitle: "IBK기업은행 슈퍼앱 기획",
    period: "2023.07–2023.08",
    role: "서비스 기획 · 프로토타입 설계",
    summaryLines: [
      "i-ONE Bank·Box POS 등 4개 앱 통합",
      "슈퍼앱 프로토타입 기획 (Figma)",
    ],
    tags: ["Figma", "서비스 기획"],
    award: "우수인턴",
    modal: {
      badge: "우수인턴",
      caption: [
        ["포스 홈 - POS 주사용 고객", "금융 홈 - 통장거래 주사용 고객"],
        ["상품몰 - 상품 빠른 접근", "페이 - 보유 카드로 간편 결제"],
        ["IBK창공 ver.1", "IBK창공 ver.2"],
        ["IBK BOARD ver.1", "IBK BOARD ver.2"],
      ],
      intro: [
        "IBK기업은행 IT금융개발부 청년인턴 과제 (2023.07.21–08.25)",
        "i-ONE Bank·Box POS 등 4개 앱을 통합한 슈퍼앱 프로토타입 기획·설계",
      ],
      roles: [
        "금융권 슈퍼앱 동향 조사, 타 금융사 슈퍼앱 벤치마킹",
        "개인·기업 고객 이용 패턴에 따라 금융홈·포스홈을 분리한 Flowchart 설계",
        "Figma로 4개 앱 통합 프로토타입 설계",
        "최종 발표: Flowchart를 고객 이용 시나리오로 풀어 비개발 직군도 이해할 수 있게 구성",
      ],
      results: ["IT본부장 참석 최종 발표에서 우수인턴 선정"],
      resultBadges: [
        { icon: "🏆", label: "우수인턴" },
        { icon: "🎨", label: "Figma 프로토타입" },
      ],
      techStack: ["Figma"],
      heroImages: [[ibkPos, ibkBank], [ibkProduct, ibkPay], [ibkChang1, ibkChang2], [ibkBoard1, ibkBoard2]],
    },
  },
];

export { projectCategories };