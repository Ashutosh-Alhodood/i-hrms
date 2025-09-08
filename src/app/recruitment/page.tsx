// app/recruitment/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Recruitment page (premium UI)
 * - Intentionally DOES NOT render a page-level header (use global header in layout)
 * - Implements hero with centered floating stat and a small KPI widget
 * - Adds three equal-height feature cards (black / gray / purple) like your screenshots
 *
 * Required images in public/ (update names if different):
 * - /bg-website-min.webp
 * - /recruitment-hero.webp
 * - /hero2.webp
 * - /ats.webp
 * - /job.webp
 * - /auto.webp
 * - /stats.webp (or /recruitment-case.webp)
 */

export default function RecruitmentPage() {
  return (
    <main className="antialiased text-slate-900">
      {/*
        NOTE: No header here. If you still see a duplicate pill header,
        remove the header render from app/layout.tsx (or from the page that
        currently renders it as well as the layout).
      */}

      {/* HERO (leave top padding to accomodate global header) */}
      <section className="relative overflow-hidden pt-36">
        {/* bg + overlay */}
        <div
          className="absolute inset-0 -z-10 bg-center bg-cover"
          style={{ backgroundImage: "url('/bg-website-min.webp')" }}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(180deg, rgba(6,6,8,0.7) 0%, rgba(6,6,8,0.85) 48%, rgba(4,4,6,0.95) 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* left text */}
            <div className="lg:col-span-6">
              <div className="text-sm font-semibold text-indigo-300 uppercase">Recruitment</div>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Hire now with
                <span className="block">complete confidence</span>
              </h1>

              <p className="mt-6 text-lg text-slate-200 max-w-2xl">
                We'll handle compliance, payroll and HR operations. Discover the power of{" "}
                <strong>i-HRMS</strong> by <strong>GCH</strong> — your all-in-one recruitment solution with advanced
                filters, analytics and automation.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 font-semibold shadow"
                >
                  Start for Free
                </Link>

                <Link
                  href="#watch"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 text-white px-5 py-3"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
                  </svg>
                  Watch the Demo
                </Link>
              </div>
            </div>

            {/* right visual */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* main visual card */}
                <div className="rounded-2xl bg-white/95 p-6 shadow-2xl border border-white/10">
                  <Image
                    src="/recruitment-hero.webp"
                    alt="Recruitment dashboard preview"
                    width={720}
                    height={520}
                    className="w-full h-auto object-contain rounded"
                    priority
                  />
                </div>

                {/* centered floating stat below visual */}
                <div
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2"
                  style={{ width: "min(380px, calc(100% - 48px))" }}
                >
                  <div className="mx-auto rounded-xl p-4 bg-white shadow-lg border border-black/5 flex items-start gap-3">
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-slate-700">Source Diversity</div>
                      <div className="text-2xl font-bold text-slate-900 mt-1">35%</div>
                      <div className="text-xs text-slate-500 mt-1">LinkedIn, referrals &amp; more</div>
                    </div>

                    <div className="hidden sm:flex flex-none w-14 h-14 rounded-md bg-indigo-50 items-center justify-center text-indigo-600 font-bold">
                      %
                    </div>
                  </div>
                </div>

                {/* small KPI anchored top-right on lg */}
                <div className="hidden lg:block absolute -top-8 right-0">
                  <div className="w-36 rounded-xl p-3 bg-white/90 shadow border border-black/5 text-center">
                    <div className="text-xs font-semibold text-slate-700">Jobs Posted</div>
                    <div className="text-lg font-bold text-slate-900 mt-1">3,612</div>
                    <div className="text-xs text-green-500 mt-1">+12.4%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark callout */}
      <section className="py-14 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl p-12 bg-[#0b0b0d] border border-white/6 shadow-[0_24px_80px_rgba(2,6,23,0.6)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="text-xs font-semibold text-indigo-300 uppercase">Recruitment</div>
                <h2 className="mt-3 text-4xl font-extrabold text-white">Advanced Filters, Smarter Hiring</h2>
                <p className="mt-4 text-slate-300 max-w-xl">
                  i-HRMS' recruitment suite helps you quickly find the right candidates with advanced filters by skills,
                  experience, availability and more. Automate shortlists and make collaborative hiring decisions.
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-end">
                <div className="w-full max-w-[420px]">
                  <Image src="/hero2.webp" alt="Recruitment widgets" width={520} height={320} className="rounded-lg object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE-COLUMN FEATURE CARDS (as in screenshots) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-sm font-semibold text-indigo-500 uppercase">Features</div>
          <h3 className="mt-4 text-3xl md:text-4xl font-extrabold">Rediscover the HR operations</h3>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Revolutionize your HR management with comprehensive features</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Left - Dark card */}
            <article className="rounded-2xl p-8 shadow-lg h-full flex flex-col justify-between bg-slate-900 text-white">
              <div>
                <div className="mb-6">
                  <Image src="/ats.webp" alt="Hands-Free Smart Actions" width={420} height={260} className="rounded-lg object-contain" />
                </div>
                <h4 className="text-2xl font-bold">Hands-Free Smart Actions</h4>
                <p className="mt-4 text-slate-300">
                  Simplify your workflow with hands-free automated action task templates. Pre-built templates automate onboarding,
                  reviews and offboarding to keep processes consistent.
                </p>
              </div>

              <div className="mt-6">
                <Link href="/features" className="inline-flex items-center gap-2 rounded-full bg-white/6 px-4 py-2 text-sm font-semibold text-white">
                  Learn more
                </Link>
              </div>
            </article>

            {/* Middle - Light gray card */}
            <article className="rounded-2xl p-8 shadow h-full flex flex-col justify-between bg-slate-100 text-slate-900 border border-slate-200">
              <div>
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-[260px] h-[120px] rounded-lg bg-white/80 flex items-center justify-center">
                    {/* small visual placeholder - image optional */}
                    <Image src="/job.webp" alt="HR Suite" width={220} height={120} className="object-contain" />
                  </div>
                </div>

                <h4 className="text-2xl font-bold">i-HRMS HR Suite</h4>
                <p className="mt-4 text-slate-700">
                  i-HRMS seamlessly integrates with your HR ecosystem — payroll, performance tools and more. Acts as the central hub
                  for your HR activities.
                </p>
              </div>

              <div className="mt-6">
                <Link href="/features" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                  Explore suite
                </Link>
              </div>
            </article>

            {/* Right - Purple card */}
            <article className="rounded-2xl p-8 shadow-lg h-full flex flex-col justify-between bg-indigo-600 text-white">
              <div>
                <div className="mb-6">
                  <Image src="/stats.webp" alt="Data-driven Insights" width={420} height={260} className="rounded-lg object-contain" />
                </div>

                <h4 className="text-2xl font-bold">Data-Driven Insights</h4>
                <p className="mt-4 text-white/90">
                  Make informed decisions with i-HRMS analytics dashboard. Track recruitment metrics, monitor candidate progress,
                  and get leadership-ready exports.
                </p>
              </div>

              <div className="mt-6">
                <Link href="/analytics" className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-semibold text-white">
                  See analytics
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURES grid (equal height cards) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <article className="rounded-2xl bg-white p-8 border border-slate-100 shadow h-full flex flex-col">
              <div className="text-xs font-semibold text-indigo-500 uppercase">ATS</div>
              <h4 className="mt-3 text-2xl font-bold text-slate-900">Advanced ATS for Data-Driven Hiring</h4>
              <p className="mt-3 text-slate-600 flex-0">
                Powerful candidate pipelines, scoring and analytics so you can identify top talent and reduce time-to-hire.
              </p>
              <div className="mt-6 flex-0 w-full">
                <div className="w-full rounded-lg overflow-hidden bg-white">
                  <Image src="/ats.webp" alt="ATS preview" width={760} height={420} className="w-full h-[220px] object-contain" />
                </div>
              </div>
            </article>

            <article className="rounded-2xl bg-white p-8 border border-slate-100 shadow h-full flex flex-col">
              <div className="text-xs font-semibold text-indigo-500 uppercase">Automation</div>
              <h4 className="mt-3 text-2xl font-bold text-slate-900">Automated Task Management</h4>
              <p className="mt-3 text-slate-600 flex-0">Save time with prebuilt actions for scheduling interviews, sending assessments and notifying stakeholders.</p>
              <div className="mt-6 flex-0 w-full">
                <div className="w-full rounded-lg overflow-hidden bg-white">
                  <Image src="/auto.webp" alt="Automation preview" width={760} height={420} className="w-full h-[220px] object-contain" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Collaborative Hiring + testimonial + FAQ (kept from your earlier structure) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="text-xs font-semibold text-indigo-500 uppercase">Hiring</div>
              <h3 className="mt-2 text-3xl font-bold text-slate-900">Collaborative Hiring</h3>
              <p className="mt-4 text-slate-700">
                Foster a team-based approach to recruitment. Streamline communication, share candidate profiles, and make hiring decisions together.
              </p>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg rounded-xl bg-slate-100 p-10">
                <Image src="/collab.webp" alt="Collaborative view" width={560} height={300} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* FAQ + CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">FAQ</div>
            <h2 className="mt-4 text-3xl lg:text-4xl font-extrabold text-slate-900">Frequently asked questions</h2>
            <p className="mt-3 text-slate-600">Common questions about i-HRMS recruitment capabilities.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Can I customize the ATS pipelines to match my hiring stages?",
                a: "Yes — i-HRMS provides flexible pipelines, custom stages and scoring rules so you can match your hiring process.",
              },
              {
                q: "Can i-HRMS post jobs to external job boards automatically?",
                a: "Yes — our integration layer supports major job boards and social channels for automated posting.",
              },
              {
                q: "How secure is candidate data?",
                a: "Candidate data is protected with encryption at rest/in-transit, RBAC and audit logs — suitable for enterprise compliance.",
              },
              {
                q: "Does i-HRMS support interview scheduling and assessments?",
                a: "Yes — schedule interviews, send assessments and automate notifications to candidates and hiring managers.",
              },
            ].map((it, idx) => (
              <details key={idx} className="rounded-lg border border-slate-100 p-4">
                <summary className="cursor-pointer font-medium">{it.q}</summary>
                <div className="mt-3 text-slate-600">{it.a}</div>
              </details>
            ))}
          </div>

          <div className="mt-12">
            <div className="rounded-2xl bg-indigo-50 p-10 text-center">
              <h3 className="text-2xl font-bold">Want to Learn more about i-HRMS?</h3>
              <p className="mt-3 text-slate-700">Book a personalized demo with GCH and see how i-HRMS transforms your recruitment process.</p>
              <div className="mt-6">
                <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow">
                  Book your Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}