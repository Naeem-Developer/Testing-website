'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function RestaurantMenuSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, ease: 'easeOut' as const, delay },
  });

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#F7F5F1',
        padding: '120px 24px 140px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0',
      }}
    >
      {/* Heading */}
      <motion.h2
        {...fadeUp(0)}
        style={{
          fontFamily: '"Canela Light", "Canela", serif',
          fontSize: 'clamp(36px, 5.5vw, 68px)',
          fontWeight: 300,
          color: '#1a3a35',
          textAlign: 'center',
          lineHeight: 1.1,
          marginBottom: '48px',
          letterSpacing: '-0.01em',
        }}
      >
        I menu<br />del nostro ristorante
      </motion.h2>

      {/* Body text block 1 */}
      <motion.p
        {...fadeUp(0.15)}
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'clamp(13px, 1.3vw, 15px)',
          color: '#3d7a72',
          textAlign: 'center',
          maxWidth: '680px',
          lineHeight: 1.75,
          marginBottom: '20px',
          fontStyle: 'italic',
        }}
      >
        Il ristorante Diodona è un viaggio tra tradizione e innovazione. Ingredienti locali, cotture a legna e ricette curate dai nostri
        chef trasformano ogni piatto in un'esperienza da ricordare.
      </motion.p>

      {/* Body text block 2 */}
      <motion.p
        {...fadeUp(0.25)}
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'clamp(13px, 1.3vw, 15px)',
          color: '#3d7a72',
          textAlign: 'center',
          maxWidth: '680px',
          lineHeight: 1.75,
          marginBottom: '56px',
          fontStyle: 'italic',
        }}
      >
        Per chi ama la libertà di scegliere, il nostro Menu à la carte propone specialità e{' '}
        <span style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>piatti tradizionali rivisitati con creatività</span>.
        La domenica a pranzo e nelle festività come Natale e Pasqua, invece, offriamo un menu degustazione pensato per stare
        in famiglia o con gli amici, lasciandosi guidare dalla nostra passione.
      </motion.p>

      {/* Discover button — outlined pill */}
      <motion.div {...fadeUp(0.35)} style={{ marginBottom: '48px' }}>
        <a
          href="#ristorante"
          style={{
            display: 'inline-block',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#1a3a35',
            border: '1px solid #1a3a35',
            borderRadius: '50px',
            padding: '12px 32px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1a3a35';
            (e.currentTarget as HTMLAnchorElement).style.color = '#F7F5F1';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
            (e.currentTarget as HTMLAnchorElement).style.color = '#1a3a35';
          }}
        >
          SCOPRI IL RISTORANTE
        </a>
      </motion.div>

      {/* Two menu buttons — filled soft teal pill */}
      <motion.div
        {...fadeUp(0.45)}
        style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {['MENU DEGUSTAZIONE', 'MENU À LA CARTE'].map((label) => (
          <a
            key={label}
            href="#"
            style={{
              display: 'inline-block',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#1a3a35',
              backgroundColor: '#b8d4cf',
              borderRadius: '50px',
              padding: '16px 32px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1a3a35';
              (e.currentTarget as HTMLAnchorElement).style.color = '#F7F5F1';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#b8d4cf';
              (e.currentTarget as HTMLAnchorElement).style.color = '#1a3a35';
            }}
          >
            {label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
