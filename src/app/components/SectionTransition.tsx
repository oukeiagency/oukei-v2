import { motion } from "motion/react";

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  size: Math.random() * 10 + 4,
  left: Math.random() * 100,
  delay: Math.random() * 2,
  duration: 1.5 + Math.random() * 2,
  color: i % 3 === 0 ? 'white' : i % 3 === 1 ? '#FFD700' : 'white',
}));

interface SectionTransitionProps {
  from: string;
  to: string;
}

export function SectionTransition({ from, to }: SectionTransitionProps) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: '120px',
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            background: p.color,
            opacity: 0,
          }}
          animate={{
            y: [120, -20],
            opacity: [0, 0.9, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
