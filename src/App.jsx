// src/App.jsx
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="hero">

        {/* 🔵 헤더 (피그마 기준으로 수정된 버전) */}
        <header className="hero-header">

          {/* 왼쪽 로고 영역 */}
          <div className="hero-logo">
            <div className="hero-logo-circle">JH</div>
            <span className="hero-logo-text">j_hyun&apos;s</span>
          </div>

          {/* 오른쪽 네비게이션 */}
          <nav className="hero-nav">
            <a href="#home">홈</a>
            <a href="#about">소개</a>
            <a href="#education">교육</a>
            <a href="#skills">스킬</a>
            <a href="#projects">프로젝트</a>
          </nav>

        </header>

        {/* 🔵 메인 인사 영역 */}
        <main className="hero-main" id="home">
          <div className="hero-greeting">
            <p>안녕하세요👋</p>
            <p>몸과 마음이 건강한 개발자</p>
            <p>
              저는 <span className="highlight-name">이정현</span> 입니다
            </p>
          </div>

          <p className="hero-role">Data Engineer &amp; Backend Developer</p>

          {/* Strengths */}
          <section className="hero-strengths">
            <h2 className="hero-strengths-title">KEY STRENGTHS</h2>
            <p className="hero-strengths-text">
              Hard worker · Fast learner · Great and Reliable worker · Activity and friendly
            </p>
          </section>
        </main>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <span>Scroll</span>
          <span className="hero-scroll-arrow">⌄</span>
        </div>

      </div>
    </div>
  );
}

export default App;
