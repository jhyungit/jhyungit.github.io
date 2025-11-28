// src/sections/Career.jsx
import React, { useState } from "react";
import { educationList, experienceList, certifications } from "../../data/career";
import "./CareerSection.css";

function CareerCard({ item, onOpenImage }) {
  return (
    <article className="career-card">
      <div className="career-card-left">
        <div className="career-card-top-row">
            {item.tag && <span className="career-card-tag">{item.tag}</span>}
            <div className="career-card-period">{item.period}</div>
        </div>
        
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
            onClick={() => {
              if (item.openType === "image") {
                // 🔥 팝업으로 이미지 보여주기
                onOpenImage?.(item.link);
              } else if (item.link) {
                // 🔗 기본: 외부 링크 새 탭
                window.open(item.link, "_blank");
              }
            }}
          >
            ↗
            <span className="career-card-link-label">
                 {item.openType === "image" ? "Check Photo" : "Visit now"}
            </span>
          </button>
        </div>

        <ul className="career-card-desc">
          {item.descriptionLines.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
        
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
  const [popupImage, setPopupImage] = useState(null);
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
                    <CareerCard
                    key={idx}
                    item={item}
                    onOpenImage={(src) => setPopupImage(src)}
                    />
                ))}
              </div>
            </section>

            {/* 경력 섹션 */}
            <section className="career-group">
              <h3 className="career-group-title">경력</h3>
              <div className="career-group-list">
                {experienceList.map((item, idx) => (
                    <CareerCard
                    key={idx}
                    item={item}
                    onOpenImage={(src) => setPopupImage(src)}
                    />
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
      
    {/* 팝업 모달 넣는 자리 */}
      {popupImage && (
        <div
          className="career-image-modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) setPopupImage(null);
          }}
        >
          <div className="career-image-modal-content">
            <button
              className="career-image-modal-close"
              onClick={() => setPopupImage(null)}
            >
              ✕
            </button>
            <img src={popupImage} alt="상세 이미지" />
          </div>
        </div>
      )}
      {/* 팝업 모달 */}
    </section>
  );
}