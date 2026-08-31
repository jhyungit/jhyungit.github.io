// src/data/about.js
import mainPhoto from "../assets/about-photo/about-main.webp";
import baseballPhoto from "../assets/about-photo/about-baseball.jpg";

const aboutTitle = "About Me";

const aboutPhotos = {
  main: {
    imageUrl: mainPhoto,
    imageAlt: "이정현 프로필 사진",
  },
  baseball: {
    imageUrl: baseballPhoto,
    imageAlt: "사회인 야구 유니폼을 입고 트로피를 든 사진",
    tag: "사회인 야구 2021~",
    caption: "팀업 캠퍼스 일요 루키 리그 우승 · MVP",
  },
};

const aboutHeadingLines = [
  "저는 문제가 막히면",
  "실행계획까지 파고듭니다.",
];

const aboutIdentity =
  "Spring Boot 기반 API 서버를 설계하고, 쿼리·인덱스로 응답 속도를 개선하는 백엔드 개발자입니다.";

const aboutStats = [
  { value: "4", label: "Awards" },
  { value: "3", label: "Certs" },
];

const aboutTexts = [
  "관리자 회원 조회 API를 서버 사이드 페이징과 복합 인덱스로 개선해 30만 건 기준 응답을 0.473초에서 0.018초로 단축했습니다. EXPLAIN으로 type이 ALL에서 ref로 바뀌고 filesort가 사라진 것을 확인했고, 개선 이후 남은 OFFSET 구간의 저하까지 실측해 다음 해법을 수치로 확인했습니다.",
  "6인 팀 PM/팀장으로 실시간 통신 규격을 단독 설계해 게임 3종이 같은 계약 위에서 동작하도록 만들고, 최고 동시접속 80명 트래픽 아래에서 2회 배포·운영했습니다.",
  "Python 기반 데이터 분석에서 출발해 백엔드로 왔습니다.",
  "2021년부터 사회인 야구를 이어오고 있습니다. 팀업 캠퍼스 일요 루키 리그에서 우승했고 MVP로 선정됐습니다.",
];

const aboutKeywordsTitle = "KEYWORDS";

const aboutKeywords = [
  { tag: "Stability-first", desc: "SSAFY 15기 반장으로 팀 일정 및 소통 주도" },
  { tag: "Ownership", desc: "IBK 인턴 과제 팀장 · 우수팀 & 우수인턴 수상" },
  { tag: "Teamwork", desc: "달리셔스 기업 연계 프로젝트 우수상 (6팀 중 1위)" },
];

export {
  aboutTitle,
  aboutPhotos,
  aboutHeadingLines,
  aboutIdentity,
  aboutStats,
  aboutTexts,
  aboutKeywordsTitle,
  aboutKeywords,
};
