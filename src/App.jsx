// src/App.jsx
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeSection from './sections/Home/HomeSection';
import AboutSection from './sections/About/AboutSection';
import CareerSection from './sections/Career/CareerSection';
import SkillSection from "./sections/Skill/SkillSection";
import ProjectSection from "./sections/Project/ProjectSection";

function App() {
  return (
    <div className="app">
      <Header /> {/* 헤더 부분 */}
      <HomeSection /> {/* 홈 부분 구현 */}
      <AboutSection/> {/* 소개 부분 구현*/}
      <CareerSection/> {/* 경력 부분 구현 */}
      <SkillSection /> {/* 경력 부분 구현 */}
      <ProjectSection /> {/*프로젝트 부분 구현*/}
      <Footer /> {/* 경력 부분 구현 */}
    </div>
  );
}

export default App;
