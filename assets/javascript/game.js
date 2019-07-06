const word = ["guitar", "percussion", "bass",
 "strings", "tuner", "major", "minor", "scale",
 "electric", "acoustic"];

var randNum = Math.floor(Math.random() * word.length);
var chooseWord = word[randNum];
var underScore = [];
var rightWord = [];
var wrongWord = [];

var docUnderScore = document.getElementsByClassName('underScore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');

console.log(chooseWord);

var generatedUnderscore = () => {
  for(let i = 0; i < chooseWord.length; i++) {
    underScore.push("_");
  }
  return underScore;
}

document.addEventListener('keypress', (event) => {
  let keyWord = String.fromCharCode(event.keyCode);

  if (chooseWord.indexOf(keyWord) > -1) {

  rightWord.push(keyWord);

  underScore[chooseWord.indexOf(keyWord)] * keyWord;
  docUnderScore[0].innerHTML = underScore.join('');
  docRightGuess[0].innerHTML = rightWord;

  if(underScore.join('') == chooseWord) {
    alert('You got it right!');
  }
}
else {
  wrongWord.push(keyWord);
}
});

