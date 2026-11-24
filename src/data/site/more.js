// src/data/site/more.js — #more 「그 외 프로젝트」
// 근거: REDESIGN_BRIEF.md §6.5, 끝의 「추가 결정 (2026-11-24)」
// 순서: 달리셔스 → 무신사 → 기타. 달리셔스·무신사는 작은 카드, 기타는 한 줄씩.

const featuredMore = [
  {
    id: "dalicious",
    title: "하이브리드 메뉴 추천 시스템 · 달리셔스",
    meta: "2023.01 – 2023.03 · T-academy 기업 연계 · 6인 팀 · CB 모델 담당 · 고객사 사무실 3개월 상주",
    summary: "구독형 외식 중개 플랫폼의 고객 데이터 기반 개인화 메뉴 추천 시스템 구축",
    badges: ["우수상 · 6팀 중 1등", "운영 시간 90% 단축", "2만 명 규모 고객사 계약 기여", "동아일보 보도"],
    strip: {
      problem: "운영팀이 고객에게 보여 줄 메뉴를 손으로 선정. 한 번에 30분",
      decision:
        "주문 기록이 한 번뿐인 고객도 추천받아야 한다. Cosine Similarity 기반 Content-Based 모델로 콜드 스타트 해결",
      result: "메뉴 선정 30분 → 3분(약 90% 단축) · 잠재고객 2만 명 규모 고객사 계약 성사에 기여",
    },
    // 접힌 상세 (<details>)
    details: {
      type: "list",
      items: [
        "사내 제공 고객·메뉴 데이터 약 5만 건 EDA 후 추천 피처 도출, Content-Based 모델 구현 (Cosine Similarity 유사도 계산)",
        "팀 공동: CB·CF·ML·DL 결합 하이브리드로 고도화 — 사용자 군집별 정확도를 측정해 상황에 맞는 모델이 자동 선택되도록 설계",
        "단 한 번의 주문 기록만으로 개인화 추천이 가능하도록 설계해 콜드 스타트 문제 해결",
      ],
    },
    stack: ["Python", "Pandas", "Scikit-learn", "Cosine Similarity", "PySpark"],
    links: [
      { label: "Code", href: "https://github.com/jhyungit/Final_project" },
      { label: "Press", text: "동아일보 기사", href: "https://www.donga.com/news/It/article/all/20230503/119128322/1" },
    ],
  },
  {
    id: "musinsa",
    title: "무신사 향수 평점 예측",
    meta: "T-academy ASAC 과정 · 6인 팀 · 데이터 수집(크롤러 구현)·EDA 담당, 모델링 공동 수행",
    summary: "가격·출고 정보·리뷰를 피처로 향수 평점을 예측하는 분류 모델 구축",
    badges: ["정확도 84.62%", "비정형 수집 문제 해결", "결측 0점 800건 원인 규명"],
    strip: {
      problem:
        "HTML 파싱으로 리뷰 수집 불가. EDA에서는 리뷰가 없는 상품이 0점으로 처리되어 0점과 5점에 분포가 몰림",
      decision:
        "DevTools Network 탭으로 HTTP 요청 패턴을 추적해 GET 호출을 코드로 재현. 0점은 지우지 않고 '리뷰 없음' 구간으로 두는 3진 분류(0점 / 1–4점 / 5점) 제안",
      result: "6진(0~5점) 36.15% · 2진 71.53% · 3진 84.62% — 3진 채택 (Random Forest, 교차검증 5회 평균)",
    },
    // 접힌 상세: Phase 0 적용 후 project.js의 무신사 의사결정 블록.
    // 결정 7: "N클래스" → "N진"으로 통일. 단독 「클래스」 두 곳은 보고에서 확인 요청
    details: {
      type: "decision",
      decision: {
        title: "분류 기준 설계: 6진 → 2진 → 3진",
        problem:
          "평점(0~5점)을 6진으로 분류하면 정확도가 36.15%였다. EDA에서 확인한 분포 편중이 원인이라고 보고 분류 기준을 바꿨다.",
        rejected: {
          what: "0점(리뷰 없음)을 제외하고 1–4점 / 5점 2진으로 분류",
          why: "정확도는 71.53%로 올랐지만 0점 상품을 모두 버려야 했고, 예측 결과가 5점 여부뿐이라 활용도가 낮았다.",
        },
        chosen:
          "0점 / 1–4점 / 5점 3진을 채택했다. 0으로 채워진 결측을 버리지 않고 별도 클래스로 분리했다. Random Forest 교차검증 5회 평균 84.62%(GridSearch 후 86.00%), XGBoost 평균 84.96%(GridSearch 후 86.42%). 피처 중요도는 리뷰 수, 가격 순이었다.",
        breaksWhen:
          "0점 클래스는 리뷰 수가 0인 상품과 사실상 같아서 리뷰 수 피처로 쉽게 구분된다. 정확도 상승분 일부는 여기서 나왔을 수 있다. 또 1–4점을 한 클래스로 묶었으므로 중간 평점 간 차이는 예측하지 못한다. 이 차이가 중요하다면 회귀나 순서형 분류가 맞다.",
      },
    },
    stack: ["Python", "Pandas", "Scikit-learn", "Random Forest", "DevTools (Network)"],
    links: [],
  },
];

// 기타 — 한 줄씩. href가 null이면 링크 없음
const otherProjects = [
  {
    name: "yorr-arcade",
    desc: "개인 프로젝트 · 1인 개발. 게임 2종이 팀 서비스 YORR에 채택(최종 라인업 3종 중 2종). 팀 서비스로의 이식은 팀원 담당",
    stack: ["React", "TypeScript", "Three.js", "Socket.IO", "Vite"],
    href: "https://github.com/jhyungit/yorr-arcade",
  },
  {
    name: "냐암냐암",
    desc: "학생 맛집 웹. 캡스톤디자인 1 · 3인 팀 조장. 코드 작성·데이터베이스 구축·발표 담당",
    stack: ["PHP", "관계형 DB"],
    href: null,
  },
  {
    name: "PySpark 마포구 카페 현황 분석",
    desc: "대용량 처리·시각화",
    stack: ["PySpark", "Python"],
    href: "https://github.com/jhyungit/PySpark-project",
  },
  {
    name: "MLB 선수 연봉 예측",
    desc: "MLB Stats API로 수집한 선수 기록으로 연봉 예측",
    stack: ["Python", "Linear Regression"],
    href: "https://github.com/jhyungit/ML_baseball_project",
  },
];

export { featuredMore, otherProjects };
