---
layout: post
title: "App.net widget"
date: 2013-01-30 19:28
comments: true
categories: [code, geek]
---

As some of may know, I joined [App.net][1] (a platform for messaging) when they were raising money before launch, and I've been a fairly active poster on the service. I don't post often on Twitter now (perhaps as a consequence of hanging out more at App.net), and so I've been slightly irritated by the fact that I couldn't find a pre-built widget to show my recent App.net posts on the sidebar of this blog in the same way that I can show my tweets. I'm sure that someone will eventually build one, but in the meantime, I hacked something together myself.

And boy is it a hack... The slight difficulty with App.net is that you need to have Developer level membership (which I don't have) in order to do the more useful kinds of hacking with the API. Looking at the API documentation, I'm pretty sure that it would be fairly trivial to knock something up if I had the magic tokens to interact directly, but I don't. However, anyone can access the public RSS feed of their own (or anyone else's) posting history, so that's what I decided to use.

You can see the details of what I did in [this commit][2] if you want to try to reproduce it, but the essence of my approach is as follows. I put a line in my crontab on my server to use `curl` to fetch a copy of the RSS feed for my posts every 30 minutes and cache it where my blog can see it:

```
*/30 * * * * /usr/bin/curl https://alpha-api.app.net/feed/rss/users/@bsag/posts -o /MYPATH/data/adn.xml
```

I then use [jFeed][3] together with a Javascript (`javascripts/adn.js`) which I cobbled together relying heavily to the similar twitter.js written by [Brandon Mathis][4]:

{% gist 4676656 %}

This reads the cached RSS feed and uses jQuery to write HTML to the sidebar, via a custom aside (`source/_includes/custom/asides.adn.html`), which again, was more or less copied with a few tweaks from Brandon's original Twitter aside that's included in the Octopress installation. Apart from a few tweaks to CSS and to the lines calling jQuery to prevent conflicts between the javascripts, that's about it. If you deploy your blog using rsync, you'll also need to modify your `Rakefile` to make sure that rsync doesn't delete your server side data directory containing the RSS file every time you deploy your site.

At some point, I might package this up into a separate distribution with step-by-step instructions, but hopefully this will point anyone else interested in doing this in the right direction. As I said, I hope that at some point someone will put together something a bit more elegant and less hacky, but this works for now.

[1]: http://alpha.app.net/
[2]: https://github.com/bsag/blog-octo/commit/ff19e1eaf21e440eebdee8ffd001370278bf4a59
[3]: https://github.com/jfhovinne/jFeed
[4]: http://brandonmathis.com/
