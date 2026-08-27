import { useInView } from "../../hooks/useInView";
import "./ContactSection.css";

// public/resume.pdf를 정적 경로로 참조한다. 번들에 넣으면 Vite가 해시를 붙여
// 배포마다 이력서 URL이 바뀐다 (vite.config.js의 base는 '/').
// download 속성은 쓰지 않는다 — 새 탭에서 바로 훑어보게 둔다.
const RESUME_URL = "/resume.pdf";

const ContactSection = () => {
  const [ref, isVisible] = useInView();

  return (
    <section
      ref={ref}
      id="contact"
      className={`section contact-section fade-up${isVisible ? " is-visible" : ""}`}
    >
      <div className="contact-inner">
        <header className="contact-header">
          <h2 className="title">Contact</h2>
          <div className="title-underline" />
          <p className="contact-cta-heading">새로운 연결을 환영합니다</p>
          <p className="contact-subtitle">
            채용 제안이나 협업 문의는 편하게 연락 주세요.
          </p>
        </header>

        <div className="contact-cards">
          <div className="contact-cards-row">
            <a href="mailto:jh021199@gmail.com" className="contact-card">
              <span className="contact-card-icon">✉</span>
              <p className="contact-card-label">Email</p>
              <p className="contact-card-value">jh021199@gmail.com</p>
            </a>

            <a
              href="https://github.com/jhyungit"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-card-icon">💻</span>
              <p className="contact-card-label">GitHub</p>
              <p className="contact-card-value">github.com/jhyungit</p>
            </a>

            <div className="contact-card contact-card-location">
              <span className="contact-card-icon">📍</span>
              <p className="contact-card-label">Location</p>
              <p className="contact-card-value">Seoul, Korea</p>
            </div>
          </div>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card contact-card-resume"
          >
            <span className="contact-card-icon">📄</span>
            <div className="contact-card-resume-text">
              <p className="contact-card-label">Resume</p>
              <p className="contact-card-value">이력서 PDF 다운로드</p>
            </div>
            <span className="contact-card-resume-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
