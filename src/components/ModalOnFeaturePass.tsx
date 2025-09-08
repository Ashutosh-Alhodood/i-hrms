"use client";

import React, { useEffect, useState, useRef } from "react";
import DemoModal from "./DemoModal";

const STORAGE_KEY = "demoModalShown";

export default function ModalOnFeaturePass() {
  const [open, setOpen] = useState(false);
  const shownRef = useRef<boolean>(false);

  useEffect(() => {
    // don't re-open if already shown this session
    const already = sessionStorage.getItem(STORAGE_KEY);
    if (already) {
      shownRef.current = true;
      return;
    }

    // try to find the features section - change selector if needed
    const target = document.querySelector("#features-section");
    if (!target) {
      // fallback: do nothing if target not present
      return;
    }

    // Handler: check whether the target's bottom is <= 0 (scrolled past)
    const checkAndOpen = () => {
      if (shownRef.current) return;
      const rect = target.getBoundingClientRect();
      // If bottom is <= 0 then the entire section is above the viewport
      if (rect.bottom <= 0) {
        shownRef.current = true;
        sessionStorage.setItem(STORAGE_KEY, "1");
        setOpen(true);
      }
    };

    // Use scroll event (simple and compatible). We'll also run check once immediately.
    let scheduled = false;
    const onScroll = () => {
      if (scheduled) return;
      scheduled = true;
      // throttle with rAF to avoid heavy work on scroll
      window.requestAnimationFrame(() => {
        scheduled = false;
        checkAndOpen();
      });
    };

    // Also keep an IntersectionObserver as a reliable backup (works even when user jumps)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // if the section is not intersecting at all -> likely scrolled past (but ensure it's above)
          if (!entry.isIntersecting) {
            // When it's not intersecting, check bounding rect to ensure it is above viewport
            const rect = (entry.target as Element).getBoundingClientRect();
            if (rect.bottom <= 0 && !shownRef.current) {
              shownRef.current = true;
              sessionStorage.setItem(STORAGE_KEY, "1");
              setOpen(true);
            }
          }
        });
      },
      { threshold: [0, 0.01] }
    );

    window.addEventListener("scroll", onScroll, { passive: true });
    obs.observe(target);

    // initial check in case the page loaded already past the section
    checkAndOpen();

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return <DemoModal open={open} onClose={() => setOpen(false)} />;
}