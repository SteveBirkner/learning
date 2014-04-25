var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
 * Crime Info Schema
 */
var CrimeSchema = new mongoose.Schema({
  state: String,
  type: String,
  crime: String,
  year: Number,
  count: Number
}),

Crime = mongoose.model('Crime', CrimeSchema);