var paperDir = function($log, paper) {

  return function(scope, elm, attrs) {
    paper.init(elm[0]);

    scope.interval = 0.05;
    scope.speed = 0.03; //0.01 is slow, 0.05 is fast;

    scope.time = 0;
    scope.step = 1;
    scope.i = 0;

    paper.view.onFrame = function(event) {
      scope.time += scope.speed;
      console.log(scope.time);
      if(Math.floor(scope.time) > scope.i){
        scope.i = Math.floor(scope.time);
        scope.step = (scope.step + 1) % 4;
        scope.$apply();
      }
      // angular.forEach(paper.rects, function(column, j) {
      //   angular.forEach(column, function(r, i) {
      //     var stop = r.fillColor._components[0]._stops[1];
      //     var ramp = Math.abs(Math.sin(3 * scope.time));
      //     stop.rampPoint = ramp;
      //   });
      // });
    }

    scope.$watch('step', function(nu, old) {
      angular.forEach(paper.rects[old], function(rect) {
        rect.strokeColor = 'black';
      });
      angular.forEach(paper.rects[nu], function(rect) {
        rect.strokeColor = 'white';
      });
    });

  }
}

angular.module('paper-demo', ['paper-service'])
  .directive('paper', paperDir);
