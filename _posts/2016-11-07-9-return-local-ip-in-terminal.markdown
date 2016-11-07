---
title: Return Localhost As A Sharable IP Adress
date: 2016-11-07 00:00:00 Z
categories:
- terminal
tags:
- terminal
- code
- automation
layout: post
subtitle: return local ip address in terminal for mac
leadImage: "/assets/unsplash_vadim_sherbakov_26-9.jpeg"
leadImageAlt: return local ip address in terminal for mac
---

# This is a Test

```
localIp() {
  ifconfig | grep -o '[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}' | head -2 | tail -1
}
```
