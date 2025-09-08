// app/payroll/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PayrollPage() {
  return (
    <main className="antialiased text-slate-900">
      {/* Floating pill header */}
      <header className="fixed left-1/2 -translate-x-1/2 top-6 z-40 w-[min(1400px,calc(100%-96px))]">
        <div
          className="mx-auto rounded-full px-6 py-3 shadow-2xl backdrop-blur-sm bg-black/70 border border-black/30"
          style={{ height: 72 }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/6 flex items-center justify-center ring-1 ring-white/6">
                <span className="text-white font-semibold">GCH</span>
              </div>
              <div className="text-sm text-white font-semibold tracking-tight">i-HRMS</div>
            </div>

            <nav className="flex items-center gap-6">
              <Link href="/company" className="text-white/90 text-sm">Company</Link>
              <Link href="/features" className="text-white/90 text-sm">Features</Link>
              <Link href="/resources" className="text-white/90 text-sm">Resources</Link>
              <Link href="/pricing" className="text-white/90 text-sm">Pricing</Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/login" className="px-4 py-2 rounded-full bg-white text-black text-sm shadow-sm">Login</Link>
              <Link href="/contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 text-white text-sm shadow">
                Let&apos;s Connect
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-28">
        {/* background pattern + overlay */}
        <div
          className="absolute inset-0 -z-10 bg-center bg-cover"
          style={{ backgroundImage: `url('/bg-website-min.webp')` }}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,6,8,0.64) 0%, rgba(6,6,8,0.82) 40%, rgba(4,4,6,0.94) 100%)",
            boxShadow: "inset 0 120px 160px rgba(0,0,0,0.28)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* left content */}
            <div className="lg:col-span-7">
              <div className="text-sm font-semibold text-indigo-300 uppercase tracking-wider">Payroll</div>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Experience the <span className="block">future of payroll processing</span>
              </h1>

              <p className="mt-6 text-lg text-slate-200 max-w-2xl">
                Built for HR teams that demand speed, accuracy and compliance. <strong>i-HRMS</strong> by <strong>GCH</strong> delivers
                automated payroll, robust statutory handling, and clear pay-slips — all in a premium, secure platform.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
                >
                  Start for Free
                </Link>

                <Link
                  href="#watch"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 text-white px-5 py-3 hover:bg-white/12 transition"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-90" aria-hidden>
                    <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
                  </svg>
                  Watch the Demo
                </Link>
              </div>
            </div>

            {/* right visual */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div
                  className="rounded-2xl p-6 shadow-2xl border border-white/10"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,250,0.94))",
                  }}
                >
                  <Image
                    src="/hero-payroll.webp"
                    alt="Payroll preview"
                    width={720}
                    height={660}
                    className="w-full h-auto object-contain rounded-lg"
                    priority
                  />
                </div>

                {/* small floating badges to mimic screenshots */}
                <div className="absolute -top-6 left-6 flex flex-col gap-3 w-[220px]">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-md flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">S</div>
                    <div>
                      <div className="text-sm font-semibold">Sarah Smith</div>
                      <div className="text-xs text-slate-500">Sr. UI/UX Designer · Paid</div>
                    </div>
                    <div className="ml-auto text-sm font-medium text-emerald-600">AED 1,400</div>
                  </div>

                  <div className="bg-white rounded-lg px-3 py-2 shadow-md flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">C</div>
                    <div>
                      <div className="text-sm font-semibold">Clara Kim</div>
                      <div className="text-xs text-slate-500">Sr. UI/UX Designer · Paid</div>
                    </div>
                    <div className="ml-auto text-sm font-medium text-emerald-600">AED 1,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big feature white card */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl bg-white shadow-lg border border-slate-100 p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">Salary</div>
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">Simplify Salary Administration</h2>
                <p className="mt-4 text-slate-600 max-w-2xl">
                  Say goodbye to manual calculations — generate comprehensive salary reports, manage components,
                  and process payroll with built-in statutory calculations and digital payslips.
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-end">
                <div className="w-full max-w-[420px] rounded-lg overflow-hidden">
                  <Image
                    src="/efficiency.webp"
                    alt="Salary admin"
                    width={420}
                    height={280}
                    className="rounded-lg object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column features */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="rounded-2xl bg-white p-8 border border-slate-100 shadow-lg">
              <div className="text-xs font-semibold text-indigo-500 uppercase">Mobile Payroll</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">Anytime, Anywhere Salary Access</h3>
              <p className="mt-3 text-slate-600">
                Employees can securely view and download payslips from mobile — improving transparency and reducing HR queries.
              </p>

              <div className="mt-6 w-full">
                <Image src="/salary.webp" alt="Mobile payroll" width={860} height={420} className="rounded-lg object-contain" />
              </div>
            </article>

            <article className="rounded-2xl bg-white p-8 border border-slate-100 shadow-lg">
              <div className="text-xs font-semibold text-indigo-500 uppercase">Compliance</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">Compliance Made Easy</h3>
              <p className="mt-3 text-slate-600">
                Automate statutory calculations, social security and gratuity — ensure payroll adheres to local regulations.
              </p>

              <div className="mt-6 w-full">
                <Image src="/final.webp" alt="Compliance" width={860} height={420} className="rounded-lg object-contain" />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Three-feature row */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-sm font-semibold text-indigo-500 uppercase">Features</div>
          <h3 className="mt-4 text-3xl md:text-4xl font-extrabold">Rediscover the HR operations</h3>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Comprehensive payroll features designed for scaling teams.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl p-8 bg-black text-white shadow-lg">
              <div className="mb-6">
                <Image src="/wellness.webp" alt="Expense" width={420} height={260} className="rounded-lg object-cover" />
              </div>
              <h4 className="text-xl font-bold">Automated Expense Management</h4>
              <p className="mt-3 text-sm text-white/80">Manage expense claims, approvals and payouts integrated with payroll.</p>
            </div>

            <div className="rounded-2xl p-8 bg-indigo-50 border border-indigo-100 shadow">
              <div className="mb-6">
                <Image src="/analytics.webp" alt="Analytics" width={420} height={260} className="rounded-lg object-contain" />
              </div>
              <h4 className="text-xl font-bold">Protecting Your Payroll Data</h4>
              <p className="mt-3 text-sm text-slate-700">Encryption, audit logs and granular access controls keep payroll secure.</p>
            </div>

            <div className="rounded-2xl p-8 bg-indigo-600 text-white shadow-lg">
              <div className="mb-6">
                <div className="w-full h-[160px] rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                  <Image src="/wellness.webp" alt="Wellness" width={240} height={140} className="object-contain" />
                </div>
              </div>
              <h4 className="text-xl font-bold">Empower Financial Wellness</h4>
              <p className="mt-3 text-sm text-white/90">Salary-on-demand, payroll-linked benefits and integrated payments to support employees.</p>
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
            <p className="mt-3 text-slate-600">Common questions about i-HRMS payroll capabilities by GCH.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Can I customize i-HRMS to suit my organization's needs?",
                a: "Yes — i-HRMS is modular and configurable. Tailor payroll components, approval flows and reports to match your policies.",
              },
              {
                q: "What security measures protect payroll data?",
                a: "We use encryption at rest/in transit, RBAC, audit logs and optional SSO (SAML / OAuth).",
              },
              {
                q: "Does i-HRMS support local statutory calculations?",
                a: "Yes — we support region-specific statutory calculations including GCC and India, configurable per client.",
              },
              {
                q: "How do updates and support work?",
                a: "Hosted customers receive automatic patches. Support options include email, ticketing and enterprise SLAs.",
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
              <h3 className="text-2xl font-bold">Want to learn more about i-HRMS?</h3>
              <p className="mt-3 text-slate-700">Book a personalized demo with GCH and see how i-HRMS fits your payroll needs.</p>
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