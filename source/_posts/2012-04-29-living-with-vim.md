---
layout: post
title: "Living with Vim"
date: 2012-04-29 10:39
comments: true
categories: [geek, software]
---

I've written here before about how I [initially got into][1] using the Vim text editor, and how I keep [cycling back to it][2] on a tour of OS X text editors. More recently I've noticed that I've been less tempted to try out the latest shiny new text editor, and I've been sticking with Vim for everything. I used to find prose writing a little hard-going with Vim, so I would open Textmate or BBEdit for that kind of editing, but I seem to have hit upon (with a lot of help from the Internets) a set of customisations and settings that allow me to work very comfortably with any kind of text in Vim.

One big change has been that I've moved away from using MacVim to just plain old Vim in the terminal. I think I was using the familiarity of the Apple application environment and the keystrokes that have become burned into my muscle memory (e.g. those for copy and save) to help ease the transition, but actually Vim in the terminal just feels a bit more natural. I think it helps that I've moved to running Vim (and various other commandline utilities) in [tmux][3] inside [iTerm2][4]. This solves one of the problems I had before which was that I found it a bit tedious to have to reopen all the files I was working on before when I resumed work on a particular project. That's easy with tmux: you just open all the windows you want, put Vim in one, work away, and then when you want to switch to another project you detach the session. When you resume working on that project, you reattach to the session, and everything is exactly as you left it. I think I had avoided tmux (and the very similar utility, screen) because I assumed it was only of use if you were logging in to a remote server, but it's definitely worth using for saved sessions alone. The other handy thing is having separate panes within one window (or other windows) running other commands, such as having one running `latexmk` to compile a `*.tex` file, and displaying the errors as you work. If you've given up on tmux before, I can highly recommend reading the [tmux][5] book by Brian P. Hogan. It's a great guide to getting tmux set up easily.

The other change I made which helped a lot was to try out Yan Pritzker's [dotfiles setup][6], aka 'YADR'. I've tried a few different systems for managing Vim plugins and configuration files for other commandline utilities before, but this was the first that seemed to make good sense and allow easy maintenance across a number of different machines. It comes with an enormous number of plugins, and is also optimised for using MacVim rather than terminal Vim, so I have heavily customised it to my own use, removing a lot of the plugins that I don't use and cutting down on the key mappings. Previously, one of the things that occasionally sent me scurrying back into the familiar arms of Textmate or BBEdit was the awkwardness of browsing a directory tree to look for files, or opening files where I know the name. I've finally configured (and learned to use) the plugins NERDTree for the former and CommandT for the latter, and this has made my life much easier.

I finally feel as if I'm becoming more proficient, and therefore more _comfortable_, with Vim. Some of the commands are becoming second-nature, and I'm branching out into more complex techniques and finding that it's saving me time and effort. However, one of the joys of Vim is that there's always something you can learn. I recently bought a copy of [Practical Vim][7] by Drew Neil, and have been amazed by the number of things that I didn't know about Vim. The book is really excellent, because rather than just providing a set of 'recipes', it suggests a set of principles for working with Vim that increase your efficiency and accuracy with the editor. There is always more than one way to accomplish anything, but Drew suggests trying to use one keystroke to move, one to edit, one to repeat the edit and one to undo. When that idea sinks in, it becomes really powerful.  

I like nothing better than tweaking my dotfiles and learning about complex systems, so on a cold, windy rainy day like today, I'm about to settle back in my chair in front of the computer, and continue reading 'Practical Vim' with a happy sigh: geek bliss.


[1]: http://www.rousette.org.uk/blog/archives/dr-strangevim-or-how-i-learned-to-stop-worrying-and-love-vi/
[2]: http://rousette.org.uk/blog/archives/vim-and-zsh-oh-my/
[3]: http://sourceforge.net/projects/tmux/
[4]: http://www.iterm2.com/
[5]: http://pragprog.com/book/bhtmux/tmux
[6]: https://github.com/skwp/dotfiles
[7]: http://pragprog.com/book/dnvim/practical-vim
