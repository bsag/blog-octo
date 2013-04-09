---
layout: post
title: "Feed issues now sorted out"
date: 2013-04-03 23:05
comments: true
categories: [blogging]
---

I had one or two problems with the Atom feed that happened just after I moved from [Feedburner recently][2], but which were actually my own fault and nothing to do with that transition. During a previous update of [Octopress][3], I think I must have forgotten to update the source for the Atom feed. I therefore didn't have the latest version in which the contents of the feed are surrounded by `CDATA` blocks. The details aren't important[^1], but I noticed when my feedreader didn't show me the last two posts I had written. When I checked with the diagnostic tool provided by [URI.LV][4] I found that there was an error in the feed and it was not being parsed properly. It turned out to be because the accented characters in the title of a previous post &mdash; 'Caff&egrave; Interruptus' &mdash; was causing the problem.

To cut a long and tediously nerdy story short, I fixed the source file that generates the actual Atom feed so that it would wrap stuff up in `CDATA` blocks and make sure that everything is properly escaped, and all seems fine now. As a good side effect, it has also fixed the problem that images in the articles were not appearing in the feed: something I noticed a while ago, but hadn't got around to sorting out.

I'm sure that this is interesting to no-one but me, but I thought I'd mention it in case anyone had noticed the odd mismatch between the feed and the site.

[^1]:	Or in any way interesting.

[2]:	http://rousette.org.uk/blog/archives/leaving-feedburner/ "Leaving Feedburner"
[3]:	http://octopress.org/ "Octopress home page"
[4]:	http://uri.lv/
