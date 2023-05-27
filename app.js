const secondsHand =document.getElementById("seconds-hand");
const minutesHand =document.getElementById("minutes-hand");
const hoursHand =document.getElementById("hours-hand");
const numeric =document.getElementById("numeric");

function getTime(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes= now.getMinutes();
    const hours = now.getHours();

    //360° /60 sec -> 6 time Interval
    const timeInterval=6;
    //360° /12h -> 30 hour Interval
    const hourInterval=30;

    numeric.innerHTML= checkNumberDigits(hours) + " : " + checkNumberDigits(minutes) + " : "+ checkNumberDigits(seconds);
    secondsHand.style.transform='rotate('+seconds*timeInterval+'deg)';
    minutesHand.style.transform='rotate('+minutes*timeInterval+'deg)' 
    hoursHand.style.transform='rotate('+hours*hourInterval+'deg)' 
 
    
}
function checkNumberDigits(myNumber)
{
    return (myNumber < 10 ? "0" : "") + myNumber;
}
setInterval(getTime,100);



// https://www.youtube.com/watch?v=hbe2hn4W3z0&list=PLiD8ZvGB-Oe2_eEqEcchVY-N8p047C6i4&index=3&t=53s