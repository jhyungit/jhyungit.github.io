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
          안녕하세요! 데이터 엔지니어 및 백엔드 개발자를 목표로 학습하고 있는 이정현입니다.
          클린 코드, 자동화, 안정적인 데이터 파이프라인 구축에 관심이 많습니다.
        </p>
      </section>

      {/* 스킬 */}
      <section className="section">
        <h2>🛠 Tech Stack</h2>
        <ul className="skills">
          <li>Python</li>
          <li>React</li>
          <li>Node.js</li>
          <li>SQL / MySQL / PostgreSQL</li>
          <li>AWS</li>
          <li>Docker</li>
        </ul>
      </section>

      {/* 프로젝트 */}
      <section className="section">
        <h2>📂 Projects</h2>

        <div className="project-card">
          <h3>프로젝트 예시 1</h3>
          <p>프로젝트 설명을 여기에 적어주세요. 어떤 기술을 사용했고 무엇을 해결했는지!</p>
        </div>

        <div className="project-card">
          <h3>프로젝트 예시 2</h3>
          <p>React + GitHub Pages 기반 포트폴리오 프로젝트.</p>
        </div>
      </section>

      {/* 연락 */}
      <section className="section">
        <h2>📬 Contact</h2>
        <p>Email: your-email@example.com</p>
        <p>GitHub: <a href="https://github.com/jhyungit" target="_blank">github.com/jhyungit</a></p>
      </section>

      <footer className="footer">
        © 2025 이정현. All rights reserved.
      </footer>
    </div>
  );
}

export default App;