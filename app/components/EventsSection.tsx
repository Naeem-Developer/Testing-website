'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function EventsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.9, ease: 'easeOut', delay },
  });

  return (
    <section
      id="eventi"
      ref={ref}
      className="menu-beige-section"
      style={{
        backgroundColor: '#00382C',
        padding: '160px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Cursive eyebrow */}
      <motion.span
        {...fadeUp(0)}
        style={{
          fontFamily: '"Dancing Script", cursive',
          fontSize: 'clamp(24px, 3vw, 36px)',
          color: '#F7F5F1',
          display: 'block',
          textAlign: 'center',
          marginBottom: '16px',
        }}
      >
        from our diary
      </motion.span>

      {/* Main heading */}
      <motion.h2
        {...fadeUp(0.1)}
        style={{
          fontFamily: '"Canela Light", "Canela", serif',
          fontSize: 'clamp(32px, 4.5vw, 56px)',
          fontWeight: 300,
          color: '#F7F5F1',
          textAlign: 'center',
          lineHeight: 1.1,
          maxWidth: '800px',
          marginBottom: '16px',
          letterSpacing: '-0.01em',
        }}
      >
        The next appointment at Diodona?
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.2)}
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'clamp(14px, 1.4vw, 16px)',
          color: '#F7F5F1',
          textAlign: 'center',
          maxWidth: '600px',
          marginBottom: '80px',
        }}
      >
        Diodona organizes themed evenings dedicated to food and wine excellence
      </motion.p>

      {/* No upcoming events message */}
      <motion.p
        {...fadeUp(0.3)}
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'clamp(14px, 1.4vw, 16px)',
          color: '#F7F5F1',
          textAlign: 'center',
          maxWidth: '600px',
          opacity: 0.9,
        }}
      >
        There appear to be no upcoming events at the moment.
      </motion.p>
    </section>
  );
}
