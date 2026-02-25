import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Award, Briefcase, Star, Route } from 'lucide-react';

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

const typeColors: Record<string, string> = {
  education: 'from-cyan to-cyan/70',
  project: 'from-neon to-neon/70',
  work: 'from-emerald-400 to-emerald-300',
  award: 'from-amber-400 to-amber-300',
};

export default function Journey() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="journey"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative py-24 bg-dark ${isVisible ? 'section-visible' : 'section-hidden'}`}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-mono font-medium border border-cyan/20 text-cyan bg-cyan/5 mb-5">
            <Route size={14} />
            My Path
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Education & <span className="cyan-glow">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-cyan/50 via-neon/30 to-transparent" />

          {timeline.map((item, idx) => {
            const Icon = item.icon;
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative flex items-start mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Connector dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-linear-to-r border-4 border-dark z-10"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                >
                  <div className={`w-full h-full rounded-full bg-linear-to-r ${typeColors[item.type]}`} />
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className="group p-6 rounded-2xl bg-dark/60 border border-slate-800 hover:border-cyan/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-linear-to-r ${typeColors[item.type]} bg-opacity-10`}>
                        <Icon size={18} className="text-white" />
                      </div>
                      <span className="text-xs font-semibold text-cyan tracking-wider uppercase">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-cyan/50 mb-3 italic">{item.org}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
