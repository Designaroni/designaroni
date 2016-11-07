---
layout: post
title: Return Localhost As A Sharable IP Adress
subtitle: return local ip address in terminal for mac
date: 2016-04-05T00:05:00.000Z
categories: terminal
tags: terminal code automation
leadImage: /assets/unsplash_vadim_sherbakov_26-9.jpeg
leadImageAlt: return local ip address in terminal for mac
published: false
---
# This is a Test

```
localIp() {
  ifconfig | grep -o '[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}' | head -2 | tail -1
}
```

