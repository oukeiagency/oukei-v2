import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Process } from "../components/Process";
import { Diferencial } from "../components/Diferencial";
import { TechShowcase } from "../components/TechShowcase";
import { CaseStudies } from "../components/CaseStudies";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { ScrollProgress } from "../components/ScrollProgress";
import { SectionTransition } from "../components/SectionTransition";
import { FloatingWhatsApp } from "../components/WhatsAppButton";

// NOTA: rediseño en curso (rama rediseno-starter). Fase 0 = plumbing (router,
// config, SEO, WhatsApp). Las secciones de abajo se irán reescribiendo por fases
// hacia la landing enfocada en el Paquete Starter.
export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-white">
      <ScrollProgress />

      <div className="relative z-10">
        <Navbar />

        <Hero />
        <Services />
        <SectionTransition from="#006DFD" to="#ffffff" />
        <Process />
        <Diferencial />
        <SectionTransition from="#ffffff" to="#006DFD" />
        <CaseStudies />
        <SectionTransition from="#006DFD" to="#FF6D2C" />
        <TechShowcase />
        <SectionTransition from="#FF6D2C" to="#006DFD" />
        <FinalCTA />
        <SectionTransition from="#006DFD" to="#001133" />
        <Footer />
      </div>

      <FloatingWhatsApp />
    </div>
  );
}
