"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./MobileAppSection.module.css";

/* -------------------- CARD DATA -------------------- */
const LEFT_CARDS = [
  {
    id: "work-entry",
    title: "Work Entry",
    desc: "Quick clock-in and task start so teams can capture time accurately and focus on what matters.",
    color: "#39D353",
  },
  {
    id: "salary-slip",
    title: "Salary Slip",
    desc: "Clear, mobile salary slips that make payroll transparent for every employee.",
    color: "#FF6B6B",
  },
  {
    id: "self-service",
    title: "Employee Self-Service",
    desc: "Self-service for leave, documents and personal details — empower employees with instant control.",
    color: "#FF7AB6",
  },
];

const RIGHT_CARDS = [
  {
    id: "attendance",
    title: "Attendance Tracking",
    desc: "Manage time and attendance on the go with reliable mobile punch-in and geo/time validations.",
    color: "#39D353",
  },
  {
    id: "comm-hub",
    title: "Communication Hub",
    desc: "In-app announcements, chats and alerts to keep teams aligned and informed.",
    color: "#FF6B6B",
  },
  {
    id: "reports",
    title: "Reports & Analytics",
    desc: "Instant access to dashboards and reports so managers get insights anywhere, anytime.",
    color: "#8A6BFF",
  },
];

/* -------------------- ICONS -------------------- */
function getIcon(id: string, fill = "white") {
  switch (id) {
    case "work-entry":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="7" width="18" height="11" rx="2" fill={fill} opacity="0.95" />
          <rect x="7" y="3" width="2" height="4" rx="1" fill={fill} />
          <rect x="15" y="3" width="2" height="4" rx="1" fill={fill} />
        </svg>
      );
    case "salary-slip":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="9" r="3.2" fill={fill} />
          <rect x="3" y="13" width="18" height="6" rx="1" fill={fill} opacity="0.95" />
        </svg>
      );
    case "self-service":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="8" r="3" fill={fill} />
          <path d="M4 20c1.8-3.2 5-5 8-5s6.2 1.8 8 5" fill={fill} opacity="0.95" />
        </svg>
      );
    case "attendance":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="4" y="5" width="16" height="14" rx="2" fill={fill} />
          <rect x="8" y="9" width="2" height="2" rx="1" fill="#061826" />
        </svg>
      );
    case "comm-hub":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 7h16v8H6L4 17V7z" fill={fill} />
        </svg>
      );
    case "reports":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="4" y="6" width="4" height="12" rx="1.5" fill={fill} />
          <rect x="10" y="9" width="4" height="9" rx="1.5" fill={fill} />
          <rect x="16" y="4" width="4" height="14" rx="1.5" fill={fill} />
        </svg>
      );
    default:
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect width="18" height="18" rx="3" fill={fill} />
        </svg>
      );
  }
}

/* -------------------- COMPONENT -------------------- */
export default function MobileAppSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.intersectionRatio >= 0.3));
      },
      { threshold: [0, 0.15, 0.3, 0.5] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cardStyle = (cardColor?: string, isHovered?: boolean) =>
    isHovered && cardColor
      ? {
          background: cardColor,
          color: "#061826",
        }
      : undefined;

  return (
    <section ref={ref} className={`py-20 ${styles.sectionBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-block rounded-full bg-slate-800/40 px-4 py-1 text-xs text-slate-200">
            MOBILE APP
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-white">
            Access HR anywhere with the i-HRMS Mobile App
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            The i-HRMS mobile app brings attendance, payroll, approvals and people insights to employees and managers — wherever they are.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* LEFT */}
          <div className={`lg:col-span-4 flex flex-col gap-6 ${styles.leftColumn}`}>
            {LEFT_CARDS.map((c) => {
              const isHovered = hoveredId === c.id;
              return (
                <article
                  key={c.id}
                  tabIndex={0}
                  onMouseEnter={() => setHoveredId(c.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(c.id)}
                  onBlur={() => setHoveredId(null)}
                  className={`rounded-xl border transition-shadow duration-200 ease-out p-5 shadow-xl overflow-hidden focus:outline-none ${styles.card}`}
                  style={{
                    borderColor: isHovered ? c.color : "rgba(148,163,184,0.08)",
                    ...(cardStyle(c.color, isHovered) ?? { background: "rgba(0,0,0,0.6)" }),
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: isHovered ? "#fff" : c.color,
                        boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.12)",
                        transition: "background .2s ease",
                      }}
                      aria-hidden
                    >
                      <div style={{ color: isHovered ? c.color : "#061826" }}>
                        {getIcon(c.id, isHovered ? c.color : "#061826")}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 style={{ color: isHovered ? "#061826" : "white" }} className="text-lg font-semibold">
                        {c.title}
                      </h4>
                      <p className="mt-2 text-sm" style={{ color: isHovered ? "#072226" : "rgba(203,213,225,0.9)" }}>
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* CENTER PHONE */}
          <div className="lg:col-span-4 flex justify-center relative z-10">
            <div className={`${styles.phoneShell} ${inView ? styles.phoneIn : ""}`}>
              <div className={styles.phoneFrame}>
                <div className={styles.topNotch} />
                <div className={styles.phoneScreen}>
                  <div className={styles.appTopCard}>
                    <div className="flex items-center gap-3">
                      <div className={styles.avatarCircle} />
                      <div>
                        <div className={styles.appTitle}>Ahmed Al Husnayn</div>
                        <div className={styles.appSubtitle}>Manager</div>
                      </div>
                    </div>
                    <div className={styles.comingSoon}>
                      <div className="pulseDot" />
                      <div className={styles.comingSoonInner}>Coming soon</div>
                    </div>
                  </div>

                  <div className={styles.appCenterArea}>
                    <div className={styles.checkinPill}>09:30 AM · Check In</div>

                    <div className={styles.calendarMock} aria-hidden>
                      {Array.from({ length: 28 }).map((_, i) => (
                        <div className={`calendarDot ${i % 3 === 0 ? " " : ""}`} key={i} />
                      ))}
                    </div>

                    <div className={styles.appBottom}>
                      <div className={styles.bottomNav}>
                        <div className={styles.navIcon} />
                        <div className={styles.navIcon} />
                        <div className={styles.navIcon} />
                        <div className={styles.navIcon} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.bottomChin} />
              </div>

              {/* glowing coming soon text below phone */}
              <div className={styles.comingGlowContainer}>
                <div className={styles.comingGlow}>Coming soon — i-HRMS Mobile App</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={`lg:col-span-4 flex flex-col gap-6 ${styles.rightColumn}`}>
            {RIGHT_CARDS.map((c) => {
              const isHovered = hoveredId === c.id;
              return (
                <article
                  key={c.id}
                  tabIndex={0}
                  onMouseEnter={() => setHoveredId(c.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(c.id)}
                  onBlur={() => setHoveredId(null)}
                  className={`rounded-xl border transition-shadow duration-200 ease-out p-5 shadow-xl overflow-hidden focus:outline-none ${styles.card}`}
                  style={{
                    borderColor: isHovered ? c.color : "rgba(148,163,184,0.08)",
                    ...(cardStyle(c.color, isHovered) ?? { background: "rgba(0,0,0,0.6)" }),
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: isHovered ? "#fff" : c.color,
                        boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.12)",
                        transition: "background .2s ease",
                      }}
                      aria-hidden
                    >
                      <div style={{ color: isHovered ? c.color : "#061826" }}>{getIcon(c.id, isHovered ? c.color : "#061826")}</div>
                    </div>

                    <div className="flex-1">
                      <h4 style={{ color: isHovered ? "#061826" : "white" }} className="text-lg font-semibold">
                        {c.title}
                      </h4>
                      <p className="mt-2 text-sm" style={{ color: isHovered ? "#072226" : "rgba(203,213,225,0.9)" }}>
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}