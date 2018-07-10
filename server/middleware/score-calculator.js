var {Words} = require('../dictionary/bad-words');

// algorith to return a score between 0 and 1
var Score = function (text) {

  var textArray = text.split(" ");
  var wordCounter = 0;

  console.log(textArray.length);

  textArray.forEach(function(k){
    if(Words.includes(k)) {
      console.log(k);
    }
  });

  return 0.5; // for now just return a 0.5 value
}

module.exports = Score;
