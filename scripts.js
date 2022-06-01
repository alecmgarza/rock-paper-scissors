const rps = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
}

function playerPlay() {

}

function playRound(playerSelection, computerSelection) {
    console.log('Computer selects: ' + computerSelection);
    console.log('Player selects: ' + playerSelection);


    

    if ((computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissors' && playerSelection === 'paper') || 
    (computerSelection === 'rock' && playerSelection === 'scissors')) {
        alert(`You lose, ${computerSelection} beats ${playerSelection}!`);
    } else if ((computerSelection === 'scissors' && playerSelection === 'rock') || (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'rock' && playerSelection === 'paper')) {
        alert(`You win, ${playerSelection} beats ${computerSelection}!`);
    } else {
        alert('Tie, try again.');
    }
}

function computerScore() { //work on this
    i = 0;
}

function playerScore() { //work on this
    i = 0;
    console.log(i + 1);
}

function game() {
    let playerInput = prompt('Type rock, paper, or scissors');
    const playerSelection = playerInput.toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i < 5; i++) {
    game();
}

const computerSelection = computerPlay();
const playerSelection = playerSelection.toLowerCase();


//create functions to keep score
//make playerSelection case-insensitive