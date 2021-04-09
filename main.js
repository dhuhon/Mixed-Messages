
let  nouns = ["The Boy","The Girl","The Doctor","The Dog","My Dad"];
let verbs = ["was driving","was eating","was playing"];
let adjective = ["a red car","a pink elephant","a tall chicken","a small robot"];



let nested =[nouns,verbs,adjective];
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



console.log(generatetweet(nested));