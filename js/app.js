/* The Feedr app pulls in JSON and displays articles */

'use strict';

// Compile Handlebars template
var compileHtml = function (articleHtml) {
  var feedrTemplate = $('#feedr_template').html();
  var articleScript = Handlebars.compile(feedrTemplate);
  return articleScript(articleHtml);
}

// Show the options from the body list in the dropdown search
$('body').on('click', '#newsSource li', function(){
	var dropdownText = $(this).text();
	$('#sourceName').text(dropdownText);
	$(this).siblings().removeClass('picked');
	$(this).addClass('picked');
});

$(document).ready(function(){
// Initializing request for RSS feed on click of the id #search
    $('body').on('click', '#newsSource', function(){
// Show loader while app is loading and hide it if user selects the "X" button
      $("#popUp").removeClass('hidden');
      $("#popUp").click(function() {
        $("#popUp").addClass('hidden');
      });
      var chosenFeed = $('#newsSource li.picked a').attr('data-grab');
    	var request = $.ajax({
    		url: chosenFeed,
    		success: getRss
    	});
    });

// Conditional to request correct feed based off of user input
    var getRss = function(data) {
    	 	var rssSearch = $('#sourceName').text();
    	 	if (rssSearch === 'Digg') {
    			diggRss(data);

    		} else if (rssSearch === 'Mashable') {
    			mashableRss(data);

    		} else {
    			redditRss(data);
    		}
        $("#popUp").addClass('hidden');
  	}

// Digg RSS feed
    var diggRss = function(data) {
  		var imageUrl = data.data.feed[0].content.media.images[0].url;
    	for (var i = 0; i < 4; i ++ ) {
    		var feed = data.data.feed[i];
    		var postInfo = {
          postTitle: feed.content.title_alt,
          postImage: feed.content.media.images[0].original_url,
          postDescription: feed.content.description,
          postURL: feed.content.original_url,
          numberOfImpressions: feed.fb_shares.count
    		};

    		var articleHtml = compileHtml(postInfo);
        console.log('html',articleHtml);
        $('#main').empty();
    		$('#main').append(articleHtml);

    	 }
     }

// Reddit RSS feed
     var redditRss = function(data) {
     	$('#main').html('');
     	var feedArray = data.data.children;
     	for (var i = 0; i < feedArray.length; i ++ ) {
     		var feed = data.data.children[i];
     		var postInfo = {
          postTitle: feed.data.title,
          postImage: feed.data.thumbnail,
          postDescription: '',
          postURL: 'https://www.reddit.com/' + feed.data.permalink,
     			numberOfImpressions: feed.data.ups
     		};

        var articleHtml = compileHtml(postInfo);
        console.log('html',articleHtml);
        $('#main').empty();
    		$('#main').append(articleHtml);
     		}
     	}

// Mashable RSS feed
      var mashableRss = function(data) {
      	$('#main').html('');
      	var feedArray = data.new;
      	for (var i = 0; i < feedArray.length; i ++ ) {
      		var feed = data.new[i];
      		var postInfo = {
            postTitle: feed.title,
            postImage: feed.image,
            postDescription: feed.excerpt,
            postURL: feed.link,
      			numberOfImpressions: feed.shares.total
      		};

          var articleHtml = compileHtml(postInfo);
          console.log('html',articleHtml);
          $('#main').empty();
      		$('#main').append(articleHtml);
       		}
       	}

        $.ajax({
          url: 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json',
          // Default feed
          success: mashableRss
        });


//
});
