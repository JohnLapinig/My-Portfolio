import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="h-px bg-linear-to-r from-transparent via-slate-800 to-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Journey />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
