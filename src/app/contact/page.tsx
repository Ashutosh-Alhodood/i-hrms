// app/contact/page.tsx  OR  src/pages/contact.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top hero */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">
            Contact us
          </h1>
          <p className="mx-auto max-w-2xl text-slate-600">
            Get in touch and let us know how we can help — about i-HRMS or partnership opportunities with GCH.
          </p>
        </div>
      </section>

      {/* Cards section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left card - Product Support */}
            <article
              className="relative rounded-2xl bg-white shadow-[0_28px_60px_rgba(2,6,23,0.12)] overflow-hidden border border-slate-100 flex flex-col md:flex-row"
              aria-labelledby="support-title"
            >
              {/* left content */}
              <div className="p-8 md:p-10 flex-1">
                <h2 id="support-title" className="text-xl font-semibold text-slate-900 mb-3">
                  Product support — i-HRMS
                </h2>
                <p className="text-slate-600 mb-4">
                  For technical help, troubleshooting, or product questions about i-HRMS, contact our support team.
                </p>

                <a
                  href="mailto:support@i-hrms.com"
                  className="block text-indigo-600 font-medium mb-4"
                >
                  support@i-hrms.com
                </a>

                <p className="text-sm text-slate-500 mb-6">
                  Support hours: Mon–Fri, 09:00–18:00 (UAE time). For urgent issues, please include "URGENT" in the subject.
                </p>

                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>

              {/* right visual area */}
              <div className="md:w-44 lg:w-56 flex items-center justify-center bg-slate-50 border-l border-slate-100">
                {/* placeholder icon inside rounded square */}
                <div className="w-28 h-28 rounded-md bg-white/80 shadow-inner flex items-center justify-center">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="opacity-80">
                    <path d="M4 4h16v12H4z" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 16v2a2 2 0 0 0 2 2h4" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="1.5" fill="#94a3b8" />
                  </svg>
                </div>
              </div>
            </article>

            {/* Right card - Sales */}
            <article
              className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_36px_80px_rgba(2,6,23,0.18)]"
              aria-labelledby="sales-title"
            >
              <div
                className="md:flex-1 p-8 md:p-10"
                style={{ background: "linear-gradient(180deg,#062A36,#083647)" }}
              >
                <h3 id="sales-title" className="text-xl font-semibold text-white mb-3">
                  Contact our sales team
                </h3>
                <p className="text-slate-200/80 mb-6">
                  Talk to our sales team about your HRMS requirements, enterprise pricing, integrations, or to request a demo of i-HRMS.
                </p>

                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-100 text-slate-900 font-medium shadow-sm hover:bg-white transition"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>

              {/* right visual area */}
              <div className="md:w-44 lg:w-56 flex items-center justify-center bg-[rgba(255,255,255,0.03)]">
                <div className="w-28 h-28 rounded-md bg-white/5 border border-white/5 flex items-center justify-center">
                  {/* headset icon */}
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-white/90">
                    <path d="M4 12v2a6 6 0 0 0 6 6h0" stroke="#cfe8f3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 12v2a6 6 0 0 1-6 6h0" stroke="#cfe8f3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 10V8a6 6 0 0 1 12 0v2" stroke="#cfe8f3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3" y="16" width="3" height="5" rx="1" fill="#0b556a" />
                    <rect x="18" y="16" width="3" height="5" rx="1" fill="#0b556a" />
                  </svg>
                </div>
              </div>

              {/* dark glow / subtle border to match screenshot */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl -z-10" />
            </article>
          </div>
        </div>
      </section>

      {/* Smaller info rows */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Join us on LinkedIn</h4>
              <p className="text-slate-600 mb-4">
                Follow GCH (Global Career Heights) for product updates, case studies and community news on{" "}
                <a href="https://www.linkedin.com" className="text-indigo-600 font-medium" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                .
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">General Communication</h4>
              <p className="text-slate-600">
                For general queries, partnership or press, please contact us at{" "}
                <a href="mailto:hello@gch.com" className="text-indigo-600 font-medium">hello@gch.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Office strip (single office) */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-xl bg-white p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div>
                <h5 className="text-sm font-semibold text-indigo-600 mb-2">Headquarters — UAE</h5>
                <p className="text-slate-700">
                  Zakhir Business Center — 301, Abu Hail, Dubai<br />
                  United Arab Emirates
                </p>

                <div className="mt-4 text-slate-700">
                  <div className="font-medium">Phone</div>
                  <div className="mt-1">+971 4 227 9744</div>
                </div>

                <div className="mt-6">
                  <Link href="/contact" className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow">
                    Contact us
                  </Link>
                </div>
              </div>

              <div>
                {/* optional map placeholder or image */}
                <div className="w-full h-48 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                  Map placeholder
                </div>
                <p className="mt-3 text-sm text-slate-500">Directions available on request — our team will be happy to guide you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer style */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="rounded-2xl bg-gradient-to-b from-indigo-600 to-indigo-500 p-10 md:p-12 shadow-lg">
            <h4 className="text-lg font-semibold text-white mb-3">Want to learn more about i-HRMS?</h4>
            <p className="mb-6 text-indigo-100">Book a free demo and we’ll walk you through a tailored product walkthrough for your team.</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold">
                Book your Free Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}