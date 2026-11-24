// src/data/site/career.js — #career 「이력」 (경험 · 교육 · 자격 · 수상)
// 근거: REDESIGN_BRIEF.md §6.6, PROFILE.md §2 IBK·교육/자격/수상
// 로고 카드·타임라인 레일·트로피 아이콘은 없앤다. 표 하나 또는 정의 목록으로 압축한다.

const careerGroups = {
  experience: "경험",
  education: "교육",
  certifications: "자격",
  awards: "수상",
};

const experience = [
  {
    id: "ibk",
    title: "IBK기업은행 · IT금융개발부 청년인턴",
    meta: "2023.07 – 2023.08 · IT글로벌개발팀 · 우수인턴 선정",
    items: [
      "금융 IT 트렌드 조사 및 타 금융사 슈퍼앱 벤치마킹",
      "i-ONE Bank, Box POS 등 4개 앱을 통합한 슈퍼앱 프로토타입(Figma) 기획·설계",
      "개인/기업 고객 특성을 반영한 Flowchart 로직 설계(금융홈·포스홈 분리)",
      "기술 로직을 고객 경험 시나리오로 재구성해 발표",
    ],
    // 프로토타입 화면 8장 — 접힌 상태(<details>), lazy. 캡션은 기존 project.js 값 그대로.
    // image는 Phase 2에서 src/assets/project-photo/의 같은 이름 파일로 연결한다
    screenshots: [
      { image: "ibkPos", caption: "포스 홈 - POS 주사용 고객" },
      { image: "ibkBank", caption: "금융 홈 - 통장거래 주사용 고객" },
      { image: "ibkProduct", caption: "상품몰 - 상품 빠른 접근" },
      { image: "ibkPay", caption: "페이 - 보유 카드로 간편 결제" },
      { image: "ibkChang1", caption: "IBK창공 ver.1" },
      { image: "ibkChang2", caption: "IBK창공 ver.2" },
      { image: "ibkBoard1", caption: "IBK BOARD ver.1" },
      { image: "ibkBoard2", caption: "IBK BOARD ver.2" },
    ],
  },
];

const education = [
  {
    name: "SSAFY 15기 · Java 전공반",
    period: "2026.01 입과 · 1,725h 과정 · 1학기 11반 반장",
    desc: "Java·자료구조/알고리즘, Spring Boot, MySQL, 알고리즘 스터디 운영",
  },
  {
    name: "ASAC 빅데이터 분석가 과정 1기",
    period: "2022.09 – 2023.03 · 920h · SK planet",
    desc: "데이터 수집·전처리·EDA·ML/DL 모델링, PySpark 대용량 처리",
  },
  {
    name: "명지대학교 정보통신공학과 졸업",
    period: "2017.03 – 2022.02",
    desc: "빅데이터분석·알고리즘·데이터구조·정보보안 이수",
  },
  {
    name: "호주 워킹홀리데이",
    period: "2019.02 – 2020.01 (11개월)",
    desc: "ILSC Sydney Intermediate → Advanced 수료(우수 학생 선정) · 멜버른 Waterfront Southgate 근무(2019.07 – 2019.12)",
  },
];

// 순서 고정: 정보처리기사 → SQLD → ADsP → OPIc IH. 그 밖의 자격은 싣지 않는다 (PROFILE.md 자격)
const certifications = [
  { name: "정보처리기사", date: "2024.12" },
  { name: "SQLD", date: "2025.12" },
  { name: "ADsP", date: "2026.11" },
  { name: "OPIc IH", date: "2025.06" },
];

// 수상 배지는 일반 배지로 쓴다 — 금색 없음 (추가 결정 9)
const awards = [
  { name: "SSAFY 공통 프로젝트 우수상(1등)", date: "2026.08" },
  { name: "SSAFY 관통 프로젝트 우수상(2등)", date: "2026.06" },
  { name: "IBK기업은행 우수인턴", date: "2023.09" },
  { name: "ASAC 과정 우수상(6팀 중 1등)", date: "2023.03" },
];

export { careerGroups, experience, education, certifications, awards };
