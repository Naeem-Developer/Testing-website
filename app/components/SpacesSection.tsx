'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SpacesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.9, ease: 'easeOut', delay },
  });

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#F7F5F1',
        padding: '130px 24px 140px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Heading — mix of italic and roman weight */}
      <motion.h2
        {...fadeUp(0)}
        style={{
          fontFamily: '"Canela Light", "Canela", serif',
          fontSize: 'clamp(38px, 6vw, 76px)',
          fontWeight: 300,
          color: '#00382C',
          textAlign: 'center',
          lineHeight: 1.1,
          marginBottom: '48px',
          letterSpacing: '-0.01em',
        }}
      >
        <em>Limonaia Space</em><br />
        and <em>Diodona Space</em>
      </motion.h2>

      {/* Body text */}
      <motion.p
        {...fadeUp(0.15)}
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'clamp(13px, 1.2vw, 15px)',
          color: '#00382C',
          textAlign: 'center',
          maxWidth: '680px',
          lineHeight: 1.8,
          marginBottom: '60px',
          opacity: 0.85,
        }}
      >
        Two souls, one unique experience. The Diodona estate is divided into Spazio Diodona and Spazio Limonaia, two distinct
        spaces with separate entrances, parking, and kitchens, perfect for hosting private and personalized events and
        weddings.
      </motion.p>

      {/* CTA button — outlined pill */}
      <motion.div {...fadeUp(0.28)}>
        <a
          href="#location"
          style={{
            display: 'inline-block',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#00382C',
            border: '1px solid #00382C',
            borderRadius: '50px',
            padding: '13px 36px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = '#00382C';
            el.style.color = '#F7F5F1';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = 'transparent';
            el.style.color = '#00382C';
          }}
        >
          DISCOVER THE ESTATE
        </a>
      </motion.div>
    </section>
  );
}
