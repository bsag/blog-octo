---
layout: post
title: "On rabbit holes"
date: 2012-10-28 11:53
comments: true
categories: [mumblings, geek]
---

What follows is deeply geeky and probably only of interest to me and about three other people. It's also a bit of a rant at my own tendency to fiddle. You have been warned!

Sometimes you just need to leave things alone.

Yesterday I decided that I'd have a go at replacing [rvm][1] with [rbenv][2]. Both are collections of shell scripts that allow you to manage multiple versions of ruby, which you may need to do if you deal with applications, scripts or APIs that require a specific version. Both allow you to set global versions of ruby, or set a version for a specific project. Up until now, I used rvm to use Ruby 1.9.2 for my Octopress blog, which required it. Now, there was nothing enormously wrong with rvm, but I had encountered one or two problems with building gems and other bits of oddness. I therefore decided that rbenv would be a cleaner solution as it doesn't intrude on the shell as much as rvm, and doesn't try to manage gems. I had a bit of time on Saturday morning, so I thought I would just remove rvm and install rbenv: easy, right?

Wrong. Actually, installing rbenv itself wasn't too bad, but it seemed to set off a cascading series of other problems[^1]. I knew that I had to set up ruby 1.9.2 for my Octopress blog, so I did that, but found that building my blog was completely broken. Rake just produced a series of obscure error messages. I tried upgrading to the newest version of Octopress (something I really should do properly at some point), but that just made things more broken. No problem, I'm using git, so I restored to the last working version. Still broken. I won't bore you with the whole sorry saga (even if I could remember exactly what I did), but for every bit of progress I made, I broke something else: once I got the blog to build, [Pow][3] (which I use to view the site locally) wouldn't start. Once I'd downloaded a new version of Pow and set it up so that I had the right environment for rbenv, the site loaded but the styling was utterly broken. At this point (about 8pm on Saturday night), I stormed away from the computer in a huff, had dinner and watched a film with Mr. Bsag.

This morning, I started again with a fresh head and have finally got the blog working again. There are still minor problems with my shell that I've got to resolve but I think I can see the way forwards now. I should say that I've had to do all this self-imposed fixing on my old Apple Bluetooth keyboard rather than my lovely [Happy Hacking Keyboard Pro II][4] because I managed to leave the latter at work on Friday. So not only has it been an annoying slog, it has felt like doing carpentry with a blunt chisel because I've got so accustomed to my lovely new keyboard. The moral of this story is obviously, "if it ain't broke, don't fix it".

[^1]: I'm not blaming rbenv here: I'm pretty sure almost all of my problems were caused by my lack of understanding about what I was doing.  


[1]: https://rvm.io
[2]: http://rbenv.org
[3]: http://pow.cx
[4]: http://rousette.org.uk/blog/archives/happily-hacking-with-my-happy-hacking-keyboard/
