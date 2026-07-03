'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-80px' });

  return (
    <footer
      ref={ref}
      id="contatti"
      style={{
        backgroundColor: '#0a3029',
        color: '#f4f3f0',
        padding: '60px 40px',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'Inter, system-ui, sans-serif',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Illustrations */}
      {/* Left Illustration: Wine Bottle & Glasses */}
      <div style={{ position: 'absolute', left: '40px', top: '50%', transform: 'translateY(-50%)', opacity: 0.6, pointerEvents: 'none' }}>
        <svg width="60" height="120" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#91b59a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Bottle */}
            <path d="M40 80 Q40 60 45 40 L45 20 Q45 15 50 15 Q55 15 55 20 L55 40 Q60 60 60 80 L60 180 Q60 190 50 190 Q40 190 40 180 Z" />
            <path d="M42 40 L58 40" />
            {/* Glass 1 */}
            <path d="M20 120 Q10 120 10 100 Q10 80 20 80 Q30 80 30 100 Q30 120 20 120 Z" />
            <path d="M20 120 L20 160" />
            <path d="M12 160 L28 160" />
            {/* Glass 2 (Smaller/Lower) */}
            <path d="M80 140 Q70 140 70 120 Q70 100 80 100 Q90 100 90 120 Q90 140 80 140 Z" />
            <path d="M80 140 L80 180" />
            <path d="M72 180 L88 180" />
          </g>
        </svg>
      </div>

      {/* Right Illustration: Flowers */}
      <div style={{ position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%)', opacity: 0.6, pointerEvents: 'none' }}>
        <svg width="60" height="120" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#91b59a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Stems */}
            <path d="M50 190 Q50 150 40 100" />
            <path d="M50 190 Q50 140 60 90" />
            <path d="M50 190 Q50 160 70 120" />
            {/* Flower 1 */}
            <path d="M40 100 C30 90, 20 100, 40 110 C50 100, 60 90, 40 100" />
            {/* Flower 2 */}
            <path d="M60 90 C50 80, 40 90, 60 100 C70 90, 80 80, 60 90" />
            {/* Flower 3 */}
            <path d="M70 120 C60 110, 50 120, 70 130 C80 120, 90 110, 70 120" />
            {/* Leaves */}
            <path d="M45 140 Q30 130 35 150" />
            <path d="M55 160 Q70 150 65 170" />
          </g>
        </svg>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', height: '100%', flex: 1 }}>
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
            paddingTop: '20px'
          }}
        >
          {/* Top Left: Address & Hours */}
          <div style={{ fontSize: '15px', lineHeight: '1.6', fontWeight: 300 }}>
            <p style={{ marginBottom: '16px' }}>Via Hermada, 20 • 21046 Malnate (Va)</p>
            <p>
              The restaurant is open<br />
              from Thursday to Sunday.
            </p>
          </div>

          {/* Top Right: Contact & Social */}
          <div style={{ display: 'flex', gap: '40px', textAlign: 'right', fontSize: '15px', fontWeight: 300, lineHeight: '1.6' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a href="mailto:info@diodona.it" style={{ color: 'inherit', textDecoration: 'none' }}>info@diodona.it</a>
              <a href="tel:0332860969" style={{ color: 'inherit', textDecoration: 'none' }}>0332.860969</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>whatsapp</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>instagram</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>tiktok</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>facebook</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>linkedin</a>
            </div>
          </div>
        </motion.div>

        {/* Center Section: Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          {/* Logo Icon */}
          <svg width="150" height="120" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '20px' }}>
            {/* Top Circle */}
            <circle cx="100" cy="30" r="15" fill="#f4f3f0" />
            {/* Center abstract leaf */}
            <path d="M100 55 L80 120 Q100 140 120 120 Z" fill="#f4f3f0" />
            {/* Left abstract leaf */}
            <path d="M60 40 L85 105 Q60 115 30 90 Q60 90 75 80 Z" fill="#f4f3f0" />
            <path d="M90 55 L85 105 L60 40 Z" fill="#f4f3f0" /> {/* Connector/fill */}
            <path d="M60 40 L90 50 L80 120 L30 90 Q65 100 60 40 Z" fill="#f4f3f0" />
            
            {/* Improved Symmetry Left Leaf */}
            <path d="M95 50 L85 110 Q50 110 25 90 C50 100 60 60 95 50 Z" fill="#f4f3f0" />
            {/* Improved Symmetry Right Leaf */}
            <path d="M105 50 L115 110 Q150 110 175 90 C150 100 140 60 105 50 Z" fill="#f4f3f0" />
            {/* Center Pillar */}
            <path d="M100 50 L85 120 Q100 130 115 120 Z" fill="#f4f3f0" />
          </svg>

          {/* Corrected Logo Icon to better match the image */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -100%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Circle */}
                <circle cx="75" cy="20" r="14" fill="#f4f3f0" />
                {/* Left shape */}
                <path d="M62 35 L58 85 Q30 85 5 70 C30 75 40 45 62 35 Z" fill="#f4f3f0" />
                {/* Right shape */}
                <path d="M88 35 L92 85 Q120 85 145 70 C120 75 110 45 88 35 Z" fill="#f4f3f0" />
                {/* Center shape */}
                <path d="M75 35 L62 85 Q75 100 88 85 Z" fill="#f4f3f0" />
             </svg>
          </div>

          <h1
            style={{
              fontFamily: '"Oswald", "Impact", sans-serif', // Assuming a condensed sans-serif
              fontSize: 'clamp(60px, 12vw, 160px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              margin: 0,
              lineHeight: 1,
              transform: 'scaleY(1.4)', // Stretch vertically to match the condensed look
              transformOrigin: 'bottom',
              marginTop: '40px'
            }}
          >
            DIODONA
          </h1>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
            paddingBottom: '20px'
          }}
        >
          {/* Bottom Left: Company Info */}
          <div style={{ fontSize: '13px', lineHeight: '1.6', fontWeight: 300 }}>
            <p>TURISTHICO SRL</p>
            <p>SL via Goldoni, 11 • 20129 Milan</p>
            <p>Fiscal Code 01979220132 &ndash; VAT No. 11361450155</p>
            <p>Rea MI-1460561</p>
            <p>Share capital 4,080,000.00</p>
          </div>

          {/* Bottom Center: dal 1994 */}
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '20px' }}>
            <p
              style={{
                fontFamily: '"Caveat", "Great Vibes", "Brush Script MT", cursive',
                fontSize: '28px',
                color: '#f4f3f0',
                margin: 0,
                opacity: 0.9
              }}
            >
              dal 1994
            </p>
          </div>

          {/* Bottom Right: Legal Links */}
          <div style={{ textAlign: 'right', fontSize: '13px', lineHeight: '1.6', fontWeight: 300, display: 'flex', flexDirection: 'column' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookie Policy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Preferences</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms and Conditions</a>
            <div style={{ marginTop: '16px' }}>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Designed by Memesi</a>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          footer {
            padding: 40px 20px !important;
            min-height: auto !important;
          }
          div[style*="justify-content: space-between"] {
            flex-direction: column;
            align-items: center !important;
            text-align: center !important;
            gap: 40px;
          }
          div[style*="text-align: right"] {
            text-align: center !important;
            align-items: center !important;
          }
          div[style*="gap: 40px"] {
            gap: 20px !important;
          }
          /* Hide absolute positioned elements on mobile */
          div[style*="position: absolute"] {
            position: static !important;
            transform: none !important;
            margin-top: 40px;
          }
          svg[width="60"] {
            display: none;
          }
        }
        /* Import a condensed font and cursive font for better accuracy if they don't exist */
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&family=Caveat:wght@400;500&display=swap');
        
        h1 {
          font-family: 'Oswald', sans-serif !important;
        }
        p[style*="cursive"] {
          font-family: 'Caveat', cursive !important;
        }
      `}</style>
    </footer>
  );
}
