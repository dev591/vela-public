import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll);

    // Initial load animation
    if (navRef.current) {
      const items = navRef.current.querySelectorAll('.nav-animate');
      gsap.fromTo(items, 
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, stagger: 0.05, delay: 0.5, duration: 0.8, ease: "power2.out" }
      );
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: '60px',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        background: scrolled ? 'rgba(2, 6, 23, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-dark)' : '1px solid transparent',
        transition: 'all 0.5s ease',
      }}
    >
      <div className="nav-animate" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="/vela-icon.png" alt="VELA" height="22" />
        <span style={{ fontFamily: 'Geist', fontWeight: 600, fontSize: '15px', color: 'var(--text)', letterSpacing: '0.12em' }}>
          VELA
        </span>
      </div>

      <div className="nav-links nav-animate" style={{ display: 'flex', gap: '24px' }}>
        {["Atlas", "Mission", "Products", "Careers"].map((item, i) => (
          <React.Fragment key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="interactive"
              style={{
                fontFamily: 'Geist',
                fontWeight: 400,
                fontSize: '13px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: '0.2s',
                cursor: 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {item}
            </a>
            {i < 3 && <span style={{ color: 'var(--text-faint)' }}>&middot;</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="nav-animate">
        <button
          className="interactive"
          style={{
            border: '1px solid rgba(0, 240, 255, 0.4)',
            color: 'var(--gold)',
            background: 'transparent',
            padding: '8px 18px',
            borderRadius: '50px',
            fontFamily: 'Geist',
            fontWeight: 400,
            fontSize: '13px',
            cursor: 'none',
            transition: '0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 240, 255, 0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          Get Early Access &rarr;
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
