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

    // Decide the winner or tie

    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
    }
    else if (winningCondition[playerSelection] === computerSelection.toLowerCase()){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose ${computerSelection} beats ${playerSelection}`;
    }
}

// Function to prompt user to select Rock, Paper, or Scissors
function getUserChoice() {
    let userInput = prompt("Select Rock, Paper, or Scissors:");
    // // Validate user input
    // while (!['rock', 'paper', 'scissors'].includes(userInput.toLowerCase())) {
    //     userInput = prompt("Invalid choice! Please select Rock, Paper, or Scissors:");
    // }
    return userInput;
}












// test function
// console.log(getComputerChoice())

// get player selection
const playerSelection = getUserChoice();

// get computer selection 
const computerSelection = getComputerChoice();

//play a round

console.log (playRound(playerSelection,computerSelection));