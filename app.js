
var sec = 00;
var millisec = 00;
var seconds = document.querySelector(".sec")
var mSec = document.querySelector(".tens")
var startBtn = document.querySelector(".btns button:nth-child(1)");
var stopBtn = document.querySelector(".btns button:nth-child(2)");
var restartBtn = document.querySelector(".btns button:nth-child(3)");
var animation = document.querySelector(".elements");
var interval;

// console.log(startBtn);

function startTimer(){
    millisec++;

    console.log(interval);

    if(millisec < 9){
        mSec.innerHTML = "0" + millisec;
    }
    if(millisec > 9){
        mSec.innerHTML = millisec;
    }
    if(millisec > 99){
        sec++;
        seconds.innerHTML = "0" + sec;
        millisec = 0;
        mSec.innerHTML = "0" + 0;
    }
    if(sec > 9){
        seconds.innerHTML = sec;
    }
}

startBtn.addEventListener("click", function(){
    interval = setInterval(startTimer);
    animation.style.display = "flex";
});
stopBtn.addEventListener("click", function(){
    clearInterval(interval);
    animation.style.display = "none";
});
restartBtn.addEventListener("click", function(){
    clearInterval(interval);
    animation.style.display = "none";
    sec = "00";
    millisec = "00";
    seconds.innerHTML = sec;
    mSec.innerHTML = millisec;
});

