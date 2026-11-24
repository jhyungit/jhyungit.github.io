// src/data/site/about.js — #about 「소개」 · #contact 「연락」 · 푸터
// 근거: REDESIGN_BRIEF.md §6.8, 끝의 「추가 결정 (2026-11-24)」 9
// 소개: 사진(about-main.webp)은 작게. 통계 숫자·KEYWORDS 블록은 없앤다.
//       야구 사진은 빼고 글 한 줄만 둔다.
import { profile, mailto } from "./profile.js";

const about = {
  photo: { image: "about-main", alt: "이정현 프로필 사진" },
  lines: [
    "Spring Boot 기반 API 서버를 설계합니다. 문제가 막히면 실행계획(EXPLAIN)과 네트워크 요청 단위까지 파고들어 원인을 검증합니다.",
    // 5만 건은 달리셔스 데이터다 (PROFILE.md §2 달리셔스)
    "Python 기반 데이터 분석에서 출발했습니다. 5만 건 규모 파이프라인 구축과 운영 자동화 경험이 있습니다.",
    "사회인 야구 2021~ · 팀업 캠퍼스 일요 루키 리그 우승 · MVP",
  ],
};

// "새로운 연결을 환영합니다" 문구는 없앤다
const contact = [
  { id: "email", label: "Email", value: profile.email, href: mailto },
  { id: "github", label: "GitHub", value: profile.githubLabel, href: profile.github },
  { id: "resume", label: "이력서 PDF", value: null, href: profile.resumeUrl },
  { id: "location", label: "Location", value: profile.location, href: null },
];

// 푸터 링크는 GitHub·Email만 둔다 (Instagram·Wanted 삭제)
const footerLinks = [
  { id: "github", label: "GitHub", href: profile.github },
  { id: "email", label: "Email", href: mailto },
];

export { about, contact, footerLinks };
