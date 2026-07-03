'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function DishesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [textVisible, setTextVisible] = useState(false);
  // Once an image has fully appeared, it NEVER goes back to invisible
  const [img1Appeared, setImg1Appeared] = useState(false);
  const [img2Appeared, setImg2Appeared] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      // Text shows when entering section (allow going back hidden if scrolling up)
      setTextVisible(v >= 0.05);

      // Once image thresholds are crossed, permanently mark as appeared
      if (v >= 0.46) setImg1Appeared(true);
      if (v >= 0.75) setImg2Appeared(true);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Y transforms: image slides up from bottom, then stays clamped at 0vh
  const img1Y = useTransform(scrollYProgress, [0.33, 0.62], ['110vh', '0vh'], { clamp: true });
  const img2Y = useTransform(scrollYProgress, [0.62, 0.92], ['110vh', '0vh'], { clamp: true });

  // Opacity: only used BEFORE the image has permanently appeared
  // Once appeared, we switch to a hard opacity:1 via the state flag
  const img1OpacityTransform = useTransform(scrollYProgress, [0.33, 0.46], [0, 1], { clamp: true });
  const img2OpacityTransform = useTransform(scrollYProgress, [0.62, 0.75], [0, 1], { clamp: true });

  return (
    <section
      ref={sectionRef}
      style={{ height: '350vh', position: 'relative' }}
    >
      {/* Sticky panel — stays pinned while scrolling through the tall section */}
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
        }}
      >
        {/* Centered text — fades in when entering, fades out when scrolling back above */}
        <AnimatePresence>
          {textVisible && (
            <motion.h2
              key="dishes-text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9, ease: 'easeOut' as const }}
              style={{
                fontFamily: '"Canela Light", "Canela", serif',
                fontSize: 'clamp(28px, 4.5vw, 50px)',
                color: '#00382C',
                textAlign: 'center',
                maxWidth: '860px',
                lineHeight: 1.15,
                position: 'relative',
                zIndex: 10,
                padding: '0 24px',
              }}
            >
              Our dishes are born from ancient gestures and new harmonies.
            </motion.h2>
          )}
        </AnimatePresence>

        {/* Left image — slides up from bottom, STAYS VISIBLE once appeared */}
        <motion.div
          style={{
            position: 'absolute',
            left: '6%',
            top: '50%',
            translateY: '-50%',
            y: img1Y,
            // Once permanently appeared, override opacity to 1 so it never fades out
            opacity: img1Appeared ? 1 : img1OpacityTransform,
            width: 'clamp(220px, 26vw, 340px)',
            aspectRatio: '3/4',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 24px 48px rgba(0,0,0,0.18)',
            rotate: 4,
            zIndex: 20,
          }}
        >
          <Image
            src="/wedding-event.jpg"
            alt="Dish presentation"
            fill
            style={{ objectFit: 'cover' }}
          />
        </motion.div>

        {/* Right image — slides up from bottom after left, STAYS VISIBLE once appeared */}
        <motion.div
          style={{
            position: 'absolute',
            right: '6%',
            top: '50%',
            translateY: '-20%',
            y: img2Y,
            // Once permanently appeared, override opacity to 1 so it never fades out
            opacity: img2Appeared ? 1 : img2OpacityTransform,
            width: 'clamp(220px, 26vw, 340px)',
            aspectRatio: '3/4',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 24px 48px rgba(0,0,0,0.18)',
            rotate: -3,
            zIndex: 20,
          }}
        >
          <Image
            src="/restaurant-interior.jpg"
            alt="Dish presentation"
            fill
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
