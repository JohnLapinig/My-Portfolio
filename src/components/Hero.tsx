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
    <div className="code-window w-full max-w-md shadow-2xl shadow-cyan/5">
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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Interactive particle network background */}
      <ParticleNetwork />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 lg:pt-8">
            {/* Open to work badge */}
            <div className="animate-fade-in-down">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-neon/30 text-neon bg-neon/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                Open to Work
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="animate-fade-in-up font-display text-4xl sm:text-5xl lg:text-[4.2rem] font-bold text-white leading-[1.1] tracking-tight">
              Building
              <br />
              <span className="cyan-glow">Digital</span>
              <br />
              Architecture
            </h1>

            {/* Typewriter */}
            <div className="animate-fade-in-up animation-delay-200 mt-6">
              <TypewriterText />
            </div>

            {/* Description */}
            <p className="animate-fade-in-up animation-delay-400 mt-6 text-base text-slate-300 max-w-lg leading-relaxed">
              Computer Engineering student passionate about front-end web
              development, UI/UX design, embedded systems, and
              scalable software solutions.
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group px-7 py-3 rounded-full bg-cyan text-dark font-semibold hover:shadow-xl hover:shadow-cyan/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                View Projects
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-full border border-slate-700 text-slate-300 font-semibold hover:border-cyan hover:text-cyan transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </a>
            </div>

            {/* Social links */}
            <div className="animate-fade-in-up animation-delay-800 mt-10 flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/JohnLapinig', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:lapinig@example.com', label: 'Email' },
                { icon: FileText, href: '#', label: 'Resume' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-800 text-slate-500 hover:border-cyan hover:text-cyan hover:bg-cyan/5 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Profile picture + Code window */}
          <div className="shrink-0 flex flex-col items-center gap-6 animate-fade-in-right animation-delay-400">
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
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-dark border border-cyan/30 text-xs font-mono text-cyan whitespace-nowrap">
                Future Software Engineer
              </div>
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-cyan/10 blur-2xl -z-10" />
            </div>

            {/* Code window */}
            <CodeWindow />
          </div>
        </div>
      </div>
    </section>
  );
}
