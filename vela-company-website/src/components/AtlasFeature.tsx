import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AtlasFeature: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const leftVisualRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {


      // Tie scrolling steps to set active visual
      gsap.utils.toArray('.feature-step').forEach((step: any, i: number) => {
        ScrollTrigger.create({
          trigger: step,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveStep(i),
          onEnterBack: () => setActiveStep(i)
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        background: 'var(--white)',
        position: 'relative',
        paddingTop: '160px',
        color: 'var(--black)'
      }}
    >
      <div style={{ padding: '0 80px' }}>
        <div className="reveal" style={{ fontFamily: '"Geist Mono", monospace', fontSize: '11px', color: 'var(--text-faint)', letterSpacing: '0.15em' }}>
          GENESIS PRODUCT
        </div>
        <h2 className="reveal" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 'clamp(64px, 8vw, 120px)', lineHeight: 0.9, marginTop: '24px', fontWeight: 400 }}>
          The ambient core.
        </h2>
        <h3 className="reveal" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 'clamp(24px, 3vw, 40px)', color: 'var(--text-faint)', marginTop: '16px', fontWeight: 400 }}>
           For physicians operating on the edge of capacity.
        </h3>
      </div>

      <div style={{ display: 'flex', marginTop: '120px', position: 'relative' }}>
        
        {/* LEFT / STICKY VISUAL MODULE */}
        <div ref={leftVisualRef} style={{ width: '50%', height: '100vh', position: 'sticky', top: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 80px' }}>
          <div
            style={{
              width: '100%',
              maxWidth: '500px',
              aspectRatio: '4/5',
              background: 'var(--black)',
              borderRadius: '24px',
              boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border)'
            }}
          >
            {/* Visual 0: Parse */}
            <div style={{ position: 'absolute', inset: 0, opacity: activeStep === 0 ? 1 : 0, transition: 'opacity 0.6s', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ width: '100%', height: '40%', background: 'var(--warm-grey)', borderRadius: '12px', opacity: 0.2, marginBottom: '20px' }} />
              <div style={{ width: '80%', height: '12px', background: 'var(--gold)', borderRadius: '6px', opacity: 0.8, marginBottom: '12px' }} />
              <div style={{ width: '60%', height: '12px', background: 'var(--white)', borderRadius: '6px', opacity: 0.5 }} />
            </div>

            {/* Visual 1: Retain */}
            <div style={{ position: 'absolute', inset: 0, opacity: activeStep === 1 ? 1 : 0, transition: 'opacity 0.6s', padding: '40px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} style={{ flex: 1, height: i % 2 === 0 ? '60%' : '30%', background: 'var(--text-muted)', borderRadius: '4px', opacity: 0.3, transition: '0.4s' }} />
              ))}
            </div>

            {/* Visual 2: Alert */}
            <div style={{ position: 'absolute', inset: 0, opacity: activeStep === 2 ? 1 : 0, transition: 'opacity 0.6s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.4)', padding: '24px', borderRadius: '16px', color: '#ef4444', fontFamily: 'Geist', textAlign: 'center' }}>
                 <div style={{ fontSize: '32px', fontWeight: 600 }}>TROPONIN 1.2</div>
                 <div style={{ fontSize: '13px', marginTop: '8px', opacity: 0.8 }}>CRITICAL ANOMALY DETECTED</div>
               </div>
            </div>

            {/* Visual 3: Vocalize */}
            <div style={{ position: 'absolute', inset: 0, opacity: activeStep === 3 ? 1 : 0, transition: 'opacity 0.6s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)', border: '1px solid rgba(0, 240, 255, 0.5)', animation: 'pulseOrb 2s infinite' }} />
               <style>{`
                 @keyframes pulseOrb {
                   0% { transform: scale(0.9); opacity: 0.8; }
                   50% { transform: scale(1.1); opacity: 1; }
                   100% { transform: scale(0.9); opacity: 0.8; }
                 }
               `}</style>
            </div>
          </div>
        </div>

        {/* RIGHT / SCROLLING CONTENT */}
        <div style={{ width: '50%', paddingRight: '80px', paddingBottom: '100vh' }}>
          
          <div className="feature-step" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '56px', marginBottom: '24px', fontWeight: 400 }}>Parse</h4>
            <p style={{ fontFamily: 'Geist', fontSize: '17px', color: 'var(--text-faint)', lineHeight: 1.8, fontWeight: 300, maxWidth: '400px' }}>
              Inject any unstructured diagnostic format into the vector space. PDFs, raw ECG traces, handwritten notes. Atlas decodes the entire patient matrix in sub-ten-second latencies globally.
            </p>
          </div>

          <div className="feature-step" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '56px', marginBottom: '24px', fontWeight: 400 }}>Retain</h4>
            <p style={{ fontFamily: 'Geist', fontSize: '17px', color: 'var(--text-faint)', lineHeight: 1.8, fontWeight: 300, maxWidth: '400px' }}>
              Memory is no longer volatile. Atlas constructs a permanent high-fidelity tensor map of every patient traversing the system. Request context from a visit eight months prior; execution is immediate.
            </p>
          </div>

          <div className="feature-step" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '56px', marginBottom: '24px', fontWeight: 400 }}>Alert</h4>
            <p style={{ fontFamily: 'Geist', fontSize: '17px', color: 'var(--text-faint)', lineHeight: 1.8, fontWeight: 300, maxWidth: '400px' }}>
              Algorithmic ward overwatch. Vital degradation triggers real-time computational flags. Risk heuristics are quantified in the background. Atlas synthesizes danger states before you manually query them.
            </p>
          </div>

          <div className="feature-step" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '56px', marginBottom: '24px', fontWeight: 400 }}>Vocalize</h4>
            <p style={{ fontFamily: 'Geist', fontSize: '17px', color: 'var(--text-faint)', lineHeight: 1.8, fontWeight: 300, maxWidth: '400px' }}>
              Hold space. Express the inquiry. Atlas responds via synthesized locution instantly. Completely asynchronous hands-free workflow constraint unblocked. Eyes persist on the biology.
            </p>
          </div>

        </div>
      </div>
      
      {/* Mobile override via simple media query could be done in CSS, mapping flex-direction to column etc */}
    </section>
  );
};

export default AtlasFeature;
