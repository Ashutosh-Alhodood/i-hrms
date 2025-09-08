// src/components/CoreHRSection.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ClockIcon,
  ChatBubbleLeftRightIcon,
  ChartPieIcon,
  DocumentTextIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline"; // ✅ Heroicons import
import styles from "./CoreHRSection.module.css";

type CoreHRSectionProps = {
  durationMs?: number;
};

const CARDS = [
  {
    id: "attendance",
    title: "Attendance Tracking",
    description:
      "Track work hours, shifts and absences in real time. i-HRMS automatically captures attendance, flags exceptions and saves HR teams hours every week.",
    image: "/analytics.webp",
    icon: ClockIcon,
  },
  {
    id: "feed",
    title: "Interactive Feed",
    description:
      "Keep teams connected with a secure social feed for company updates, recognitions and announcements — built for internal engagement.",
    image: "/assets.webp",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: "analytics",
    title: "People Analytics",
    description:
      "Turn HR data into action: visualize retention, performance and engagement trends to make better workforce decisions with i-HRMS.",
    image: "/ats.webp",
    icon: ChartPieIcon,
  },
  {
    id: "expenses",
    title: "Expenses & Reimbursements",
    description:
      "Simplify employee expense claims and reimbursements with automated approvals, policy checks and one-click payouts.",
    image: "/auto.webp",
    icon: DocumentTextIcon,
  },
  {
    id: "offboarding",
    title: "Offboarding Workflows",
    description:
      "Run consistent offboarding with checklists, asset returns and knowledge transfer tasks to reduce compliance risk and protect IP.",
    image: "/efficency.webp",
    icon: ArrowRightOnRectangleIcon,
  },
];

export default function CoreHRSection({ durationMs = 5000 }: CoreHRSectionProps) {
  const [active, setActive] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const tickRef = useRef<number | null>(null);

  const tickIntervalMs = 50;
  const ticks = Math.max(1, Math.round(durationMs / tickIntervalMs));
  const increasePerTick = 100 / ticks;

  useEffect(() => {
    if (isPaused) {
      if (tickRef.current) {
        window.clearInterval(tickRef.current);
        tickRef.current = null;
      }
      return;
    }

    if (!tickRef.current) {
      tickRef.current = window.setInterval(() => {
        setProgress((p) => Math.min(100, p + increasePerTick));
      }, tickIntervalMs);
    }

    return () => {
      if (tickRef.current) {
        window.clearInterval(tickRef.current);
        tickRef.current = null;
      }
    };
  }, [isPaused, increasePerTick]);

  useEffect(() => {
    if (progress >= 100) {
      const t = window.setTimeout(() => {
        setProgress(0);
        setActive((a) => (a + 1) % CARDS.length);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [progress]);

  function handleActivate(idx: number) {
    setActive(idx);
    setProgress(0);
  }

  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block rounded-full bg-slate-100 px-4 py-1 text-xs text-slate-600">
            CORE HR
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900">
            Do more in less time with i-HRMS
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            i-HRMS helps HR teams automate attendance, payroll, recruitment and people analytics — so your team can
            focus on strategic work instead of manual tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {CARDS.map((card, idx) => {
                const isActive = idx === active;
                const Icon = card.icon;
                return (
                  <button
                    key={card.id}
                    onClick={() => handleActivate(idx)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={`w-full text-left p-4 rounded-xl border transition-shadow flex items-start gap-4 ${
                      isActive
                        ? "bg-slate-50 border-slate-200 shadow-md"
                        : "bg-white border-slate-100"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center ${
                        isActive
                          ? "bg-slate-800 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`text-lg font-semibold ${
                          isActive ? "text-slate-900" : "text-slate-800"
                        }`}
                      >
                        {card.title}
                      </h4>
                      {isActive && (
                        <div className="mt-3">
                          <p className="text-sm text-slate-600">
                            {card.description}
                          </p>
                          <div className="mt-3">
                            <div className={styles.progressShell}>
                              <div
                                className={styles.progressFill}
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl bg-slate-50 p-6 flex items-center justify-center shadow-sm">
              <div className="w-full max-w-3xl h-[420px] relative rounded-lg overflow-hidden">
                <Image
                  src={CARDS[active].image}
                  alt={CARDS[active].title}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}