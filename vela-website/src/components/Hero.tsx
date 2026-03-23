import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const headlineLinesRef = useRef<(HTMLDivElement | null)[]>([]);
  const subheadRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Main headline clip path reveal
      gsap.fromTo(headlineLinesRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', stagger: 0.25, duration: 1, ease: 'power4.inOut', delay: 0.3 }
      );

      // Subheadline fade in
      gsap.fromTo(subheadRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1 }
      );

      // Bottom stats row
      gsap.fromTo(statsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, delay: 1.2 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'var(--black)',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 40px'
      }}
    >
      {/* Top Badge */}
      <div
        style={{
          marginTop: '120px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid rgba(200,184,154,0.3)',
          borderRadius: '100px',
          padding: '6px 16px',
          background: 'rgba(200,184,154,0.06)'
        }}
      >
        <div
          style={{
            width: '6px',
            height: '6px',
            background: 'var(--gold)',
            borderRadius: '50%',
            animation: 'pulse 2s infinite'
          }}
        />
        <style>{`
          @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(200,184,154, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(200,184,154, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(200,184,154, 0); }
          }
        `}</style>
        <span
          style={{
            fontFamily: '"Geist Mono", monospace',
            fontSize: '11px',
            color: 'var(--gold)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}
        >
          Introducing Atlas — by VELA
        </span>
      </div>

      {/* Main Headline */}
      <h1
        style={{
          marginTop: '48px',
          fontFamily: '"Instrument Serif", serif',
          fontSize: 'clamp(52px, 7vw, 96px)',
          lineHeight: 0.95,
          color: 'var(--white)',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '48px auto 0'
        }}
      >
        <div style={{ paddingRight: '8px' }} ref={el => { headlineLinesRef.current[0] = el; }}>The AI that never</div>
        <div style={{ paddingRight: '8px' }} ref={el => { headlineLinesRef.current[1] = el; }}>forgets your patients.</div>
      </h1>

      {/* Subheadline */}
      <div
        ref={subheadRef}
        style={{
          marginTop: '32px',
          fontFamily: 'Geist, sans-serif',
          fontWeight: 300,
          fontSize: '20px',
          color: 'rgba(250,250,249,0.5)',
          textAlign: 'center',
          maxWidth: '580px',
          lineHeight: 1.7
        }}
      >
        Every report read. Every patient remembered.
        <br />
        Every answer spoken — out loud, in seconds.
      </div>

      {/* Two Buttons */}
      <div
        style={{
          marginTop: '48px',
          display: 'flex',
          gap: '16px',
          justifyContent: 'center'
        }}
      >
        <button
          className="interactive"
          style={{
            background: 'var(--gold)',
            color: 'var(--black)',
            padding: '14px 36px',
            borderRadius: '6px',
            fontFamily: 'Geist',
            fontWeight: 500,
            fontSize: '15px',
            border: 'none',
            cursor: 'none',
            transition: '0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--gold-light)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--gold)'}
        >
          Meet Atlas
        </button>
        <button
          className="interactive"
          style={{
            background: 'transparent',
            color: 'rgba(250,250,249,0.5)',
            border: 'none',
            fontFamily: 'Geist',
            fontWeight: 400,
            fontSize: '15px',
            cursor: 'none',
            transition: '0.2s',
            padding: '14px 16px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(250,250,249,0.5)'}
        >
          For Hospitals &rarr;
        </button>
      </div>

      {/* Bottom Stats Row */}
      <div
        style={{
          position: 'absolute',
          bottom: '60px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '64px'
        }}
      >
        {[
          { stat: '< 3s', label: 'Atlas response time' },
          { stat: '100%', label: 'Reports analyzed by AI' },
          { stat: '0 touch', label: 'Completely hands-free' }
        ].map((item, index) => (
          <React.Fragment key={index}>
            <div
              ref={el => { statsRef.current[index] = el; }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
            >
              <span style={{ fontFamily: '"Geist Mono"', fontWeight: 500, fontSize: '28px', color: 'var(--white)' }}>
                {item.stat}
              </span>
              <span style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '12px', color: 'rgba(250,250,249,0.35)' }}>
                {item.label}
              </span>
            </div>
            {index < 2 && (
              <div
                style={{
                  width: '1px',
                  backgroundColor: 'rgba(255,255,255,0.08)'
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Hero;
