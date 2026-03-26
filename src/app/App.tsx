import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { FaceDecoration } from "./components/FaceDecoration";
import { Process } from "./components/Process";
import { TechShowcase } from "./components/TechShowcase";
import { CaseStudies } from "./components/CaseStudies";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { FloatingElements } from "./components/FloatingElements";
import { ScrollProgress } from "./components/ScrollProgress";
import { SectionTransition } from "./components/SectionTransition";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite'
    }}>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
      <ScrollProgress />
      <CustomCursor />
      <FloatingElements />

      {/* Cartoon clouds background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/20 backdrop-blur-sm rounded-full"
            style={{
              width: `${100 + Math.random() * 150}px`,
              height: `${50 + Math.random() * 70}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 8px 32px rgba(255, 255, 255, 0.2)',
            }}
          >
            {/* Cloud bumps */}
            <div className="absolute -top-4 left-1/4 w-12 h-12 bg-white/20 rounded-full"></div>
            <div className="absolute -top-6 left-1/2 w-16 h-16 bg-white/20 rounded-full"></div>
            <div className="absolute -top-4 right-1/4 w-10 h-10 bg-white/20 rounded-full"></div>
          </div>
        ))}
      </div>

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
        <SectionTransition from="#ffffff" to="#FF6D2C" />
        <TechShowcase />
        <SectionTransition from="#FF6D2C" to="#006DFD" />
        <CaseStudies />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}