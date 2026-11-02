---
title: "Build and explain a usable software product"
summary: "Planning an app, building it, testing it, and explaining how it works."
sourceIds: ["maryland","national"]
reviewed: "2026-10-27"
---

## Define behavior before implementation

Identify the user, task, input, expected output, and constraints. Write requirements that can be checked, such as preventing a blank required field or preserving a saved item after restart. Separate essential behavior from optional polish. Sketch navigation and data flow before selecting tools. For games and simulations, specify rules, state changes, controls, feedback, and win or completion conditions. For websites and mobile applications, include responsive layout, accessibility, and reliable navigation.

## Implement for clarity and reliability

Use clear names and small functions. Choose data structures that fit the task, and validate data when it enters the system. Separate presentation, rules, and data handling enough that each can be understood. Handle missing, invalid, duplicate, and unexpected input with useful messages. Avoid exposing credentials or collecting unnecessary personal data. Document external libraries, templates, licenses, and sources. Comments should explain purpose or non-obvious decisions rather than repeat every line. Documentation must allow another person to run and evaluate the work.

> **Example**
>
> An illustrative equipment-loan app works when an item is available but permits two users to reserve the same item and crashes on an empty return date.
>
> Define availability and validation rules, enforce them where reservations are accepted, display actionable errors, and test simultaneous and blank-input cases. Record the defect and the verified fix.

## Show evidence of testing and design

A test case includes input or steps, expected behavior, actual result, and status. Cover normal use, boundaries, invalid input, persistence, access, and recovery. Usability feedback is different from functional correctness; both matter. Demonstrate the main task, explain a design choice and its tradeoffs, and describe a known limitation. Prepare a README with setup, dependencies, operation, tests, and attribution. Follow the current stage’s requirements: a district report may require process evidence rather than a live demonstration.

- Common mistake: testing only the path the developer already knows works.
- Common mistake: calling a screenshot evidence of every requirement.
- Common mistake: adding features that make the core workflow less dependable.

## Key terms

**Requirement.** A specific behavior or constraint the product must satisfy.

**Test case.** Steps or inputs with an expected result used to verify behavior.

**Validation.** Checking whether data meets required rules before it is accepted.
