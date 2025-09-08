import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import sgMail from '@sendgrid/mail'

type Lead = {
  name: string
  email: string
  company?: string
  phone?: string
  employees?: string
  message?: string
  timestamp?: string
}

function validate(data: Partial<Lead>) {
  const errors: string[] = []
  if (!data || typeof data !== 'object') {
    errors.push('Invalid payload')
    return errors
  }
  if (!data.name || typeof data.name !== 'string' || !data.name.trim()) errors.push('Name required')
  if (!data.email || typeof data.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Valid email required')
  return errors
}

async function sendNotificationEmail(lead: Lead) {
  const apiKey = process.env.SENDGRID_API_KEY
  const to = process.env.LEADS_NOTIFY_TO
  const from = process.env.LEADS_NOTIFY_FROM

  if (!apiKey || !to || !from) {
    // eslint-disable-next-line no-console
    console.warn('SendGrid not configured (SENDGRID_API_KEY, LEADS_NOTIFY_TO, LEADS_NOTIFY_FROM). Skipping email notification.')
    return
  }

  try {
    sgMail.setApiKey(apiKey)

    const subject = `New demo request: ${lead.name} — ${lead.company ?? 'No company'}`
    const htmlBody = `
      <h3>New demo request</h3>
      <p><strong>Name:</strong> ${lead.name}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Company:</strong> ${lead.company ?? '-'}</p>
      <p><strong>Phone:</strong> ${lead.phone ?? '-'}</p>
      <p><strong>Employees:</strong> ${lead.employees ?? '-'}</p>
      <p><strong>Message:</strong> ${lead.message ? `<pre style="white-space:pre-wrap;">${String(lead.message)}</pre>` : '-'}</p>
      <p><em>Timestamp: ${lead.timestamp ?? new Date().toISOString()}</em></p>
    `

    const msg = {
      to,
      from,
      subject,
      html: htmlBody
    }

    await sgMail.send(msg)
    // eslint-disable-next-line no-console
    console.log('SendGrid: notification sent to', to)
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('SendGrid error:', err?.message || err)
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json() as Partial<Lead>
    const errors = validate(payload)
    if (errors.length) return NextResponse.json({ message: 'validation error', errors }, { status: 400 })

    const lead: Lead = {
      name: payload.name!.trim(),
      email: payload.email!.trim(),
      company: payload.company?.trim(),
      phone: payload.phone?.trim(),
      employees: payload.employees?.trim(),
      message: payload.message?.trim(),
      timestamp: payload.timestamp || new Date().toISOString()
    }

    // persist to file (local dev)
    const filename = `loyaltri-lead-${Date.now()}.json`
    const outdir = process.env.LEADS_DIR || '/tmp'
    const fpath = path.join(outdir, filename)
    await fs.promises.mkdir(outdir, { recursive: true })
    await fs.promises.writeFile(fpath, JSON.stringify(lead, null, 2), { encoding: 'utf-8' })

    // log for dev visibility
    // eslint-disable-next-line no-console
    console.log('New lead saved:', fpath, lead.email)

    // send email notification (fire-and-forget within async flow)
    // await here so we can log failures, but errors are caught
    await sendNotificationEmail(lead)

    return NextResponse.json({ message: 'lead received', file: fpath }, { status: 201 })
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('API /api/leads error:', err?.message || err)
    return NextResponse.json({ message: 'internal error' }, { status: 500 })
  }
}