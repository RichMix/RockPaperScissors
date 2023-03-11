// Get the buttons and result element from the HTML
const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const scissorsBtn = document.getElementById("Scissors");
const result = document.getElementById("result");

// Add event listeners to the buttons
rockBtn.addEventListener("click", function() { playGame("rock"); });
paperBtn.addEventListener("click", function() { playGame("paper"); });
scissorsBtn.addEventListener("click", function() { playGame("scissors"); });

// The main function that plays the game
function playGame(playerSelection) {
  // Generate the computer's choice randomly
  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  // Compare the choices and determine the winner
  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result.textContent = "You win!";
  } else {
    result.textContent = "You lose!";
  }
}
