import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { HeroBold } from "../components/HeroBold";
import { Marquee } from "../components/Marquee";
import { Problema } from "../components/Problema";
import { ComoFunciona } from "../components/ComoFunciona";
import { PaqueteStarter } from "../components/PaqueteStarter";
import { Prueba } from "../components/Prueba";
import { Faq } from "../components/Faq";
import { CtaFinal } from "../components/CtaFinal";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/WhatsAppButton";
import { GrainOverlay } from "../components/GrainOverlay";

/**
 * VERSIÓN EXPERIMENTAL "bold" — más color, hero con partículas e inclinación 3D,
 * secciones oscuras alternadas y una sección naranja. Ruta /lab.
 * La versión que va a producción sigue siendo "/".
 */
export default function HomeBold() {
  return (
    <div className="min-h-screen bg-white">
      <GrainOverlay />
      <Navbar />
      <main>
        <HeroBold />
        <Marquee variant="bold" />
        <Problema variant="bold" />
        <ComoFunciona variant="bold" />
        <PaqueteStarter variant="bold" />
        <Prueba variant="bold" />
        <Faq variant="bold" />
        <CtaFinal variant="bold" />
      </main>
      <Footer />
      <FloatingWhatsApp />

      {/* Aviso para comparar versiones */}
      <Link
        to="/"
        className="fixed bottom-4 left-4 z-50 rounded-full border px-4 py-2 text-xs font-bold"
        style={{ background: "#04123c", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}
      >
        Versión experimental · ver la clásica →
      </Link>
    </div>
  );
}
