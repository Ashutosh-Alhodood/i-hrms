'use client'

import { useState } from 'react'

export default function AdminLoginPage() {
  const [secret, setSecret] = useState('')
  const [error, setError] = useState<string | null>(null)

  // read ?next= from location.search in a safe way (client-only)
  function getNextPath() {
    try {
      const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '')
      return params.get('next') || '/admin'
    } catch {
      return '/admin'
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!secret.trim()) {
      setError('Please enter the admin secret')
      return
    }

    // Redirect to the target with ?secret=... — middleware will set cookie server-side
    const next = getNextPath()
    // Ensure next doesn't already include secret param
    const separator = next.includes('?') ? '&' : '?'
    const url = `${next}${separator}secret=${encodeURIComponent(secret)}`
    // Use assign so middleware executes on server
    window.location.assign(url)
  }

  return (
    <div>
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <h1 className="text-xl font-semibold">Admin login</h1>
          <p className="text-sm text-slate-600 mt-1">Enter the ADMIN_SECRET to proceed. This page is for local development only.</p>
        </div>
      </header>

      <main className="section bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={onSubmit} className="bg-white p-6 rounded border shadow-sm">
            <label className="block text-sm font-medium mb-2">Admin Secret</label>
            <input
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              type="password"
              className="w-full border px-3 py-2 rounded mb-3"
              placeholder="Enter admin secret"
            />
            {error && <div className="text-rose-600 text-sm mb-3">{error}</div>}

            <div className="flex gap-3">
              <button type="submit" className="bg-brand-500 text-white px-4 py-2 rounded-md">Sign in</button>
              <button type="button" className="px-4 py-2 border rounded-md" onClick={() => { setSecret(''); setError(null) }}>Reset</button>
            </div>
          </form>

          <div className="mt-6 text-sm text-slate-600">
            Tip: set <code className="bg-slate-100 px-2 py-0.5 rounded">ADMIN_SECRET</code> in your <code className="bg-slate-100 px-2 py-0.5 rounded">.env.local</code>.
          </div>
        </div>
      </main>
    </div>
  )
}