
function getComputerChoice() {
     let randomNumber = Math.floor(Math.random() * 3);
     if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function getHumanChoice() {
    let answer = prompt("Let's Play! Choose rock, paper or scissors:");
    return answer.toLowerCase();
}
function playGame() {
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a tie!\nYour score: ${humanScore}, Computer score: ${computerScore}`;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        humanScore++;
        return `You won! ${humanChoice} beats ${computerChoice}.\nYour Score: ${humanScore}, Computer Score: ${computerScore}`;
    } else {
        computerScore++;
        return `Computer won! ${computerChoice} beats ${humanChoice}.\nYour Score: ${humanScore}, Computer Score: ${computerScore}`; }
    }

for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice().toLowerCase();

    console.log(playRound(humanSelection, computerSelection));
}

 
if (humanScore > computerScore){
    return `Congratulations! You won the game!\nYour final score: ${humanScore}, Computer final score: ${computerScore}`;
} else if (computerScore > humanScore){
    return `I'm so sorry :/ You lost the game.\nComputer final score: ${computerScore}, Your final score: ${humanScore}`;
} else {
    return `It's a tie!
Your final score: ${humanScore}, Computer final score: ${computerScore}`;
}
}
alert(playGame())
