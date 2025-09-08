'use client'

import React from 'react'

const items = [
  {
    title: 'Smart HR Approach',
    copy:
      'i-HRMS streamlines HR operations with automation for attendance, payroll, and compliance. We focus on making HR hassle-free so teams can focus on people instead of paperwork.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" fill="currentColor"/>
        <path d="M4 20a8 8 0 0116 0H4z" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'We Innovate HR',
    copy:
      'At i-HRMS, innovation drives everything we do. From biometric logins to AI-powered insights, we deliver features that make workforce management smarter and faster.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M11 3a1 1 0 012 0v2a4 4 0 01-4 4H8a1 1 0 010-2h1a2 2 0 002-2V3z" fill="currentColor"/>
        <path d="M8 20h8v-2a4 4 0 00-8 0v2z" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: 'Our HR Values',
    copy:
      'i-HRMS is designed with compliance and transparency in mind. We empower organizations with accurate data, reliable reporting, and robust employee self-service tools.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2l2 5 5 .8-4 3 1.2 5L12 15l-4.2 1.8L9 10 5 7l5-.8 1-4.2z" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: 'Growth with i-HRMS',
    copy:
      'We align our growth with yours. i-HRMS helps organizations scale by improving employee engagement, optimizing HR workflows, and unlocking data-driven decisions.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 17h6v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 7v6h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 17L21 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

export default function WhyChoose() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="why-ihrms-heading"
    >
      {/* premium background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% -10%, rgba(99,102,241,0.12), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(56,189,248,0.10), transparent 55%), linear-gradient(180deg, #ffffff, #fbfbff)'
        }}
      />
      {/* subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(#0f172a0f 1px, transparent 1px), linear-gradient(90deg, #0f172a0f 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-semibold tracking-wide">
            WHY i-HRMS
          </span>
          <h2
            id="why-ihrms-heading"
            className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Why choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">i-HRMS</span>?
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            The all-in-one HRMS that simplifies operations, elevates employee experience, and scales with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="group relative rounded-2xl p-[1px] transition-transform duration-300 hover:-translate-y-1"
              /* gradient border */
              style={{
                background:
                  'linear-gradient(180deg, rgba(99,102,241,0.35), rgba(56,189,248,0.35))'
              }}
            >
              {/* card body */}
              <div className="relative h-full rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-[0_8px_30px_rgba(2,6,23,0.06)] p-6 pt-10">
                {/* soft glow */}
                <div className="pointer-events-none absolute -inset-x-6 -top-6 h-16 opacity-0 group-hover:opacity-100 transition opacity duration-300"
                     style={{ background: 'radial-gradient(40% 60% at 50% 0%, rgba(99,102,241,0.20), transparent 70%)' }} />

                {/* floating circular icon */}
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md grid place-items-center">
                    <div className="text-indigo-600 group-hover:text-cyan-600 transition-colors">{it.icon}</div>
                  </div>
                </div>

                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {it.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {it.copy}
                </p>

                {/* subtle footer line */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Built for modern HR teams
                  </span>
                  <span className="text-xs font-medium text-indigo-600 group-hover:text-cyan-600 transition-colors">
                    Learn more →
                  </span>
                </div>
              </div>

              {/* corner accent */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-2 top-2 h-5 w-5 rounded-full blur-[4px] opacity-0 group-hover:opacity-80 transition"
                style={{ background: i % 2 ? '#60a5fa55' : '#818cf855' }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}