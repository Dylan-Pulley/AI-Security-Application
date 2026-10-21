import { useState } from 'react'
import Result from './Result'
import type { Scan } from './types'

export default function App() {
  const [url, setUrl] = useState('clark.edu')
  const [scan, setScan] = useState<Scan | null>(null)
  const [busy, setBusy] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    const r = await fetch('/api/scan', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ url: url.trim() }),
    })
    setScan(await r.json())
    setBusy(false)
  }

  return (
    <main>
      <h1>External Cybersecurity Analyzer</h1>
      <p className="sub">Enter a site. We connect over TLS and tell you what we saw.</p>

      <form onSubmit={submit}>
        <input value={url} onChange={e => setUrl(e.target.value)} placeholder="example.com" />
        <button disabled={busy}>{busy ? 'Scanning' : 'Scan'}</button>
      </form>

      {scan && <Result scan={scan} />}
    </main>
  )
}
