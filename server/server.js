const express = require('express');
const bodyParser = require('body-parser');
const {getSubtitles} = require('youtube-captions-scraper');

var {Video} = require('./models/video');

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

      var video = new Video(videoText, videoID);

      var score = video.score;
      console.log(video.score);

      res.status(200).send("this is a very nice send method!");
  });
});

app.listen(port, () => {
  console.log("service started");
});

module.exports = {app};
