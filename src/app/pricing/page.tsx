// app/pricing/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * Pricing page designed to match the attached screenshots:
 * - Left: pill label + large heading + description
 * - Right: dark sales card with split artwork + CTA and deep drop shadow
 * - Centered FAQ accordion list
 * - Community CTA banner + footer
 *
 * NOTE: I included a Header component placeholder. Replace the import path
 * or remove `<Header />` if you already render the header globally.
 */

// if you have a header component, update the path. Otherwise remove this import & element
// import Header from "@/components/Header";

const PLANS = [
  { id: "starter", name: "Starter", price: "Free", bullets: ["Up to 10 employees", "Basic HR tools", "Email support"], cta: "Get started" },
  { id: "growth", name: "Growth", price: "$9", per: "per user / month", bullets: ["Unlimited employees", "Payroll & compliance", "Priority email support"], popular: true, cta: "Start free trial" },
  { id: "enterprise", name: "Enterprise", price: "Custom", bullets: ["SAML SSO", "Dedicated onboarding", "SLA & 24/7 support"], cta: "Contact sales" },
];

const FAQS = [
  "Can I customize Loyaltri to suit the specific needs of my organization?",
  "What security measures does Loyaltri have in place to protect our HR data?",
  "What is the pricing structure for Loyaltri's HRMS software?",
  "Can Loyaltri integrate with other existing HR or business systems?",
  "How often does Loyaltri release updates, and are they automatic?",
  "What kind of customer support can I expect from Loyaltri?"
];

export default function PricingPage() {
  return (
    <div className="antialiased text-slate-900">
      {/* Replace or remove if using a global header */}
      {/* <Header /> */}

      {/* HERO */}
      <section className="relative bg-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left content */}
            <div className="lg:col-span-7">
              <div className="inline-block mb-4">
                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">Pricing</span>
              </div>

              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight max-w-xl">
                Pricing built for businesses of all sizes
              </h1>

              <p className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl">
                We offer flexible pricing plans designed to meet the needs of businesses of all sizes. Whether you're a small startup or a large enterprise,
                we have a solution for you.
              </p>

              <p className="mt-4 text-sm text-slate-600 max-w-2xl">
                Our team is here to help! We customize solutions to perfectly fit your requirements.
              </p>
            </div>

            {/* Right sales card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-[520px]">
                {/* The main card - two tone split */}
                <div
                  className="rounded-xl overflow-hidden shadow-[0_30px_70px_rgba(30,64,175,0.12)]"
                  style={{
                    boxShadow: "0 30px 60px rgba(2,6,23,0.35), 0 70px 90px rgba(2,6,23,0.08)",
                  }}
                >
                  <div className="grid grid-cols-3">
                    {/* left dark panel */}
                    <div className="col-span-2 bg-[#05263a] p-8">
                      <h3 className="text-2xl font-bold text-white leading-tight">Contact our sales team</h3>
                      <p className="mt-4 text-sm text-slate-200 max-w-xs">
                        Talk to our sales team about your requirements, learn about custom pricing, or request a demo.
                      </p>

                      <div className="mt-6">
                        <Link
                          href="/contact"
                          className="inline-block bg-white text-slate-900 px-4 py-2 rounded-full font-medium shadow"
                        >
                          Contact Sales
                        </Link>
                      </div>
                    </div>

                    {/* right artwork panel */}
                    <div className="col-span-1 bg-[#11475b] p-6 flex items-center justify-center">
                      {/* If you have a headset asset, replace src. Fallback to a simple SVG if not */}
                      <div className="w-28 h-28 rounded-md flex items-center justify-center">
                        <Image src="/contact-sales.webp" alt="headset" width={112} height={112} className="object-contain" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Large soft shadow below (matching screenshot blue-ish glow) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-0 right-0 top-full mt-6 -z-10 h-20 rounded-lg"
                  style={{
                    filter: "blur(24px)",
                    background: "linear-gradient(180deg, rgba(15,41,60,0.12), rgba(15,41,60,0.04))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">FAQs</h2>
            <p className="mt-3 text-slate-600">Everything you need to know about our pricing. Can't find the answer you're looking for? <Link href="/contact" className="text-indigo-600 underline">Chat to our friendly support team</Link>.</p>
          </div>

          <div className="mt-8 space-y-4">
            {FAQS.map((q, idx) => (
              <details key={idx} className="bg-white border border-slate-100 rounded-lg p-4">
                <summary className="cursor-pointer list-none text-left font-medium text-slate-800">{q}</summary>
                <div className="mt-3 text-sm text-slate-600">
                  {/* placeholder answer — replace with copy as required */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id neque in massa dictum aliquam. If you need a specific answer, contact our team.
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

     

      
    </div>
  );
}