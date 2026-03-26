import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Cpu, Database, Cloud, Lock } from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    name: "Machine Learning",
    description: "Modelos predictivos y sistemas de recomendación",
  },
  {
    icon: Database,
    name: "Big Data Analytics",
    description: "Procesamiento y análisis de datos masivos",
  },
  {
    icon: Cloud,
    name: "Cloud Infrastructure",
    description: "Arquitecturas escalables y resilientes",
  },
  {
    icon: Lock,
    name: "Security First",
    description: "Protección de datos y cumplimiento normativo",
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
            Tecnología{" "}
            <span style={{ color: '#006DFD', textShadow: '3px 3px 0px rgba(0,0,0,0.25)' }}>
              de vanguardia
            </span>
          </h2>
          <p className="text-xl font-semibold max-w-3xl mx-auto" style={{ color: 'white' }}>
            Utilizamos las herramientas más avanzadas del mercado para garantizar resultados excepcionales
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
                className="relative h-full p-6 rounded-2xl overflow-hidden"
                style={{ background: '#006DFD', border: '2px solid rgba(255,255,255,0.2)', boxShadow: '0 8px 0 rgba(0,0,0,0.25), 0 15px 30px rgba(0,0,0,0.15)' }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#006DFD]/20 to-[#FF6D2C]/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#006DFD] to-[#FF6D2C] flex items-center justify-center">
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-2" style={{ color: 'white', textShadow: '1px 1px 0px rgba(0,0,0,0.4)' }}>{tech.name}</h3>
                  <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>{tech.description}</p>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(0, 109, 253, 0.5), transparent)",
                  }}
                  animate={{
                    x: hoveredIndex === index ? ["0%", "200%"] : "0%",
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: hoveredIndex === index ? Infinity : 0,
                    ease: "linear",
                  }}
                />
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
            { value: "500+", label: "Proyectos Exitosos" },
            { value: "98%", label: "Satisfacción del Cliente" },
            { value: "5x", label: "ROI Promedio" },
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
