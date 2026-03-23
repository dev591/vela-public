import React, { useState } from 'react';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('vela_waitlist', email);
      setSubmitted(true);
    }
  };

  return (
    <section
      style={{
        background: 'var(--black)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px'
      }}
    >
      <img src="/vela-icon.png" alt="Vela" style={{ height: '48px', marginBottom: '32px' }} />

      <h2
        className="reveal"
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 'clamp(56px, 8vw, 120px)',
          color: 'var(--white)',
          lineHeight: 0.9
        }}
      >
        <div style={{ paddingRight: '12px', display: 'inline-block' }}>Every patient</div>
        <div style={{ display: 'inline-block' }}>has a star.</div>
      </h2>

      <h3
        className="reveal"
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontStyle: 'italic',
          fontSize: 'clamp(32px, 4vw, 56px)',
          color: 'var(--gold)',
          marginTop: '16px'
        }}
      >
        Vela finds it.
      </h3>

      <p
        className="reveal"
        style={{
          fontFamily: 'Geist',
          fontWeight: 300,
          fontSize: '18px',
          color: 'rgba(250,250,249,0.4)',
          maxWidth: '480px',
          margin: '32px auto 0'
        }}
      >
        Join hospitals and clinics across India getting early access to Atlas.
      </p>

      {/* EMAIL WAITLIST FORM */}
      <div className="reveal" style={{ marginTop: '48px', width: '100%', maxWidth: '480px' }}>
        {submitted ? (
          <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '15px', color: 'var(--gold)' }}>
            You're on the list. We'll be in touch.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center'
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="interactive"
              style={{
                flex: 1,
                padding: '14px 20px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '6px',
                color: 'var(--white)',
                fontFamily: 'Geist, sans-serif',
                fontSize: '15px',
                outline: 'none',
                cursor: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
            />
            <button
              type="submit"
              className="interactive"
              style={{
                background: 'var(--gold)',
                color: 'var(--black)',
                padding: '14px 28px',
                borderRadius: '6px',
                fontFamily: 'Geist',
                fontWeight: 500,
                fontSize: '15px',
                border: 'none',
                cursor: 'none',
                whiteSpace: 'nowrap',
                transition: '0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--gold-light)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--gold)'}
            >
              Request Early Access
            </button>
          </form>
        )}
      </div>

      <div
        className="reveal"
        style={{
          fontFamily: '"Geist Mono", monospace',
          fontSize: '11px',
          color: 'rgba(250,250,249,0.2)',
          marginTop: '48px',
          letterSpacing: '0.08em'
        }}
      >
        Built in 18 days &middot; National Hackathon 2026
      </div>
    </section>
  );
};

export default CTA;
