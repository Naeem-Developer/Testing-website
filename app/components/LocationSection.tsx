'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function LocationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.9, ease: 'easeOut' as const, delay },
  });

  return (
    <section
      id="location"
      ref={ref}
      style={{
        backgroundColor: '#00382C',
        padding: '100px 24px 100px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Cursive eyebrow */}
      <motion.span
        {...fadeUp(0)}
        style={{
          fontFamily: '"Dancing Script", cursive',
          fontSize: 'clamp(22px, 2.5vw, 30px)',
          color: 'rgba(247,245,241,0.7)',
          display: 'block',
          textAlign: 'center',
          marginBottom: '16px',
        }}
      >
        like a tailor
      </motion.span>

      {/* Main heading */}
      <motion.h2
        {...fadeUp(0.1)}
        style={{
          fontFamily: '"Canela Light", "Canela", serif',
          fontSize: 'clamp(36px, 5.5vw, 72px)',
          fontWeight: 300,
          color: '#F7F5F1',
          textAlign: 'center',
          lineHeight: 1.1,
          maxWidth: '900px',
          marginBottom: '64px',
          letterSpacing: '-0.01em',
        }}
      >
        Tailor-made services for a carefully<br />crafted event
      </motion.h2>

      {/* Large centered image — fully visible, natural height */}
      <motion.div
        {...fadeUp(0.2)}
        style={{
          width: '100%',
          maxWidth: '760px',
          position: 'relative',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '56px',
        }}
      >
        <Image
          src="/wedding-event.jpg"
          alt="Tailor-made events at Diodona"
          width={760}
          height={560}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
      </motion.div>

      {/* Body text */}
      <motion.p
        {...fadeUp(0.3)}
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'clamp(13px, 1.2vw, 15px)',
          color: 'rgba(247,245,241,0.85)',
          textAlign: 'center',
          maxWidth: '640px',
          lineHeight: 1.8,
          marginBottom: '8px',
        }}
      >
        <strong style={{ color: '#F7F5F1' }}>From the setup to the menu, every detail comes together.</strong>
      </motion.p>
      <motion.p
        {...fadeUp(0.36)}
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'clamp(13px, 1.2vw, 15px)',
          color: 'rgba(247,245,241,0.75)',
          textAlign: 'center',
          maxWidth: '640px',
          lineHeight: 1.8,
          marginBottom: '48px',
        }}
      >
        Diodona offers an attentive staff and a network of trusted suppliers to create an event that's meticulously crafted down to the last detail.
      </motion.p>

      {/* CTA button */}
      <motion.div {...fadeUp(0.44)}>
        <a
          href="#eventi"
          style={{
            display: 'inline-block',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#F7F5F1',
            border: '1px solid rgba(247,245,241,0.6)',
            borderRadius: '50px',
            padding: '13px 36px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = '#F7F5F1';
            el.style.color = '#00382C';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = 'transparent';
            el.style.color = '#F7F5F1';
          }}
        >
          WEDDINGS AND EVENTS
        </a>
      </motion.div>
    </section>
  );
}
