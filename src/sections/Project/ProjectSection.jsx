// src/sections/ProjectSection.jsx
import React, { useState, useEffect } from "react";
import { projectCategories } from "../../data/project";
import "./ProjectSection.css";

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // 배경 스크롤 방지
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const isModalOpen = !!selectedProject;

  useEffect(() => {
    // 모달 열릴 때마다 첫 슬라이드로 초기화
    if (isModalOpen) {
      setHeroSlideIndex(0);
    }
  }, [isModalOpen]);

  // 선택된 프로젝트의 '원본' 히어로 이미지 배열
  // - 달리셔스: [img]
  // - 기업은행: [[img1,img2],[img3,img4], ...]
  const rawHeroImages =
    selectedProject?.modal?.heroImages ??
    (selectedProject?.modal?.heroImage
      ? [selectedProject.modal.heroImage]
      : []);

  // heroSlides: 항상 "슬라이드 단위 배열"로 맞춰주기
  // - 이미 2개씩 묶여 있으면 (기업은행) 그대로 사용
  // - 그냥 배열이면(달리셔스, 또는 [img1,img2,img3, ...]) 여기서 2개씩 묶기
  let heroSlides = [];

  if (rawHeroImages.length > 0) {
    if (Array.isArray(rawHeroImages[0])) {
      // 이미 [ [a,b], [c,d] ] 형태인 경우 (기업은행)
      heroSlides = rawHeroImages;
    } else {
      // [a,b,c,d] 형태인 경우 → [ [a,b], [c,d] ] 로 묶기 (달리셔스는 [ [a] ])
      for (let i = 0; i < rawHeroImages.length; i += 2) {
        heroSlides.push(rawHeroImages.slice(i, i + 2));
      }
    }
  }

  // 🔹 한 장만 있는지(달리셔스 같은 케이스) 편하게 체크
  const isSingleImage =
    heroSlides.length === 1 && heroSlides[0].length === 1;

  return (
    <section id="project" className="project-section">
      <div className="project-inner">
        <header className="project-header">
          <h2 className="project-title">Project</h2>
          <div className="project-title-underline" />
        </header>

        <div className="project-card-row">
          {projectCategories.map((project) => (
            <article
              key={project.id}
              className="project-card"
              onClick={() => handleOpenModal(project)}
            >
              <div className="project-card-top">
                <img
                  src={project.image}
                  className="project-card-image"
                  alt={project.title}
                />
                <div className="project-card-body">
                  <h3 className="project-card-subtitle">
                    {project.subtitle}
                  </h3>
                  <p className="project-card-summary">
                    {project.summaryLines[0]}
                    <br />
                    {project.summaryLines[1]}
                  </p>
                  <div className="project-card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className="project-modal-backdrop" onClick={handleCloseModal}>
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-modal-close"
              type="button"
              onClick={handleCloseModal}
            >
              ×
            </button>
            {/* ================= 상단 (고정 영역) ================= */}
            <div className="project-modal-top">
              {/* 🔥 히어로 이미지 영역 */}
              {heroSlides.length > 0 && (
                <div className="project-modal-hero">
                  {isSingleImage ? (
                    <div className="hero-single">
                      <img
                        src={heroSlides[0][0]}
                        alt={`${selectedProject.title} 대표 이미지`}
                      />
                      {selectedProject?.modal?.caption?.[0]?.[0] && (
                        <p className="hero-caption">
                          {selectedProject.modal.caption[0][0]}
                        </p>
                      )}
                    </div>
                  ) : (
                    <>
                      {heroSlides.length > 1 && (
                        <>
                          <button
                            type="button"
                            className={`hero-nav hero-nav-prev ${
                              heroSlideIndex === 0 ? "disabled" : ""
                            }`}
                            disabled={heroSlideIndex === 0}
                            onClick={() =>
                              heroSlideIndex > 0 &&
                              setHeroSlideIndex(heroSlideIndex - 1)
                            }
                          >
                            ‹
                          </button>

                          <button
                            type="button"
                            className={`hero-nav hero-nav-next ${
                              heroSlideIndex === heroSlides.length - 1
                                ? "disabled"
                                : ""
                            }`}
                            disabled={
                              heroSlideIndex === heroSlides.length - 1
                            }
                            onClick={() =>
                              heroSlideIndex < heroSlides.length - 1 &&
                              setHeroSlideIndex(heroSlideIndex + 1)
                            }
                          >
                            ›
                          </button>
                        </>
                      )}

                      <div className="hero-slide">
                        {heroSlides[heroSlideIndex].map((src, idx) => {
                          const captionText =
                            selectedProject?.modal?.caption?.[heroSlideIndex]?.[idx];

                          return (
                            <div
                              key={src + idx}
                              className="hero-image-wrapper"
                            >
                              <img
                                src={src}
                                alt={`${selectedProject.title} 화면 ${idx + 1}`}
                              />
                              {captionText && (
                                <p className="hero-caption">{captionText}</p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* 인디케이터 */}
              {heroSlides.length > 1 && (
                <div className="hero-dots">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`hero-dot ${
                        idx === heroSlideIndex ? "active" : ""
                      }`}
                      onClick={() => setHeroSlideIndex(idx)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* ================= 하단 (스크롤 영역) ================= */}
            <div className="project-modal-body">
              <div className="project-modal-header">
                <h3 className="project-modal-title">
                  {selectedProject?.title}{" "}
                  {selectedProject?.subtitle}
                </h3>
                {selectedProject?.modal?.badge && (
                  <span className="project-modal-badge">
                    {selectedProject.modal.badge}
                  </span>
                )}
              </div>

              {/* 소개 */}
              <div className="project-modal-section">
                <div className="project-modal-section-title">소개</div>
                <ul className="project-modal-list">
                  {selectedProject?.modal?.intro?.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>

              {/* 역할 */}
              <div className="project-modal-section">
                <div className="project-modal-section-title">역할</div>
                <ul className="project-modal-list">
                  {selectedProject?.modal?.roles?.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>

              {/* 성과 */}
              <div className="project-modal-section">
                <div className="project-modal-section-title">성과</div>
                <ul className="project-modal-list">
                  {selectedProject?.modal?.results?.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="project-modal-section">
                <div className="project-modal-section-title">
                  Tech Stack
                </div>
                <div className="project-modal-tech-tags">
                  {selectedProject?.modal?.techStack?.map((tag) => (
                    <span key={tag} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;