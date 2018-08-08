window.addEventListener('load', init);

// avaliable levels
const levels = {
  "easy": 5,
  "medium": 3,
  "hard": 2
}

// change game level
const currentLevel = levels.easy;

// global variables
let time = currentLevel;
let score = 0;
let isPlaying;

const seconds = document.querySelector('#seconds');
const currentWord = document.querySelector('#current-word');
const wordInput = document.querySelector('#word-input');
const message = document.querySelector('#message');
const timeDisplay = document.querySelector('#time');
const scoreDisplay = document.querySelector('#score')

// array of words for game

const words = [
  'яблоко',
  'груша',
  'арбуз',
  'апельсин',
  'гранат',
  'банан',
  'грейпфрут',
  'манго',
  'киви',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

// init game

function init() {
  // show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // load words from array
  showWord(words);
  // start matching on word input
  wordInput.addEventListener('input', startMatch);
  // call countdown every second
  setInterval(countdown, 1000);
  // check game status
  setInterval(checkStatus, 50);
}

// start match
function startMatch() {
  if(matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  // if score is -1 disply 0
  if(score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    // display score
    scoreDisplay.innerHTML = score;
  }


}

// match current word to word input
function matchWords() {
  if(wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Правильно';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// pick and show random word
function showWord(words) {
  // generate random index based on array length
  const randIndex = Math.floor(Math.random() * words.length);
  // output random word
  currentWord.innerHTML = words[randIndex];

}

// countdown timer
function countdown() {
  // check that time is not run out
  if(time > 0) {
    // decrement time
    time--;
  } else if(time === 0) {
    // display message
    isPlaying = false;
  }
  // show time
  timeDisplay.innerHTML = time;
}

// check game status
function checkStatus() {
  if(!isPlaying && time === 0) {
    // game over message
    message.innerHTML = 'Игра окончена';
    // reset score
    score = -1;
  }
}