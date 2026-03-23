import React from 'react';

const BuiltForIndia: React.FC = () => {
  return (
    <section
      style={{
        background: 'var(--white)',
        padding: '120px 80px'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}
      >
        {/* LEFT */}
        <div>
          <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.15em', marginBottom: '16px' }}>
            MADE IN INDIA
          </div>
          <h2 className="reveal" style={{ fontFamily: '"Instrument Serif", serif', fontSize: '56px', color: 'var(--text)', lineHeight: 1.05 }}>
            Built for the scale<br />of Indian healthcare.
          </h2>
          <p className="reveal" style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: '24px', marginBottom: '32px' }}>
            Indian hospitals handle patient volumes that no Western system was designed for. One doctor. Sixty patients. Twelve hours. Vela was built for exactly this reality.
          </p>

          <div className="reveal">
            {[
              "Works in Hindi and English",
              "Affordable for Indian clinics",
              "No dependency on Western EMR systems",
              "Built by Indians, for Indians"
            ].map((feat, i) => (
              <div
                key={i}
                style={{
                  padding: '16px 0',
                  borderBottom: '1px solid var(--border)',
                  fontFamily: 'Geist',
                  fontWeight: 400,
                  fontSize: '15px',
                  color: 'var(--text)'
                }}
              >
                &rarr; {feat}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ justifySelf: 'end', minWidth: '320px' }} className="reveal">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '32px' }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: '80px', color: 'var(--text)', lineHeight: 1 }}>1.2M</div>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '14px', color: 'var(--text-muted)' }}>registered doctors in India</div>
          </div>
          <div style={{ width: '100%', height: '1px', background: 'var(--border)', marginBottom: '32px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '32px' }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: '80px', color: 'var(--text)', lineHeight: 1 }}>40,000+</div>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '14px', color: 'var(--text-muted)' }}>hospitals that need Vela</div>
          </div>
          <div style={{ width: '100%', height: '1px', background: 'var(--border)', marginBottom: '32px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: '80px', color: 'var(--text)', lineHeight: 1 }}>₹0</div>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '14px', color: 'var(--text-muted)' }}>hardware cost to get started</div>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
          section > div > div:nth-child(2) {
            justifySelf: start !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BuiltForIndia;
