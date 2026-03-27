import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { TrendingUp, Zap, Palette, Code } from "lucide-react";

const technologies = [
  {
    icon: TrendingUp,
    name: "Marketing Digital",
    description: "Google Ads, Meta Ads y contenido que genera confianza — y clientes reales.",
  },
  {
    icon: Palette,
    name: "Diseño & Experiencias",
    description: "Identidad visual y experiencias que hacen que te recuerden — por las razones correctas.",
  },
  {
    icon: Code,
    name: "Software a Medida",
    description: "Web, e-commerce y sistemas a medida. Rápidos, modernos y diseñados para convertir visitas en clientes.",
  },
  {
    icon: Zap,
    name: "Automatización con IA",
    description: "Flujos inteligentes que eliminan lo repetitivo y te devuelven tiempo para lo que importa.",
  },
];

export function TechShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div id="tecnologia" ref={containerRef} className="relative py-32 px-6 overflow-hidden" style={{ background: '#FF6D2C' }}>
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 109, 253, 0.05) 2px, transparent 2px),
              linear-gradient(90deg, rgba(0, 109, 253, 0.05) 2px, transparent 2px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#006DFD]/30 to-[#FF6D2C]/30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl md:text-7xl font-bold mb-6 headline"
            style={{ color: 'white', textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}
          >
            Una solución Oükei{" "}
            <span style={{ color: '#006DFD', textShadow: '3px 3px 0px rgba(0,0,0,0.25)' }}>
              para cada problema
            </span>
          </h2>
          <p className="text-xl font-semibold max-w-3xl mx-auto" style={{ color: 'white' }}>
            Conectamos ideas, creatividad y tecnología para que tu negocio deje huella. Diseñado para que siempre digas: Oükei, esto funciona.
          </p>
        </motion.div>

        {/* Tech cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                className="relative h-full p-6 rounded-2xl"
                style={{ background: 'white', border: 'none', boxShadow: `0 8px 0 ${index % 2 === 0 ? '#CC5522' : '#0052CC'}, 0 15px 30px rgba(0,0,0,0.15)` }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-4"
                    animate={{
                      rotate: hoveredIndex === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'white', boxShadow: `0 4px 0 ${index % 2 === 0 ? '#0052CC' : '#CC5522'}` }}>
                      <tech.icon className="w-6 h-6" style={{ color: index % 2 === 0 ? '#006DFD' : '#FF6D2C' }} />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-2" style={{ color: index % 2 === 0 ? '#006DFD' : '#FF6D2C' }}>{tech.name}</h3>
                  <p className="text-sm font-medium" style={{ color: '#444' }}>{tech.description}</p>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { value: "+85%", label: "Reducción de carga operativa" },
            { value: "3x", label: "Más leads que responden" },
            { value: "24/7", label: "Tu negocio siempre activo" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div
                className="text-5xl md:text-6xl font-bold mb-2"
                style={{ color: 'white', textShadow: '3px 3px 0px #006DFD, 6px 6px 0px rgba(0,0,0,0.15)' }}
              >
                {stat.value}
              </div>
              <div className="font-semibold" style={{ color: 'white' }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
