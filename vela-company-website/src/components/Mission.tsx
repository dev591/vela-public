import React, { useEffect } from 'react';


const Mission: React.FC = () => {

  useEffect(() => {
    // Blocks reveal is handled globally by .reveal class, but we can fine-tune if needed
    // The standard global .reveal triggers top 88%, which is fine
  }, []);

  return (
    <section
      id="mission"
      style={{
        background: 'var(--black)',
        padding: '200px 80px',
        color: 'var(--white)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="reveal"
          style={{
            fontFamily: '"Geist Mono", monospace',
            fontSize: '11px',
            color: 'var(--gold)',
            letterSpacing: '0.15em',
            marginBottom: '80px'
          }}
        >
          THE DIRECTIVE
        </div>

        <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
          
          {/* LEFT - Sticky */}
          <div style={{ flex: '0 0 45%', minWidth: '320px' }}>
            <div style={{ position: 'sticky', top: '30vh' }}>
              <h2
                className="reveal-left"
                style={{
                  fontFamily: '"Instrument Serif", serif',
                  fontSize: 'clamp(36px, 4vw, 52px)',
                  lineHeight: 1.1,
                  color: 'var(--white)',
                  fontWeight: 400
                }}
              >
                <div>We believe every</div>
                <div>Indian doctor</div>
                <div>deserves an AI</div>
                <div>that never sleeps.</div>
              </h2>
              <p
                className="reveal-left"
                style={{
                  fontFamily: 'Geist',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  marginTop: '32px',
                  maxWidth: '340px'
                }}
              >
                VELA is engineering that intelligence. One product at a time. Starting with the hospital monolith: Atlas.
              </p>
            </div>
          </div>

          {/* RIGHT - Scrolling Blocks */}
          <div style={{ flex: '1', minWidth: '320px' }}>
            
            <div className="reveal" style={{ marginBottom: '120px' }}>
              <h3 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '40px', color: 'var(--white)', marginBottom: '20px', fontWeight: 400 }}>
                The anomaly is real.
              </h3>
              <p style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.9, maxWidth: '520px' }}>
                India possesses 1.3 million doctors for 1.4 billion citizens. Each one diagnoses 60-80 complex cases dynamically per day. On physical paper. By sheer memory. In isolation. Critical diagnostic values get buried in the noise. It is an impossible volume equation for biology to solve alone.
              </p>
            </div>

            <div className="reveal" style={{ marginBottom: '120px' }}>
              <h3 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '40px', color: 'var(--white)', marginBottom: '20px', fontWeight: 400 }}>
                The compute exists.
              </h3>
              <p style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.9, maxWidth: '520px' }}>
                Silicon can parse an entire lipid panel anomaly in milliseconds. AI logic can maintain perfect state of every patient across the entire temporal health journey. It can answer esoteric clinical queries audibly, entirely hands-free. The math exists. It just hasn't been compiled for Indian wards.
              </p>
            </div>

            <div className="reveal" style={{ marginBottom: '120px' }}>
              <h3 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '40px', color: 'var(--white)', marginBottom: '20px', fontWeight: 400 }}>
                We are building it.
              </h3>
              <p style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.9, maxWidth: '520px' }}>
                VELA is an infrastructure company singularly optimizing Indian healthcare outcomes. We do not index for American insurance networks. We deploy for the chief physician in a Hyderabad IC unit analyzing 70 patients via analog files. We compute for the patient in Chennai fragmented across 6 separate clinics.
              </p>
            </div>

            <div className="reveal">
              <h3 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '40px', color: 'var(--white)', marginBottom: '20px', fontWeight: 400 }}>
                It activates with Atlas.
              </h3>
              <p style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.9, maxWidth: '520px' }}>
                Atlas is VELA's genesis instance. A conversational ambient logic core that resides perpetually inside the ward. It ingests the data. Retains the context. Vocalizes the diagnosis. The doctor interacts without a screen. Hands remain on the patient.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
