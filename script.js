let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function checkGuess(userGuess) {
  if (userGuess < 0 || userGuess > 9) {
    alert('You must chose a number between 0 and 9');
    exit();
  }
}

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(guess, target) {
  Math.abs(target - guess);
}

function compareGuesses(userGuess, computerGuess, targetNum) {
  const userDiff = getAbsoluteDistance(userGuess, targetNum);
  const computerDiff = getAbsoluteDistance(computerGuess, targetNum);
  if (userDiff === computerDiff || userDiff < computerDiff) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
