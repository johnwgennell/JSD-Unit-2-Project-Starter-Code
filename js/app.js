$(document).ready(function(){

  $( "#popUp" ).removeClass('hidden');
  $( "#popUp" ).click(function() {
    $( "#popUp" ).addClass('hidden');
  });

    var request = $.ajax({
        url:"https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json",
        data: status
    });

    request.done(function(feed){
        console.log(feed);
        var rssDigg = status;
        console.log(status);
    });

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
