---
title: "Service desk operations: tickets, escalation, changes, and security cases"
summary: "Work tickets from intake to closure, set priority, escalate through support tiers, document clearly, handle change requests and remote access, administer accounts, and follow a malware removal procedure."
sourceIds: ["microsoft","nist-csf"]
reviewed: "2026-11-02"
---

## Service management basics

IT service management frameworks such as ITIL separate kinds of work. An incident is an unplanned interruption, such as a laptop that will not connect. A service request is a routine ask, such as a new account or software install. A problem is the underlying cause of one or more incidents, investigated to prevent repeats. A change is any addition, modification, or removal that could affect services.

Priority is usually set from impact (how many people or how critical the service) and urgency (how soon it causes harm). A payroll system down on payday is high impact and high urgency. One user's printer preference is low on both. A service level agreement (SLA) sets response and resolution targets by priority.

| Tier | Who | Handles |
| --- | --- | --- |
| Tier 0 | Self-service | Knowledge base articles, password reset portal |
| Tier 1 | Service desk | Intake, common fixes, account unlocks, routing |
| Tier 2 | Desktop or application specialists | Deeper troubleshooting, on-site work |
| Tier 3 | Engineers, developers, or vendors | Complex system, network, or code issues |

## Work a ticket from start to finish

Good ticket notes are factual and specific: "User could not print to Room 210 printer. Queue showed 14 stuck jobs. Restarted Print Spooler service; queue cleared; test page printed; user confirmed at 10:42." Avoid vague notes such as "fixed printer."

1. Log: record the user, contact information, device, and the user's description in their words.
2. Categorize and prioritize using impact and urgency.
3. Diagnose with the troubleshooting method and the knowledge base.
4. Resolve or escalate. When escalating, include everything tried so far so the next tier does not repeat it, and tell the user who has it and when to expect contact.
5. Confirm with the user that the issue is fixed before closing.
6. Document the cause and resolution clearly enough that a coworker could repeat it, and update the knowledge base if the fix is new.

## Changes, remote access, and administration

A change request describes the change, its reason, risk, affected users, test plan, implementation steps, rollback plan, and scheduled maintenance window. A change advisory board or manager approves significant changes. Unapproved changes are a common cause of outages.

Remote support tools let technicians see or control a user's computer, with the user's consent. Remote Desktop Protocol (RDP) uses port 3389 and should not be exposed directly to the internet; use a VPN. SSH (port 22) provides secure command-line access. For file transfer, use SFTP or FTPS rather than FTP, which sends passwords in plain text.

Active Directory organizes users, computers, and groups in a domain, often grouped into organizational units, with Group Policy applying settings. Assign permissions to groups rather than individuals, follow least privilege, and verify a caller's identity before resetting a password, since attackers impersonate users. Cloud services such as Microsoft 365 or Google Workspace have admin consoles for accounts, licenses, mail flow, and spam filtering. Load balancers spread traffic across several servers so one failure does not stop a service.

## Malware removal and security escalation

A widely taught malware removal procedure keeps infections from spreading and returning. If the case involves possible data theft, ransomware, or a compromised account with access to sensitive systems, escalate to the security team immediately and preserve evidence rather than wiping the device.

1. Investigate and verify the symptoms, such as pop-ups, unknown programs, or security software disabled.
2. Quarantine the system by disconnecting it from the network.
3. Disable System Restore on Windows so infected restore points are not reused.
4. Remediate: update the anti-malware tools, scan (in Safe Mode or a recovery environment if needed), and remove the malware.
5. Schedule scans and install updates.
6. Re-enable System Restore and create a clean restore point.
7. Educate the user about how the infection likely happened.

> **Example**
>
> Ticket: A user says their browser homepage changed and ads appear everywhere. They recently installed a free PDF converter.
>
> Priority: medium (one user, can work but at risk). Steps: verify the symptoms, disconnect from the network, check installed programs and browser extensions, remove the converter and the unwanted extension, run an updated anti-malware scan, reset browser settings, reconnect, and confirm. Notes record the program name and the cleanup. The user is shown how to get software from approved sources. If the scan finds a credential stealer, escalate to security and reset the user's passwords from a clean device.

> **Try it yourself**
>
> Set the priority (high, medium, or low) and first action for each: (a) The online store's checkout page is down for all customers. (b) A new employee needs a monitor next week. (c) One user's account is locked after password attempts they say they did not make.

<details>
<summary>Check your answer</summary>

(a) High impact and high urgency: escalate immediately to the web or application team, notify stakeholders, and track under the SLA. (b) Low: log it as a service request and schedule delivery before the start date. (c) Medium to high, because it may be an attack: verify the user's identity through a trusted channel, check sign-in logs, reset the password, enable or confirm MFA, and alert security if the attempts came from unknown locations.

</details>

## Key terms

**Incident.** An unplanned interruption or reduction in quality of a service.

**Service level agreement.** A commitment setting response and resolution targets for services.

**Escalation.** Moving a ticket to a higher support tier or specialist.

**Rollback plan.** Steps to undo a change if it causes problems.

**Least privilege.** Giving users only the access they need to do their jobs.
