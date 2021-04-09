let  tweets = ["Just did my own taxes, I should be in jail by friday","Pollen still coming out during a global pandemic??? Bitch read the room","This dog hit the “woah” better than some of you","Time to go take a stupid little fucking afternoon stroll","one time i was my college’s mascot for a basketball game. emphasis on one time"];
let tweets2 = ["Work : Your time off request has been denied Me","I just went outside and lemme just say, THAT SUN HIT DIFFERENT WHEN ITS ILLEGAL","I AM HOWLING"];
let tweets3 = ["guys be havin 25 roommates and want u to come over im staying home brockhampton","I told my man I wanted to go to a restaurant where they cook infront of you so he brought me to subway","our kids: what happened in 2020 us:"];

let  nouns = ["The Boy","The Girl","The Doctor","The Dog","My Dad"];
let verbs = ["was driving","was eating","was playing"];
let adjective = ["a red car","a pink elephant","a tall chicken","a small robot"];





let nested = [tweets,tweets2,tweets3];
let nested2 =[nouns,verbs,adjective];
function random(tweet){
   return Math.floor(Math.random()* tweet.length);
}



function generatetweet(nested){
    let messagearray=[];
    
    nested.forEach(item => {
        messagearray.push(item[random(item)]);
    });

    let message = messagearray.join(" ");
    return message;

    
}



console.log(generatetweet(nested2));