import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Digital signal divider — canvas-based pulse-monitor style.
 * Square wave with glowing tracer that sweeps left→right then resets,
 * with bold 1/0 labels that light up as the tracer passes.
 */
export default function CircuitDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);
  const animRef = useRef<number>(0);
  const revealStartRef = useRef<number>(0);

  // Wave parameters
  const segW = 60;
  const high = 10;
  const low = 34;
  const mid = 22;

  // Get Y position at a given X along the digital wave
  const getY = useCallback((x: number) => {
    const segIndex = Math.floor(x / segW);
    return segIndex % 2 === 0 ? high : low;
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
          revealStartRef.current = performance.now();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const revealDuration = 3000;
    const tracerSpeed = 12000;  // ms for one left→right sweep (slow, non-distracting)
    const highlightLen = 180;   // px length of the glowing highlight window

    // Helper: draw the full waveform path
    const drawWavePath = (count: number) => {
      ctx.moveTo(0, mid);
      for (let i = 0; i < count; i++) {
        const x = i * segW;
        const isHigh = i % 2 === 0;
        const y = isHigh ? high : low;
        const prevY = i === 0 ? mid : (isHigh ? low : high);
        ctx.lineTo(x, prevY);
        ctx.lineTo(x, y);
        ctx.lineTo(x + segW, y);
      }
    };

    const draw = (now: number) => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const elapsed = now - revealStartRef.current;
      const revealProgress = Math.min(elapsed / revealDuration, 1);
      const revealX = revealProgress * w;

      const count = Math.ceil(w / segW) + 1;

      // ---- During initial reveal: draw waveform progressively ----
      if (revealProgress < 1) {
        ctx.beginPath();
        ctx.moveTo(0, mid);
        for (let i = 0; i < count; i++) {
          const x = i * segW;
          const isHigh = i % 2 === 0;
          const y = isHigh ? high : low;
          const prevY = i === 0 ? mid : (isHigh ? low : high);
          if (x > revealX) break;
          ctx.lineTo(Math.min(x, revealX), prevY);
          ctx.lineTo(Math.min(x, revealX), y);
          ctx.lineTo(Math.min(x + segW, revealX), y);
        }
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.15)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // ---- Tracer: fixed-width highlight window moving left→right, loops ----
      // After reveal, ONLY the highlight window is visible — nothing else
      if (revealProgress >= 1) {
        const tracerElapsed = now - (revealStartRef.current + revealDuration);
        const t = (tracerElapsed % tracerSpeed) / tracerSpeed;
        // Center of the highlight window — travels from -highlightLen to w+highlightLen
        const totalTravel = w + highlightLen * 2;
        const center = -highlightLen + t * totalTravel;
        const hlLeft = center - highlightLen / 2;
        const hlRight = center + highlightLen / 2;

        // --- Soft outer glow ---
        ctx.save();
        ctx.beginPath();
        drawWavePath(count);
        const outerGrad = ctx.createLinearGradient(hlLeft - 40, 0, hlRight + 40, 0);
        outerGrad.addColorStop(0, 'rgba(0,255,255,0)');
        outerGrad.addColorStop(0.15, 'rgba(0,255,255,0.1)');
        outerGrad.addColorStop(0.5, 'rgba(0,255,255,0.25)');
        outerGrad.addColorStop(0.85, 'rgba(0,255,255,0.1)');
        outerGrad.addColorStop(1, 'rgba(0,255,255,0)');
        ctx.strokeStyle = outerGrad;
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.restore();

        // --- Core bright line ---
        ctx.save();
        ctx.beginPath();
        drawWavePath(count);
        const coreGrad = ctx.createLinearGradient(hlLeft, 0, hlRight, 0);
        coreGrad.addColorStop(0, 'rgba(0,255,255,0)');
        coreGrad.addColorStop(0.2, 'rgba(0,255,255,0.3)');
        coreGrad.addColorStop(0.5, 'rgba(255,255,255,0.9)');
        coreGrad.addColorStop(0.8, 'rgba(0,255,255,0.3)');
        coreGrad.addColorStop(1, 'rgba(0,255,255,0)');
        ctx.strokeStyle = coreGrad;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();

        // --- Light up 1/0 labels inside highlight window ---
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let i = 0; i < count; i++) {
          const x = i * segW + segW / 2;
          const dist = Math.abs(x - center);
          if (dist < highlightLen / 2) {
            const isHigh = i % 2 === 0;
            const labelY = isHigh ? high - 7 : low + 9;
            const label = isHigh ? '1' : '0';
            const brightness = Math.max(0, 1 - dist / (highlightLen / 2));
            const alpha = (brightness * 0.8).toFixed(2);
            const size = 12 + brightness * 4;
            ctx.font = `bold ${size.toFixed(0)}px 'Fira Code', 'Courier New', monospace`;
            ctx.fillStyle = `rgba(0, 255, 255, ${alpha})`;
            ctx.fillText(label, x, labelY);
            if (brightness > 0.5) {
              ctx.fillStyle = `rgba(255, 255, 255, ${((brightness - 0.5) * 0.6).toFixed(2)})`;
              ctx.fillText(label, x, labelY);
            }
          }
        }

        // --- Bright cursor dot at center ---
        if (center > 0 && center < w) {
          const cursorY = getY(center);
          ctx.beginPath();
          ctx.arc(center, cursorY, 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
          ctx.fill();
          ctx.beginPath();
          ctx.arc(center, cursorY, 10, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 255, 255, 0.12)';
          ctx.fill();
        }
      }

      // ---- Edge fade ----
      const edgeW = w * 0.08;
      const leftFade = ctx.createLinearGradient(0, 0, edgeW, 0);
      leftFade.addColorStop(0, 'rgb(10,10,20)');
      leftFade.addColorStop(1, 'rgba(10,10,20,0)');
      ctx.fillStyle = leftFade;
      ctx.fillRect(0, 0, edgeW, h);

      const rightFade = ctx.createLinearGradient(w - edgeW, 0, w, 0);
      rightFade.addColorStop(0, 'rgba(10,10,20,0)');
      rightFade.addColorStop(1, 'rgb(10,10,20)');
      ctx.fillStyle = rightFade;
      ctx.fillRect(w - edgeW, 0, edgeW, h);

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [visible, getY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none"
      style={{ height: 46 }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
