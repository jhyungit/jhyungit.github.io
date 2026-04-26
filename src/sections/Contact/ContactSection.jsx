import React from "react";
import { useInView } from "../../hooks/useInView";
import resumePdf from "../../data/이정현_CV.pdf";
import "./ContactSection.css";

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
          <p className="contact-subtitle">
            궁금한 점이나 제안이 있으시면 편하게 연락 주세요.
          </p>
        </header>

        <div className="contact-cards">
          <a href="mailto:kyn05165@naver.com" className="contact-card">
            <span className="contact-card-icon">✉</span>
            <p className="contact-card-label">Email</p>
            <p className="contact-card-value">kyn05165@naver.com</p>
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

          <div className="contact-card">
            <span className="contact-card-icon">📍</span>
            <p className="contact-card-label">Location</p>
            <p className="contact-card-value">Seoul, Korea</p>
          </div>

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card contact-card-resume"
          >
            <span className="contact-card-icon">📄</span>
            <p className="contact-card-label">Resume</p>
            <p className="contact-card-value">Download PDF</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
