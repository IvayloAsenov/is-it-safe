const express = require('express');
const bodyParser = require('body-parser');
const {getSubtitles} = require('youtube-captions-scraper');

var app = express();
const port = process.env.PORT || 3000;

app.get('/video/:videoId', (req, res) => {
  var videoID = req.params.videoId;

  getSubtitles({
    videoID, // youtube video id
  }).then(captions => {
      console.log(captions);
      res.status(200).send(`${captions}`);
  });
});

app.listen(port, () => {
  console.log("service started");
});

module.exports = {app};
