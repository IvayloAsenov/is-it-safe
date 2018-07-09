var {Words} = require('../dictionary/bad-words');

class Video {
  constructor(videoText, videoID) {
    this.id = videoID;
    this.text = videoText;
    this.score = this.calculateScore(this.text);
  }

  // algorith to return a score between 0 and 1
  calculateScore(text) {

    var textArray = text.split(" ");
    var wordCounter = 0;

    textArray.forEach(function(k){
      if(Words.includes(k)) {
        console.log("bad word");
      }
    });

    return 0.5; // for now just return a 0.5 value
  }
}

module.exports = {Video};
