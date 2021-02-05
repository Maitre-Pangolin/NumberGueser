let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (human, computer, target) => {
  return Math.abs(human - target) <= Math.abs(computer - target) ? true : false;
};

const updateScore = (winner) => {
  return winner === "human" ? humanScore++ : computerScore++;
};

const advanceRound = () => {
  currentRoundNumber++;
};
