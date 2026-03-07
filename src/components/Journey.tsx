import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Award, Briefcase, Star, Route } from 'lucide-react';
import CircuitGrid from './CircuitGrid';

const timeline = [
  {
    year: '2022 - 2026',
    title: 'Bachelor of Science in Computer Engineering',
    org: 'Cebu Institute of Technology - University',
    description:
      'Pursued a comprehensive curriculum covering digital systems, embedded computing, software engineering, and data structures.',
    icon: GraduationCap,
    type: 'education',
  },
  {
    year: '2025 - 2026',
    title: 'Capstone / Thesis Project',
    org: 'Para.Go: Cebu Smart Jeepney Automation and Monitoring System',
    description:
      'Collaborated on the development of an IoT-based smart jeepney automation and monitoring system integrating GPS-based real-time tracking, RFID passenger counting, cashless fare collection, and ambient control of fans and lighting. The project includes a mobile application for live location and route monitoring, improving commuter safety, efficiency, and transparency in Cebu City.',
    icon: Star,
    type: 'project',
  },
  {
    year: 'June - July 2025',
    title: 'Internship / OJT',
    org: 'Arielus Software Inc.',
    description:
      'Served as a QA Tester intern during a one-month training period, gaining hands-on experience in manual and automated testing using tools such as Azure DevOps, Selenium, Test & Feedback and Google Lighthouse while collaborating with professional teams.',
    icon: Briefcase,
    type: 'work',
  },
  {
    year: 'December 2025',
    title: 'Alliance Jumpstart Training Program',
    org: 'Alliance Software Inc.',
    description:
      'Completed an industry-partnered Software Development subject through Alliance\'s Jumpstart Training Program, working on a group project that followed real-world development practices. Recognized as one of three outstanding performers and received a Certificate of Merit. Also had the opportunity to speak at the program\'s culmination event, enhancing confidence in public speaking.',
    icon: Award,
    type: 'award',
  },
  {
    year: '2024',
    title: 'With Honors — Top 10',
    org: 'CpE Department Honors List',
    description:
      'Recognized on the CpE Department honors list during 3rd Year, 2nd Semester for outstanding academic performance — ranked among the Top 10 students.',
    icon: Award,
    type: 'award',
  },
  {
    year: '2022',
    title: 'Started Computer Engineering',
    org: 'Cebu Institute of Technology - University',
    description:
      'Began the journey into computer engineering, building foundations in mathematics, physics, and programming.',
    icon: GraduationCap,
    type: 'education',
  },
];

const typeConfig: Record<string, { gradient: string; bg: string; border: string; dot: string; badge: string }> = {
  education: {
    gradient: 'from-cyan to-cyan/70',
    bg: 'bg-cyan/10',
    border: 'hover:border-cyan/25',
    dot: 'bg-cyan shadow-cyan/50',
    badge: 'bg-cyan/10 text-cyan border-cyan/20',
  },
  project: {
    gradient: 'from-neon to-neon/70',
    bg: 'bg-neon/10',
    border: 'hover:border-neon/25',
    dot: 'bg-neon shadow-neon/50',
    badge: 'bg-neon/10 text-neon border-neon/20',
  },
  work: {
    gradient: 'from-emerald-400 to-emerald-300',
    bg: 'bg-emerald-400/10',
    border: 'hover:border-emerald-400/25',
    dot: 'bg-emerald-400 shadow-emerald-400/50',
    badge: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
  },
  award: {
    gradient: 'from-amber-400 to-amber-300',
    bg: 'bg-amber-400/10',
    border: 'hover:border-amber-400/25',
    dot: 'bg-amber-400 shadow-amber-400/50',
    badge: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
  },
};

const typeLabels: Record<string, string> = {
  education: 'Education',
  project: 'Project',
  work: 'Experience',
  award: 'Achievement',
};

export default function Journey() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="journey"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative py-24 bg-dark overflow-hidden ${isVisible ? 'section-visible' : 'section-hidden'}`}
    >
      {/* Subtle circuit background */}
      <CircuitGrid />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-20 reveal-item reveal-delay-1">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-mono font-medium border border-cyan/20 text-cyan bg-cyan/5 mb-5">
            <Route size={14} />
            My Path
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Education & <span className="cyan-glow">Experience</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            A timeline of milestones shaping my journey in Computer Engineering
          </p>
        </div>

        {/* Timeline */}
        <div className="relative timeline-stagger">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-cyan/30 via-cyan/15 to-transparent -translate-x-1/2" />

          {timeline.map((item, idx) => {
            const Icon = item.icon;
            const isLeft = idx % 2 === 0;
            const config = typeConfig[item.type];

            return (
              <div
                key={idx}
                className={`relative flex items-start mb-14 last:mb-0 ${
                  isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Connector dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className={`w-3.5 h-3.5 rounded-full ${config.dot} shadow-lg ring-4 ring-dark`} />
                </div>

                {/* Horizontal connector line (desktop) */}
                <div className={`hidden md:block absolute top-1.5 h-px bg-cyan/15 ${
                  isLeft ? 'right-[calc(50%+8px)] w-8' : 'left-[calc(50%+8px)] w-8'
                }`} />

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className={`group relative p-6 rounded-2xl glass-card card-3d-hover border border-slate-800 ${config.border} transition-all duration-500 hover:shadow-lg hover:shadow-cyan/5 overflow-hidden`}>
                    {/* Shimmer overlay */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-px bg-linear-to-r ${config.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

                    {/* Header row */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-11 h-11 flex items-center justify-center rounded-xl bg-linear-to-br ${config.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 shrink-0`}>
                        <Icon size={20} className="text-dark" />
                      </div>
                      <div>
                        <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full border ${config.badge} mb-1`}>
                          {typeLabels[item.type]}
                        </span>
                        <p className="text-xs font-semibold text-cyan/70 tracking-wide">
                          {item.year}
                        </p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan/90 transition-colors duration-300">{item.title}</h3>
                    <p className="text-sm text-cyan/40 mb-3 font-medium">{item.org}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Terminal node at the bottom */}
          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 bottom-0">
            <div className="w-3 h-3 rounded-full bg-dark border-2 border-cyan/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
