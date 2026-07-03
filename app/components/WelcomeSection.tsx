'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function WelcomeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#c8e4c8', // Matches the end of the Hero Section scroll
        padding: '120px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' as const }}
          style={{ color: '#00382c' }}
        >
          <p
            style={{
              fontFamily: '"Canela Light", "Canela", serif',
              fontSize: 'clamp(18px, 2.5vw, 28px)',
              fontWeight: 300,
              lineHeight: 1.6,
              marginBottom: '48px',
            }}
          >
            A refined restaurant nestled in the hilly landscape between Como, Varese, Milan, and Switzerland.
            Five hectares of nature surround the heart of Diodona: an elegant and warm farmhouse, a greenhouse in a dense,
            silent forest, where light filters through the branches and time unfolds.
          </p>

          <h2
            style={{
              fontFamily: '"Brittany Signature", cursive',
              fontSize: 'clamp(48px, 8vw, 80px)',
              fontWeight: 400,
              marginBottom: '32px',
            }}
          >
            Welcome!
          </h2>

          <p
            style={{
              fontFamily: '"Canela Light", "Canela", serif',
              fontSize: 'clamp(18px, 2vw, 24px)',
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Diodona is an experience to be savored with all the senses.<br />
            Whether it&#39;s a dish cooked over an open flame, an event to celebrate, or a wedding surrounded by greenery,
            here every moment has its own space, its own rhythm, its own meaning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
