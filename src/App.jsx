// src/App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

const handleNavClick = (e) => {
  e.preventDefault(); // 기본 링크 이동 막기

  const targetId = e.target.getAttribute("href").replace("#", "");

  if (targetId === "home") {
    // Home은 페이지 최상단으로 이동
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    // 다른 섹션은 scrollIntoView로 이동
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  // 클릭 시 모바일 메뉴 닫기
  setIsMenuOpen(false);
};

  return (
    <div className="app">
      <div className="hero">
        {/* 헤더 */}
        <header className="hero-header">
          {/* 왼쪽 로고 */}
          <div className="hero-logo">
            <div className="hero-logo-circle">JH</div>
            <span className="hero-logo-text">j_hyun&apos;s</span>
          </div>

          {/* 오른쪽 메뉴 (PC용) */}
          <nav className="hero-nav">
            <a href="#home">홈</a>
            <a href="#about">소개</a>
            <a href="#education">교육</a>
            <a href="#skills">스킬</a>
            <a href="#projects">프로젝트</a>
          </nav>

          {/* 햄버거 버튼 (모바일/좁은 화면용) */}
          <button
            className="hero-menu-toggle"
            onClick={handleToggleMenu}
            aria-label="메뉴 열기"
          >
            <span />
            <span />
            <span />
          </button>
        </header>

        {/* 모바일 드롭다운 메뉴 */}
        {isMenuOpen && (
          <nav className="hero-nav-mobile">
            <a href="#home" onClick={handleNavClick}>홈</a>
            <a href="#about" onClick={handleNavClick}>소개</a>
            <a href="#education" onClick={handleNavClick}>교육</a>
            <a href="#skills" onClick={handleNavClick}>스킬</a>
            <a href="#projects" onClick={handleNavClick}>프로젝트</a>
          </nav>
        )}

        {/* 이하 hero-main / scroll 부분은 그대로 */}
        <main className="hero-main" id="home">
          <div className="hero-greeting">
            <p>안녕하세요👋</p>
            <p>몸과 마음이 건강한 개발자</p>
            <p>
              저는 <span className="highlight-name">이정현</span> 입니다
            </p>
          </div>

          <p className="hero-role">Data Engineer &amp; Backend Developer</p>

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
      </div>
    </div>
  );
}

export default App;
