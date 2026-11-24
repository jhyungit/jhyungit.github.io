// src/data/site/profile.js
// 프로필 상수는 여기서만 정의한다 (CLAUDE.md 코드 규칙).
// 근거: PROFILE.md §1, docs/handoff/REDESIGN_BRIEF.md §6.1·§6.8
// Phase 2에서 src/data/로 올린다.

const profile = {
  name: "이정현",
  nameEn: "Jeonghyun Lee",
  role: "Backend Developer",
  tagline:
    "실시간 통신 규격과 Spring Boot API 서버를 설계하고, 실행계획으로 응답 속도를 검증하는 백엔드 개발자입니다.",
  email: "jh021199@gmail.com",
  github: "https://github.com/jhyungit",
  githubLabel: "github.com/jhyungit",
  // public/resume.pdf를 정적 경로로 참조한다. 번들에 넣으면 해시가 붙어 URL이 바뀐다
  resumeUrl: "/resume.pdf",
  location: "Seoul, Korea",
  siteUrl: "https://jhyungit.github.io/",
};

const mailto = `mailto:${profile.email}`;

export { profile, mailto };
