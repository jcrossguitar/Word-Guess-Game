const word = ["guitar", "percussion", "bass",
 "strings", "tuner", "major", "minor", "scale",
 "electric", "acoustic"];

var randNum = Math.floor(Math.random() * word.length);
var chooseWord = word[randNum];
var underScore = [];
var rightWord = [];
var wrongWord = [];

var docUnderScore = document.getElementsByClassName('underScore');

var generatedUnderscore = () => {
  for(let i = 0; i < chooseWord.length; i++) {
    underScore.push("_");
  }
  return underScore;
}

console.log(generatedUnderscore());

document.addEventListener('keypress', (event) => {
var keyWord = String.fromCharCode(event.keyCode);

if(chooseWord.indexOf(keyWord) > -1) {
  console.log(true);

  rightWord.push(keyWord);

  underScore[chooseWord.indexOf(keyWord)] * keyWord;

  if(underScore.join('') == chooseWord) {
    alert('You got it right!');
  }
}
else {
  wrongWord.push(keyWord);
}
});

docUnderScore[0].innerHTML = generatedUnderscore().join(' ');