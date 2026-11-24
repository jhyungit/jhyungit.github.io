//career.js
import ssafyLogo from "../assets/career-photo/ssafy-logo.png";
import asacLogo from "../assets/career-photo/asac-logo.png";
import mjuLogo from "../assets/career-photo/mju-logo.png";
import ilscPhoto from "../assets/career-photo/ilsc-photo.png";
import ilscAward from "../assets/career-photo/ilsc-award.webp";
import ibkIntern from "../assets/career-photo/ibk-intern.png";
import ibkAward from "../assets/career-photo/ibk-award.webp";
import deliciousLogo from "../assets/career-photo/delicious-logo.png";

const educationList = [
  {
    period: "2026.01 입과 · 1,725h 과정",
    tag: "부트캠프",
    title: "SSAFY 15기 전공 Java반",
    badge: "1학기 반장",
    descriptionLines: [
      "삼성청년SW·AI아카데미(SSAFY) 전공 Java 과정",
      "Java 기반 객체지향 프로그래밍(OOP), 자료구조 및 알고리즘 학습",
      "Spring/Spring Boot 기반 웹 애플리케이션 개발 및 팀 프로젝트 수행",
      "MySQL을 활용한 데이터베이스 설계 및 SQL 쿼리 작성",
      "Git을 활용한 형상관리 및 협업 경험, Notion·Mattermost를 통한 팀 커뮤니케이션",
      "STS, Eclipse, VSCode 및 Webex 환경에서 개발 및 협업 진행"
    ],
    imageAlt: "SSAFY 로고",
    imageUrl: ssafyLogo,
    link: "https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp"
  },
  {
    period: "2022.09 ~ 2023.03",
    tag: "부트캠프",
    title: "ASAC 빅데이터 분석가 과정 1기",
    descriptionLines: [
      "920시간, 한국고용노동부, SK planet 주관",
      "데이터 수집, 전처리, EDA, 모델링 등 데이터 분석 전 과정 실습",
      "PyTorch 및 TensorFlow 기반 ML/DL 모델 개발 및 프로젝트 수행",
      "PySpark와 SQL을 활용한 대용량 데이터 처리 및 분석",
      "팀 프로젝트를 통해 분석 결과를 Tableau, Matplotlib로 시각화하고 모델 성능 개선 경험"
    ],
    imageAlt: "ASAC 로고",
    imageUrl: asacLogo,
    link: "https://tacademy.skplanet.com/frontMain.do"
  },
  {
    period: "2017.03 ~ 2022.02",
    tag: "학력",
    title: "명지대학교 정보통신공학과 졸업",
    descriptionLines: [
      "프로그래밍 트랙으로 데이터 분석 · 알고리즘 · 보안 등 강의 위주로 수강",
      "주요 전공: 빅데이터분석, 알고리즘, 정보보안, IoT보안",
      "프로그래밍: Python, C, C++, Java 등",
      "기타: 웹프로그램, 모바일프로그램 등 실습 위주 강의 수강"
    ],
    imageAlt: "명지대 로고",
    imageUrl: mjuLogo,
    link: "https://ince.mju.ac.kr/ince/index.do"
  },
  {
    period: "2019.02 ~ 2020.01",
    tag: "어학",
    title: "Australia · 어학 연수",
    descriptionLines: [
      "11개월 간 호주에서 외국 친구들과 함께 영어 학습 및 교류하며 생활",
      "ILSC Sydney - Intermediate → Advanced 과정 수료, 우수 학생 선정",
      "Waterfront Southgate 근무 (2019.07 ~ 2019.12)"
    ],
    imageAlt: "어학연수 사진",
    imageUrl: ilscPhoto,
    imageType: "photo",
    awardLabel: "우수 학생",
    openType: "image",
    link: ilscAward
  }
];

const experienceList = [
  {
    period: "2023.07 ~ 2023.08",
    tag: "인턴",
    title: "IBK기업은행",
    descriptionLines: [
      "IT금융개발부 IT글로벌개발팀 청년인턴",
      "금융 IT 트렌드 조사 및 타 금융사 슈퍼앱 벤치마킹",
      "i-ONE Bank, Box POS 등 4개 앱을 통합한 슈퍼앱 프로토타입(Figma) 기획·설계",
      "개인/기업 고객 특성을 반영한 Flowchart 로직 설계(금융홈·포스홈 분리)",
      "IT본부장 참석 최종 발표에서 우수인턴 선정"
    ],
    imageAlt: "IBK 인턴 사진",
    imageUrl: ibkIntern,
    link: ibkAward,
    imageType: "photo",
    openType: "image",
    awardLabel: "우수인턴"
  },
  {
    period: "2023.01 ~ 2023.03",
    tag: "기업 프로젝트",
    title: "달리셔스",
    descriptionLines: [
      "교육생으로서 기업 실전 프로젝트에 참여해 추천 시스템 구축",
      "추천 시스템 학습 및 기획",
      "Data Pre-processing · EDA · Modeling",
      "CB · CF · ML · DL 융합한 하이브리드 맞춤형 추천 시스템 구축"
    ],
    imageAlt: "달리셔스 로고",
    imageUrl: deliciousLogo,
    link: "https://www.donga.com/news/It/article/all/20230503/119128322/1#in_cont",
    awardLabel: "우수상 (6팀 중 1등)"
  }
];

// 표기 순서 고정: 정보처리기사 → SQLD → ADsP → OPIc IH. 발급기관 명시
const certifications = [
  { label: "정보처리기사",            date: "2024.12", issuer: "한국산업인력공단"     },
  { label: "SQLD (SQL 개발자)",       date: "2025.12", issuer: "한국데이터산업진흥원" },
  { label: "ADsP (데이터분석 준전문가)", date: "2026.11", issuer: "한국데이터산업진흥원" },
  { label: "OPIc IH",                date: "2025.06", issuer: "ACTFL"              },
];

export { educationList, experienceList, certifications };
