---
layout: post
title: "Moving Comments From ExpressionEngine to Disqus"
date: 2012-01-04 18:38
comments: true
categories: [geek]
---

This may be of some use to anyone else who is thinking of moving comments from [ExpressionEngine][1] to [Disqus][2] (or to me, if I ever have to do it again!). Over the past few days, I have been moving comments from the Tracks site (which used ExpressionEngine) to Disqus. I had some difficulty trying to get a format exported from ExpressionEngine which I could use to import comments into Disqus, and eventually settled on the code above after looking at Disqus' own [import format][3] and trawling the ExpressionEngine forums to adapt other solutions which exported to Movable Type format.

You need to start off by creating a new template group called 'export'. Inside that, you make a template called 'index' and paste in the following, making sure that you replace the channel name and template group name to those appropriate for your setup. This needs to be the index for the template group. 

<script src="https://gist.github.com/1559490.js?file=index.xml"></script>

Next, create another template called 'comments' and paste the text below, again, replacing the channel name as appropriate.

<script src="https://gist.github.com/1559490.js?file=comments.xml"></script>

Now visit `http://yoururl.com/export` and you should see the exported entries. Wait for the whole page to load, which may take some time with a lot of entries. Then use your browser's 'View source' command to view the source of the page, copy all the text and paste into a text file with the extension '.xml'. Now you should be able to upload to Disqus using their 'Generic (WXR)' importer.

You may find that you encounter errors and have to try uploading several times. For example, you need to make sure that the xml declaration is the very first line of the file (the template will insert some whitespace).

[1]: http://expressionengine.com/
[2]: http://disqus.com/
[3]: http://docs.disqus.com/developers/export/import_format/