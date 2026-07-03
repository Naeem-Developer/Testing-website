'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="famiglia"
      className="menu-beige-section"
      style={{
        backgroundColor: '#F7F5F1',
        padding: '120px 0',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '100px',
            alignItems: 'center',
          }}
        >
          {/* Images stacked with offset */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' as const }}
            style={{ position: 'relative' }}
          >
            {/* Main image */}
            <div
              className="img-rotate"
              style={{
                position: 'relative',
                aspectRatio: '3/4',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 32px 64px rgba(0,56,44,0.15)',
                transform: 'rotate(-2deg)',
              }}
            >
              <Image
                src="/restaurant-interior.jpg"
                alt="Diodona - La nostra famiglia"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Small overlapping image */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 0 }}
              animate={inView ? { opacity: 1, x: 0, rotate: 4 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' as const }}
              style={{
                position: 'absolute',
                bottom: '-40px',
                right: '-40px',
                width: '55%',
                aspectRatio: '1',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 20px 48px rgba(0,56,44,0.2)',
                border: '6px solid #F7F5F1',
              }}
            >
              <Image
                src="/food-dish1.jpg"
                alt="I piatti di Diodona"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' as const }}
            style={{ paddingBottom: '40px' }}
          >
            <span
              style={{
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(0,56,44,0.5)',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              La nostra storia
            </span>

            <h2
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(36px, 4.5vw, 62px)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: '#00382C',
                marginBottom: '32px',
              }}
            >
              Diodona è{' '}
              <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Famiglia
              </span>
            </h2>

            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.85,
                color: 'rgba(0,56,44,0.7)',
                marginBottom: '24px',
              }}
            >
              Tutto ebbe inizio nel 1994, quando una famiglia decise di condividere 
              la propria passione per la buona cucina e la bellezza della natura 
              con gli ospiti. Da allora, ogni piatto racconta di tradizione, 
              innovazione e amore per il territorio.
            </p>

            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.85,
                color: 'rgba(0,56,44,0.7)',
                marginBottom: '48px',
              }}
            >
              Diodona è immersa in un grande parco secolare tra Como, Varese, 
              Milano e la Svizzera, a Malnate — un luogo dove il tempo sembra 
              fermarsi e la natura fa da sfondo a ogni momento speciale.
            </p>

            {/* Handwriting quote */}
            <div
              style={{
                borderLeft: '3px solid rgba(0,56,44,0.15)',
                paddingLeft: '24px',
                marginBottom: '48px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  color: 'rgba(0,56,44,0.5)',
                  transform: 'rotate(-1deg)',
                  display: 'inline-block',
                  lineHeight: 1.4,
                }}
              >
                &ldquo;Diodona è magia, sapori, natura, passione.&rdquo;
              </p>
            </div>

            <a href="#contatti" className="btn btn-outline">
              Scopri la nostra storia
            </a>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
