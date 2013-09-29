var paperDir = function($log, paper) {

  return function(scope, elm, attrs) {
    paper.init(elm[0]);

    scope.step = 1;

    setInterval(function() {
      scope.step = (scope.step + 1) % 4;
      $log.info(scope.step);
    }, 500);

    paper.view.onframe = function(event) {
      angular.foreach(paper.rects, function(r) {
        var stop = r.fillcolor._components[0]._stops[1];
        stop.ramppoint = math.abs(math.sin(event.time)) ;
      });
    }


  }
}

angular.module('paper-demo', ['paper-service'])
  .directive('paper', paperDir);
