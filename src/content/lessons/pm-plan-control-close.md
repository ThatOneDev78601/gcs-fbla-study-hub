---
title: "Project management documents: charter to closure, with schedule and earned value math"
summary: "Write a charter and stakeholder plan, define scope and acceptance criteria, build a WBS and critical path, plan resources, quality, communication, and risk, track with earned value, manage change, and close formally."
sourceIds: ["pmi","microsoft"]
reviewed: "2026-11-02"
---

## Initiate: charter, stakeholders, and scope

A project is a temporary effort to create a unique result. It moves through initiating, planning, executing, monitoring and controlling, and closing. The project charter authorizes the project: it states the purpose, measurable objectives, high-level scope, key milestones, budget, sponsor, and the project manager's authority.

Stakeholders are anyone affected by or able to affect the project. A stakeholder register lists each one with their interests, influence, and expectations; a power-interest grid helps decide whom to manage closely, keep satisfied, keep informed, or monitor. The project manager is responsible for planning, coordinating, communicating, and delivering within constraints, and follows professional ethics such as PMI's values of responsibility, respect, fairness, and honesty.

The scope statement describes deliverables, what is excluded, assumptions, and constraints. Acceptance criteria state how each deliverable will be judged complete, such as "The registration site handles 300 sign-ups with no errors in testing."

## Plan: WBS, schedule, and critical path

A work breakdown structure (WBS) breaks the total scope into deliverables and then into work packages small enough to estimate and assign. Under the 100% rule, the WBS includes all the work and only the work. Estimate durations by analogy with past projects, by parametric rates (such as hours per page), or with three-point estimates: (optimistic + 4 x most likely + pessimistic) / 6.

Dependencies connect tasks; finish-to-start (B cannot start until A finishes) is the most common. The critical path is the longest path through the network, and it sets the shortest possible project duration. Tasks on it have zero float; a delay to any of them delays the project.

- Resource plan: who and what each task needs, and when; watch for one person assigned to overlapping tasks.
- Quality plan: standards, checks, and who approves each deliverable.
- Communication plan: who needs what information, how often, and in what format.
- Risk register: each risk's probability, impact, owner, and response (avoid, mitigate, transfer, or accept; for opportunities, exploit or enhance).

> **Example**
>
> Tasks: A (3 days, first), B (5 days, after A), C (2 days, after A), D (4 days, after C), E (2 days, after both B and D). Find the critical path.
>
> 1. Path A-B-E: 3 + 5 + 2 = 10 days.
> 2. Path A-C-D-E: 3 + 2 + 4 + 2 = 11 days.
> 3. The longest path is A-C-D-E at 11 days, so it is critical. Task B has 11 - 10 = 1 day of float.
>
> The project takes 11 days. To finish sooner, shorten C or D (for example, by adding resources, called crashing, or overlapping tasks, called fast tracking); shortening B would not help.

## Build and update the plan in project software

Microsoft Project, Smartsheet, and many free tools follow the same pattern, and a spreadsheet can do the same for small projects. The baseline is what makes tracking meaningful.

1. Enter tasks from the WBS with durations.
2. Link dependencies; the software calculates dates and highlights the critical path.
3. Assign resources and check for overallocation.
4. Save a baseline, a snapshot of the approved plan.
5. Each week, enter actual progress and costs and compare with the baseline in a Gantt chart or variance report.
6. Use the comparison to decide on corrective actions and report status.

## Execute and control: teams, changes, and earned value

Teams typically move through forming, storming, norming, performing, and adjourning. Cross-functional teams need clear roles, shared goals, and regular communication; motivation comes from meaningful work, recognition, and removing obstacles. Changes to scope, schedule, or budget go through a change control process: submit a change request, analyze its impact, get approval from the designated authority, update the plan, and communicate it. Uncontrolled additions are called scope creep.

Earned value management compares planned work, completed work, and cost. Planned value (PV) is the budgeted cost of work scheduled to date. Earned value (EV) is the budgeted cost of work actually completed. Actual cost (AC) is what was spent. Cost variance = EV - AC; schedule variance = EV - PV. The cost performance index (CPI) = EV / AC and the schedule performance index (SPI) = EV / PV; below 1 is unfavorable.

> **Try it yourself**
>
> A $100,000 project should be 50% complete by now. It is actually 40% complete, and $45,000 has been spent. Calculate PV, EV, AC, CV, SV, CPI, and SPI, and state what they mean.

<details>
<summary>Check your answer</summary>

PV = $50,000; EV = 40% x 100,000 = $40,000; AC = $45,000. CV = 40,000 - 45,000 = -$5,000 (over budget). SV = 40,000 - 50,000 = -$10,000 (behind schedule). CPI = 40,000 / 45,000 = 0.89; SPI = 40,000 / 50,000 = 0.80. The project gets 89 cents of planned work per dollar spent and is progressing at 80% of the planned rate, so the manager should investigate causes and consider corrective action.

</details>

## Close the project

Closing confirms that deliverables are accepted, preferably with written sign-off against the acceptance criteria. Evaluate results against the charter's objectives, budget, and schedule. Recognize team members' contributions. Hold a lessons-learned session asking what went well, what did not, and what to change, and record the answers where future teams will find them. Archive project records, hand deliverables over to the people who will operate or maintain them, close contracts, and release resources. A project that skips closing often leaves loose ends and repeats the same mistakes.

## Key terms

**Project charter.** The document that authorizes a project and states its objectives, scope, and authority.

**Work breakdown structure.** A hierarchical breakdown of all project work into manageable work packages.

**Critical path.** The longest sequence of dependent tasks, which sets the project's minimum duration.

**Float.** How long a task can be delayed without delaying the project.

**Earned value.** The budgeted cost of the work actually completed.

**Scope creep.** Uncontrolled additions to a project's scope.
