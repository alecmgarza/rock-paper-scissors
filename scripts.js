const rps = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playerSelection, computerSelection) {

    if ((computerSelection === 'Paper' && playerSelection === 'Rock') || (computerSelection === 'Scissors' && playerSelection === 'Paper') || 
    (computerSelection === 'Rock' && playerSelection === 'Scissors')) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if ((computerSelection === 'Scissors' && playerSelection === 'Rock') || (computerSelection === 'Paper' && playerSelection === 'Scissors') ||
    (computerSelection === 'Rock' && playerSelection === 'Paper')) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return 'Tie, try again';
    }
}

function game() {
    const playerSelection = 'Rock';
    const computerSelection = computerPlay();
    console.log('Computer selects: ' + computerSelection);
    console.log('Player selects: ' + playerSelection);
    console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i < 5; i++) {
    game();
}

const playerSelection = 'Rock';
const computerSelection = computerPlay();



//make playerSelection case-insensitive