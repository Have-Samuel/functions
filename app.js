const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

// Player Choice
const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK
    && selection !== PAPER
    && selection !== SCISSORS) {
    alert(`invalid choice! we chose ${DEFAULT_USER_CHOICE} for you`);
    return;
  }
  return selection;
};

// Computer Choice
const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// Find Winner
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : cChoice === ROCK && pChoice === PAPER
  || cChoice === PAPER && pChoice === SCISSORS
  || cChoice === SCISSORS && pChoice === ROCK
  ? RESULT_PLAYER_WINS
  : RESULT_COMPUTER_WINS

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   cChoice === ROCK && pChoice === PAPER
//   || cChoice === PAPER && pChoice === SCISSORS
//   || cChoice === SCISSORS && pChoice === ROCK) {
//   return RESULT_PLAYER_WINS;
//   } else{
//   return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting ---');
  const playerChoice = getPlayerChoice();
  const ComputerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(ComputerChoice, playerChoice);
  } else {
    winner = getWinner(ComputerChoice);
  }

  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${ComputerChoice}, there you `;
  if (winner === RESULT_DRAW) { // Auto msg to show what is happening
    message += 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message += 'won.';
  } else {
    message += 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});

// Not Related to the Game
// Using the REST Operator
const combine = (resultHandler, operation, ...numbers) => {
  // nesting functions into functions
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

// Don't use this
// const subtractUp = function(resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum -= num;
//   }
//   resultHandler(sum, 'The result after adding all numbers is: ');
// };

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
};

combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 3, 'dfd', 6, -6, 8);
combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 3, 5, 6, -6, 8, 9, 19);
combine(showResult.bind(this, 'The result after Subtracting all numbers is:'), 'SUBTRACT', 20, 90, 81);