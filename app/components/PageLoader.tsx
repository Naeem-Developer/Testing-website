'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);
  const [lettersReady, setLettersReady] = useState(false);

  useEffect(() => {
    // Animate progress bar
    const duration = 2200;
    const interval = 30;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out curve: fast at start, slow at end
      const raw = step / steps;
      const eased = 1 - Math.pow(1 - raw, 3);
      setProgress(Math.min(eased * 100, 100));

      if (step >= steps) {
        clearInterval(timer);
        // Start fade out
        setFadingOut(true);
        setTimeout(() => setVisible(false), 800);
      }
    }, interval);

    // Trigger letter animation slightly after mount
    const letterTimer = setTimeout(() => setLettersReady(true), 100);

    return () => {
      clearInterval(timer);
      clearTimeout(letterTimer);
    };
  }, []);

  if (!visible) return null;

  const letters = 'DIODONA'.split('');

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#00382C',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadingOut ? 0 : 1,
        transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: fadingOut ? 'none' : 'all',
        overflow: 'hidden',
      }}
    >
      {/* Decorative botanical SVG top-right */}
      <svg
        viewBox="0 0 200 300"
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-30px',
          width: 'clamp(140px, 18vw, 240px)',
          opacity: 0.12,
          transform: 'rotate(15deg)',
          pointerEvents: 'none',
        }}
        fill="none"
        stroke="#F7F5F1"
        strokeWidth="1"
      >
        <path d="M100 280 C100 280 60 200 80 140 C95 90 130 60 100 10" />
        <path d="M80 140 C60 120 20 130 10 100" />
        <path d="M90 170 C70 155 30 165 15 140" />
        <path d="M95 110 C115 90 140 95 155 70" />
        <path d="M88 155 C108 135 138 138 150 110" />
        <ellipse cx="10" cy="100" rx="18" ry="10" transform="rotate(-20 10 100)" />
        <ellipse cx="15" cy="140" rx="16" ry="9" transform="rotate(-30 15 140)" />
        <ellipse cx="155" cy="70" rx="18" ry="10" transform="rotate(30 155 70)" />
        <ellipse cx="150" cy="110" rx="17" ry="9" transform="rotate(20 150 110)" />
      </svg>

      {/* Decorative botanical SVG bottom-left */}
      <svg
        viewBox="0 0 200 300"
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '-30px',
          width: 'clamp(140px, 18vw, 240px)',
          opacity: 0.12,
          transform: 'rotate(-165deg)',
          pointerEvents: 'none',
        }}
        fill="none"
        stroke="#F7F5F1"
        strokeWidth="1"
      >
        <path d="M100 280 C100 280 60 200 80 140 C95 90 130 60 100 10" />
        <path d="M80 140 C60 120 20 130 10 100" />
        <path d="M90 170 C70 155 30 165 15 140" />
        <path d="M95 110 C115 90 140 95 155 70" />
        <path d="M88 155 C108 135 138 138 150 110" />
        <ellipse cx="10" cy="100" rx="18" ry="10" transform="rotate(-20 10 100)" />
        <ellipse cx="15" cy="140" rx="16" ry="9" transform="rotate(-30 15 140)" />
        <ellipse cx="155" cy="70" rx="18" ry="10" transform="rotate(30 155 70)" />
        <ellipse cx="150" cy="110" rx="17" ry="9" transform="rotate(20 150 110)" />
      </svg>

      {/* Thin divider line top */}
      <div
        style={{
          position: 'absolute',
          top: '48px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(120px, 20vw, 200px)',
          height: '1px',
          backgroundColor: 'rgba(247,245,241,0.2)',
        }}
      />

      {/* Cursive subtitle */}
      <div
        style={{
          fontFamily: '"Dancing Script", cursive',
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: 'rgba(247,245,241,0.55)',
          letterSpacing: '0.05em',
          marginBottom: '28px',
          opacity: lettersReady ? 1 : 0,
          transform: lettersReady ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
        }}
      >
        ristorante & eventi
      </div>

      {/* Animated DIODONA wordmark */}
      <div
        style={{
          display: 'flex',
          gap: 'clamp(4px, 1vw, 12px)',
          marginBottom: '48px',
        }}
      >
        {letters.map((letter, i) => (
          <span
            key={i}
            style={{
              fontFamily: '"Canela Light", "Canela", serif',
              fontSize: 'clamp(52px, 9vw, 120px)',
              fontWeight: 300,
              color: '#F7F5F1',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              display: 'inline-block',
              opacity: lettersReady ? 1 : 0,
              transform: lettersReady ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.7s ease ${0.1 + i * 0.06}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${0.1 + i * 0.06}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* dal 1994 */}
      <div
        style={{
          fontFamily: '"Dancing Script", cursive',
          fontSize: 'clamp(14px, 1.6vw, 18px)',
          color: 'rgba(247,245,241,0.45)',
          letterSpacing: '0.12em',
          marginBottom: '56px',
          opacity: lettersReady ? 1 : 0,
          transition: 'opacity 0.8s ease 0.7s',
        }}
      >
        dal 1994
      </div>

      {/* Progress bar container */}
      <div
        style={{
          width: 'clamp(200px, 30vw, 320px)',
          height: '1px',
          backgroundColor: 'rgba(247,245,241,0.15)',
          borderRadius: '1px',
          overflow: 'hidden',
          position: 'relative',
          opacity: lettersReady ? 1 : 0,
          transition: 'opacity 0.5s ease 0.4s',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#F7F5F1',
            borderRadius: '1px',
            transition: 'width 0.03s linear',
          }}
        />
      </div>

      {/* Progress percentage */}
      <div
        style={{
          marginTop: '16px',
          fontFamily: 'Manrope, sans-serif',
          fontSize: '11px',
          fontWeight: 400,
          letterSpacing: '0.2em',
          color: 'rgba(247,245,241,0.35)',
          opacity: lettersReady ? 1 : 0,
          transition: 'opacity 0.5s ease 0.5s',
        }}
      >
        {Math.round(progress)}%
      </div>

      {/* Thin divider line bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '48px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(120px, 20vw, 200px)',
          height: '1px',
          backgroundColor: 'rgba(247,245,241,0.2)',
        }}
      />
    </div>
  );
}
