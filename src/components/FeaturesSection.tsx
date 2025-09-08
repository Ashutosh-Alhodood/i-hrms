// src/components/FeaturesSection.tsx
'use client'

import Image from 'next/image'
import React from 'react'

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container-wide">
        <div className="features-header">
          <div className="badge">FEATURES</div>
          <h2 className="mt-2">Powerful HRMS features built for your business</h2>
          <p className="text-muted">
            i-HRMS brings together recruitment, payroll, and workforce automation into one unified platform — built to
            save time, reduce errors, and empower HR teams.
          </p>
        </div>

        {/* Feature Card 1 - Recruitment */}
        <div className="feature-card">
          <div className="feature-card-inner">
            <div className="feature-copy">
              <div className="pill">RECRUITMENT</div>
              <h3>Onboard Employees in 60 Seconds</h3>
              <p className="lead text-muted">
                Streamline hiring with i-HRMS. Auto-generate offer letters, digital contracts, and compliance forms with
                built-in e-signatures — all accessible from any device.
              </p>

              <ul className="features-list">
                <li>Seamless paperless onboarding across desktop & mobile.</li>
                <li>Faster time-to-productivity with automated workflows.</li>
              </ul>

              <div className="testimonial">
                {/* replaced <img> with next/image */}
                <div className="avatar-wrapper" style={{ width: 48, height: 48, position: 'relative' }}>
                  <Image
                    src="/images/avatar-khaleel.jpg"
                    alt="Ashutosh Patil avatar"
                    fill
                    sizes="48px"
                    style={{ objectFit: 'cover', borderRadius: 8 }}
                  />
                </div>

                <div style={{ marginLeft: 12 }}>
                  <div style={{ fontWeight: 700 }}>Ashutosh Patil</div>
                  <div className="text-muted">Director, NIMS Dubai</div>
                </div>
              </div>
            </div>

            <div className="feature-visual">
              <Image
                src="/onboard.webp"
                alt="Onboarding with i-HRMS"
                width={920}
                height={520}
                sizes="(max-width: 1024px) 100vw, 520px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Feature Card 2 - Payroll */}
        <div className="feature-card alt reverse">
          <div className="feature-card-inner">
            <div className="feature-visual">
              <Image
                src="/payroll8.webp"
                alt="Payroll with i-HRMS"
                width={920}
                height={520}
                sizes="(max-width: 1024px) 100vw, 520px"
                priority
              />
            </div>

            <div className="feature-copy">
              <div className="pill">PAYROLL</div>
              <h3>Payroll 8X Faster</h3>
              <p className="lead text-muted">
                Automate complex payroll cycles with i-HRMS. From salary structures to tax deductions, generate accurate
                payslips and process payments instantly — no more spreadsheets.
              </p>

              <ul className="features-list">
                <li>Automated salary, tax, and compliance calculations.</li>
                <li>Digital payslip generation and seamless employee payouts.</li>
              </ul>

              <div className="testimonial">
                <div className="avatar-wrapper" style={{ width: 48, height: 48, position: 'relative' }}>
                  <Image
                    src="/images/avatar-rineesh.jpg"
                    alt="Rineesh Rafeek avatar"
                    fill
                    sizes="48px"
                    style={{ objectFit: 'cover', borderRadius: 8 }}
                  />
                </div>

                <div style={{ marginLeft: 12 }}>
                  <div style={{ fontWeight: 700 }}>Ashutosh Patil</div>
                  <div className="text-muted">General Manager, Imprint LLC Dubai</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Card 3 - Smart Search */}
        <div className="feature-card">
          <div className="feature-card-inner">
            <div className="feature-copy">
              <div className="pill">SMART NAVIGATION</div>
              <h3>Universal HR Search Bar</h3>
              <p className="lead text-muted">
                Find anything in seconds — from employee profiles and payroll records to policies and tasks. With i-HRMS,
                information is just one search away.
              </p>

              <ul className="features-list">
                <li>Instant access to HR data, tools, and actions.</li>
                <li>Boost productivity with intuitive, centralized navigation.</li>
              </ul>

              <div className="testimonial">
                <div className="avatar-wrapper" style={{ width: 48, height: 48, position: 'relative' }}>
                  <Image
                    src="/images/avatar-bindu.jpg"
                    alt="Bindu Joseph avatar"
                    fill
                    sizes="48px"
                    style={{ objectFit: 'cover', borderRadius: 8 }}
                  />
                </div>

                <div style={{ marginLeft: 12 }}>
                  <div style={{ fontWeight: 700 }}>Ashutosh Patil</div>
                  <div className="text-muted">Center Manager, Seedse Dubai</div>
                </div>
              </div>
            </div>

            <div className="feature-visual">
              <Image
                src="/search.webp"
                alt="Search in i-HRMS"
                width={920}
                height={520}
                sizes="(max-width: 1024px) 100vw, 520px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}