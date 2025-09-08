// app/features/page.tsx
"use client";

import Link from "next/link";
import React from "react";

const FEATURES = [
  {
    id: "core-hr",
    title: "Core HR",
    desc: "Employee records, attendance, rostering, documents and people analytics — all in one unified profile.",
    href: "/core-hr",
  },
  {
    id: "payroll",
    title: "Payroll",
    desc: "Automated payroll runs, payslips, statutory compliance and multi-region reporting.",
    href: "/payroll",
  },
  {
    id: "recruitment",
    title: "Recruitment",
    desc: "Applicant tracking, collaborative hiring, scorecards and onboarding automation.",
    href: "/recruitment",
  },
  {
    id: "mobile",
    title: "Mobile App",
    desc: "Employee self-service, approvals and attendance — mobile-first experience (coming soon).",
    href: "/features#mobile",
  },
  {
    id: "reports",
    title: "People Analytics",
    desc: "Custom dashboards, turnover analysis and exportable reports for leadership.",
    href: "/features#analytics",
  },
  {
    id: "integrations",
    title: "Integrations",
    desc: "Payroll providers, SSO, biometric devices and HRIS connectors for seamless data flow.",
    href: "/features#integrations",
  },
];

export default function FeaturesPage() {
  return (
    <div className="antialiased text-slate-900">
      {/* Page header (hero) */}
      <header className="bg-white/40 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">GCH</span>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold">Product features — i-HRMS</h1>
                <p className="mt-1 text-sm text-slate-600">
                  Built by GCH — enterprise HR tooling for payroll, people & performance.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile App badge */}
            <div className="rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 px-3 py-2 flex items-center gap-3 border border-indigo-100">
              <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M7 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10" cy="18" r="1" fill="currentColor" />
              </svg>
              <div className="text-xs">
                <div className="font-semibold text-slate-900">Mobile app</div>
                <div className="text-[11px] text-slate-500">Coming soon — iOS & Android</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm font-semibold shadow"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </header>

      {/* Features hero / intro */}
      <main className="section bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-sm font-semibold text-indigo-500 uppercase tracking-wide">Platform</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">Everything HR — one modern platform</h2>
            <p className="mt-4 text-slate-600">
              i-HRMS from GCH combines attendance, payroll, recruitment and people analytics into a single, secure,
              enterprise-ready experience designed for regional compliance and global scale.
            </p>
          </div>

          {/* Preferred features grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Highlight card — large */}
            <div className="md:col-span-2 rounded-2xl bg-white p-8 shadow-xl border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-3">
                  <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center text-indigo-600 font-semibold shadow-sm">
                    ATS
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Advanced Applicant Tracking</h3>
                    <p className="mt-1 text-sm text-slate-600">Custom pipelines, intelligent scoring and fast shortlists — tuned for hiring teams.</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-lg p-4 bg-indigo-50">
                    <div className="text-xs font-semibold text-indigo-600 uppercase">Pipeline automation</div>
                    <div className="mt-2 font-medium text-slate-900">Auto shortlists & rules</div>
                    <p className="mt-2 text-sm text-slate-600">Reduce manual triage with configurable automation.</p>
                  </div>

                  <div className="rounded-lg p-4 bg-indigo-50">
                    <div className="text-xs font-semibold text-indigo-600 uppercase">Collaboration</div>
                    <div className="mt-2 font-medium text-slate-900">Scorecards & comments</div>
                    <p className="mt-2 text-sm text-slate-600">Make hiring decisions together with lightweight feedback flows.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Link href="/recruitment" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-indigo-700 border border-indigo-100 shadow-sm font-medium">
                  Explore recruitment
                </Link>

                <Link href="/case-studies" className="text-sm text-slate-600 hover:underline">See case studies →</Link>
              </div>
            </div>

            {/* Small feature card */}
            <div className="rounded-2xl bg-white p-6 shadow-lg border border-slate-100 flex flex-col">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-gradient-to-br from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold">P</div>
                <div>
                  <div className="text-xs font-semibold text-indigo-500 uppercase">Payroll</div>
                  <h4 className="mt-1 font-bold text-lg">Fast, compliant payroll</h4>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600 flex-1">Automated runs, payslips and statutory calculations across GCC, India and more.</p>

              <div className="mt-4">
                <Link href="/payroll" className="inline-flex items-center gap-2 text-indigo-700 font-medium hover:underline">View payroll features →</Link>
              </div>
            </div>
          </div>

          {/* Feature tiles */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.slice(0, 3).map((f) => (
              <article key={f.id} className="rounded-2xl bg-white p-6 shadow-lg border border-slate-100 hover:shadow-2xl transition-shadow flex flex-col">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg text-slate-900">{f.title}</h4>
                    <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-50 to-violet-50 flex items-center justify-center text-indigo-600 font-semibold">
                      {f.title.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Link href={f.href} className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline">
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Secondary features row */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.slice(3).map((f) => (
              <article key={f.id} className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 font-semibold">•</div>
                  <div>
                    <h5 className="font-semibold text-slate-900">{f.title}</h5>
                    <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <Link href={f.href} className="text-sm text-indigo-600 font-medium hover:underline">Explore →</Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-500 p-8 shadow-lg text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-extrabold">Want a guided tour of i-HRMS?</h3>
              <p className="mt-1 text-sm text-white/90">Book a product walkthrough and see how GCH can tailor i-HRMS to your workflows.</p>
            </div>

            <div className="flex gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/25 px-4 py-2 text-sm font-semibold">
                Book a demo
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-700">
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
}