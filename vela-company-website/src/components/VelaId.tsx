import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const VelaId: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(cardRef.current,
          { opacity: 0, y: 60, rotationY: 15, scale: 0.95 },
          {
            opacity: 1, y: 0, rotationY: 0, scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%"
            }
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section style={{ background: 'var(--white)', padding: '160px 80px', color: 'var(--black)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '80px', flexWrap: 'wrap', alignItems: 'center' }}>
        
        {/* LEFT */}
        <div style={{ flex: '1 1 400px' }}>
          <div className="reveal" style={{ fontFamily: '"Geist Mono", monospace', fontSize: '11px', color: 'var(--text-faint)', letterSpacing: '0.15em' }}>
            THE SINGLE SOURCE
          </div>
          <h2 className="reveal" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 'clamp(56px, 7vw, 84px)', lineHeight: 1, marginTop: '24px', fontWeight: 400 }}>
            <div>One Identity.</div>
            <div>Every instance.</div>
            <div>Forever.</div>
          </h2>
          <p className="reveal" style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.9, maxWidth: '480px', marginTop: '32px' }}>
            A patient traverses the Vela ecosystem once. They are minted a persistent identifier: VLA-2847. It is absolute. 
            Walk into an ICU unconscious. Transmit the hash. Every diagnostic event, pharmaceutical contraindication, and baseline anomaly is instantly decrypted for the attending physician. 
            This is the systemic infrastructure the subcontinent requires.
          </p>
        </div>

        {/* RIGHT */}
        <div style={{ flex: '1 1 400px', perspective: '1000px' }}>
          <div
            ref={cardRef}
            style={{
              background: 'linear-gradient(135deg, var(--off-white) 0%, var(--black) 100%)',
              borderRadius: '20px',
              padding: '80px 48px',
              textAlign: 'center',
              boxShadow: '0 40px 80px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.05)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.2em', marginBottom: '32px' }}>
              VELA PROXY
            </div>
            
            <div className="glow-text" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 'clamp(64px, 8vw, 96px)', color: 'var(--white)', letterSpacing: '0.05em', lineHeight: 1 }}>
              VLA-2847
            </div>

            <div style={{ height: '1px', width: '80px', background: 'var(--border-dark)', margin: '40px auto' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
              <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '13px', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--gold)', marginRight: '8px' }}>✓</span> Universally resolvable
              </div>
              <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '13px', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--gold)', marginRight: '8px' }}>✓</span> Immutable retention
              </div>
              <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '13px', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--gold)', marginRight: '8px' }}>✓</span> Zero-latency decryption
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VelaId;
