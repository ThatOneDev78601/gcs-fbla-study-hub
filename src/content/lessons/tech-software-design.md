---
title: "Systems analysis, programming and testing"
summary: "Translate a user need into a model, an implementation and evidence that it works."
sourceIds: ["mdn","microsoft"]
reviewed: "2026-10-27"
---

## Define the problem before the solution

Systems analysis investigates the current workflow, users, information and constraints. A functional requirement describes behavior, such as exporting a report. A nonfunctional requirement describes a quality or constraint, such as keyboard accessibility or response time. Interview users and observe the actual process; an assumed workflow can hide important exceptions. A feasibility study considers technical, financial, operational and schedule constraints. Model inputs, processing, outputs and error cases. A prototype explores a question cheaply, while an acceptance criterion states an observable condition for success. Neither a polished mockup nor working code automatically proves that the right problem was solved.

## Build from clear programming concepts

Variables hold values, selection chooses a branch and iteration repeats work. Functions group behavior behind inputs and outputs. In object-oriented design, a class describes related data and behavior; an object is an instance. Encapsulation keeps implementation details behind an interface, inheritance derives a specialized form and polymorphism lets different implementations respond through a common interface. Prefer understandable models over elaborate hierarchies. Algorithms need correct boundary handling, suitable data structures and reasonable time and memory use. Version control records changes and supports collaboration; committing secrets makes them part of history even if a later change deletes them.

> **Work through an example**
>
> A ticket calculator charges a discounted price only when quantity is at least ten.
>
> Test quantities nine, ten and eleven. These boundary cases reveal whether the comparison correctly includes ten rather than checking only an ordinary large order.

## Verify and maintain the system

Unit tests examine small pieces, integration tests check cooperation and acceptance tests validate user requirements. Test valid, invalid, empty and boundary inputs. Debugging traces why observed behavior differs from expected behavior; testing reveals a failure but does not always identify its cause. Maintenance includes fixes, security updates and adapting to changed needs. Document setup, dependencies and decisions someone else needs to operate the system. Common mistakes include implementing before clarifying requirements, treating compilation as proof of correctness, checking input only in the interface, and releasing an untested migration without a recovery plan.

## Key terms to remember

**Acceptance criterion.** An observable condition a solution must meet.

**Encapsulation.** Keeping implementation details behind a defined interface.

**Boundary test.** A test at or near a limit where behavior changes.
