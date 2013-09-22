// var T = require('timbre');
/*
 * GET home page.
 */

exports.index = function(req, res){
  // T("sin", {freq:880, mul:0.5}).play();
  res.render('index', { title: 'Express' });
};