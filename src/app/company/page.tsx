import Link from 'next/link'

export default function CompanyPage() {
  return (
    <div>
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Company</h1>
          <p className="mt-2 text-slate-600">We build HR software that teams actually use. Our background is in HR, product and engineering.</p>
        </div>
      </header>

      <main className="section bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our mission</h2>
              <p className="text-slate-600 mb-4">To simplify work for HR teams by automating the repetitive and surfacing the important. We focus on usability, compliance and measurable outcomes.</p>

              <h3 className="font-medium mb-2">What we believe</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Product-led HR tooling accelerates adoption.</li>
                <li>Security and compliance are table stakes, not features.</li>
                <li>Customers succeed with simple integrations and fast support.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded border">
              <h4 className="font-semibold mb-3">Leadership</h4>
              <div className="space-y-4">
                <div>
                  <div className="font-medium">Aisha Khan</div>
                  <div className="text-sm text-slate-600">CEO — 15 years HR + product</div>
                </div>

                <div>
                  <div className="font-medium">Ravi Patel</div>
                  <div className="text-sm text-slate-600">Head of Engineering</div>
                </div>

                <div>
                  <div className="font-medium">Sara Mitchell</div>
                  <div className="text-sm text-slate-600">Head of Customer Success</div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white p-6 rounded border">
            <h3 className="text-xl font-semibold mb-3">History & milestones</h3>
            <ol className="list-decimal list-inside text-slate-600 space-y-3">
              <li><strong>2021:</strong> Company founded with focus on HR automation.</li>
              <li><strong>2022:</strong> Launched Core HR and mobile app beta.</li>
              <li><strong>2024:</strong> Released payroll integrations and opened UAE office.</li>
            </ol>
          </section>

          <section className="rounded-lg bg-white p-6 border">
            <h3 className="text-xl font-semibold mb-3">Careers</h3>
            <p className="text-slate-600 mb-4">We’re hiring engineers, product designers and Customer Success. If you want to build for HR teams, <Link href="/contact" className="text-brand-500">get in touch</Link>.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded">
                <div className="font-medium">Senior Frontend Engineer</div>
                <div className="text-sm text-slate-600">Full-time — remote</div>
              </div>

              <div className="p-4 border rounded">
                <div className="font-medium">Product Designer</div>
                <div className="text-sm text-slate-600">Full-time — hybrid</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}