// Function to get computer's choice randomly
function getComputerChoice() {
    const choices = ['rock','paper','scissor'];
    const randomPick = Math.floor(Math.random() * choices.length);
    return choices[randomPick];
}
console.log(getComputerChoice());
