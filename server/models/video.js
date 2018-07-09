class Video {
  constructor(videoText, videoID) {
    this.id = videoID;
    this.text = videoText;
    this.score = this.calculateScore(this.text);
  }

  calculateScore(text) {
    // algorith to return a score between 0 and 100
    return 0.5; // for now just return a 0.5 value
  }
}

module.exports = {Video};
