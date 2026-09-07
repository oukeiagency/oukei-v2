import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

/** Aparición sutil al entrar en viewport, una sola vez. Respeta prefers-reduced-motion. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Revelado tipo "el texto sube desde detrás de una línea". Editorial, premium,
 * solo transform (barato). Ideal para titulares de sección.
 */
export function MaskReveal({
  children,
  as: Tag = "h2",
  className = "",
  style,
  delay = 0,
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const motionMap = { h1: motion.h1, h2: motion.h2, h3: motion.h3, p: motion.p };
  if (reduce) {
    const Static = Tag;
    return (
      <Static className={className} style={style}>
        {children}
      </Static>
    );
  }
  const MotionTag = motionMap[Tag];
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <MotionTag
        className={className}
        style={style}
        initial={{ y: "110%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </MotionTag>
    </span>
  );
}
