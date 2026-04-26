// src/sections/Skill/CoreSkillSection.jsx
import React, { useState } from "react";
import { skillCategories } from "../../data/skills";
import { useInView } from '../../hooks/useInView';
import "./SkillSection.css";

function LevelDots({ level }) {
  return (
    <div className="skill-level-wrap">
      <div className="skill-card-level-dots">
        {Array.from({ length: 5 }).map((_, idx) => {
          const full = Math.floor(level);
          const half = level % 1 !== 0;
          if (idx < full)              return <span key={idx} className="dot full"  />;
          if (idx === full && half)    return <span key={idx} className="dot half"  />;
          return                              <span key={idx} className="dot empty" />;
        })}
      </div>
      <div className="skill-level-info">
        <span className="skill-level-info-btn" tabIndex={0} aria-label="숙련도 기준 안내">?</span>
        <div className="skill-level-tooltip" role="tooltip">
          <p><strong>5점</strong> — 실무 프로젝트 주도</p>
          <p><strong>3점</strong> — 독립 구현</p>
          <p><strong>2점</strong> — 학습 경험</p>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ skill, index = 0 }) {
  return (
    <article className="skill-card" style={{ '--card-index': index }}>
      <div className="skill-card-label">{skill.name}</div>
      <div className="skill-card-logo-wrap">
        <img src={skill.logo} alt={skill.name} className="skill-card-logo" />
      </div>
      <LevelDots level={skill.level} />
    </article>
  );
}

const SkillSection = () => {
  const [activeCategoryId, setActiveCategoryId] = useState("data");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [ref, isVisible] = useInView();

  const activeCategory =
    skillCategories.find((cat) => cat.id === activeCategoryId) || skillCategories[0];

  const isInfra = activeCategory.id === 'infra';
  const mainSkills = isInfra
    ? activeCategory.skills.filter((s) => s.subGroup !== 'docs')
    : activeCategory.skills;
  const docsSkills = isInfra
    ? activeCategory.skills.filter((s) => s.subGroup === 'docs')
    : [];

  const handleTabClick = (id) => {
    if (id === activeCategoryId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategoryId(id);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section ref={ref} id="skill" className={`section fade-up${isVisible ? ' is-visible' : ''}`}>
      <div className="skill-inner">
        <div className="skill-title-block">
          <h2 className="title">Core Skills</h2>
          <div className="title-underline" />
        </div>

        <div className="skill-tab-row">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={"skill-tab-btn" + (category.id === activeCategoryId ? " is-active" : "")}
              onClick={() => handleTabClick(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* 메인 스킬 카드 */}
        <div className={`skill-card-row-wrapper${isTransitioning ? " is-transitioning" : ""}`}>
          <div className="skill-card-row" key={activeCategoryId}>
            {mainSkills.map((skill, idx) => (
              <SkillCard key={skill.id} skill={skill} index={idx} />
            ))}
          </div>
        </div>

        {/* Documentation 서브그룹 */}
        {docsSkills.length > 0 && (
          <div className={`skill-subgroup${isTransitioning ? " is-transitioning" : ""}`}>
            <div className="skill-subgroup-header">
              <span className="skill-subgroup-label">Documentation</span>
              <div className="skill-subgroup-line" />
            </div>
            <div className="skill-card-row-wrapper">
              <div className="skill-card-row" key={activeCategoryId + '-docs'}>
                {docsSkills.map((skill, idx) => (
                  <SkillCard key={skill.id} skill={skill} index={idx} />
                ))}
              </div>
            </div>
          </div>
        )}

        <p className={`skill-description${isTransitioning ? " is-transitioning" : ""}`}>
          {activeCategory.description}
        </p>
      </div>
    </section>
  );
};

export default SkillSection;
