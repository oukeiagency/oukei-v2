import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import oukeiLogo from "@/assets/Oukei_v2.svg";
import { waLink } from "@/config/site";

const navItems = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Paquete", href: "#paquete" },
  { label: "Preguntas", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3">
        <nav
          className="flex w-full max-w-4xl items-center justify-between rounded-full bg-white px-5 py-2.5 transition-shadow"
          style={{
            border: "1px solid rgba(0,109,253,0.15)",
            boxShadow: scrolled
              ? "0 6px 24px rgba(0,109,253,0.16)"
              : "0 2px 10px rgba(0,109,253,0.08)",
          }}
        >
          <a href="#" aria-label="OÜKEI — inicio">
            <img src={oukeiLogo} alt="OÜKEI" className="h-8 w-auto" style={{ maxWidth: 150 }} />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm font-bold"
                style={{ color: "#006DFD" }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-[#006DFD] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="wa-nav"
              className="rounded-full px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "#FF6D2C" }}
            >
              Escríbenos
            </a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl md:hidden"
            style={{ background: "rgba(0,109,253,0.1)", color: "#006DFD" }}
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 md:hidden"
              initial={reduce ? undefined : { opacity: 0 }}
              animate={reduce ? undefined : { opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col md:hidden"
              style={{ background: "#002F7F" }}
              initial={reduce ? undefined : { x: "100%" }}
              animate={reduce ? undefined : { x: 0 }}
              exit={reduce ? undefined : { x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <span className="text-lg font-bold text-white">
                  O<span style={{ color: "#FF6D2C" }}>ü</span>kei
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
                  aria-label="Cerrar menú"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-1 flex-col gap-1 px-4 py-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-4 py-3 text-sm font-bold text-white hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="px-6 pb-8">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="wa-nav-mobile"
                  className="block w-full rounded-2xl py-3 text-center text-sm font-bold text-white"
                  style={{ background: "#FF6D2C" }}
                  onClick={() => setOpen(false)}
                >
                  Escríbenos
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
