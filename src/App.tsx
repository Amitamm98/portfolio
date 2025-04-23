import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Education />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;