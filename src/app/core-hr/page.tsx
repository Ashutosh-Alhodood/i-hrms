"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

/**
 * Premium CoreHRPage - text updated to reference i-HRMS (product) and GCH (company)
 *
 * Tailwind required.
 */

const FAQ_ITEMS = [
  {
    q: "Can I customize i-HRMS to suit the specific needs of my organization?",
    a: "Certainly! i-HRMS is designed to be highly customizable. You can tailor the software to meet your organization's unique requirements and workflows. GCH offers professional services to help with customizations and integrations if needed.",
  },
  {
    q: "What security measures does i-HRMS have in place to protect our HR data?",
    a: "We implement industry best practices: encrypted data at rest and in transit, role-based access control, audit logs, and optional SSO integrations (SAML / OAuth). GCH conducts regular security reviews and maintains operational controls for hosted deployments.",
  },
  {
    q: "What is the pricing structure for i-HRMS?",
    a: "We offer modular pricing — pay for the modules you need (Core HR, Payroll, Recruitment, Mobile App, etc.). Contact GCH sales for customized quotes and enterprise plans that match your organization’s scale and integrations.",
  },
  {
    q: "Can i-HRMS integrate with other existing HR or business systems?",
    a: "Yes — i-HRMS provides APIs and prebuilt connectors for common payroll, accounting and SSO providers to make integrations seamless. GCH can assist with custom connectors where required.",
  },
  {
    q: "How often does i-HRMS release updates, and are they automatic?",
    a: "We release improvements regularly. Security patches and critical fixes are applied automatically for hosted customers; major feature releases are announced in advance with migration notes where required.",
  },
  {
    q: "What kind of customer support can I expect from GCH for i-HRMS?",
    a: "Support includes email, ticketing and optional premium onboarding with SLA-backed support for enterprise customers. GCH offers onboarding services, training and integration assistance to help you get the most from i-HRMS.",
  },
];

export default function CoreHRPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first FAQ open by default

  function toggleFAQ(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <main className="antialiased text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ paddingTop: "96px" }}>
        <div
          className="absolute inset-0 -z-10 bg-center bg-cover"
          style={{ backgroundImage: "url('/bg-website-min.webp')" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,6,8,0.62) 0%, rgba(6,6,8,0.78) 40%, rgba(4,4,6,0.92) 100%)",
            boxShadow: "inset 0 120px 160px rgba(0,0,0,0.28)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="inline-block rounded-full bg-white/6 px-3 py-1 text-xs font-semibold text-indigo-200 tracking-wide">
                CORE HR
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
                Employee
                <span className="block">
                  Management <span className="text-indigo-400">Simplified</span>
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-200 max-w-xl">
                Built for HR teams that value speed, accuracy and modern UX — <strong>i-HRMS</strong> from GCH combines attendance,
                payroll, recruitment and analytics in one elegant, scalable platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.18)] hover:-translate-y-0.5 transition"
                >
                  Start for Free
                </Link>

                <Link
                  href="#watch"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-5 py-3 text-sm text-white/90 hover:bg-white/12 transition"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-90">
                    <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
                  </svg>
                  Watch the Demo
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div
                  className="rounded-2xl"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,250,0.92))",
                    padding: 12,
                    borderRadius: 18,
                    boxShadow: "0 40px 80px rgba(2,6,23,0.55)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src="/hero-corehr.webp"
                      alt="Core HR preview"
                      width={760}
                      height={520}
                      className="w-full h-auto block"
                    />
                  </div>
                </div>

                <div
                  className="absolute -top-6 right-6 w-64 rounded-xl p-3 shadow-2xl ring-1 ring-black/20"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(245,245,246,0.96))",
                    border: "1px solid rgba(2,6,23,0.06)",
                  }}
                >
                  <div className="flex gap-3 items-start">
                    <div className="flex-none w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 ring-1 ring-black/5">
                      ⏱
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Over time Policies</div>
                      <div className="text-xs text-slate-500 mt-1">
                        Define rules for early/late entry, breaks and overtime with automated enforcement.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-26px] w-56 h-14 rounded-full blur-3xl opacity-40"
                  style={{ background: "radial-gradient(circle, rgba(99,102,241,0.14), rgba(99,102,241,0) 50%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-sm font-semibold text-indigo-500 uppercase">Features</div>
            <h3 className="mt-4 text-3xl md:text-4xl font-extrabold">Features for your business</h3>
            <p className="mt-3 text-slate-600">
              Comprehensive modules built to scale — scheduling, documents, assets, leave and more.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <div className="space-y-8">
              <article className="rounded-2xl p-8 bg-white border border-slate-100 shadow-[0_10px_30px_rgba(2,6,23,0.06)] flex items-center gap-6 hover:-translate-y-1 transition">
                <div className="flex-1 text-left">
                  <div className="text-xs font-semibold text-indigo-500 uppercase">Shift</div>
                  <h4 className="mt-2 text-2xl font-bold">Flexible Shift Management</h4>
                  <p className="mt-3 text-slate-600">Handle open shifts, kiosk sign-ins, shift swaps and optimized allocations.</p>
                </div>
                <div className="w-44">
                  <Image src="/shift.webp" alt="Shift" width={220} height={150} className="rounded-lg" />
                </div>
              </article>

              <article className="rounded-2xl p-8 bg-white border border-slate-100 shadow-[0_10px_30px_rgba(2,6,23,0.06)] flex items-center gap-6 hover:-translate-y-1 transition">
                <div className="flex-1 text-left">
                  <div className="text-xs font-semibold text-indigo-500 uppercase">Document</div>
                  <h4 className="mt-2 text-2xl font-bold">Streamlined Document Management</h4>
                  <p className="mt-3 text-slate-600">Expiry reminders, employee uploads and centralized compliance for your organization.</p>
                </div>
                <div className="w-44">
                  <Image src="/doc.webp" alt="Document" width={220} height={150} className="rounded-lg" />
                </div>
              </article>
            </div>

            <div className="space-y-8">
              <article className="rounded-2xl p-8 bg-white border border-slate-100 shadow-[0_10px_30px_rgba(2,6,23,0.06)] flex items-center gap-6 hover:-translate-y-1 transition">
                <div className="flex-1 text-left">
                  <div className="text-xs font-semibold text-indigo-500 uppercase">Asset</div>
                  <h4 className="mt-2 text-2xl font-bold">Efficient Asset Management</h4>
                  <p className="mt-3 text-slate-600">Track warranties, assign equipment, and maintain audit-ready asset records.</p>
                </div>
                <div className="w-44">
                  <Image src="/asset.webp" alt="Asset" width={220} height={150} className="rounded-lg" />
                </div>
              </article>

              <article className="rounded-2xl p-8 bg-white border border-slate-100 shadow-[0_10px_30px_rgba(2,6,23,0.06)] flex items-center gap-6 hover:-translate-y-1 transition">
                <div className="flex-1 text-left">
                  <div className="text-xs font-semibold text-indigo-500 uppercase">Leave</div>
                  <h4 className="mt-2 text-2xl font-bold">Compliance-Centric Leave Management</h4>
                  <p className="mt-3 text-slate-600">Policy enforcement, accruals and legal compliance built in.</p>
                </div>
                <div className="w-44">
                  <Image src="/leave.webp" alt="Leave" width={220} height={150} className="rounded-lg" />
                </div>
              </article>
            </div>
          </div>

          {/* two highlight cards only */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl p-8 bg-slate-50 border border-slate-100 shadow flex items-center gap-6">
              <div className="flex-1">
                <h5 className="text-lg font-semibold mb-2">Automated Policies</h5>
                <p className="text-slate-600">Enforce consistent treatment for entries, breaks and overtime with flexible rules and automated enforcement.</p>
              </div>
              <div className="w-36 flex-shrink-0">
                <Image src="/policy.webp" alt="Policy" width={140} height={90} className="rounded-lg object-contain" />
              </div>
            </div>

            <div className="rounded-2xl p-8 bg-indigo-600 text-white shadow-lg flex items-center gap-6">
              <div className="flex-1">
                <h5 className="text-lg font-semibold mb-2">Instant Reports</h5>
                <p className="text-white/90">Gain actionable metrics for turnover, attendance and productivity — exportable and shareable across teams.</p>
              </div>
              <div className="w-36 flex-shrink-0">
                <Image src="/analytics.webp" alt="Analytics" width={140} height={90} className="rounded-lg object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - improved UI */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-white/6 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[linear-gradient(0deg,rgba(255,255,255,0.01),rgba(255,255,255,0.02))]">
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold text-indigo-300 uppercase">Testimonials</span>
              <h3 className="mt-4 text-3xl lg:text-4xl font-bold text-white/95">i-HRMS Core HR Cases</h3>
              <p className="mt-4 text-slate-300 max-w-lg">
                How i-HRMS streamlines HR processes, enhances productivity, and empowers teams to achieve more. Real results from customers using i-HRMS.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-indigo-400 text-lg font-bold">+15.5%</div>
                  <div className="text-slate-300">Faster leave reimbursement completion by HR teams using i-HRMS.</div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-indigo-400 text-lg font-bold">+8%</div>
                  <div className="text-slate-300">Faster authorization rates due to optimized workflows in i-HRMS.</div>
                </div>

                <div className="mt-4">
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 rounded-full bg-white/6 px-4 py-2 text-sm font-semibold text-white"
                  >
                    Read case studies
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-xl overflow-hidden border border-white/8 shadow-[0_30px_80px_rgba(2,6,23,0.6)] bg-black/50">
                <Image src="/policy.webp" alt="Case study" width={900} height={520} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">FAQ</div>
            <h2 className="mt-4 text-3xl lg:text-4xl font-extrabold text-slate-900">Frequently asked questions</h2>
            <p className="mt-3 text-slate-600">Common questions about i-HRMS and GCH&apos;s Core HR capabilities.</p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto space-y-3">
            {FAQ_ITEMS.map((item, i) => {
              const open = openIndex === i;
              return (
                <div key={i} className="rounded-lg border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(i)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between px-4 py-4 text-left bg-white hover:bg-slate-50 transition"
                  >
                    <span className="text-slate-900 font-medium">{item.q}</span>
                    <svg
                      className={`w-5 h-5 text-slate-500 transform transition-transform ${open ? "rotate-180" : "rotate-0"}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <div
                    className={`px-4 pb-4 text-slate-700 transition-all duration-200 ${open ? "block" : "hidden"}`}
                  >
                    {item.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOK YOUR DEMO - white background version */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl bg-white shadow-2xl p-12 lg:p-16 border">
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-xs font-semibold uppercase tracking-wide text-indigo-500">Good bye to repetitive manual work</div>
              <h4 className="mt-4 text-3xl lg:text-4xl font-extrabold text-slate-900">Want to learn more about i-HRMS?</h4>
              <p className="mt-4 text-slate-600">We&apos;d love to chat about how i-HRMS can support your HR needs — personalized walkthroughs, tailored demos and practical answers from GCH&apos;s experts.</p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-600 text-white px-6 py-3 font-semibold shadow hover:translate-y-[-2px] transition"
                >
                  Book your Demo
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 text-slate-900 px-6 py-3 font-medium"
                >
                  View Pricing
                </Link>
              </div>

              <ul className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-600 text-sm">
                <li className="flex items-center gap-2"><span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-50 rounded-full text-indigo-600">✓</span> A no-commitment product walkthrough</li>
                <li className="flex items-center gap-2"><span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-50 rounded-full text-indigo-600">✓</span> Free trial, cancel any time</li>
                <li className="flex items-center gap-2"><span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-50 rounded-full text-indigo-600">✓</span> Your questions, answered</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}