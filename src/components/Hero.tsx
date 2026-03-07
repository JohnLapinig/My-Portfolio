import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import profileImg from '../assets/pp.jpg';
import ParticleNetwork from './ParticleNetwork';

function TypewriterText() {
  const phrases = [
    'Graduating Computer Engineering Student',
    'Aspiring Front-End Developer',
    'Embedded Systems Engineer',
    'UI/UX Enthusiast',
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const phrase = phrases[currentPhrase];
        if (!isDeleting) {
          if (currentChar < phrase.length) {
            setCurrentChar((c) => c + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (currentChar > 0) {
            setCurrentChar((c) => c - 1);
          } else {
            setIsDeleting(false);
            setCurrentPhrase((p) => (p + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [currentChar, isDeleting, currentPhrase, phrases]);

  return (
    <span className="font-mono text-neon text-base sm:text-lg">
      <span className="text-cyan mr-1">&lt;</span>
      {phrases[currentPhrase].substring(0, currentChar)}
      <span className="inline-block w-0.5 h-5 bg-neon ml-0.5 animate-pulse align-middle" />
      <span className="text-cyan ml-1">/<span className="text-cyan ml-1"></span>&gt;</span>
    </span>
  );
}

function CodeWindow() {
  return (
    <div className="code-window w-full max-w-md tilt-card card-3d-hover">
      {/* Shine overlay */}
      <div className="tilt-shine" />
      {/* Window header */}
      <div className="code-window-header">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-slate-500 ml-2">main.cpp</span>
      </div>
      {/* Code content */}
      <div className="p-5 text-sm leading-relaxed">
        <div><span className="text-[#ff7b72]">#include</span> <span className="text-neon">&lt;iostream&gt;</span></div>
        <div><span className="text-slate-500">using namespace std;</span></div>
        <div className="mt-3">
          <span className="text-[#ff7b72]">class </span>
          <span className="text-cyan">Engineer</span>
          <span className="text-white"> {'{'}</span>
        </div>
        <div className="ml-4"><span className="text-[#ff7b72]">public:</span></div>
        <div className="ml-8">
          <span className="text-cyan">string</span>{' '}
          <span className="text-white">name = </span>
          <span className="text-neon">"John Augustine L. Lapinig"</span>;
        </div>
        <div className="ml-8">
          <span className="text-cyan">string</span>{' '}
          <span className="text-white">role = </span>
          <span className="text-neon">"CpE Student"</span>;
        </div>
        <div className="mt-3 ml-8">
          <span className="text-cyan">void</span>{' '}
          <span className="text-[#d2a8ff]">buildFuture</span>
          <span className="text-white">() {'{'}</span>
        </div>
        <div className="ml-12">
          <span className="text-slate-500">// Solving complex problems</span>
        </div>
        <div className="ml-12">
          <span className="text-[#ff7b72]">while</span>
          <span className="text-white">(alive) {'{'}</span>
        </div>
        <div className="ml-16"><span className="text-[#d2a8ff]">learn</span><span className="text-white">();</span></div>
        <div className="ml-16"><span className="text-[#d2a8ff]">create</span><span className="text-white">();</span></div>
        <div className="ml-16"><span className="text-[#d2a8ff]">innovate</span><span className="text-white">();</span></div>
        <div className="ml-12"><span className="text-white">{'}'}</span></div>
        <div className="ml-8"><span className="text-white">{'}'}</span></div>
        <div><span className="text-white">{'}'};</span></div>
      </div>
    </div>
  );
}

export default function Hero({ loaded }: { loaded?: boolean }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Interactive particle network background */}
      <ParticleNetwork />
      
      {/* Perspective grid floor */}
      <div className="perspective-grid" />
      
      {/* Ambient glow — enhanced */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-cyan/4 rounded-full blur-[80px]" />

      <div className={`relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full ${loaded ? 'hero-entrance' : ''}`}>
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 lg:pt-8">
            {/* Open to work badge */}
            <div className="hero-item hero-delay-1">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-neon/30 text-neon bg-neon/5 mb-8 animate-pulse-glow" style={{ animationDuration: '4s' }}>
                <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                Open to Opportunities
              </span>
            </div>

            {/* Main Heading — Enhanced 3D text */}
            <h1 className="hero-item hero-delay-2 font-display text-4xl sm:text-5xl lg:text-[4.5rem] font-bold text-white leading-[1.08] tracking-tight">
              My
              <br />
              <span className="cyan-glow relative inline-block">
                Digital
                <span className="absolute -inset-1 bg-cyan/5 blur-2xl rounded-full -z-10" />
              </span>
              <br />
              <span className="relative">
                Portfolio
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-cyan via-cyan/60 to-transparent rounded-full" style={{ animation: 'glow-line 3s ease-in-out infinite' }} />
              </span>
            </h1>

            {/* Typewriter */}
            <div className="hero-item hero-delay-3 mt-6">
              <TypewriterText />
            </div>

            {/* Description */}
            <p className="hero-item hero-delay-4 mt-6 text-base text-slate-300 max-w-lg leading-relaxed">
              Computer Engineering student passionate about front-end web
              development, UI/UX design, embedded systems, and
              scalable software solutions.
            </p>

            {/* CTA buttons — neon style */}
            <div className="hero-item hero-delay-5 mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="neon-btn group px-7 py-3 rounded-full bg-cyan text-dark font-semibold hover:shadow-lg hover:shadow-cyan/15 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="neon-btn px-7 py-3 rounded-full border border-slate-700 text-slate-300 font-medium hover:border-cyan/50 hover:text-cyan hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Social links — magnetic hover */}
            <div className="hero-item hero-delay-6 mt-10 flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/JohnLapinig', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:john6lapinig@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="magnetic-hover w-11 h-11 flex items-center justify-center rounded-full border border-slate-800 text-slate-500 hover:border-cyan hover:text-cyan hover:bg-cyan/8 hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300"
                >
                  <Icon size={17} />
                </a>
              ))}
              {/* Resume — separate link to open PDF directly */}
              <a
                href={`${import.meta.env.BASE_URL.replace(/\/?$/, '/')}RESUME-LAPINIG.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                className="magnetic-hover w-11 h-11 flex items-center justify-center rounded-full border border-slate-800 text-slate-500 hover:border-cyan hover:text-cyan hover:bg-cyan/8 hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300"
              >
                <FileText size={17} />
              </a>
            </div>
          </div>

          {/* Right: Profile picture + Code window — 3D enhanced */}
          <div className="shrink-0 flex flex-col items-center gap-8 hero-item hero-delay-4 perspective-container">
            {/* Profile picture */}
            <div className="relative animate-float" style={{ animationDuration: '6s' }}>
              <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full p-0.75 bg-linear-to-br from-cyan to-cyan/40 shadow-lg shadow-cyan/20">
                <img
                  src={profileImg}
                  alt="John Augustine L. Lapinig"
                  className="w-full h-full rounded-full object-cover bg-dark"
                />
              </div>
              {/* Label */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full glass border border-cyan/20 whitespace-nowrap shadow-xl shadow-cyan/10 overflow-hidden group/label">
                <div className="absolute inset-0 bg-linear-to-r from-cyan/5 via-transparent to-cyan/5" />
                <span className="relative font-mono text-[11px] font-semibold tracking-wider uppercase bg-linear-to-r from-cyan via-white to-cyan bg-clip-text text-transparent">
                  Future Software Engineer / Developer
                </span>
              </div>
              <div className="absolute inset-0 rounded-full bg-cyan/10 blur-2xl -z-10 animate-pulse-slow" />
            </div>

            {/* Code window — enhanced */}
            <CodeWindow />
          </div>
        </div>
      </div>
    </section>
  );
}
