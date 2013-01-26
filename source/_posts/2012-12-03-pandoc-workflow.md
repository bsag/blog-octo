---
layout: post
title: "Pandoc workflow"
date: 2012-12-03 18:48
comments: true
categories: [geek, software]
---

I've [written here before][1] about how much I enjoy using [Pandoc][2], but I thought I'd write a bit more about my new Pandoc-based workflow. For those of you unfamiliar with it, Pandoc is a brilliant tool for converting from a wide range of markup formats to pretty much any other format. It has matured really quickly into an extremely full-featured and capable system, and can handle tables, images, and mathematical formulae as well as in-text citations and a properly formatted reference list. In short, you can do almost anything you might want to do in an academic paper with Pandoc.

I had just about reached the end of my tether with Microsoft Word, and wondered if it would be possible to use Pandoc from start to finish in the production of academic papers. I had been using it for some time to produce other kinds of documents on which I was the only author, and from which I only needed to produce a PDF, rather than an editable document. It worked wonderfully well for that, but I had two potential problems to overcome if I was going to use it for papers:

1. I usually write papers with co-authors who are mixed in their &mdash; how shall we put it? &mdash; _geek-fu_. In most cases, I need a system that's so transparent as to be invisible to them. Ideally, they would continue to edit in Word or LaTeX (according to their usual preference), and I would covertly use Pandoc to make my edits and produce the final version for submission[^1].
1. I need to produce a variety of final output formats. Some journals will accept LaTeX (yay!), but others will take nothing but `.docx` or `.doc` (boo). In the latter case, I'd still like a way to generate a nice PDF (via XeLaTeX) so that I can make a 'pre-print' version that I can (according to the copyright rules of most journals) post on my personal website for others to download. I could do this with a PDF made from a Word file too, but really I couldn't stand to look at it.

The key to making this work is to stay in Markdown format until the last possible moment, and then convert to different formats as needed. My current workflow is that I write Markdown in a text editor, opening a [Marked][3] window beside my editor to quickly preview the text, see the word count and so on. I could generate a PDF using Pandoc, but that would take a bit longer, and for a quick-and-dirty preview, Marked is fine and updates automatically each time I save the source file. Every now and again, I generate a PDF using Pandoc, rendering all the elements properly, just to check that things are working as I expected. Once I've finished an editing round and am ready to distribute the document, I create Word (`.docx`) or LaTeX source versions as appropriate. Pandoc does a brilliant job of both, and if you set up various options properly (of which more later), you don't need to tinker with the output file.

Once your co-authors have done their bit, they send back the edited file. If it's LaTeX, you can covert back to Markdown using Pandoc, diff the file with the previous version and go through the cycle again without too many problems. If your co-authors use Word, you have a bit of manual work to do copying across any changes they have made using Track Changes into your Markdown source file. I would love it if Pandoc could convert from `.docx` to Markdown, but that seems to be a one-way street[^2]. However, that's pretty much the only minor annoyance in the whole process, and a small price to pay for being able to work in Pandoc the rest of the time.

Once the whole grisly writing and editing process is finished, you then convert to whatever format is needed by the journal. If they accept LaTeX, they may well have a specific style file and reference format. You can either pass the required style file as an option to Pandoc, or you can export to `.tex` and then tweak the file as needed for submission. If you have used Pandoc's built-in automatic citations (which use citeproc-hs), you'll need to convert the in-text citations to the native BibTeX format. Since they are marked up fairly simply, it's not difficult to write a quick regex to do that, and then do the final conversion natively in LaTeX/BibTeX. The key thing is that these are things you only need to do once (or twice, when you have to make revisions after the referees have torn your masterpiece apart), just before submission. It's also quite scriptable, so it should be possible to automate it.

I've also set up one more thing to make the conversion process easier. Pandoc is immensely powerful and well documented, but the range of possible options means that I often forget which ones I need to get the format I want. If you set a lot of variables (like your preferred font, margins and so on) at the command line, it can also get a bit long-winded. So I decided to write a wrapper script which simplifies the process and sets some of the defaults I use most often, while retaining some flexibility to change things on the fly. The script below is tailored to my own use, but feel free to use it and mould it to your own preferences. It requires [commander][4] so you'll need to `gem install commander` before you use it. It's also very rough with absolutely no error checking, so you'll certainly need to edit it to fit your setup, specifying where your BibTeX bibliography, default `.css` file and so on are located. I'm going to continue to work on it a bit more, but it's usable for me now as it is. Happy Pandoc-ing!

{% gist 4197052 %}

[^1]: Thus this system can only really work effectively when I'm the lead author. That's a reasonable compromise, since making small edits is bearable in Word. Just.

[^2]: I'm frankly amazed that John MacFarlane managed to get the conversion from Markdown to Word to work so well: expecting the reverse to work would be asking for the moon.  


[1]: http://rousette.org.uk/blog/archives/the-agony-of-word/
[2]: http://johnmacfarlane.net/pandoc/
[3]: http://markedapp.com
[4]: https://github.com/visionmedia/commander
