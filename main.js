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