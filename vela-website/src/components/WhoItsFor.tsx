import React from 'react';

const WhoItsFor: React.FC = () => {
  return (
    <section
      style={{
        background: 'var(--off-white)',
        padding: '120px 80px'
      }}
    >
      <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.15em', marginBottom: '16px' }}>
        BUILT FOR
      </div>
      <h2 className="reveal" style={{ fontFamily: '"Instrument Serif", serif', fontSize: '64px', color: 'var(--text)', lineHeight: 1, marginBottom: '64px' }}>
        Everyone in the ward.
      </h2>

      <div
        className="reveal"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1px',
          background: 'var(--border)'
        }}
      >
        {/* DOCTOR card */}
        <div style={{ background: 'var(--white)', padding: '48px 40px', border: '1px solid var(--border)' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--text-muted)' }}>
            <path d="M16 4h4v4M4 4h4v4M12 21a9 9 0 009-9V4H3v8a9 9 0 009 9z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 11v6v-6z" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="17" r="1.5"/>
          </svg>
          <h3 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '32px', color: 'var(--text)', marginTop: '24px' }}>Doctor</h3>
          <p style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: '12px' }}>
            Atlas is your intelligent resident. Ask about any patient. Get clinical answers instantly. Hands-free while you examine.
          </p>
          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {["Voice queries — no typing needed", "Risk alerts before you ask", "Instant medication safety checks"].map((feat, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontFamily: 'Geist', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span>&rarr;</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RECEPTIONIST card */}
        <div style={{ background: 'var(--white)', padding: '48px 40px', border: '1px solid var(--border)' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--text-muted)' }}>
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '32px', color: 'var(--text)', marginTop: '24px' }}>Receptionist</h3>
          <p style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: '12px' }}>
            The front desk, reimagined. Register patients in 2 minutes. Generate VELA IDs. Manage the queue in real time.
          </p>
          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {["2-minute digital registration", "Live queue management", "Upload reports, AI reads them"].map((feat, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontFamily: 'Geist', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span>&rarr;</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* HOSPITAL card */}
        <div style={{ background: 'var(--white)', padding: '48px 40px', border: '1px solid var(--border)' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--text-muted)' }}>
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '32px', color: 'var(--text)', marginTop: '24px' }}>Hospital</h3>
          <p style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: '12px' }}>
            Vela integrates into your existing workflow. No new hardware. Works on any device. Your data stays in your hospital.
          </p>
          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {["No hardware required", "Works on tablet, desktop, phone", "Per-hospital data isolation"].map((feat, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontFamily: 'Geist', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span>&rarr;</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
