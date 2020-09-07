const gameSum = {
    win: 0,
    loss: 0,
    draw: 0,
}

const game = {
    playerWays = '',
    cpuWays = '',
}

const ways = [...document.querySelectorAll('.images img')];

function ourWays(){

}



ways.forEach(way => way.addEventListener("click", ourWays));