import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { PenTool, LayoutGrid, Database, Cpu, Wrench, Code } from 'lucide-react';

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
      className={`relative py-24 bg-dark ${isVisible ? 'section-visible' : 'section-hidden'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-mono font-medium border border-cyan/20 text-cyan bg-cyan/5 mb-5">
            <Cpu size={14} />
            Technical Arsenal
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
           <span className="cyan-glow">Skills & Technologies</span>
          </h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolset developed through academic learning, hands-on OJT experience, and school projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-dark/60 border border-slate-800 hover:border-cyan/20 transition-all duration-300"
                style={{ transitionDelay: `${catIdx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-dark-light/50 text-slate-300 border border-slate-700/50 hover:border-cyan/30 hover:text-cyan transition-colors duration-200"
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
