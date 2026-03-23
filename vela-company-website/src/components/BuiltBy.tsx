import React from 'react';

const BuiltBy: React.FC = () => {
  return (
    <section style={{ background: 'var(--black)', padding: '160px 80px', color: 'var(--white)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div className="reveal" style={{ fontFamily: '"Geist Mono", monospace', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.15em' }}>
          ARCHITECTS
        </div>
        <h2 className="reveal" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 0.95, marginTop: '24px', fontWeight: 400 }}>
          <div>Compiled by Indians.</div>
          <div>For the subcontinent.</div>
        </h2>
        
        <p className="reveal" style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '18px', color: 'var(--text-muted)', maxWidth: '640px', lineHeight: 1.9, marginTop: '32px' }}>
          VELA was bootstrapped by a 20-year-old CS engineer observing physicians suffocating beneath analog protocols and missing acute thresholds. 
          Not from a deficit of empathy. But because the requisite digital infrastructure had not been compiled.
          <br /><br />
          We are deploying that infrastructure. Engineered natively for the highest throughput demographic on earth. 
          With terrifying urgency.
        </p>

        <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap', marginTop: '80px' }}>
          
          {/* LEFT - Values */}
          <div style={{ flex: '1 1 500px' }}>
            
            <div className="reveal" style={{ borderTop: '1px solid var(--border-dark)', padding: '28px 0' }}>
              <div style={{ fontFamily: 'Geist', fontWeight: 600, fontSize: '16px', color: 'var(--white)' }}>Velocity over aesthetics</div>
              <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '8px' }}>
                Biology cannot wait for standard-deviation UI perfection. We commit. We integrate. We validate. We iterate. Mortality rates dictate our dev cycle.
              </div>
            </div>

            <div className="reveal" style={{ borderTop: '1px solid var(--border-dark)', padding: '28px 0' }}>
              <div style={{ fontFamily: 'Geist', fontWeight: 600, fontSize: '16px', color: 'var(--white)' }}>Optimized for the 99%</div>
              <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '8px' }}>
                We do not build for Silicon Valley private clinics. We execute for the state hospital in Nalgonda functioning at 300% capacity. This is where the delta lies.
              </div>
            </div>

            <div className="reveal" style={{ borderTop: '1px solid var(--border-dark)', padding: '28px 0' }}>
              <div style={{ fontFamily: 'Geist', fontWeight: 600, fontSize: '16px', color: 'var(--white)' }}>Augmentation, not obsolescence</div>
              <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '8px' }}>
                Atlas is a computational co-processor. It amplifies the physician's biological bandwidth. Complete systemic autonomy is a fallacy; the human cortex executes the final branch.
              </div>
            </div>

            <div className="reveal" style={{ borderTop: '1px solid var(--border-dark)', padding: '28px 0' }}>
              <div style={{ fontFamily: 'Geist', fontWeight: 600, fontSize: '16px', color: 'var(--white)' }}>Deterministic logic routing</div>
              <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '8px' }}>
                Every LLM inference is traced to a source document hash. Probabilistic hallucinations are architecturally mitigated. Confidence matrices are transparent to the user.
              </div>
            </div>

          </div>

          {/* RIGHT - Founder Card */}
          <div className="reveal" style={{ flex: '1 1 400px' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-dark)', borderRadius: '12px', padding: '40px' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Geist', fontWeight: 600, fontSize: '20px' }}>
                  DC
                </div>
                <div>
                  <div style={{ fontFamily: 'Geist', fontWeight: 500, fontSize: '18px', color: 'var(--white)' }}>Dev Chalana</div>
                  <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '14px', color: 'var(--gold)' }}>Founder & Architect, VELA</div>
                  <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '13px', color: 'var(--text-faint)', marginTop: '4px' }}>Undergraduate Node</div>
                </div>
              </div>

              <div style={{ margin: '24px 0', height: '1px', background: 'var(--border-dark)' }} />

              <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                "I deployed the alpha build of Atlas in 18 days inside a competitive sprint parameter. It compiled perfectly. It extracted verifiable diagnostic logic from chaotic data. The trajectory was set."
              </div>

              <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: '11px', color: 'rgba(255,255,255,0.2)', marginTop: '24px', letterSpacing: '0.05em' }}>
                HYDERABAD, IN &middot; VERSION 2026
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BuiltBy;
