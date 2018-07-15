var {Words} = require('../dictionary/bad-words');

// algorith to return a score between 0 and 1
var Score = function (text) {

  var textArray = text.split(" ");
  var wordCounter = 0;

  textArray.forEach(function(k){
    if(Words.includes(k)) {
      console.log(k);
      wordCounter++;
    }
  });

  var score = wordCounter / textArray.length * 10 * 2;

  return score;
}

module.exports = Score;
