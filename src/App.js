import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/footer';
import Skills from './components/Skill';
import LicensesAndCertifications from './components/Sertifications';
import { FaArrowCircleUp } from 'react-icons/fa';
import './App.css'; // Import CSS file for styling

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerTopPosition = document.querySelector('footer').getBoundingClientRect().top + window.scrollY;

      if (window.scrollY > footerTopPosition - window.innerHeight || window.scrollY < 400 ) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-grow p-4">
        <About />
        <Experience/>
        <LicensesAndCertifications/>
        <Projects />
        <Skills/>
        <Contact />
      </main>
      <Footer />
      {showScroll && (
        <div
          className="scroll-to-top"
          onClick={scrollToTop}
          title="Back to Top"
        >
          <FaArrowCircleUp size={32} />
        </div>
      )}
    </div>
  );
}

export default App;
