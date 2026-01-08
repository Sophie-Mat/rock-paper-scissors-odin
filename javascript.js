function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*options.length)];
}

function getHumanChoice() {
    let choice = prompt("Choose rock, or paper, or scissors.");
    if (choice === null) return null;
    choice = choice.toLowerCase();
    while (!(choice === 'rock' || choice === 'paper' || choice === 'scissors')){
        choice = prompt("Invalid choice. Choose rock, or paper, or scissors.");
        if (choice === null) return null;
        choice = choice.toLowerCase();
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    switch (humanChoice){
        case computerChoice:
            alert("It's a tie!");
            break;
        case 'rock':
            if (computerChoice === 'scissors'){
                alert("You win! Rock beats Scissors.");
                humanScore++;
            }else{
                alert("You lose! Paper beats Rock.");
                computerScore++;
            }
            break;
        case 'paper':
            if (computerChoice === 'rock'){
                alert("You win! Paper beats Rock.");
                humanScore++;
            } else {
                alert("You lose! Scissors beat Paper.");
                computerScore++;
            }
            break;
        case 'scissors':
            if (computerChoice === 'paper'){
                alert("You win! Scissors beat Paper.");
                humanScore++;
            }else{
                alert("You lose! Rock beats Scissors.");
                computerScore++;
            }
            break;
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        if (humanSelection === null) return;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    let text;
    if (humanScore > computerScore){
        text = "Congratulations! You won.";
    }else if (humanScore < computerScore){
        text = "You lost, but you can always try again!";
    }else{
        text = "It's a tie!"
    }
    alert(`${text}\n\nFinal Score: \nHuman: ${humanScore} || Computer: ${computerScore}`);
}

playGame();