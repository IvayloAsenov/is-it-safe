const express = require('express');
const bodyParser = require('body-parser');
const {getSubtitles} = require('youtube-captions-scraper');

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
      });

      console.log(videoText);
      res.status(200).send("this is a very nice send method!");
  });
});

app.listen(port, () => {
  console.log("service started");
});

module.exports = {app};
