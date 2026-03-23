import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '56px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        background: scrolled ? 'rgba(12,12,11,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.4s ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src="/vela-icon.png" alt="VELA Icon" height="24" />
        <span
          style={{
            fontFamily: 'Geist',
            fontWeight: 600,
            fontSize: '16px',
            color: 'var(--gold)',
            letterSpacing: '0.1em'
          }}
        >
          VELA
        </span>
      </div>

      <div
        className="nav-links"
        style={{
          display: 'flex',
          gap: '24px',
          fontFamily: 'Geist',
          fontWeight: 400,
          fontSize: '14px',
          color: 'rgba(255,255,255,0.5)',
        }}
      >
        <a href="#" className="interactive" style={{ textDecoration: 'none', color: 'inherit', transition: '0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>Atlas</a>
        <span>·</span>
        <a href="#" className="interactive" style={{ textDecoration: 'none', color: 'inherit', transition: '0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>Vision</a>
        <span>·</span>
        <a href="#" className="interactive" style={{ textDecoration: 'none', color: 'inherit', transition: '0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>For Hospitals</a>
      </div>

      <div>
        <button
          className="interactive"
          style={{
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            background: 'transparent',
            padding: '8px 20px',
            borderRadius: '4px',
            fontFamily: 'Geist',
            fontWeight: 400,
            fontSize: '13px',
            cursor: 'none',
            transition: '0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gold)';
            e.currentTarget.style.color = 'var(--black)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--gold)';
          }}
        >
          Request Access
        </button>
      </div>
      
      {/* Basic responsive hiding for nav-links can be done in css later if needed */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
