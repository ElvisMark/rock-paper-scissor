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
    // Validate user input
    while (!['rock', 'paper', 'scissors'].includes(userInput.toLowerCase())) {
        userInput = prompt("Invalid choice! Please select Rock, Paper, or Scissors:");
    }
    return userInput;
}

// Function to play a five round game
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    // Play five rounds
    for (let i = 0; i < 5; i++) {
        const playerSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        // Update scores
        if (result.startsWith("You Win!")) {
            playerScore++;
        } else if (result.startsWith("You Lose!")) {
            computerScore++;
        }
    }

    // Display final scores and determine the winner
    console.log(`Final Scores - Player: ${playerScore}, Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}

// Start the game
playGame();









// // Test the getComputerChoice function
// console.log(getComputerChoice());

// // Get user's choice
// const playerSelection = getUserChoice();

// // Get computer's choice
// const computerSelection = getComputerChoice();

// // Play a round
// console.log(playRound(playerSelection, computerSelection));
