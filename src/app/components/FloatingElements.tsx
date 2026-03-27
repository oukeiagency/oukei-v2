import { motion } from "motion/react";
import oukei2 from "@/assets/OUKEI-2.png";
import oukei3 from "@/assets/OUKEI-3.png";

const logoImages = [oukei2, oukei3];

const floatingLogos = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  src: logoImages[i % 2],
  size: Math.random() * 28 + 20,
  initialX: Math.random() * 100,
  initialY: Math.random() * 100,
  duration: 2.5 + Math.random() * 2,
  delay: Math.random() * 4,
}));

const shapes = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  type: i % 3,
  size: Math.floor(Math.random() * 30 + 15),
  initialX: Math.floor(Math.random() * 100),
  initialY: Math.floor(Math.random() * 100),
  duration: Math.floor(Math.random() * 15 + 10),
  delay: Math.floor(Math.random() * 5),
  color: ['#FFD700', '#FF6D2C', '#006DFD'][i % 3],
}));

export function FloatingElements() {

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Mini OUKEI-2 / OUKEI-3 flotantes — aparecen y desaparecen como estrellas */}
      {floatingLogos.map((logo) => (
        <motion.img
          key={`logo-float-${logo.id}`}
          src={logo.src}
          alt=""
          className="absolute"
          style={{
            width: logo.size,
            height: logo.size,
            left: `${logo.initialX}%`,
            top: `${logo.initialY}%`,
            objectFit: 'contain',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: logo.duration,
            repeat: Infinity,
            delay: logo.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.initialX}%`,
            top: `${shape.initialY}%`,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 80 - 40, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {shape.type === 0 && (
            // Circle
            <div
              className="w-full h-full rounded-full"
              style={{
                background: `linear-gradient(135deg, ${shape.color}, ${shape.color}88)`,
                boxShadow: `0 0 20px ${shape.color}66`,
              }}
            />
          )}
          {shape.type === 1 && (
            // Square
            <div
              className="w-full h-full rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${shape.color}, ${shape.color}88)`,
                boxShadow: `0 0 20px ${shape.color}66`,
              }}
            />
          )}
          {shape.type === 2 && (
            // Triangle (star)
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(135deg, ${shape.color}, ${shape.color}88)`,
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                filter: `drop-shadow(0 0 10px ${shape.color})`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
