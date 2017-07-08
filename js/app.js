/* The Feedr app pulls in JSON and displays articles */

'use strict';

$(document).ready(function(){

// Show loader while app is loading and hide it when user selects the "X" button
  $( "#popUp" ).removeClass('hidden');
  $( "#popUp" ).click(function() {
    $( "#popUp" ).addClass('hidden');
  });

// Show the options from the body list in the dropdown search
  $('body').on('click', '#NewsSources li', function(){
	var dropdownText = $(this).text();
	$('#sourceName').text(dropdownText);
	$(this).siblings().removeClass('selected');
	$(this).addClass('selected');

// Digg RSS feed
    var diggFeed = {};

    var request = $.ajax({
        url:"https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json",
        data: {status, feed}
    });
    
      request.done(function(feed){
          console.log(feed);
          var rssDigg = status;
          alert(status);
          for(var i=0;i<feed.length;i++){
    	 			console.log(feed[i]);
    	 			var feedObjects = {

            }
          });
        });

//
//
//
//
//
//
//
//

// Mashable RSS feed
    var mashableFeed = {};

    var request = $.ajax({
        url:"https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json",
    });

    request.done(function(feed) {
      console.log(feed);
  });

// Reddit RSS feed
    var redditFeed = {};

    var request = $.ajax({
        url:"https://www.reddit.com/top.json",
    });

    request.done(function(feed){
        console.log(feed);
    });



});
