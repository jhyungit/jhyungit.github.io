// src/sections/Project/ProjectSection.jsx
import {
  useState,
  useEffect,
  useMemo,
  useRef,
  useLayoutEffect,
} from "react";
import ReactDOM from "react-dom";
import { projectCategories } from "../../data/project";
import gitIcon from "../../assets/foot-icons/icon_git.svg";
import { useInView } from '../../hooks/useInView';
import YorrArchitecture from "../../components/Diagram/YorrArchitecture";
import TripcrewArchitecture from "../../components/Diagram/TripcrewArchitecture";
import YorrMetrics from "../../components/Diagram/YorrMetrics";
import "./ProjectSection.css";

// "머리말: 내용" 형태면 첫 콜론 앞을 굵게. 콜론이 없으면 그대로 둔다
const withLead = (line) => {
  const i = line.indexOf(":");
  if (i < 0) return line;
  return (
    <>
      <strong>{line.slice(0, i)}</strong>
      {line.slice(i)}
    </>
  );
};

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [sectionRef, isVisible] = useInView();
  const projectModalRef = useRef(null);
  const projectCloseBtnRef = useRef(null);
  const lastFocusedRef = useRef(null);

  // 모달 이미지 확대 — 닫으면 확대를 연 이미지 버튼으로 포커스를 돌려준다
  const [zoomedImage, setZoomedImage] = useState(null);
  const zoomTriggerRef = useRef(null);
  const zoomCloseBtnRef = useRef(null);

  // ======================
  // Project 카드 캐러셀
  // ======================
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // 슬라이드 거리 측정용
  const trackRef = useRef(null);
  const [stepPx, setStepPx] = useState(0);

  // 반응형: 960↓ 2개, 640↓ 1개
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w <= 640) setVisibleCount(1);
      else if (w <= 960) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 캐러셀에는 featured가 지정된 항목만, 그 숫자 순서대로 노출한다.
  // featured: false 항목은 데이터에 남아 있고 나중에 "그 외 프로젝트"로 살린다.
  const featuredProjects = useMemo(
    () =>
      projectCategories
        .filter((p) => typeof p.featured === "number")
        .sort((a, b) => a.featured - b.featured),
    []
  );

  const totalProjects = featuredProjects.length;

  // startIndex의 최대값(끝에서 잘리지 않게)
  const maxStartIndex = useMemo(() => {
    return Math.max(0, totalProjects - visibleCount);
  }, [totalProjects, visibleCount]);

  // startIndex가 범위 밖이면 보정
  useEffect(() => {
    setStartIndex((prev) => Math.min(prev, maxStartIndex));
  }, [maxStartIndex]);

  const canPrev = startIndex > 0;
  const canNext = startIndex < maxStartIndex;

  // 카드 1칸 이동 거리(카드폭 + gap) 측정
  useLayoutEffect(() => {
    if (!trackRef.current) return;

    const measure = () => {
      const track = trackRef.current;
      const firstCard = track.querySelector(".project-card");
      if (!firstCard) return;

      const styles = window.getComputedStyle(track);
      const gap =
        parseFloat(styles.gap || styles.columnGap || "0") || 0;

      const cardWidth = firstCard.getBoundingClientRect().width;
      setStepPx(cardWidth + gap);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [visibleCount, totalProjects]);

  // ======================
  // Modal open/close
  // ======================
  const handleOpenModal = (project) => {
    lastFocusedRef.current = document.activeElement;
    setSelectedProject(project);

    const scrollY = window.scrollY;
    document.body.dataset.scrollY = String(scrollY);

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);

    const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);

    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    delete document.body.dataset.scrollY;

    window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });

    html.style.scrollBehavior = prevBehavior;

    setTimeout(() => lastFocusedRef.current?.focus(), 50);
  };


  const isModalOpen = !!selectedProject;

  useEffect(() => {
    if (isModalOpen) {
      setHeroSlideIndex(0);
      setTimeout(() => projectCloseBtnRef.current?.focus(), 50);
    }
  }, [isModalOpen]);

  const openZoom = (e, image) => {
    zoomTriggerRef.current = e.currentTarget;
    setZoomedImage(image);
  };

  const closeZoom = () => {
    setZoomedImage(null);
    setTimeout(() => zoomTriggerRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (zoomedImage) zoomCloseBtnRef.current?.focus();
  }, [zoomedImage]);

  // 확대 중의 Esc는 확대만 닫는다. 프로젝트 모달까지 닫지 않는다
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      if (zoomedImage) closeZoom();
      else handleCloseModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, zoomedImage]);

  // ======================
  // Modal hero slides
  // ======================
  const rawHeroImages =
    selectedProject?.modal?.heroImages ??
    (selectedProject?.modal?.heroImage
      ? [selectedProject.modal.heroImage]
      : []);

  let heroSlides = [];
  if (rawHeroImages.length > 0) {
    if (Array.isArray(rawHeroImages[0])) {
      heroSlides = rawHeroImages;
    } else {
      for (let i = 0; i < rawHeroImages.length; i += 2) {
        heroSlides.push(rawHeroImages.slice(i, i + 2));
      }
    }
  }

  const isSingleImage =
    heroSlides.length === 1 && heroSlides[0].length === 1;

  const zoomableImage = (src, alt, caption) => (
    <button
      type="button"
      className="hero-zoom-btn"
      aria-label={`${alt} 크게 보기`}
      onClick={(e) => openZoom(e, { src, alt, caption })}
    >
      <img src={src} alt={alt} loading="lazy" />
    </button>
  );

  return (
    <section ref={sectionRef} id="project" className={`section project-section fade-up${isVisible ? ' is-visible' : ''}`}>
      <div className="project-inner">
        <header className="project-header">
          <h2 className="title">Projects</h2>
          <div className="title-underline" />
        </header>

        {/* 캐러셀 래퍼 */}
        <div className="project-carousel">
          <button
            type="button"
            className={`project-carousel-btn prev ${
              !canPrev ? "disabled" : ""
            }`}
            disabled={!canPrev}
            onClick={() => setStartIndex((i) => Math.max(0, i - 1))}
            aria-label="이전 프로젝트"
          >
            ‹
          </button>

          {/* ✅ 슬라이드 뷰포트 + 트랙 */}
          <div className="project-viewport">
            <div
              className="project-track"
              ref={trackRef}
              style={{
                transform: `translateX(-${startIndex * stepPx}px)`,
              }}
            >
              {featuredProjects.map((project, idx) => (
                <article
                  key={`${project.id}-${idx}`}
                  className="project-card"
                  tabIndex={0}
                  role="button"
                  aria-label={`${project.subtitle} 상세 보기`}
                  onClick={() => handleOpenModal(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpenModal(project);
                    }
                  }}
                >
                  <div className="project-card-top">
                    <div className="project-card-media">
                      <img
                        src={project.image}
                        className="project-card-image"
                        alt={project.title}
                        loading="lazy"
                      />
                      {/* 카드 전체가 모달 버튼이라 클릭·키 입력이 카드로 번지지 않게 막는다.
                          Enter가 카드의 onKeyDown까지 올라가면 링크 대신 모달이 열린다 */}
                      {project.live && (
                        <a
                          className="live-badge"
                          href={project.live.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          onKeyDown={(e) => e.stopPropagation()}
                          aria-label={`${project.title} 라이브 사이트 새 창으로 열기`}
                        >
                          <span className="live-dot" aria-hidden="true" />
                          LIVE · 접속하기
                        </a>
                      )}
                    </div>

                    <div className="project-card-body">
                      {/* award가 없어도 같은 높이의 빈 줄을 둬서 카드 간 제목 높이를 맞춘다 */}
                      <span className="award-badge">
                        {project.award && (
                          <>
                            <span aria-hidden="true">🏆</span>
                            {project.award}
                          </>
                        )}
                      </span>
                      <h3 className="project-card-subtitle">
                        {project.subtitle}
                      </h3>

                      {/* 기간·역할·팀 메타칩 */}
                      {(project.period || project.role || project.teamSize) && (
                        <div className="project-card-meta">
                          {project.period && (
                            <span className="project-meta-chip">{project.period}</span>
                          )}
                          {project.teamSize && (
                            <span className="project-meta-chip">{project.teamSize}</span>
                          )}
                          {project.role && (
                            <span className="project-meta-chip project-meta-role">{project.role}</span>
                          )}
                        </div>
                      )}

                      <div className="project-card-summary">
                        {(project.summaryLines || []).map((line, i) => (
                          <p key={i} className="summary-line">
                            {line}
                          </p>
                        ))}
                      </div>

                      <div className="project-card-tags">
                        {(project.tags || []).map((tag) => (
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

          <button
            type="button"
            className={`project-carousel-btn next ${
              !canNext ? "disabled" : ""
            }`}
            disabled={!canNext}
            onClick={() =>
              setStartIndex((i) => Math.min(maxStartIndex, i + 1))
            }
            aria-label="다음 프로젝트"
          >
            ›
          </button>
        </div>

        {/* dots (한 칸 이동 기준) */}
        {maxStartIndex > 0 && (
          <div className="project-carousel-dots">
            {Array.from({ length: maxStartIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`project-carousel-dot ${
                  idx === startIndex ? "active" : ""
                }`}
                onClick={() => setStartIndex(idx)}
                aria-label={`프로젝트 슬라이드 ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ==================== 모달 — body Portal로 항상 화면 가운데 ==================== */}
      {isModalOpen && ReactDOM.createPortal(
        <div className="project-modal-backdrop" onClick={handleCloseModal}>
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            ref={projectModalRef}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key !== 'Tab') return;
              const focusable = projectModalRef.current?.querySelectorAll(
                'button, a[href], [tabindex]:not([tabindex="-1"])'
              );
              if (!focusable?.length) return;
              const first = focusable[0];
              const last = focusable[focusable.length - 1];
              if (e.shiftKey) {
                if (document.activeElement === first) { e.preventDefault(); last.focus(); }
              } else {
                if (document.activeElement === last) { e.preventDefault(); first.focus(); }
              }
            }}
          >
            <button
              ref={projectCloseBtnRef}
              className="project-modal-close"
              type="button"
              aria-label="닫기"
              onClick={handleCloseModal}
            >
              ×
            </button>

            <div className="project-modal-top">
              {heroSlides.length > 0 && (
                <div className="project-modal-hero">
                  {isSingleImage ? (
                    <div className="hero-single">
                      {zoomableImage(
                        heroSlides[0][0],
                        `${selectedProject.title} 대표 이미지`,
                        selectedProject?.modal?.caption?.[0]?.[0]
                      )}
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

                      <div className="hero-slide" key={heroSlideIndex}>
                        {heroSlides[heroSlideIndex].map((src, idx) => {
                          const captionText =
                            selectedProject?.modal?.caption?.[
                              heroSlideIndex
                            ]?.[idx];

                          return (
                            <div
                              key={src + idx}
                              className="hero-image-wrapper"
                            >
                              {zoomableImage(
                                src,
                                `${selectedProject.title} 화면 ${idx + 1}`,
                                captionText
                              )}
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

            <div className="project-modal-body">
              <div className="project-modal-header">
                <h3 className="project-modal-title" id="project-modal-title">
                  {selectedProject?.title} {selectedProject?.subtitle}
                </h3>
                {selectedProject?.modal?.badge && (
                  <span className="project-modal-badge">
                    {selectedProject.modal.badge}
                  </span>
                )}
              </div>

              <div className="project-modal-section">
                <div className="project-modal-section-title">소개</div>
                <ul className="project-modal-list">
                  {selectedProject?.modal?.intro?.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>

              {selectedProject?.modal?.roles && (
                <div className="project-modal-section">
                  <div className="project-modal-section-title">역할</div>
                  <ul className="project-modal-list">
                    {selectedProject.modal.roles.map((line, idx) => (
                      <li key={idx}>{withLead(line)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 담당 경계 — 팀 레포에 코드가 있다는 것과 내가 만들었다는 것은 다르다 */}
              {selectedProject?.modal?.myWork && (
                <div className="project-modal-section">
                  <div className="project-modal-section-title">담당 경계</div>
                  <div className="attribution">
                    <div className="attribution-col attribution-mine">
                      <h4 className="attribution-head">내가 한 일</h4>
                      <ul className="project-modal-list">
                        {selectedProject.modal.myWork.map((line, idx) => (
                          <li key={idx}>{withLead(line)}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="attribution-col attribution-team">
                      <h4 className="attribution-head">팀원이 한 일</h4>
                      <ul className="project-modal-list">
                        {selectedProject.modal.teamWork?.map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {selectedProject?.modal?.diagram === "yorr-architecture" && (
                <div className="project-modal-section">
                  <div className="project-modal-section-title">통신 구조</div>
                  <YorrArchitecture />
                </div>
              )}

              {selectedProject?.modal?.diagram === "tripcrew-architecture" && (
                <div className="project-modal-section">
                  <div className="project-modal-section-title">운영 구성</div>
                  <TripcrewArchitecture />
                </div>
              )}

              {selectedProject?.modal?.decisions && (
                <div className="project-modal-section">
                  <div className="project-modal-section-title">의사결정</div>
                  {selectedProject.modal.decisions.map((d, idx) => (
                    <div className="decision" key={idx}>
                      <h4 className="decision-title">{d.title}</h4>

                      <p className="decision-label">문제</p>
                      <p className="decision-text">{d.problem}</p>

                      <p className="decision-label">검토했으나 버린 대안</p>
                      <p className="decision-text">
                        <strong>{d.rejected.what}</strong> — {d.rejected.why}
                      </p>

                      <p className="decision-label">선택</p>
                      <p className="decision-text">{d.chosen}</p>

                      <p className="decision-label decision-label-warn">이 선택이 틀리게 되는 조건</p>
                      <p className="decision-text">{d.breaksWhen}</p>
                    </div>
                  ))}
                </div>
              )}

              {selectedProject?.modal?.incidents && (
                <div className="project-modal-section">
                  <div className="project-modal-section-title">장애 사례</div>
                  {selectedProject.modal.incidents.map((it, idx) => (
                    <div className="incident" key={idx}>
                      <h4 className="incident-title">
                        {it.title}
                        {it.tag && <span className="incident-tag">{it.tag}</span>}
                      </h4>
                      <dl className="incident-dl">
                        <dt>증상</dt>
                        <dd>{it.symptom}</dd>
                        <dt>원인 · 판단</dt>
                        <dd>{it.cause}</dd>
                        <dt>해결</dt>
                        <dd>{it.fix}</dd>
                      </dl>
                    </div>
                  ))}
                </div>
              )}

              <div className="project-modal-section">
                <div className="project-modal-section-title">성과</div>
                {selectedProject?.modal?.metrics === "yorr-metrics" && <YorrMetrics />}
                {selectedProject?.modal?.resultBadges?.length > 0 && (
                  <div className="project-modal-result-badges">
                    {selectedProject.modal.resultBadges.map((b, idx) => (
                      <span key={idx} className="project-result-badge">
                        <span className="project-result-badge-icon">{b.icon}</span>
                        {b.label}
                      </span>
                    ))}
                  </div>
                )}
                <ul className="project-modal-list">
                  {selectedProject?.modal?.results?.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>

              <div className="project-modal-section">
                <div className="project-modal-section-title">Tech Stack</div>
                <div className="project-modal-tech-tags">
                  {selectedProject?.modal?.techStack?.map((tag) => (
                    <span key={tag} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject?.githubUrls?.length > 0 && (
                <div className="project-modal-section">
                  <div className="project-modal-section-title">GitHub</div>
                  <div className="project-modal-links">
                    {selectedProject.githubUrls.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-modal-link-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img src={gitIcon} alt="GitHub" className="project-modal-link-icon" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 이미지 확대 — 프로젝트 모달 위에 겹친다. 포커스는 닫기 버튼 하나에 가둔다 */}
      {zoomedImage && ReactDOM.createPortal(
        <div
          className="project-modal-backdrop hero-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="이미지 크게 보기"
          onClick={closeZoom}
          onKeyDown={(e) => { if (e.key === 'Tab') e.preventDefault(); }}
        >
          <button
            ref={zoomCloseBtnRef}
            className="project-modal-close"
            type="button"
            aria-label="닫기"
            onClick={closeZoom}
          >
            ×
          </button>
          <figure className="hero-lightbox-figure">
            <img src={zoomedImage.src} alt={zoomedImage.alt} className="hero-lightbox-img" />
            {zoomedImage.caption && (
              <figcaption className="hero-caption">{zoomedImage.caption}</figcaption>
            )}
          </figure>
        </div>,
        document.body
      )}
    </section>
  );
};

export default ProjectSection;