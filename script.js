function getComputerChoice () {
    const choices = ['Rock', 'paper', 'Scissors'];
    const randomPick = Math.floor(Math.random()  * choices.length);
    return choices[randomPick];
}

// console.log (getComputerChoice());

// function to play single round
function playGame (playerSelection, computerSelection) {
    playerSelection =playerSelection.toLowerCase();
   
   //  option to change playerSelection to lowercase
}