// src/sections/Skill/SkillSection.jsx
import { skillIntro, skillCategories } from "../../data/skills";
import { useInView } from '../../hooks/useInView';
import "./SkillSection.css";

// 왼쪽 카테고리명, 오른쪽 기술 pill이 줄바꿈되며 나열되는 행 구조.
// note(프로젝트별 설명)는 데이터에만 남기고 화면에는 이름만 보인다
const SkillSection = () => {
  const [ref, isVisible] = useInView();

  return (
    <section ref={ref} id="skill" className={`section fade-up${isVisible ? ' is-visible' : ''}`}>
      <div className="skill-inner">
        <div className="skill-title-block">
          <h2 className="title">Core Skills</h2>
          <div className="title-underline" />
          <p className="skill-intro">{skillIntro}</p>
        </div>

        {skillCategories.map((category) => (
          <div key={category.id} className="skill-group">
            <h3 className="skill-group-label">{category.label}</h3>
            <ul className="skill-pills">
              {category.skills.map((skill) => (
                <li
                  key={skill.id}
                  className={`skill-pill${skill.primary ? " is-primary" : ""}`}
                >
                  {skill.name}
                  {/* 채움/테두리 차이는 눈으로만 보이므로 스크린리더에는 글로 알린다 */}
                  {skill.primary && <span className="sr-only"> (주력)</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
