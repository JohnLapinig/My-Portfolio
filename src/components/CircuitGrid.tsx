/**
 * Ultra-subtle circuit-board pattern background.
 * Pure CSS — no canvas, no heavy animations.
 * Just a faint grid with tiny junction dots
 * so it hints at PCB without being distracting.
 */
export default function CircuitGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Faint grid dots */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(0, 255, 255, 0.045) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* A few subtle horizontal traces */}
      <div className="absolute top-1/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan/4 to-transparent" />
      <div className="absolute top-3/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan/3 to-transparent" />
    </div>
  );
}
