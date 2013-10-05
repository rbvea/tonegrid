var app = angular.module('paper-service', []);

app.factory('paper', function() {

  var p = {};

  p.rects = {};
  var coords = []; 

  for (var i = 0; i < 16; i++) {
    p.rects[i] = new Array();
    coords.push(i * 60);
  }

  p.init = function(elm) {
    paper.setup(elm);
    paper.install(p);

    var size = new paper.Size(50, 50);
    // var s = [0, 60, 120, 180];
    var center = new paper.Point(115, 115); 

    var x = 0;
    var y = 0;
    angular.forEach(coords, function(x, i) {
      angular.forEach(coords, function(y, j) {
        var rect = new paper.Path.Rectangle(new paper.Point(x, y), size);
        // p.fillColor = 'black';
        var black = new paper.GradientStop(new paper.Color('black'), 0);
        var grey = new paper.GradientStop(new paper.Color('grey'), 0);
        var gradient = new paper.Gradient([grey, black], true);   
        var gradColor;
        switch(true) {
          case x < center.x && y < center.y: //topLeft
            gradColor= new paper.Color(gradient, center, new paper.Point(0, 0)); 
            break;
          case x > center.x && y < center.y: //topRight
            gradColor= new paper.Color(gradient, center, new paper.Point(230, 0));
            break;
          case x < center.x && y > center.y: //bottomLeft
            gradColor= new paper.Color(gradient, center, new paper.Point(0, 230));
            break;
          case x > center.x && y > center.y: //bottomRight
            gradColor= new paper.Color(gradient, center, new paper.Point(230, 230));
            break;
        }
        rect.fillColor = gradColor;
        
        rect.onMouseDown = function(e) {
          e.target.data.selected = !e.target.data.selected;
          e.target.fillColor = (e.target.data.selected) ? 'white' : 'black';
          // angular.element(p).trigger('tonegrid.Click', e.target);
        }

        rect.data.selected = false;

        p.rects[i % 16].push(rect);
      });
    });
        
    var viewSize = new paper.Size(960, 960);
    paper.view.viewSize = viewSize;
    paper.view.draw();
  } 

  return p;
});

