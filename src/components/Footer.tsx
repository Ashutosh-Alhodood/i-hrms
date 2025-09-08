"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#020203] text-slate-200">
      {/* Promo bar */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative -translate-y-8">
          <div className="rounded-2xl bg-[#0b0b0b] border border-black/30 shadow-[0_18px_40px_rgba(0,0,0,0.6)] px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* icon */}
              <div className="w-12 h-12 rounded-full bg-white/6 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 18a6 6 0 0 1 16 0" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div>
                <div className="text-white font-semibold">Join the GCH community</div>
                <div className="text-sm text-slate-300 max-w-xl">
                  Share ideas, discuss HR best-practices, and get early access to i-HRMS features and updates.
                </div>
              </div>
            </div>

            <div className="ml-auto">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-slate-900 font-medium shadow-sm hover:shadow-md transition"
              >
                Join now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="text-xl font-bold text-white">i-HRMS</div>
            <div className="text-sm text-slate-400 leading-relaxed">
              i-HRMS by GCH — a modern, all-in-one HRMS built for growing organizations. Attendance, payroll, recruitment and people analytics — all in one place.
            </div>

            <div className="flex items-center gap-3 mt-4">
              <a href="#" aria-label="twitter" className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center hover:bg-white/10 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/90">
                  <path d="M20 7.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8-.6.4-1.3.7-2 .9A3.3 3.3 0 0 0 12.5 9c0 .3 0 .6.1.9-2.7-.2-5.1-1.4-6.7-3.3-.3.6-.4 1.1-.4 1.8 0 1.2.6 2.3 1.6 2.9-.5 0-1-.1-1.5-.4 0 1.7 1.2 3 2.8 3.4-.4.1-.9.1-1.3.1-.3 0-.6 0-.9-.1.6 1.8 2.4 3.1 4.5 3.1A6.6 6.6 0 0 0 20 9.4v-.9c.6-.4 1-1 1.3-1.9-.6.3-1.2.5-1.9.6z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="linkedin" className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center hover:bg-white/10 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.01 0zM3 8.25h4v12H3zM9 8.25h3.8v1.6h.1c.5-.9 1.8-1.8 3.6-1.8 3.8 0 4.5 2.5 4.5 5.8v6.4h-4v-5.7c0-1.4 0-3.2-2-3.2-2 0-2.4 1.6-2.4 3.1v5.8H9z" fill="#fff" />
                </svg>
              </a>
              <a href="#" aria-label="youtube" className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center hover:bg-white/10 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22 8s-.2-1.5-.8-2.1c-.7-.8-1.6-.8-2-0.9C16.7 4.8 12 4.8 12 4.8s-4.7 0-6.9.2c-.4 0-1.3 0-2 0.9C2.2 6.5 2 8 2 8s-.2 1.8-.2 3.6v1.5c0 1.8.2 3.6.2 3.6s.2 1.5.8 2.1c.7.8 1.6.8 2 0.9C7.3 19.2 12 19.2 12 19.2s4.7 0 6.9-.2c.4 0 1.3 0 2-0.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.6V12c0-1.8-.2-3.6-.2-3.6z" fill="#fff" />
                  <path d="M10 14l5-2-5-2v4z" fill="#000" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="font-medium text-white mb-3">Product</div>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="/core-hr" className="hover:text-white">Core HR</a></li>
              <li><a href="/payroll" className="hover:text-white">Payroll</a></li>
              <li><a href="/recruitment" className="hover:text-white">Recruitment</a></li>
              <li><a href="/mobile-app" className="hover:text-white">Mobile App</a></li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-white mb-3">Company</div>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="/about" className="hover:text-white">About GCH</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-white mb-3">Contact</div>
            <div className="text-sm text-slate-400 leading-relaxed">
              UAE / India offices<br />
              <a href="mailto:support@i-hrms.com" className="text-slate-300 hover:text-white">support@i-hrms.com</a>
            </div>

            <div className="mt-4">
              <a href="/contact" className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-md shadow hover:brightness-105 transition">
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright / bottom bar */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 py-5 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} GCH — i-HRMS. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}