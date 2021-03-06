---
layout: post
title: "Moving my virtual home"
date: 2012-09-05 18:32
comments: true
categories: [geek, mumblings]
---

If you read tech blogs, you may have seen [the news][1] that Joyent recently announced that they were ending their Lifetime shared hosting. Several years ago, they offered customers the opportunity to buy a Lifetime account, which &mdash; we were assured at the time &mdash; would exist for as long as the company did. It was a big lump sum for me at the time, but I liked the company (then called TextDrive), and since the whole business of looking for a good hosting company was both difficult and tedious, I thought it would be a good deal: a chunk of money up front in return for being able to forget about hosting problems. It seems that this was a rash promise for the company to make, because the 'Lifetimers' don't seem to fit in with the company any more (they specialise in huge corporations and excessive buzzwords, apparently), and so we were all to be given the heave-ho.

Needless to say, there was a bit of an outcry (to put it mildly). When a company sends out emails with the ham-fisted phrase "your lifetime service will end on October 31, 2012", that is perhaps to be expected. I was pretty upset and angry about the whole thing. Not only was I going to lose the service that I had come to rely on, but I had to find a new host and move everything in only two and a half months, during which time I had a holiday and then a very busy period at the start of term.

I started asking around about options for hosting companies, and got a lot of good reviews for [Linode][2]. They offer a slightly different product than I had with TextDrive/Joyent, as they provide virtual private servers (VPSs) on which to run your own Linux system. In other words, you have the run of a whole (virtual) machine, but you are also responsible for installing and maintaining all the software you will use. It was a daunting prospect, but their support is reputedly very good, and their documentation is really excellent. In the meantime, in response to the outcry from customers, Joyent had come up with a 'final offer' of either a 5 year credit on Joyent Cloud (another kind of VPS) or a full refund. I really didn't want to face two moves in 5 years and I couldn't make much sense of the instructions for setting up and maintaining the Joyent VPS. Furthermore, my trust in the company was at rock bottom, and I didn't really want to stay with them, even if they were offering 5 years for free. I therefore decided that I would take the refund option and move to Linode, so I paid for hosting there and started to move my stuff while I had some spare time on holiday.

Meanwhile, things changed again. The other original founder of TextDrive, Dean Allen, [announced][3] that TextDrive would re-launch as a separate hosting company and continue to provide for the lifetime customers for free. This was great news, and I sincerely wish them every success, but I was less pleased when it transpired that the promised refund was now withdrawn. So now I don't really know where I stand: I made a decision and paid out for a new host on the basis of the information I was given by Joyent and because of the tight time constraints for completing the move. I'm going to see if they will offer to stand by the refund, but I don't hold out any great hope.

Anyway, the good news is that I'm really enjoying Linode. Setting up the server turned out to be much less intimidating than I had thought, thanks partly to the really clear guides that they offer for common system administration tasks. You can choose between a number of different Linux distributions, and I chose [ArchLinux][4] which I had used on the desktop and with which I was fairly familiar. They also have a great online dashboard (and even an iPhone app), which allow you to monitor your Linode and carry out some high-level tasks like cloning your configuration and backing up. Since it is a virtual machine, you can also upgrade to a larger virtual home with more resources very easily, without having to start from scratch. However, I may never need to do so, as the smallest Linode seems to be ample for my needs. Everything seems to be very speedy on Linode, and logging in to my server[^1] via ssh is _so_ much faster than it ever was on Joyent, even when I migrated a couple of years ago to a Shared Accelerator which used much newer hardware. Those of you in the UK may also find this site faster too, as the data centre I chose is located in London.

I've got a lot more freedom to install stuff on this server[^2], which has meant that I've been able to install my own services to replace a few external ones I used to pay a monthly charge for. That has helped to soften the financial blow a bit. None of the sites I run make any money, but at this point they are an important part of my life. This October it will be the 10th anniversary of this blog, and there's no way I'm going to just let it lapse now. In some ways, I'm quite glad that I'm getting more involved with the mechanics of hosting the site, and becoming more self-sufficient. It seems appropriate somehow. Farewell TextDrive/Joyent and hello Linode!

**Edited 2012-09-07**: I meant 'VPS' (Virtual Private Server) not 'VM' (Virtual Machine).

[^1]: Try to guess what name I assigned as the hostname for my server. Hint: it's the name of a person.

[^2]: And correspondingly more opportunity to break things, so keep your fingers crossed!

[1]: http://chrismcleod.me/2012/08/30/joyent-textdrive-and-the-need-for-clear-frequent-communication/
[2]: http://linode.com/
[3]: http://forums.joyent.com/viewtopic.php?id=33821
[4]: http://www.archlinux.org