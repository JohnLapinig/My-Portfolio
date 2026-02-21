import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { User, Quote } from 'lucide-react';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative py-24 bg-dark ${isVisible ? 'section-visible' : 'section-hidden'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-mono font-medium border border-cyan/20 text-cyan bg-cyan/5 mb-5">
            <User size={14} />
            About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            <span className="cyan-glow">Who Am I?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left side — narrative text */}
          <div className="space-y-5">
            {/* Opening paragraph — hero statement */}
            <div className="relative pl-5 border-l-2 border-cyan/40">
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

          {/* Right side — stats + quote */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '5+', label: 'Projects Completed' },
                { value: '240', label: 'Hours OJT' },
                { value: '6+', label: 'Technologies' },
                { value: '4+', label: 'Academic Honors' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-xl bg-dark-light/30 border border-slate-800 hover:border-cyan/20 transition-all duration-300"
                >
                  <div className="text-3xl font-bold cyan-glow font-display">{stat.value}</div>
                  <div className="text-sm text-cyan/70 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quote card */}
            <div className="p-6 rounded-2xl bg-linear-to-br from-cyan/5 to-transparent border border-cyan/20">
              <Quote size={28} className="text-cyan/40 mb-4" />
              <p className="text-slate-300 italic leading-relaxed">
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
