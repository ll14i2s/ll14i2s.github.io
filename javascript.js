var start = Date.now();
var pause = 0;
var delta, minutes = 0, seconds = 0;
var time = 0;
var printm,prints;
var interv;
var audio = new Audio('alarm.mp3');

function timedif(){
    delta = Date.now() - start; // milliseconds elapsed since start
    time = (minutes*60 + seconds - delta/1000).toFixed(1);
    if (time <= 0){
        audio.play();
        document.getElementById("demo").innerHTML = '00:00.0';
        document.getElementById("pauseresume").style.backgroundColor ="gray";
        document.getElementById("pauseresume").onclick = null;
        clearInterval(interv);
        return;
    }
    printm = Math.floor(time/60).toFixed(0);
    prints = (time%60).toFixed(1);
    if (printm < 10){
        printm = "0" + printm;
    }
    if (prints < 10){
        prints =  "0" + prints;
    }
    document.getElementById("demo").innerHTML = printm + ':' + prints;
    console.log(printm + ':' + prints);
    return minutes/60 + ':'+minutes%60
}

function startTimer(){
    document.getElementById("pauseresume").onclick = resume;
    document.getElementById("pauseresume").style.backgroundColor = "#00474b";
    if (interv){clearInterval(interv);}
    start = Date.now();
    interv = setInterval(timedif,100);
    pause = 0;
    document.getElementById("startbtn").onclick = null;
    document.getElementById("startbtn").style.backgroundColor ="gray";
}

function stopTimer(){
    document.getElementById("pauseresume").onclick = null;
    document.getElementById("pauseresume").style.backgroundColor = "gray";
    clearInterval(interv);
    interv = null;
    minutes = 0;
    seconds = 0;
    document.getElementById("demo").innerHTML = '00:00.0';
}

function resume(){
    if (pause == 0){pause = Date.now();}
    if (interv){
        clearInterval(interv);
        interv = null;
        document.getElementById("pauseresume").innerHTML = 'Resume';
        return;
    }
    start = Date.now() - pause + start;
    interv = setInterval(timedif,100);
    document.getElementById("pauseresume").innerHTML = 'Pause';
    pause = 0;
}

function setTimer(){
    clearInterval(interv);
    document.getElementById("pauseresume").innerHTML = 'Pause';
    document.getElementById("pauseresume").style.backgroundColor ="gray";
    document.getElementById("pauseresume").onclick = null;
    minutes = +document.getElementById("minutes").value;
    seconds = +document.getElementById("seconds").value;
    if (minutes > 59){
        minutes = 59;
        seconds = 59.0;
    }
    if (seconds > 59)
        seconds = 59;
    
    printm = minutes;
    prints = (seconds).toFixed(1);
    if (printm < 10){
        printm = "0" + printm;
    }
    if (prints < 10){
        prints =  "0" + prints;
    }
    document.getElementById("demo").innerHTML = printm + ':' + prints;
    document.getElementById("startbtn").onclick = startTimer;
    document.getElementById("startbtn").style.backgroundColor ="#00474b";
    popup()
}

function popup(){
    let el = document.getElementById("pop");
    if ( el.style.display == 'none' ) { 
        el.style.display = 'block';
    }
    else {
        el.style.display = 'none';
        
    }
}

$(document).ready(function(){ 
    $(".button2").click(function(){
        $(".popup-background").fadeOut("slow");
      },
    function() { 
        $(".popup-background").fadeOut("slow"); 
    }); 
    $(".stbtn").click(function(){
        $(".popup-background").fadeIn("slow");
      },
    function() { 
        $(".popup-background").fadeIn("slow"); 
    }); 
});