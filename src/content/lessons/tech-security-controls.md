---
title: "Protect identities, systems and data"
summary: "Select layers of prevention that match the information and workflow."
sourceIds: ["cisco","mdn"]
reviewed: "2026-10-27"
---

## Control access deliberately

Authentication establishes an identity; authorization determines what that identity may do. Multifactor authentication combines different factor types, such as something known and something possessed. Two passwords are not two different factors. Least privilege gives a person or service only the rights its job requires. Role-based access assigns permissions through job functions. Review access when people join, change roles or leave. Shared accounts weaken accountability because actions are harder to attribute. A password manager supports unique credentials; a documented account recovery process reduces the temptation to bypass controls during an emergency.

## Protect data across its lifecycle

Encryption transforms readable information into ciphertext using a key. Symmetric encryption uses a shared secret, while asymmetric systems use related public and private keys. Hashing creates a digest used for purposes such as integrity checks; it is not a reversible substitute for encryption. TLS protects communication in transit. Data at rest also needs appropriate protection and key management. Collect only necessary information, classify its sensitivity and limit retention. Firewalls filter traffic by policy; endpoint protection, patching, secure configuration and segmentation provide additional layers. A single product cannot supply every security function.

> **Work through an example**
>
> A club stores member contact information in a cloud spreadsheet shared with anyone who has the link.
>
> Limit sharing to authorized accounts, remove unnecessary fields, review editors and define retention. Encryption in transit would not correct overly broad sharing permissions.

## Common mistakes and test decisions

Choose controls for the risk and confirm they do not prevent legitimate work unnecessarily. A preventive control blocks an event, a detective control reveals it, and a corrective control helps restore a safer state. Logging detects activity only if records are collected, protected and reviewed. Physical access controls and secure disposal matter alongside software protections. Test authorization with both permitted and denied actions. Common errors include treating hashing as decryptable, assuming multifactor authentication makes phishing impossible, and believing a secure connection means the recipient should receive the data. Access policy and trustworthy handling remain necessary.

## Key terms to remember

**Authentication.** Establishing who or what is requesting access.

**Authorization.** Deciding which actions an authenticated identity may perform.

**Hash.** A one-way digest used to represent data for comparison or integrity checks.
