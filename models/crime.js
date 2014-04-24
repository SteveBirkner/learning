var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
 * Crime Info Schema
 */
var CrimeSchema = new Schema({
  State: String,
  Type: String,
  Crime: String,
  Year: String,
  Count: String,
});

mongoose.model('Crime', CrimeSchema);