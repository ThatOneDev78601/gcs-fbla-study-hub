---
title: "Number systems, IP addressing, subnetting, and packet travel"
summary: "Convert binary, decimal, and hexadecimal, read IPv4 classes and private ranges, subnet with CIDR and VLSM, write IPv6 addresses, and trace a packet through the OSI layers."
sourceIds: ["cisco"]
reviewed: "2026-11-02"
---

## Binary, decimal, and hexadecimal

Computers store everything in binary, base 2. An 8-bit byte has place values 128, 64, 32, 16, 8, 4, 2, and 1. Binary 11000000 equals 128 + 64 = 192. To convert 172 to binary, subtract place values from largest: 172 - 128 = 44, 44 - 32 = 12, 12 - 8 = 4, 4 - 4 = 0, so 172 = 10101100.

Hexadecimal, base 16, uses digits 0 to 9 and A to F (A = 10 through F = 15). One hex digit equals four bits. Hex 1A = 1 x 16 + 10 = 26. Binary 1111 1110 = hex FE = 254. MAC addresses and IPv6 addresses are written in hex.

## IPv4 addresses and subnet masks

An IPv4 address is 32 bits written as four decimal octets, such as 192.168.10.150. A subnet mask, or its CIDR prefix length, shows which bits are the network portion. /24 means the first 24 bits identify the network (mask 255.255.255.0), leaving 8 bits for hosts: 2^8 = 256 addresses, minus the network and broadcast addresses, gives 254 usable hosts.

Private addresses, which are not routed on the internet, are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. 127.0.0.1 is the loopback address. 169.254.0.0/16 is used for automatic addressing when DHCP fails. Historic classes still appear on tests: Class A first octet 1 to 126, Class B 128 to 191, Class C 192 to 223, Class D 224 to 239 for multicast, and Class E 240 to 255 reserved.

| Prefix | Mask | Addresses | Usable hosts |
| --- | --- | --- | --- |
| /24 | 255.255.255.0 | 256 | 254 |
| /25 | 255.255.255.128 | 128 | 126 |
| /26 | 255.255.255.192 | 64 | 62 |
| /27 | 255.255.255.224 | 32 | 30 |
| /28 | 255.255.255.240 | 16 | 14 |
| /30 | 255.255.255.252 | 4 | 2 |

## Subnet step by step

The block size is the number of addresses in each subnet: 256 minus the last nonzero mask octet. For /26, the mask's last octet is 192, so the block size is 64, and subnets start at 0, 64, 128, and 192.

- Variable-length subnet masking (VLSM) gives each subnet the size it needs, largest first. From 172.16.0.0/24: a 100-host office gets /25 (172.16.0.0 to .127), a 50-host office gets /26 (.128 to .191), a 20-host office gets /27 (.192 to .223), and a router-to-router link gets /30 (.224 to .227).

> **Example**
>
> Which subnet contains 192.168.10.150/26? Give the network address, usable host range, and broadcast address.
>
> 1. Block size: 256 - 192 = 64. Subnet starts: .0, .64, .128, .192.
> 2. 150 falls between 128 and 191, so the network address is 192.168.10.128.
> 3. Broadcast address: the last address before the next subnet, 192.168.10.191.
> 4. Usable hosts: 192.168.10.129 to 192.168.10.190 (62 hosts).
>
> Network 192.168.10.128/26, hosts .129 to .190, broadcast .191.

## IPv6 and MAC addresses

IPv6 addresses are 128 bits, written as eight groups of four hex digits separated by colons. Shorten them by dropping leading zeros in each group and replacing one run of all-zero groups with a double colon (::), used only once per address. 2001:0db8:0000:0000:0000:0000:0000:0042 becomes 2001:db8::42. Common types: global unicast addresses begin with 2000::/3, link-local addresses with fe80::/10, and ::1 is loopback. Most IPv6 subnets are /64.

A MAC address is a 48-bit hardware address for a network interface, written as six hex pairs such as 3C:22:FB:1A:09:7E. The first half identifies the manufacturer (the organizationally unique identifier).

## How a packet travels

The OSI model has seven layers: 7 application, 6 presentation, 5 session, 4 transport (segments, ports, TCP and UDP), 3 network (packets, IP addresses, routers), 2 data link (frames, MAC addresses, switches), and 1 physical (bits on cables or radio). The TCP/IP model groups these into four layers: application, transport, internet, and network access.

When a laptop sends a web request, each layer adds a header, called encapsulation. If the destination is on another network, the laptop sends the frame to its default gateway. It uses ARP to find the gateway's MAC address. Each router removes the frame, reads the destination IP, chooses the next hop, and builds a new frame. The MAC addresses change at every hop; the source and destination IP addresses stay the same unless NAT translates them at the edge.

> **Try it yourself**
>
> (a) Convert 10110100 to decimal and to hex. (b) For 10.4.7.200/27, find the network address, broadcast address, and usable host range. (c) Shorten 2001:0db8:0a00:0000:0000:0000:0000:0001.

<details>
<summary>Check your answer</summary>

(a) 128 + 32 + 16 + 4 = 180; 1011 = B and 0100 = 4, so hex B4. (b) Block size 32; subnets start at 192 and 224, so 200 is in 10.4.7.192/27. Broadcast 10.4.7.223; hosts 10.4.7.193 to 10.4.7.222. (c) 2001:db8:a00::1.

</details>

## Key terms

**CIDR notation.** Writing an address with a slash and the number of network bits, such as /24.

**Broadcast address.** The last address in a subnet, used to reach all hosts on it.

**VLSM.** Variable-length subnet masking: using different subnet sizes within one network.

**Encapsulation.** Adding a header at each layer as data moves down the network stack.

**ARP.** Address Resolution Protocol, which finds the MAC address for an IPv4 address on the local network.
