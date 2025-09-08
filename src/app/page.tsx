"use client";

import React, { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import WhyChoose from '@/components/WhyChoose';
// import CommunitySection from '@/components/CommunitySection'; ❌ remove
import FeaturesSection from '@/components/FeaturesSection';
import CoreHrSection from "@/components/CoreHrSection";
import DemoModal from "@/components/DemoModal";
// import LogoCarousel from '@/components/LogoCarousel'; ❌ remove
// import FeatureCard from '@/components/FeatureCard'; ❌ remove
import MobileAppSection from "@/components/MobileAppSection";
import FaqSection from "@/components/FaqSection";
import DemoCtaSection from "@/components/DemoCtaSection";

const SESSION_KEY = "demoModalShown";

export default function Page() {
  const featuresRef = useRef<HTMLElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const target = featuresRef.current ?? document.querySelector("#features-section");
    if (!target) return;

    let scheduled = false;
    let disconnected = false;

    const tryOpenIfPassed = () => {
      if (disconnected) return;
      const rect = (target as Element).getBoundingClientRect();
      if (rect.bottom <= 0) {
        sessionStorage.setItem(SESSION_KEY, "1");
        setModalOpen(true);
        cleanup();
      }
    };

    const onScroll = () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(() => {
        scheduled = false;
        tryOpenIfPassed();
      });
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            const rect = (entry.target as Element).getBoundingClientRect();
            if (rect.bottom <= 0) {
              sessionStorage.setItem(SESSION_KEY, "1");
              setModalOpen(true);
              cleanup();
              return;
            }
          }
        }
      },
      { threshold: [0, 0.01] }
    );

    const cleanup = () => {
      if (disconnected) return;
      disconnected = true;
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };

    tryOpenIfPassed();
    window.addEventListener("scroll", onScroll, { passive: true });
    obs.observe(target);

    return () => cleanup();
  }, []);

  return (
    <>
      <div>
        <Hero />
      </div>

      <WhyChoose />
      {/* <CommunitySection /> */}

      <div ref={(el) => { featuresRef.current = el as HTMLElement | null; }} id="features-section">
        <FeaturesSection />
      </div>

      <CoreHrSection durationMs={4200} />
      <MobileAppSection />
      <FaqSection />
      <DemoCtaSection />

      <DemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}