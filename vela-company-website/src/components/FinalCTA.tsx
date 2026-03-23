import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section style={{ background: 'var(--black)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 40px' }}>
      
      <img className="reveal" src="/vela-icon.png" alt="Vela" style={{ height: '40px', opacity: 0.8, marginBottom: '48px' }} />

      <h2 className="reveal" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 'clamp(64px, 10vw, 140px)', color: 'var(--white)', lineHeight: 0.88, letterSpacing: '-0.02em', fontWeight: 400 }}>
        <div>Every patient</div>
        <div>emits a signal.</div>
      </h2>

      <h3 className="glow-text reveal" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 'clamp(32px, 5vw, 64px)', color: 'var(--gold)', marginTop: '20px', fontWeight: 400 }}>
        Vela detects it.
      </h3>

      <p className="reveal" style={{ fontFamily: 'Geist', fontWeight: 400, fontSize: '18px', color: 'var(--text-muted)', maxWidth: '440px', margin: '40px auto 0', lineHeight: 1.8 }}>
        Whether you're a leading physician, a macro hospital administrator, an institutional investor, or someone who demands that Indian healthcare achieves systemic superiority — we are compiling this for you.
      </p>

      {/* BUTTONS */}
      <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '360px', width: '100%', margin: '56px auto 0' }}>
        
        {/* DIRECT MAILTO LINK */}
        <a
          href="mailto:devchalana135@gmail.com"
          className="interactive"
          style={{
            background: 'var(--white)', color: 'var(--black)', padding: '16px 32px', borderRadius: '100px',
            fontFamily: 'Geist', fontWeight: 500, fontSize: '15px', width: '100%', border: 'none',
            cursor: 'none', transition: '0.2s', textDecoration: 'none', display: 'inline-block',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
          }}
        >
          Initialize Atlas Access
        </a>

        <button
          className="interactive"
          style={{
            background: 'transparent', color: 'var(--gold)', padding: '14px 32px', borderRadius: '100px',
            border: '1px solid rgba(0, 102, 204, 0.3)', fontFamily: 'Geist', fontWeight: 400, fontSize: '15px',
            width: '100%', cursor: 'none', transition: '0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 102, 204, 0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          Partner Network
        </button>

      </div>

      <div className="reveal" style={{ fontFamily: '"Geist Mono", monospace', fontSize: '11px', color: 'var(--text-faint)', letterSpacing: '0.1em', marginTop: '100px' }}>
        COMPILED IN HYDERABAD, IN &middot; VERSION 3.0.26
      </div>

    </section>
  );
};

export default FinalCTA;
