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

ways.forEach(way => way.addEventListener("click", ourWays));


//first function to options how to use and effect images! :)




function randomWay(){
    return ways[Math.floor(Math.random()*3)].dataset.option;
}

game.cpuWay = randomWay();



function startCPU(){
    if(!game.playerWays) return alert("You made no choice!");
}


document.querySelector(".fight").addEventListener("click", startCPU);


// second function who is winner complete check more//

function gameResult(player, cpu){
    if(player === cpu){
        return 'draw'
    } else if((player === "stone" && cpu === "scissors") || (player === "paper" && cpu === "stone") || (player === "scissors" && cpu === "paper")){
        return 'win'
    } else {
        return 'loss'
    }
}



const results = gameResult(game.playerWays, game.cpuWays);

// next funtion complete check more ;0