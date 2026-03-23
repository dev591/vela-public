import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Vision: React.FC = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(itemsRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: itemsRef.current[0],
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const roadmap = [
    {
      badge: "NOW",
      badgeColor: "var(--gold)",
      badgeBg: "rgba(200,184,154,0.15)",
      title: "Atlas",
      body: "Bedside AI for doctors and receptionists. Voice-first. Hands-free. Already built.",
      titleColor: "var(--white)",
    },
    {
      badge: "NEXT",
      badgeColor: "rgba(250,250,249,0.4)",
      badgeBg: "rgba(255,255,255,0.06)",
      title: "Vela Emergency",
      body: "AI for emergency rooms and ambulances. Critical decisions in the first 10 minutes.",
      titleColor: "rgba(250,250,249,0.6)",
    },
    {
      badge: "SOON",
      badgeColor: "rgba(250,250,249,0.4)",
      badgeBg: "rgba(255,255,255,0.06)",
      title: "Vela Rural",
      body: "AI for village health workers. Works offline. Speaks Hindi, Telugu, Tamil.",
      titleColor: "rgba(250,250,249,0.6)",
    },
    {
      badge: "FUTURE",
      badgeColor: "rgba(250,250,249,0.4)",
      badgeBg: "rgba(255,255,255,0.06)",
      title: "Vela Connect",
      body: "One permanent health record. Every hospital. Every visit. Powered by VELA ID.",
      titleColor: "rgba(250,250,249,0.6)",
    }
  ];

  return (
    <section
      style={{
        background: 'var(--black)',
        padding: '160px 80px',
        color: 'var(--white)'
      }}
    >
      <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.15em', marginBottom: '16px' }}>
        THE ROADMAP
      </div>
      
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
        }}
      >
        {/* Left Column */}
        <div>
          <h2 className="reveal" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05 }}>
            Atlas is just<br />the beginning.
          </h2>
          <p className="reveal" style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '18px', color: 'rgba(250,250,249,0.5)', maxWidth: '440px', lineHeight: 1.8, marginTop: '32px' }}>
            VELA is building AI infrastructure for all of Indian healthcare. One crisis at a time.
          </p>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {roadmap.map((item, i) => (
            <div
              key={i}
              ref={el => { itemsRef.current[i] = el; }}
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
                padding: '28px 0',
                borderBottom: i === roadmap.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.06)'
              }}
            >
              <div
                style={{
                  fontFamily: '"Geist Mono", monospace',
                  fontSize: '10px',
                  background: item.badgeBg,
                  color: item.badgeColor,
                  borderRadius: '4px',
                  padding: '3px 10px',
                  marginTop: '4px'
                }}
              >
                {item.badge}
              </div>
              <div>
                <h3 style={{ fontFamily: 'Geist', fontWeight: 600, fontSize: '18px', color: item.titleColor, marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '14px', color: 'rgba(250,250,249,0.4)', lineHeight: 1.6 }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          section > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Vision;
