import type { Scan } from './types'

function Card({ k, v, bad }: { k: string; v: string | number; bad?: boolean }) {
  return (
    <div className={'card' + (bad ? ' problem' : '')}>
      <div className="k">{k}</div>
      <div className="v">{v}</div>
    </div>
  )
}

export default function Result({ scan }: { scan: Scan }) {
  return (
    <section>
      <div className={'status ' + (scan.ok ? 'ok' : 'bad')}>
        <span className="dot" />
        <span>{scan.host}</span>
      </div>

      <div className="grid">
        {scan.ok ? (
          <>
            <Card k="Protocol" v={scan.protocol!} />
            <Card k="Cipher" v={scan.cipher!} />
            <Card k="Expires" v={scan.expires!} />
            <Card k="Days left" v={scan.days_left!} />
          </>
        ) : (
          <Card k="Problem" v={scan.problem!} bad />
        )}
      </div>

      <pre>{JSON.stringify(scan, null, 2)}</pre>
    </section>
  )
}
