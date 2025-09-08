'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

export default function MobileNav({ open, setOpen }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) {
  const panelRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, setOpen])

  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-50 transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />

      <div ref={panelRef} className={`absolute right-0 top-0 h-full w-80 bg-[#0a0a0a] p-6 shadow-lg transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform`}>
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="flex items-center gap-3">
            {/* logo-ihrms image */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/6 flex items-center justify-center">
              <Image src="/logo-ihrms.png" alt="i-HRMS" fill style={{ objectFit: 'cover' }} />
            </div>

            {/* i-HRMS text - nice weight, letter spacing */}
            <span className="text-white font-extrabold tracking-tight text-lg" style={{ fontFamily: 'Poppins, system-ui, -apple-system, "Segoe UI", Roboto' }}>
              i-HRMS
            </span>
          </Link>

          <button onClick={() => setOpen(false)} className="text-white/90 text-xl leading-none" aria-label="Close menu">✕</button>
        </div>

        <nav className="flex flex-col gap-4">
          <Link href="/company" onClick={() => setOpen(false)} className="text-white/90">Company</Link>
          <Link href="/features" onClick={() => setOpen(false)} className="text-white/90">Features</Link>
          <Link href="/resources" onClick={() => setOpen(false)} className="text-white/90">Resources</Link>
          <Link href="/pricing" onClick={() => setOpen(false)} className="text-white/90">Pricing</Link>
        </nav>

        <div className="mt-6 border-t border-white/6 pt-4">
          <Link href="/login" className="block text-center rounded-full bg-white text-black py-2 mb-3">Login</Link>
         <Link href="/contact" className="block text-center rounded-full bg-gradient-to-r from-[#6f5cff] to-[#4b3cff] text-white py-2">
  Let&apos;s Connect
</Link>
        </div>
      </div>
    </div>
  )
}