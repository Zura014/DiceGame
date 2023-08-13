let x;
let y;
let results = document.getElementById("results");

let score1 = {
    count:0,
    wins:0,
    losses:0,
    ties:0
};

let {count, wins, losses, ties} = score1;

let score2 = {
    count2:0,
    wins2:0,
    losses2:0,
    ties2:0
};

let {count2, wins2, losses2, ties2} = score2;

let btn1 = document.getElementById("dice1");
let btn2 = document.getElementById("dice2");

btn1.onclick = function(){
    x = Math.floor((Math.random() * 6) + 1);
    count+=1;
    document.getElementById("xlabel").innerText = x;
    getFinalResults();
};

btn2.onclick = function(){
    y = Math.floor((Math.random() * 6) + 1);
    count2+=1;
    document.getElementById("ylabel").innerText = y;
    getFinalResults2();
};

function getFinalResults(){
    if(x === 3){
        results.innerHTML = 'Player One Won';
    }else{
        results.innerHTML = "Player Two's Turn";
    }   
};
function getFinalResults2(){
    if(count2 <= count && y === 3){
        results.innerHTML = 'Player Two Won';
    }
    else{
        results.innerHTML = "Player One's Turn";
    }
    
};