$(document).ready(function(){

  $( "#popUp" ).removeClass('hidden');
  $( "#popUp" ).click(function() {
    $( "#popUp" ).addClass('hidden');
  });

    var request = $.ajax({
        url:"https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json",
        success: {status, feed}
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


//
//
//
//
//
//
//
//

    var request = $.ajax({
        url:"https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json",
    });

  request.done(function(data){
  			console.log(data)
  });

  request.done(function(feed) {
      console.log(feed);
  });

  var request = $.ajax({
      url:"https://www.reddit.com/top.json",
  });

  request.done(function(feed){
      console.log(feed);
  });



});
