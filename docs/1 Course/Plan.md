# Plan

Source: proposal doc, Oct 13. Canvas for due dates.

## What it does

User submits an HTTPS URL. Gets an assessment of TLS problems: outdated protocol version, weak or obsolete cipher suite, implementation or library bugs, certificate or configuration issues. Explained for a small business owner with no security person.

## Quarters

| Quarter | Work | End goal |
|---|---|---|
| 1 Research, planning, prototyping | TLS research. Requirements, architecture, tech choices. Prototype React UI. Prototype Python TLS collector. First rules and test requirements. | Proof of concept: a web page and the ability to pull TLS info from a site. Requirements and architecture final. |
| 2 Core development | FastAPI backend. Connect UI to collector. Rule engine with severity and descriptions. Postgres for results. Show findings in the UI. | MVP: submit a URL, run the check, see results in the browser. |
| 3 Validation, testing, deployment | Verify against known configurations. Integration, error, usability testing. Fix defects. Refine report. Export if time. Docs and demo. | Tested, documented app, deployable locally or hosted. |

Assumes three 10-week quarters, four members, 10 to 16 hours each per week.

## Izad's 10 steps

| Step | Where it stands |
|---|---|
| 1 Identify project | picked from Izad's Active Projects |
| 2 Problem, solution | proposal doc |
| 3 Target customer | proposal doc: small business with a public site, agencies second |
| 4 Competitors | proposal doc: Burp, Invicti, Detectify, Pentest Tools, HostedScan, ZAP, Wapiti |
| 5 Business model | not in the doc |
| 6 User stories | not written. Requirements due Oct 28 |
| 7 Scope, architecture, test plan | scope in doc. Architecture in doc. Test plan not written |
| 8 Validate with customers | not started |
| 9 Plan and execute | sponsor plan updated Tue/Thu before 4pm |
| 10 Build, release, review | Q2, Q3 |

## Due (Canvas)

| Date | What | Points |
|---|---|---|
| Oct 14 | Proposal + one-page personal analysis each | 20 |
| Oct 14 | Proposal slides, 15 min | 10 |
| Oct 28 | Requirements | 15 |
| Nov 4 | Early feedback | 5 |
| Nov 30 | System design + slides | 25 + 5 |
| Dec 2 | Self reflection, peer eval | |
