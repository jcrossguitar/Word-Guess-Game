var $ = function (id) {
  return document.getElementById(id);
}

var word = ["guitar", "percussion", "bass",
 "strings", "tuner", "major", "minor", "scale",
 "electric", "acoustic"];

var randNum = Math.floor(Math.random() * word.length);
var chooseWord = word[randNum];
var underScore = [];
var rightWord = [];
var wrongWord = [];

var docUnderScore = document.getElementsByClassName('underscores');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');

console.log(chooseWord);

var generatedUnderScore = () => {
  for(var i = 0; i < chooseWord.length; i++) {
    underScore.push("_");
  }
  return underScore;
}

console.log(generatedUnderScore());

document.addEventListener('keypress', (event) => {
  var keyWord = String.fromCharCode(event.keyCode);

  if(chooseWord.indexOf(keyWord) > -1) {

    rightWord.push(keyWord);

    underScore[chooseWord.indexOf(keyWord)] = keyWord;
    docUnderScore[0].innerHTML = underScore.join(' ');

    docRightGuess[0].innerHTML = rightWord;

    if(underScore.join('') == chooseWord) {
      alert('You got it right!');
    }
}
else {
  wrongWord.push(keyWord);
}
});

generatedUnderScore();

