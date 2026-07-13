//project.js
import nyamCard from "../assets/project-photo/nyam_card.png";
import nyamModal from "../assets/project-photo/nyam_modal.png";
import pysparkCard from "../assets/project-photo/pyspark_card.png";
import pysparkModal from "../assets/project-photo/pyspark_modal.png";

import daliImage from "../assets/project-photo/dali.png";
import daliHero from "../assets/project-photo/dali-hero.png";

import ibkImage from "../assets/project-photo/ibk.png";
import ibkPos from "../assets/project-photo/ibkPos.png";
import ibkBank from "../assets/project-photo/ibkBank.png";
import ibkProduct from "../assets/project-photo/ibkProduct.png";
import ibkPay from "../assets/project-photo/ibkPay.png";
import ibkChang1 from "../assets/project-photo/ibkChang1.png";
import ibkChang2 from "../assets/project-photo/ibkChang2.png";
import ibkBoard1 from "../assets/project-photo/ibkBoard1.png";
import ibkBoard2 from "../assets/project-photo/ibkBoard2.png";

import mlbImage from "../assets/project-photo/mlb.png";
import mlbHero from "../assets/project-photo/mlb2.png";

// TODO: 실제 TripCrew 스크린샷 제공 시 아래 두 파일을 덮어쓰면 됩니다.
//  - src/assets/project-photo/tripcrew-card.png  (카드 썸네일)
//  - src/assets/project-photo/tripcrew-hero.png  (모달 대표 이미지)
import tripcrewCard from "../assets/project-photo/tripcrew-card.png";
import tripcrewHero from "../assets/project-photo/tripcrew-hero.png";

const projectCategories = [
  {
    id: "tripcrew",
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
      { label: "Live 데모", url: "https://tripcrew.duckdns.org" },
      { label: "GitHub", url: "https://github.com/tripcrew/tripcrew" },
    ],
    modal: {
      badge: "Backend",
      intro: [
        "Spring Boot·MyBatis·MySQL·Redis·Vue 기반 여행 계획 협업 플랫폼",
        "2인 팀 프로젝트, AWS 배포",
      ],
      roles: [
        "관리자 회원 조회 API 서버 페이징 + 복합 인덱스 설계",
        "낙관적 락 기반 공동 편집 동시 수정 충돌 제어",
        "JWT 인증, WebSocket + Redis 기반 실시간 기능 구현",
      ],
      results: [
        "관리자 회원 조회를 서버 페이징 + 복합 인덱스로 개선 → 30만 건 기준 응답 0.473초→0.018초(약 26배 단축)",
        "EXPLAIN으로 filesort 제거 검증",
        "낙관적 락으로 공동 편집 동시 수정 충돌 제어",
      ],
      resultBadges: [
        { icon: "👥", label: "2인 팀" },
        { icon: "⚡", label: "응답 26배 개선" },
        { icon: "☁️", label: "AWS 배포" },
      ],
      techStack: ["Spring Boot", "MyBatis", "MySQL", "Redis", "Vue", "JWT", "WebSocket", "AWS"],
      heroImages: [tripcrewHero],
    },
  },
  {
    id: "kurrant",
    title: "KURRANT.MEAL",
    image: daliImage,
    subtitle: "추천 시스템",
    period: "2023.01–2023.03",
    role: "데이터 분석 · 자동화",
    teamSize: "5인 팀",
    summaryLines: [
      "달리셔스, '구독형 외식 중개 플랫폼'",
      "고객 데이터 기반 메뉴 추천 시스템 구축",
    ],
    tags: ["Python", "sklearn", "Pandas"],
    githubUrls: [
      { label: "CB 모델 구현", url: "https://github.com/jhyungit/Final_project" },
      { label: "추천시스템 공부", url: "https://github.com/jhyungit/recommendation_system_study" },
    ],
    modal: {
      badge: "우수상",
      intro: [
        "달리셔스, 구독형 외식 플랫폼",
        "T-academy 기업 연계 프로젝트",
        "3개월, 5인 팀 프로젝트",
      ],
      roles: [
        "Scrum 회의 주도",
        "Data preprocessing, EDA, Modeling",
        "Contents-based 추천 시스템 구축",
      ],
      results: [
        "운영 프로세스 자동화로 작업시간 90% 단축, 잠재고객 2만 명 보유 기업과 계약 성사",
        "최종 발표 우수상 수상",
      ],
      resultBadges: [
        { icon: "👥", label: "5인 팀" },
        { icon: "🗓", label: "3개월" },
        { icon: "🏆", label: "우수상" },
      ],
      techStack: ["Python", "sklearn", "Pandas"],
      heroImage: ibkImage,
      heroImages: [daliHero],
    },
  },
  {
    id: "capstone1",
    title: "Nyam Nyam",
    image: nyamCard,
    subtitle: "Capstone Design 1",
    role: "조장 / DB·Frontend",
    summaryLines: [
      "캡스톤디자인 1 프로젝트",
      "학생들을 위한 맛집 웹 사이트 구축",
    ],
    tags: ["DB", "MySQL", "HTML/CSS"],
    modal: {
      badge: "웹 서비스",
      intro: [
        "캡스톤디자인1 프로젝트",
        "맛집 웹 사이트 설계 및 구축",
      ],
      roles: [
        "조장으로서 일정 조율 및 관리",
        "MySQL DB 스키마 설계",
        "리뷰 기능 구현",
        "HTML/CSS 웹 페이지 구현",
      ],
      results: ["A0 성적 취득"],
      resultBadges: [
        { icon: "⭐", label: "A0 성적" },
      ],
      techStack: ["DB", "MySQL", "HTML/CSS"],
      heroImages: [nyamModal],
    },
  },
  {
    id: "mlb",
    title: "MLB",
    image: mlbImage,
    subtitle: "ML Project",
    period: "2023.02",
    role: "데이터 분석",
    summaryLines: [
      "MLB 선수의 연봉 예측 프로젝트",
      "Stats API 활용",
    ],
    tags: ["API", "Crawling"],
    githubUrls: [
      { label: "GitHub", url: "https://github.com/jhyungit/ML_baseball_project" },
    ],
    modal: {
      badge: "ML",
      caption: [],
      intro: [
        "MLB 선수 데이터 기반 연봉 예측 프로젝트",
        "데이터 크롤링, 정제, ML",
      ],
      roles: [
        "MLB Stats API를 활용한 선수 데이터 수집 및 크롤링",
        "데이터 전처리 및 EDA, 연봉 예측 모델 구축",
      ],
      results: ["Linear Regression 모델 적용 결과 예측 달성"],
      resultBadges: [
        { icon: "🤖", label: "ML 모델" },
        { icon: "📊", label: "EDA" },
      ],
      techStack: ["Python", "API", "Crawling", "EDA", "sklearn"],
      heroImages: [mlbHero],
    },
  },
  {
    id: "pyspark",
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
      badge: "프로토타입",
      caption: [
        ["포스 홈 - POS 주사용 고객","금융 홈 - 통장거래 주사용 고객"],
        ["상품몰 - 다양한 상품 빠른 접근","페이 - 보유 카드로 신속한 페이"],
        ["IBK창공_ver.1","IBK창공_ver.2"],
        ["IBK BOARD_ver.1","IBK BOARD_ver.2"]
      ],
      intro: [
        "IBK 기업은행 슈퍼앱 기획/디자인 프로젝트",
        "사용자 플로우 및 IA 설계",
      ],
      roles: [
        "핵심 플로우 와이어프레임 제작",
        "디자인 시스템 일부 정의",
      ],
      results: ["내부 발표용 프로토타입 완성"],
      resultBadges: [
        { icon: "🗓", label: "2개월" },
        { icon: "🎨", label: "프로토타입" },
      ],
      techStack: ["Figma", "UX", "ProtoPie"],
      heroImages: [[ibkPos,ibkBank],[ibkProduct,ibkPay],[ibkChang1,ibkChang2],[ibkBoard1,ibkBoard2]],
    },
  },
];

export { projectCategories };
