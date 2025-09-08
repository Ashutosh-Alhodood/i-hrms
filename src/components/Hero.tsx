'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  // ensure autoplay on Safari / mobile where muted is required
  useEffect(() => {
    const v = videoRef.current
    if (v) {
      v.muted = true
      v.play().catch(() => { /* autoplay blocked — poster will show */ })
    }
  }, [])

  return (
    <header className="relative header hero overflow-hidden">
      {/* decorative background image (large) */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url("/bg-website-min.webp")', opacity: 1 }}
        aria-hidden
      />

      {/* dark overlay for stronger contrast */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left column: copy */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="space-y-6">
              <div className="inline-block bg-black/60 text-xs tracking-widest rounded-full px-5 py-2 font-medium border border-white/6">
                YOUR ALL-IN-ONE HR SOLUTION, REINVENTED
              </div>

              <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
                HRMS Platform<br/>Made by<br/>HR for HR
              </h1>

              <p className="text-slate-300 max-w-xl mt-4">
                Simplify hiring, onboarding, payroll, and more with a platform crafted by HR experts to make your life easier.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-[#6f5cff] to-[#4b3cff] shadow-lg transform hover:-translate-y-0.5 text-white">
                  Schedule Demo
                </Link>

                <Link href="#watch" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/6 border border-white/10 text-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z"/></svg>
                  Watch Overview
                </Link>
              </div>
            </div>
          </div>

          {/* Right column: device mockup with video inside */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[820px] transform lg:-translate-y-4">
              {/* device frame (use your saved device SVG if needed) */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ borderRadius: '18px' }}>
                {/* poster fallback + background for video */}
                <div className="bg-slate-900/10">
                  <video
                    ref={videoRef}
                    className="w-full h-auto block"
                    src="/heronew.mp4"
                    poster="/graphics/device-mockup.svg"
                    playsInline
                    muted
                    loop
                    preload="metadata"
                    aria-label="Product demo"
                  />
                </div>

                {/* lower keyboard / base shadow image — optional */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[88%] h-20 rounded-lg pointer-events-none"
                     style={{ filter: 'blur(22px)', background: 'linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.9))' }} />
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </header>
  )
}