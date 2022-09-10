
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef =document.querySelector('.timerDisplay');
let int = null;

//starts the countdown when the button with id:'startTimer' is clicked.
document.getElementById('startTimer').addEventListener('click',()=>{
    if(int!==null){
        clearInterval(int);

    }
   int=setInterval(displayTimer,10);
})

//pause the countdown wwhen the pause button is clicked
document.getElementById('pauseTimer').addEventListener('click',()=>{
    clearInterval(int);
})

//the code reset the countdown when the reset button is clicked 
document.getElementById('resetTimer').addEventListener('click',()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML='00:00:00:000';
});

//the logic 
function displayTimer(){
    milliseconds+=10;
     if(milliseconds==1000){
        milliseconds=0;
        seconds++;

        if(seconds==60){
            seconds=0;
            minutes++;

            if(minutes==60){
                minutes=0;
                hours++;
            }
        }
     }


//the code in line 46-49 add a 0 in front of hour,minute and seconds 
// when the value is  lesser than 10,
 //whille a 00 to minute when lesser than ten
 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;


 //displays the value on screen 
 timerRef.innerHTML = ` ${h} : ${m} : ${s} :${ms}`;

}

