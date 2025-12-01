// src/sections/Skill/CoreSkillSection.jsx
import React, { useState } from "react";
import { skillCategories } from "../../data/skills";
import "./SkillSection.css";

const SkillSection = () => {
  const [activeCategoryId, setActiveCategoryId] = useState("data");

  const activeCategory =
    skillCategories.find((cat) => cat.id === activeCategoryId) ||
    skillCategories[0];

  return (
    <section id="skill" className="skill-section">
      <div className="skill-inner">
        {/* 섹션 타이틀 */}
        <div className="skill-title-block">
          <h2 className="skill-title">Core Skill</h2>
          <div className="skill-title-underline" />
        </div>

        {/* 카테고리 탭 */}
        <div className="skill-tab-row">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={
                "skill-tab-btn" +
                (category.id === activeCategoryId ? " is-active" : "")
              }
              onClick={() => setActiveCategoryId(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* 스킬 카드 영역 */}
        <div className="skill-card-row-wrapper">
          <div className="skill-card-row">
            {activeCategory.skills.map((skill) => (
              <article key={skill.id} className="skill-card">
                <div className="skill-card-label">{skill.name}</div>
                <div className="skill-card-logo-wrap">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="skill-card-logo"
                  />
                </div>
                <div className="skill-card-level-dots">
                {Array.from({ length: 5 }).map((_, idx) => {
                  const full = Math.floor(skill.level);   // 정수
                  const half = skill.level % 1 !== 0;     // 소수점 존재 여부

                  if (idx < full) {
                    return <span key={idx} className="dot full" />;
                  } 
                  if (idx === full && half) {
                    return <span key={idx} className="dot half" />;
                  }
                  return <span key={idx} className="dot empty" />;
                })}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 카테고리 설명 */}
        <p className="skill-description">{activeCategory.description}</p>
      </div>
    </section>
  );
};

export default SkillSection;