import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ADMIN_SECRET = process.env.ADMIN_SECRET || ''
const COOKIE_NAME = 'admin_auth'
const COOKIE_MAX_AGE = 60 * 60 // 1h

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl

  // ✅ Skip login page itself (avoid loop)
  if (pathname.startsWith('/admin/login')) {
    return NextResponse.next()
  }

  if (!pathname.startsWith('/admin')) return NextResponse.next()

  if (!ADMIN_SECRET) {
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }

  // 1) cookie
  const cookie = req.cookies.get(COOKIE_NAME)?.value
  if (cookie && cookie === ADMIN_SECRET) {
    return NextResponse.next()
  }

  // 2) ?secret=
  const candidate = searchParams.get('secret')
  if (candidate && candidate === ADMIN_SECRET) {
    const redirectUrl = new URL(req.nextUrl)
    redirectUrl.searchParams.delete('secret')
    const res = NextResponse.redirect(redirectUrl)
    res.cookies.set({
      name: COOKIE_NAME,
      value: ADMIN_SECRET,
      maxAge: COOKIE_MAX_AGE,
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
    })
    return res
  }

  // default → login
  const loginUrl = new URL('/admin/login', req.url)
  loginUrl.searchParams.set('next', pathname + req.nextUrl.search)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/admin/:path*'], // ✅ still protects /admin, but login route is excluded by the skip above
}