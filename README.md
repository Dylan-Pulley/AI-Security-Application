# External Cybersecurity Analyzer

CSBS 490 capstone. Dylan Pulley, Jarryd Toves, Vlad Kolesnik, Misha Lahunouski.

A tool that assesses an organization's security from the outside, the way an attacker with no inside access would see it. Starting with TLS: enter a site, get back what its certificate says.

    app/main.py        routes
    app/tls_check.py   connect over TLS, read the cert
    static/index.html  the page
    static/prot.html   Dylan's design mockup
    tests/             pytest
    docs/              team notes, open in Obsidian
    render.yaml        Render config

## Run

    python3 -m venv .venv
    source .venv/bin/activate
    pip install -r requirements-dev.txt
    uvicorn app.main:app --reload

http://127.0.0.1:8000

## Deploy

Push to main. Tests run. If green, Render deploys.
