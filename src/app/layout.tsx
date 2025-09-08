import './globals.css'
import type { ReactNode } from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: "i-HRMS – HRMS Platform Made by HR for HR",
  description: "Simplify hiring, onboarding, payroll and HR operations with i-HRMS.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
      

        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}