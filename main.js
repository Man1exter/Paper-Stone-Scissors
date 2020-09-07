const gameSum = {
    win: 0,
    loss: 0,
    draw: 0,
}

const game = {
    playerWays = '',
    cpuWays = '',
}

const ways = [...document.querySelectorAll('.images img')]; //every selected images 

function ourWays(){
 game.playerWays = this.dataset.option;
 ways.forEach(way = way.style.boxShadow = '');
 this.style.boxShadow = "6px 3px 23px 30px rgb(1, 253, 241)";
}

ways.forEach(way => way.addEventListener("click", ourWays));