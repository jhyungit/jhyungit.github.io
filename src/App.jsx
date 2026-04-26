import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeSection from './sections/Home/HomeSection';
import AboutSection from './sections/About/AboutSection';
import CareerSection from './sections/Career/CareerSection';
import SkillSection from "./sections/Skill/SkillSection";
import ProjectSection from "./sections/Project/ProjectSection";
import ContactSection from "./sections/Contact/ContactSection";
import QuickTop from './components/QuickTop/QuickTop';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <HomeSection />
      <AboutSection />
      <CareerSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <QuickTop />
      <Footer />
    </div>
  );
}

export default App;
