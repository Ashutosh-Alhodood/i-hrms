import fs from 'fs'
import path from 'path'
import { format } from 'date-fns'

type LeadFile = {
  name: string
  path: string
  mtimeMs: number
  email?: string
  timestamp?: string
  preview?: string
}

const LEADS_DIR = process.env.LEADS_DIR || path.resolve('/tmp')

async function readLeadFiles(): Promise<LeadFile[]> {
  try {
    const exists = fs.existsSync(LEADS_DIR)
    if (!exists) return []

    const files = await fs.promises.readdir(LEADS_DIR)
    const jsonFiles = files.filter((f) => f.toLowerCase().startsWith('loyaltri-lead') && f.endsWith('.json'))

    const entries: LeadFile[] = await Promise.all(
      jsonFiles.map(async (name) => {
        const p = path.join(LEADS_DIR, name)
        const stat = await fs.promises.stat(p)
        let email: string | undefined
        let timestamp: string | undefined
        let preview: string | undefined
        try {
          const raw = await fs.promises.readFile(p, 'utf-8')
          const parsed = JSON.parse(raw)
          email = parsed.email
          timestamp = parsed.timestamp
          preview = raw.length > 500 ? raw.slice(0, 500) + '…' : raw
        } catch (e) {
          // ignore parse errors but still return file entry
        }
        return { name, path: p, mtimeMs: stat.mtimeMs, email, timestamp, preview }
      })
    )

    // newest first
    entries.sort((a, b) => b.mtimeMs - a.mtimeMs)
    return entries
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('readLeadFiles error', err)
    return []
  }
}

export default async function AdminPage({ searchParams }: { searchParams?: { file?: string } }) {
  const files = await readLeadFiles()
  const selected = searchParams?.file ? files.find((f) => f.name === searchParams.file) : files[0]

  // If we have a selected file, read its full content
  let fullContent: string | null = null
  if (selected) {
    try {
      fullContent = await fs.promises.readFile(selected.path, 'utf-8')
    } catch (e) {
      fullContent = `Error reading file: ${(e as Error).message}`
    }
  }

  return (
    <div>
     <header className="bg-white border-b">
  <div className="max-w-7xl mx-auto px-6 py-6 flex items-start justify-between">
    <div>
      <h1 className="text-2xl font-semibold">Leads admin (local)</h1>
      <p className="text-sm text-slate-600 mt-1">Viewing files in <code className="bg-slate-100 px-2 py-0.5 rounded">{LEADS_DIR}</code>. This page is for local development only.</p>
    </div>

    <div className="ml-4">
      <a
        href="/api/admin/logout"
        className="inline-flex items-center gap-2 rounded-md px-3 py-2 border text-sm text-slate-700 hover:bg-slate-50"
      >
        Logout
      </a>
    </div>
  </div>
</header>

      <main className="section bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white p-4 rounded border">
              <h3 className="font-medium mb-3">Recent leads</h3>

              {files.length === 0 ? (
                <p className="text-sm text-slate-600">No lead files found in the directory.</p>
              ) : (
                <ul className="space-y-2">
                  {files.map((f) => (
                    <li key={f.name}>
                      <a
                        href={`?file=${encodeURIComponent(f.name)}`}
                        className="block p-3 rounded hover:bg-slate-50"
                        aria-current={selected?.name === f.name ? 'true' : undefined}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-slate-900">{f.email ?? <span className="text-slate-500">{f.name}</span>}</div>
                            <div className="text-xs text-slate-500">
                              {f.timestamp ? format(new Date(f.timestamp), "yyyy-MM-dd HH:mm:ss") : format(new Date(f.mtimeMs), "yyyy-MM-dd HH:mm:ss")}
                            </div>
                          </div>

                          <div className="text-xs text-slate-400 ml-4">{f.name.replace('loyaltri-lead-', '')}</div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded border">
              <h3 className="font-medium mb-4">Lead detail</h3>

              {!selected ? (
                <p className="text-sm text-slate-600">No file selected.</p>
              ) : (
                <>
                  <div className="mb-4 text-sm text-slate-600">
                    <div><strong>File:</strong> {selected.name}</div>
                    <div><strong>Path:</strong> <code className="bg-slate-100 px-2 py-0.5 rounded">{selected.path}</code></div>
                  </div>

                  <pre className="bg-slate-900 text-white rounded p-4 overflow-auto text-sm" style={{ maxHeight: '520px' }}>
                    {fullContent}
                  </pre>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}