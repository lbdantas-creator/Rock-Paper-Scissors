
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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        return `You won! ${humanChoice} beats ${computerChoice}.`;
    } 
    else {
        computerScore++;
        return `You lost! ${computerChoice} beats ${humanChoice}.`;
    }
}

function updateGame(humanChoice) {
    const computerSelection = getComputerChoice().toLowerCase();

    const roundResult = playRound(humanChoice, computerSelection);

    results.textContent = `${roundResult}
Your score: ${humanScore}
Computer score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {

        if (humanScore === 5) {
            winnerMessage.textContent = " Congratulations!🏆 You won the game!";
        } else {
            winnerMessage.textContent = " Game over! The computer won!";
        }

        // Exibe o pop-up
        winnerModal.classList.add("show");

        // Desativa os botões do jogo
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const results = document.querySelector("#results");
const winnerModal = document.querySelector("#winnerModal");
const winnerMessage = document.querySelector("#winnerMessage");
const playAgainButton = document.querySelector("#playAgain");

// Rock
rockButton.addEventListener("click", function() {
    updateGame("rock");
});

// Paper
paperButton.addEventListener("click", function() {
    updateGame("paper");
});

// Scissors
scissorsButton.addEventListener("click", function() {
    updateGame("scissors");
});

// Reinicia o jogo
playAgainButton.addEventListener("click", function() {
    location.reload();
});