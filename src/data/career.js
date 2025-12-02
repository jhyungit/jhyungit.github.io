import asacLogo from "../assets/career-photo/asac-logo.png";
import mjuLogo from "../assets/career-photo/mju-logo.png";
import ilscPhoto from "../assets/career-photo/ilsc-photo.png";
import ilscAward from "../assets/career-photo/ilsc-award.png";
import ibkIntern from "../assets/career-photo/ibk-intern.png";
import ibkAward from "../assets/career-photo/ibk-award.png";
import deliciousLogo from "../assets/career-photo/delicious-logo.png";

const educationList = [
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
    period: "2019.02 ~ 2020.02",
    tag: "어학",
    title: "Australia · 어학 연수",
    descriptionLines: [
      "약 1년 간 호주에서 외국 친구들과 함께 영어 학습 및 교류하며 생활",
      "ILSC Sydney - Intermediate → Advanced 과정 수료, 우수 학생 선정",
      "Waterfront Southgate 근무 (2019.08 ~ 2019.12)"
    ],
    imageAlt: "어학연수 사진",
    imageUrl: ilscPhoto,
    imageType: "photo",
    awardLabel: "우수 학생", // 작은 화면에서 카드 안에 보여줄 수상 뱃지 텍스트
    openType: "image",    // 팝업으로 열기
    link: ilscAward
  }
];

const experienceList = [
  {
    period: "2023.09 ~ 2023.08",
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
    awardLabel: "우수상"
  }
];

const certifications = [
  { label: "OPIc IH" },
  { label: "정보처리기사 · 2024.12" },
  // { label: "SQLD · 2025.12" },
  // { label: "자동차 운전면허 (1·2종 보통)" }
];

export { educationList, experienceList, certifications };