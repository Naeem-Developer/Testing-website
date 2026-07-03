'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const images = [
  "/wedding-event.webp",
  "/limonaia.webp",
  "/restaurant-interior.webp",
  "/hero-bg.webp"
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transition background color when the last image is revealed
  // Images 0, 1, 2 exit from 0->0.75. So transition background from 0.65 to 0.8.
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.6, 0.8],
    ["#FFFFFF", "#c8e4c8"]
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: 'relative',
        height: '400vh',
      }}
    >
      <motion.div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '0 24px',
          backgroundColor, // Animated background
        }}
      >
        {/* Title and Logo adapted to white background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' as const, delay: 0.2 }}
          style={{
            zIndex: 10,
            textAlign: 'center',
            color: '#00382C',
            pointerEvents: 'none',
            width: '100%',
            padding: '0 24px',
            marginBottom: '60px',
          }}
        >

        </motion.div>

        {/* Stacked Images in the center */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '700px', aspectRatio: '4/3' }}>
          {images.map((src, index) => {
            // Calculate the start and end scroll progress for this image's exit
            const startExit = index / images.length;
            const endExit = (index + 1) / images.length;

            // Image slides UP to exit (-120vh ensures it goes fully off screen)
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [startExit, endExit], ["0vh", "-120vh"]);

            // Slight rotation and subtle offset for the stacked effect
            const rotate = (index % 2 === 0 ? 1 : -1) * (index * 2);
            const offsetX = (index % 2 === 0 ? -1 : 1) * (index * 8);

            return (
              <motion.div
                key={index}
                style={{
                  position: 'absolute',
                  inset: 0,
                  y: index === images.length - 1 ? "0vh" : y, // Last image stays fixed
                  x: offsetX,
                  rotate: rotate,
                  zIndex: images.length - index,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  border: '12px solid #fff',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: '4px' }}>
                  <Image
                    src={src}
                    alt={`Landscape ${index + 1}`}
                    fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: '#00382C',
          }}
        >

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' as const }}
            style={{
              width: '1px',
              height: '40px',
              backgroundColor: 'rgba(0,56,44,0.5)',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
