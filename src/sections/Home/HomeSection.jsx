// src/sections/Home/HomeSection.jsx
import "../../App.css";
import "./HomeSection.css";

// public/resume.pdf를 정적 경로로 참조한다. 번들에 넣으면 Vite가 해시를 붙여
// 배포마다 이력서 URL이 바뀐다 (vite.config.js의 base는 '/').
// download 속성은 쓰지 않는다 — 새 탭에서 바로 훑어보게 둔다.
const RESUME_URL = "/resume.pdf";

function HomeSection() {
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
          <p className="hero-role-label">Backend Developer</p>
          <h1 className="hero-headline">
            <span className="highlight-name">이정현</span>입니다
          </h1>
        </div>

        <p className="hero-value">
          Spring Boot 기반 API 서버를 설계하고, 쿼리·인덱스로 응답 속도를 개선하는 백엔드 개발자입니다.
        </p>

        {/* CTA: Resume(주) > GitHub > About */}
        <div className="hero-cta">
          <a
            className="hero-btn hero-btn-primary"
            href={RESUME_URL}
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
