'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function RestaurantSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section
      id="ristorante"
      ref={ref}
      style={{
        backgroundColor: '#00382C',
        padding: '120px 0',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span
              style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(247,245,241,0.6)',
                marginBottom: '24px',
              }}
            >
              Dal 1994
            </span>

            <h2
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(36px, 5vw, 68px)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: '#F7F5F1',
                marginBottom: '32px',
              }}
            >
              Il{' '}
              <span
                style={{
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic',
                }}
              >
                Ristorante
              </span>
            </h2>

            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.8,
                color: 'rgba(247,245,241,0.8)',
                marginBottom: '24px',
              }}
            >
              Immerso nel verde di un grande parco secolare, Diodona è un ristorante 
              raffinato dove la cucina del territorio incontra la creatività contemporanea.
            </p>

            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.8,
                color: 'rgba(247,245,241,0.8)',
                marginBottom: '48px',
              }}
            >
              Ogni piatto racconta una storia: quella della nostra terra, dei produttori 
              locali e della passione che da trent&#39;anni guida la famiglia Diodona.
            </p>

            {/* Script decoration */}
            <div
              style={{
                transform: 'rotate(-3deg)',
                display: 'inline-block',
                marginBottom: '48px',
              }}
            >
              <span
                style={{
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  color: 'rgba(247,245,241,0.5)',
                  lineHeight: 1.2,
                }}
              >
                sapori autentici
              </span>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#menu" className="btn btn-outline-white">
                Scopri il menu
              </a>
              <a href="#contatti" className="btn btn-primary" style={{ backgroundColor: '#F7F5F1', color: '#00382C', borderColor: '#F7F5F1' }}>
                Prenota un tavolo
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 0 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 2 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            style={{
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
              aspectRatio: '4/5',
              position: 'relative',
            }}
          >
            <Image
              src="/restaurant-interior.jpg"
              alt="Interno del ristorante Diodona"
              fill
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Opening hours strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.7 }}
        style={{
          marginTop: '100px',
          borderTop: '1px solid rgba(247,245,241,0.15)',
          borderBottom: '1px solid rgba(247,245,241,0.15)',
          padding: '32px 0',
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
              {[
                { label: 'Apertura', value: 'Giovedì → Domenica' },
                { label: 'Pranzo', value: '12:30 → 14:30' },
                { label: 'Cena', value: '19:30 → 22:30' },
              ].map((item) => (
                <div key={item.label}>
                  <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(247,245,241,0.5)', display: 'block', marginBottom: '4px' }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '16px', color: '#F7F5F1', fontWeight: 300 }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="tel:0332860969"
              style={{
                fontSize: '14px',
                color: 'rgba(247,245,241,0.7)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              ☎ 0332.860969
            </a>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 900px) {
          section > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
