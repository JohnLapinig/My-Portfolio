import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const suppressRef = useRef(false);

  const clearActive = () => {
    suppressRef.current = true;
    setActiveSection('');
    // Suppress observer updates for 1.2s while scroll animation completes
    setTimeout(() => { suppressRef.current = false; }, 1200);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for logo clicks from other components (e.g. Footer)
  useEffect(() => {
    const handleClear = () => clearActive();
    window.addEventListener('clear-active-section', handleClear);
    return () => window.removeEventListener('clear-active-section', handleClear);
  }, []);

  // Track which section is currently in view
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (suppressRef.current) return;
          if (entry.isIntersecting) {
            setActiveSection(id);
          } else if (activeSection === id) {
            const anyVisible = sectionIds.some((sid) => {
              const secEl = document.getElementById(sid);
              if (!secEl) return false;
              const rect = secEl.getBoundingClientRect();
              return rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4;
            });
            if (!anyVisible) setActiveSection('');
          }
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-lg shadow-cyan/5 border-b border-cyan/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo — enhanced glow */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); clearActive(); }}
          className="group font-mono text-xl font-black tracking-widest hover:scale-105 transition-transform duration-300"
        >
          <span className="text-cyan drop-shadow-[0_0_8px_rgba(0,255,255,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.6)] transition-all">&lt;</span>
          <span className="bg-linear-to-r from-cyan via-white to-cyan bg-clip-text text-transparent">JAL</span>
          <span className="text-cyan/60">.</span>
          <span className="bg-linear-to-r from-white to-cyan bg-clip-text text-transparent">dev</span>
          <span className="text-cyan drop-shadow-[0_0_8px_rgba(0,255,255,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.6)] transition-all">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive ? 'text-cyan' : 'text-slate-400 hover:text-cyan'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-cyan transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contact"
              className="ml-2 px-5 py-2 rounded-full bg-cyan text-dark text-sm font-semibold hover:bg-cyan/90 hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="glass border-t border-cyan/10 px-6 py-4 space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block font-medium transition-colors ${
                    isActive ? 'text-cyan' : 'text-slate-400 hover:text-cyan'
                  }`}
                >
                  {isActive && <span className="mr-2 text-cyan">▸</span>}
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-block px-5 py-2 rounded-full bg-cyan text-dark text-sm font-semibold"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
