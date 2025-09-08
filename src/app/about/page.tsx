// app/about/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Decorative hero background */}
      <div className="absolute inset-x-0 top-0 pointer-events-none -z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative h-40 lg:h-52">
            <div
              aria-hidden
              className="absolute -left-24 -top-16 w-[520px] h-[220px] rounded-xl"
              style={{
                background:
                  "radial-gradient(600px 240px at 10% 10%, rgba(99,102,241,0.10), transparent 30%), linear-gradient(180deg, rgba(99,102,241,0.03), transparent 40%)",
                filter: "blur(28px)",
                transform: "rotate(-6deg)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mx-auto w-32 h-32 mt-6 rounded-3xl bg-gradient-to-br from-indigo-50 to-indigo-100/60 shadow-lg border border-white/30 flex items-center justify-center mb-6 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Product logo"
              width={150}
              height={100}
              className="object-contain p-3"
              priority
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Building the modern HRMS SaaS platform
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            The web has come a long way in the last ten years — our team is reimagining HR systems with delightful UX,
            meaningful automation, and enterprise-grade reliability for growing teams through our product{" "}
            <strong>i-HRMS</strong>.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold shadow-xl transform hover:-translate-y-0.5 transition"
            >
              Book a demo
            </Link>

            <Link
              href="#team"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-slate-200 text-slate-800 bg-white shadow-sm"
            >
              Meet the team
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Our story</h2>

            <div className="text-slate-700 space-y-4 leading-relaxed">
              <p>
                Our journey began in 2007 working with schools and automating their operations. Educational institutions
                have a complex workforce — so we built tooling tailored to those needs and gradually expanded into healthcare
                and broader business HR workflows.
              </p>

              <p>
                In 2021 we reimagined the product as <strong>i-HRMS</strong>, a modern HR platform that combines attendance,
                payroll, recruitment and people analytics into a single, easy-to-use experience.
              </p>

              <p>
                We focus on building human-first tooling: fewer clicks, less manual work, faster onboarding and better
                compliance across regions. We partner with organisations to reduce operational overhead and improve
                employee experience.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg"
              >
                Book a demo
              </Link>
              <Link href="#team" className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-slate-200 text-slate-800">
                Meet the team
              </Link>
            </div>
          </div>

          <div>
            <div className="rounded-xl p-8 shadow-2xl" style={{ background: "linear-gradient(180deg,#6f5cff,#7c5cff)" }}>
              <div className="rounded-lg p-6 bg-white/10 backdrop-blur-sm">
                <h3 className="text-lg text-white font-bold mb-2">i-HRMS — built for the region</h3>
                <p className="text-sm text-white/90 mb-4">
                  i-HRMS brings efficiency and compliance to regional customers with AI-driven workflows that reduce manual
                  work and accelerate hiring, onboarding and payroll.
                </p>
                <div className="text-xs uppercase tracking-widest font-semibold text-white/80">Managing Director</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team / CTA */}
      <section id="team" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">Meet the team</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10">
            A focused team building i-HRMS — product, engineering, design and support.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { name: "Rineesh", role: "Product / Engineering" },
              { name: "Ahmed", role: "Engineering" },
              { name: "Clara", role: "Design" },
              { name: "Noel", role: "Support" },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-xl p-6 bg-white shadow-sm hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-50 mb-4 mx-auto flex items-center justify-center text-indigo-600 font-semibold text-xl">
                  {p.name[0]}
                </div>
                <div className="text-center font-medium">{p.name} Doe</div>
                <div className="text-xs text-slate-500 mt-1">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer-style panel */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl bg-gradient-to-b from-indigo-700 to-indigo-600 p-10 md:p-12 shadow-2xl text-center">
            <h4 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Want to learn more about i-HRMS?</h4>
            <p className="mb-6 text-indigo-100/90 max-w-3xl mx-auto">
              Book a free demo and we’ll walk you through a tailored product walkthrough for your team and processes.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold shadow-lg">
                Book your Free Demo
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}