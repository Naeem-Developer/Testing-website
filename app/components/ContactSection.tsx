'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contatti"
      ref={ref}
      style={{
        backgroundColor: '#c8dfc8', // soft sage/mint green from the screenshot
        padding: '100px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Main text */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        style={{
          fontFamily: '"Canela Light", "Canela", serif',
          fontSize: 'clamp(28px, 4vw, 52px)',
          fontWeight: 'lighter',
          color: '#00382C',
          textAlign: 'center',
          lineHeight: 1.25,
          maxWidth: '700px',
          marginBottom: '0px',
          letterSpacing: '-0.01em',
        }}
      >
        Want to organize an event? Book a dinner? Or
        simply learn more about Diodona?
        Our team is always available.
      </motion.h2>

      {/* CONTACT US — dark filled pill button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <a
          href="mailto:info@diodona.it"
          style={{
            display: 'inline-block',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#F7F5F1',
            backgroundColor: '#00382C',
            borderRadius: '50px',
            padding: '14px 36px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = '#005040';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = '#00382C';
          }}
        >
          CONTACT US
        </a>
      </motion.div>
    </section>
  );
}
