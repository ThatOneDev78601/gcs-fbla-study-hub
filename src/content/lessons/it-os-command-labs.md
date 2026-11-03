---
title: "Operating system and command-line troubleshooting labs"
summary: "The boot process, file systems, the registry, virtual memory, utilities, installs and upgrades, crashes, and Windows and Linux commands with output interpretation, all inside a six-step troubleshooting method."
sourceIds: ["microsoft","cisco"]
reviewed: "2026-11-02"
---

## A troubleshooting method you can defend

Diagnosis should follow evidence, not a memorized symptom list. The widely taught six-step method works for any fault. Back up data before changes that could lose it, and change one thing at a time so you know what fixed the problem.

1. Identify the problem: ask the user what changed, when it started, and what they see; reproduce it; check logs.
2. Establish a theory of probable cause, starting with the simple and obvious.
3. Test the theory. If it is wrong, form a new theory or escalate.
4. Establish a plan of action and implement the fix, considering business impact and policies.
5. Verify full system functionality and add preventive measures.
6. Document the symptoms, cause, fix, and outcome.

## Boot process, file systems, and system internals

At power-on, firmware (UEFI on modern systems, BIOS on older ones) runs the power-on self-test (POST), finds a boot device using the boot order, and starts a boot loader such as Windows Boot Manager or GRUB on Linux. The boot loader loads the operating system kernel, which starts drivers and services and shows the login screen. Failures at each stage look different: beeps or no display point to POST and hardware; "no boot device" points to boot order or the drive; a crash after the logo points to drivers or system files.

The registry is Windows' hierarchical database of system and application settings, with main branches such as HKEY_LOCAL_MACHINE (computer-wide) and HKEY_CURRENT_USER. Back it up before editing with regedit; a wrong change can stop Windows from starting. Virtual memory uses a page file on the drive to extend RAM. Constant paging, visible as high disk activity with slow response, usually means the system needs more RAM.

| File system | Used by | Key traits |
| --- | --- | --- |
| NTFS | Windows system drives | Permissions, encryption, journaling, very large files |
| FAT32 | Older and small removable drives | Wide compatibility; 4 GB maximum file size |
| exFAT | Flash drives and SD cards | Large files; works on Windows and macOS |
| ext4 | Linux | Journaling, permissions, large volumes |
| APFS | macOS and iOS | Optimized for SSDs, snapshots, encryption |

## Utilities, installs, and crashes

Windows utilities include Task Manager (processes, performance, startup apps), Event Viewer (system and application logs), Device Manager (drivers and hardware status), Disk Management, Services, System Configuration (msconfig), and Resource Monitor. macOS has Activity Monitor, Disk Utility, and Console. Safe Mode starts Windows with minimal drivers, which helps isolate driver and startup problems.

Before installing or upgrading an operating system, check hardware requirements, back up data, confirm license and driver availability, and decide between an in-place upgrade (keeps files and apps) and a clean install (erases the drive, removes accumulated problems). A Windows stop error (blue screen) shows a stop code; note it, check Event Viewer and recent driver or update changes, and test memory and storage. A macOS or Linux kernel panic is the equivalent.

## Windows and Linux commands

Run commands that change the system only when you understand them, on systems you are authorized to manage, and with an administrator or sudo prompt only when needed.

| Task | Windows | Linux |
| --- | --- | --- |
| Show IP configuration | ipconfig /all | ip addr |
| Renew a DHCP address | ipconfig /release then ipconfig /renew | sudo dhclient -r then sudo dhclient (varies by system) |
| Clear DNS cache | ipconfig /flushdns | resolvectl flush-caches (on systemd) |
| Test reachability | ping 8.8.8.8 | ping -c 4 8.8.8.8 |
| Trace the route | tracert example.com | traceroute example.com |
| Look up DNS | nslookup example.com | dig example.com |
| Show connections and ports | netstat -ano | ss -tulpn |
| Repair system files | sfc /scannow; DISM /Online /Cleanup-Image /RestoreHealth | Use the package manager to reinstall packages |
| Check a disk | chkdsk C: /f | sudo fsck (on an unmounted volume) |
| List and stop processes | tasklist; taskkill /PID 1234 | ps aux; kill 1234 |
| Apply group policy | gpupdate /force | Not applicable |
| Change permissions | icacls | chmod 640 file; chown user file |
| Disk space | Settings or dir | df -h; du -sh folder |

## Read the output

Commands are useful only when you can interpret what they show. Learn a few patterns well.

> **Example**
>
> A laptop cannot load websites. ipconfig shows IPv4 address 169.254.37.12 and no default gateway.
>
> 1. 169.254.x.x is an automatic private (APIPA) address. Windows assigns it when it cannot reach a DHCP server.
> 2. Theory: the laptop is not getting an address from DHCP. Check the Wi-Fi connection or cable, then the router or DHCP server.
> 3. Test: reconnect to the correct network, then run ipconfig /release and ipconfig /renew.
> 4. Verify: ipconfig now shows 192.168.1.47 with gateway 192.168.1.1, and websites load.
>
> Document that the laptop had joined a guest network without DHCP, and the fix was reconnecting to the staff network. The address range was the key evidence.

> **Try it yourself**
>
> Interpret each result and name the most likely problem: (a) ping 8.8.8.8 succeeds, but ping example.com says it could not find the host. (b) ping 192.168.1.1 (the gateway) fails, but other laptops work, and the network cable's light is off. (c) tracert to a website stops responding after the third hop, but the site loads in a browser.

<details>
<summary>Check your answer</summary>

(a) The internet connection works but name resolution fails: a DNS problem. Check DNS server settings and flush the cache. (b) A physical layer problem on this laptop's connection: check the cable, port, and network adapter. (c) Probably not a problem: many routers do not answer traceroute probes even while forwarding traffic, which is why the site still loads.

</details>

## Key terms

**POST.** Power-on self-test: firmware checks of essential hardware at startup.

**UEFI.** Modern firmware that replaced BIOS and starts the boot process.

**Registry.** Windows' database of system and application settings.

**Page file.** Drive space Windows uses as virtual memory when RAM is full.

**APIPA address.** A 169.254.x.x address a device assigns itself when DHCP fails.
