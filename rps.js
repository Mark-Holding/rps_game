//computers choice function:
//generate random number between 1-3
//store number in variable
//if 1 = rock, if 2 = paper, if 3 = scissors
//return the result



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

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        console.log("Draw, try again");
;    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        compScore++;
        console.log("You lose. Paper beats rock.");
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore++;
        console.log("You win. Rock beats scissors.");
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore++;
        console.log("You win. Paper beats rock.");
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        compScore++;
        console.log("You lose. Scissors beats paper."); 
    } else if (playerSelection === "SCISSORS" && computerSelection ==="PAPER") {
        playerScore++;
        console.log("You win. Scissors beats paper.");
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        compScore++;
        console.log("You lose. Rock beats scissors."); 
    } else {
        console.log("You must enter either Rock, Paper or Scissors");
    };
};

function game() {
    for (let i = 0; i < 5; i++){
    const choicePrompt = prompt('Enter choice');
    const playerSelection = choicePrompt.toUpperCase();
    playRound(playerSelection); 
        console.log(playerScore);
        console.log(compScore)
    }
}

game();


