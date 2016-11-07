---
layout: post
title: Return Localhost As A Sharable IP Adress
subtitle: return local ip address in terminal for mac
date: 2016-11-07T00:00:00.000Z
categories: terminal
tags: terminal code automation
leadImage: /assets/unsplash_vadim_sherbakov_26-9.jpeg
leadImageAlt: return local ip address in terminal for mac
published: true
---
# This is a Test

```
localIp() {
  ifconfig | grep -o '[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}' | head -2 | tail -1
}
```
