---
title: "Business technology essentials: software, cloud, data, and protection"
summary: "Match hardware and software to requirements, compare licenses, troubleshoot email and collaboration tools, explain cloud, virtualization, IoT, and AI with business examples, run basic database operations, and protect data and intellectual property."
sourceIds: ["microsoft","cisco","copyright-fair-use"]
reviewed: "2026-11-02"
---

## Match equipment and software to the job

Start with requirements: what the user must do, which software they need, and that software's minimum and recommended system requirements. Compare those with the computer's processor, RAM, storage type and free space, graphics, operating system version, and ports. A video editor needs more RAM, a fast SSD, and a capable graphics card; a front-desk computer needs reliability more than power.

System software runs the computer (operating systems, drivers, utilities). Application software does user tasks: word processing, spreadsheets, presentations, databases, email, accounting, design, and collaboration tools. Choose software by its fit with the task, compatibility with existing files and systems, cost, support, security, and the license terms.

| License type | Meaning |
| --- | --- |
| Proprietary | Owned by a company; use is governed by an end-user license agreement (EULA) |
| Subscription | Paid regularly; access ends when payment stops |
| Site or volume license | Covers many users or devices in one organization |
| Open source, copyleft (such as GPL) | Source code is available; modified versions you distribute must use the same license |
| Open source, permissive (such as MIT) | Few restrictions, usually only keeping the copyright notice |
| Freeware | Free to use, but the code is not open |
| Shareware or trial | Free for a limited time or with limited features |

## Email and collaboration troubleshooting

When email will not send, check the internet connection, the outbox, attachment size limits, and the account's outgoing server settings (SMTP server, port 587 with authentication, encryption). When mail does not arrive, check spam and junk folders, mailbox quota, filters and rules, and whether the sender's address is correct. A changed password can stop phone mail apps until the password is updated. Collaboration tools such as shared documents, chat, and video meetings fail most often because of sharing permissions, outdated apps, browser extensions, or microphone and camera permissions.

## Modern technologies with business examples

Each technology brings tradeoffs: cloud services reduce maintenance but depend on internet access and the provider; virtualization saves hardware but concentrates risk on one host; IoT devices add convenience and new security risks; AI saves time but can be wrong or biased and needs human oversight.

| Technology | What it is | Business example |
| --- | --- | --- |
| Cloud computing (IaaS, PaaS, SaaS) | Renting computing resources over the internet | A store runs its accounting software as SaaS instead of on an office server |
| Virtualization | Several virtual machines share one physical server through a hypervisor | A school runs five servers on one physical machine to save cost and space |
| Internet of Things | Everyday devices with sensors and network connections | A restaurant's refrigerator sends an alert when the temperature rises |
| Artificial intelligence | Systems that perform tasks such as prediction, recognition, or generating text | A help desk suggests answers to common questions, with staff review |

## Database operations and data protection

Basic database operations are create, read, update, and delete (CRUD). Users enter data through forms, find it with queries (filtering and sorting), and summarize it in reports. Good databases validate entries, limit who can change data, and keep backups.

Protect data with backups (the 3-2-1 rule), restore points before major changes, strong passwords and multifactor authentication, updates, and encryption on laptops and phones. Privacy means collecting only needed personal information, using it only as promised, and following laws for health, financial, and student data. Intellectual property applies to software, images, and documents: follow licenses, credit sources, and do not copy software or content without permission.

> **Example**
>
> A real estate office asks for a laptop for an agent who uses email, a web-based listing service, video calls, and photo editing for listings.
>
> Requirements point to a midrange laptop: a current multi-core processor, 16 GB of RAM for photo editing and video calls together, a 512 GB SSD, a good webcam and microphone, Wi-Fi 6, and enough battery for a day of showings. SaaS tools need only a browser; the photo editor's published requirements set the minimum. Add device encryption, MFA on accounts, and automatic cloud backup of listing photos.

> **Try it yourself**
>
> A user says Outlook on their phone stopped receiving mail this morning, but webmail works. They changed their password yesterday. What is the most likely cause, and what are the fix and the follow-up check?

<details>
<summary>Check your answer</summary>

The phone app is still using the old password, so the server rejects it while webmail uses the new one. Fix: update the password in the phone's mail account settings (or remove and re-add the account). Follow-up: send a test message to the account and confirm it arrives on the phone, and check that other devices, such as a tablet, are also updated.

</details>

## Key terms

**System requirements.** The minimum hardware and software a program needs to run.

**EULA.** End-user license agreement: the terms for using proprietary software.

**Copyleft.** A license requiring modified versions to be shared under the same terms.

**Hypervisor.** Software that creates and runs virtual machines.

**CRUD.** Create, read, update, and delete: the basic database operations.
