import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { OukeiLogo } from "./OukeiLogo";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Casos de Éxito", href: "#casos" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );

  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"]);

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 relative">
        {/* Cartoon style top border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#006DFD] via-[#FF6D2C] to-[#006DFD]"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: '200% 100%',
          }}
        />
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}
          >
            <OukeiLogo size={90} />
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="font-bold transition-colors relative group"
                style={{ color: '#FF6D2C' }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#006DFD] to-[#FF6D2C] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}

            <motion.button
              className="px-6 py-3 text-white rounded-full font-bold"
              style={{
                background: '#006DFD',
                boxShadow: '0 4px 0 #0052CC, 0 8px 20px rgba(0, 109, 253, 0.4)',
              }}
              whileHover={{
                y: -2,
                boxShadow: '0 6px 0 #0052CC, 0 12px 25px rgba(0, 109, 253, 0.5)',
              }}
              whileTap={{
                y: 2,
                boxShadow: '0 2px 0 #0052CC, 0 4px 15px rgba(0, 109, 253, 0.3)',
              }}
            >
              ¡Contactar!
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block text-white/70 hover:text-white transition-colors py-2"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <button className="w-full px-6 py-2 bg-gradient-to-r from-[#006DFD] to-[#FF6D2C] text-white rounded-full">
              Contactar
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
