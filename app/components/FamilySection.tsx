'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function FamilySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Left image moves up and right (inward)
  const yLeft = useTransform(scrollYProgress, [0, 1], [60, -120]);
  const xLeft = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  // Right image moves up and left (inward) with slightly different speed
  const yRight = useTransform(scrollYProgress, [0, 1], [100, -150]);
  const xRight = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#F7F5F1',
        padding: '120px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden', // prevent horizontal scroll from floating elements
      }}
    >
      <div style={{ maxWidth: '800px', textAlign: 'center', marginBottom: '80px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            fontFamily: '"Canela Light", "Canela", serif',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 300,
            color: '#00382C',
            marginBottom: '32px',
          }}
        >
          The welcome is family-like
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(16px, 1.5vw, 20px)',
            lineHeight: 1.6,
            color: '#005040',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px auto',
          }}
        >
          There is a hospitality that cannot be improvised: the one that is born in the family, grows with care, and is recognized in gestures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <a
            href="#famiglia"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              border: '1px solid #005040',
              borderRadius: '50px',
              color: '#005040',
              textDecoration: 'none',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#005040';
              e.currentTarget.style.color = '#F7F5F1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#005040';
            }}
          >
            THE DIODONA FAMILY
          </a>
        </motion.div>
      </div>

      {/* Images Grid */}
      <div
        style={{
          display: 'flex',
          gap: '64px',
          width: '100%',
          maxWidth: '1200px',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: '60px 0 100px 0',
        }}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ flex: '1 1 500px', maxWidth: '600px', height: '450px', position: 'relative', borderRadius: '4px', overflow: 'hidden', y: yLeft, x: xLeft, rotate: -2, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
        >
          <Image
            src="/wedding-event.jpg"
            alt="Family member"
            fill
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ flex: '0 0 350px', height: '520px', position: 'relative', borderRadius: '4px', overflow: 'hidden', y: yRight, x: xRight, rotate: 2, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
        >
          <Image
            src="/restaurant-interior.jpg"
            alt="Family member"
            fill
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
