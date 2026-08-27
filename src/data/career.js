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
    period: "2026.01 ~ 현재",
    tag: "부트캠프",
    title: "SSAFY 15기 전공 Java반",
    badge: "반장",
    descriptionLines: [
      "삼성 청년 SW 아카데미(SSAFY) 전공 Java 과정",
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
      "Waterfront Southgate 근무 (2019.08 ~ 2019.12)"
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
      "IT금융개발부 글로벌개발팀 소속 인턴으로 금융 IT 실무 학습",
      "여신, 수신, 채널 등 금융 지식 학습",
      "사내 ERA 시스템 · 계정계/비계정계 학습",
      "금융 IT 통합 조사 과제 수행 및 프로젝트 발표 진행"
    ],
    imageAlt: "IBK 인턴 사진",
    imageUrl: ibkIntern,
    link: ibkAward,
    imageType: "photo",
    openType: "image",
    awardLabel: "우수팀 · 우수인턴"
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
    awardLabel: "우수상 (6팀 중 1위)"
  }
];

// 취득일 역순 정렬, 발급기관 명시
const certifications = [
  { label: "SQLD (SQL 개발자)", date: "2025.12", issuer: "한국데이터산업진흥원" },
  { label: "정보처리기사",       date: "2024.12", issuer: "한국산업인력공단"     },
  { label: "OPIc IH",           date: "2025.06", issuer: "ACTFL"              },
];

export { educationList, experienceList, certifications };
