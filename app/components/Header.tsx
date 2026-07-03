'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const menuItems = [
  { label: 'Ristorante', href: '#ristorante' },
  { label: 'Location', href: '#location' },
  { label: 'Spazio Limonaia', href: '#limonaia', indent: true },
  { label: 'Spazio Diodona', href: '#spazio', indent: true },
  { label: 'Matrimoni ed Eventi', href: '#eventi' },
  { label: 'Famiglia', href: '#famiglia' },
  { label: 'Album dei Ricordi', href: '#album' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBeige, setIsBeige] = useState(false);
  const [transformY, setTransformY] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      const headerH = headerRef.current.offsetHeight;
      
      const checkX = window.innerWidth / 2;
      const checkY = headerH / 2;
      const elements = document.elementsFromPoint(checkX, checkY);
      
      let overDark = false;
      for (const el of elements) {
        // Skip header and its descendants
        if (headerRef.current && headerRef.current.contains(el)) continue;
        
        // Manual override class
        if (el.classList && el.classList.contains('menu-beige-section')) {
          overDark = true;
          break;
        }
        
        const style = window.getComputedStyle(el);
        const bg = style.backgroundColor;
        
        let alpha = 1;
        if (!bg || bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)' || bg.replace(/\s/g, '') === 'rgba(0,0,0,0)') {
          alpha = 0;
        } else {
          const alphaMatch = bg.match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([0-9.]+)\)/);
          if (alphaMatch) alpha = parseFloat(alphaMatch[1]);
        }
        
        if (alpha > 0.1) {
          const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (match) {
            const r = parseInt(match[1], 10);
            const g = parseInt(match[2], 10);
            const b = parseInt(match[3], 10);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            if (brightness < 128) {
              overDark = true;
            }
          }
          break; // Found the topmost opaque background
        }
      }
      setIsBeige(overDark);

      // Push header up when footer reaches it (stick to bottom of newsletter section)
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const overlap = headerH - footerRect.top;
        if (overlap > 0) {
          setTransformY(-overlap);
        } else {
          setTransformY(0);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`diodona-header ${isBeige ? 'header-beige' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 48px',
          transition: transformY < 0 ? 'none' : 'all 0.4s ease',
          transform: `translateY(${transformY}px)`,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="homepage"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <DiodonaLogo color={isBeige ? '#F7F5F1' : '#00382C'} />
        </Link>

        {/* Menu Button */}
        <button
          id="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Apri menu"
          style={{
            background: 'none',
            border: `1.5px solid ${isBeige ? '#F7F5F1' : '#00382C'}`,
            color: isBeige ? '#F7F5F1' : '#00382C',
            borderRadius: '50px',
            padding: '10px 24px',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            const btn = e.currentTarget;
            btn.style.backgroundColor = isBeige ? '#F7F5F1' : '#00382C';
            btn.style.color = isBeige ? '#00382C' : '#F7F5F1';
          }}
          onMouseLeave={(e) => {
            const btn = e.currentTarget;
            btn.style.backgroundColor = 'transparent';
            btn.style.color = isBeige ? '#F7F5F1' : '#00382C';
          }}
        >
          MENU
        </button>
      </header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: '16px',
              left: '16px',
              right: '16px',
              maxHeight: 'calc(90vh - 32px)',
              borderRadius: '12px',
              zIndex: 200,
              backgroundColor: '#00382C', // Very dark green
              display: 'flex',
              flexDirection: 'column',
              overflow: 'auto',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            }}
          >
            {/* Menu header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '32px 48px 0 48px',
              }}
            >
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <DiodonaLogo color="#F7F5F1" />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#F7F5F1',
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  padding: '8px 0',
                }}
              >
                CLOSE
              </button>
            </div>

            {/* Menu content */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                padding: '40px 48px 32px 48px',
              }}
            >
              {/* Main text */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                style={{
                  fontFamily: '"Canela Light", "Canela", serif',
                  fontSize: 'clamp(20px, 3.2vw, 36px)',
                  fontWeight: 300,
                  color: '#F7F5F1',
                  lineHeight: 1.2,
                  marginBottom: '24px',
                  maxWidth: '1200px',
                  letterSpacing: '-0.01em',
                }}
              >
                Diodona is a <span style={{ textDecoration: 'underline', textUnderlineOffset: '8px', textDecorationThickness: '1px' }}>location</span> , it is a <span style={{ textDecoration: 'underline', textUnderlineOffset: '8px', textDecorationThickness: '1px' }}>restaurant</span> , it is the <span style={{ textDecoration: 'underline', textUnderlineOffset: '8px', textDecorationThickness: '1px' }}>Limonaia</span> , it is <span style={{ textDecoration: 'underline', textUnderlineOffset: '8px', textDecorationThickness: '1px' }}>weddings</span><br />
                <span style={{ textDecoration: 'underline', textUnderlineOffset: '8px', textDecorationThickness: '1px' }}>and events</span> . Diodona is <span style={{ textDecoration: 'underline', textUnderlineOffset: '8px', textDecorationThickness: '1px' }}>Family</span> .
              </motion.h2>

              <div style={{ height: '1px', background: 'rgba(247,245,241,0.3)', marginBottom: '40px' }} />

              {/* 4 Columns */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', flex: 1 }}>

                {/* Col 1 */}
                <div>
                  <div style={{ marginBottom: '24px' }}>
                    <a href="#ristorante" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px', fontWeight: 500, color: '#F7F5F1', textDecoration: 'none' }}>RESTAURANT</a>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <a href="#location" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px', fontWeight: 500, color: '#F7F5F1', textDecoration: 'none' }}>LOCATION</a>
                    <ul style={{ listStyle: 'none', paddingLeft: '12px', marginTop: '12px' }}>
                      <li style={{ marginBottom: '10px' }}><a href="#limonaia" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '15px', color: '#F7F5F1', textDecoration: 'none' }}>Lemon House Space</a></li>
                      <li><a href="#spazio" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '15px', color: '#F7F5F1', textDecoration: 'none' }}>Diodona Space</a></li>
                    </ul>
                  </div>
                  <div>
                    <a href="#eventi" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px', fontWeight: 500, color: '#F7F5F1', textDecoration: 'none' }}>WEDDINGS AND EVENTS</a>
                  </div>
                </div>

                {/* Col 2 */}
                <div>
                  <div style={{ marginBottom: '24px' }}>
                    <a href="#famiglia" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px', fontWeight: 500, color: '#F7F5F1', textDecoration: 'none' }}>FAMILY</a>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <a href="#album" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px', fontWeight: 500, color: '#F7F5F1', textDecoration: 'none' }}>ALBUM OF MEMORIES</a>
                  </div>
                  <div>
                    <a href="#contatti" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px', fontWeight: 500, color: '#F7F5F1', textDecoration: 'none' }}>CONTACTS</a>
                  </div>
                </div>

                {/* Col 3 */}
                <div style={{ textAlign: 'center' }}>
                  <a href="#voucher" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px', fontWeight: 500, color: '#F7F5F1', textDecoration: 'none', display: 'block', marginBottom: '24px' }}>BUY A<br />GIFT VOUCHER</a>
                  <div style={{ width: '220px', height: '140px', background: '#e0eade', borderRadius: '4px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.2)', transform: 'rotate(-2deg)' }}>
                    {/* Placeholder for the graphic */}
                    <span style={{ color: '#00382C', fontFamily: 'Manrope, sans-serif', fontSize: '12px' }}>[Voucher Graphic]</span>
                  </div>
                </div>

                {/* Col 4 */}
                <div>
                  <div style={{ marginBottom: '24px' }}>
                    <a href="#prenota" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px', fontWeight: 500, color: '#F7F5F1', textDecoration: 'none' }}>BOOK NOW</a>
                  </div>
                  <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '13px', color: '#F7F5F1', lineHeight: 1.8, marginBottom: '24px' }}>
                    Phone: 0332.860969<br />
                    WhatsApp: 3357358475<br />
                    Email: info@diodona.it
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {/* Placeholder circles for social icons */}
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1.5px solid #F7F5F1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#F7F5F1', borderRadius: '50%' }} />
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div style={{ height: '1px', background: 'rgba(247,245,241,0.3)', margin: 'auto 0 24px 0' }} />

              {/* Footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Manrope, sans-serif', fontSize: '12px', color: '#F7F5F1', alignItems: 'flex-end' }}>
                <p style={{ maxWidth: '60%', lineHeight: 1.5, opacity: 0.9 }}>
                  Diodona is in Malnate, nestled in the heart of a large park between Como, Varese, Milan,<br />and Switzerland.
                </p>
                <p style={{ opacity: 0.9 }}>Malnate. 28°C. Clear skies</p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 768px) {
          .diodona-header {
            padding: 20px 24px !important;
          }
        }
      `}</style>
    </>
  );
}

function DiodonaLogo({ color }: { color: string }) {
  return (
    <svg width="52" height="58" viewBox="0 0 52 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 2C26 2 8 12 8 28C8 40 16 48 26 52C36 48 44 40 44 28C44 12 26 2 26 2Z" fill={color} />
      <path d="M18 28C18 28 22 20 26 18C30 20 34 28 34 28C34 36 30 42 26 44C22 42 18 36 18 28Z" fill={color === '#F7F5F1' ? '#00382C' : '#F7F5F1'} />
      <circle cx="26" cy="28" r="4" fill={color} />
    </svg>
  );
}
