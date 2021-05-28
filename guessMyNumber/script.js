'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
    // document.querySelector('.number').textContent = secretNumber

// console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
 
  const guess = Number(document.querySelector('.guess').value);
    document.querySelector('.spn').textContent = guess

  console.log(guess)
  console.log(typeof guess);
  //when there is no number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor =  '#9647b3';
    document.querySelector('.number').style.width = '27rem';
    
    if (score > highScore ) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore;
    }

    // when number exceeds 20
  } else if (guess > 20) {
    document.querySelector('.message').textContent = 'Number should not exeed 20'
    //when score is less than 1
  } else if (guess !== secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = guess > secretNumber ? 'Too High, score decreased by 1': 'Too Low, score decreased by 1';
    score--;
    document.querySelector('.score').textContent = score;
    } 
  }
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.guess').value = ''
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
 document.querySelector('.number').style.width =  '15rem';



})
