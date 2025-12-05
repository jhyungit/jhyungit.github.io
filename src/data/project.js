import daliImage from "../assets/project-photo/dali.png";

const projectCategories = [
  {
    id: "kurrant",
    title: "KURRANT.MEAL",
    image: daliImage,
    subtitle: "추천 시스템",
    summaryLines: [
      "달리셔스, ‘구독형 외식 중개 플랫폼’",
      "사용자 데이터 기반 메뉴 추천 시스템 구축",
    ],
    tags: ["Python", "sklearn", "Pandas"],
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
        "잠재 보유 고객 2만 명 보유 회사와 계약 확립",
        "최종 발표 우수상 수상",
      ],
      techStack: ["Python", "sklearn", "Pandas"],
      heroImage: "/images/projects/kurrant_hero.png", // 네가 가진 경로로 수정
    },
  },
  {
    id: "supperapp",
    title: "SUPPER APP",
    subtitle: "기업은행 슈퍼앱",
    summaryLines: [
      "i-ONE Bank, Box POS 등 4가지 앱",
      "의 슈퍼앱 프로토타입 구현",
    ],
    tags: ["Figma", "UX 설계"],
    modal: {
      badge: "프로토타입",
      intro: [
        "IBK 기업은행 슈퍼앱 기획/디자인 프로젝트",
        "사용자 플로우 및 IA 설계",
      ],
      roles: [
        "핵심 플로우 와이어프레임 제작",
        "디자인 시스템 일부 정의",
      ],
      results: ["내부 발표용 프로토타입 완성"],
      techStack: ["Figma", "UX", "ProtoPie"],
      heroImage: "/images/projects/supperapp_hero.png",
    },
  },
];

export { projectCategories };