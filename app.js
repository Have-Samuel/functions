const startGameBtn = document.getElementById('start-game-btn');

// Direct Function
// const start = function gameStart() {
//   console.log('Game is starting ---');
// };

// const person = {
//   greet: function greet() {
//     console.log('Hello There!');
//   }
// };

// person.greet();

// Indirect Function
startGameBtn.addEventListener('click', function() {
  console.log('Game is starting ---');
});
