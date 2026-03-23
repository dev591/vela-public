import React from 'react';

const WhoItsFor: React.FC = () => {
  return (
    <section style={{ background: 'var(--white)', padding: '160px 80px', color: 'var(--text)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div className="reveal" style={{ fontFamily: '"Geist Mono", monospace', fontSize: '11px', color: 'var(--text-faint)', letterSpacing: '0.15em' }}>
          NETWORK DEPLOYMENT
        </div>
        <h2 className="reveal" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 0.9, marginTop: '24px', fontWeight: 400 }}>
          <div>Engineered for every</div>
          <div>node in the system.</div>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', marginTop: '80px' }}>
          
          {/* Card 1 */}
          <div className="reveal" style={{ background: 'var(--white)', padding: '48px 36px', display: 'flex', flexDirection: 'column' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <h3 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '32px', color: 'var(--black)', marginTop: '24px', fontWeight: 400 }}>The Physician</h3>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '14px', color: 'var(--text-muted)', marginTop: '8px' }}>
              60 patients. 12 hours. Pure analog data.
            </div>
            <p style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: '20px' }}>
              Atlas acts as the autonomous resident layer. Voice-native. Screen-less execution. The entire patient history synthesized and verified in real-time. Extreme diagnostic leverage.
            </p>
          </div>

          {/* Card 2 */}
          <div className="reveal" style={{ background: 'var(--white)', padding: '48px 36px', display: 'flex', flexDirection: 'column' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
            <h3 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '32px', color: 'var(--black)', marginTop: '24px', fontWeight: 400 }}>The Gateway</h3>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '14px', color: 'var(--text-muted)', marginTop: '8px' }}>
              Reception and administrative ingestion.
            </div>
            <p style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: '20px' }}>
              Instant VELA ID minting. Unstructured legacy document scanning parsed into vector databases immediately. Zero friction admission flow architecture.
            </p>
          </div>

          {/* Card 3 */}
          <div className="reveal" style={{ background: 'var(--white)', padding: '48px 36px', display: 'flex', flexDirection: 'column' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
            <h3 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '32px', color: 'var(--black)', marginTop: '24px', fontWeight: 400 }}>The Facility</h3>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '14px', color: 'var(--text-muted)', marginTop: '8px' }}>
              40,000 entities. Fragmented architectures.
            </div>
            <p style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: '20px' }}>
              No proprietary hardware required. Executes on ambient commodity devices. All biological data encrypted and isolated per facility. Cost structures calibrated for the Indian economy.
            </p>
          </div>

          {/* Card 4 */}
          <div className="reveal" style={{ background: 'var(--white)', padding: '48px 36px', display: 'flex', flexDirection: 'column' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            <h3 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '32px', color: 'var(--black)', marginTop: '24px', fontWeight: 400 }}>The Subject</h3>
            <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '14px', color: 'var(--text-muted)', marginTop: '8px' }}>
              Biological sovereignty. Total portability.
            </div>
            <p style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: '20px' }}>
              One VLA-2847 token. Cross-compatible at any verified terminal. Eradicates cold-start diagnostic issues. The patient owns the temporal trajectory.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
