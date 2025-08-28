import React from 'react';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials  from './components/Testimonials';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MotionWrapper  from './components/MotionWrapper';


function App() {
  return (
    <div className="font-sans">
     <Navbar/>
<MotionWrapper><HeroSection /></MotionWrapper>
<MotionWrapper><AboutMe /></MotionWrapper>
<MotionWrapper><Skills /></MotionWrapper>
<MotionWrapper><Projects /></MotionWrapper>
<MotionWrapper><Services /></MotionWrapper>
<MotionWrapper><Testimonials /></MotionWrapper>
<MotionWrapper><Contact /></MotionWrapper>
<Footer />

    </div>
  );
}

export default App;
