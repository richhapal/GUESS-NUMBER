'use strict';

let selectMessage = document.querySelector('.message');
let selectNumber = document.querySelector('.number');
let bodyTagSelect = document.querySelector('body');

let displayMessage = (message) => {
  selectMessage.textContent = message;
};
// console.log(selectMessage.textContent);

// console.log(document.querySelector('.guessNum').value);
// (document.querySelector('.guessNum').value = 25);
// console.log(document.querySelector('.guessNum').value);

let secretNum = Math.trunc(Math.random() * 20) + 1;
//  document.querySelector('.number').textContent = secretNum;
console.log(secretNum);
let score = 20;
let highScore = 0;
//document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guessNum = parseInt(document.querySelector('.guessNum').value);
  if (guessNum > 20 || guessNum < 1) {
    alert('Numer Between 0 to 20.');
    //selectMessage.style.color = 'red';
  }
  // not input insert
  if (!guessNum) {
    selectMessage.textContent = 'No Number!';
  } // wining codition
  if (guessNum == secretNum) {
    displayMessage('Number Matched!!!');
    bodyTagSelect.style.backgroundColor = 'Green';
    selectNumber.textContent = secretNum;
    selectNumber.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    if (score == 20) {
      displayMessage('Congratulation You Won The Game! with top score');
    }
  } else if (guessNum !== secretNum) {
    if (score > 1) {
      displayMessage(guessNum > secretNum ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  bodyTagSelect.style.backgroundColor = '#356';
  score = 20;
  document.querySelector('.score').textContent = score;
  selectNumber.style.width = '15rem';
  selectNumber.textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guessNum').value = '';
  //   document.querySelector('.highscore').textContent = '0';
  secretNum = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNum);
});
