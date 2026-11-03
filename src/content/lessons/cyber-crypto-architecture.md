---
title: "Cryptography, access control, and secure architecture"
summary: "Simple ciphers, symmetric and asymmetric encryption, hashing, signatures, certificates and trust, attacks on cryptography, Zero Trust and access models, intrusion detection and deception, and secure cloud, container, and IoT design."
sourceIds: ["nist-csf","cisco"]
reviewed: "2026-11-02"
---

## From simple ciphers to modern encryption

A cipher transforms readable plaintext into ciphertext. The Caesar cipher shifts each letter a fixed number of places: with a shift of 3, CAT becomes FDW. It is easy to break by trying all 25 shifts or by counting letter frequency, which shows why modern cryptography relies on mathematics and very large keys.

Symmetric encryption uses one shared secret key to encrypt and decrypt. AES is the common standard; it is fast and used for files, disks, and the bulk of internet traffic. The challenge is sharing the key safely. Asymmetric encryption uses a key pair: a public key anyone may have and a private key only the owner keeps. Data encrypted with the public key can be decrypted only with the private key. RSA and elliptic-curve cryptography are common examples. Asymmetric methods are slower, so systems such as TLS use them to exchange a symmetric session key, then switch to symmetric encryption.

## Hashing, signatures, and certificates

A hash function turns any input into a fixed-length value. It is one-way (you cannot recover the input), and any change to the input changes the hash. SHA-256 is widely used. Hashes verify integrity: if a downloaded file's hash matches the published hash, the file was not altered. Systems store password hashes rather than passwords, adding a unique random salt to each password so identical passwords produce different hashes and precomputed rainbow tables fail. Slow password-hashing functions such as bcrypt or Argon2 make guessing expensive.

A digital signature proves who sent a message and that it was not changed. The sender hashes the message and encrypts the hash with their private key. The receiver decrypts it with the sender's public key and compares it with their own hash of the message. A match provides integrity, authentication, and non-repudiation, meaning the sender cannot credibly deny sending it.

A digital certificate binds a public key to an identity, such as a website's domain, and is signed by a certificate authority (CA). Browsers trust a set of root CAs; a site's certificate is trusted if it chains back to one of them, has not expired, matches the domain, and has not been revoked. This system is called public key infrastructure (PKI).

- Brute force tries every key or password; long keys and passwords defeat it.
- Dictionary attacks try common passwords; length, passphrases, and MFA reduce the risk.
- Man-in-the-middle attacks intercept traffic; certificate validation and HTTPS prevent them.
- Downgrade attacks force weaker protocol versions; disable outdated versions such as SSL and early TLS.

## Zero Trust, access control, and detection

Zero Trust assumes no user or device is trusted just because it is inside the network. Every request is verified using identity, device health, and context; access follows least privilege; and the network is divided into small segments so a breach in one area cannot spread easily.

AAA stands for authentication (proving identity, ideally with multifactor authentication combining something you know, have, and are), authorization (deciding what the identity may do), and accounting (logging what was done, which supports investigations). Access control models include discretionary access control (owners decide), mandatory access control (labels such as Secret decide), role-based access control (job roles decide), and attribute-based access control (rules combining attributes such as department, location, and time).

An intrusion detection system (IDS) monitors and alerts; an intrusion prevention system (IPS) sits inline and can block traffic. Signature-based detection matches known attack patterns; anomaly-based detection flags unusual behavior and can find new attacks but produces more false positives. Deception technology such as honeypots (fake systems), honeynets, and honeytokens (fake credentials or files) attracts attackers and alerts defenders, since legitimate users have no reason to touch them.

## Secure architecture

In the cloud, the shared responsibility model divides duties: the provider secures the physical infrastructure, and the customer secures what they configure, such as accounts, data, and access settings. Misconfigured storage open to the public is a common cause of breaches. Microservices split an application into small services that communicate over the network, which isolates failures but adds more connections to secure. Containers package an application with its dependencies and share the host's operating system kernel; virtual machines run full operating systems on a hypervisor (type 1 runs directly on hardware, type 2 runs on a host operating system).

Internet of Things devices often ship with default passwords and rarely receive updates. Change defaults, update firmware, and place them on a separate network segment. Segmentation uses VLANs, firewalls, and a screened subnet (DMZ) for public-facing servers. Availability is part of security: RAID protects against drive failure, backups protect against deletion and ransomware, and UPS units, surge protectors, and generators protect against power problems.

> **Example**
>
> A fictional dental office has a front-desk PC, two exam-room PCs, a cloud scheduling system, Wi-Fi security cameras, and patient X-ray files on a local server. Identify three risks and a control for each.
>
> Risk 1: cameras with default passwords could give attackers a foothold. Control: change credentials, update firmware, and isolate the cameras on their own VLAN. Risk 2: stolen staff passwords could expose the cloud scheduling system. Control: MFA and role-based access, with front desk staff unable to view clinical notes. Risk 3: ransomware could encrypt X-rays. Control: encrypted, offline or immutable backups tested by restore, plus endpoint protection. Each control maps to a specific risk, which is how to justify choices.

> **Try it yourself**
>
> (a) Decrypt the Caesar ciphertext KHOOR with a shift of 3. (b) Alice wants to send Bob a confidential message using asymmetric encryption. Whose key encrypts it? (c) Alice wants to sign a message so Bob can verify it came from her. Whose key signs it?

<details>
<summary>Check your answer</summary>

(a) Shift each letter back 3: K to H, H to E, O to L, O to L, R to O, giving HELLO. (b) Bob's public key; only Bob's private key can decrypt it. (c) Alice's private key signs the hash; Bob verifies with Alice's public key.

</details>

## Key terms

**Symmetric encryption.** Encryption that uses the same secret key to encrypt and decrypt.

**Hash.** A fixed-length, one-way value computed from data, used to check integrity.

**Salt.** Random data added to a password before hashing so identical passwords hash differently.

**Non-repudiation.** Assurance that a sender cannot deny having sent a signed message.

**Zero Trust.** A security model that verifies every access request instead of trusting network location.

**Honeypot.** A decoy system designed to attract and detect attackers.
