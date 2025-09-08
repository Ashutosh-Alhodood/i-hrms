'use client'
import React from 'react'

const LOGOS = [
  '/logos/logo1.svg',
  '/logos/logo2.svg',
  '/logos/logo3.svg',
  '/logos/logo4.svg',
  '/logos/logo5.svg',
  '/logos/logo6.svg'
]

export default function LogoCarousel({ logos = LOGOS }: { logos?: string[] }) {
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <div className="flex gap-6 py-6 animate-marquee will-change-transform">
          {logos.concat(logos).map((src, i) => (
            <div key={src + '-' + i} className="flex items-center justify-center min-w-[160px] h-12 bg-white border rounded shadow-sm">
              <img src={src} alt={`client-${i}`} className="h-8 object-contain" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </div>
  )
}