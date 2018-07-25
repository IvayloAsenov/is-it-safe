var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/is-it-safe-dev');

module.exports = {mongoose};
