import { useRef, useCallback } from 'react';

/**
 * Applies a smooth 3D tilt effect to a card element based on mouse position.
 * Inspired by MarceloDesignX-style interactive card UIs.
 */
export function use3DTilt(intensity = 15) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -intensity;
      const rotateY = ((x - centerX) / centerX) * intensity;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      el.style.transition = 'transform 0.1s ease-out';

      // Dynamic shine effect
      const shine = el.querySelector('.tilt-shine') as HTMLElement;
      if (shine) {
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,255,255,0.15) 0%, transparent 60%)`;
      }

      // Dynamic border glow
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      el.style.borderImage = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(0,255,255,0.6) 0%, rgba(0,255,255,0.1) 50%, transparent 80%) 1`;
    },
    [intensity]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    el.style.transition = 'transform 0.5s ease-out';
    el.style.borderImage = '';
    const shine = el.querySelector('.tilt-shine') as HTMLElement;
    if (shine) {
      shine.style.background = 'transparent';
    }
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
