var paperDir = function($log, paper, timbre) {

  return function(scope, elm, attrs) {
    paper.init(elm[0]);

    scope.speed = 0.05; //0.01 is slow, 0.05 is fast;

    scope.time = 0;
    scope.step = 1;
    scope.i = 0;

    paper.view.onFrame = function(event) {
      scope.time += scope.speed;
      if(Math.floor(scope.time) > scope.i){
        scope.i = Math.floor(scope.time);
        scope.step = (scope.step + 1) % 4;
        scope.$apply();
      }
    }

    var tool = new paper.Tool();

    scope.$watch('step', function(nu, old) {
      angular.forEach(paper.rects[old], function(rect) {
        rect.strokeColor = 'black';
      });
      angular.forEach(paper.rects[nu], function(rect) {
        rect.strokeColor = 'white';
        if(rect.selected) {
          timbre.play(rect._index % 4);
        }
      });
    });
  }
}

angular.module('paper-demo', ['paper-service', 'audio'])
  .directive('paper', paperDir);
