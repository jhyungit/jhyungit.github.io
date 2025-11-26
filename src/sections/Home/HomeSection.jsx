// src/sections/Home/HomeSection.jsx
import '../../App.css';  // 공통 CSS 유지
import './HomeSection.css';   // Home 전용 스타일

function HomeSection() {
  return (
    <section className="hero" id="home">
      
      <main className="hero-main">
        <div className="hero-greeting">
          <p>안녕하세요👋</p>
          <p>건강한 개발자</p>
          <p>
            저는 <span className="highlight-name">이정현</span> 입니다
          </p>
        </div>

        <p className="hero-role">Data Engineer & Backend Developer</p>

        <section className="hero-strengths">
          <h2 className="hero-strengths-title">KEY STRENGTHS</h2>
          <p className="hero-strengths-text">
            Hard worker · Fast learner · Great and Reliable worker · Activity and friendly
          </p>
        </section>
      </main>

      <div className="hero-scroll">
        <span>Scroll</span>
        <span className="hero-scroll-arrow">⌄</span>
      </div>
      
    </section>
  );
}

export default HomeSection;
