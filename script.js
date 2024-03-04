function getComputerChoice () {
    const choices = ['Rock', 'paper', 'Scissors'];
    const randomPick = Math.floor(Math.random()  * choices.length);
    return choices[randomPick];
}

