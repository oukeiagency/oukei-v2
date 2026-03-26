import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Cartoon style scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 origin-left z-[100]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #FFD700 0%, #FF6D2C 25%, #006DFD 50%, #00F2FE 75%, #F093FB 100%)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.5)',
        }}
      />
      {/* Animated dots following the progress */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full z-[101]"
        style={{
          x: useSpring(scrollYProgress, {
            stiffness: 100,
            damping: 30,
          }),
          background: 'radial-gradient(circle, #FFD700, #FF6D2C)',
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
          translateX: 'calc(100vw * var(--x) - 8px)',
          translateY: '-6px',
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}
