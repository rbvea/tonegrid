var app = angular.module('paper', []);

app.factory('$paper', function() {
  // if(typeof paper == undefined) {
  //   alert('paper not defined');
  // }

  p.init = function(canvas) {
    console.log('wat');
    // paper.setup(canvas);
  } 

  return p;
});

  

// var path = new Path();
// path.strokeColor = 'black';
// var start = new Point(100,100);
// path.moveTo(start);
// path.lineTo(start + [100, -50]);
