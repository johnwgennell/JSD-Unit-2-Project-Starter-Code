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
    $('body').on('click', '#search', function(){
// Show loader while app is loading and hide it when user selects the "X" button
      $("#popUp").removeClass('hidden');
      $("#popUp").click(function() {
        $("#popUp").addClass('hidden');
      });
      var chosenFeed = $('#newsSource li.picked a').attr('data-grab');
    	var request = $.ajax({
    		url: chosenFeed,
    		success: findRss
    	});
    });

// Conditional to select correct feed based off of user input
    var findRss = function(data) {
    	 	var rssSearch = $('#sourceName').text();
    	 	if (rssSearch === 'Digg') {
    			populateDigg(data);

    		} else if (rssSearch === 'Mashable') {
    			populateMashable(data);

    		} else {
    			populateReddit(data);
    		}
        $("#popUp").addClass('hidden'); // Sonyl, is this where I should put this?
  	}

// Digg RSS feed
    var populateDigg = function(data) {
    		var imageUrl = data.data.feed[0].content.media.images[0].url;
    	$('#main').html('');
    	for (var i = 0; i < 4; i ++ ) {
    		var feed = data.data.feed[i];
    		var postInfo = {
    			postImage: feed.content.media.images[0].original_url,
    			numberOfImpressions: feed.fb_shares.count,
    			postDescription: feed.content.description,
    			postTitle: feed.content.title_alt,
    			postURL: feed.content.original_url
    			};

    		var articleHtml = compileHtml(postInfo);
    		$('#main').append(articleHtml);

    	 }
     }

//
//
//
//
//

//       // request.done(function(feed){
//       //     console.log(feed);
//       //     var rssDigg = status;
//       //     alert(status);
//       //     for(var i=0;i<feed.length;i++){
//     	//  			console.log(feed[i]);
//     	//  			var feedObjects = {
//       //
//       //       }
//       //     });
//       //   });
//
// // Mashable RSS feed
//     var mashableFeed = {};
//
//     var request = $.ajax({
//         url:"https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json",
//     });
//
//     request.done(function(feed) {
//       console.log(feed);
//   });
//
// // Reddit RSS feed
//     var redditFeed = {};
//
//     var request = $.ajax({
//         url:"https://www.reddit.com/top.json",
//     });
//
//     request.done(function(feed){
//         console.log(feed);
//     });

});
