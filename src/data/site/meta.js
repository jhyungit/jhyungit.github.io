// src/data/site/meta.js — 쪽마다 <title>·description (§6.10)
// HTML 파일(index.html, yorr/index.html, tripcrew/index.html)은 이 값을 손으로 옮긴다.
// 대조 기준으로 여기에 둔다.
import { yorr } from "./projects/yorr.js";
import { tripcrew } from "./projects/tripcrew.js";

const pageMeta = {
  home: {
    title: "이정현 · Backend Developer",
    description:
      "실시간 통신 규격과 Spring Boot API 서버를 설계하고, 실행계획으로 응답 속도를 검증하는 백엔드 개발자 이정현입니다. 30만 건 기준 조회 응답 0.473초 → 0.018초, WebSocket 통신 스키마 28종 단독 설계, 최고 동시접속 80명 실서비스 운영.",
    path: "/",
  },
  yorr: yorr.detail.meta,
  tripcrew: tripcrew.detail.meta,
};

// JSON-LD (Person) — jobTitle은 "Backend Developer", description은 홈 한 줄 소개에 맞춘다
const jsonLd = {
  jobTitle: "Backend Developer",
  description:
    "실시간 통신 규격과 Spring Boot API 서버를 설계하고, 실행계획으로 응답 속도를 검증하는 백엔드 개발자입니다.",
};

export { pageMeta, jsonLd };
