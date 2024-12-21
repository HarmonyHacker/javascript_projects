let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

function guessNumber() {
  const guess = parseInt(document.getElementById("guessInput").value);
  guessCount++;

  if (guess === randomNumber) {
    document.getElementById("message").textContent = `Congratulations! You guessed the number in ${guessCount} tries.`;
  } else if (guess < randomNumber) {
    document.getElementById("message").textContent = "Too low. Guess again.";
  } else {
    document.getElementById("message").textContent = "Too high. Guess again.";
  }
}