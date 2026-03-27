import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { FaceDecoration } from "./components/FaceDecoration";
import { Process } from "./components/Process";
import { Diferencial } from "./components/Diferencial";
import { TechShowcase } from "./components/TechShowcase";
import { CaseStudies } from "./components/CaseStudies";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { SectionTransition } from "./components/SectionTransition";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-white">
      <ScrollProgress />
      <CustomCursor />

      <div className="relative z-10">
        <Navbar />

        {/* Wrapper Hero + Services: FaceDecoration flota entre ambas secciones.
            La SVG (600×900 viewBox, width=55vw, height=82.5vw) se posiciona con:
              top = 100vh - 9.2vw → ojos (100/900 de 82.5vw ≈ 9.2vw) quedan al final de Hero
              U   (78% restante)  → cae dentro de Services automáticamente           */}
        <div className="relative">
          <FaceDecoration
            style={{
              position: 'absolute',
              right: 0,
              top: 'calc(100vh - 13.75vw)',
              width: '55vw',
              zIndex: 5,
              pointerEvents: 'none',
            }}
          />
          <Hero />
          <Services />
        </div>
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
    </div>
  );
}