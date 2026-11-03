---
title: "Defensive configuration, risk, incident response, and authorized testing"
summary: "Write firewall rules, replace insecure protocols, protect wireless and email, manage patches and changes, quantify risk, respond to incidents with NIST phases, set recovery priorities, and test only with authorization."
sourceIds: ["nist-csf","cisco"]
reviewed: "2026-11-02"
---

## Firewall rules and secure protocols

A firewall compares traffic against an ordered list of rules and applies the first rule that matches. Lists end with an implicit deny, so anything not explicitly allowed is blocked. Write specific rules first and general rules last, allow only what is needed, and document why each rule exists.

| # | Source | Destination | Port | Action | Reason |
| --- | --- | --- | --- | --- | --- |
| 1 | Any | Web server 10.0.40.10 | TCP 443 | Allow | Public website over HTTPS |
| 2 | Staff VLAN | Any | TCP 443 | Allow | Staff web browsing |
| 3 | Guest VLAN | Internal VLANs | Any | Deny | Keep guests out of internal systems |
| 4 | Guest VLAN | Any | TCP 443 | Allow | Guest web browsing |
| 5 | Any | Any | Any | Deny | Explicit default deny, logged |

- Replace Telnet with SSH, HTTP with HTTPS, FTP with SFTP, and SNMPv1 or v2c with SNMPv3.
- Wireless: use WPA3 (or WPA2 with AES), change the router's default admin password, disable WPS, update firmware, and separate guest Wi-Fi.
- Email: SPF, DKIM, and DMARC records help receivers reject forged mail from your domain; train users to report phishing; encrypt sensitive messages.
- Patch management and change control: test updates, schedule them, keep a rollback plan, and record every change.

## Measure and treat risk

Risk combines likelihood and impact. Qualitative analysis rates each as low, medium, or high in a matrix. Quantitative analysis uses money: single loss expectancy (SLE) equals asset value times exposure factor (the percent of the asset lost in one event). Annualized loss expectancy (ALE) equals SLE times the annualized rate of occurrence (ARO). A control is worth its cost if it reduces ALE by more than it costs each year.

Treatments are the same as in any risk management: avoid, mitigate (reduce), transfer (such as cyber insurance), or accept with documented approval. Record each risk, its owner, its rating, and its treatment in a risk register.

> **Example**
>
> A customer database is worth $50,000. A ransomware incident would destroy an estimated 40% of its value, and such an incident is expected once every two years. Offline backups costing $3,000 a year would reduce the exposure factor to 5%.
>
> 1. SLE: 50,000 x 40% = $20,000. ARO: 0.5. ALE: 20,000 x 0.5 = $10,000 a year.
> 2. With backups: SLE 50,000 x 5% = $2,500; ALE 2,500 x 0.5 = $1,250.
> 3. Reduction: 10,000 - 1,250 = $8,750 a year, versus a $3,000 cost.
>
> The backups are justified: they reduce expected annual loss by $8,750 for $3,000. State the estimates as assumptions, since likelihood figures are uncertain.

## Incident response and recovery

NIST's long-used incident response life cycle has four phases: preparation; detection and analysis; containment, eradication, and recovery; and post-incident activity (lessons learned). NIST's 2025 update aligns incident response with the Cybersecurity Framework 2.0 functions: Govern, Identify, Protect, Detect, Respond, and Recover. Either way, the work is similar: be ready before an incident, confirm and scope it, stop the spread, remove the cause, restore safely, and improve.

Recovery priorities come from a business impact analysis, which ranks systems by how much harm downtime causes and sets each system's RTO and RPO. Restore the most critical services first, from known-clean backups, and monitor closely for reinfection. Preserve evidence such as logs and disk images before wiping systems, keep a timeline, and follow legal notification requirements for breaches of personal data.

1. Detect: an alert shows a workstation contacting a known malicious server.
2. Analyze: confirm with logs, identify affected accounts and systems, and estimate scope.
3. Contain: isolate the workstation from the network and disable the compromised account.
4. Eradicate: remove the malware, close the entry point (such as an unpatched browser), and reset credentials.
5. Recover: restore from a clean backup if needed, return the system to service, and watch it closely.
6. Lessons learned: within about two weeks, document what happened, what worked, and what to change.

## Obfuscation and authorized testing

Obfuscation makes information harder to understand without hiding that it exists. Data masking shows only part of a value, such as the last four digits of a card number. Tokenization replaces sensitive data with a meaningless token stored separately. Code obfuscation makes software harder to reverse-engineer. Steganography hides data inside other files such as images. Obfuscation supplements encryption; it does not replace it.

Security testing must be authorized in writing. A vulnerability scan automatically checks systems for known weaknesses. A penetration test, performed by qualified testers under a signed scope and rules of engagement, actively tries to exploit weaknesses to show real risk. Bug bounty programs invite outside researchers under published rules. Testing systems you do not own or have permission to test is illegal under the Computer Fraud and Abuse Act and state laws, even with good intentions. Students should practice only in their own lab environments or sanctioned training platforms.

> **Try it yourself**
>
> A school's web server holds no sensitive data, but its outage would stop online club sign-ups. Downtime has averaged 6 hours a year, costing about $200 an hour in staff time. A redundant hosting plan costs $900 a year and would cut downtime to 1 hour. (a) Calculate the annual loss before and after. (b) Is the plan justified on cost alone? (c) Name one non-financial factor to consider.

<details>
<summary>Check your answer</summary>

(a) Before: 6 x 200 = $1,200. After: 1 x 200 = $200. (b) The reduction is $1,000 a year for a $900 cost, so it is slightly justified on cost alone. (c) Non-financial factors include reputation with students and parents, sign-up deadlines that cannot be missed, and staff frustration; these could strengthen the case.

</details>

## Key terms

**Implicit deny.** The firewall default of blocking any traffic not explicitly allowed.

**Annualized loss expectancy.** Expected yearly loss from a risk: single loss expectancy times annual rate of occurrence.

**Business impact analysis.** An assessment ranking systems by the harm their outage would cause.

**Penetration test.** An authorized simulated attack that tries to exploit vulnerabilities.

**Tokenization.** Replacing sensitive data with a non-sensitive token that maps to it in a secure system.
