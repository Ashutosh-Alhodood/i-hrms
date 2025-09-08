import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const COOKIE_NAME = 'admin_auth'

// GET handler — clears cookie and redirects to login
export async function GET(req: NextRequest) {
  const loginUrl = new URL('/admin/login', req.url)
  const res = NextResponse.redirect(loginUrl)

  // Clear the cookie by setting maxAge=0 and empty value
  res.cookies.set({
    name: COOKIE_NAME,
    value: '',
    maxAge: 0,
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
  })

  return res
}