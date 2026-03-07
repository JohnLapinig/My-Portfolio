import { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'complete' | 'exit'>('loading');

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerating progress curve
        const increment = prev < 30 ? 3 : prev < 60 ? 4 : prev < 85 ? 2 : 6;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setPhase('complete'), 300);
      setTimeout(() => setPhase('exit'), 900);
      setTimeout(() => onComplete(), 1500);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-dark transition-all duration-700 ${
        phase === 'exit' ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background grid pulse */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(0,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Radial glow */}
      <div className={`absolute w-80 h-80 rounded-full transition-all duration-1000 ${
        phase === 'complete' ? 'bg-cyan/8 blur-[120px] scale-150' : 'bg-cyan/4 blur-[100px] scale-100'
      }`} />

      {/* Logo */}
      <div className={`relative mb-10 transition-all duration-700 ${
        phase === 'complete' ? 'scale-110' : 'scale-100'
      }`}>
        <span className={`font-mono text-4xl sm:text-5xl font-black tracking-widest transition-all duration-500 ${
          phase === 'complete' ? 'opacity-100' : 'opacity-90'
        }`}>
          <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] loader-bracket-left">&lt;</span>
          <span className="bg-linear-to-r from-cyan via-white to-cyan bg-clip-text text-transparent">JAL</span>
          <span className="text-cyan/60">.</span>
          <span className="bg-linear-to-r from-white to-cyan bg-clip-text text-transparent">dev</span>
          <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] loader-bracket-right">/&gt;</span>
        </span>
      </div>

      {/* Progress bar */}
      <div className="relative w-56 sm:w-64 h-px bg-slate-800 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-linear-to-r from-cyan to-cyan/70 rounded-full transition-all duration-100 ease-out shadow-[0_0_10px_rgba(0,255,255,0.5)]"
          style={{ width: `${progress}%` }}
        />
        {/* Glow tip */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan blur-sm transition-all duration-100"
          style={{ left: `calc(${progress}% - 6px)` }}
        />
      </div>

      {/* Status text */}
      <div className="flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-slate-500 tracking-wider uppercase">
          {phase === 'complete' ? 'Welcome' : 'Loading Lapinig\'s Portfolio'}
        </span>
        <span className="font-mono text-sm text-cyan tabular-nums">
          {progress}%
        </span>
      </div>

      {/* Loading dots */}
      {phase === 'loading' && (
        <div className="flex gap-1.5 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-cyan/50 animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
