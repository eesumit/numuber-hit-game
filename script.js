let hit;
let i = 1;
let j = 55;
let timer=60;
let score=0;
function start(){
    document.querySelector(".bottom").innerHTML = `<button class="button2">Start</button>`;
    document.querySelector(".button2").addEventListener("click",function(){
        fillRandomValue();
        runTimer();
        incScore();
    })
}
function restart(){
    document.querySelector(".button").addEventListener("click",function(){
        document.querySelector(".totalScore").innerHTML = "Score :";
        document.querySelector(".score").innerHTML = "0";
        timer=60;
        fillRandomValue();
        runTimer();
        incScore();
    })
}
function fillRandomValue(){
    var clutter ="";
    for(let i=1;i<200;i++){
        let x=Math.floor(Math.random()*10);
        clutter += `<div class="circle">${x}</div>`;
    }
    document.querySelector(".bottom").innerHTML = clutter;
    hit=Math.floor(Math.random()*10);
    document.querySelector(".hit").innerHTML = hit;
}
function runTimer(){
    let time = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timer").innerHTML = `${timer}s`;
        }
        else{
            clearInterval(time);
            document.querySelector(".totalScore").innerHTML = "Total Score :";
            document.querySelector(".hit").innerHTML="Thanks.";
            var a = document.querySelector(".bottom");
            a.innerHTML = `<div class="end">
            <h1 class="gameOver">Game Over</h1>
            <button class="button">Restart</button>
         </div>`;
         restart();
        }
    },1000)
}
function incScore(){
    document.querySelector(".bottom").addEventListener("click",function(dets){
        var clickNumber=Number(dets.target.textContent);
        if(clickNumber===hit){
            score+=10;
            document.querySelector(".score").innerHTML=score;
            fillRandomValue();
        }
    })
}
function revertBackground(){
    let img = `${i}.jpg`;
    i++;
    if(i>54) i=1;
    document.querySelector("body").style.backgroundImage = `url(${img})`;
}
document.querySelector(".btn").addEventListener("click",function(){
    revertBackground();
})
function solidBackground(){
    let img = `${j}.jpg`;
    j++;
    if(j>63) j=55;
    document.querySelector("body").style.backgroundImage = `url(${img})`;
}
document.querySelector(".btn2").addEventListener("click",function(){
    solidBackground();
})
start();
// fillRandomValue();
// runTimer();
// incScore();
