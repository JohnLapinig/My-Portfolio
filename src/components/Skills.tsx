import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { PenTool, LayoutGrid, Database, Cpu, Wrench, Code } from 'lucide-react';
import CircuitGrid from './CircuitGrid';

const skillCategories = [
  {
    title: 'QA & Testing',
    icon: PenTool,
    skills: ['Azure DevOps', 'Selenium','Lighthouse', 'Test & Feedback', 'Manual Testing', 'Bug Tracking', 'Test Documentation'],
  },
  {
    title: 'Frontend',
    icon: LayoutGrid,
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Database',
    icon: Database,
    skills: ['Firebase', 'MS Access', 'Node.js'],
  },
  {
    title: 'Embedded Systems',
    icon: Cpu,
    skills: ['AWS IoT Core', 'ESP32', 'Arduino', 'MQTT', 'PlatformIO', 'Sensors'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Sourcetree', 'VS Code', 'Visual Studio', 'Figma'],
  },
  {
    title: 'Languages',
    icon: Code,
    skills: ['JavaScript', 'C', 'C#', 'Python', 'HTML/CSS'],
  },
];

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative py-28 bg-dark overflow-hidden ${isVisible ? 'section-visible' : 'section-hidden'}`}
    >
      {/* Subtle circuit background */}
      <CircuitGrid />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16 reveal-item reveal-delay-1">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-mono font-medium border border-cyan/20 text-cyan bg-cyan/5 mb-5 shadow-lg shadow-cyan/5">
            <Cpu size={14} />
            Technical Arsenal
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Skills & <span className="cyan-glow">Technologies</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm">
            A comprehensive toolset developed through academic learning, hands-on OJT experience, and school projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-container stagger-grid">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-card card-3d-hover p-6 rounded-2xl border border-slate-800 hover:border-cyan/25 relative overflow-hidden group"
                style={{ transitionDelay: `${catIdx * 100}ms` }}
              >
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="relative z-10 flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-cyan/10 text-cyan border border-cyan/10 magnetic-hover shadow-lg shadow-cyan/5">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan transition-colors duration-300">{category.title}</h3>
                </div>
                <div className="relative z-10 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag px-3.5 py-1.5 rounded-lg text-sm font-medium bg-dark-light/50 text-slate-300 border border-slate-700/50 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
