import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Ultimate Apple Glassmorphism Card
const Card = ({ badge, iconSvg, title, subtitle, body }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rotateX = (y / (rect.height / 2)) * -6;
    const rotateY = (x / (rect.width / 2)) * 6;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1200,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  return (
    <div style={{ perspective: '1200px' }}>
      <div
        ref={cardRef}
        className="interactive product-card"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          background: 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          border: '1px solid rgba(255,255,255,0.8)',
          borderRadius: '32px',
          boxShadow: isHovered ? '0 30px 60px rgba(0,0,0,0.08)' : '0 10px 30px rgba(0,0,0,0.04)',
          padding: '48px 40px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'box-shadow 0.4s ease',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transformStyle: 'preserve-3d',
          willChange: 'transform'
        }}
      >
        <div style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(0,102,204,0.1)', color: 'var(--gold)', padding: '6px 14px', borderRadius: '100px', fontFamily: 'Geist', fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', transform: 'translateZ(20px)' }}>
          {badge}
        </div>

        <div style={{ color: 'var(--white)', marginBottom: '32px', transform: 'translateZ(30px)', transition: 'transform 0.4s', scale: isHovered ? 1.05 : 1, transformOrigin: 'left center' }}>{iconSvg}</div>
        
        <h3 style={{ fontFamily: 'Geist', fontWeight: 600, fontSize: '32px', color: 'var(--white)', transform: 'translateZ(40px)', letterSpacing: '-0.03em' }}>{title}</h3>
        <div style={{ fontFamily: 'Geist', fontWeight: 400, fontSize: '15px', color: 'var(--gold)', marginTop: '8px', transform: 'translateZ(30px)' }}>{subtitle}</div>
        <p style={{ fontFamily: 'Geist', fontWeight: 400, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '20px', flex: 1, transform: 'translateZ(20px)' }}>
          {body}
        </p>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(gridRef.current.children,
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 1,
            stagger: 0.15,
            ease: "expo.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%"
            }
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="products" style={{ background: 'var(--black)', padding: '160px 40px', color: 'var(--white)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        
        {/* Decorative background glow behind the cards */}
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, 0)', width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(0,102,204,0.1) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ fontFamily: 'Geist', fontWeight: 600, fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.15em', textAlign: 'center' }}>
            THE ECOSYSTEM
          </div>
          <h2 className="reveal" style={{ fontFamily: 'Geist', fontWeight: 600, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1, marginTop: '24px', letterSpacing: '-0.04em', textAlign: 'center' }}>
            <div>Hardware-agnostic.</div>
            <div>Built for the edge.</div>
          </h2>

          <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '80px' }}>
            
            <Card
              badge="DEPLOYED"
              iconSvg={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/><line x1="8" x2="16" y1="22" y2="22"/></svg>}
              title="Atlas Intelligence" subtitle="Bedside OS"
              body="Voice-native AI for physicians. Replaces typing entirely. Hands-free clinical documentation synthesized in real-time."
            />

            <Card
              badge="BETA"
              iconSvg={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>}
              title="Triage Node" subtitle="Emergency Escalation"
              body="Probability models computing trauma escalation rules continuously. Identifies critical failure paths in triage."
            />

            <Card
               badge="OFFLINE"
              iconSvg={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>}
              title="Edge Compute" subtitle="Zero-Latency Native"
              body="Locally deployed parameter models serving ASHA workers completely offline in Telugu, Hindi, and Tamil."
            />

            <Card
              badge="STANDARD"
              iconSvg={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
              title="Vela Protocol" subtitle="Cryptographic Mapping"
              body="One immutable identity per patient. Eliminates data fragmentation across fragmented hospital clusters entirely."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
