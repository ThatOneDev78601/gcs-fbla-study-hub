---
title: "Hardware, laptops, mobile devices, and printers: faults and decisions"
summary: "Compare components and connectors, diagnose power and performance faults, decide on upgrades, troubleshoot laptops, phones, Bluetooth, and cellular, and repair laser and inkjet printer problems."
sourceIds: ["microsoft","cisco"]
reviewed: "2026-11-02"
---

## Components and performance

The CPU executes instructions; more cores help multitasking and heavy applications, and clock speed affects single-task speed. RAM holds running programs; too little causes slowdowns as the system pages to disk. Storage keeps data: hard disk drives (HDDs) spin platters and are slow but cheap per gigabyte; SATA solid-state drives (SSDs) reach roughly 550 MB/s; NVMe SSDs in M.2 slots reach several gigabytes per second. The power supply (PSU) converts wall power and must provide enough wattage with headroom. The motherboard's form factor (ATX, microATX, Mini-ITX) and socket determine compatible parts.

Upgrade decisions start with evidence. If Task Manager shows memory near 100% during normal work, add RAM of the type and speed the motherboard supports. If the system has an HDD, moving to an SSD is usually the largest improvement users notice. Check compatibility: CPU socket and chipset, RAM generation (DDR4 and DDR5 are not interchangeable), free slots, physical size, and power.

| Connector | Use |
| --- | --- |
| USB-C (may support Thunderbolt) | Data, video, and charging through one reversible port |
| HDMI | Digital video and audio to TVs and monitors |
| DisplayPort | Digital video to monitors; supports high refresh rates |
| RJ45 | Ethernet network cable |
| SATA | Internal storage data cable |
| M.2 | Internal slot for NVMe or SATA SSDs |
| 24-pin ATX and 8-pin EPS | Motherboard and CPU power from the PSU |
| PCIe 6/8-pin | Power for graphics cards |

## Power and startup faults

For a computer that shows no sign of power, check the obvious first: the outlet, the power strip switch, the PSU's rear switch, and the cable. If the fans spin but there is no display, check the monitor input and cable, reseat RAM, and listen for beep codes or read the motherboard's diagnostic lights. Random shutdowns under load often point to overheating (clogged vents, failed fan, dried thermal paste) or a failing PSU. Swollen capacitors on a board indicate hardware failure. Use proper electrostatic discharge (ESD) precautions, such as a grounded wrist strap, when working inside a computer.

## Laptops and mobile devices

Laptop batteries wear with charge cycles; system reports show design capacity versus current capacity. A swollen battery is a fire risk: power down, stop using it, and replace it. Heat problems come from blocked vents and dust; keep laptops on hard surfaces. Many laptops allow replacing RAM and SSDs, but some solder these to the board, so check before promising an upgrade.

Mobile devices synchronize email, contacts, and calendars through accounts such as Microsoft 365, Google, or iCloud. Sync problems often come from expired passwords, disabled sync settings, or no data connection. Bluetooth problems: confirm both devices have Bluetooth on and the accessory is in pairing mode, stay within range (often about 10 meters), "forget" and re-pair the device, and check battery levels. Cellular problems: check signal strength and airplane mode, restart, check the SIM or eSIM and carrier account, and verify the access point name (APN) settings if data fails while calls work.

## Printers

A laser printer uses seven steps: processing (the image is prepared in memory), charging (the drum receives a uniform charge), exposing (a laser writes the image onto the drum), developing (toner sticks to the exposed areas), transferring (toner moves to the paper), fusing (heat and pressure melt the toner onto the paper), and cleaning (leftover toner is removed from the drum). Inkjet printers spray liquid ink through nozzles. Thermal printers use heat-sensitive paper for receipts and labels. Impact printers strike a ribbon and can print multipart forms.

Network printers should have a fixed address through a static IP or a DHCP reservation so computers can always find them. A stuck print queue is often cleared by restarting the Print Spooler service on Windows. Garbled output usually means a wrong or corrupt driver.

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Toner smears or rubs off | Fuser not melting toner | Replace the fuser (let it cool first) |
| Faint repeated image (ghosting) | Drum or cleaning problem | Replace the drum or imaging unit |
| Vertical streaks | Dirty or damaged drum or rollers | Clean or replace the affected part |
| Frequent jams | Worn pickup rollers or wrong paper | Replace rollers; use the correct paper |
| Missing lines on inkjet output | Clogged nozzles | Run cleaning and alignment |
| Random symbols printed | Incorrect driver | Install the correct driver |

> **Example**
>
> Users report that printouts from a shared laser printer smudge when touched, and the problem began after 80,000 pages.
>
> Evidence points to the fusing step: toner reaches the paper but is not melted on. Check the maintenance counter and replace the fuser assembly after it cools, then print test pages and confirm the toner no longer rubs off. Document the page count so the next replacement can be planned.

> **Try it yourself**
>
> Diagnose each case and give the first two steps: (a) A desktop restarts every time a video game starts. (b) Wireless earbuds connect to a phone but not to a laptop. (c) A phone can make calls but has no mobile data.

<details>
<summary>Check your answer</summary>

(a) Likely overheating or an underpowered PSU. Check CPU and GPU temperatures and clean dust from fans and vents; then confirm the PSU wattage meets the graphics card's requirement. (b) The earbuds may be paired only to the phone. Turn off Bluetooth on the phone or disconnect there, put the earbuds in pairing mode, then forget and re-pair them on the laptop. (c) Check that mobile data is turned on and airplane mode is off, then verify the APN settings and the carrier account.

</details>

## Key terms

**NVMe.** A fast interface for SSDs that connects through PCIe, often in an M.2 slot.

**Form factor.** The size and layout standard of a component such as a motherboard.

**Fuser.** The laser printer assembly that melts toner onto paper with heat and pressure.

**APN.** Access point name: the settings a phone uses to connect to the carrier's data network.

**ESD.** Electrostatic discharge, which can damage components; prevented with grounding.
