// src/data/site/home.js
// Hero · 헤더 메뉴 · 섹션 제목. 근거: REDESIGN_BRIEF.md §5·§6.1
import { profile, mailto } from "./profile.js";

// 헤더 메뉴 (§5). 로고는 "이정현" 글자만 (추가 결정 9)
const nav = {
  logo: profile.name,
  items: [
    { id: "project", label: "프로젝트" },
    { id: "ai", label: "AI 활용" },
    { id: "career", label: "이력" },
    { id: "skill", label: "기술" },
    { id: "contact", label: "연락" },
  ],
};

// 섹션 제목 (§5). #ai 제목은 ai.js에 있다
const sectionTitles = {
  project: "대표 작업",
  more: "그 외 프로젝트",
  career: "이력",
  skill: "기술",
  about: "소개",
  contact: "연락",
};

// 인사말("안녕하세요")과 이모지는 두지 않는다 (§6.1)
const hero = {
  name: profile.name,
  nameEn: profile.nameEn,
  role: profile.role,
  tagline: profile.tagline,
  metrics: [
    { value: "26×", label: "쿼리 응답 개선 · 30만 건 기준", source: "TripCrew", href: "#tripcrew" },
    { value: "28종", label: "실시간 통신 스키마 단독 설계", source: "YORR", href: "#yorr" },
    { value: "80명", label: "최고 동시접속 · 실서비스", source: "YORR", href: "#yorr" },
  ],
  actions: [
    { id: "resume", label: "이력서 PDF", href: profile.resumeUrl, newTab: true },
    { id: "github", label: "GitHub", href: profile.github, newTab: true },
    { id: "email", label: "Email", href: mailto, newTab: false },
  ],
};

export { nav, sectionTitles, hero };
