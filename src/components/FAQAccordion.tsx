'use client'
import { useState } from 'react'

export type FaqItem = {
  id: string
  q: string
  a: string
}

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items.length ? items[0].id : null)

  return (
    <div className="space-y-3">
      {items.map((it) => (
        <div key={it.id} className="border rounded-lg overflow-hidden">
          <button
            aria-expanded={openId === it.id}
            aria-controls={`faq-panel-${it.id}`}
            id={`faq-button-${it.id}`}
            onClick={() => setOpenId(openId === it.id ? null : it.id)}
            className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-slate-50 text-left"
          >
            <span className="font-medium text-slate-900">{it.q}</span>
            <span aria-hidden className="ml-4 text-slate-500">
              {openId === it.id ? '−' : '+'}
            </span>
          </button>

          <div
            id={`faq-panel-${it.id}`}
            role="region"
            aria-labelledby={`faq-button-${it.id}`}
            className={`px-5 pt-0 pb-4 bg-white ${openId === it.id ? 'block' : 'hidden'}`}
          >
            <p className="text-sm text-slate-600">{it.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}