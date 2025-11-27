// src/sections/Career.jsx
import React from "react";
import "./CareerSection.css";
import asacLogo from "../../assets/asac-logo.png";
import mjuLogo from "../../assets/mju-logo.png";
import ilscPhoto from "../../assets/ilsc-photo.png";
import ibkIntern from "../../assets/ibk-intern.png";
import deliciousLogo from "../../assets/delicious-logo.png";

const educationList = [
  {
    period: "2022.09 ~ 2023.03",
    tag: "부트캠프",
    title: "ASAC 빅데이터 분석가 과정 1기",
    descriptionLines: [
      "920시간 교육 과정, 한국고용노동부, SK planet 주관",
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
      "워킹홀리데이: Waterfront Southgate 근무 (2019.08 ~ 2019.12)"
    ],
    imageAlt: "어학연수 사진",
    imageUrl: ilscPhoto,
    awardLabel: "우수 학생", // 🔥 작은 화면에서 카드 안에 보여줄 수상 뱃지 텍스트
    link: "https://example.com"
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
    link: "https://example.com",
    // 🔥 작은 화면에서 카드 안에 보여줄 수상 뱃지 텍스트
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
  { label: "자동차 운전면허" }
];

function CareerCard({ item }) {
  return (
    <article className="career-card">
      <div className="career-card-left">
        <div className="career-card-period">{item.period}</div>
        {item.imageUrl && (
          <div className="career-card-image-wrapper">
            <img
              src={item.imageUrl}
              alt={item.imageAlt}
              className="career-card-image"
            />
          </div>
        )}
      </div>

      <div className="career-card-body">
        <div className="career-card-header-row">
          <h3 className="career-card-title">{item.title}</h3>

          <button
            className="career-card-link-btn"
            onClick={() => window.open(item.link, "_blank")}
          >
            ↗
            <span className="career-card-link-label">Click Here</span>
          </button>
        </div>

        <ul className="career-card-desc">
          {item.descriptionLines.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
        
        {item.tag && <span className="career-card-tag">{item.tag}</span>}
        
        {/* 🔥 작은 화면에서만 보이도록 CSS로 제어할 우측 트로피 뱃지 */}
          {item.awardLabel && (
            <div className="career-card-award-badge">
              <span className="award-icon">🏆</span>
              <span className="award-text">{item.awardLabel}</span>
            </div>
          )}
      </div>
    </article>
  );
}

export default function Career() {
  return (
    <section className="career-section" id="career">
      <div className="career-inner">
        {/* 섹션 제목 */}
        <header className="career-header">
          <h2 className="career-title">Career</h2>
          <div className="career-title-underline" />
        </header>

        <div className="career-content">
          {/* 왼쪽 타임라인 레일 – PC 전용, 모바일에서는 CSS로 숨김 */}
          <aside className="career-rail">
            <div className="career-rail-line" />

            <div className="career-rail-item rail-item-1">
              <span className="career-rail-icon">🏆</span>
              <span className="career-rail-label">우수학생</span>
            </div>

            <div className="career-rail-item rail-item-2">
              <span className="career-rail-icon">🏆</span>
              <span className="career-rail-label">
                우수팀
                <br />
                우수인턴
              </span>
            </div>

            <div className="career-rail-item rail-item-3">
              <span className="career-rail-icon">🏆</span>
              <span className="career-rail-label">우수상</span>
            </div>
          </aside>

          {/* 오른쪽 실제 카드들 */}
          <main className="career-main">
            {/* 경력 섹션 */}
            <section className="career-group">
              <h3 className="career-group-title">교육</h3>
              <div className="career-group-list">
                {educationList.map((item, idx) => (
                  <CareerCard key={idx} item={item} />
                ))}
              </div>
            </section>

            {/* 경력 섹션 */}
            <section className="career-group">
              <h3 className="career-group-title">경력</h3>
              <div className="career-group-list">
                {experienceList.map((item, idx) => (
                  <CareerCard key={idx} item={item} />
                ))}
              </div>
            </section>

            {/* 자격 섹션 */}
            <section className="career-group career-cert-group">
              <h3 className="career-group-title">자격증</h3>
              <div className="career-cert-badges">
                {certifications.map((cert, idx) => (
                  <span key={idx} className="career-cert-badge">
                    {cert.label}
                  </span>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
}