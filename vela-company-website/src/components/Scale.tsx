import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Scale: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Create separate scroll triggers for the count up numbers
      const stats = containerRef.current?.querySelectorAll('.count-up') || [];
      stats.forEach((stat: any) => {
        const targetNumber = parseFloat(stat.getAttribute('data-val') || '0');
        const prefix = stat.getAttribute('data-prefix') || '';
        const suffix = stat.getAttribute('data-suffix') || '';

        gsap.fromTo(stat,
          { innerText: 0 },
          {
            innerText: targetNumber,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: targetNumber < 100 ? 0.1 : 1 },
            onUpdate: function() {
              const val = Number(this.targets()[0].innerText);
              // Handle float format if target < 100 else integer
              const displayVal = targetNumber < 100 ? val.toFixed(1) : Math.round(val).toLocaleString('en-IN');
              stat.textContent = `${prefix}${displayVal}${suffix}`;
            },
            scrollTrigger: {
              trigger: stat,
              start: "top 85%"
            }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section style={{ background: 'var(--black)', padding: '160px 80px', color: 'var(--white)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div className="reveal" style={{ fontFamily: '"Geist Mono", monospace', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.15em', marginBottom: '24px' }}>
          THE SCALE VECTOR
        </div>

        <h2 className="reveal" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 0.95, fontWeight: 400 }}>
          <div>The metrics that</div>
          <div>demand execution.</div>
        </h2>

        {/* STATS ROW */}
        <div ref={containerRef} style={{ display: 'flex', flexWrap: 'wrap', marginTop: '80px', borderTop: '1px solid var(--border-dark)', borderBottom: '1px solid var(--border-dark)' }}>
          
          <div style={{ flex: '1 1 200px', padding: '40px 20px', borderRight: '1px solid var(--border-dark)' }}>
            <div className="count-up" data-val="1.2" data-suffix="M" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: 1 }}>0</div>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px' }}>registered practitioners</div>
          </div>

          <div style={{ flex: '1 1 200px', padding: '40px 20px', borderRight: '1px solid var(--border-dark)' }}>
            <div className="count-up" data-val="40000" data-suffix="+" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: 1 }}>0</div>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px' }}>facilities requiring automation</div>
          </div>

          <div style={{ flex: '1 1 200px', padding: '40px 20px', borderRight: '1px solid var(--border-dark)' }}>
            <div className="count-up" data-val="1.4" data-suffix="B" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: 1 }}>0</div>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px' }}>lives requiring absolute care</div>
          </div>

          <div style={{ flex: '1 1 200px', padding: '40px 20px', borderRight: '1px solid var(--border-dark)' }}>
            <div className="count-up" data-prefix="$" data-val="372" data-suffix="B" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: 1 }}>0</div>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px' }}>Indian healthcare valuation (2030)</div>
          </div>

          <div style={{ flex: '1 1 200px', padding: '40px 20px' }}>
            <div className="count-up" data-prefix="₹" data-val="0" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: 1 }}>0</div>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px' }}>hardware deployment barrier</div>
          </div>

        </div>

        {/* QUOTE BLOCK */}
        <div className="reveal" style={{ marginTop: '140px', maxWidth: '840px', margin: '140px auto 0', textAlign: 'center' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--gold)" opacity="0.4" style={{ margin: '0 auto 32px' }}>
            <path d="M10 11h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2zM10 11c0 3-3 6-5 7l-1-2c2-1 3-2 3-5h3z" />
            <path d="M20 11h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2zM20 11c0 3-3 6-5 7l-1-2c2-1 3-2 3-5h3z" />
          </svg>

          <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 'clamp(28px, 3.5vw, 44px)', color: 'var(--text)', lineHeight: 1.4, fontWeight: 400 }}>
            "Suki AI developed voice logic for the American physician and secured $165M in capital. We are compiling that exact architecture for the Indian diagnostic network. The deployment radius is tenfold."
          </div>

          <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '14px', color: 'var(--gold)', marginTop: '32px' }}>
            — VELA CORE PROSPECTUS, 2026
          </div>
        </div>

      </div>
    </section>
  );
};

export default Scale;
