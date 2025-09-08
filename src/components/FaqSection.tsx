// src/components/FaqSection.tsx
"use client";

import React, { useState } from "react";
import styles from "./FaqSection.module.css";

type QA = { id: string; q: string; a: string };
type Category = { id: string; label: string; items: QA[] };

const CATEGORIES: Category[] = [
  {
    id: "general",
    label: "General Questions",
    items: [
      {
        id: "g1",
        q: "What is i-HRMS and who is it for?",
        a: "i-HRMS is a modern HR management system built for SMEs, growing teams and enterprise units. It combines attendance, payroll, people analytics and employee self-service into a single, easy-to-use platform.",
      },
      {
        id: "g2",
        q: "Can I try i-HRMS before buying?",
        a: "Yes — we offer a free demo and an evaluation period so you can validate workflows, integrations and customisations before you commit.",
      },
    ],
  },
  {
    id: "attendance",
    label: "Attendance & Time",
    items: [
      {
        id: "a1",
        q: "How does attendance tracking work?",
        a: "Employees can check in through the i-HRMS mobile app or web portal. Admins can configure shifts, geo-fencing, biometric integrations and automated reconciliation rules.",
      },
      {
        id: "a2",
        q: "Can I integrate biometric devices with i-HRMS?",
        a: "Yes — i-HRMS supports common biometric vendors and can import logs or synchronise attendance records automatically for reliable timekeeping.",
      },
    ],
  },
  {
    id: "payroll",
    label: "Payroll",
    items: [
      {
        id: "p1",
        q: "Does i-HRMS handle statutory deductions?",
        a: "Yes — the i-HRMS payroll engine supports tax, social security and other mandatory deductions for multiple regions and can be configured to match local regulations.",
      },
      {
        id: "p2",
        q: "Can I export payroll reports from i-HRMS?",
        a: "Absolutely — export payroll data in CSV/Excel formats or push payroll summaries via API to third-party accounting or payroll systems.",
      },
    ],
  },
  {
    id: "security",
    label: "Security & Compliance",
    items: [
      {
        id: "s1",
        q: "How is employee data protected in i-HRMS?",
        a: "i-HRMS uses industry-standard encryption for data at rest and in transit, role-based access controls, and regular security reviews to protect sensitive information.",
      },
      {
        id: "s2",
        q: "Does i-HRMS support GDPR and regional privacy requirements?",
        a: "Yes — i-HRMS provides controls, data export tools and documentation to help customers meet GDPR and other regional privacy and compliance requirements.",
      },
    ],
  },
];

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    CATEGORIES[0].items[0].id
  );

  const active =
    CATEGORIES.find((c) => c.id === activeCategory) ?? CATEGORIES[0];

  return (
    <section className={`py-24 ${styles.outer}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-slate-500 max-w-2xl mx-auto">
            Answers to common questions about setup, features and security for
            i-HRMS. If you don&apos;t find what you need, reach out and we&apos;ll help.
          </p>
        </div>

        <div className={styles.cardWrap}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* left: categories */}
            <div className="lg:col-span-5">
              <div className="space-y-4">
                {CATEGORIES.map((cat) => {
                  const isActive = cat.id === activeCategory;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setOpenQuestion(cat.items[0]?.id ?? null);
                      }}
                      className={`${styles.catBtn} ${isActive ? styles.catActive : ""}`}
                      aria-pressed={isActive}
                    >
                      <div className={styles.catDot} aria-hidden />
                      <div className="flex-1 text-left">
                        <div
                          className={`text-base font-semibold ${
                            isActive ? "text-slate-900" : "text-slate-800"
                          }`}
                        >
                          {cat.label}
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                          {cat.items.length} topics
                        </div>
                      </div>

                      <div className={styles.chevWrap}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M9 6l6 6-6 6"
                            stroke={isActive ? "#0f172a" : "#94a3b8"}
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* right: accordion list */}
            <div className="lg:col-span-7">
              <div className="space-y-4">
                {active.items.map((it) => {
                  const open = openQuestion === it.id;
                  return (
                    <div
                      key={it.id}
                      className={`${styles.accordion} ${open ? styles.open : ""}`}
                    >
                      <button
                        onClick={() => setOpenQuestion(open ? null : it.id)}
                        aria-expanded={open}
                        className={styles.accordionToggle}
                      >
                        <div>
                          <div
                            className={`text-base font-medium ${
                              open ? "text-slate-900" : "text-slate-800"
                            }`}
                          >
                            {it.q}
                          </div>
                          {!open && (
                            <div className="text-sm text-slate-500 mt-1">
                              Tap to view answer
                            </div>
                          )}
                        </div>

                        <div className={styles.iconBox}>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            {open ? (
                              <path
                                d="M18 15L12 9 6 15"
                                stroke="#0f172a"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            ) : (
                              <path
                                d="M12 5v14M5 12h14"
                                stroke="#94a3b8"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            )}
                          </svg>
                        </div>
                      </button>

                      <div
                        className={styles.answerWrap}
                        aria-hidden={!open}
                      >
                        <div className="text-sm text-slate-600">{it.a}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* pager dots */}
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-3">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setActiveCategory(c.id);
                        setOpenQuestion(c.items[0]?.id ?? null);
                      }}
                      className={`${styles.pagerDot} ${
                        c.id === activeCategory ? styles.pagerActive : ""
                      }`}
                      aria-label={`Show ${c.label}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}