'use client'

import React from 'react'
import Link from 'next/link'

const avatars = [
  '/avatars/av1.jpg',
  '/avatars/av2.jpg',
  '/avatars/av3.jpg',
  '/avatars/av4.jpg',
  '/avatars/av5.jpg',
  '/avatars/av6.jpg',
]

export default function CommunitySection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* subtle tiled background (optional: replace with your blurred grid/map) */}
      <div
        className="absolute inset-0 bg-[url('/bg-people-grid.webp')] bg-center bg-cover opacity-20 pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 lg:py-28">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#2b2135] text-xs text-[#e7dff6] tracking-wider font-medium rounded-full px-4 py-2">
            LOYALTRI COMMUNITY
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Access to the fastest growing <br className="hidden lg:inline" /> HR community
          </h2>

          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Submit ideas, discuss trending topics, gain insights — and access premium features free forever.
          </p>
        </div>

        {/* center visual */}
        <div className="mt-12 flex items-center justify-center">
          <div className="relative w-[84%] max-w-[920px] md:max-w-[1100px]">
            {/* concentric rounded rectangles as SVG */}
            <div className="relative">
              <svg viewBox="0 0 1200 520" className="w-full h-auto" preserveAspectRatio="xMidYMid meet" aria-hidden>
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* large rounded rect */}
                <rect x="40" y="40" rx="90" ry="90" width="1120" height="440"
                      fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                <rect x="120" y="100" rx="70" ry="70" width="960" height="320"
                      fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="2" />
                <rect x="260" y="160" rx="48" ry="48" width="680" height="200"
                      fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                <rect x="380" y="200" rx="32" ry="32" width="440" height="120"
                      fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />

                {/* faint inner glow lines */}
                <rect x="40" y="40" rx="90" ry="90" width="1120" height="440"
                      fill="none" stroke="rgba(111,92,255,0.02)" strokeWidth="14" filter="url(#glow)" opacity="0.02" />
              </svg>

              {/* avatar bubbles positioned absolutely over SVG */}
              <div className="absolute inset-0 pointer-events-none">
                {/* center CTA */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Link href="/community" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-white/10 text-white text-lg font-medium shadow-[0_8px_32px_rgba(71,80,255,0.12)]">
                    <span className="px-6 py-2 rounded-full bg-gradient-to-r from-[#6f5cff] to-[#4b3cff] text-white shadow-sm">Join our Community. It’s FREE</span>
                    <svg className="ml-4 w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>

                {/* avatars - positions tuned for the SVG above */}
                <Avatar pos={{left:'18%', top:'45%'}} src={avatars[0]} alt="avatar 1" />
                <Avatar pos={{left:'28%', top:'30%'}} src={avatars[1]} alt="avatar 2" />
                <Avatar pos={{left:'42%', top:'22%'}} src={avatars[2]} alt="avatar 3" />
                <Avatar pos={{left:'60%', top:'26%'}} src={avatars[3]} alt="avatar 4" />
                <Avatar pos={{left:'78%', top:'34%'}} src={avatars[4]} alt="avatar 5" />
                <Avatar pos={{left:'65%', top:'68%'}} src={avatars[5]} alt="avatar 6" />

                {/* small icon-badges (like thumbs/chat) */}
                <Badge pos={{left:'20%', top:'18%'}} icon="👍" />
                <Badge pos={{left:'85%', top:'14%'}} icon="⏳" />
                <Badge pos={{left:'88%', top:'65%'}} icon="💬" />
              </div>
            </div>
          </div>
        </div>

        {/* stat line */}
        <div className="mt-12 text-center">
          <p className="text-slate-300">
            <span className="text-rose-500 font-semibold">5,000+</span> HR professionals shape our product to serve HR needs seamlessly.
          </p>
        </div>
      </div>
    </section>
  )
}

/* Avatar helper component */
function Avatar({ pos, src, alt }: { pos: { left: string; top: string }; src: string; alt: string }) {
  return (
    <div
      className="absolute"
      style={{
        left: pos.left,
        top: pos.top,
        transform: 'translate(-50%,-50%)'
      }}
    >
      <div className="w-16 h-16 rounded-full ring-2 ring-white/10 overflow-hidden shadow-md bg-slate-900">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

/* small badge helper */
function Badge({ pos, icon }: { pos: { left: string; top: string }; icon: string }) {
  return (
    <div style={{ left: pos.left, top: pos.top, transform: 'translate(-50%,-50%)' }} className="absolute">
      <div className="w-10 h-10 rounded-full bg-black/60 border border-white/8 flex items-center justify-center text-white shadow-[0_8px_20px_rgba(111,92,255,0.12)]">
        <span className="text-sm">{icon}</span>
      </div>
    </div>
  )
}