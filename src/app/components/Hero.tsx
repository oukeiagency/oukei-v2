import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import oukei2 from "@/assets/OUKEI-2.png";
import oukei3 from "@/assets/OUKEI-3.png";

const heroLogos = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  src: i % 2 === 0 ? oukei2 : oukei3,
  size: Math.random() * 28 + 20,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 2 + Math.random() * 2,
  delay: Math.random() * 4,
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              <div
                className="w-4 h-4"
                style={{
                  background: i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF6D2C' : '#006DFD',
                  clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                  filter: 'drop-shadow(0 0 8px currentColor)',
                }}
              />
            </div>
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
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: `linear-gradient(135deg, ${i % 2 === 0 ? '#006DFD' : '#FF6D2C'}, ${i % 2 === 0 ? '#0088FF' : '#FF8A50'})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 10px 40px ${i % 2 === 0 ? 'rgba(0, 109, 253, 0.4)' : 'rgba(255, 109, 44, 0.4)'}`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>


      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 pt-24"
      >
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 12, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-9xl font-bold text-center mb-6 max-w-5xl headline"
          style={{
            textShadow: '4px 4px 0px #FF6D2C, 8px 8px 0px #006DFD, 12px 12px 20px rgba(0, 0, 0, 0.15)',
          }}
        >
          <motion.span
            className="block text-[#006DFD]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ¡El futuro del
          </motion.span>
          <motion.span
            className="block bg-gradient-to-r from-[#FFD700] via-[#FF6D2C] to-[#006DFD] bg-clip-text text-transparent"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            style={{
              filter: 'drop-shadow(0 10px 20px rgba(255, 109, 44, 0.5))',
            }}
          >
            Marketing Digital!
          </motion.span>
        </motion.h1>

        {/* Subtitle - Cartoon bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
          className="mb-12 max-w-3xl mx-auto"
        >
          <motion.div
            className="relative bg-white rounded-3xl px-8 py-6 shadow-2xl"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.8)',
            }}
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '20px solid transparent',
                borderRight: '20px solid transparent',
                borderTop: '30px solid white',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
              }}
            />
            <p className="text-xl md:text-2xl text-center bg-gradient-to-r from-[#006DFD] to-[#FF6D2C] bg-clip-text text-transparent font-semibold">
              Transformamos tu negocio con estrategias avanzadas de IA,
              automatización inteligente y experiencias digitales inolvidables ✨
            </p>
          </motion.div>
        </motion.div>

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
              ¡Iniciar Proyecto!
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
            Ver Casos de Éxito
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
