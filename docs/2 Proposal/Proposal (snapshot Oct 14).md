# External Cybersecurity Analyzer, team proposal

Copied from the Google Doc on Oct 14, 2026. The doc is the live version: https://docs.google.com/document/d/12mebYCy6Y97qi7BlC2a7bgV2z_8tr6dsKDs4ZYo0sBU/edit

Dylan Pulley, Jarryd Toves, Vlad Kolesnik, Misha Lahunouski. October 13, 2026.

## Problem Statement

Small businesses and web development agencies depend on public websites but may lack a dedicated cybersecurity specialist. A website owner can encounter an expired certificate, a certificate issued for the wrong hostname, or an untrusted certificate chain without knowing what caused the problem or whom to contact. Technical tools may expose these conditions while leaving the owner to interpret the results and choose an action.

## Proposed Solution

The External Cybersecurity Analyzer will let a user submit an HTTPS URL, and receive an assessment of found vulnerabilities, with a current focus on TLS. Results will explain if there is an outdated protocol version, weak or obsolete cipher suite, implementation or library bugs, and if there are certificate or configuration issues.

## Target Customers

Primary: a small business that operates a public website, and no dedicated security specialist. Its owner or administrator needs clear findings and access to someone who can change the website or hosting configuration.

Secondary: a web development agency or freelance developer managing client websites. Agencies may gain value from consistent explanations and reusable reports across several sites.

## Competitors

Burp Suite DAST, Invicti, Detectify, Pentest Tools Website Scanner, HostedScan, OWASP ZAP, Wapiti.

| Option | Strength relative to ours | Limitation or tradeoff |
|---|---|---|
| Ours | Plain language TLS readout | Unproven usability, narrow coverage, we maintain it |
| OWASP ZAP | Established passive and active analysis, broad toolkit | Our bet is owners prefer a purpose built TLS explanation, needs usability testing |
| Burp Suite DAST | Enterprise dynamic testing, much broader | Exceeds a single TLS decision, we cannot match its depth |
| Manual or free cert check | Low cost, enough for one-off questions | Users still interpret the findings |

## Feasibility

React and TypeScript frontend, Python FastAPI backend, PostgreSQL. Frontend sends the URL, backend validates it and runs the TLS inspection module, a rule based engine compares findings to known standards and assigns severity and descriptions, results come back to the browser as a structured report. Postgres stores results.

Three ten week quarters, four members, 10 to 16 hours each per week. Team computers and a controlled TLS test environment.

## Scope, three quarters

See [[Plan]].
