let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;
while (guess != randomNumber) {
    guess = prompt("Guess a number between 1 and 10:");
    if (guess == randomNumber) {
        alert("Congratulations! You guessed the correct number: " + randomNumber);
    } else if (guess > randomNumber) {
        alert("Too high! Try again.");
    } else if (guess < randomNumber) {
        alert("Too low! Try again.");
    } else {
        alert("Invalid input. Please enter a number between 1 and 10.");
    }
}
