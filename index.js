<!DOCTYPE html>
<html>
  <head>
    <script src="jquery.js"></script>
    <script src="data_generator.js"></script>
    <link rel='stylesheet' href='index.css'>
    <title> Twittler </title>
  </head>
  <body>
  	<div id= 'heading'>

  	<h1> Welcome to Twittler! </h1>

  </div>
<div id= 'script'>
  	<script>
  		


      $(document).ready(function(){

        var $body = $('body');
        $body.html('');

        //https://css-tricks.com/use-button-element/
    	var button= document.createElement('button');
    	button.innerHTML = 'New Tweets'

    	var body = document.getElementsByTagName('body')[0];
    	body.appendChild(button);

    	button.addEventListener ('click', function() {
    		refreshTweets();
    	
    	});

//https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript


        function refreshTweets() {
        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          $tweet.text('@' + tweet.user + ': ' + tweet.message + '        '+ Date($.now()/1000));
          $tweet.appendTo($body);
          index -= 1;

		};
    	
        }
        //when you click on username it shows the user's timeline
        /*tweet.user.addEventListener('click', function (){
        	if(tweet.user !=== tweet.user) {
        		delete tweet.user;
        	} 
        })*/

      });


    </script>
</div>
  </body>
</html>
