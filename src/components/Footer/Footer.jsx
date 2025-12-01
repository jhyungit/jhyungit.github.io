// src/components/Header/Header.jsx
import { useState, useEffect } from 'react';
import '../../App.css';  // 공통 CSS 유지
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-divider"></div>
    <p>© 2025 Jeonghyun Lee. All rights reserved.</p>
    <a className = "footer-email" href ="mailto:kyn05165@naver.com">
        📫 kyn05165@naver.com
    </a>
    <p className="footer-credit">
         ⚛️ React · ⚡️ Vite
        </p>
    </footer>
  );
}