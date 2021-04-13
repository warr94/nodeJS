const { Schema, model } = require('mongoose');

const favoriteSchema  = new Schema({
    name: String,
    userId:  String,
    description: String
  });
  
  module.exports = model('favorite', favoriteSchema);