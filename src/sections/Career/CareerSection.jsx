// src/sections/Career.jsx
import React, { useState, useRef, useEffect } from "react";
import { useInView } from '../../hooks/useInView';
import { educationList, experienceList, certifications } from "../../data/career";
import "./CareerSection.css";

const CareerCard = React.forwardRef(function CareerCard({ item, onOpenImage }, ref) {
  return (
    <article className="career-card" ref={ref}>
      {/* 상단바: 태그 + 링크 버튼 */}
      <div className="career-card-topbar">
        {item.tag && <span className="career-card-tag">{item.tag}</span>}
        <button
          className="career-card-link-btn"
          aria-label={item.openType === "image" ? "이미지 확대 보기" : `${item.title} 방문`}
          onClick={() => {
            if (item.openType === "image") {
              onOpenImage?.(item.link, item.imageAlt ?? "상세 이미지");
            } else if (item.link) {
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

      {/* 메인: 로고 + 제목/기간 */}
      <div className="career-card-main">
        {item.imageUrl && (
          <div className="career-card-logo-wrapper">
            <img
              src={item.imageUrl}
              alt={item.imageAlt}
              className="career-card-image"
            />
          </div>
        )}
        <div className="career-card-title-group">
          <h3 className="career-card-title">
            {item.title}
            {item.badge && (
              <span className="career-card-title-badge">{item.badge}</span>
            )}
          </h3>
          <div className="career-card-period">{item.period}</div>
        </div>
      </div>

      {/* 설명 */}
      <ul className="career-card-desc">
        {item.descriptionLines.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>

      {item.awardLabel && (
        <div className="career-card-award-badge">
          <span className="award-icon">🏆</span>
          <span className="award-text">{item.awardLabel}</span>
        </div>
      )}
    </article>
  );
});

export default function Career() {
  const [popupImage, setPopupImage] = useState(null); // { src, alt }
  const [ref, isVisible] = useInView();
  const railRef = useRef(null);
  const careerModalCloseRef = useRef(null);

  // 연도 배지 위치 ref: 2026→SSAFY, 2022→ASAC, 2023→IBK, 2017→명지대
  const ssafyRef = useRef(null);
  const asacRef  = useRef(null);
  const mjuRef   = useRef(null);
  const ibkRef   = useRef(null);

  const [railPositions, setRailPositions] = useState({
    y2026: 0,
    y2022: 280,
    y2017: 520,
    y2023: 900,
  });

  useEffect(() => {
    if (!popupImage) return;

    const scrollY = window.scrollY;
    document.body.dataset.careerScrollY = String(scrollY);
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    careerModalCloseRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setPopupImage(null);
      if (e.key === 'Tab') e.preventDefault();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      const savedY = parseInt(document.body.dataset.careerScrollY || "0", 10);
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      delete document.body.dataset.careerScrollY;
      window.scrollTo({ top: savedY, left: 0, behavior: "auto" });
      html.style.scrollBehavior = prev;
    };
  }, [popupImage]);

  useEffect(() => {
    function updatePositions() {
      if (!railRef.current) return;
      const railRect = railRef.current.getBoundingClientRect();

      const getPos = (r) => {
        if (!r.current) return null;
        const rect = r.current.getBoundingClientRect();
        return rect.top - railRect.top + rect.height / 2 - 14;
      };

      setRailPositions({
        y2026: getPos(ssafyRef) ?? 0,
        y2022: getPos(asacRef)  ?? 280,
        y2017: getPos(mjuRef)   ?? 520,
        y2023: getPos(ibkRef)   ?? 900,
      });
    }

    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, [isVisible]);

  const yearBadges = [
    { key: 'y2026', label: '2026', pos: railPositions.y2026 },
    { key: 'y2022', label: '2022', pos: railPositions.y2022 },
    { key: 'y2017', label: '2017', pos: railPositions.y2017 },
    { key: 'y2023', label: '2023', pos: railPositions.y2023 },
  ];

  return (
    <section ref={ref} className={`section career fade-up${isVisible ? ' is-visible' : ''}`} id="career">
      <div className="career-inner">
        <header className="career-header">
          <h2 className="title">Career</h2>
          <div className="title-underline" />
        </header>

        <div className="career-content">
          {/* 왼쪽 타임라인 레일 – PC 전용 */}
          <aside className="career-rail" ref={railRef}>
            <div className="career-rail-line" />
            {yearBadges.map(({ key, label, pos }) => (
              <div key={key} className="career-rail-item" style={{ top: `${pos}px` }}>
                <span className="career-rail-year">{label}</span>
              </div>
            ))}
          </aside>

          <main className="career-main">
            {/* 교육 */}
            <section className="career-group">
              <h3 className="career-group-title">교육</h3>
              <div className="career-group-list">
                {educationList.map((item, idx) => (
                  <CareerCard
                    key={idx}
                    ref={
                      idx === 0 ? ssafyRef :
                      idx === 1 ? asacRef  :
                      idx === 2 ? mjuRef   :
                      null
                    }
                    item={item}
                    onOpenImage={(src, alt) => setPopupImage({ src, alt })}
                  />
                ))}
              </div>
            </section>

            {/* 경력 */}
            <section className="career-group">
              <h3 className="career-group-title">경력</h3>
              <div className="career-group-list">
                {experienceList.map((item, idx) => (
                  <CareerCard
                    key={idx}
                    ref={idx === 0 ? ibkRef : null}
                    item={item}
                    onOpenImage={(src, alt) => setPopupImage({ src, alt })}
                  />
                ))}
              </div>
            </section>

            {/* 자격증 – 역순 정렬, 발급기관 표시 */}
            <section className="career-group career-cert-group">
              <h3 className="career-group-title">자격증</h3>
              <div className="career-cert-badges">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="career-cert-badge">
                    <span className="career-cert-label">{cert.label}</span>
                    <span className="career-cert-meta">
                      {cert.date && <span className="career-cert-date">{cert.date}</span>}
                      <span className="career-cert-issuer">{cert.issuer}</span>
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* 이미지 팝업 모달 */}
      {popupImage && (
        <div
          className="career-image-modal"
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대"
          onClick={(e) => {
            if (e.target === e.currentTarget) setPopupImage(null);
          }}
        >
          <div className="career-image-modal-content">
            <button
              ref={careerModalCloseRef}
              className="career-image-modal-close"
              aria-label="닫기"
              onClick={() => setPopupImage(null)}
            >
              ✕
            </button>
            <img src={popupImage.src} alt={popupImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
}
