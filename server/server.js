const express = require('express');
const bodyParser = require('body-parser');
const {getSubtitles} = require('youtube-captions-scraper');

var {Video} = require('./models/video');
var Score = require('./middleware/score-calculator');

var app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.post('/video', (req, res) => {
  var videoID = req.body.videoID;

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
      var video = new Video(videoText, videoID);
      var score = Score(videoText);

      res.status(200).send(videoText);
  });
});

app.listen(port, () => {
  console.log("service started");
});

module.exports = {app};
