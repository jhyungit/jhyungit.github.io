// src/sections/Skill/SkillSection.jsx
import { useState } from "react";
import { skillCategories } from "../../data/skills";
import { useInView } from '../../hooks/useInView';
import "./SkillSection.css";

// subGroup 키 → 화면 라벨. 매핑이 없으면 키를 그대로 쓴다
const SUBGROUP_LABELS = { frontend: "프론트엔드" };

function SkillList({ skills, isTransitioning }) {
  return (
    <div className={`skill-list-wrapper${isTransitioning ? " is-transitioning" : ""}`}>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill.id} className="skill-row">
            <span className="skill-row-name">{skill.name}</span>
            <span className="skill-row-note">{skill.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// subGroup 필드 유무만 보고 가른다. 카테고리 id에 결합하지 않는다
function splitBySubGroup(skills) {
  const main = [];
  const groups = new Map();
  for (const skill of skills) {
    if (!skill.subGroup) {
      main.push(skill);
      continue;
    }
    if (!groups.has(skill.subGroup)) groups.set(skill.subGroup, []);
    groups.get(skill.subGroup).push(skill);
  }
  return { main, groups: [...groups] };
}

const SkillSection = () => {
  const [activeCategoryId, setActiveCategoryId] = useState("backend");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [ref, isVisible] = useInView();

  const activeCategory =
    skillCategories.find((cat) => cat.id === activeCategoryId) || skillCategories[0];

  const { main, groups } = splitBySubGroup(activeCategory.skills);

  const handleTabClick = (id) => {
    if (id === activeCategoryId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategoryId(id);
      setIsTransitioning(false);
    }, 180);
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
              aria-pressed={category.id === activeCategoryId}
              onClick={() => handleTabClick(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <SkillList skills={main} isTransitioning={isTransitioning} />

        {groups.map(([key, skills]) => (
          <div key={key} className={`skill-subgroup${isTransitioning ? " is-transitioning" : ""}`}>
            <div className="skill-subgroup-header">
              <span className="skill-subgroup-label">{SUBGROUP_LABELS[key] || key}</span>
              <div className="skill-subgroup-line" />
            </div>
            <SkillList skills={skills} isTransitioning={isTransitioning} />
          </div>
        ))}

        <p className={`skill-description${isTransitioning ? " is-transitioning" : ""}`}>
          {activeCategory.description}
        </p>
      </div>
    </section>
  );
};

export default SkillSection;
