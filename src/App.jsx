import './App.css';

function App() {
  return (
    <div className="container">
      {/* 헤더 */}
      <header className="header">
        <h1 className="title">이정현 • Portfolio</h1>
        <p className="subtitle">Data Engineer / Backend Developer</p>
      </header>

      {/* 소개 */}
      <section className="section">
        <h2>👋 About Me</h2>
        <p>
          안녕하세요! 데이터 엔지니어 및 백엔드 개발자가 목표인 이정현입니다.
          클린 코드, 자동화, 안정적인 데이터 파이프라인 구축에 관심이 많습니다.
        </p>
      </section>

      {/* 스킬 */}
      <section className="section">
        <h2>🛠 Tech Stack</h2>
        <ul className="skills">
          <li>Python</li>
          <li>C/C++</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>SQL / MySQL / Oracle</li>
          <li>AWS</li>
        </ul>
      </section>

      {/* 프로젝트 */}
      <section className="section">
        <h2>📂 Projects</h2>

        <div className="project-card">
          <h3>프로젝트 1</h3>
          <p>사용자 기반 메뉴 추천 시스템</p>
        </div>

        <div className="project-card">
          <h3>프로젝트 2</h3>
          <p>React + GitHub Pages 기반 포트폴리오</p>
        </div>
      </section>

      {/* 연락 */}
      <section className="section">
        <h2>📬 Contact</h2>
        <p>Email: kyn05165@naver.com</p>
        <p>GitHub: <a href="https://github.com/jhyungit" target="_blank">github.com/jhyungit</a></p>
      </section>

      <footer className="footer">
        © 2025 이정현. All rights reserved.
      </footer>
    </div>
  );
}

export default App;