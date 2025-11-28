// src/App.jsx
import './App.css';
import Header from './components/Header/Header';
import HomeSection from './sections/Home/HomeSection';
import AboutSection from './sections/About/AboutSection';
import CareerSection from './sections/Career/CareerSection';
import SkillSection from "./sections/Skill/SkillSection";

function App() {
  return (
    <div className="app">
      <Header /> {/* 헤더 부분 */}
      <HomeSection /> {/* 홈 부분 구현 */}
      <AboutSection/> {/* 소개 부분 구현*/}
      <CareerSection/> {/* 경력 부분 구현 */}
      <SkillSection /> {/* 경력 부분 구현 */}
      
      {/* 앞으로 ProjectsSection 추가 */}
    </div>
  );
}

export default App;
