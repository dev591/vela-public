import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MeetAtlas: React.FC = () => {
  const [atlasState, setAtlasState] = useState<"idle" | "speaking" | "done">("idle");
  const [showText, setShowText] = useState(false);
  const [visibleWords, setVisibleWords] = useState(0);
  const orbRef = useRef<HTMLButtonElement>(null);

  const words = [
    "Hi", "Doctor.", "I'm", "Atlas.",
    "Which", "life", "are", "we",
    "saving", "today?"
  ];

  useEffect(() => {
    if (atlasState !== "speaking") {
      setVisibleWords(0);
      return;
    }
    const interval = setInterval(() => {
      setVisibleWords(prev => {
        if (prev >= words.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [atlasState]);

  useEffect(() => {
    if (orbRef.current) {
      gsap.to(orbRef.current, {
        scale: 1.06,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);

  const handleOrbClick = async () => {
    if (atlasState !== "idle") return;

    setAtlasState("speaking");
    setShowText(true);

    const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;
    const voiceId = import.meta.env.VITE_ELEVENLABS_VOICE_ID || "21m00Tcm4TlvDq8ikWAM";
    const text = words.join(" ").replace(/Doctor\./, "Doctor.");
    let spoken = false;

    if (apiKey && apiKey.length > 10) {
      try {
        const res = await fetch(
          `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "xi-api-key": apiKey,
              "Accept": "audio/mpeg"
            },
            body: JSON.stringify({
              text,
              model_id: "eleven_turbo_v2",
              voice_settings: {
                stability: 0.4,
                similarity_boost: 0.8,
                style: 0.3,
                use_speaker_boost: true
              }
            })
          }
        );

        if (res.ok) {
          const reader = res.body?.getReader();
          const chunks: Uint8Array[] = [];
          if (reader) {
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              if (value) chunks.push(value);
            }
          }
          const total = chunks.reduce((acc, c) => acc + c.length, 0);
          const merged = new Uint8Array(total);
          let offset = 0;
          for (const chunk of chunks) {
            merged.set(chunk, offset);
            offset += chunk.length;
          }
          const blob = new Blob([merged], { type: "audio/mpeg" });
          const url = URL.createObjectURL(blob);
          const audio = new Audio(url);
          audio.volume = 1.0;
          
          await new Promise<void>((resolve) => {
            audio.onended = () => { URL.revokeObjectURL(url); resolve(); };
            audio.onerror = () => { URL.revokeObjectURL(url); resolve(); };
            audio.play().catch(() => resolve());
          });
          spoken = true;
        }
      } catch (e) {
        console.warn("ElevenLabs failed:", e);
      }
    }

    if (!spoken) {
      await new Promise<void>((resolve) => {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.rate = 0.85;
        u.pitch = 1.0;
        u.volume = 1.0;
        const voices = window.speechSynthesis.getVoices();
        const preferred =
          voices.find(v => v.name === "Google UK English Female") ||
          voices.find(v => v.name.includes("Google")) ||
          voices.find(v => v.lang.startsWith("en"));
        if (preferred) u.voice = preferred;
        u.onend = () => resolve();
        u.onerror = () => resolve();
        window.speechSynthesis.speak(u);
      });
    }

    setAtlasState("done");
    setTimeout(() => {
      setAtlasState("idle");
      setShowText(false);
    }, 3000);
  };

  return (
    <section
      style={{
        background: 'var(--black)',
        padding: '160px 80px',
        textAlign: 'center'
      }}
    >
      <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.15em' }}>
        ATLAS BY VELA
      </div>
      
      <h2
        className="reveal"
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 'clamp(48px, 6vw, 80px)',
          color: 'var(--white)',
          lineHeight: 0.95,
          marginTop: '24px'
        }}
      >
        <div style={{ paddingRight: '12px', display: 'inline-block' }}>Your voice.</div>
        <div style={{ paddingRight: '12px', display: 'inline-block' }}>Your AI.</div>
        <div style={{ display: 'inline-block' }}>Always on.</div>
      </h2>

      <p
        className="reveal"
        style={{
          fontFamily: 'Geist, sans-serif',
          fontWeight: 300,
          fontSize: '18px',
          color: 'rgba(250,250,249,0.5)',
          maxWidth: '560px',
          margin: '32px auto 0',
          lineHeight: 1.8
        }}
      >
        Atlas is a voice AI that lives inside every hospital ward. Say its name. Ask anything. Atlas answers out loud in seconds — without the doctor ever touching a screen.
      </p>

      {/* THE ATLAS ORB */}
      <div style={{ marginTop: '80px', position: 'relative', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Text above orb when speaking */}
        {showText && (
          <div
            style={{
              position: 'absolute',
              top: '-80px',
              width: '400px',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.3em'
            }}
          >
            {words.slice(0, visibleWords).map((word, i) => (
              <span
                key={i}
                style={{
                  opacity: 1,
                  transform: 'translateY(0)',
                  fontFamily: '"Instrument Serif", serif',
                  fontStyle: 'italic',
                  fontSize: '22px',
                  color: 'var(--white)',
                  animation: 'wordAppear 0.2s ease forwards',
                  display: 'inline-block'
                }}
              >
                {word}
              </span>
            ))}
          </div>
        )}
        <style>{`
          @keyframes wordAppear {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes rippleExpand {
            from { transform: scale(1); opacity: 0.6; }
            to { transform: scale(3); opacity: 0; }
          }
        `}</style>

        <div style={{ position: 'relative', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Ripple rings */}
          {atlasState === 'speaking' && (
            <>
              {[0, 0.6, 1.2].map((delay, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    border: '1px solid rgba(200,184,154,0.4)',
                    animation: `rippleExpand 2s infinite ${delay}s ease-out`,
                    pointerEvents: 'none'
                  }}
                />
              ))}
            </>
          )}

          <button
            ref={orbRef}
            onClick={handleOrbClick}
            className="interactive"
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #2D2D2D 0%, #0C0C0B 100%)',
              border: atlasState === 'speaking' ? '1px solid var(--gold)' : '1px solid rgba(200,184,154,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'none',
              transition: '0.3s',
              boxShadow: atlasState === 'speaking'
                ? '0 0 80px rgba(200,184,154,0.4), 0 0 160px rgba(200,184,154,0.1)'
                : 'none',
              transform: atlasState === 'speaking' ? 'scale(1.1)' : 'scale(1)',
              zIndex: 2
            }}
            onMouseEnter={(e) => {
              if (atlasState !== 'speaking') {
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.boxShadow = '0 0 60px rgba(200,184,154,0.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (atlasState !== 'speaking') {
                e.currentTarget.style.borderColor = 'rgba(200,184,154,0.25)';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: 'rgba(200,184,154,0.5)' }}>
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" fill="currentColor"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        {/* Text below orb */}
        <div
          style={{
            marginTop: '24px',
            fontFamily: '"Geist Mono", monospace',
            fontSize: '11px',
            color: 'rgba(200,184,154,0.4)',
            letterSpacing: '0.1em'
          }}
        >
          {atlasState === 'idle' && 'CLICK TO MEET ATLAS'}
          {atlasState === 'speaking' && 'ATLAS IS SPEAKING'}
          {atlasState === 'done' && 'HOLD SPACE TO TALK AFTER LOGIN'}
        </div>
      </div>

      {/* 3 feature rows */}
      <div className="reveal" style={{ marginTop: '80px', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
        {[
          { title: 'Reads any report', body: 'Blood tests, MRIs, ECGs, prescriptions. GPT-4o Vision extracts every value.' },
          { title: 'Never forgets a patient', body: 'Mem0 stores complete history. Works across every hospital visit.' },
          { title: 'Answers out loud', body: 'Hands-free. Eyes on patient. Zero typing. Zero screens.' }
        ].map((feat, i) => (
          <div
            key={i}
            style={{
              borderTop: '1px solid rgba(255,255,255,0.06)',
              padding: '24px 0',
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
              borderBottom: i === 2 ? '1px solid rgba(255,255,255,0.06)' : 'none'
            }}
          >
            <div style={{ width: '6px', height: '6px', background: 'var(--gold)', borderRadius: '50%', flexShrink: 0 }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'Geist', fontWeight: 500, fontSize: '16px', color: 'var(--white)' }}>{feat.title}</div>
              <div style={{ fontFamily: 'Geist', fontWeight: 300, fontSize: '14px', color: 'rgba(250,250,249,0.4)', marginTop: '4px' }}>{feat.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetAtlas;
