---
title: "Privacy, AI fairness and responsible information use"
summary: "Use data for a defined purpose and examine who can be harmed by a system."
sourceIds: ["mba","mdn","usa"]
reviewed: "2026-10-27"
---

## Privacy is a design decision

Personal information can identify a person directly or become identifying when combined with other records. Data minimization means collecting only what a defined purpose requires. Explain collection and use clearly, control access and retain information only as long as justified. Removing names does not necessarily anonymize a dataset if dates, locations or other details allow reidentification. Consent should be meaningful rather than buried in confusing language, and some uses may require additional legal authority. Privacy and security overlap but differ: securely storing unnecessary sensitive information can still be an inappropriate privacy practice.

## Check fairness and accountability

Bias can enter through historical data, sampling, labels, selected objectives and deployment conditions. A dataset that underrepresents a group can make performance estimates unreliable for that group. Compare relevant error rates and consequences, not only one overall score. Fairness measures can conflict, so document the chosen goal and its tradeoffs. Explain who owns a system, who can challenge an outcome and how corrections occur. Intellectual property and licensing constrain reuse even when content is publicly visible. Generative AI assistance still requires checking facts, source permissions and the specific competition’s rules on outside help.

> **Work through an example**
>
> A club trains a participation predictor using only students who already attend meetings.
>
> The sample excludes nonparticipants, so it cannot fairly describe all students. Reconsider the data plan and purpose before using the model to decide whom to invite.

## Common mistakes and test decisions

Use a practical review: identify the purpose, necessary fields, affected groups, likely harms, protective controls and an accountable decision maker. Provide human review when errors could materially affect people. Distinguish explaining a model from proving that it is correct or fair. A statistically useful proxy can still reproduce sensitive distinctions. Avoid uploading private member records into unapproved tools. Common mistakes include assuming public access grants unrestricted reuse, treating name removal as complete anonymization, and describing an algorithm as neutral merely because it uses mathematics. Review real outcomes after deployment as well as before launch.

## Key terms to remember

**Data minimization.** Collecting and retaining only information necessary for a defined purpose.

**Reidentification.** Connecting supposedly anonymous data back to an individual.

**Algorithmic bias.** Systematic differences in model behavior that can create unfair outcomes.
