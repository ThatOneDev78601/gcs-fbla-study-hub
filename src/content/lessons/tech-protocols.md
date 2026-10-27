---
title: "Network protocols, services and layered diagnosis"
summary: "Trace a request through naming, addressing, transport and application services."
sourceIds: ["cisco","mdn"]
reviewed: "2026-10-27"
---

## Why networks use layers

Layered models divide communication into responsibilities. Physical signaling carries bits; the data-link layer handles local frames; the network layer handles IP packets; transport provides communication between application endpoints. Application protocols define useful conversations such as requesting web content. The OSI model has seven layers, while TCP/IP groups responsibilities differently. Encapsulation adds control information as data moves down the stack; the receiver interprets and removes it. A layer model is a diagnostic aid, not a rule that every real fault belongs neatly to only one box.

## Common services and their roles

DNS translates names into records such as IP addresses. DHCP can supply clients with addressing configuration automatically. HTTP defines web requests and responses; HTTPS protects HTTP in transit with TLS. TCP provides an ordered, reliable byte stream, while UDP sends datagrams without built-in delivery or ordering guarantees. Applications choose based on their needs and may add their own reliability. Ports distinguish services on an address: HTTPS commonly uses 443, HTTP 80 and DNS 53. Secure remote administration commonly uses SSH rather than unencrypted legacy alternatives. A reachable server can still reject an unauthorized application request.

> **Work through an example**
>
> A website loads when you enter its IP address but not when you use its name.
>
> Investigate DNS resolution and name-related configuration. The comparison suggests that at least one IP path works, though HTTPS certificates can complicate IP-only tests.

## Common mistakes and test decisions

Ping tests one kind of reachability using ICMP; a blocked ping does not prove the host is down. A successful ping also does not prove that a web service is listening. Trace tools reveal responding hops, but some routers deliberately do not answer. Test progressively: physical connection, local address, gateway, remote destination, name resolution and application response. Distinguish a DNS error from a server’s HTTP error. Encryption protects data during transport, but it does not establish that a website’s claims are trustworthy. Never treat a familiar port number as proof that traffic is harmless.

## Key terms to remember

**DNS.** A distributed naming service that resolves names to records.

**DHCP.** A protocol that supplies network configuration to clients.

**TCP.** A transport protocol providing an ordered reliable byte stream.
