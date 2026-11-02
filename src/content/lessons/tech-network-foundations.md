---
title: "Networks, addressing and physical connections"
summary: "How devices connect, use addresses, and send data through network equipment."
sourceIds: ["cisco"]
reviewed: "2026-10-27"
---

## From one device to a network

A local area network connects devices across a limited area; a wide area network connects networks over larger distances. A switch forwards Ethernet frames within a local network using MAC addresses. A router forwards packets between IP networks. A wireless access point connects wireless clients to the wired network; it is not automatically the internet connection itself. Client-server systems centralize services, while peer-to-peer arrangements let peers share directly. Star topologies connect endpoints to central equipment. A central switch failure can affect many clients, whereas one endpoint cable failure may affect only one.

## Addresses, subnets and media

An IP address identifies an interface within an IP network. The subnet prefix describes which portion identifies the network, and the default gateway provides a path to destinations outside that subnet. IPv4 and IPv6 use different address structures; IPv6 is not simply an extra-fast form of Wi-Fi. Private IPv4 addresses are commonly translated at a network boundary using NAT. Copper Ethernet, fiber and wireless have different distance, interference, cost and installation tradeoffs. Fiber carries light and resists electromagnetic interference. Wireless uses shared radio spectrum, so walls, channel congestion and distance affect performance.

> **Example**
>
> A computer can reach local shared files but cannot reach external websites by IP address.
>
> Check its default gateway and the upstream route. Local success shows that some LAN functions work; DNS alone cannot explain failure to reach a known external IP.

## Checking network connections

Bandwidth is a link’s capacity, throughput is achieved data transfer, and latency is delay. A high-bandwidth link can still feel slow when latency or packet loss is high. Compare wired and wireless results to isolate radio issues. Verify physical link, address, subnet and gateway before blaming the application. Two devices using the same IP address can create intermittent connectivity. A connected Wi-Fi icon only confirms association, not successful internet access. Network diagrams should show devices, links and boundaries clearly enough that another person can trace the path from a client to a service.

## Key terms

**Switch.** A device that forwards frames within a local Ethernet network.

**Default gateway.** The router used to reach destinations outside the local subnet.

**Latency.** Delay experienced as data travels through a system.
