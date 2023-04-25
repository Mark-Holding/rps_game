//computers choice function:
//generate random number between 1-3
//store number in variable
//if 1 = rock, if 2 = paper, if 3 = scissors
//return the result

const playerSelection = "PAPER";
const computerSelection = getComputerChoice();
let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    let compRanNum = Math.floor((Math.random() *3)+1);
    if (compRanNum === 1) {
        return "ROCK";
    } else if (compRanNum === 2) {
        return "PAPER";
    } else {
        return "SCISSORS"
    }
}  



function Play(playerSelection, computerSelection){

    

  return function(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Draw, try again";
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        playerScore++;
        return "You lose. Paper beats rock.";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore++;
        return "You win. Rock beats scissors.";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore++;
        return "You win. Paper beats rock.";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        compScore++;
        return "You lose. Scissors beats paper."; 
    } else if (playerSelection === "SCISSORS" && computerSelection ==="PAPER") {
        playerScore++;
        return "You win. Scissors beats paper.";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        compScore++;
        return "You lose. Rock beats scissors."; 
    } else {
        return "You must enter either Rock, Paper or Scissors";
    }
};


}


let result = Play(playerSelection, computerSelection);
console.log( result(playerSelection, computerSelection) );

console.log(playerScore);
console.log(compScore);
