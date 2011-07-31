---
layout: post
title: "Octopress"
date: 2011-07-31 12:59
comments: true
categories: [geek, blogging]
---

Yes, it's not just you &mdash; things do look a bit different around here. I've been tinkering again[^stress-1]. A week or so ago I noticed [Octopress][]. It's not a full-blown static blog generator, but a framework around [Jekyll][] designed by [Brandon Mathis][]. I looked briefly at Jekyll when I converted to [nanoc][] recently, and thought that it wasn't flexible enough for my needs. It turns out that I didn't really understand how to adapt it for my needs, because it's working really well for me now. The great thing about Octopress is that it includes a very nice out-of-the-box theme and configuration that is very usable as it is.

However, if you want to modify either the theme or the structure, that's easy to do because the templates and stylesheets are very modular. I modified the structure quite a bit because I needed to maintain the URLs and so on that I had before, otherwise I would probably have just gone with the default set up. It has a very nicely designed HTML5/CSS3[^sass-2] framework that is flexible for different sizes of window or screen. Try resizing the browser window or viewing this site on a phone or iPad &mdash; it's pretty cool! Octopress also comes with some good plugins for embedding gists, structuring pullquotes and so on.

So, why did I switch? Nanoc is a great framework, and I have enjoyed building my site with it a great deal. However, one ongoing problem that I had with nanoc was that it was taking a very long time to build my site, even when I only had one new post to generate. My site is pretty huge, with over 1,350 posts, and I fully expected Jekyll/Octopress to be just as slow. Indeed, Paul Stamiatou, who converted a similarly sized blog to Jekyll, [reported that][] it originally took 50 minutes to generate the full site. I was very surprised to find that even with archive pages and tag categories, it took less than 2 minutes to build the whole site, rather than more than 10 minutes for nanoc. I suspect that I had misconfigured something with my nanoc site, but I had attempted to work out what it was without success. My other reason for switching is that the styling is so good, providing a much better base than I was able to produce on my own. With any luck I might be able to maintain it more easily too.

A few things haven't yet made the change over. I haven't moved the 'lifestream' page over yet, as I'm thinking about redesigning it and perhaps using different services. I had been using blippr for posting mini reviews of films I've seen, but it has been unreliable recently and I often find that films I've seen aren't on their database, which is irritating. Does anyone know of a similar service, perhaps using [IMDB][] as a database?

Most other things should be OK, and the RSS feed address should be the same. If you notice anything that's askew, let me know.

[^stress-1]: Why yes, I am relieving stress by solving geeky problems again &mdash; how did you know?

[^sass-2]: It uses SASS and Compass for organising the stylesheets, which is very handy.

[Octopress]: http://octopress.org/
[Jekyll]: http://github.com/mojombo/jekyll
[Brandon Mathis]: http://brandonmathis.com/
[nanoc]: http://nanoc.stoneship.org/
[reported that]: http://paulstamatiou.com/how-to-wordpress-to-jekyll
[IMDB]: http://www.imdb.com/
