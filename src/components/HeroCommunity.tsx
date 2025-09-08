import React from "react";

/**
 * HeroCommunity
 * - SVG strokes for nested rounded rects (gradient + glow)
 * - avatars loaded from /public/avatars/
 * - CTA center button
 *
 * Requires Tailwind + the CSS rules provided below in globals.css
 */
export default function HeroCommunity() {
  return (
    <section className="relative w-full bg-black overflow-hidden section community">
      {/* Background tiled people grid (put bg-people-grid.webp into /public) */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/bg-people-grid.webp')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/82" aria-hidden="true" />

      <div className="relative max-w-[1200px] mx-auto px-6 py-[80px]">
        <div className="text-center text-white mb-12">
          <span className="inline-block bg-gradient-to-r from-[#6f3cff] to-[#bb2af9] text-sm px-3 py-1 rounded-full">
            LOYALTRI COMMUNITY
          </span>

          <h1 className="mt-6 text-4xl lg:text-6xl font-extrabold leading-tight">
            Access to the fastest growing <br />
            HR community
          </h1>

          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Submit ideas, discuss trending topics, gain insights — and access
            premium features free forever.
          </p>
        </div>

        {/* center area with SVG rings behind content */}
        <div className="relative h-[420px] lg:h-[540px] flex items-center justify-center">
          {/* SVG - rings + glow */}
          <svg
            className="absolute rings-svg"
            viewBox="0 0 920 420"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
          >
            <defs>
              <linearGradient id="ringGrad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#6f3cff" stopOpacity="1" />
                <stop offset="60%" stopColor="#9a5cff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#bb2af9" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="ringInner" x1="0" x2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
              </linearGradient>

              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="14" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outer rounded rect stroke (largest) */}
            <rect
              x="40"
              y="28"
              rx="120"
              ry="120"
              width="840"
              height="364"
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="2.6"
              opacity="0.18"
              vectorEffect="non-scaling-stroke"
              filter="url(#glow)"
            />

            {/* Middle rounded rect stroke */}
            <rect
              x="120"
              y="78"
              rx="100"
              ry="100"
              width="680"
              height="264"
              fill="none"
              stroke="#0b0b0b"
              strokeWidth="2.4"
              opacity="0.28"
            />

            {/* Inner rounded rect stroke (thin purple outline) */}
            <rect
              x="220"
              y="118"
              rx="60"
              ry="60"
              width="480"
              height="184"
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="2.8"
              opacity="0.95"
              vectorEffect="non-scaling-stroke"
            />

            {/* subtle inner ellipse halo behind CTA */}
            <ellipse
              cx="460"
              cy="210"
              rx="180"
              ry="72"
              fill="none"
              stroke="#0f2b5f"
              strokeWidth="28"
              opacity="0.06"
              filter="url(#glow)"
            />
          </svg>

          {/* The inner card (avatars + CTA) */}
          <div className="relative w-[600px] md:w-[480px] sm:w-[360px] h-[340px] rounded-[48px] bg-black/20 border border-white/10 backdrop-blur-md shadow-2xl flex items-center justify-center z-10">
            {/* inner overlay for depth */}
            <div className="absolute inset-0 rounded-[48px] pointer-events-none inner-gradient-blend z-0" />

            {/* Avatars - use files in public/avatars/av1.jpg ... av6.jpg */}
            <img
              src="/avatars/av1.jpg"
              alt="avatar 1"
              className="absolute left-[6%] top-[12%] w-16 h-16 rounded-full border-4 border-black/60 shadow-xl z-20"
            />
            <img
              src="/avatars/av2.jpg"
              alt="avatar 2"
              className="absolute left-[30%] top-[6%] w-20 h-20 rounded-full border-4 border-black/60 shadow-2xl z-20"
            />
            <img
              src="/avatars/av3.jpg"
              alt="avatar 3"
              className="absolute top-[6%] right-[26%] w-16 h-16 rounded-full border-4 border-black/60 shadow-xl z-20"
            />
            <img
              src="/avatars/av4.jpg"
              alt="avatar 4"
              className="absolute left-[14%] bottom-[12%] w-14 h-14 rounded-full border-4 border-black/60 shadow-xl z-20"
            />
            <img
              src="/avatars/av5.jpg"
              alt="avatar 5"
              className="absolute right-[10%] bottom-[18%] w-16 h-16 rounded-full border-4 border-black/60 shadow-xl z-20"
            />
            <img
              src="/avatars/av1.jpg"
              alt="avatar 6"
              className="absolute left-[54%] bottom-[20%] w-14 h-14 rounded-full border-4 border-black/60 shadow-xl z-20"
            />

            {/* CTA (center) */}
            <a
              href="#"
              className="cta-gradient community-cta relative inline-flex items-center gap-3 px-10 py-4 rounded-[999px] font-semibold text-white shadow-cta z-30"
            >
              <span>Join our Community. It’s FREE</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-2"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 5l6 7-6 7"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer stat */}
        <div className="text-center mt-8">
          <p className="text-sm text-[#ff2e6d]">
            5,000+ HR professionals shape our product to serve HR needs
            seamlessly.
          </p>
        </div>
      </div>
    </section>
  );
}