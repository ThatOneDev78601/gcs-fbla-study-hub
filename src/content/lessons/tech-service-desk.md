---
title: "Troubleshooting and service-desk support"
summary: "How to ask about a problem, test possible causes, and check the fix."
sourceIds: ["cisco","microsoft"]
reviewed: "2026-10-27"
---

## Ask questions and record the problem

An incident is an interruption or reduction in service. A service request asks for a standard item such as approved software or access. A problem investigation seeks the underlying cause of recurring incidents. Record the user, device, exact symptom, onset, impact and recent changes. Ask open questions first, then narrow them with specific tests. Prioritize using business impact and urgency: a shared checkout outage can outrank one employee’s cosmetic issue. Avoid asking users to expose passwords or unnecessary personal data. Explain what you are testing in language the user understands.

## Test a hypothesis and restore service

Establish the scope, identify likely causes and choose the least disruptive test that distinguishes them. Change one variable at a time so the result is interpretable. Known-good components and accounts provide useful comparisons. Consult approved documentation and a knowledge base, but confirm that the article matches the environment. Workarounds can restore service while a root cause remains unresolved; record that distinction. Escalate when the issue exceeds your permissions, expertise, safety limits or agreed response commitments. Include evidence and steps already tried so the next technician does not restart blindly.

> **Example**
>
> Everyone on one floor loses access to a server, while another floor still works.
>
> Investigate shared network equipment or the floor’s connection first. Reinstalling each user’s application would ignore the common failure boundary.

## Confirm the fix and document it

After a fix, reproduce the original task with the user and check related functions that the change could affect. Record the cause when known, the action, validation and any follow-up. Useful metrics include first-response time, resolution time and repeat incidents; speed alone should not reward premature closure. Asset records track ownership, configurations and lifecycle status. Change management reviews risk and rollback before altering shared services. A service-level agreement defines service commitments rather than guaranteeing every incident vanishes instantly. Clear status updates and respectful listening remain part of the technical solution, especially during delays.

## Key terms

**Incident.** An unplanned service interruption or reduction in quality.

**Workaround.** A temporary way to reduce impact without removing the underlying cause.

**Escalation.** Transferring an issue to the appropriate authority or expertise.
