---
layout: post
title: "Slate and Alfred 2 workflows"
date: 2013-02-16 18:06
comments: true
categories: [geek]
---

<img src="http://d.pr/i/Am0H+" />

I've been having a bit of fun recently playing around with a couple of computer workflow improvements. As regular readers will know, there is little that I enjoy more than tinkering with my setup, and since I enjoy reading about other people's set ups, I thought I would write a bit about what I've done.

## Slate

The first object of my tinkering was [Slate][1]. For some time, I've used an application called [Moom][2] for resizing and moving around windows on my computer. It's an excellent and easy to use utility, and I would highly recommend it if you're not the kind of loon who enjoys writing config files. However, I _am_ the kind of loon who enjoys writing config files, and I also like having a lot of control (particularly keyboard control) over my computer. Slate is similar to Moom (and other window resizing applications) in that it allows you to move, position and resize windows. Where it goes beyond those utilities is that it allows you very precise and fine-grained control, and is easy to configure for use from the keyboard. You can do advanced things like activating a certain layout of your applications' windows on particular screens. So you can have one layout for the small screen of your laptop, and another for when you have your laptop connected to a large external monitor. These layouts can be triggered by a keybinding or can be activated automatically as the default for that particular combination of screens.

It also has a nice 'hinting' feature whereby activating a keyboard combination shows overlays on your screen labelled with letters showing each of your windows. You then type that letter to focus that window. If you want to bind a particular key to focus a particular application's window, you can do that too, or you can set up a keybinding to 'throw' a window on to another screen, which is handy in a multi-monitor setup.

It's a common complaint of new users of Mac OS who have moved from Windows that the so-called 'zoom' window button (the green one) doesn't do what you expect it to do: maximise the window to the full size of the screen. It's true that it doesn't, and it's annoying. As I have my laptop connected to an external screen at work, I often found when I disconnected the screen that my windows would be at all kinds of odd sizes, and the same in reverse when I connected the screen. Now I have Slate set up to resize and arrange all my windows automatically the way I want them when it detects particular screen sizes. If I want to change window sizes on the fly, I also have keybindings to set a window to full screen, or to make it fit half the screen (left or right). I also have special settings for particular configurations, such as the one I'm using right now with my text editor (Sublime Text 2) half size on the left, and Marked on the right previewing what I'm writing. I can toggle focus between the left and right by hitting my [Hyper key][4][^1] and ; (for left) and ' (for right). Even better, I can press Hyper+4 to bring both windows (Sublime Text 2 and Marked) in front of the others at the same time. I've got a similar thing set up for Sublime Text 2 and Preview (using Hyper+5), as I often write LaTeX this way, or make notes in Markdown while reading a PDF.

I did have to make a small adjustment, because I used to use Spaces on the Mac to impose some order on my windows. Some features of Slate (like hinting) only work for the windows in the current Space. Since being able to control and focus windows much more easily solves the problem that I used Spaces to overcome, I've stopped using Spaces. I now just use one main Space, but have Terminal (and sometimes Preview) full screen in additional Spaces. I thought that this might be hard to get used to because I've been a heavy user of Spaces (and before that Virtual Desktops on both Mac and Linux), but actually I've adjusted to it easily.

If you're interested in Slate and would like to see how I configured my system, I've put my `.slate` config file [up as a Gist][3]

## Alfred 2

I've been a devoted user of [Alfred][5] for quite a while, so I was excited to see the [announcement about the beta version of Alfred 2][6]. There are some fabulous new features in Alfred 2, and the workflow system in particular is really powerful. It allows you to chain together hotkeys, scripts, searches and so on that enable you to do some very complex things. Once you've got your head around the way they work &mdash; it helps if you look at some of the examples provided &mdash; you're up and running.

I've been trying to sort out a system for managing and accessing documents that I'm currently working on. I like to have a fairly traditional file hierarchy to store my files, but the collection of files that I'm currently working on can be scattered across this hierarchy. For example, I might be working on the draft of a paper deep within my 'Publications' folder, commenting on a student's draft essay in my 'Personal Tutorials' folder and writing notes for a meeting somewhere in the deep, dark rat's nest of my 'Admin' folder[^2]. I tried using [EagleFiler][8] for a while, which is a great application for allowing you to organise files, but I didn't get on with it as you really need to store all the files you manage in one location.

Tagging files with [OpenMeta tags][9] would be the obvious way to get around this and identify a collection of files as 'live' documents. However, I hadn't found a way to manage, apply and search for tags that fitted with the way that I work. Once I had got to grips with Alfred 2's workflows, I decided that it would be an ideal way to do this using the keyboard. You can see my workflow in the image at the top of this post.

The main idea is that I tag my current files with the OpenMeta tag 'live'. I can then search for files tagged 'live' using Alfred and either preview them (using QuickLook) or open them, all using Alfred. That's the top part of the workflow. I can either activate Alfred and type the keyword 'ftw' (think 'find tagged with' or 'For The Win', if you prefer) followed by the tag to search for. Alfred then shows me the results in a list. I can select one from the list and hit `Space` to preview it or `Enter` to open it. Furthermore, if I hit `Cmd+Enter`, it reveals the file (or folder) in the Finder. Finally, if I hit `Alt+Enter`, the tags are stripped, giving me a quick way to mark a file as no longer current and clean up the list. The Hotkey item attached to that workflow allows me to hit `Hyper+H` to instantly search for files tagged 'live', which is likely to be my most frequent use of it.

This all worked beautifully, but then I got a bit stuck on how to set up the workflow to enable me to select files and then apply tags that I entered in Alfred's search window. The difficulty is that Alfred provides _either_ the paths of selected files, _or_ the text entered in the search box as the variable `{query}` that you can use in scripts, but it doesn't currently allow you to use both at the same time. At this point I came across [bevesce's Tags workflow][7], which got around this in a clever way: you use a File Action which simultaneously copies the paths of files you've selected to the clipboard, and then runs and Applescript to trigger Alfred providing the keyword 'tag' followed by a space. This activates the part of the workflow activated by the 'tag' keyword, which takes the tags you enter as the `{query}` variable and passes them to a Python script which uses that combined with the paths grabbed from the clipboard to tag the selected files. It sounds a little hacky, but it actually works very well.

So now I've got my perfect workflow. I can either find files in Alfred through search or navigation, then activate the 'Select files to tag' file action. That opens the Alfred search with 'tag' keyword entered, and I type my list of space separated tags and hit `Enter`. Alternatively, I can select the files in Path Finder and hit my Alfred 'File Selection' hotkey (`Cmd+Alt+\` for me) and then activate the 'Select files to tag' action as before. I can quickly search for 'live' files with a hotkey, and easily strip tags once I'm finished with a particular file.

It's a fairly simple system, but I'm finding that it speeds things up in my workflow a great deal, because I'm not constantly trying to remember where I've filed something that I'm working on at the moment. And I can also easily get an overview of my current work by browsing for the 'live' tag.

[^1]: I've mapped the combination Cmd+Alt+Ctrl+Shift to the right-hand Command key on the keyboard.

[^2]: Where no-one can hear you scream...


[1]: https://github.com/jigish/slate
[2]: http://manytricks.com/moom/
[3]: https://gist.github.com/bsag/4750745
[4]: http://stevelosh.com/blog/2012/10/a-modern-space-cadet/
[5]: http://alfredapp.com/
[6]: http://blog.alfredapp.com/2013/01/12/first-alfred-v2-beta-now-available-for-mega-supporters/
[7]: https://github.com/bevesce/Tags
[8]: http://c-command.com/eaglefiler/
[9]: https://code.google.com/p/openmeta/