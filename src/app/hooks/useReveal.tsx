'use client'
import { useEffect, useRef } from 'react'

/**
 * useReveal — adds `data-reveal="true"` attribute and toggles `data-revealed="true"`
 * when element enters viewport. Respects prefers-reduced-motion.
 *
 * Usage:
 * const ref = useReveal();
 * <div ref={ref} className="reveal">...</div>
 */
export default function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      // if user prefers reduced motion, reveal immediately
      el.setAttribute('data-revealed', 'true')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', 'true')
            // Optionally unobserve so animation runs once
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return ref
}