---
title: Verify authenticity of files & packages with shasum & openssl
date: 2017-1-30 08:53:00 Z
categories:
- tools
- terminal
tags:
- Tools
- Terminal
layout: post
subtitle: shasum, openssl & sha1, sha256, md5 hashes
leadImageAlt: shasum, openssl & sha1, sha256, md5 hashes
leadImage: "/assets/Verify_authenticity_of_files_with_shasum_openssl_26_9.jpg"
---


> Front End Pro Tip: This is going to be a multipart series on privacy, security, encryption & cryptography  


### Wikipedia History SHA-1, SHA-2, SHA-3


[Wikipedia SHA-1](https://en.wikipedia.org/wiki/SHA-1) "In cryptography, SHA-1 (Secure Hash Algorithm 1) is a cryptographic hash function designed by the United States National Security Agency and is a U.S. Federal Information Processing Standard published by the United States NIST. SHA-1 produces a 160-bit (20-byte) hash value known as a message digest. A SHA-1 hash value is typically rendered as a hexadecimal number, 40 digits long.


SHA-1 is no longer considered secure against well-funded opponents. In 2005, cryptanalysts found attacks on SHA-1 suggesting that the algorithm might not be secure enough for ongoing use, and since 2010 many organizations have recommended its replacement by SHA-2 or SHA-3. Microsoft, Google and Mozilla have all announced that their respective browsers will stop accepting SHA-1 SSL certificates by 2017."


[Wikipedia SHA-2](https://en.wikipedia.org/wiki/SHA-2) "SHA-2 includes significant changes from its predecessor, SHA-1. The SHA-2 family consists of six hash functions with digests (hash values) that are 224, 256, 384 or 512 bits: SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, SHA-512/256."


[Wikipedia SHA-3](https://en.wikipedia.org/wiki/SHA-3) "SHA-3 is not meant to replace SHA-2, as no significant attack on SHA-2 has been demonstrated. Because of the successful attacks on MD5 and SHA-0 and theoretical attacks on SHA-1, NIST perceived a need for an alternative, dissimilar cryptographic hash, which became SHA-3"


### SHA's in the wild


---


#### Using `shasum`


I recently downloaded Wine for Mac to run Windows programs. Underneath the download link was a hash/checksum for `SHA256`. To verify a hash you can use `$ shasum` and the following command to verify the integrity of the package.


`$ shasum --algorithm 256 ~/path/to/file/winehq-staging-2.0.pkg`


```
$ shasum --algorithm 256 winehq-staging-2.0.pkg
> 295f0f78d0e0f9f36d336586a651c0a2c427174c2be3c7ca0ce63c9812dd15fd  winehq-staging-2.0.pkg
```


Reading the `man` file for `shasum` allows you to see what additonal options & commands are available. Most notably for this use case the `--algorithm` flag can be specified. To open the manual file run `$ man shasum` these are the available algorithm types:


```
-a, --algorithm   1 (default), 224, 256, 384, 512, 512224, 512256
```


`shasum` documentation further states:


> "When verifying SHA-512/224 or SHA-512/256 checksums, indicate the  algorithm explicitly using the -a option, e.g."


```
shasum -a 512224 -c checksumfile
```


#### Using `openssl`


I recently downloaded qBittorent for Mac. On issues associated with filesharing I'll only say that filesharing is not inherently illegal nor is it inherently safe as it relies on a network of trust & by default your ip address is exposed to peers in the swarm. The qBittorent site initially list a SHA-1 Checksum though the downloads link provided lists MD5, SHA1 & SHA256 hashes. `openssl` can work much like the `shasum` to verify the integrity of a file or package.

`openssl` is a larger tool than what I'll talk about here. More information on openssl can be found in the man file `$ man openssl`. Support for hash algorithms is as follows:


```
  md2       MD2 Digest

  md5       MD5 Digest

  mdc2      MDC2 Digest

  rmd160    RMD-160 Digest

  sha       SHA Digest

  sha1      SHA-1 Digest

  sha224    SHA-224 Digest

  sha256    SHA-256 Digest

  sha384    SHA-384 Digest

  sha512    SHA-512 Digest
```


> Using 'openssl' to check hashes for 'md5' & 'sha1' does not require the 'dgst' command while 'sha256' does require using 'dgst'.


#### MD5


```
$ openssl md5 ~/path/to/file/qbittorrent-3.3.10.dmg
> MD5(/path/to/file/qbittorrent-3.3.10.dmg)= 22043ac3716b6a08aed5841d4f0a0a4c
```


#### SHA1


```
$ openssl sha1 ~/path/to/file/qbittorrent-3.3.10.dmg
> SHA1(/path/to/file/qbittorrent-3.3.10.dmg)= 0c44069c998d1f70e889408c6da4aea1e6387fb5
```


#### SHA256


```
$ openssl dgst -sha256 ~/path/to/file/qbittorrent-3.3.10.dmg
> SHA256(/path/to/file/qbittorrent-3.3.10.dmg)= 2ceece42dbb7e84a88496028c09e34edac5be8d9583d0475d494883b97a11a5f
```

---


Additional tools are available to veryfy the integrity of files & packages. Some as simple as `$ md5` though may not be as robust as `shasum` or `openssl`
