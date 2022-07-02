let playerWins = 0;
let computerWins = 0;

function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Choose: Rock, Paper, Scissors");
  computerSelection = computerPlay();
  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "paper")
  ) {
    playerWins++;
    return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`;
  } else if (
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "rock") ||
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "paper") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "scissors")
  ) {
    computerWins++;
    return `You Lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`;
  } else {
    playerWins += 0.5;
    computerWins += 0.5;
    return `It's a tie! You both chose ${playerSelection}.`;
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(playRound());
    console.log("Current Score: " + playerWins, computerWins);
  }
  if (playerWins > computerWins) {
    console.log("You win! Man is smarter than a Computer!");
  } else if (playerWins < computerWins) {
    console.log("You lose! Automation is real!");
  } else {
    console.log("You tied with the computer. Don't lose hope.");
  }
}

game();
