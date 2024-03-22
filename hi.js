var numOne, numTwo, answer, userAnswer;

const WIN = 5;
const LOSS = 3;

var correct = 0;
var incorrect = 0;
var max = 6;
var min = 0;

function getRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// You can modify this function to use a different arithmetic operator if you choose. Don't forget to update the HTML instructions as well. *For an extra challenge, you can even create a function that randomly assigns an arithmetic operator to each round of the game. One way to approach this would be to create a switch statement that takes a random number to trigger a specific case (for example, case 1 could mean that the operator would be division).
function addNumbers(){
  answer = numOne + numTwo;
};

function checkAnswer(){
  if (userAnswer === answer) {
    correct++;
    $('.results').text("Correct");
  } else {
    incorrect++;
    $('.results').text("Incorrect");
  }
};

function checkScore(){
  if (correct >= WIN) {
    $('.results').text("You won the game!");
  } else if (incorrect >= LOSS) {
    $('.results').text("You lost the game.");
  };
};

function resetGame(){
  $('.submit').prop('disabled', true);
  if ((correct === WIN) || (incorrect === LOSS)) {
    setTimeout(function(){
      $('body').html('<h1>Game Over</h1>');
    }, 2000);
  } else {
    setTimeout(function(){
        document.getElementById('yourAnswer').value = '';
        setGame();
        $('.submit').prop('disabled', false);
    }, 1000);
  };
};

function setGame(){
  $('.results').text('');
  numOne = getRandomNumbers(min, max);
  numTwo = getRandomNumbers(min, max);
  $('.numOne').text(numOne);
  $('.numTwo').text(numTwo);
  addNumbers();
};

setGame();

$('.submit').on('click', function(){
    userAnswer = parseInt(document.getElementById('yourAnswer').value);
    checkAnswer();
    checkScore();
    resetGame();
});
function checkScore(){
  if (correct >= WIN) {
    $('.results').text("You won the game!");
    setTimeout(function(){
      window.location.href = "index1.html"; // Redirect to index1.html
    }, 1000); // Redirect after 2 seconds
  } else if (incorrect >= LOSS) {
    $('.results').text("You lost the game.");
  };
};
