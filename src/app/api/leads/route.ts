// src/app/api/leads/route.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import sgMail from "@sendgrid/mail";

type Lead = {
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  employees?: string | null;
  message?: string | null;
  timestamp?: string | null;
};

function validate(data: Partial<Lead>) {
  const errors: string[] = [];
  if (!data || typeof data !== "object") {
    errors.push("Invalid payload");
    return errors;
  }
  if (!data.name || typeof data.name !== "string" || !data.name.trim()) errors.push("Name required");
  if (
    !data.email ||
    typeof data.email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
  )
    errors.push("Valid email required");
  return errors;
}

async function sendNotificationEmail(lead: Lead) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const to = process.env.LEADS_NOTIFY_TO;
  const from = process.env.LEADS_NOTIFY_FROM;

  if (!apiKey || !to || !from) {
    // Not configured — log a warning and skip
    console.warn(
      "SendGrid not configured (SENDGRID_API_KEY, LEADS_NOTIFY_TO, LEADS_NOTIFY_FROM). Skipping email notification."
    );
    return;
  }

  try {
    sgMail.setApiKey(apiKey);

    const subject = `New demo request: ${lead.name} — ${lead.company ?? "No company"}`;
    const htmlBody = `
      <h3>New demo request</h3>
      <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(lead.company ?? "-")}</p>
      <p><strong>Phone:</strong> ${escapeHtml(lead.phone ?? "-")}</p>
      <p><strong>Employees:</strong> ${escapeHtml(lead.employees ?? "-")}</p>
      <p><strong>Message:</strong> ${lead.message ? `<pre style="white-space:pre-wrap;">${escapeHtml(lead.message)}</pre>` : "-"}</p>
      <p><em>Timestamp: ${escapeHtml(lead.timestamp ?? new Date().toISOString())}</em></p>
    `;

    const msg = {
      to,
      from,
      subject,
      html: htmlBody,
    };

    await sgMail.send(msg);
    console.log("SendGrid: notification sent to", to);
  } catch (err: unknown) {
    // Safely extract message from unknown
    const message = extractErrorMessage(err);
    console.error("SendGrid error:", message);
  }
}

/** Small helper to escape HTML in email body to reduce injection risk */
function escapeHtml(input: string | null | undefined) {
  if (!input) return "";
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Extract a string message from unknown errors */
function extractErrorMessage(err: unknown) {
  if (!err) return String(err);
  if (typeof err === "string") return err;
  if (err instanceof Error) return err.message;
  try {
    return JSON.stringify(err);
  } catch {
    return String(err);
  }
}

export async function POST(req: NextRequest) {
  try {
    // parse and validate payload
    const payload = (await req.json()) as Partial<Lead>;
    const errors = validate(payload);
    if (errors.length) return NextResponse.json({ message: "validation error", errors }, { status: 400 });

    const lead: Lead = {
      name: payload.name!.trim(),
      email: payload.email!.trim(),
      company: payload.company?.trim() ?? null,
      phone: payload.phone?.trim() ?? null,
      employees: payload.employees?.trim() ?? null,
      message: payload.message?.trim() ?? null,
      timestamp: payload.timestamp ?? new Date().toISOString(),
    };

    // persist to file (local dev)
    const filename = `loyaltri-lead-${Date.now()}.json`;
    const outdir = process.env.LEADS_DIR || "/tmp";
    const fpath = path.join(outdir, filename);
    await fs.promises.mkdir(outdir, { recursive: true });
    await fs.promises.writeFile(fpath, JSON.stringify(lead, null, 2), { encoding: "utf-8" });

    console.log("New lead saved:", fpath, lead.email);

    // send email notification (await so we can log errors)
    await sendNotificationEmail(lead);

    return NextResponse.json({ message: "lead received", file: fpath }, { status: 201 });
  } catch (err: unknown) {
    const message = extractErrorMessage(err);
    console.error("API /api/leads error:", message);
    return NextResponse.json({ message: "internal error" }, { status: 500 });
  }
}