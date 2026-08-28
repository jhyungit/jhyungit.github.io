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

// TODO: 실제 TripCrew 스크린샷 제공 시 아래 두 파일을 덮어쓰면 됩니다.
//  - src/assets/project-photo/tripcrew-card.webp  (카드 썸네일)
//  - src/assets/project-photo/tripcrew-hero.webp  (모달 대표 이미지)
import tripcrewCard from "../assets/project-photo/tripcrew-card.webp";
import tripcrewHero from "../assets/project-photo/tripcrew-hero.webp";

import yorrCard from "../assets/project-photo/yorr-card.webp";
import musinsaCard from "../assets/project-photo/musinsa-card.webp";

const projectCategories = [
  // ────────────────────────────────────────────────────────────
  // YORR — 대표작. 근거는 PROFILE.md §2·§4 와 docs/yorr-evidence.md 뿐이다.
  // 두 문서에 없는 내용은 쓰지 않는다. 발표자료 PDF에서 직접 인용하지 않는다.
  // ────────────────────────────────────────────────────────────
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
      "앱 설치·회원가입 없이 브라우저 접속만으로",
      "스마트폰을 게임 컨트롤러로 쓰는 실시간 파티게임",
    ],
    tags: ["Spring Boot", "WebSocket", "WebRTC"],
    githubUrls: [
      { label: "Live 데모 (2026-08 확인)", url: "https://yorr.site" },
      { label: "GitHub", url: "https://github.com/team-yorr/yorr" },
    ],
    modal: {
      badge: "SSAFY 공통 프로젝트 1위",
      intro: [
        "앱 설치·회원가입 없이 브라우저 접속만으로 스마트폰을 게임 컨트롤러로 쓰는 실시간 파티게임",
        "SSAFY 공통 프로젝트 · 6인 팀 · PM/팀장 · AWS EC2 라이브 운영",
        "실사용자 트래픽 아래 2회 배포 (1차 2026.07.30 · 2차 2026.08.05)",
      ],

      // ── 담당 경계 ──────────────────────────────────────────
      // 팀 레포에 코드가 있다는 것과 내가 만들었다는 것은 다르다.
      // teamWork는 감추기 위한 항목이 아니라 경계를 먼저 밝히기 위한 항목이다.
      myWork: [
        "WebSocket 통신 계약 설계 — 전 이벤트의 envelope·payload 스키마 28종 단독 정의. record + 제네릭으로 페이로드 타입을 컴파일 타임에 보장하고, 요청 msgId를 응답에 되돌려 요청-응답 상관관계를 확립",
        "WebRTC 음성 시그널링 BE·FE 전 구간 — 게임 상태는 WebSocket 서버 경유, 음성은 P2P로 분리. ICE 후보 교환만 서버가 중계하고 coturn TURN 서버로 직결 실패를 보완. 세션 레지스트리 단위 테스트 작성",
        "라운드 동기화 · 타이머 · 12라운드 종료 판정 (라운드 상태는 InMemory 저장소)",
        "방 생성·검증 서비스",
        "팀장으로서 통합·형상 관리 — Git 협업 컨벤션(CONTRIBUTING.md)·MR 템플릿 수립, 팀원 MR 21건 통합, v0.1 릴리스 머지 관리",
        "AI 개발 워크플로 — CLAUDE.md로 코딩 규칙을 고정해 6인 팀의 생성 결과 편차를 줄이고, MCP로 Jira·Notion을 연동해 티켓 발급·스프린트 운영·문서화를 자동화. 생성 결과는 커밋 단위로 확인한 뒤 반영",
      ],
      teamWork: [
        "Redis 스냅샷 세션 재접속 구현 — 프로토콜 DTO 규격은 내가 정의했고 복구 로직 구현은 팀원이 맡았다",
        "CI/CD (Jenkinsfile) · Prometheus·Grafana 모니터링 · Micrometer 커스텀 지표",
        "게임 모듈 추상화, Expectimax 요트 AI",
        "yorr-arcade 게임 2종의 팀 서비스 이식 — 개인 레포에서의 1인 개발과 채택까지가 내 몫이다",
      ],

      diagram: "yorr-architecture",

      // ── 의사결정 ───────────────────────────────────────────
      // "검토했으나 버린 대안"과 "이 선택이 틀리게 되는 조건"을 빼지 않는다.
      decisions: [
        {
          title: "지연율과 공정성이 정반대를 가리켰을 때",
          problem:
            "스마트폰을 컨트롤러로 쓰는 게임이라 조작과 화면 반응 사이의 시간 차이가 곧 품질이었다. 동시에 클라이언트는 조작 가능한 환경이므로 점수·순서·상태를 클라이언트가 들고 있으면 위조가 가능했다. 지연을 줄이려면 판정을 클라이언트에 두어야 하고, 공정성을 지키려면 서버가 전부 쥐어야 한다.",
          rejected: {
            what: "DeviceMotion 센서 값을 전량 서버로 전송해 서버가 동작을 판정",
            why: "공정성은 완벽해지지만 전송량 자체가 지연이 된다. 센서는 초당 수십 회 발생하고, 전부 올리면 네트워크와 서버 양쪽에 부하가 걸린다. 공정성을 얻고 게임을 잃는 교환이었다.",
          },
          chosen:
            "권한을 종류별로 쪼갰다. 동작 판정은 클라이언트에 두고 센서 해석을 로컬에서 끝낸 뒤 판정 결과만 한 번 보낸다. 상태·순서·점수 갱신은 서버 이벤트로만 가능하도록 계약을 설계했다. 클라이언트가 보내는 것은 \"던졌다\"는 사실이지 \"몇 점이다\"가 아니다. 신뢰 경계를 기능 단위가 아니라 권한 단위로 그은 것이고, 이 규칙이 스키마 28종 전체를 관통한다. 게임 3종으로 확장할 때 페이로드만 추가하면 됐던 이유이기도 하다.",
          breaksWhen:
            "경쟁·랭킹이 걸린 게임이라면 부족하다. 클라이언트 판정을 신뢰하는 이상 조작된 클라이언트가 유리한 판정을 반복 전송할 수 있다. YORR는 같은 공간에 모인 사람들이 함께 즐기는 파티게임이라 조작 유인이 낮다고 판단해 이 교환을 택했다. 경쟁 요소를 강화한다면 서버 측 검증 계층이 추가로 필요하다.",
        },
        {
          title: "음성을 서버에 태우지 않은 이유",
          problem:
            "함께하는 게임에서 소통은 부가 기능이 아니라 게임 그 자체였다. 낮은 지연과 높은 실시간성이 동시에 필요했다.",
          rejected: {
            what: "음성 트래픽을 서버가 중계",
            why: "지연이 한 단계 늘고, 동시 접속이 늘수록 서버 대역폭이 선형으로 증가한다. 음성은 서버가 검증할 필요가 없는 데이터이므로 신뢰 경계 밖에 두어도 안전하다고 판단했다.",
          },
          chosen:
            "게임 상태는 WebSocket으로 서버를 경유하고, 음성은 WebRTC P2P로 클라이언트 간 직접 연결했다. 서버는 ICE 후보 교환만 중계하고 음성 트래픽 자체는 경유하지 않는다. NAT 환경에서 P2P 직결이 실패할 수 있으므로 coturn TURN 서버를 두어, 직결되면 서버를 거치지 않고 실패할 때만 중계된다.",
          breaksWhen:
            "풀메시 구조라 참여자가 늘면 각 클라이언트의 연결 수가 제곱으로 증가한다. 파티게임 규모(한 방 기준 소수 인원)에서는 문제가 없지만, 인원이 커지면 SFU 도입이 필요하다.",
        },
      ],

      // ── 장애 사례 ──────────────────────────────────────────
      incidents: [
        {
          title: "대기실 연결 화면 멈춤",
          tag: "QA 우선순위 상위",
          symptom: "대기실에서 화면이 멈춰 진행이 불가능하다는 신고.",
          cause:
            "세션 토큰 만료 상황과 정상 세션이 구분되지 않아, 만료된 세션이 유효한 것처럼 처리되며 흐름이 멈췄다.",
          fix: "세션 ↔ playerId 매핑을 정리하고 SESSION_EXPIRED를 별도 상태로 구분 처리했다. 만료가 만료로 인식되면 클라이언트가 재연결 흐름을 탈 수 있다.",
        },
        {
          title: "관전 화면 순서 역전",
          tag: "화면이 아니라 계약을 고쳤다",
          symptom: "관전 화면이 조작보다 먼저 결과를 노출했다. 굴리기 전에 결과가 보이는 상태.",
          cause:
            "화면 단위로 표시 타이밍을 늦추는 수정이 가능했지만, 같은 유형의 순서 역전이 다른 이벤트에서도 재발할 구조였다.",
          fix: "shake / shaken 이벤트 계약을 신설해 \"조작이 시작됨\"과 \"결과가 확정됨\"을 프로토콜 수준에서 분리했다. 화면이 아니라 계약을 고쳤으므로 동일 유형이 구조적으로 차단된다.",
        },
      ],

      metrics: "yorr-metrics",
      results: [
        "실사용자 트래픽 아래 2회 배포·운영 — 최고 동시접속 80명, 누적 참여 635건 · 487판",
        "만족도 설문(n=17)에서 4점 이상 94.1% (5점 58.8% · 4점 35.3%)",
        "사용자 피드백을 백로그화해 2차 배포에 반영 — 튜토리얼·툴팁, 센서 보정·버튼 조작 지원",
        "SSAFY 공통 프로젝트 1위",
      ],
      techStack: [
        "Java", "Spring Boot", "JPA", "WebSocket", "WebRTC", "coturn",
        "MySQL", "Docker", "AWS EC2", "Jira", "GitLab",
      ],
    },
  },
  {
    id: "tripcrew",
    featured: 2,
    title: "TripCrew",
    image: tripcrewCard,
    subtitle: "여행 계획 협업 플랫폼",
    role: "Backend",
    teamSize: "2인 팀",
    summaryLines: [
      "Spring Boot·MyBatis·MySQL·Redis 기반",
      "여행 계획 협업 플랫폼 (AWS 배포)",
    ],
    tags: ["Spring Boot", "MySQL", "Redis"],
    githubUrls: [
      { label: "Live 데모 (2026-08 확인)", url: "https://tripcrew.duckdns.org" },
      { label: "GitHub", url: "https://github.com/tripcrew/tripcrew" },
    ],
    modal: {
      badge: "Backend",
      intro: [
        "Spring Boot·MyBatis·MySQL·Redis·Vue 기반 여행 계획 협업 플랫폼",
        "2인 팀 프로젝트, AWS 배포",
      ],
      roles: [
        "관리자 회원 조회 API 서버 사이드 페이징 + (role, created_at) 복합 인덱스 설계",
        "낙관적 락 기반 공동 편집 동시 수정 충돌 제어",
        "JWT 인증, STOMP 기반 실시간 공동 편집 (인메모리 SimpleBroker · 단일 인스턴스 구조)",
      ],
      results: [
        "관리자 회원 조회를 서버 사이드 페이징 + (role, created_at) 복합 인덱스로 개선 → 30만 건 기준 응답 0.473초 → 0.018초 (약 26배 단축)",
        "EXPLAIN으로 type ALL → ref 전환과 filesort 제거를 직접 검증",
        "인덱스 적용 후에도 OFFSET 10만 구간은 0.244초로 저하되는 것을 실측 → 대용량 페이징의 근본 해법은 커서 방식임을 수치로 확인",
        "낙관적 락(version 컬럼, 충돌 시 409)으로 공동 편집 동시 수정 충돌 제어",
      ],
      resultBadges: [
        { icon: "👥", label: "2인 팀" },
        { icon: "⚡", label: "응답 26배 개선" },
        { icon: "☁️", label: "AWS 배포" },
      ],
      techStack: ["Spring Boot", "MyBatis", "MySQL", "Redis", "Vue", "JWT", "STOMP", "AWS"],
      heroImages: [tripcrewHero],
    },
  },
  // ────────────────────────────────────────────────────────────
  // 무신사 향수 평점 예측 — 근거는 PROFILE.md §2 뿐이다.
  // 네트워크 요청 패턴 분석은 이 프로젝트에만 귀속된다 (달리셔스·MLB 금지).
  // 정확도는 84%가 아니라 84.62%다. 어떤 모델·조건인지 함께 밝힌다.
  // ────────────────────────────────────────────────────────────
  {
    id: "musinsa",
    featured: 4,
    // 카드 표제는 subtitle이고 모달 제목은 "{title} {subtitle}"이다.
    // 다른 카드(YORR/실시간 웹 파티게임, 달리셔스/추천 시스템)와 같은 규칙을 따른다.
    title: "무신사",
    image: musinsaCard,
    subtitle: "향수 평점 예측",
    period: "T-academy ASAC",
    role: "데이터 수집(크롤러 구현)·EDA 담당, 모델링 공동",
    teamSize: "6인 팀",
    summaryLines: [
      "HTML 파싱으로 수집 불가한 리뷰 데이터를",
      "네트워크 요청 패턴을 추적해 수집",
    ],
    tags: ["Python", "Random Forest", "Selenium"],
    modal: {
      badge: "3진 분류 84.62%",
      intro: [
        "가격·출시 정보·리뷰를 피처로 향수 평점을 예측하는 분류 모델",
        "T-academy ASAC 과정 · 6인 팀 · 데이터 수집(크롤러 구현)·EDA 담당, 모델링 공동 수행",
      ],
      roles: [
        "HTML 파싱으로 수집 불가한 리뷰 데이터 → \"사용자 동작 시점에 비동기 로딩\"이라 가설 수립 → 브라우저 DevTools Network 탭으로 HTTP 요청 패턴을 추적해 요청 API를 특정 → 크롤러를 직접 구현해 안정적으로 수집",
        "EDA 수행 — 리뷰가 없는 상품이 0점으로 처리되어 0점과 5점에 분포가 몰린 것을 발견하고 재분류 기준을 탐색",
        "이하 모델링은 6인 공동 수행 — Random Forest · XGBoost 학습 및 교차검증, GridSearch 하이퍼파라미터 탐색",
        "리뷰 긍부정 분류에 Keras GRU 적용 (72.36%, 공동)",
      ],
      // 분류 방식을 세 번 바꿔가며 찾은 과정 자체가 성과다.
      decisions: [
        {
          title: "분류 단위를 세 번 바꿔 3진에 도달했다",
          problem:
            "평점을 그대로 5진 분류로 학습했더니 정확도가 36.15%에 그쳤다. 원인은 모델이 아니라 레이블이었다 — 리뷰가 없는 상품의 평점을 0으로 채운 탓에 절반 이상이 0점에 몰려 있었고, 5개 클래스로 나누면 중간 구간이 학습할 표본을 갖지 못했다.",
          rejected: {
            what: "0점(리뷰 없음)을 버리고 1–4점 / 5점의 2진 분류로 단순화",
            why: "정확도는 71.53%로 올랐지만, 데이터의 절반을 차지하는 무평점 구간을 통째로 버리는 대가였다. 남은 예측도 \"5점이냐 아니냐\" 두 값뿐이라 쓸 만한 해상도가 남지 않았다.",
          },
          chosen:
            "0점 / 1–4점 / 5점의 3진 분류를 택했다. 무평점(0점)과 만점(5점)을 분포상 실제로 구별되는 두 극단으로 두고, 그 사이를 하나로 묶었다. Random Forest 교차검증 5회 평균 84.62%, GridSearch 후 86.00%. XGBoost는 평균 84.96%, GridSearch 후 86.42%였다. 피처 중요도에서 가장 큰 것은 리뷰 수, 그다음이 가격이었다.",
          breaksWhen:
            "1–4점 구간을 하나로 묶었으므로 그 안의 차이는 예측할 수 없다. 중간 평점의 미세한 차이가 중요한 문제라면 이 분류는 부적절하고, 회귀 또는 순서형 분류로 접근해야 한다.",
        },
      ],
      results: [
        "3진 분류(0점 / 1–4점 / 5점) — Random Forest 교차검증 5회 평균 84.62%, GridSearch 후 86.00%",
        "XGBoost 평균 84.96%, GridSearch 후 86.42%",
        "분류 단위 비교 — 5진 36.15% → 2진 71.53% → 3진 84.62%",
        "피처 중요도 1위는 리뷰 수, 2위는 가격",
        "시스템의 표면이 아니라 실제 동작을 추적해야 답이 나오는 문제 해결 경험",
      ],
      resultBadges: [
        { icon: "👥", label: "6인 팀" },
        { icon: "🎯", label: "3진 분류 84.62%" },
      ],
      techStack: [
        "Python", "Pandas", "Scikit-learn", "Random Forest", "XGBoost",
        "Selenium", "BeautifulSoup", "Keras (GRU)", "DevTools (Network)",
      ],
    },
  },
  {
    id: "kurrant",
    featured: 5,
    title: "달리셔스",
    image: daliImage,
    subtitle: "추천 시스템",
    period: "2023.01–2023.03",
    role: "데이터 분석 · 자동화",
    teamSize: "6인 팀",
    summaryLines: [
      "달리셔스, '구독형 외식 중개 플랫폼'",
      "사내 제공 데이터 약 5만 건 기반 메뉴 추천 시스템 구축",
    ],
    tags: ["Python", "sklearn", "Pandas"],
    githubUrls: [
      { label: "CB 모델 구현", url: "https://github.com/jhyungit/Final_project" },
      { label: "추천시스템 공부", url: "https://github.com/jhyungit/recommendation_system_study" },
    ],
    modal: {
      badge: "우수상 (6팀 중 1위)",
      intro: [
        "달리셔스, 구독형 외식 플랫폼",
        "T-academy 기업 연계 프로젝트",
        "3개월, 6인 팀 프로젝트",
      ],
      roles: [
        "Scrum 회의 주도",
        "사내 제공 고객·메뉴 데이터 약 5만 건 전처리 · EDA · 추천 피처 도출",
        "Cosine Similarity 기반 Content-Based 모델 구현 (CB·CF·ML·DL 하이브리드로 고도화)",
      ],
      results: [
        "운영팀 수동 메뉴 선정 30분 → 3분(약 90% 단축), 잠재고객 2만 명 규모 고객사 계약 성사에 기여",
        "최종 발표 우수상 수상 (6팀 중 1위)",
      ],
      resultBadges: [
        { icon: "👥", label: "6인 팀" },
        { icon: "🏆", label: "우수상 (6팀 중 1위)" },
      ],
      techStack: ["Python", "sklearn", "Pandas"],
      heroImages: [daliHero],
    },
  },
  {
    id: "capstone1",
    featured: false,
    title: "냐암냐암",
    image: nyamCard,
    subtitle: "Capstone Design 1",
    role: "조장 / 코드·DB·발표",
    teamSize: "3인 팀",
    summaryLines: [
      "캡스톤디자인 1 프로젝트",
      "학생들을 위한 맛집 웹 사이트 구축",
    ],
    // 발표자료는 DB를 "데이터베이스"로만 표기한다. MySQL은 미확인이므로
    // "관계형 DB"까지만 쓴다 (PROFILE.md §6).
    tags: ["PHP", "관계형 DB"],
    modal: {
      badge: "웹 서비스",
      intro: [
        "캡스톤디자인1 프로젝트 · 3인 팀 · 조장",
        "PHP + 관계형 DB 기반 맛집 웹 사이트 설계 및 구축",
      ],
      roles: [
        "조장으로서 일정 조율 및 관리",
        "코드 작성",
        "데이터베이스 구축",
        "발표",
      ],
      results: ["PHP + 관계형 DB 기반 맛집 웹 사이트 구축"],
      resultBadges: [
        { icon: "👥", label: "3인 팀" },
        { icon: "🗄", label: "DB 구축" },
      ],
      techStack: ["PHP", "관계형 DB"],
      heroImages: [nyamModal],
    },
  },
  {
    id: "mlb",
    featured: false,
    title: "MLB",
    image: mlbImage,
    subtitle: "ML Project",
    period: "2023.02",
    role: "데이터 분석",
    summaryLines: [
      "MLB 선수의 연봉 예측 프로젝트",
      "Stats API 활용",
    ],
    tags: ["Stats API", "EDA"],
    githubUrls: [
      { label: "GitHub", url: "https://github.com/jhyungit/ML_baseball_project" },
    ],
    modal: {
      badge: "ML",
      intro: [
        "MLB 선수 데이터 기반 연봉 예측 프로젝트",
        "데이터 수집, 정제, ML",
      ],
      roles: [
        "MLB Stats API를 활용한 선수 데이터 수집",
        "데이터 전처리 및 EDA, 연봉 예측 모델 구축",
      ],
      results: ["Linear Regression 모델 적용 결과 예측 달성"],
      resultBadges: [
        { icon: "🤖", label: "ML 모델" },
        { icon: "📊", label: "EDA" },
      ],
      techStack: ["Python", "MLB Stats API", "EDA", "sklearn", "Linear Regression"],
      heroImages: [mlbHero],
    },
  },
  {
    id: "pyspark",
    featured: false,
    title: "PySpark",
    image: pysparkCard,
    subtitle: "빅데이터 분석",
    period: "2023.01",
    role: "데이터 분석",
    summaryLines: [
      "PySpark 활용 마포구 카페 현황 분석",
      "대용량 데이터 처리 및 시각화",
    ],
    tags: ["PySpark", "Python", "EDA"],
    githubUrls: [
      { label: "GitHub", url: "https://github.com/jhyungit/PySpark-project" },
    ],
    modal: {
      badge: "빅데이터",
      intro: [
        "PySpark 활용 마포구 카페 현황 분석 프로젝트",
        "Apache Spark 기반 분산 데이터 처리 실습",
      ],
      roles: [
        "PySpark를 활용한 대용량 데이터 수집 및 정제",
        "마포구 카페 현황 분석 및 시각화",
      ],
      results: ["지역별 카페 분포 인사이트 도출"],
      resultBadges: [
        { icon: "📊", label: "인사이트" },
        { icon: "⚡", label: "PySpark" },
      ],
      techStack: ["PySpark", "Python", "Pandas", "Matplotlib"],
      heroImages: [pysparkModal],
    },
  },
  {
    id: "supperapp",
    featured: 3,
    title: "SUPPER APP",
    image: ibkImage,
    subtitle: "기업은행 슈퍼앱",
    period: "2023.07–2023.08",
    role: "UX 기획",
    summaryLines: [
      "i-ONE Bank, Box POS 등 4가지 앱",
      "슈퍼앱 프로토타입 구현",
    ],
    tags: ["Figma", "UX 설계"],
    modal: {
      badge: "우수팀 · 우수인턴",
      caption: [
        ["포스 홈 - POS 주사용 고객","금융 홈 - 통장거래 주사용 고객"],
        ["상품몰 - 다양한 상품 빠른 접근","페이 - 보유 카드로 신속한 페이"],
        ["IBK창공_ver.1","IBK창공_ver.2"],
        ["IBK BOARD_ver.1","IBK BOARD_ver.2"]
      ],
      intro: [
        "IBK기업은행 IT금융개발부 청년인턴 과제",
        "i-ONE Bank, Box POS 등 4개 앱을 통합한 슈퍼앱 프로토타입",
      ],
      roles: [
        "금융 IT 트렌드 조사 및 타 금융사 슈퍼앱 벤치마킹",
        "4개 앱 통합 슈퍼앱 프로토타입 기획·구현 (Figma)",
        "개인·기업 고객 특성을 반영한 Flowchart 로직 설계 (금융홈·포스홈 분리)",
        "기술 로직을 비기술 이해관계자용 고객 경험 시나리오로 재구성해 발표",
      ],
      results: ["IT본부장 참석 최종 발표에서 우수팀 · 우수인턴 선정"],
      resultBadges: [
        { icon: "🏆", label: "우수팀 · 우수인턴" },
        { icon: "🎨", label: "슈퍼앱 프로토타입" },
      ],
      techStack: ["Figma", "UX"],
      heroImages: [[ibkPos,ibkBank],[ibkProduct,ibkPay],[ibkChang1,ibkChang2],[ibkBoard1,ibkBoard2]],
    },
  },
];

export { projectCategories };
