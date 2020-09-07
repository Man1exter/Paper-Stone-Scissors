const gameSum = {
    win: 0,
    loss: 0,
    draw: 0,
}

const game = {
    playerWays:  "",
    cpuWays:  "",
}

const ways = [...document.querySelectorAll('.images img')]; //every selected images 

function ourWays(){
 game.playerWays = this.dataset.option;
 ways.forEach(way => way.style.boxShadow = '');
 ways.forEach(way => way.style.margin = '');
 ways.forEach(way => way.style.backgroundColor = '');
 this.style.boxShadow = "6px 3px 23px 30px rgb(1, 252, 241)";
 this.style.margin = "50px 0px 20px 0px";
 this.style.backgroundColor = "white";
}




//first function to options how to use and effect images! :)


function gameResult(player, cpu){
    if(player === cpu){
        return 'draw';
    } else if((player === "stone" && cpu === "scissors") || (player === "paper" && cpu === "stone") || (player === "scissors" && cpu === "paper")){
        return 'win';
    } else {
        return 'loss';
    }
}




//publish game on table score











////////////////////////////////////////

function randomWay(){
    return ways[Math.floor(Math.random()*3)].dataset.option;
}

//function settings and move elements and others //function settings and move elements and others
function publishResult(player, cpu, results){
    if(results === "win"){
        document.querySelector("section.pkt .first").textContent = + +gameSum.wins;
    } else if(results === "loss"){
        document.querySelector("section.pkt .second").textContent = + +gameSum.loss;
    } else{
        document.querySelector("section.pkt .third").textContent = + +gameSum.draw;
    }
}

function startGame(){
    if(!game.playerWays) return alert("You made no choice!");
}



game.cpuWay = randomWay();
const results = gameResult(game.playerWays, game.cpuWays);
publishResult(game.playerWays, game.cpuWays, gameResult)








ways.forEach(way => way.addEventListener("click", ourWays));
document.querySelector(".fight").addEventListener("click", startGame);



// second function who is winner complete check more//
// let me close the section game :D;D;D;D;D;D;


