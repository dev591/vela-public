import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// A refined Apple-style text reveal
const RevealText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  return (
    <span className={className} style={{ display: 'inline-block', overflow: 'hidden' }}>
      <span style={{ display: 'inline-block', transform: 'translateY(100%)', opacity: 0 }} className="word-reveal">
        {text}
      </span>
    </span>
  );
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Sleek stagger reveal of the major text words
      gsap.to('.word-reveal', {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 0.2
      });

      gsap.fromTo('.sub-reveal',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.8 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} style={{ position: 'relative', height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '0 24px' }}>
      
      {/* Super Premium Fluid Background */}
      <div className="mesh-bg" />

      {/* Main Content Overlay */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '1000px' }}>
        
        <div className="sub-reveal" style={{ 
          display: 'inline-block', 
          background: 'rgba(0, 102, 204, 0.08)',
          color: 'var(--gold)',
          fontFamily: '"Geist Mono", monospace',
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.15em',
          padding: '8px 16px',
          borderRadius: '100px',
          marginBottom: '32px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 102, 204, 0.1)'
        }}>
          VELA COMPANY MANIFESTO &middot; 2026
        </div>

        {/* Removed the Serif font entirely for an ultra-modern Apple/Vercel look */}
        <h1 style={{ 
          fontFamily: 'Geist', 
          fontSize: 'clamp(56px, 10vw, 120px)', 
          fontWeight: 600, 
          lineHeight: 0.95, 
          color: 'var(--white)',
          letterSpacing: '-0.04em'
        }}>
          <RevealText text="Intelligence" /> <br/>
          <RevealText text="for the" /> <br/>
          <RevealText text="infrastructure." />
        </h1>

        <p className="sub-reveal" style={{
          fontFamily: 'Geist',
          fontWeight: 400,
          fontSize: 'clamp(18px, 2.5vw, 24px)',
          color: 'var(--text-muted)',
          maxWidth: '600px',
          margin: '40px auto 0',
          lineHeight: 1.5,
          letterSpacing: '-0.01em'
        }}>
          We are building the neural framework for Indian healthcare. Completely invisible. Absolute precision.
        </p>

        <div className="sub-reveal" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '48px' }}>
          <button className="interactive" style={{
            background: 'var(--white)',
            color: 'var(--black)',
            padding: '16px 32px',
            borderRadius: '100px',
            fontFamily: 'Geist',
            fontWeight: 500,
            fontSize: '16px',
            border: 'none',
            cursor: 'none',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
          }}
          >
            Review the Protocol
          </button>
          <button className="interactive" style={{
            background: 'rgba(0,0,0,0.03)',
            color: 'var(--white)',
            padding: '16px 32px',
            borderRadius: '100px',
            fontFamily: 'Geist',
            fontWeight: 500,
            fontSize: '16px',
            border: '1px solid rgba(0,0,0,0.05)',
            cursor: 'none',
            backdropFilter: 'blur(10px)',
            transition: 'background 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.06)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.03)'}
          >
            Watch Film
          </button>
        </div>

      </div>
      
    </section>
  );
};

export default Hero;
