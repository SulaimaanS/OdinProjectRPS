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
//game();


//basic DOM practice
const body = document.querySelector("body");

const cont = document.createElement('div'); //Parent Div
cont.style.backgroundColor = "purple";
cont.style.color = "blue"
//cont.style.cssText = 'color: white, background: black';
cont.setAttribute('id', 'cont');
console.log(cont.backgroundColor);
const h3Cont = document.createElement("h3");
h3Cont.textContent = "WoW I'm trying to learn how DOM works";


const one = document.createElement('div'); //First Child
one.classList.add('classG');
one.style.color = "red";
one.style.backgroundColor = "black";
const pOne = document.createElement("p");
pOne.textContent = "Test Message to see if paragraphs are made like this in JS"


const two = document.createElement('div'); //Second Child
two.classList.toggle('toggler'); //cleaner to toggle than adding/removing inline
two.style.cssText = 'background-color:pink;border:6px solid black;height:100px;width:100px;';
const pTwo = document.createElement("p");
pTwo.textContent = "O shit it works";


let btnClick = () => alert('beep boop'); //Alert Func
let clicking = (e) => console.log(e) //Event callback test

const btn = document.createElement('button');
btn.textContent = 'this is a button';
btn.style.color = 'pink';
btn.setAttribute('id', 'test');
// btn.addEventListener('click', function (e) { //function is just a callback (can be any custom function?)
//     e.target.style.color = 'red';
// });
btn.addEventListener('click', clicking  //function is just a callback (can be any custom function?)
);


one.appendChild(pOne);
one.appendChild(btn);
two.appendChild(pTwo);
cont.appendChild(h3Cont);
cont.appendChild(one);
cont.appendChild(two);
body.appendChild(cont);