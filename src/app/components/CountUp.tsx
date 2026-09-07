import { useEffect, useRef, useState } from "react";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const inViewport = (el: Element) => {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight && r.bottom > 0;
};

/**
 * Número que cuenta desde 0 hasta `value` la primera vez que se hace scroll
 * hasta él. Si ya está a la vista al cargar (o no hay JS/animación), muestra
 * directamente el valor final — nunca se queda en 0.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1100,
  className,
  style,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done.current) return;

    if (prefersReduced() || inViewport(el)) {
      setN(value);
      done.current = true;
      return;
    }

    // Aún no se ve: arranca en 0 y cuenta cuando entre en pantalla.
    setN(0);

    const animateUp = () => {
      if (done.current) return;
      done.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setN(Math.round(eased * value));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          animateUp();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}
