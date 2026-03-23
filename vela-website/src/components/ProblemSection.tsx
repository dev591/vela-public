import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ProblemSection: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      style={{
        background: 'var(--white)',
        padding: '160px 80px'
      }}
    >
      {/* Top label */}
      <div
        style={{
          fontFamily: '"Geist Mono", monospace',
          fontSize: '11px',
          color: 'var(--text-muted)',
          letterSpacing: '0.15em',
          marginBottom: '64px',
          textTransform: 'uppercase'
        }}
      >
        THE CRISIS
      </div>

      {/* Two Columns Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: '80px',
          alignItems: 'start'
        }}
      >
        {/* LEFT COLUMN */}
        <div>
          <h2
            className="reveal"
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: 'clamp(40px, 5vw, 64px)',
              lineHeight: 1.05,
              color: 'var(--text)',
              maxWidth: '480px'
            }}
          >
            Indian doctors manage<br />
            60 patients a shift.<br />
            On paper.<br />
            From memory.<br />
            Alone.
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 300,
              fontSize: '18px',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              maxWidth: '440px',
              marginTop: '32px'
            }}
          >
            The system was never designed for this volume. Critical lab values get buried. Medications get missed. Not because doctors don't care. Because no one can do this alone.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1px',
            background: 'var(--border)' // creates the 1px gap effect
          }}
        >
          {/* Card 1 */}
          <div
            ref={el => { cardsRef.current[0] = el; }}
            style={{ background: 'var(--off-white)', padding: '32px', border: '1px solid var(--border)' }}
          >
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: '72px', color: 'var(--text)', lineHeight: 1 }}>
              40%
            </div>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '15px', color: 'var(--text-muted)', marginTop: '8px' }}>
              of critical lab values are never flagged
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={el => { cardsRef.current[1] = el; }}
            style={{ background: 'var(--off-white)', padding: '32px', border: '1px solid var(--border)' }}
          >
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: '72px', color: 'var(--text)', lineHeight: 1 }}>
              2.3 hrs
            </div>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '15px', color: 'var(--text-muted)', marginTop: '8px' }}>
              wasted per doctor per shift on paperwork
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={el => { cardsRef.current[2] = el; }}
            style={{ background: 'var(--off-white)', padding: '32px', border: '1px solid var(--border)' }}
          >
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: '72px', color: 'var(--text)', lineHeight: 1 }}>
              1 in 3
            </div>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '15px', color: 'var(--text-muted)', marginTop: '8px' }}>
              patients have a missed abnormal result
            </div>
          </div>
        </div>
      </div>
      
      {/* Responsive adjustments (basic) */}
      <style>{`
        @media (max-width: 900px) {
          section > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;
