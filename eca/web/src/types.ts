// what /api/scan returns. keep in step with app/tls_check.py
export type Scan = {
  host: string
  ok: boolean
  protocol?: string
  cipher?: string
  expires?: string
  days_left?: number
  problem?: string
}
