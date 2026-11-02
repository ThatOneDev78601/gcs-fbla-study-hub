---
title: "Plan, segment and recover a business network"
summary: "Planning a network around the business’s needs, limits, and recovery requirements."
sourceIds: ["cisco"]
reviewed: "2026-10-27"
---

## Begin with business requirements

A good design begins with users, applications, locations, expected growth and availability needs. Record current devices and links, identify bottlenecks and distinguish measured demand from guesses. A network serving payment terminals and public guests needs different trust boundaries from a small isolated classroom lab. Draw both physical connections and logical networks. Estimate capacity for peak demand rather than only average activity. Compare purchase, licensing, maintenance, support and replacement costs. A design is defensible when each choice answers a requirement, including budget and support skills, rather than simply selecting the most expensive hardware.

## Segmentation and resilience

A VLAN creates a logical broadcast domain on switching infrastructure. Routing connects VLANs, and access rules should permit only the necessary communication. Separating guest traffic from internal records reduces unnecessary exposure. Redundant power, links and equipment can reduce single points of failure, but redundancy adds cost and configuration complexity. A backup is a recoverable copy; failover keeps a service running on an alternate component. Recovery time objective describes acceptable restoration time, while recovery point objective describes acceptable data loss measured in time. Restore testing determines whether a recovery plan actually works.

> **Example**
>
> A clinic allows visitors to use Wi-Fi and also transmits internal patient records.
>
> Separate guest and internal networks, restrict routes between them, secure administration and test permitted access. A second wireless name alone is insufficient without enforced isolation.

## Operate and verify the design

Document address plans, device configurations, dependencies and responsible contacts. Use monitoring to track utilization, errors and availability against a baseline. Protect management interfaces and back up device configurations securely. Schedule changes, assess their impact and prepare a rollback. Acceptance tests should cover both ordinary work and chosen failure scenarios. Verify that users can reach required services and cannot reach prohibited ones. Common mistakes include assuming redundant links automatically provide independent paths, treating backups as tested when no restore has occurred, and omitting the ongoing labor needed to keep configurations and diagrams accurate.

## Key terms

**VLAN.** A logical broadcast domain configured on switching infrastructure.

**RTO.** The target maximum time to restore a service after disruption.

**RPO.** The target maximum data-loss window expressed in time.
