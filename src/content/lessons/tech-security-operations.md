---
title: "Respond to incidents and maintain continuity"
summary: "Preparing for incidents, containing damage, and restoring services."
sourceIds: ["cisco"]
reviewed: "2026-10-27"
---

## Prepare before a disruption

Security operations turn policy into repeatable daily work. Maintain an inventory of assets, owners and critical services so alerts have context. Establish baselines for ordinary activity, collect useful logs and synchronize clocks. Vulnerability management identifies weaknesses, assesses priority, applies remediation and verifies the result. Patching should include testing and rollback appropriate to the system. Incident plans define decision makers, communications and escalation routes. Business continuity keeps essential operations functioning during disruption; disaster recovery focuses on restoring technology and data. Both require exercises, named responsibilities and accessible instructions.

## Contain, investigate and recover

When an incident is suspected, follow the approved response plan rather than improvising a destructive cleanup. Confirm what is known and isolate affected resources when authorized to limit spread. Preserve logs and other evidence, record actions and maintain a chain of custody if formal investigation requires it. Eradication removes the cause; recovery restores trustworthy services and watches for recurrence. Notify the appropriate responsible people using established channels. Avoid promises about legal reporting deadlines without current jurisdiction-specific guidance. Evidence collection and service restoration can conflict, so the designated incident authority should direct priorities.

> **Example**
>
> A workstation begins encrypting shared files.
>
> Escalate immediately and use the approved containment process to isolate the affected endpoint or access. Preserve relevant evidence and assess backups before restoring into an environment that may still be compromised.

## Learn from the event

A post-incident review explains the timeline, impact, detection gaps and corrective actions without replacing evidence with blame. Assign owners and deadlines to improvements. Verify restored data, required permissions and application behavior before returning to normal work. Recovery point and recovery time targets help judge whether restoration met business needs. Common mistakes include restoring backups without removing the attack path, deleting logs before investigation, and confusing an absence of alerts with proof of safety. Test communication and manual workarounds too: a technically valid backup is less useful when staff cannot access the procedure or contact the recovery team.

## Key terms

**Containment.** Limiting the spread or impact of an incident.

**Chain of custody.** A record of evidence handling, possession and transfers.

**Business continuity.** Maintaining essential operations through a disruption.
