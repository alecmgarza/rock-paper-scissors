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
        alert(`You lose, ${computerSelection} beats ${playerSelection}!\n\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
    } else if ((computerSelection === 'scissors' && playerSelection === 'rock') || (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'rock' && playerSelection === 'paper')) {
        playerScore = playerScore + 1;
        alert(`You win, ${playerSelection} beats ${computerSelection}!\n\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
    } else {
        alert(`Tie, try again.\n\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
    };

}

/*function game() {

    for (let i = 0; i < 5; i++) {
        //let playerInput = prompt('Type rock, paper, or scissors');
        //const playerSelection = playerInput.toLowerCase();
        const playerSelection = id;
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    };

    if (playerScore > computerScore) {
        alert('Congrats, you win!');
    } else if (computerScore > playerScore) {
        alert('Sorry, you lose!');
    } else {
        alert('Tie game!');
    };

}*/

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    });
    
})

//game();

//REMINDER: scoreboard done, try to loop back to beginning on game over