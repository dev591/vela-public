import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TheNumber: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (containerRef.current && numberRef.current) {
        // Pin the section
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: '+=80%',
          pin: true,
          pinSpacing: true
        });

        // Counter animation
        gsap.fromTo(numberRef.current,
          { innerText: 0 },
          {
            innerText: 1456,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            onUpdate: function() {
              if (numberRef.current) {
                // Formatting with commas
                const num = Math.round(Number(this.targets()[0].innerText));
                numberRef.current.textContent = num.toLocaleString('en-IN');
              }
            },
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        background: 'var(--white)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text)'
      }}
    >
      <div style={{ textAlign: 'center', padding: '0 40px' }}>
        <div
          ref={numberRef}
          style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: 'clamp(120px, 18vw, 240px)',
            color: 'var(--black)',
            lineHeight: 1,
            letterSpacing: '-0.03em'
          }}
        >
          0
        </div>
        
        <div
          className="reveal"
          style={{
            fontFamily: 'Geist',
            fontWeight: 300,
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            color: 'var(--text-muted)',
            marginTop: '24px'
          }}
        >
          patients per doctor in India.
        </div>
        
        <div
          className="reveal"
          style={{
            fontFamily: 'Geist',
            fontWeight: 300,
            fontSize: '16px',
            color: 'var(--text-faint)',
            marginTop: '12px'
          }}
        >
          WHO recommends 1 per 1,000.
        </div>
        
        <div
          className="reveal"
          style={{
            fontFamily: 'Geist',
            fontWeight: 400,
            fontSize: '16px',
            color: 'var(--black)',
            marginTop: '32px',
            borderTop: '1px solid var(--text-faint)',
            paddingTop: '32px',
            display: 'inline-block'
          }}
        >
          We are the architecture that solves this.
        </div>
      </div>
    </section>
  );
};

export default TheNumber;
