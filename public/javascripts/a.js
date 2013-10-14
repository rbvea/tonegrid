var paperDir = function($log, paper, timbre) {

  return function(scope, elm, attrs) {
    var p = new paper(elm[0]);

    scope.speed = 0.05; //0.01 is slow, 0.05 is fast;
    scope.time = 0;
    scope.step = 1;
    scope.i = 0;

    view.onFrame = function(event) {
      scope.time += scope.speed;
      if(Math.floor(scope.time) > scope.i){
        scope.i = Math.floor(scope.time);
        scope.step = (scope.step + 1) % p.BOXES;
        scope.$apply();
      }
    }

    var tool = new Tool();

    scope.$watch('step', function(nu, old) {
      if(typeof p.rects[old] != 'undefined') {
        p.rects[old].strokeColor = 'black';
      }
      if(typeof p.rects[nu] != 'undefined') {
        p.rects[nu].strokeColor = 'white';
        angular.forEach(p.rects[nu].children, function(rect, i) {
          rect.selected = rect.data.selected;
          if(rect.data.selected) {
            timbre.play(rect._index % 16);
          }
        });
      }
    });
  }
}

angular.module('paper-demo', ['paper-service', 'audio'])
  .directive('paper', paperDir);
