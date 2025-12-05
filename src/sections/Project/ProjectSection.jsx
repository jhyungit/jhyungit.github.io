// src/sections/Career.jsx
import React, { useState } from "react";
import { projectCategories } from "../../data/project";
import "./ProjectSection.css";

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    // 배경 스크롤 방지 (선택 사항)
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const isModalOpen = !!selectedProject;
  
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
                  />
                <div className="project-card-body">
                  <h3 className="project-card-subtitle">{project.subtitle}</h3>
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
            onClick={(e) => e.stopPropagation()} // 모달 안 클릭시 닫히지 않도록
          >
            <button
              className="project-modal-close"
              type="button"
              onClick={handleCloseModal}
            >
              ×
            </button>

            {selectedProject?.modal?.heroImage && (
              <div className="project-modal-hero">
                <img
                  src={selectedProject.modal.heroImage}
                  alt={selectedProject.title}
                />
              </div>
            )}

            <div className="project-modal-header">
              <h3 className="project-modal-title">
                {selectedProject?.title} {selectedProject?.subtitle && " "}
                {selectedProject?.subtitle}
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

            <div className="project-modal-section">
              <div className="project-modal-section-title">역할</div>
              <ul className="project-modal-list">
                {selectedProject?.modal?.roles?.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="project-modal-section">
              <div className="project-modal-section-title">성과</div>
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
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectSection;