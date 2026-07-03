'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function SpacesImagesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [img2Appeared, setImg2Appeared] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Once right image fully fades in, permanently lock it visible
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      if (v >= 0.4) setImg2Appeared(true);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Right image slides up from bottom — goes back down when scrolling up
  const img2Y = useTransform(scrollYProgress, [0.2, 0.7], ['110vh', '0vh'], { clamp: true });
  // Only used before permanently appeared
  const img2OpacityTransform = useTransform(scrollYProgress, [0.2, 0.4], [0, 1], { clamp: true });

  return (
    <section
      ref={sectionRef}
      style={{ height: '250vh', position: 'relative' }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          backgroundColor: '#F7F5F1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          gap: '56px',
        }}
      >
        {/* Left image — always visible, slight counter-clockwise tilt */}
        <div
          style={{
            position: 'relative',
            width: 'clamp(300px, 35vw, 460px)',
            height: 'clamp(400px, 58vh, 620px)',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.14)',
            transform: 'rotate(-3deg)',
            flexShrink: 0,
          }}
        >
          <Image
            src="/wedding-event.jpg"
            alt="Lemon House Space"
            fill
            style={{ objectFit: 'cover' }}
          />
          {/* Cursive label */}
          <span
            style={{
              position: 'absolute',
              bottom: '32px',
              left: '28px',
              fontFamily: '"Dancing Script", cursive',
              fontSize: 'clamp(24px, 2.8vw, 34px)',
              color: '#fff',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              pointerEvents: 'none',
            }}
          >
            Lemon House
          </span>
        </div>

        {/* Right image — slides up from bottom, STAYS VISIBLE once fully loaded */}
        <motion.div
          style={{
            position: 'relative',
            width: 'clamp(300px, 35vw, 460px)',
            height: 'clamp(400px, 58vh, 620px)',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.14)',
            rotate: 2,
            y: img2Y,
            // Once permanently appeared, hard-lock opacity to 1
            opacity: img2Appeared ? 1 : img2OpacityTransform,
            flexShrink: 0,
          }}
        >
          <Image
            src="/restaurant-interior.jpg"
            alt="Diodona Space"
            fill
            style={{ objectFit: 'cover' }}
          />
          {/* Cursive label */}
          <span
            style={{
              position: 'absolute',
              bottom: '32px',
              left: '28px',
              fontFamily: '"Dancing Script", cursive',
              fontSize: 'clamp(24px, 2.8vw, 34px)',
              color: '#fff',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              pointerEvents: 'none',
            }}
          >
            Diodona
          </span>
        </motion.div>
      </div>
    </section>
  );
}
