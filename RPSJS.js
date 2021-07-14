function randomNum() {
    return Math.floor(Math.random() * (2 - 0 + 1) + 0);
}
function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[randomNum()];
    return choice
}

function RPS(playerSelection, computerSelection) {
    let win = "You Win B)";
    let lose = "You Lose :(";
    let draw = "Draw :EZ:"

    switch (computerSelection) {
        case "Rock":
            if (playerSelection === "rock") {
                console.log(draw)
                return "draw";
            }

            else if (playerSelection === "paper") {
                console.log(win);
                return "win";
            }

            else if (playerSelection === "scissors")
                console.log(lose);
            return "lose";
            break;

        case "Paper":
            if (playerSelection === "paper") {
                console.log(draw)
                return "draw";
            }
            else if (playerSelection === "scissors") {
                console.log(win);
                return "win";
            }

            else if (playerSelection === "rock")
                console.log(lose);
            return "lose";
            break;

        case "Scissors":
            if (playerSelection === "scissors") {
                console.log(draw)
                return "draw";
            }

            else if (playerSelection === "rock") {
                console.log(win);
                return "win"
            }

            else if (playerSelection === "paper")
                console.log(lose);
            return "lose"
            break;

        default:
            console.log("error");
    }
}

function game() {
    let playerWin = 0;
    let computerWin = 0;

    for (let i = 0; i < 5; i++) {
        let comp = computerPlay();
        console.log(comp);
        let outcome = RPS(prompt(), comp);
        console.log(outcome);
        if (outcome === "win") {
            playerWin++;
        }
        else if (outcome === "lose") {
            computerWin++;
        }
        console.log(playerWin);
        console.log(computerWin);
    }

    if (playerWin > computerWin)
        console.log("Winner!")
    else if (playerWin < computerWin)
        console.log("Loser!")
    else
        console.log("Draw!");
}
game();