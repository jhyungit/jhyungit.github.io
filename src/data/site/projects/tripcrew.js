// src/data/site/projects/tripcrew.js
// 근거: REDESIGN_BRIEF.md §6.3·§6.9·§6.10·§8, 끝의 「추가 결정 (2026-11-24)」
// 의사결정·담당 경계·결과·기술 스택은 Phase 0 적용 후 src/data/project.js 값 그대로다.
// §9-B 답: 인덱스는 30만 건 검증 환경에서만 확인했다 (PROFILE.md TripCrew 참조).
// 페이징·인덱스(26배)의 코드 링크는 걸지 않는다 — 공개 저장소에 해당 코드가 없다.

const COMMIT = "https://github.com/tripcrew/tripcrew/commit/";

const tripcrew = {
  id: "tripcrew",
  name: "TripCrew",

  // ── 홈 「대표 작업」 카드 (§6.3) ─────────────────────
  card: {
    title: "TripCrew · 여행 계획 협업 플랫폼",
    meta: "2026.04 – 2026.06 · SSAFY 관통 프로젝트 · 2인 팀 · 팀장 · 백엔드 담당(기여도 50%)",
    summary: "Spring Boot·MyBatis·MySQL·Redis 기반 협업 플랫폼 · AWS EC2 라이브 데모 운영",
    badges: [
      "관통 프로젝트 우수상 · 2등",
      "쿼리 26배 개선",
      "낙관적 락 동시성 제어",
      "AWS 실배포",
    ],
    image: "tripcrew-card",
    links: [
      { label: "Live", href: "https://tripcrew.duckdns.org" },
      { label: "Code", href: "https://github.com/tripcrew/tripcrew" },
      { label: "자세히 보기", href: "/tripcrew/" },
    ],
  },

  // 문제/판단/결과 3칸 — 카드와 상세가 같은 값을 쓴다
  strip: {
    problem:
      "AI 도구로 만든 회원 조회가 전체 로드 후 메모리 정렬·페이징 — EXPLAIN에 type ALL·filesort",
    decision:
      "돌아가는 코드와 운영에서 버티는 코드는 다르다. 30만 건 적재 후 측정 → 서버 사이드 페이징 + (role, created_at) 복합 인덱스 → 실행계획 재확인",
    result: "0.473초 → 0.018초(약 26배) · OFFSET 10만 구간 0.244초 한계까지 실측",
  },

  highlights: [
    {
      title: "조회 성능 최적화, 한계까지 실측",
      body: "관리자 회원 조회를 서버 사이드 페이징 + (role, created_at) 복합 인덱스로 개선. 30만 건 기준 0.473초 → 0.018초(약 26배). EXPLAIN으로 type ALL→ref·filesort 제거를 직접 검증. OFFSET 10만 구간은 0.244초로 저하되어, 근본 해법이 커서 방식임을 수치로 확인",
    },
    {
      title: "데이터 정합성",
      body: "여행 계획 공동 편집의 동시 수정 충돌을 낙관적 락(version 컬럼, 충돌 시 409)으로 제어. 최신본과 내 수정본 중 고르는 선택 화면까지 구현",
    },
    {
      title: "LLM 출력 검증",
      body: "Gemini 챗봇 답변의 장소명을 관광지 DB와 이름(길이 60% 기준)·지역으로 대조. 검증된 장소만 찜·일정 추가 카드로 노출하는 후처리 계층 단독 구현 (LLM 연동은 팀원 담당)",
    },
    {
      title: "인증과 실배포",
      body: "JWT + Refresh Token, Kakao/Naver 소셜 로그인(OAuth 2.0). 토큰이 URL·로그에 남지 않도록 일회용 코드(TTL 60초, 조회 즉시 삭제)로 교환. AWS EC2 + Docker Compose 4컨테이너(MySQL·Redis·Backend·Caddy), Caddy로 HTTPS 운영",
    },
  ],

  // ── 상세 쪽 /tripcrew/ ──────────────────────────────
  detail: {
    // 문제 해결 기록 (§6.9). 넷째 문단은 "확인했습니다."로 끝난다 (§9-B 답으로 확정)
    record: {
      tag: "TripCrew · 조회 성능",
      title: "실행계획으로 병목을 먼저 찾고, 30만 건에서 26배 개선을 검증했습니다",
      paragraphs: [
        "여행 계획 협업 플랫폼 TripCrew에서 관리자 회원 조회를 30만 건 기준 0.473초에서 0.018초로 줄였습니다. SSAFY 관통 프로젝트였고, 2인 팀의 팀장이자 백엔드 담당이었습니다.",
        "회원 조회 기능은 AI 코딩 도구로 빠르게 만들었습니다. 화면은 정상이었고 시연에도 문제가 없었습니다. 코드를 열어 보니 전체 회원을 한 번에 불러와 서버 메모리에서 정렬하고 페이지를 나누는 구조였습니다. 돌아가는 코드와 운영에서 버티는 코드는 다르다고 봤습니다.",
        "먼저 EXPLAIN으로 실행계획을 열었습니다. type은 ALL이었고 Using filesort가 붙어 있었습니다. 전체 테이블을 훑은 뒤 따로 정렬한다는 뜻입니다. 데이터가 늘면 그대로 느려질 구조라서, 회원 더미 30만 건을 넣고 재 봤습니다. 0.473초가 걸렸습니다.",
        "서버 사이드 페이징으로 바꾸고 (role, created_at) 복합 인덱스를 추가했습니다. 응답은 0.018초로 약 26배 빨라졌습니다. 실행계획에서 type이 ref로 바뀌고 filesort가 사라진 것을 확인했습니다.",
        "개선 뒤에 남는 것도 재 봤습니다. OFFSET 10만 구간은 0.244초로 다시 느려졌습니다. 대용량 페이징의 근본 해법은 커서 방식이라는 것을 수치로 확인하고 다음 과제로 남겼습니다.",
        "AI가 만든 코드는 빠르지만, 왜 맞는지는 사람이 증명해야 한다는 것을 배웠습니다.",
      ],
      // 측정 요약 표 — 문단 아래. 가짜 EXPLAIN 출력은 만들지 않는다
      measurement: {
        columns: ["항목", "개선 전", "개선 후"],
        rows: [
          ["조회 방식", "전체 로드 후 메모리 정렬·페이징", "서버 사이드 페이징"],
          ["인덱스", "—", "(role, created_at) 복합 인덱스"],
          ["EXPLAIN type", "ALL", "ref"],
          ["Extra", "Using filesort", "filesort 없음"],
          ["응답(30만 건 기준)", "0.473초", "0.018초 (약 26배)"],
          ["남은 한계", "—", "OFFSET 10만 구간 0.244초 → 커서 방식이 다음 과제"],
        ],
        note: "등호 조건인 role을 앞에, 정렬 기준인 created_at을 뒤에 두어 인덱스 순서대로 읽고 LIMIT에서 바로 멈추게 했다.",
      },
    },

    diagram: "tripcrew-architecture",

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
      // §6.9 신규 블록. "이 선택이 틀리게 되는 조건"은 비워 둔다 (확인된 문장이 없다)
      {
        title: "소셜 로그인 토큰을 URL에 싣지 않는다",
        problem:
          "소셜 로그인이 끝나면 토큰을 프론트로 넘겨야 한다. 리다이렉트 URL에 실으면 브라우저 기록과 로그에 남는다.",
        rejected: {
          what: "토큰을 리다이렉트 URL에 직접 싣기",
          why: "기록과 로그에 토큰이 남는다.",
        },
        chosen:
          "일회용 코드를 발급해 프론트로 넘긴다. 프론트는 이 코드로 토큰을 한 번만 교환한다. 코드는 Redis에 TTL 60초로 두고 조회 즉시 삭제한다.",
      },
    ],

    // 그 밖의 문제 — 기존 「관리자 회원 조회 0.473초 → 0.018초」 블록은 문제 해결 기록과 겹쳐 두지 않는다 (§6.9)
    incidents: [],

    // 담당 경계 — project.js에는 TripCrew 팀원 목록이 없다 (보고 참조)
    boundary: {
      mine: [
        "관리자 회원 조회 API: 서버 사이드 페이징 전환, (role, created_at) 복합 인덱스 설계",
        "공동 편집 동시 수정 충돌 제어: 낙관적 락(version 컬럼), 충돌 시 409. 최신본과 내 수정본 중 고르는 선택 화면까지 구현",
        "인증: JWT + Refresh Token, Kakao/Naver 소셜 로그인(OAuth 2.0). 토큰이 URL·로그에 남지 않도록 일회용 코드(TTL 60초, 조회 즉시 삭제)로 교환",
        "STOMP 기반 실시간 공동 편집 (인메모리 SimpleBroker, 단일 인스턴스)",
        "LLM 출력 검증: Gemini 챗봇 답변에서 장소명을 추출해 관광지 DB와 이름(길이 60% 기준)·지역으로 대조. 검증된 장소만 찜·일정 추가 카드로 노출하는 후처리 계층 단독 구현 (LLM 연동은 팀원 담당)",
      ],
      team: [],
    },

    results: [
      "회원 조회 30만 건 기준 0.473초 → 0.018초 (약 26배)",
      "한계: OFFSET 10만 이후 페이지는 인덱스 적용 후에도 0.244초. 대용량 페이징은 커서 방식이 필요하다는 것을 실측으로 확인 (미적용)",
      "AWS EC2 + Docker Compose(MySQL·Redis·Backend·Caddy) 배포, Caddy로 HTTPS 적용",
      "SSAFY 관통 프로젝트 우수상 (2등 · 2026.06)",
    ],

    // 근거 링크 (§8). 모두 본인 커밋
    evidence: [
      { label: "낙관적 락 (version, 409)", href: `${COMMIT}566915eb9d6ad6f07ab00a3b3591e0136fcd9c89` },
      { label: "충돌 선택 화면", href: `${COMMIT}1f6ba4de788129be8e80ab6b650451dbcdad01cb` },
      { label: "STOMP 실시간 공동 편집", href: `${COMMIT}b15768ffe7c0b0d340e0f9b312e6bdead6f19e8d` },
      { label: "Kakao/Naver 로그인 · 일회용 코드", href: `${COMMIT}ffba7325076424327a6cf848cf00424421368fcf` },
      { label: "챗봇 추천 후처리", href: `${COMMIT}5b80602b81e82f1ff27e2352c7db7378a6e66a1c` },
      { label: "챗봇 추천 지역·이름 검증", href: `${COMMIT}18a0193d39338200e14d304f8ae0d5d8d4720906` },
    ],

    techStack: ["Java", "Spring Boot", "MyBatis", "MySQL", "Redis", "Vue 3", "JWT", "STOMP", "Flyway", "Docker", "AWS EC2"],

    // §6.10
    meta: {
      title: "TripCrew · 여행 계획 협업 플랫폼 — 이정현",
      description:
        "관리자 회원 조회를 30만 건 기준 0.473초에서 0.018초로 개선(약 26배). 낙관적 락, 일회용 코드 로그인, STOMP 실시간 공동 편집.",
      path: "/tripcrew/",
    },
  },
};

export { tripcrew };
