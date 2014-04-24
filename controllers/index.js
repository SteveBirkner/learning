
/*
 * GET home page.
 */

var mongoose = require('mongoose')
  , Crime = mongoose.model('Crime');


exports.index = function(req, res) {
  var crime = new Crime();
      crime.State = 'test';
      crime.Type = 'Introduction to Building Websites';
      crime.save(function (err) {
        console.log(err);
      });
  
  Crime.find({}, function(err, crimes) {
    res.render('index', { 
      title: 'Personal Learning Platform', 
      crimes: crimes 
    });
 });
}
