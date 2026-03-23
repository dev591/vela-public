import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import MeetAtlas from './components/MeetAtlas';
import HowItWorks from './components/HowItWorks';
import WhoItsFor from './components/WhoItsFor';
import Vision from './components/Vision';
import BuiltForIndia from './components/BuiltForIndia';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { gsap } from 'gsap';

function App() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Custom cursor logic
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX - 2.5}px`;
        cursorDotRef.current.style.top = `${e.clientY - 2.5}px`;
        cursorDotRef.current.style.transform = 'translate3d(0,0,0)'; // force hardware accel
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = `${e.clientX - 16}px`;
        cursorRingRef.current.style.top = `${e.clientY - 16}px`;
        cursorRingRef.current.style.transform = 'translate3d(0,0,0)';
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Initial GSAP Reveal logic for globally added .reveal classes
    // We defer slightly to ensure all child components are mounted.
    const revealTimeout = setTimeout(() => {
      gsap.utils.toArray('.reveal').forEach((el: any) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }, 150);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(revealTimeout);
    };
  }, []);

  return (
    <>
      {/* Noise Grain Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 99990,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px"
        }}
      />

      {/* Custom Cursor */}
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorRingRef} className="cursor-ring" />

      {/* Pages vertically stacked */}
      <main>
        <Navbar />
        <Hero />
        <ProblemSection />
        <MeetAtlas />
        <HowItWorks />
        <WhoItsFor />
        <Vision />
        <BuiltForIndia />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default App;
