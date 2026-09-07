import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Problema } from "../components/Problema";
import { ComoFunciona } from "../components/ComoFunciona";
import { PaqueteStarter } from "../components/PaqueteStarter";
import { Prueba } from "../components/Prueba";
import { Faq } from "../components/Faq";
import { CtaFinal } from "../components/CtaFinal";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/WhatsAppButton";

// Landing enfocada en el Paquete Starter (bot de citas por WhatsApp).
// Rediseño por fases en la rama rediseno-starter.
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <ComoFunciona />
        <PaqueteStarter />
        <Prueba />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
