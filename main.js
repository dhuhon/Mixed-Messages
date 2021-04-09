let  tweets = ["Just did my own taxes, I should be in jail by friday","Pollen still coming out during a global pandemic??? Bitch read the room","This dog hit the “woah” better than some of you","Time to go take a stupid little fucking afternoon stroll","one time i was my college’s mascot for a basketball game. emphasis on one time"];


function random(){
   return Math.floor(Math.random()* tweets.length);
}


function generatetweet(tweets){
    return tweets[random()];
}



console.log(generatetweet(tweets));