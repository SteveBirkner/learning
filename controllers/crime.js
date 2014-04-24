var mongoose = require('mongoose')
  , Crime = mongoose.model('Crime');

exports.jsonlist = function(req, res) {

	Crime.find({}, function(err, crimes) {
		res.send(crimes);
	});
}