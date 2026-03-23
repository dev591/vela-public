import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ background: 'var(--black)', borderTop: '1px solid var(--border-dark)', padding: '64px 80px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '64px' }}>
          
          {/* COL 1 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src="/vela-icon.png" alt="Vela" style={{ height: '20px' }} />
              <span style={{ fontFamily: 'Geist', fontWeight: 600, fontSize: '14px', color: 'var(--gold)' }}>VELA</span>
            </div>
            <div style={{ fontFamily: 'Geist', fontWeight: 400, fontSize: '13px', color: 'var(--text-muted)', marginTop: '12px' }}>
              Autonomous infrastructure for Indian healthcare.
            </div>
          </div>

          {/* COL 2 */}
          <div>
            <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: '10px', color: 'var(--text-faint)', letterSpacing: '0.12em', marginBottom: '16px' }}>PRODUCTS</div>
            {["Atlas", "Vela Emergency", "Vela Edge", "Vela Protocol"].map(item => (
              <a key={item} href="#" className="interactive" style={{ display: 'block', fontFamily: 'Geist', fontWeight: 400, fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px', textDecoration: 'none', transition: '0.2s', cursor: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                {item}
              </a>
            ))}
          </div>

          {/* COL 3 */}
          <div>
            <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: '10px', color: 'var(--text-faint)', letterSpacing: '0.12em', marginBottom: '16px' }}>COMPANY</div>
            {["Mission", "Products", "Team", "Careers"].map(item => (
              <a key={item} href="#" className="interactive" style={{ display: 'block', fontFamily: 'Geist', fontWeight: 400, fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px', textDecoration: 'none', transition: '0.2s', cursor: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                {item}
              </a>
            ))}
          </div>

          {/* COL 4 */}
          <div>
            <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: '10px', color: 'var(--text-faint)', letterSpacing: '0.12em', marginBottom: '16px' }}>CONNECT</div>
            <a href="mailto:devchalana135@gmail.com" className="interactive" style={{ display: 'block', textDecoration: 'none', fontFamily: '"Geist Mono", monospace', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px', cursor: 'none' }}>devchalana135@gmail.com</a>
            <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>Twitter / X</div>
            <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: '12px', color: 'var(--text-muted)' }}>LinkedIn Vector</div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', borderTop: '1px solid var(--border-dark)', paddingTop: '24px' }}>
          <div style={{ fontFamily: 'Geist', fontWeight: 400, fontSize: '12px', color: 'var(--text-faint)' }}>
            &copy; 2026 VELA Technologies. Compiled in India.
          </div>
          <div style={{ fontFamily: 'Geist', fontWeight: 400, fontSize: '12px', color: 'var(--text-faint)' }}>
            Atlas is a protected ledger of VELA.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
