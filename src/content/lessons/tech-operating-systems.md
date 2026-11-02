---
title: "Operating systems, files and software"
summary: "How operating systems manage files, permissions, software, and common faults."
sourceIds: ["microsoft","cisco"]
reviewed: "2026-10-27"
---

## What the operating system controls

An operating system allocates processor time, memory, storage and access to devices. Applications request those resources through system services rather than controlling every device directly. Processes are running programs; a service commonly works in the background. Virtual memory uses storage to extend the address space available to programs, but heavy paging can reduce performance. A file system organizes named files, folders and metadata. An extension suggests a file format; renaming an extension does not convert the underlying contents. Absolute paths identify a location from the root, while relative paths depend on the current location.

## Installation, permissions and maintenance

Install software from trusted sources and verify operating-system, processor, memory and storage requirements. Standard user accounts reduce the damage an accidental or malicious action can cause. Administrative access should be used only when required. File permissions control who can read, change or execute information; permissions are separate from whether a file is hidden. Updates fix defects and vulnerabilities, while backups preserve recoverable copies. Cloud synchronization can spread deletion or corruption, so it is not automatically an independent backup. Before major changes, record the current configuration, protect important files and plan a rollback.

> **Example**
>
> Only one user cannot save a document in a shared folder; other users can.
>
> Check that user’s effective permissions and available storage before reinstalling the application. The limited scope points toward account or folder access.

## Diagnosing software and permission faults

Determine whether a problem affects one file, one application, one account or the whole machine. Observe resource usage and logs rather than guessing from a slow interface. Closing a hung process may recover responsiveness but can lose unsaved work. A safe restart is different from abruptly removing power. When an update causes a fault, check compatibility and use an approved recovery path. Avoid deleting unfamiliar system files to free space. Test the repaired workflow under the original user account and document the result; successful operation under an administrator account alone may hide the actual permission problem.

## Key terms

**Process.** A running instance of a program.

**File system.** The structure used to store and organize files.

**Least privilege.** Granting only the access needed for a task.
