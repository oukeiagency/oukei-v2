import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import uOukeiBlanca from "@/assets/U-oukei_blanca.svg";

const stars = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 4,
  size: Math.random() * 20 + 24,
}));

export function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="relative py-32 px-6 overflow-hidden" style={{
      background: '#006DFD',
    }}>
      {/* Floating U-oukei shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((s) => (
          <motion.img
            key={`u-cta-${s.id}`}
            src={uOukeiBlanca}
            alt=""
            className="absolute"
            style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, opacity: 0 }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 0.9, 0], rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative p-12 md:p-16 rounded-[3rem] bg-white overflow-hidden"
          style={{ boxShadow: '0 20px 0 rgba(0, 109, 253, 0.4), 0 40px 80px rgba(0, 0, 0, 0.3)' }}
        >
          {/* Cartoon pattern background */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, #006DFD 0px, #006DFD 10px, transparent 10px, transparent 20px)`,
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="mb-8"
            >
              <div
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FF6D2C] font-bold text-lg text-white"
                style={{ boxShadow: '0 6px 0 #C5522A, 0 10px 30px rgba(255, 109, 44, 0.5)' }}
              >
                🚀 ¿Listo para evolucionar? 🚀
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 headline"
              style={{
                textShadow: '3px 3px 0px #FF6D2C, 6px 6px 0px #006DFD, 9px 9px 20px rgba(0, 0, 0, 0.2)',
                color: 'white',
                WebkitTextStroke: '2px #006DFD',
                paintOrder: 'stroke fill',
              }}
            >
              ¡Comencemos tu{" "}
              <span className="text-[#FFD700]">transformación digital!</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 150, delay: 0.4 }}
              className="mb-12 max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-r from-[#006DFD]/10 to-[#FF6D2C]/10 rounded-3xl p-6 backdrop-blur-sm border-4 border-white/50">
                <p className="text-xl text-gray-700 font-semibold">
                  Entre más sepamos, mejor podremos ayudarte ✨
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 150, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                className="group relative px-10 py-5 text-white rounded-full overflow-hidden font-bold text-lg"
                style={{
                  background: '#FF6D2C',
                  boxShadow: '0 10px 0 #C5522A, 0 20px 40px rgba(255, 109, 44, 0.6)',
                }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 16px 0 #C5522A, 0 30px 50px rgba(255, 109, 44, 0.7)',
                }}
                whileTap={{
                  y: 6,
                  boxShadow: '0 4px 0 #C5522A, 0 10px 30px rgba(255, 109, 44, 0.5)',
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  🚀 ¡Quiero empezar!
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </span>
              </motion.button>

              <motion.button
                className="group px-10 py-5 bg-white text-[#006DFD] rounded-full font-bold text-lg flex items-center gap-2"
                style={{
                  boxShadow: '0 10px 0 #006DFD, 0 20px 40px rgba(0, 109, 253, 0.5)',
                }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 16px 0 #006DFD, 0 30px 50px rgba(0, 109, 253, 0.6)',
                }}
                whileTap={{
                  y: 6,
                  boxShadow: '0 4px 0 #006DFD, 0 10px 30px rgba(0, 109, 253, 0.4)',
                }}
              >
                <MessageSquare className="w-6 h-6" />
                Hablar con un Experto
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex flex-wrap justify-center gap-4"
            >
              {[
                { icon: "⚡", text: "Respuesta en 24h" },
                { icon: "✓", text: "Sin compromiso" },
                { icon: "🎯", text: "Consultoría personalizada" }
              ].map((badge, i) => (
                <motion.div
                  key={badge.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-white font-bold text-sm"
                  style={{
                    background: '#006DFD',
                    boxShadow: '0 4px 0 #0052CC, 0 8px 20px rgba(0, 109, 253, 0.4)',
                  }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                >
                  <span className="text-lg">{badge.icon}</span>
                  {badge.text}
                </motion.div>
              ))}
            </motion.div>

            {/* Privacy note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-6 text-xs font-medium"
              style={{ color: 'rgba(0,0,0,0.35)' }}
            >
              🔒 Tu información está segura con nosotros. Solo la usamos para responderte.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
