---
layout: post
title: "The Way of the Megapode"
date: 2013-05-05 19:17
comments: true
categories: [mumblings]
---

One of my favourite books about natural history is [Last Chance to See][1] written by the late Douglas Adams (not actually a biologist) and Mark Carwardine (actually a biologist). Douglas Adams, of course, could write about just about anything and make it both thought-provoking and funny, and in Last Chance to See, he brings an outsider's eye to the study of the animal kingdom. The book is an account of a number of expeditions the pair made to see critically endangered species, but along with the natural history, it is a hilarious travelogue and a brilliant account of the trials and tribulations of the zoologist. For example, there's a wonderful passage in which they try to buy condoms in Shanghai in order to waterproof a microphone to record noise pollution in the Yangtze River (they were trying to find Yangtze river dolphins). You can hear Douglas relating some of the story [here][2], but the gist was that the woman in the pharmacy could not understand why they would not accept the clearly superior oral contraceptive pills, and their attempts at miming and drawing diagrams just made things worse. As someone who has done clearly insane things in public in the name of science (for example, releasing a series of pigeons held in a transparent box mounted on top of a step ladder in the middle of Port Meadow in Oxford by pulling a string attached to a bulldog clip holding the lid closed, and then watching the pigeon with binoculars), I know the kinds of looks you get from Muggles.

But I digress. I mention Last Chance to See because it also has a wonderful passage about [megapodes][3]. Megapodes are an Australasian family of birds that look a bit like small turkeys. Their claim to fame is that instead of sitting on their eggs to incubate them like most bird species, they bury their eggs in an elaborate mound of their own construction. The mound contains rotting vegetation that releases heat and keeps their eggs at the required incubation temperature. Douglas Adams was fascinated by these birds, in part because he recognised a similar tendency in himself to engage in an enormous amount of fiddly labour in order to 'save effort':

<blockquote>
<p>I've just spent a cheerful hour of my time writing a program on my computer that will tell me instantly what the volume of the mound was. It's a very neat and sexy program with all sorts of pop-up menus and things, and the advantage of doing it the way I have is that on any future occasion on which I need to know the volume of a megapode nest, given its basic dimensions, my computer will give me the answer in less than a second, which is a wonderful saving of time. The downside, I suppose, is that I cannot conceive of any future occasion that I am likely to need to know the volume of a megapode nest, but no matter: the volume of this mound is a little over nine cubic yards. [...]</p>

<p>So all the megapode has to do to incubate its eggs is to dig three cubic yards of earth out of the ground, fill it with three cubic yards of rotting vegetation, collect a further six cubic yards of vegetation, build it into a mound, and then continually monitor the heat it is producing and run about adding bits or taking bits away.</p>

<p>And thus it saves itself all the bother of sitting on its eggs from time to time.</p>

<footer><strong>Douglas Adams and Mark Carwardine</strong> <cite>Last Chance to See</cite></footer>
</blockquote>

I &mdash; like many geeks &mdash; have a similar tendency. I _love_ to automate things. Thoughts about automation seem to be everywhere recently. Randall Munroe created a [great XKCD comic][4] about how much time you can save through automation, depending on how much time you save for a given task and how often you do that task. Then Dr. Drang made the point that [it's not just about time saved][5]. For geeks, writing scripts to automate tasks is fun and relaxing (see also Douglas Adams' quote above), and it removes the annoyance of having to do repetitive work among other benefits. I would agree with all those points, but often my prime motivating factors are 1) the fun/relaxing aspect and 2) sheer laziness.

I recently had a lot of fun exercising my inner megapode by creating custom Message actions in [Drafts 3.0][6]. Drafts is an amazing iPhone app that acts as a kind of HQ for anything to do with text. You enter text and can then send that text to a variety of other apps (for example, Evernote, Dropbox, Things, Omnifocus, Riposte and so on). This in itself is very useful, because when you have to record some snippet of information quickly, you don't have to think straight away what you want to do with it: you can jot it down in Drafts and decide what to do with it later.

However, Drafts [can do much more sophisticated things][7]. You can make custom actions which act as templates with some pre-filled information for specific services. These also allow you to enter date or timestamps, and it works with [TextExpander][8]so that your shortcuts get expanded automatically when the custom action fires.

I wanted to automate my 'I'm just leaving' text message to Mr. Bsag. Since I don't always leave work at the same time, I usually send him a quick text message to say that I'm about to leave, giving him some idea when I'm going to be home. This was pretty repetitive, and what was worse, involved me having to do mental arithmetic to calculate my time of arrival at home based on the current time. This was all annoying work when I just wanted to leave and get home in time for a cup of tea and a biccy with Mr. B, so I automated it. First, I created a TextExpander snippet that &mdash; when expanded &mdash; calculates the current time plus _X_ minutes and prints it. I don't always travel by the same mode of transport, so I set up a number of these, where _X_ is the number of minutes it takes me to get home by bike, train and so on. I then made a few custom Messaging Actions which set up a template for the text message, with Mr. Bsag as the recipient. It prints 'About to leave', followed by the appropriate TextExpander snippet that prints the time I expect to be home. It then inserts the text I have entered in Drafts itself, followed by my usual signoff. Now when I am ready to leave, I just open Drafts, type a short message (usually concerning the possiblity of tea and biscuits in my immediate future), and select my custom action. Drafts fills in the rest of the stuff (including the estimated arrival time) and pastes it into a text message. All I have to do is hit send.

The first time I used this, I asked Mr. Bsag when I got back if he was surprised to get such a precise estimate of arrival time, as my laziness usually means I can't be bothered to calculate it precisely and just say '6-ish' or something similar. When I explained what I had done, I got _The Look_, but I think he was quietly impressed. Or horrified, it's hard to tell. Anyway, I'm glad to say that my actual arrival time was within 1 minute of my automated ETA, so I call that a success. If only it was possible for Drafts to detect my mode of transport automatically on a given day, then it could select the correct time snippet for me too. Hmm...

[1]:	http://lastchancetosee.com/ "Last Chance to See by Douglas Adams and Mark Carwardine"
[2]:	http://www.bbc.co.uk/lastchancetosee/sites/about/douglas_adams/
[3]:	https://en.wikipedia.org/wiki/Megapode "Wikipedia page on megapodes"
[4]:	http://xkcd.com/1205/ "Is it worth the time?"
[5]:	http://www.leancrew.com/all-this/2013/04/when-and-why-i-automate/ "When and why I automate"
[6]:	http://agiletortoise.com/drafts "Drafts for iOS"
[7]:	http://www.macstories.net/reviews/drafts-3-review-better-ios-automation-and-workflows/ "Great review of Drafts 3 on Macstories"
[8]:	http://smilesoftware.com/TextExpander/index.html "TextExpander"
