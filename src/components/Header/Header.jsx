// src/components/Header/Header.jsx
import { useState, useEffect } from 'react';
import '../../App.css';  // 공통 CSS 유지
import './Header.css';

function Header() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

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
      <div className="hero-header-inner">

        {/* 왼쪽 로고 */}
        <div className="hero-logo">
          <div className="hero-logo-circle">JH</div>
          <span className="hero-logo-text">j_hyun&apos;s</span>
        </div>

        {/* 오른쪽 영역 */}
        <div className="hero-header-right">

          {/* PC용 메뉴 */}
          <nav className="hero-nav">
            <a href="#home" onClick={handleNavClick}>홈</a>
            <a href="#about" onClick={handleNavClick}>소개</a>
            <a href="#career" onClick={handleNavClick}>경력</a>
            <a href="#skill" onClick={handleNavClick}>스킬</a>
            <a href="#project" onClick={handleNavClick}>프로젝트</a>
          </nav>

          {/* 햄버거 버튼 */}
          <button className="hero-menu-toggle" onClick={handleToggleMenu}>
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
            </nav>
          )}

        </div>
      </div>
    </header>
  );
}

export default Header;