'use client';

import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FamilySection from './components/FamilySection';
import DishesSection from './components/DishesSection';
import RestaurantMenuSection from './components/RestaurantMenuSection';
import SpacesSection from './components/SpacesSection';
import SpacesImagesSection from './components/SpacesImagesSection';
import WelcomeSection from './components/WelcomeSection';
import RestaurantSection from './components/RestaurantSection';
import FoodCarousel from './components/FoodCarousel';
import AboutSection from './components/AboutSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import EventsSection from './components/EventsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

export default function Home() {
  // Scroll-triggered body background color change (mirrors original Diodona behavior)
  useEffect(() => {
    const beigeSection = document.querySelectorAll<HTMLElement>('.menu-beige-section');

    const getClosestSection = () => {
      const viewportCenter = window.innerHeight * 0.6;
      let closest: HTMLElement | null = null;
      let closestDist = Infinity;
      beigeSection.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(viewportCenter - center);
        if (dist < closestDist && rect.top < window.innerHeight && rect.bottom > 0) {
          closestDist = dist;
          closest = section;
        }
      });
      return closest;
    };

    const onScroll = () => {
      const active = getClosestSection();
      // beige sections → body stays beige (remove bg-green)
      // green sections → body stays default
      document.body.classList.toggle('on-beige', !!active);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Page entrance animation
  useEffect(() => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.7s ease';
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 50);
    });
    return () => {
      document.body.style.opacity = '';
      document.body.style.transition = '';
    };
  }, []);

  return (
    <main>
      <Header />
      <section style={{ backgroundColor: 'white', paddingTop: '200px', paddingBottom: '100px' }}>
        <h1
          style={{
            fontFamily: '"Canela Light", "Canela", serif',
            fontSize: 'clamp(40px, 6vw, 76px)',
            fontWeight: 100,
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'center',
            color: '#00382C',
          }}
        >
          Diodona is magic, flavors, nature, passion.
        </h1>
      </section>
      <HeroSection />
      <WelcomeSection />
      <FamilySection />
      <DishesSection />
      <RestaurantMenuSection />
      <SpacesSection />
      <SpacesImagesSection />
      {/* <RestaurantSection /> */}
      {/* <FoodCarousel /> */}
      {/* <AboutSection /> */}
      <LocationSection />
      <ContactSection />
      <EventsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
