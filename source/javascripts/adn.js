
// App.net post fetcher, modified from Brandon Mathis' Twitter script for Octopress
// Uses jFeed: https://github.com/jfhovinne/jFeed
//

/* Sky Slavin, Ludopoli. MIT license.  * based on JavaScript Pretty Date * Copyright (c) 2008 John Resig (jquery.com) * Licensed under the MIT license.  */
function prettyDate(time) {
  if (navigator.appName === 'Microsoft Internet Explorer') {
    return "<span>&infin;</span>"; // because IE date parsing isn't fun.
  }
  var say = {
    just_now:    " now",
    minute_ago:  "1m",
    minutes_ago: "m",
    hour_ago:    "1h",
    hours_ago:   "h",
    yesterday:   "1d",
    days_ago:    "d",
    last_week:   "1w",
    weeks_ago:   "w"
  };

  var current_date = new Date(),
      current_date_time = current_date.getTime(),
      current_date_full = current_date_time + (1 * 60000),
      date = new Date(time),
      diff = ((current_date_full - date.getTime()) / 1000),
      day_diff = Math.floor(diff / 86400);

  if (isNaN(day_diff) || day_diff < 0) { return "<span>&infin;</span>"; }

  return day_diff === 0 && (
    diff < 60 && say.just_now ||
    diff < 120 && say.minute_ago ||
    diff < 3600 && Math.floor(diff / 60) + say.minutes_ago ||
    diff < 7200 && say.hour_ago ||
    diff < 86400 && Math.floor(diff / 3600) + say.hours_ago) ||
    day_diff === 1 && say.yesterday ||
    day_diff < 7 && day_diff + say.days_ago ||
    day_diff === 7 && say.last_week ||
    day_diff > 7 && Math.ceil(day_diff / 7) + say.weeks_ago;
}

var getADNFeed = function (cachedFeed, count) {

  jQuery.getFeed({
      url: cachedFeed,
      error: function (err) { $('#adn li.loading').addClass('error').text("Something is broken"); },
      success: function(feed) { 
        var timeline = document.getElementById('adn'), content = '';

        for(var i = 0; i < feed.items.length && i < count; i++) {
        
            var item = feed.items[i];
            var pubDate = new Date(item.updated);
            
            content += '<li>'
            + '<p>'
            + '<a href="'
            + item.link
            + '">'
            + prettyDate(pubDate)
            + '</a>'
            + item.description
            + '</p>'
            + '</li>';
       }
        
        timeline.innerHTML = content;
      }    
  });
}
