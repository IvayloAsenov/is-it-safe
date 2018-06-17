var express = require('express');
var bodyParser = require('body-parser');

var app = express();
const port = process.env.PORT || 3000;

app.get('/video/:videoId', (req, res) => {
  var videoId = req.params.videoId;
  res.status(200).send(`the video id is ${videoId}`);
});

app.listen(port, () => {
  console.log("service started");
});

module.exports = {app};
