const rps = ['rock', 'paper', 'scissors'];
const computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playerSelection, computerSelection) {

    console.log('Computer selects: ' + computerSelection);
    console.log('Player selects: ' + playerSelection);

    

    if ((computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissors' && playerSelection === 'paper') || 
    (computerSelection === 'rock' && playerSelection === 'scissors')) {
        computerScore = computerScore + 1;
        results.textContent = `L! The computer's ${computerSelection} beats your ${playerSelection}!\n\nPlayer: ${playerScore}\nComputer: ${computerScore}`;
    } else if ((computerSelection === 'scissors' && playerSelection === 'rock') || (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'rock' && playerSelection === 'paper')) {
        playerScore = playerScore + 1;
        results.textContent = `W! Your ${playerSelection} beats the computer's ${computerSelection}!\n\nPlayer: ${playerScore}\nComputer: ${computerScore}`;
    } else {
        results.textContent = `Tie, you and the computer both selected ${playerSelection}.\n\nPlayer: ${playerScore}\nComputer: ${computerScore}`;
    };

    if (playerScore == 5) {

        results.textContent = `Congrats, you win!\n\nFINAL SCORE => Player: ${playerScore}\nComputer: ${computerScore}`;
        const playAgain = document.createElement('button');
        playAgain.textContent = 'Play Again';
        body.appendChild(playAgain);
        
        playAgain.addEventListener('click', () => {
            location.reload();
        });

    } else if (computerScore == 5) {

        results.textContent = `Sorry, you lose!\n\nFINAL SCORE => Player: ${playerScore}\nComputer: ${computerScore}`;
        const playAgain = document.createElement('button');
        playAgain.textContent = 'Play Again';
        body.appendChild(playAgain);

        playAgain.addEventListener('click', () => {
            location.reload();
        });
        
    } else return;

};

const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    });    
});