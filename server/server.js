require('./config/config')

const express = require('express');
const bodyParser = require('body-parser');
const {getSubtitles} = require('youtube-captions-scraper');
const _ = require('lodash');

var {Video} = require('./models/video');
var Score = require('./middleware/score-calculator');

var app = express();
app.use(bodyParser.json());

// Deploying to heroku
const port = process.env.PORT || 3000;

app.post('/video', (req, res) => {
  var body = _.pick(req.body, ['videoID']);
  var videoID = body.videoID;

  if(!videoID){
    res.status(400).send('No video id was provided.');
    return;
  }

  getSubtitles({
    videoID, // youtube video id
  }).then(captions => {

      var captionString = JSON.stringify(captions);
      var captionObject = JSON.parse(captionString);
      var videoText;

      captionObject.forEach(function(k) {
          videoText += k['text'];
          videoText += " "; // add space
      });

      videoText = videoText.toLowerCase();
      var score = Score(videoText);

      res.status(200).send(`The score is ${score}`);
  }).catch((e) => {
     res.status(400).send("no subtitles were retrieved for this video."
                        + " If you want to manually add a score for this video. Hit /add-score"
                        + " endpoint with videoID and score in the body");
  });

  // if not found in getSubtitles, check in database?
});

add.post('/add/video',  (req, res) => {
  var video = new Video({
    id: req.body.id,
    name: req.body.name,
    score: req.body.score
  });

  // Save to database
});

app.listen(port, () => {
  console.log("service started");
});

module.exports = {app};
