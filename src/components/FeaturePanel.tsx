'use client'

import Image from 'next/image'
import React from 'react'

type FeaturePanelProps = {
  id?: string
  title: string
  subtitle?: string
  text: React.ReactNode
  imageSrc?: string
  imageAlt?: string
  reverse?: boolean
  badge?: string
}

export default function FeaturePanel({
  id,
  title,
  subtitle,
  text,
  imageSrc,
  imageAlt = '',
  reverse = false,
  badge,
}: FeaturePanelProps) {
  return (
    <section id={id} className="max-w-7xl mx-auto py-14 px-6 lg:px-8">
      <div
        className={`grid gap-8 items-center ${
          reverse ? 'lg:grid-cols-12' : 'lg:grid-cols-12'
        }`}
      >
        {/* Left: content OR image depending on reverse */}
        <div
          className={`${
            reverse ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-6'
          }`}
        >
          <div className="rounded-2xl px-8 py-10 bg-gradient-to-br from-white/40 to-white/30 shadow-sm">
            {badge && (
              <div className="inline-block px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-slate-700 mb-4 border">
                {badge}
              </div>
            )}

            <h3 className="text-3xl font-extrabold text-slate-900 mb-3">{title}</h3>
            {subtitle && (
              <p className="mb-4 text-slate-600 max-w-xl">{subtitle}</p>
            )}

            <div className="text-slate-700">{text}</div>

            {/* testimonial/chrome at bottom */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden" aria-hidden>
                {/* placeholder avatar — replace with Image if you have */}
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-900">Rineesh Rafeek</div>
                <div className="text-xs text-slate-500">General Manager · Imprint LLC, Dubai</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className={`${reverse ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-6'}`}>
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-6 flex items-center justify-center">
            {imageSrc ? (
              // Next/Image will  optimize, fallback if missing
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={900}
                height={560}
                className="w-full h-auto rounded-lg object-cover"
                priority
              />
            ) : (
              <div className="h-56 bg-slate-100 rounded-lg w-full" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}