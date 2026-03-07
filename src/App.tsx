import { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseGlow from './components/MouseGlow';
import CircuitDivider from './components/CircuitDivider';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loaded, setLoaded] = useState(() => {
    // Only show loading screen on first visit per session
    return sessionStorage.getItem('portfolio-loaded') === 'true';
  });

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
    sessionStorage.setItem('portfolio-loaded', 'true');
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      {/* Loading screen */}
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Global mouse-following glow */}
      <MouseGlow />
      <Header />
      <main>
        <Hero loaded={loaded} />
        <CircuitDivider />
        <About />
        <CircuitDivider />
        <Skills />
        <CircuitDivider />
        <Projects />
        <CircuitDivider />
        <Journey />
        <CircuitDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
