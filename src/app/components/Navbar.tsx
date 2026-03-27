import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import oukeiLogo from "@/assets/Oukei_v2.svg";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Casos de Éxito", href: "#casos" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // 0 = top, 1 = scrolled
  const scrolled = useTransform(scrollY, [0, 80], [0, 1]);

  // Pill container: goes from full-width transparent → centered floating card
  // Same pill shape always — only colors change
  const navPaddingX = useTransform(scrollY, [0, 80], [32, 32]);
  const navPaddingY = useTransform(scrollY, [0, 80], [10, 10]);
  // Fondo blanco siempre, misma forma pill siempre
  const navBackground = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,1)", "rgba(255,255,255,1)"]
  );
  const navBorderRadius = useTransform(scrollY, [0, 80], [100, 100]);
  const navTop = useTransform(scrollY, [0, 80], [12, 12]);
  const navMaxWidth = useTransform(scrollY, [0, 80], [900, 900]);
  const navShadow = useTransform(
    scrollY,
    [0, 80],
    [
      "0 4px 0 #0052CC, 0 8px 32px rgba(0,109,253,0.18)",
      "0 4px 0 #0052CC, 0 8px 32px rgba(0,109,253,0.18)",
    ]
  );
  const navBorder = useTransform(
    scrollY,
    [0, 80],
    ["1px solid rgba(0,109,253,0.15)", "1px solid rgba(0,109,253,0.15)"]
  );

  // Hero: links azul → scroll: links naranja
  const linkColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0,109,253,1)", "rgba(255,109,44,1)"]
  );

  // Hero: botón naranja → scroll: botón azul
  const ctaBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,109,44,1)", "rgba(0,109,253,1)"]
  );
  const ctaShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 4px 0 #EB3200, 0 8px 20px rgba(235,50,0,0.3)", "0 4px 0 #0052CC, 0 8px 20px rgba(0,82,204,0.3)"]
  );

  return (
    <>
      {/* Outer wrapper: centers the pill */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.nav
          className="w-full pointer-events-auto"
          style={{
            maxWidth: navMaxWidth,
            marginTop: navTop,
            paddingLeft: navPaddingX,
            paddingRight: navPaddingX,
            paddingTop: navPaddingY,
            paddingBottom: navPaddingY,
            background: navBackground,
            borderRadius: navBorderRadius,
            boxShadow: navShadow,
            border: navBorder,
          }}
        >
          <div className="flex items-center justify-between">

            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={oukeiLogo} alt="Oükei" className="object-contain" style={{ height: 34, width: 'auto', maxWidth: 180 }} />
            </motion.a>

            {/* Desktop links */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="hidden md:flex items-center gap-8"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="relative font-bold text-sm group"
                  style={{ color: linkColor }}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {/* Animated underline */}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                    style={{
                      background: i % 2 === 0 ? '#006DFD' : '#FF6D2C',
                    }}
                  />
                </motion.a>
              ))}

              {/* CTA */}
              <motion.button
                className="px-5 py-2.5 rounded-full font-bold text-sm text-white"
                style={{
                  background: ctaBg,
                  boxShadow: ctaShadow,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ y: -3 }}
                whileTap={{ y: 2 }}
              >
                ¡Contactar!
              </motion.button>
            </motion.div>

            {/* Mobile burger */}
            <motion.button
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(0,109,253,0.1)', color: '#006DFD' }}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 z-50 flex flex-col"
              style={{ background: '#001133' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <img src={oukeiLogo} alt="Oükei" className="h-7 object-contain" />
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.08)', color: 'white' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Drawer links */}
              <div className="flex flex-col gap-1 px-4 py-6 flex-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-3"
                    style={{ color: 'white' }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{
                      background: i % 2 === 0 ? 'rgba(0,109,253,0.15)' : 'rgba(255,109,44,0.15)',
                      x: 4,
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: i % 2 === 0 ? '#006DFD' : '#FF6D2C' }}
                    />
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Drawer CTA */}
              <div className="px-6 pb-8">
                <motion.button
                  className="w-full py-3 text-white rounded-2xl font-bold text-sm"
                  style={{
                    background: '#FF6D2C',
                    boxShadow: '0 4px 0 #EB3200',
                  }}
                  whileHover={{ y: -2, boxShadow: '0 6px 0 #EB3200' }}
                  whileTap={{ y: 2, boxShadow: '0 2px 0 #EB3200' }}
                  onClick={() => setIsOpen(false)}
                >
                  ¡Contactar!
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
