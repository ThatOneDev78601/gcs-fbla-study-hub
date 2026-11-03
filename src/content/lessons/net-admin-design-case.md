---
title: "Network administration and a complete small-office design case"
summary: "Manage accounts and permissions, monitor with SNMP and logs, patch and document, plan servers, power, and cooling, design backups and recovery, and build a justified network design with costs and capacity."
sourceIds: ["cisco","nist-csf"]
reviewed: "2026-11-02"
---

## Accounts, permissions, and monitoring

Create accounts from a standard process, place users in role-based groups, and grant permissions to groups. On Windows, NTFS permissions control access on the disk and share permissions control access over the network; when both apply, the more restrictive one wins. Remove access promptly when people change roles or leave, and review administrator accounts regularly.

Monitoring shows problems before users report them. SNMP lets a management system poll devices (agents) for data such as interface traffic and CPU use, and devices can send traps when something fails; use SNMPv3, which adds authentication and encryption. Syslog collects device logs centrally. Flow data shows which hosts use bandwidth. Alerts should go to someone who will act on them.

## Patches, assets, documentation, and load balancing

Patch management tests and installs updates on a schedule, with emergency patching for actively exploited vulnerabilities. Keep an asset inventory listing each device, its location, owner, serial number, operating system, and warranty. Documentation includes network diagrams, an IP address plan, device configurations backed up after every change, and procedures. A network that only one person understands is a business risk.

Load balancing spreads requests across several servers using methods such as round robin or least connections, with health checks that stop sending traffic to a failed server. Servers can run on physical hardware, as virtual machines, or in the cloud. Racks need power distribution, a UPS sized for the load and needed runtime, and cooling arranged in hot and cold aisles.

## Security, backups, and tested recovery

Protect the network with layered controls: a firewall at the edge, network segmentation (separate VLANs for staff, guests, and devices such as printers and cameras), WPA3 wireless, multifactor authentication for remote access, intrusion detection or prevention, and the Zero Trust principle of verifying every access request.

Backups follow the 3-2-1 rule: three copies of data, on two types of media, with one copy offsite or in the cloud, and ideally one copy offline or immutable against ransomware. A full backup copies everything; an incremental backup copies changes since the last backup of any type; a differential backup copies changes since the last full backup. The recovery point objective (RPO) is how much data loss is acceptable, which sets backup frequency. The recovery time objective (RTO) is how quickly service must return. Test restores on a schedule; an untested backup is only a hope.

Availability is often stated as a percentage. 99.9% uptime allows about 8.76 hours of downtime a year; 99.99% allows about 53 minutes.

## Design case

Fictional practice case: an accounting firm is moving into a two-floor office with 40 staff, 10 printers and scanners, a conference room, and guest Wi-Fi. Client files are confidential. The firm uses cloud email and a cloud accounting application, plus one on-site file server. Staff work 8 a.m. to 6 p.m., and tax season brings 10 temporary staff.

> **Example**
>
> Produce a justified design.
>
> 1. Requirements: about 60 wired and wireless users at peak, confidentiality, high availability during tax season, guest separation, and remote access.
> 2. Topology: star with a core switch and one PoE access switch per floor; two access points per floor plus one in the conference room.
> 3. Addressing: 10.10.10.0/24 staff, 10.10.20.0/24 printers, 10.10.30.0/24 guests, 10.10.40.0/24 servers and management, each on its own VLAN, with firewall rules blocking guests from internal VLANs.
> 4. Capacity: 60 users x 5 Mbps typical peak = 300 Mbps; with 30% growth, about 390 Mbps, so a 500 Mbps business connection, plus a lower-cost backup connection for failover.
> 5. Security: next-generation firewall, WPA3-Enterprise for staff, MFA and VPN for remote access, and encrypted backups.
> 6. Recovery: nightly incremental and weekly full backups of the file server to a local NAS and to cloud storage; RPO 24 hours, RTO 4 hours; quarterly restore tests; UPS for the server, core switch, and firewall.
> 7. Costs: list each item with quantity and a dated quote, plus installation, licensing, and support, and compare an on-site file server with moving files to a cloud service.
>
> The recommendation ties every choice to a requirement: VLANs and the firewall protect confidentiality, the second internet connection and UPS protect tax-season availability, and the backup plan meets the stated RPO and RTO. Prices must be checked when the design is written, and the plan should state which assumptions would change the recommendation.

> **Try it yourself**
>
> A business backs up fully on Sunday and incrementally Monday through Saturday. The server fails Thursday morning before that day's backup. (a) Which backups are needed to restore? (b) If the business switched to differential backups, which would be needed? (c) What is the maximum data loss, and which objective does that describe?

<details>
<summary>Check your answer</summary>

(a) Sunday's full backup plus the Monday, Tuesday, and Wednesday incrementals, restored in order. (b) Sunday's full plus only Wednesday's differential. (c) Up to about one day of changes since Wednesday night's backup; this is the recovery point, which the RPO limits.

</details>

## Key terms

**SNMP.** Simple Network Management Protocol, used to monitor and manage network devices.

**3-2-1 backup rule.** Three copies of data on two media types with one copy offsite.

**Recovery point objective.** The maximum acceptable amount of data loss measured in time.

**Recovery time objective.** The maximum acceptable time to restore a service.

**VLAN.** A virtual LAN that separates traffic into isolated groups on shared switches.
