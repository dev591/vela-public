import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HowItWorks: React.FC = () => {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      stepsRef.current.forEach((el) => {
        if (el) {
          gsap.fromTo(el,
            { x: -40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      });
    });
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: "01",
      title: "Upload any report",
      body: "Blood tests. MRIs. Prescriptions. ECGs. Vela reads everything in under 10 seconds.",
      visual: (
        <div style={{ background: 'var(--black)', borderRadius: '12px', padding: '24px', color: 'var(--white)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#4ADE80' }}>
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
            </svg>
            <span style={{ fontFamily: 'Geist Mono', fontSize: '12px' }}>bloodreport_rajesh.pdf</span>
          </div>
          <div style={{ fontFamily: 'Geist', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Processed by Atlas ✓</div>
          <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
            <span style={{ fontFamily: 'Geist Mono', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>RISK SCORE</span>
            <span style={{ fontFamily: 'Geist Mono', fontSize: '14px', color: '#F87171' }}>82/100</span>
          </div>
        </div>
      )
    },
    {
      num: "02",
      title: "Atlas flags the risk",
      body: "Abnormal values trigger instant alerts. Risk scores calculated automatically. Doctor sees what matters immediately.",
      visual: (
        <div style={{ background: '#FEF2F2', borderRadius: '12px', padding: '24px', border: '1px solid #FECACA' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontFamily: 'Geist', fontWeight: 500 }}>Rajesh Kumar</span>
            <span style={{ background: '#DC2626', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontFamily: 'Geist Mono', fontWeight: 600 }}>RISK ALERT</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontFamily: 'Geist Mono' }}>
              <span style={{ color: '#991B1B' }}>POTASSIUM</span>
              <span style={{ color: '#DC2626', fontWeight: 600 }}>2.8 mEq/L</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontFamily: 'Geist Mono' }}>
              <span style={{ color: '#4B5563' }}>CREATININE</span>
              <span style={{ color: '#111827', fontWeight: 600 }}>1.1 mg/dL</span>
            </div>
          </div>
        </div>
      )
    },
    {
      num: "03",
      title: "Ask Atlas anything",
      body: "Hold space. Speak. Atlas answers out loud in plain English. No typing. No searching. Just the answer.",
      visual: (
        <div style={{ background: 'var(--black)', borderRadius: '12px', padding: '24px', color: 'var(--white)' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
            <div style={{ fontFamily: 'Geist Mono', fontSize: '11px', color: 'var(--gold)', marginBottom: '8px' }}>YOU ASKED</div>
            <div style={{ fontFamily: 'Geist', fontSize: '14px' }}>Is Rajesh okay?</div>
          </div>
          <div style={{ padding: '0 16px' }}>
            <div style={{ fontFamily: 'Geist Mono', fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>ATLAS</div>
            <div style={{ fontFamily: 'Geist', fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
              Rajesh's potassium is critically low at 2.8. He needs immediate supplementation before shifting to the general ward.
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section
      style={{
        background: 'var(--white)',
        padding: '160px 80px'
      }}
    >
      <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.15em', marginBottom: '16px' }}>
        HOW ATLAS WORKS
      </div>
      <h2 className="reveal" style={{ fontFamily: '"Instrument Serif", serif', fontSize: '64px', color: 'var(--text)', lineHeight: 1 }}>
        Three steps.
      </h2>
      <h2 className="reveal" style={{ fontFamily: '"Instrument Serif", serif', fontSize: '64px', color: 'var(--text-muted)', lineHeight: 1, marginBottom: '80px' }}>
        Complete clarity.
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {steps.map((step, i) => (
          <div
            key={i}
            ref={el => { stepsRef.current[i] = el; }}
            style={{
              borderTop: '1px solid var(--border)',
              padding: '64px 0',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 120px) minmax(0, 1fr) minmax(0, 1fr)',
              alignItems: 'center',
              gap: '48px',
              borderBottom: i === steps.length - 1 ? '1px solid var(--border)' : 'none'
            }}
          >
            {/* Step Number */}
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: '96px', color: 'var(--border)', lineHeight: 1 }}>
              {step.num}
            </div>

            {/* Step Content */}
            <div>
              <h3 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '40px', color: 'var(--text)', margin: 0 }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '16px', color: 'var(--text-muted)', maxWidth: '400px', lineHeight: 1.8, marginTop: '16px' }}>
                {step.body}
              </p>
            </div>

            {/* Step Visual */}
            <div style={{ width: '100%', maxWidth: '400px', justifySelf: 'end' }}>
              {step.visual}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          section > div > div > div:nth-child(1) {
            fontSize: 48px !important;
          }
          section > div > div > div:nth-child(3) {
            justifySelf: start !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
