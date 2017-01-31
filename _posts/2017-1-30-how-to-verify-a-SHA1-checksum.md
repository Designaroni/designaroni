---
title: How to verify a SHA1 checksum
date: 2017-1-30
categories:
- tools
- terminal
tags:
- Tools
- Terminal
layout: post
subtitle: Verify Package with SHA-1 checksum
leadImageAlt: My Top 10 Atom Keyboard Shortcuts
leadImage: "/assets/How_to_verify_a_sha1_checksum_26_9.jpg"
---

> Front End Pro Tip: This is a multipart series on privacy, security, encryption & cryptography  

### Wikipedia History SHA-1, SHA-2, SHA-3

[Wikipedia SHA-1](https://en.wikipedia.org/wiki/SHA-1) "In cryptography, SHA-1 (Secure Hash Algorithm 1) is a cryptographic hash function designed by the United States National Security Agency and is a U.S. Federal Information Processing Standard published by the United States NIST. SHA-1 produces a 160-bit (20-byte) hash value known as a message digest. A SHA-1 hash value is typically rendered as a hexadecimal number, 40 digits long.

SHA-1 is no longer considered secure against well-funded opponents. In 2005, cryptanalysts found attacks on SHA-1 suggesting that the algorithm might not be secure enough for ongoing use, and since 2010 many organizations have recommended its replacement by SHA-2 or SHA-3. Microsoft, Google and Mozilla have all announced that their respective browsers will stop accepting SHA-1 SSL certificates by 2017."

[Wikipedia SHA-2](https://en.wikipedia.org/wiki/SHA-2) "SHA-2 includes significant changes from its predecessor, SHA-1. The SHA-2 family consists of six hash functions with digests (hash values) that are 224, 256, 384 or 512 bits: SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, SHA-512/256."

[Wikipedia SHA-3](https://en.wikipedia.org/wiki/SHA-3) "SHA-3 is not meant to replace SHA-2, as no significant attack on SHA-2 has been demonstrated. Because of the successful attacks on MD5 and SHA-0 and theoretical attacks on SHA-1, NIST perceived a need for an alternative, dissimilar cryptographic hash, which became SHA-3"

### SHA in the wild

I recently downloaded Wine for Mac. A program that should allow you to run windows programs on Mac. Underneath the download link was a hash for `SHA256`. You will see checksums across the internet for various purposes but the main reason to to verify the contents of a file has not been modified.

After downloading the file I was able to use `shasum` and the following command to verify the has on my machine was the same as the hash given on the website `$ shasum --algorithm 256 /Users/ianroberts/Downloads/winehq-staging-2.0.pkg`

2)
3)
4)
5)
6)
