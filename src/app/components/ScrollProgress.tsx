import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 origin-left z-[100]"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #002F7F 0%, #006DFD 30%, #FF6D2C 60%, #EB3200 100%)',
        boxShadow: '0 0 12px rgba(0, 109, 253, 0.6), 0 0 4px rgba(235, 50, 0, 0.4)',
      }}
    />
  );
}
