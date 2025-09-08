// src/components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

/* -------------------- MENU DATA -------------------- */
const COMPANY_MENU = [
  { icon: "info", title: "About us", desc: "Read about our story here.", href: "/about" },
  // mailto for contact (simple page)
  { icon: "contact", title: "Contact us", desc: "Get in touch.", href: "/contact" },
  // open mail client for partnership inquiries
  {
    icon: "partner",
    title: "Be our Partner",
    desc: "For HRMS Excellence.",
    href: "mailto:sales@ihrms.com?subject=Partnership%20Inquiry",
  },
  // careers should open mail client to sales (as requested)
  {
    icon: "briefcase",
    title: "Careers",
    desc: "Find out the openings.",
    href: "mailto:sales@ihrms.com?subject=Careers%20Inquiry",
  },
];

const FEATURES_MENU = [
  { icon: "users", title: "Core HR", desc: "HRMS Simplified.", href: "/core-hr" },
  { icon: "wallet", title: "Payroll", desc: "Seamless Financials.", href: "/payroll" },
  { icon: "recruit", title: "Recruitment", desc: "Talents Hiring.", href: "/recruitment" },
  { icon: "mobile", title: "Mobile App", desc: "HRMS in your pocket.", href: "/features" },
];

/* -------------------- ICONS -------------------- */
function Icon({ id }: { id: string }) {
  switch (id) {
    case "info":
      return <span className="text-lg">ℹ️</span>;
    case "contact":
      return <span className="text-lg">📞</span>;
    case "partner":
      return <span className="text-lg">🤝</span>;
    case "briefcase":
      return <span className="text-lg">💼</span>;
    case "users":
      return <span className="text-lg">👥</span>;
    case "wallet":
      return <span className="text-lg">💳</span>;
    case "recruit":
      return <span className="text-lg">🧑‍💼</span>;
    case "mobile":
      return <span className="text-lg">📱</span>;
    default:
      return <span className="text-lg">📌</span>;
  }
}

/* -------------------- NAV TAB -------------------- */
function NavTab({
  label,
  children,
  openProp,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}: {
  label: string;
  children?: React.ReactNode;
  openProp: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}) {
  return (
    <li
      className="relative flex items-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <button
        className="text-sm text-slate-100/90 hover:text-white/95 flex items-center gap-2 px-2 py-1 focus:outline-none"
        aria-haspopup="true"
        aria-expanded={openProp}
      >
        {label} <span className="text-xs opacity-80">▾</span>
      </button>

      {openProp && children}
    </li>
  );
}

/* -------------------- MENU CARD -------------------- */
/**
 * MenuCard renders anchor tags (<a>) rather than next/link because we intentionally
 * want to support `mailto:` links. For internal routes the href still points to an internal path.
 */
function MenuCard({
  items,
  anchoredToLeft = false,
}: {
  items: { icon: string; title: string; desc: string; href: string }[];
  anchoredToLeft?: boolean;
}) {
  return (
    <div
      className={`absolute z-40 top-full mt-2 ${anchoredToLeft ? "left-0" : "left-1/2 -translate-x-1/2"} w-80 bg-neutral-900 text-white rounded-xl shadow-2xl ring-1 ring-black/40`}
      role="menu"
      aria-label="submenu"
    >
      {/* arrow */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <div className="w-3.5 h-3.5 rotate-45 bg-neutral-900 ring-1 ring-black/30" />
      </div>

      <ul className="py-2">
        {items.map((item) => {
          const isExternal = item.href.startsWith("http");
          // render as normal <a> so mailto: works. For external links open in new tab.
          return (
            <li key={item.title}>
              <a
                href={item.href}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-start gap-3 px-4 py-3 hover:bg-white/6 transition rounded-lg"
              >
                <span className="flex-none w-9 h-9 rounded-lg bg-white/6 flex items-center justify-center">
                  <Icon id={item.icon} />
                </span>
                <div>
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-xs text-slate-300/80 mt-0.5">{item.desc}</div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* -------------------- HEADER (export) -------------------- */
export default function Header() {
  const [openMenu, setOpenMenu] = useState<"company" | "features" | null>(null);
  const timerRef = useRef<number | null>(null);

  // small open/close helpers with delay to avoid flicker
  const open = (id: "company" | "features") => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setOpenMenu(id);
  };
  const closeSoon = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setOpenMenu(null), 150);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-6 z-50 pointer-events-auto">
      <div className="relative">
        {/* centered pill background */}
        <div
          aria-hidden
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(1400px, calc(100% - 96px))",
            height: 72,
            top: 0,
          }}
          className="absolute z-0 -translate-y-1/2 pointer-events-none"
        >
          <div
            style={{
              height: "100%",
              borderRadius: 9999,
              background: "rgba(10,10,12,0.84)",
              boxShadow: "0 20px 60px rgba(2,6,23,0.45)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
            className="w-full h-full"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <nav
            className="relative z-10 flex items-center justify-between"
            style={{ minHeight: 72 }}
            role="navigation"
            aria-label="Primary"
          >
            {/* LEFT: logo */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/6 ring-1 ring-white/8 overflow-hidden">
                  {/* logo image - replace public/logo.png if needed */}
                  <Image src="/logo.png" alt="i-HRMS" width={36} height={36} style={{ objectFit: "contain" }} />
                </span>

                <span className="text-sm font-semibold text-slate-100 tracking-tight">i-HRMS</span>
              </Link>
            </div>

            {/* CENTER nav */}
            <ul className="flex items-center gap-8">
              <NavTab
                label="Company"
                openProp={openMenu === "company"}
                onMouseEnter={() => open("company")}
                onMouseLeave={closeSoon}
                onFocus={() => open("company")}
                onBlur={closeSoon}
              >
                <MenuCard items={COMPANY_MENU} anchoredToLeft />
              </NavTab>

              <NavTab
                label="Features"
                openProp={openMenu === "features"}
                onMouseEnter={() => open("features")}
                onMouseLeave={closeSoon}
                onFocus={() => open("features")}
                onBlur={closeSoon}
              >
                <MenuCard items={FEATURES_MENU} />
              </NavTab>

              <li>
                <Link href="/pricing" className="text-sm text-slate-100/90 hover:text-white/95 px-2 py-1">
                  Pricing
                </Link>
              </li>
            </ul>

            {/* RIGHT actions */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center h-10 px-4 rounded-full text-sm bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg"
              >
                {/* escape apostrophe to satisfy react/no-unescaped-entities */}
                <span>Let&apos;s Connect</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}