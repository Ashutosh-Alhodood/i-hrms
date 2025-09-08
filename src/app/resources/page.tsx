import Link from 'next/link'

const POSTS = [
  { id: 'launch-2025', title: 'Loyaltri product launch: What to expect', excerpt: 'A walkthrough of our product vision, early roadmap and how Loyaltri helps HR teams scale.' },
  { id: 'payroll-guide', title: 'Payroll best practices for growing teams', excerpt: 'Practical payroll tips, statutory checklists and automation ideas.' },
  { id: 'case-study', title: 'Case study — reducing time-to-hire by 40%', excerpt: 'How a mid-size retailer optimized hiring using automation and workflows.' }
]

export default function ResourcesPage() {
  return (
    <div>
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Resources</h1>
          <p className="mt-2 text-slate-600">Guides, case studies and product updates to help HR teams move faster.</p>
        </div>
      </header>

      <main className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {POSTS.map((p) => (
              <article key={p.id} className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{p.excerpt}</p>
                <Link href={`/resources/${p.id}`} className="text-brand-500 font-medium text-sm">Read article →</Link>
              </article>
            ))}
          </div>

          <section className="rounded-lg bg-slate-50 p-6 border">
            <h3 className="text-xl font-semibold mb-3">Whitepapers & guides</h3>
            <p className="text-slate-600 mb-4">Downloadable content and in-depth guides to run HR like a product team.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-medium">HR Automation Playbook</h4>
                <p className="text-sm text-slate-600">Checklist and automation patterns for onboarding, approvals and payroll.</p>
                <div className="mt-3">
                  <Link href="#" className="text-brand-500 text-sm">Download PDF</Link>
                </div>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-medium">Payroll Compliance by Region</h4>
                <p className="text-sm text-slate-600">Overview of common payroll and statutory concerns by region.</p>
                <div className="mt-3">
                  <Link href="#" className="text-brand-500 text-sm">Download PDF</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}