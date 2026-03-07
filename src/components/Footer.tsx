

export default function Footer() {
  return (
    <footer className="relative py-6 bg-dark overflow-hidden">
      {/* Top border with glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan/20 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan/30 to-transparent blur-sm" />

      {/* Perspective grid floor */}
      <div className="perspective-grid" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Extraordinary logo / name */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); window.dispatchEvent(new Event('clear-active-section')); }}
            className="group relative flex flex-col items-center gap-1 transition-transform duration-300 hover:scale-105"
          >
            {/* Brand name */}
            <span className="font-mono text-2xl font-black tracking-widest">
              <span className="text-cyan drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">&lt;</span>
              <span className="bg-linear-to-r from-cyan via-white to-cyan bg-clip-text text-transparent">JAL</span>
              <span className="text-cyan/60">.</span>
              <span className="bg-linear-to-r from-white to-cyan bg-clip-text text-transparent">dev</span>
              <span className="text-cyan drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">/&gt;</span>
            </span>
            {/* Full name underneath */}
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
              John Augustine L. Lapinig
            </span>
            {/* Underline glow on hover */}
            <span className="block w-0 group-hover:w-full h-px bg-linear-to-r from-transparent via-cyan/40 to-transparent transition-all duration-500" />
          </a>

          {/* Copyright */}
          <p className="text-sm text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} — Built with <span className="text-cyan">passion</span> &amp; code
          </p>
        </div>
      </div>
    </footer>
  );
}
