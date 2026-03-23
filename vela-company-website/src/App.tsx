import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheNumber from './components/TheNumber';
import Mission from './components/Mission';
import AtlasFeature from './components/AtlasFeature';
import Products from './components/Products';
import VelaId from './components/VelaId';
import Scale from './components/Scale';
import WhoItsFor from './components/WhoItsFor';
import BuiltBy from './components/BuiltBy';
import Investors from './components/Investors';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isHovering = false;
    let isClicking = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Instantly position the dot
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX - 2}px, ${mouseY - 2}px, 0)`;
      }

      // Check hover states
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.interactive') || target.closest('[data-cursor]')) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    const onMouseDown = () => { isClicking = true; };
    const onMouseUp = () => { isClicking = false; };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Lerp loop for the ring
    const render = () => {
      // Lerp factor 0.15 makes it snappy but smooth
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        
        // Classes for hover and clicking
        if (isHovering && !isClicking) {
          cursorRingRef.current.classList.add('hovering');
          cursorRingRef.current.classList.remove('clicking');
        } else if (isClicking) {
          cursorRingRef.current.classList.add('clicking');
          cursorRingRef.current.classList.remove('hovering');
        } else {
          cursorRingRef.current.classList.remove('hovering', 'clicking');
        }
      }

      requestAnimationFrame(render);
    };
    const reqId = requestAnimationFrame(render);

    // Initial Global Reveals Setup - slight delay ensures DOM paints completely
    const tx = setTimeout(() => {
      // Basic block reveal
      gsap.utils.toArray('.reveal').forEach((el: any) => {
        gsap.set(el, { visibility: 'visible' });
        gsap.fromTo(el,
          { opacity: 0, y: 56 },
          {
            opacity: 1, y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
          }
        );
      });

      // Directional reveals
      gsap.utils.toArray('.reveal-left').forEach((el: any) => {
        gsap.set(el, { visibility: 'visible' });
        gsap.fromTo(el,
          { opacity: 0, x: -60 },
          { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } }
        );
      });

      gsap.utils.toArray('.reveal-right').forEach((el: any) => {
        gsap.set(el, { visibility: 'visible' });
        gsap.fromTo(el,
          { opacity: 0, x: 60 },
          { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } }
        );
      });
    }, 200);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(reqId);
      clearTimeout(tx);
    };
  }, []);

  return (
    <>
      <div
        className="noise"
        style={{
          position: 'fixed',
          inset: 0,
          opacity: 0.028,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px',
          pointerEvents: 'none',
          zIndex: 99990
        }}
      />
      
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorRingRef} className="cursor-ring" />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <TheNumber />
        <Mission />
        <AtlasFeature />
        <Products />
        <VelaId />
        <Scale />
        <WhoItsFor />
        <BuiltBy />
        <Investors />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}

export default App;
