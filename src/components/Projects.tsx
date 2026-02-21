import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Github, ChevronDown, ChevronUp, Star, Cpu, Globe, DollarSign, Eye, Cloud, BookOpen, Layers } from 'lucide-react';

interface Project {
  title: string;
  label: string;
  description: string;
  tags: string[];
  github: string;
  featured: boolean;
  type: 'solo' | 'group';
  highlights: string[];
  gradient: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  // ── Featured (left → right): OptiCare, WILDFind, WildWisdom ──
  {
    title: 'OptiCare',
    label: 'Software Development 1 (2024)',
    description:
      'A centralized web application for optometric patient management. Developed the UI for login and registration system ensuring secure and user-friendly access. Built with React and Firebase for real-time data handling.',
    tags: ['React', 'Firebase', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/SeesonLau/Opticare',
    featured: true,
    type: 'group',
    highlights: [
      'User authentication system',
      'Patient record management',
      'Responsive UI design',
      'Firebase backend integration',
    ],
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    icon: <Eye size={22} />,
  },
  {
    title: 'WILDFind',
    label: 'Software Development 2 (2025)',
    description:
      'A lost and found tracking system for school environments. Originally developed as a C# Windows Forms application, now migrated to a modern web-based platform using React and Firebase for improved accessibility and real-time updates.',
    tags: ['React', 'Firebase', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/AspireSpartan/WILDFind_webapp',
    featured: true,
    type: 'group',
    highlights: [
      'Lost item reporting & search system',
      'Request for retrieval workflow',
      'Real-time item status tracking',
      'Migrated from C# WinForms to web',
    ],
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    icon: <Globe size={22} />,
  },
  {
    title: 'WildWisdom',
    label: 'Software Development 3 - Alliance (2025)',
    description:
      'A full-featured library management web application built during the ASI Bridge/JumpStart Program — a training program partnership between Alliance Software Inc. and CIT-U for CpE students. Features book cataloging, borrowing system, user authentication with OTP, and an admin dashboard with reporting.',
    tags: ['C#', 'ASP.NET', 'HTML', 'CSS', 'SQL','JavaScript'],
    github: 'https://github.com/SirLKFD/WildWisdom',
    featured: true,
    type: 'group',
    highlights: [
      'Book catalog with search, filter & recommendations',
      'Borrowing system with limits & overdue management',
      'User auth with OTP email verification',
      'Book ratings, wishlist & borrowing history',
      'Admin panel for book & user CRUD',
      'Activity, overdue & popular books reports',
    ],
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    icon: <BookOpen size={22} />,
  },
  // ── Other Projects ──
  {
    title: 'Automated Payroll Calculator System',
    label: 'Object-Oriented Programming 2 (2024)',
    description:
      'A desktop payroll management application built with C# Windows Forms and Microsoft Access database. Automates employee salary computation, deductions, and payroll report generation with a clean user interface.',
    tags: ['C#', 'Windows Forms', '.NET', 'MS Access'],
    github: 'https://github.com/JohnLapinig/Automated-Payroll-Calculator-System',
    featured: false,
    type: 'solo',
    highlights: [
      'Employee record management (CRUD)',
      'Automated salary & deduction computation',
      'Payroll report generation',
      'MS Access database integration',
    ],
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    icon: <DollarSign size={22} />,
  },
  {
    title: 'Automatic Water Dispenser System',
    label: 'Embedded Systems (2025)',
    description:
      'A real-world embedded systems project featuring an ESP32 microcontroller, HC-SR04 ultrasonic sensor, SG90 servo motor, and I2C OLED display. Applied hardware implementation for automatic water dispensing with sensor-based water level detection and servo-controlled valve — a hands-on IoT solution deployed on physical hardware.',
    tags: ['ESP32', 'C++', 'C', 'PlatformIO', 'OLED', 'Ultrasonic'],
    github: 'https://github.com/JohnLapinig/Automatic-Water-Dispenser-System',
    featured: false,
    type: 'solo',
    highlights: [
      'Real hardware ESP32 implementation',
      'HC-SR04 ultrasonic water level sensing',
      'SG90 servo-controlled valve mechanism',
      'I2C OLED display for live status feedback',
      'PlatformIO firmware development',
    ],
    gradient: 'from-sky-500/20 via-blue-500/10 to-transparent',
    icon: <Cpu size={22} />,
  },
  {
    title: 'AWS IoT Water Level Monitoring System',
    label: 'Embedded Systems Online — Zuitt (2025)',
    description:
      'A purely software-based simulation of an automated water level monitoring and servo-controlled valve system with AWS IoT integration. Uses Wokwi diagramming and PlatformIO simulation to model water level detection, valve control logic, and real-time cloud monitoring via AWS IoT Core and MQTT — inspired by MCWD water supply challenges. Developed through an online Embedded Systems subject partnered with Zuit.',
    tags: ['AWS IoT', 'MQTT', 'PlatformIO', 'C++', 'Simulation', 'Wokwi'],
    github: '#',
    featured: false,
    type: 'group',
    highlights: [
      'Simulated water level control with MIN/MAX thresholds',
      'Safe startup initialization logic (valve closed on boot)',
      'Smart fail-safe logic with change detection override',
      'AWS IoT Core cloud integration via MQTT',
      'MCWD-inspired automated water supply simulation',
    ],
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    icon: <Cloud size={22} />,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group relative flex flex-col rounded-2xl bg-dark-light/50 border border-slate-800 hover:border-cyan/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan/5 hover:-translate-y-1 overflow-hidden"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient image placeholder */}
      <div className={`relative h-48 bg-linear-to-br ${project.gradient} overflow-hidden`}>
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Centered icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-dark/60 backdrop-blur-sm border border-cyan/20 flex items-center justify-center text-cyan group-hover:scale-110 transition-transform duration-500">
            {project.icon}
          </div>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan/10 backdrop-blur-sm border border-cyan/30 text-cyan text-xs font-mono font-medium">
            <Star size={10} className="fill-cyan" />
            Featured
          </div>
        )}

        {/* Type badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-dark/60 backdrop-blur-sm border border-slate-700 text-slate-300 text-xs font-mono">
          {project.type === 'solo' ? '◆ Solo' : '◆◆ Group'}
        </div>

        {/* Hover overlay with GitHub link */}
        <div className="absolute inset-0 bg-dark/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-cyan/20 border border-cyan/40 flex items-center justify-center text-cyan hover:bg-cyan/30 transition-colors"
              aria-label="View Code"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-display font-semibold text-white mb-1 group-hover:text-cyan transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-cyan/60 mb-3">{project.label}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-cyan/5 text-cyan border border-cyan/15 hover:border-cyan/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action row */}
        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-slate-800/50">
          {project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan/10 text-cyan text-xs font-mono font-medium border border-cyan/20 hover:bg-cyan/20 hover:border-cyan/40 transition-all"
            >
              <Github size={14} />
              Code
            </a>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800/50 text-slate-300 text-xs font-mono font-medium border border-slate-700 hover:border-cyan/20 hover:text-cyan transition-all"
          >
            Details
            {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        </div>

        {/* Expandable details */}
        <div
          className={`overflow-hidden transition-all duration-400 ease-in-out ${expanded ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
        >
          <div className="pt-3 border-t border-slate-800/50">
            <p className="text-xs font-mono font-semibold text-white mb-2">All Highlights:</p>
            <ul className="space-y-1.5">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm text-slate-400"
                >
                  <span className="text-cyan mt-0.5 text-xs">▹</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative py-24 bg-dark ${isVisible ? 'section-visible' : 'section-hidden'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-mono font-medium border border-cyan/20 text-cyan bg-cyan/5 mb-5">
            <Layers size={14} />
            My Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            <span className="cyan-glow">Featured Projects</span>
          </h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Showcasing practical applications of theory and design — from embedded IoT systems to
            full‑stack web applications.
          </p>
        </div>

        {/* Featured projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>

        {/* Other projects */}
        {other.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-slate-800" />
              <span className="text-sm font-mono text-slate-500">Other Projects</span>
              <div className="h-px flex-1 bg-slate-800" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {other.map((project, idx) => (
                <ProjectCard key={project.title} project={project} index={idx} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
