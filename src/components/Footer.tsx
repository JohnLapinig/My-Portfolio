

export default function Footer() {
  return (
    <footer className="py-8 bg-dark border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" className="font-mono text-lg font-bold text-cyan">
            &lt;<span className="text-white">John Augustine L. Lapinig</span>/&gt;
          </a>        
          <div className="flex gap-6">
            {['About'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-slate-500 hover:text-cyan transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
