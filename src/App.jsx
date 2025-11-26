// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  
    useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 10px 이상 내려가면 scrolled 처리
      if (window.scrollY > 10) {
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

const handleNavClick = (e) => {
  e.preventDefault(); // a 태그 기본 동작 막기

  const targetId = e.target.getAttribute("href").replace("#", "");

  if (targetId === "home") {
    // Home일 때는 그냥 페이지 최상단으로
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  // 모바일 메뉴 닫기
  setIsMenuOpen(false);
};

  return (
    <div className="app">
      <div className="hero">
        {/* 헤더 */}
        <header
          className={`hero-header ${isHeaderScrolled ? "hero-header-scrolled" : ""}`}
        >
          <div className="hero-header-inner">
            {/* 왼쪽 로고 */}
            <div className="hero-logo">
              <div className="hero-logo-circle">JH</div>
              <span className="hero-logo-text">j_hyun&apos;s</span>
            </div>

            {/* 오른쪽 영역: PC메뉴 + 햄버거 + 모바일메뉴 */}
            <div className="hero-header-right">
              {/* PC용 메뉴 */}
              <nav className="hero-nav">
                <a href="#home" onClick={handleNavClick}>홈</a>
                <a href="#about" onClick={handleNavClick}>소개</a>
                <a href="#education" onClick={handleNavClick}>교육</a>
                <a href="#skills" onClick={handleNavClick}>스킬</a>
                <a href="#projects" onClick={handleNavClick}>프로젝트</a>
              </nav>

              {/* 햄버거 버튼 */}
              <button
                className="hero-menu-toggle"
                onClick={handleToggleMenu}
                aria-label="메뉴 열기"
              >
                <span />
                <span />
                <span />
              </button>

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
            </div>
          </div>
        </header>


        {/* 이하 hero-main / scroll 부분은 그대로 */}
        <main className="hero-main" id="home">
          <div className="hero-greeting">
            <p>안녕하세요👋</p>
            <p>건강한 개발자</p>
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
