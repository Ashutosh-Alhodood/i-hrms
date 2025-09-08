// src/components/ContactForm.tsx
'use client'
import { useState } from 'react'
import axios from 'axios'

type FormState = {
  name: string
  email: string
  company?: string
  phone?: string
  employees?: string
  message?: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    message: ''
  })

  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null)
  const [errors, setErrors] = useState<Record<string,string>>({})

  function update(field: keyof FormState, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: '' }))
    setStatus(null)
  }

  function validate(): boolean {
    const next: Record<string,string> = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Email looks invalid'
    // phone optional; if given, do a simple digits check
    if (form.phone && !/^[\d\s()+-]{6,20}$/.test(form.phone)) next.phone = 'Phone looks invalid'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus(null)
    if (!validate()) return

    setSubmitting(true)
    try {
      const payload = {
        ...form,
        timestamp: new Date().toISOString()
      }
      const res = await axios.post('/api/leads', payload, { timeout: 8000 })
      if (res.status === 201) {
        setStatus({ ok: true, msg: 'Thanks — we received your request. We will get back within 24 hours.' })
        setForm({ name: '', email: '', company: '', phone: '', employees: '', message: '' })
      } else {
        setStatus({ ok: false, msg: res.data?.message || 'Unexpected response' })
      }
    } catch (err: unknown) {
      // Narrow the unknown to extract useful info without using `any`.
      // Axios errors often have `response` property.
      let message = 'Network error. Try again.'
      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message || err.message || message
      } else if (err instanceof Error) {
        message = err.message
      }
      // Log the error for dev debugging
      console.error('submit error', message)
      setStatus({ ok: false, msg: message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-2xl bg-white p-6 rounded-lg border shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Request a Demo</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Full name</label>
          <input
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={`w-full border px-3 py-2 rounded ${errors.name ? 'border-rose-500' : 'border-slate-200'}`}
            placeholder="Jane Doe"
            required
          />
          {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={`w-full border px-3 py-2 rounded ${errors.email ? 'border-rose-500' : 'border-slate-200'}`}
            placeholder="name@company.com"
            required
          />
          {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Company</label>
          <input
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            className="w-full border px-3 py-2 rounded border-slate-200"
            placeholder="Acme Corp"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={`w-full border px-3 py-2 rounded ${errors.phone ? 'border-rose-500' : 'border-slate-200'}`}
            placeholder="+971 5X XXXX XXX"
          />
          {errors.phone && <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Number of employees (approx)</label>
          <input
            value={form.employees}
            onChange={(e) => update('employees', e.target.value)}
            className="w-full border px-3 py-2 rounded border-slate-200"
            placeholder="e.g., 50"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Message (optional)</label>
          <textarea
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            rows={4}
            className="w-full border px-3 py-2 rounded border-slate-200"
            placeholder="How can we help?"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 bg-brand-500 text-white px-4 py-2 rounded-md font-semibold shadow-sm hover:brightness-95 disabled:opacity-60"
        >
          {submitting ? 'Submitting…' : 'Request free demo'}
        </button>

        <button
          type="button"
          onClick={() => { setForm({ name: '', email: '', company: '', phone: '', employees: '', message: '' }); setStatus(null); setErrors({}) }}
          className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-md text-sm"
        >
          Reset
        </button>
      </div>

      {status && (
        <div className={`mt-4 p-3 rounded ${status.ok ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
          {status.msg}
        </div>
      )}
    </form>
  )
}