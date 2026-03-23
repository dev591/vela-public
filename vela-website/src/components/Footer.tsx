import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: '#080807',
        padding: '48px 80px',
        borderTop: '1px solid rgba(255,255,255,0.04)'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)',
          gap: '40px',
          marginBottom: '32px'
        }}
      >
        {/* Left */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/vela-icon.png" alt="Vela" style={{ height: '20px' }} />
            <span style={{ fontFamily: 'Geist', fontWeight: 600, fontSize: '14px', color: 'var(--gold)', letterSpacing: '0.1em' }}>VELA</span>
          </div>
          <p style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '13px', color: 'rgba(250,250,249,0.3)', marginTop: '12px' }}>
            Medical AI for the wards that never sleep.
          </p>
        </div>

        {/* Center */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', fontFamily: 'Geist', fontWeight: 400, fontSize: '13px', color: 'rgba(250,250,249,0.3)' }}>
          {["Atlas", "Vision", "For Hospitals"].map((link, i) => (
            <React.Fragment key={i}>
              <a
                href="#"
                className="interactive"
                style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s', cursor: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(250,250,249,0.7)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(250,250,249,0.3)'}
              >
                {link}
              </a>
              {i < 2 && <span>&middot;</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Right */}
        <div style={{ textAlign: 'right', fontFamily: '"Geist Mono", monospace', fontSize: '12px', color: 'rgba(250,250,249,0.3)' }}>
          <a
            href="mailto:contact@vela.health"
            className="interactive"
            style={{ textDecoration: 'none', color: 'inherit', cursor: 'none' }}
          >
            contact@vela.health
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.04)',
          textAlign: 'center',
          paddingTop: '32px',
          fontFamily: 'Geist',
          fontWeight: 300,
          fontSize: '12px',
          color: 'rgba(250,250,249,0.2)'
        }}
      >
        &copy; 2026 VELA. Built in India.
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          footer > div:first-child {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          footer > div:first-child > div {
            justify-content: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
