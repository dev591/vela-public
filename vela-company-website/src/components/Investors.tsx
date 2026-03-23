import React from 'react';

const Investors: React.FC = () => {
  return (
    <section style={{ background: 'var(--white)', padding: '160px 80px', color: 'var(--black)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div className="reveal" style={{ fontFamily: '"Geist Mono", monospace', fontSize: '11px', color: 'var(--text-faint)', letterSpacing: '0.15em' }}>
          CAPITAL DEPLOYMENT
        </div>
        <h2 className="reveal" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 'clamp(56px, 7vw, 88px)', lineHeight: 0.9, marginTop: '24px', fontWeight: 400 }}>
          <div>The trajectory</div>
          <div>is algorithmic.</div>
        </h2>

        {/* STAT BLOCKS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginTop: '80px' }}>
          
          <div className="reveal" style={{ borderLeft: '3px solid var(--black)', paddingLeft: '32px' }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: '48px', color: 'var(--black)', lineHeight: 1 }}>₹250 Cr/yr</div>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '15px', color: 'var(--text-muted)', marginTop: '12px' }}>
              Base ARR generated from an initial penetration of 500k users.
            </div>
          </div>

          <div className="reveal" style={{ borderLeft: '3px solid var(--black)', paddingLeft: '32px' }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: '48px', color: 'var(--black)', lineHeight: 1 }}>$165M</div>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '15px', color: 'var(--text-muted)', marginTop: '12px' }}>
              Capital accumulated by US analog Suki AI. Our TAM is an order of magnitude larger.
            </div>
          </div>

          <div className="reveal" style={{ borderLeft: '3px solid var(--black)', paddingLeft: '32px' }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: '48px', color: 'var(--black)', lineHeight: 1 }}>0.0</div>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '15px', color: 'var(--text-muted)', marginTop: '12px' }}>
              Viable institutional competitors operating in this specific domestic vector.
            </div>
          </div>

        </div>

        <p className="reveal" style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '18px', color: 'var(--text-muted)', maxWidth: '680px', lineHeight: 1.9, marginTop: '100px' }}>
          VELA is compiling the foundational infrastructure for the highest latent-demand medical market globally. 
          The subcontinent requires this. Medical networks will reallocate budget for this. No foreign entity possesses the localized data-context to execute this correctly. 
          We possess a calculated 24-36 month monopoly window. Protocol execution has already commenced.
        </p>

        <div className="reveal" style={{ marginTop: '48px' }}>
          <a
            href="mailto:devchalana135@gmail.com"
            className="interactive"
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: '28px',
              color: 'var(--black)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--black)',
              paddingBottom: '4px',
              display: 'inline-block',
              transition: 'color 0.2s, border-color 0.2s',
              cursor: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-faint)';
              e.currentTarget.style.borderColor = 'var(--text-faint)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--black)';
              e.currentTarget.style.borderColor = 'var(--black)';
            }}
          >
            Initiate Contact &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};

export default Investors;
