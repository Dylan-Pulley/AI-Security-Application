# Architecture

Source: proposal doc, Technical feasibility section.

React + TypeScript frontend, Python FastAPI backend, PostgreSQL.

```mermaid
flowchart LR
    A[React page] -->|URL| B[FastAPI]
    B --> C[TLS inspection module]
    C -->|connect| D[Target site]
    C --> E[Rule engine]
    E --> F[Report: severity, description, fix]
    F --> B
    B --> A
    E --> G[Postgres]
```

## What exists today

```mermaid
flowchart LR
    A[Dylan's html] -->|POST /api/scan| B[FastAPI]
    B --> C[tls_check.py]
    C --> D[Target site]
```

- app/main.py: routes
- app/tls_check.py: opens a TLS connection, reads the cert
- static/index.html: Dylan's page, sample data only, not wired to the API yet
- Render deploys main after tests pass
