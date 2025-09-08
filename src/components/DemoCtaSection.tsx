"use client";

import React from "react";
import styles from "./FaqSection.module.css";

export default function DemoCtaSection() {
  return (
    <section className={`py-20 ${styles.outer}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Card Container */}
        <div className="rounded-2xl bg-purple-50/90 backdrop-blur-md p-12 shadow-xl border border-purple-100">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-semibold text-indigo-600 tracking-widest mb-3">
              GOODBYE TO REPETITIVE MANUAL HR TASKS
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
              Want to learn more about i-HRMS?
            </h2>

            <p className="text-slate-600 mb-8 text-base md:text-lg">
              Discover how <span className="font-semibold">i-HRMS</span> can
              transform your workforce management. From attendance and payroll to
              analytics and employee self-service, i-HRMS helps HR teams save
              time, reduce errors, and boost employee engagement.
            </p>

            <button
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full 
                         bg-gradient-to-r from-indigo-600 to-violet-600 text-white 
                         font-semibold shadow-lg hover:from-indigo-700 hover:to-violet-700 
                         transition mb-10"
              onClick={() => {
                const ev = new CustomEvent("openDemoModal");
                window.dispatchEvent(ev);
              }}
            >
              Book your Demo
            </button>

            {/* Features Row */}
            <div className="border-t border-purple-200 pt-8">
              <ul className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md">
                    ✅
                  </span>
                  <span>
                    <span className="font-semibold">No-commitment</span> product
                    walkthrough
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md">
                    ⏳
                  </span>
                  <span>
                    <span className="font-semibold">Free trial</span>, cancel any
                    time
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md">
                    💬
                  </span>
                  <span>
                    Your HR questions,{" "}
                    <span className="font-semibold">answered</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}