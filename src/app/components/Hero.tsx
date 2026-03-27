import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import oukei2 from "@/assets/OUKEI-2.png";
import oukei3 from "@/assets/OUKEI-3.png";

const heroLogos = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  src: i % 2 === 0 ? oukei2 : oukei3,
  size: Math.floor(Math.random() * 28 + 20),
  left: Math.floor(Math.random() * 100),
  top: Math.floor(Math.random() * 100),
  duration: 2 + Math.floor(Math.random() * 3),
  delay: Math.floor(Math.random() * 4),
}));

const heroStars = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: Math.floor(Math.random() * 100),
  top: Math.floor(Math.random() * 100),
  duration: 2 + Math.floor(Math.random() * 2),
  delay: Math.floor(Math.random() * 3),
  color: i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF6D2C' : '#006DFD',
}));

// Circles confined to edges (left <15% or right >85%, or top <15% or bottom >85%)
const edgePositions = [
  { left: 3, top: 10 }, { left: 8, top: 55 }, { left: 2, top: 80 }, { left: 12, top: 90 },
  { left: 88, top: 8 }, { left: 92, top: 50 }, { left: 85, top: 78 }, { left: 95, top: 92 },
];
const heroCircles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: 20 + Math.floor(Math.random() * 40),
  left: edgePositions[i].left,
  top: edgePositions[i].top,
  moveX: Math.floor(Math.random() * 20 - 10),
  duration: 3 + Math.floor(Math.random() * 2),
  delay: Math.floor(Math.random() * 2),
}));

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-white">
      {/* Cartoon style decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating stars */}
        {heroStars.map((star) => (
          <motion.div
            key={`star-${star.id}`}
            className="absolute"
            style={{ left: `${star.left}%`, top: `${star.top}%`, willChange: 'transform, opacity' }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: [0, 1, 0], rotate: [0, 180, 360], y: [0, -30, 0] }}
            transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
          >
            <div
              className="w-4 h-4"
              style={{
                background: star.color,
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              }}
            />
          </motion.div>
        ))}

        {/* Mini OUKEI-2 / OUKEI-3 flotantes */}
        {heroLogos.map((logo) => (
          <motion.img
            key={`hero-logo-${logo.id}`}
            src={logo.src}
            alt=""
            className="absolute"
            style={{
              width: logo.size,
              height: logo.size,
              left: `${logo.left}%`,
              top: `${logo.top}%`,
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

        {/* Bouncing circles */}
        {heroCircles.map((circle) => (
          <motion.div
            key={`circle-${circle.id}`}
            className="absolute rounded-full"
            style={{
              width: circle.size,
              height: circle.size,
              background: circle.id % 2 === 0 ? '#006DFD' : '#FF6D2C',
              left: `${circle.left}%`,
              top: `${circle.top}%`,
              willChange: 'transform',
            }}
            animate={{ y: [0, -50, 0], x: [0, circle.moveX, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: circle.duration, repeat: Infinity, delay: circle.delay, ease: "easeInOut" }}
          />
        ))}
      </div>


      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-start px-6 pt-40"
      >
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 12, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 max-w-4xl headline"
        >
          <motion.span
            className="block text-5xl md:text-6xl lg:text-7xl"
            style={{ color: '#FF6D2C', textShadow: '3px 3px 0px #006DFD, 6px 6px 0px rgba(0,0,0,0.1)' }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Nada nos detiene
          </motion.span>
          <motion.span
            className="block mt-3"
            style={{ color: '#006DFD', textShadow: '3px 3px 0px #FF6D2C, 6px 6px 0px rgba(0,0,0,0.1)' }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            hasta tener el "O<span style={{ color: '#FF6D2C', textShadow: '3px 3px 0px #006DFD, 6px 6px 0px rgba(0,0,0,0.1)' }}>ü</span>kei"
          </motion.span>
          <motion.span
            className="block mt-6"
            style={{ color: '#006DFD', textShadow: '3px 3px 0px #FF6D2C, 6px 6px 0px rgba(0,0,0,0.1)' }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            que tu proyecto merece.
          </motion.span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 12, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <motion.button
            className="group relative px-10 py-5 bg-gradient-to-r from-[#FF6D2C] to-[#FF8A50] text-white rounded-full overflow-hidden"
            style={{ boxShadow: '0 8px 0 #C5522A, 0 15px 30px rgba(255, 109, 44, 0.5)' }}
            whileHover={{ y: -4, boxShadow: '0 12px 0 #C5522A, 0 20px 40px rgba(255, 109, 44, 0.6)' }}
            whileTap={{ y: 4, boxShadow: '0 4px 0 #C5522A, 0 8px 20px rgba(255, 109, 44, 0.4)' }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
          >
            <span className="relative z-10 flex items-center gap-2 font-bold text-lg">
              🚀 Quiero empezar
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </span>
          </motion.button>

          <motion.button
            className="px-10 py-5 bg-white text-[#006DFD] rounded-full font-bold text-lg"
            style={{ boxShadow: '0 8px 0 #006DFD, 0 15px 30px rgba(0, 109, 253, 0.4)' }}
            whileHover={{ y: -4, boxShadow: '0 12px 0 #006DFD, 0 20px 40px rgba(0, 109, 253, 0.5)' }}
            whileTap={{ y: 4, boxShadow: '0 4px 0 #006DFD, 0 8px 20px rgba(0, 109, 253, 0.3)' }}
          >
            💬 Hablar con un Experto
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#006DFD]/30 rounded-full p-1"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#006DFD] rounded-full mx-auto"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
