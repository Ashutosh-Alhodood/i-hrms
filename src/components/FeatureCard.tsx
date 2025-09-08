'use client'
import React from 'react'
import useReveal from '@/app/hooks/useReveal'

export default function FeatureCard({ title, children, index = 0 }: { title: string; children: React.ReactNode; index?: number }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <article ref={ref} className="p-6 rounded-lg bg-white border shadow-sm reveal" data-reveal-index={index} >
      <div className="h-10 w-10 rounded-md bg-brand-100 flex items-center justify-center mb-4 text-brand-700">I</div>
      <h4 className="font-semibold mb-2 text-slate-900">{title}</h4>
      <p className="text-sm text-slate-600">{children}</p>
    </article>
  )
}