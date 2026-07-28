// src/sections/Home/HomeSection.jsx
import "../../App.css";
import "./HomeSection.css";
import resumePdf from "../../data/이정현_CV.pdf";
import { useTyping } from "../../hooks/useTyping";

function HomeSection() {
  const [typedRole, roleDone] = useTyping("Backend Developer · Data-driven", { delay: 50, speed: 60 });
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero" id="home">
      <main className="hero-main">
        <div className="hero-greeting">
          <p className="hero-hi">안녕하세요 👋</p>
          <p className="hero-role-label">
            {typedRole}
            <span className={`hero-cursor${roleDone ? ' hero-cursor--done' : ''}`} aria-hidden="true" />
          </p>
          <h1 className="hero-headline">
            <span className="highlight-name">이정현</span>입니다
          </h1>
        </div>

        <p className="hero-value">
          데이터 분석을, 실제 서비스로 완성하는 백엔드 개발자입니다.
        </p>

        {/* CTA: Resume(주) > GitHub > About */}
        <div className="hero-cta">
          <a
            className="hero-btn hero-btn-primary"
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
          >
            <span>Resume</span>
            <span className="hero-btn-icon" data-direction="out" aria-hidden="true">↗</span>
          </a>

          <a
            className="hero-btn"
            href="https://github.com/jhyungit"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <span className="hero-btn-icon" data-direction="out" aria-hidden="true">↗</span>
          </a>

          <button
            className="hero-btn"
            type="button"
            onClick={() => scrollToSection("about")}
          >
            <span>About</span>
            <span className="hero-btn-icon" data-direction="down" aria-hidden="true">↓</span>
          </button>
        </div>

        <section className="hero-strengths">
          <h2 className="hero-strengths-title">KEY STRENGTHS</h2>
          <p className="hero-strengths-text">
            건강한 개발자 · Hard worker · Fast learner · Reliable teammate
          </p>
        </section>
      </main>

      <button
        className="hero-scroll"
        type="button"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About section"
      >
        <span className="hero-scroll-label">Scroll</span>
        <span className="hero-scroll-arrow">⌄</span>
      </button>
    </section>
  );
}

export default HomeSection;
