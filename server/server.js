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
      //console.log(captions);
      var jsonCaptions = JSON.stringify(captions);

      res.status(200).send(`${jsonCaptions}`);
  });
});

app.listen(port, () => {
  console.log("service started");
});

module.exports = {app};
