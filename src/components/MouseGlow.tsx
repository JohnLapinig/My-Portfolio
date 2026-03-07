import { useEffect, useRef } from 'react';

/**
 * A global mouse-following glow effect. Uses refs and direct DOM
 * manipulation for zero-delay cursor tracking.
 */
export default function MouseGlow() {
  const primaryRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (primaryRef.current) {
        primaryRef.current.style.left = `${x}px`;
        primaryRef.current.style.top = `${y}px`;
      }
      if (secondaryRef.current) {
        secondaryRef.current.style.left = `${x}px`;
        secondaryRef.current.style.top = `${y}px`;
      }
      if (containerRef.current) {
        containerRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-9999"
      style={{ opacity: 0 }}
    >
      {/* Primary glow */}
      <div
        ref={primaryRef}
        className="absolute w-150 h-150 -translate-x-1/2 -translate-y-1/2 rounded-full will-change-[left,top]"
        style={{
          left: -100,
          top: -100,
          background: 'radial-gradient(circle, rgba(0,255,255,0.06) 0%, rgba(0,255,255,0.02) 30%, transparent 60%)',
        }}
      />
      {/* Secondary inner glow */}
      <div
        ref={secondaryRef}
        className="absolute w-50 h-50 -translate-x-1/2 -translate-y-1/2 rounded-full will-change-[left,top]"
        style={{
          left: -100,
          top: -100,
          background: 'radial-gradient(circle, rgba(0,255,255,0.08) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
