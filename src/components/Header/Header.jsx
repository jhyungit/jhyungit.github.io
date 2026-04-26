import { useState, useEffect } from 'react';
import '../../App.css';
import './Header.css';

function Header({ theme, toggleTheme }) {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 10);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMenu = () => setIsMenuOpen(prev => !prev);

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").replace("#", "");
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`hero-header ${isHeaderScrolled ? "hero-header-scrolled" : ""}`}>
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollPct / 100})` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollPct)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="페이지 스크롤 진행률"
      />
      <div className="hero-header-inner">

        {/* 로고 */}
        <div className="hero-logo">
          <div className="hero-logo-circle">JH</div>
          <span className="hero-logo-text">j_hyun&apos;s</span>
        </div>

        {/* 오른쪽 영역 */}
        <div className="hero-header-right">

          {/* PC 메뉴 */}
          <nav className="hero-nav">
            <a href="#home" onClick={handleNavClick}>홈</a>
            <a href="#about" onClick={handleNavClick}>소개</a>
            <a href="#career" onClick={handleNavClick}>경력</a>
            <a href="#skill" onClick={handleNavClick}>스킬</a>
            <a href="#project" onClick={handleNavClick}>프로젝트</a>
            <a href="#contact" onClick={handleNavClick}>연락</a>
          </nav>

          {/* 테마 토글 */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="테마 전환"
            title={theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </button>

          {/* 햄버거 버튼 */}
          <button
            className={`hero-menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
            onClick={handleToggleMenu}
            aria-label="메뉴 열기"
          >
            <span />
            <span />
            <span />
          </button>

          {/* 모바일 메뉴 */}
          {isMenuOpen && (
            <nav className="hero-nav-mobile">
              <a href="#home" onClick={handleNavClick}>홈</a>
              <a href="#about" onClick={handleNavClick}>소개</a>
              <a href="#career" onClick={handleNavClick}>경력</a>
              <a href="#skill" onClick={handleNavClick}>스킬</a>
              <a href="#project" onClick={handleNavClick}>프로젝트</a>
              <a href="#contact" onClick={handleNavClick}>연락</a>
            </nav>
          )}

        </div>
      </div>
    </header>
  );
}

export default Header;
