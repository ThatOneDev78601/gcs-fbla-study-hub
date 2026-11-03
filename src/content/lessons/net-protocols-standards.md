---
title: "Protocols, ports, wireless and Ethernet standards, and infrastructure"
summary: "Ports and protocols with worked DNS, DHCP, NAT, and TCP scenarios, routing types, 802.11 and 802.3 standards, cabling and fiber, topologies and cloud models, and storage, RAID, and rack hardware."
sourceIds: ["cisco"]
reviewed: "2026-11-02"
---

## Ports and protocols

TCP is connection-oriented: it sets up a session with a three-way handshake (SYN, SYN-ACK, ACK), numbers segments, resends lost data, and delivers in order. UDP is connectionless: it sends without guarantees, which is faster and suits streaming, voice, gaming, DNS queries, and DHCP.

| Port | Protocol | Purpose |
| --- | --- | --- |
| 20/21 | FTP | File transfer (unencrypted) |
| 22 | SSH and SFTP | Secure remote command line and file transfer |
| 23 | Telnet | Unencrypted remote login (avoid) |
| 25 | SMTP | Sending email between servers (587 for client submission) |
| 53 | DNS | Name resolution |
| 67/68 | DHCP | Automatic IP configuration |
| 80 | HTTP | Web (unencrypted) |
| 110 / 995 | POP3 / POP3S | Downloading email |
| 123 | NTP | Time synchronization |
| 143 / 993 | IMAP / IMAPS | Accessing email on the server |
| 161/162 | SNMP | Network device monitoring |
| 389 | LDAP | Directory services |
| 443 | HTTPS | Encrypted web |
| 445 | SMB | Windows file sharing |
| 3389 | RDP | Remote Desktop |

## Worked scenarios: DHCP, DNS, and NAT

DHCP assigns an address in four steps, remembered as DORA: the client broadcasts a Discover, the server sends an Offer, the client sends a Request, and the server sends an Acknowledgment with the address, mask, default gateway, DNS servers, and lease time.

DNS turns names into addresses. A client asks its configured resolver; if the resolver lacks the answer, it asks a root server, then the top-level domain server (.com), then the domain's authoritative server, and caches the result. Common records: A (IPv4 address), AAAA (IPv6), CNAME (alias), MX (mail server), TXT (text, used for email security), and PTR (reverse lookup).

Network address translation (NAT) lets many private addresses share one public address. Port address translation, the common home and office form, tracks each connection by port number so replies reach the right device.

> **Example**
>
> A new laptop joins the office Wi-Fi and opens https://www.example.com. List the protocols in order.
>
> 1. DHCP (UDP 67/68): the laptop receives 192.168.1.47, gateway 192.168.1.1, and a DNS server.
> 2. ARP: the laptop finds the gateway's MAC address.
> 3. DNS (UDP 53): the resolver returns the site's IP address.
> 4. TCP three-way handshake to port 443, then TLS sets up encryption.
> 5. HTTPS carries the request and response; NAT at the router translates the private address to the office's public address.
>
> Knowing this order turns troubleshooting into a checklist: no address points to DHCP, names failing points to DNS, and certificate warnings point to TLS.

## Routing

Static routes are entered by hand; they are simple and predictable but do not adapt to failures. Dynamic routing protocols share routes automatically. RIP is a distance-vector protocol that uses hop count with a maximum of 15, which suits only small networks. OSPF is a link-state protocol that builds a map of the network and chooses paths by cost, common inside organizations. BGP routes between independent networks (autonomous systems) and runs the internet. A default route sends traffic for unknown destinations to the next router.

## Wireless and wired standards

The 2.4 GHz band reaches farther and passes through walls better; 5 and 6 GHz are faster with less interference but shorter range. Use WPA3 where supported, or WPA2 with AES. WEP and the original WPA are broken. Personal mode uses a shared passphrase; Enterprise mode authenticates each user through 802.1X and a RADIUS server.

Ethernet is IEEE 802.3. Twisted-pair copper with RJ45 connectors runs up to 100 meters: Cat5e supports 1 Gbps, Cat6 supports 1 Gbps (10 Gbps up to about 55 meters), Cat6a supports 10 Gbps at 100 meters, and Cat8 supports 25 to 40 Gbps up to 30 meters. Wire with the T568A or T568B standard consistently. Fiber optic cable carries light and resists interference: multimode fiber for shorter runs inside buildings, single-mode fiber for long distances. Common fiber connectors are LC, SC, and ST. Power over Ethernet (PoE) powers devices such as access points and cameras through the network cable.

| Standard | Name | Bands | Notes |
| --- | --- | --- | --- |
| 802.11b |  | 2.4 GHz | Up to 11 Mbps (legacy) |
| 802.11a |  | 5 GHz | Up to 54 Mbps (legacy) |
| 802.11g |  | 2.4 GHz | Up to 54 Mbps (legacy) |
| 802.11n | Wi-Fi 4 | 2.4 and 5 GHz | MIMO antennas; up to 600 Mbps |
| 802.11ac | Wi-Fi 5 | 5 GHz | Multi-gigabit theoretical speeds |
| 802.11ax | Wi-Fi 6 / 6E | 2.4, 5, and 6 GHz (6E) | Efficiency in crowded spaces |
| 802.11be | Wi-Fi 7 | 2.4, 5, and 6 GHz | Wider channels and multi-link operation |

## Architectures, devices, storage, and racks

Topologies include star (devices connect to a central switch; most common), bus and ring (legacy), mesh (multiple paths for reliability), and hybrid. Client-server networks centralize resources and security on servers; peer-to-peer networks share among equal computers and suit very small offices. Network scale ranges from PAN and LAN to MAN and WAN. Cloud service models are IaaS (rent infrastructure), PaaS (rent a platform to build on), and SaaS (use finished software), deployed as public, private, or hybrid clouds. 5G cellular offers higher speeds and lower latency, with high-band millimeter wave limited to short range.

Switches forward frames by MAC address within a network; routers forward packets between networks; access points connect wireless devices; firewalls filter traffic. Network-attached storage (NAS) shares files over the network; a storage area network (SAN) gives servers block-level storage. Rack equipment is measured in rack units (1U = 1.75 inches); blade servers slide into a shared chassis for power and cooling.

| RAID level | Method | Minimum drives | Survives | Usable capacity of four 4 TB drives |
| --- | --- | --- | --- | --- |
| RAID 0 | Striping | 2 | No drive failure | 16 TB |
| RAID 1 | Mirroring | 2 | One drive (per mirror) | 8 TB (as two mirrored pairs) |
| RAID 5 | Striping with parity | 3 | One drive | 12 TB |
| RAID 6 | Striping with double parity | 4 | Two drives | 8 TB |
| RAID 10 | Mirrored stripes | 4 | One drive per mirror | 8 TB |

> **Try it yourself**
>
> Match each need to a choice and explain: (a) Users can reach websites by IP but not by name. (b) A 75-meter run must carry 10 Gbps. (c) A file server needs to survive two simultaneous drive failures. (d) A secure command-line session to a router.

<details>
<summary>Check your answer</summary>

(a) DNS (port 53): check the DNS server settings and resolver. (b) Cat6a, which supports 10 Gbps to 100 meters; Cat6 reaches 10 Gbps only to about 55 meters. (c) RAID 6, which uses double parity. (d) SSH on port 22, never Telnet.

</details>

## Key terms

**Three-way handshake.** TCP's SYN, SYN-ACK, ACK exchange that opens a connection.

**DORA.** Discover, Offer, Request, Acknowledge: the DHCP address assignment steps.

**PAT.** Port address translation: many private devices sharing one public IP using port numbers.

**OSPF.** A link-state routing protocol that chooses paths by cost.

**RAID 5.** Striping with distributed parity that survives one drive failure.

**Rack unit.** A standard rack height measurement of 1.75 inches.
