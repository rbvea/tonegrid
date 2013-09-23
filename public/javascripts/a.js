
angular.module('paper-demo', [])
  .directive('paper', function($log) {
    return function(scope, elm, attrs) {
      paper.setup(elm[0]);
        // Create a Paper.js Path to draw a line into it:
      // var path = new paper.Path();
      // Give the stroke a color
      var points = [];
      var rects =[];
      // var points[] = new paper.Point(100, 100);
      angular.forEach([0, 1, 2, 3], function(i) {
        angular.forEach([0, 1, 2, 3], function(j) {
          points.push(new paper.Point(i * 50 + (i * 10), j * 50 + (j * 10)));
        });
      });

      var square = new paper.Size(50, 50);

      angular.forEach(points, function(value, key){
        rects.push(new paper.Rectangle(value, square));
      });

      angular.forEach(rects, function(val){
        var p = new paper.Path.Rectangle(val);
        p.fillColor = 'black';
      });

      var viewSize = new paper.Size(230, 230);
      paper.view.viewSize = viewSize;

      paper.view.draw();
      // $log.info(paper.view.viewSize);
    }
  });
