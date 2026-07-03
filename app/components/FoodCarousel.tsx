'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const dishes = [
  { src: '/food-dish1.webp', title: 'Pasta al Tartufo', desc: 'Pappardelle fresche, tartufo nero, parmigiano reggiano 36 mesi' },
  { src: '/food-dish2.webp', title: 'Risotto allo Zafferano', desc: 'Riso Carnaroli, zafferano di Varese, gamberi rossi di Mazara' },
  { src: '/restaurant-interior.webp', title: 'Filetto di Manzo', desc: 'Fassona piemontese, riduzione al Barolo, tartufo bianco d\'Alba' },
  { src: '/hero-bg.webp', title: 'Dolce della Tradizione', desc: 'Tiramisù della nonna, caffè selezionato, mascarpone artigianale' },
];

export default function FoodCarousel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-80px' });
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(((current + 1) / dishes.length) * 100);
  }, [current]);

  const next = () => setCurrent((c) => (c + 1) % dishes.length);
  const prev = () => setCurrent((c) => (c - 1 + dishes.length) % dishes.length);

  return (
    <section
      ref={ref}
      id="menu"
      className="menu-beige-section"
      style={{
        backgroundColor: '#F7F5F1',
        padding: '120px 0',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(0,56,44,0.5)', display: 'block', marginBottom: '12px' }}>
                La nostra cucina
              </span>
              <h2
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'clamp(36px, 5vw, 68px)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: '#00382C',
                }}
              >
                I nostri{' '}
                <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  piatti
                </span>
              </h2>
            </div>

            {/* Nav arrows */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <button
                onClick={prev}
                aria-label="Piatto precedente"
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  border: '1.5px solid #00382C',
                  background: 'transparent',
                  color: '#00382C',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  fontSize: '20px',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#00382C';
                  (e.currentTarget as HTMLButtonElement).style.color = '#F7F5F1';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLButtonElement).style.color = '#00382C';
                }}
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Piatto successivo"
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  border: '1.5px solid #00382C',
                  background: 'transparent',
                  color: '#00382C',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  fontSize: '20px',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#00382C';
                  (e.currentTarget as HTMLButtonElement).style.color = '#F7F5F1';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLButtonElement).style.color = '#00382C';
                }}
              >
                →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <div style={{ overflow: 'hidden', borderRadius: '4px' }}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            {/* Image */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <Image
                src={dishes[current].src}
                alt={dishes[current].title}
                fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Text */}
            <div>
              <span
                style={{
                  fontSize: '80px',
                  fontWeight: 700,
                  color: 'rgba(0,56,44,0.06)',
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: '-20px',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {String(current + 1).padStart(2, '0')}
              </span>
              <h3
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  fontWeight: 300,
                  color: '#00382C',
                  lineHeight: 1.2,
                  marginBottom: '20px',
                }}
              >
                {dishes[current].title}
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.8,
                  color: 'rgba(0,56,44,0.65)',
                  marginBottom: '40px',
                  fontStyle: 'italic',
                }}
              >
                {dishes[current].desc}
              </p>
              <a href="#contatti" className="btn btn-outline">
                Prenota un tavolo
              </a>
            </div>
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="swiper-progress" style={{ marginTop: '48px' }}>
          <motion.div
            className="swiper-progress-fill"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '20px' }}>
          {dishes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Vai al piatto ${i + 1}`}
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: i === current ? '#00382C' : 'rgba(0,56,44,0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
