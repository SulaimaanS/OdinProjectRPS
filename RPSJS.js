function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[randomNum()];

    //console.log(randomNum());
    //console.log(choice);
    return choice
}
//computerPlay();

function randomNum() {
    return Math.floor(Math.random() * (2 - 0 + 1) + 0);
}


let computer = computerPlay();
console.log(computer);
let player = "paper"
console.log(player);
//console.log(player);

function RPS(playerSelection, computerSelection) {
    let win = "You Win B)";
    let lose = "You Lose :(";
    let draw = "Draw :EZ:"

    switch (computerSelection) {
        case "rock":
            if (playerSelection == "rock")
                console.log(draw)
            else if (playerSelection == "paper")
                console.log(win);
            else if (playerSelection == "scissors")
                console.log(lose);
            break;

        case "paper":
            if (playerSelection == "paper")
                console.log(draw)
            else if (playerSelection == "scissors")
                console.log(win);
            else if (playerSelection == "rock")
                console.log(lose);
            break;

        case "scissors":
            if (playerSelection == "scissors")
                console.log(draw)
            else if (playerSelection == "rock")
                console.log(win);
            else if (playerSelection == "paper")
                console.log(lose);
            break;
        default:
            console.log("draw");
    }
}

RPS(player, computer);