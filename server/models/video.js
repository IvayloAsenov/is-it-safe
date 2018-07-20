const mongoose = require('mongoose');

var Video = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  },

  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  },

  score: {
    type: Number,
    required: true,
    trim: true,
    unique: false,
  }
});

module.exports = {Video};
