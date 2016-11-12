---
title: View Localhost On Devices In Your Network
date: 2016-11-06 18:00:00 Z
categories:
- terminal
tags:
- terminal
- code
- automation
layout: post
subtitle: How do I connect to this localhost from another computer on the same network?
leadImage: "/assets/unsplash_vadim_sherbakov_26-9.jpeg"
leadImageAlt: How do I connect to this localhost from another computer on the same
  network?
forwardSlash: "/"
---

# Quick tip of the day

Often when I am working on `localhost` I want to test my work on other devices within my network. I typically would run `ifconfig` in the __terminal__ and peer through the lines of returned text for the the word `broadcast` then use the IP address from that line. Wanting an easier solution I put together the following shell script.

```
localIp() {
  ifconfig | grep -o '[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}' | head -2 | tail -1
}
```

I use `zsh` for my shell and have this housed in my `~{{site.forwardSlash}}.zshrc` file. Implementation is pretty straight forward. I also use __Atom__ most often for my editor

- Open your config file `atom ~{{site.forwardSlash}}.zshrc`
- Place in the function under the `# User configuration` line
- Reset available commands without needing to quit or restart terminal `source ~{{site.forwardSlash}}.zshrc`

Now you can run `localIp` and you should see something like this.
![Return Localhost Broadcast IP Address]({{site.baseurl}}/assets/local-ip-Nov-11-2016 16-14-06.gif)

