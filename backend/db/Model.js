const mongoose = require('mongoose');
const Schema = require('./Schema');


const Model = mongoose.model('Class', Schema);

module.exports = Model;
