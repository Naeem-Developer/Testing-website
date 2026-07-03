'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function NewsletterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="newsletter"
      ref={ref}
      style={{
        backgroundColor: '#c4ddec', // Light pastel blue matching the image
        padding: '120px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut' as const }}
        style={{
          fontFamily: '"Canela Light", "Canela", serif',
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontWeight: 'lighter',
          color: '#00382C',
          textAlign: 'center',
          lineHeight: 1.15,
          maxWidth: '900px',
          marginBottom: '40px',
          letterSpacing: '-0.01em',
        }}
      >
        Sign up for our newsletter and be the first to hear
        about events, stories, and news!
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.2 }}
      >
        <a
          href="#subscribe"
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
            el.style.backgroundColor = 'white';
            el.style.color = '#00382C'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = '#00382C';
            el.style.color = 'white'

          }}
        >
          SUBSCRIBE TO THE NEWSLETTER
        </a>
      </motion.div>
    </section>
  );
}
