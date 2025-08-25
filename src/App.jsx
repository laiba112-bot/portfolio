import React from 'react';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from "./components/Skills";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
