// Function to get computer's choice randomly

function getComputerChoice() {
    const choices = ['rock','paper','scissor'];
    const randomPick = Math.floor(Math.random() * choices.length);
    return choices[randomPick];
}
// console.log(getComputerChoice());

// Function to play a single round of Rock Paper Scissors

function playRound (playerSelection,computerSelection) {

// converts player selection to lowercase

    playerSelection = playerSelection.toLowerCase();

    // define winning conditions

    const winningCondition = {
        rock : 'scissor',
        scissor : 'paper',
        paper : 'rock'
    };
}
