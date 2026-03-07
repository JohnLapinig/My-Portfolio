import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import { User, Quote } from 'lucide-react';
import CircuitGrid from './CircuitGrid';

function AnimatedStat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { count, ref } = useCountUp(value, 1800);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="stat-card text-center p-6 rounded-xl glass-card border border-slate-800 hover:border-cyan/30 group reveal-scale"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl font-bold cyan-glow transition-transform duration-300">
        <span className="counter-value">{count}</span>{suffix}
      </div>
      <div className="text-sm text-cyan/70 font-medium mt-2">{label}</div>
    </div>
  );
}

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative py-28 bg-dark overflow-hidden ${isVisible ? 'section-visible' : 'section-hidden'}`}
    >
      {/* Subtle circuit background */}
      <CircuitGrid />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16 reveal-item reveal-delay-1">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-mono font-medium border border-cyan/20 text-cyan bg-cyan/5 mb-5 shadow-lg shadow-cyan/5">
            <User size={14} />
            About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Who <span className="cyan-glow">Am I?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left side — narrative text with enhanced styling */}
          <div className="space-y-5 reveal-left reveal-delay-2">
            {/* Opening paragraph — hero statement with glass effect */}
            <div className="relative pl-5 border-l-2 border-cyan/40">
              <div className="absolute -left-px top-0 w-0.5 h-full bg-linear-to-b from-cyan via-cyan/40 to-transparent" />
              <p className="text-slate-200 text-lg leading-relaxed font-light">
                Hi! I'm <span className="text-white font-semibold">John Augustine L. Lapinig,</span> and as a{' '}
                <span className="text-white font-semibold">BSCpE student</span> currently
                finishing my degree, my OJT at{' '}
                <span className="text-cyan font-semibold">Arielus Software Inc.</span> gave me a
                better understanding of how things work in a real tech environment.
              </p>
            </div>

            <p className="text-slate-400 leading-[1.85] text-[0.935rem]">
              As a QA tester intern at the Arielus Software Inc., it was my first time
              seeing how QA is done outside the classroom, and it helped me connect what
              we discuss in school to actual software processes. I learned how important
              proper documentation is, how teams communicate during testing, and how bug
              tracking and verification are handled in real projects.
            </p>

            <p className="text-slate-400 leading-[1.85] text-[0.935rem]">
              Throughout the internship, I slowly became more confident using tools like{' '}
              <span className="text-cyan italic font-medium">Azure DevOps</span>,{' '}
              <span className="text-cyan italic font-medium">Test & Feedback</span>,{' '}
              <span className="text-cyan italic font-medium">Selenium</span> and{' '}
              <span className="text-cyan italic font-medium">Lighthouse</span>—tools I hadn't
              worked with before. The tasks challenged me to be more careful and patient,
              especially when dealing with reports, system values, and testing different
              modules.
            </p>

            <p className="text-slate-400 leading-[1.85] text-[0.935rem]">
              Now that I am finishing my degree, I feel more prepared and focused. This
              OJT gave me direction and helped me realize what kind of work I enjoy and
              what areas I want to explore more after graduation.
            </p>
          </div>

          {/* Right side — stats + quote with 3D effects */}
          <div className="space-y-6 reveal-right reveal-delay-3">
            {/* Stats grid with animated counters */}
            <div className="grid grid-cols-2 gap-4">
              <AnimatedStat value={5} suffix="+" label="Projects Completed" delay={200} />
              <AnimatedStat value={240} suffix="" label="Hours OJT" delay={300} />
              <AnimatedStat value={6} suffix="+" label="Technologies" delay={400} />
              <AnimatedStat value={4} suffix="+" label="Academic Honors" delay={500} />
            </div>

            {/* Quote card */}
            <div className="relative p-6 rounded-2xl glass-card border border-cyan/15 overflow-hidden reveal-item reveal-delay-5">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Quote size={24} className="text-cyan/30 mb-3" />
              <p className="text-slate-300 italic leading-relaxed text-sm">
                "It didn't just teach me how to test software—it gave me a better
                sense of what it means to be part of a team, to handle responsibility,
                and to keep learning along the way."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
