'use client';

import { useRef, useEffect, useState } from 'react';

interface SectionLoaderProps {
  children: React.ReactNode;
  dark?: boolean; // true = dark green bg skeleton
  height?: string;
}

export default function SectionLoader({ children, dark = false, height = '100vh' }: SectionLoaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          // Simulate content load delay for smooth skeleton reveal
          setTimeout(() => setLoaded(true), 300);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // start loading 200px before entering viewport
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const shimmerColor = dark
    ? 'rgba(255,255,255,0.04)'
    : 'rgba(0,56,44,0.04)';

  const shimmerHighlight = dark
    ? 'rgba(255,255,255,0.09)'
    : 'rgba(0,56,44,0.09)';

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {/* Skeleton placeholder shown before section enters viewport */}
      {!loaded && (
        <div
          style={{
            position: visible ? 'absolute' : 'relative',
            inset: 0,
            minHeight: height,
            backgroundColor: dark ? '#00382C' : '#F7F5F1',
            opacity: loaded ? 0 : 1,
            transition: 'opacity 0.4s ease',
            zIndex: 5,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            padding: '80px 24px',
          }}
        >
          <style>{`
            @keyframes skeleton-shimmer {
              0% { background-position: -600px 0; }
              100% { background-position: 600px 0; }
            }
            .skeleton-bar {
              border-radius: 4px;
              background: linear-gradient(
                90deg,
                ${shimmerColor} 25%,
                ${shimmerHighlight} 50%,
                ${shimmerColor} 75%
              );
              background-size: 600px 100%;
              animation: skeleton-shimmer 1.6s infinite linear;
            }
          `}</style>

          {/* Simulated heading skeleton */}
          <div className="skeleton-bar" style={{ width: 'min(480px, 70%)', height: '48px' }} />
          <div className="skeleton-bar" style={{ width: 'min(320px, 50%)', height: '48px' }} />

          {/* Simulated paragraph skeletons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: 'min(560px, 80%)', marginTop: '12px' }}>
            <div className="skeleton-bar" style={{ width: '100%', height: '14px' }} />
            <div className="skeleton-bar" style={{ width: '90%', height: '14px' }} />
            <div className="skeleton-bar" style={{ width: '75%', height: '14px' }} />
          </div>

          {/* Simulated image skeleton */}
          <div className="skeleton-bar" style={{ width: 'min(600px, 90%)', height: '280px', borderRadius: '8px', marginTop: '16px' }} />

          {/* Simulated button skeleton */}
          <div className="skeleton-bar" style={{ width: '160px', height: '44px', borderRadius: '50px' }} />
        </div>
      )}

      {/* Actual content — fades in once loaded */}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      >
        {children}
      </div>
    </div>
  );
}
