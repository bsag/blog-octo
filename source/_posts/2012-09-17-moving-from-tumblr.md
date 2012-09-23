---
layout: post
title: "Moving from Tumblr"
date: 2012-09-17 19:13
comments: true
categories: [blogging, geek]
---

Since [I moved my stuff to Linode][1], I've been on a bit of a digital self-sufficiency drive. I've tried as much as possible to move all my stuff (at least the stuff that I put some effort into creating) to my own VPS, and keep it in a format that I can easily move somewhere else or use again. Where that isn't possible or too much trouble[^1], I've tried to move to services that do the old-fashioned thing of charging money for services or products, rather than providing something 'free', while exploiting the 'customer' for advertisement revenue or whatever.

Phase 1 of this process has gone pretty well. I've still got one site to move, but since it is a static one, it shouldn't be too much trouble. The other issue was my [Tumblr site, Slipstream][2]. Tumblr is pretty convenient and has nice features, but it's not hosted on my own server, and it doesn't even provide an easy way to get your content out. They don't provide paid accounts, and it's not clear how they are sustaining their business. I've posted very sporadically there, partly I think because it never felt as if my 'stuff' was all that secure there. Nevertheless, it's a useful outlet for little bits of things like links to videos, websites, short posts and so on. While I love [Octopress][3] very dearly, if you have a big site like mine, you can't post something quickly because you've got to wait until the build process regenerates the whole site. While that's no problem at all for long posts, it's a bit of a disproportionate effort for a link to the latest cat video.

I had a look at [Scriptogr.am][4], which seems about the quickest and easiest way to publish stuff online I've ever seen. However, while the text files reside safely in your Dropbox (thus fulfilling the 'easy to get stuff out' criterion), the site itself is hosted on Scriptogr.am's servers.

After looking around a bit more, I came across [Kirby][5]. For me at least, this is the 'Mummy Bear'[^2] of blogging solutions, in that it's a great compromise between having a dynamic site but also using a very transparent system based on plain text files and folders. It's also a good compromise in that the source is available on GitHub for you to view, but you pay for a licence when you use it on a public site, providing an incentive for its creator, [Bastian Allgeier][6] to keep up the excellent work.

It works like this: Kirby uses PHP to serve a site that is dynamically constructed using HTML/PHP templates and content from plain text files (in Markdown format) and folders. There's no database. It's extremely flexible, and can be used to create any kind of site structure. Even better, you can add whatever variables you like to your content files using a [simple syntax][7]. For example, if you were creating a post or page type that displayed videos, you might want a variable that stored the URL of the video so that you could use the variable in the template to automatically construct the appropriate HTML to display and style the video. It's a bit like [Tinderbox][8] in that you can add and adapt these variables as you go: you don't need to rebuild the database structure just because you decide later that you'd like to add tags to posts.

Adding a new blog post or page is as simple as creating a folder and dropping a text file in it, then uploading those files to your server. It's possible to do this using Dropbox if you can install the Dropbox client on your server, but there's also the [Kirby Panel][9], which provides a web interface for creating the necessary files and writing the posts on your server. I was expecting it to be a bit basic, but I've been amazed by how functional and easy to use it is. It basically gives you the best of both worlds: you can administer your sites by creating text files, or through an online panel, or a mixture of both. The whole package is very nicely designed and easy to use, and the default template and structure is a clean and functional point from which to start building your site. There are also lots of useful plugins, and helpful tutorials if you need a bit of guidance to get going.

Anyway, this is all a very long preamble to say that I've now moved Slipstream to my own [Kirby-driven tumblelog type thing][10]. Do go and take a look if you are curious. I won't be posting any more on my Tumblr site, but I'll just leave it up there for now. I've also added link in the navigation menu of this site to point to 'New Slipstream', so that they feel better integrated. I've still got a bit of tweaking to do there, but it seems to be working fine.

[^1]: Hey, I never said that I wasn't lazy.

[^2]: That is, Just Right.

[1]: http://rousette.org.uk/blog/archives/moving-my-virtual-home/
[2]: http://bsag.tumblr.com/
[3]: http://octopress.org/
[4]: http://scriptogr.am/
[5]: http://getkirby.com/
[6]: http://bastianallgeier.com/
[7]: http://getkirby.com/docs/variables/page
[8]: http://eastgate.com/Tinderbox/
[9]: http://getkirby.com/docs/panel
[10]: http://slipstream.rousette.org.uk/