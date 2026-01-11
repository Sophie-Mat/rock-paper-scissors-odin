const CHOICES = ['rock', 'paper', 'scissors'];
const WINNING_SCORE = 5;

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results_container = document.querySelector("#results_container");

let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

const scoreDisplay = document.createElement("p");
scoreDisplay.classList.add("score-display");
scoreDisplay.style.fontWeight = "bold";
scoreDisplay.textContent = scoreText(humanScore, computerScore);

results_container.appendChild(scoreDisplay);

function winMessage(humanChoice, computerChoice){
    return `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beat(s) ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}. 🎉`;
}

function loseMessage(computerChoice, humanChoice){
    return `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beat(s) ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}... 😧`;
}

function scoreText(humanScore, computerScore){
    return `👱 Human ${humanScore} - ${computerScore} Computer 🖥️`;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie! 🤝";
    }
    
    const winConditions = {
        rock: 'scissors',
        paper: 'rock', 
        scissors: 'paper'
    };
    
    const isWin = winConditions[humanChoice] === computerChoice;
    
    if (isWin) {
        humanScore++;
        return winMessage(humanChoice, computerChoice);
    } else {
        computerScore++;
        return loseMessage(computerChoice, humanChoice);
    }
}

rock.addEventListener("click", () => handleChoice("rock"));
paper.addEventListener("click", () => handleChoice("paper"));
scissors.addEventListener("click", () => handleChoice("scissors"));

//nice to have: keyboard support
document.addEventListener('keydown', (e) => {
    if (rock.disabled && paper.disabled && scissors.disabled) return; 
    
    switch(e.key.toLowerCase()) { // Use toLowerCase to handle uppercase inputs
        case 'r': handleChoice('rock'); break;
        case 'p': handleChoice('paper'); break;
        case 's': handleChoice('scissors'); break;
    }
});

function handleChoice(choice) {
    const computerSelection = getComputerChoice();
    const gameResult = playRound(choice, computerSelection);
    updateDisplay(gameResult, choice, computerSelection);
}

function updateDisplay(gameResult, humanChoice, computerChoice) {
    roundNumber++;
    
    const humanEmoji = (humanChoice === 'rock') ? '✊' : (humanChoice === 'paper') ? '✋' : '✌️';
    const computerEmoji = (computerChoice === 'rock') ? '✊' : (computerChoice === 'paper') ? '✋' : '✌️';
    const roundElement = document.createElement("p");
    roundElement.classList.add("round-result");
    roundElement.textContent = `${roundNumber} ${humanEmoji} vs ${computerEmoji} : ${gameResult}`;
    
    scoreDisplay.textContent = scoreText(humanScore, computerScore);
    
    results_container.appendChild(roundElement);

    if (humanScore === WINNING_SCORE || computerScore === WINNING_SCORE){
        endResult();
    }
}

function toggleButtons(disabled) {
    [rock, paper, scissors].forEach(button => {
        button.disabled = disabled;
        button.classList.toggle('disabled', disabled);
    });
}

function endResult(){
    toggleButtons(true);

    const final_score = document.createElement("h4");
    final_score.classList.add("final-score");
    
    if (humanScore > computerScore){
        final_score.textContent = "Congratulations! You won. 🎉";
    }else{
        final_score.textContent = "You lost, but you can always play again! 🫂";
    }

    const retry = document.createElement("button");
    retry.classList.add("retry");
    retry.textContent = "Play Again";
    
    retry.addEventListener("click", resetGame);

    results_container.appendChild(final_score);
    results_container.appendChild(retry);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundNumber = 0;
    
    toggleButtons(false);
    scoreDisplay.textContent = scoreText(humanScore, computerScore);
    results_container.replaceChildren(scoreDisplay);
}

