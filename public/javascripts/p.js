var app = angular.module('paper-service', []);

app.factory('paper', function() {

  var p = {};

  var rect_column_1 = new Array();
  var rect_column_2 = new Array();
  var rect_column_3 = new Array();
  var rect_column_4 = new Array();

  p.rects = {
    0: rect_column_1, 
    1: rect_column_2, 
    2: rect_column_3, 
    3: rect_column_4, 
  } 
 
  p.init = function(elm) {
    paper.setup(elm);
    paper.install(p);

    var size = new paper.Size(50, 50);
    var s = [0, 60, 120, 180];
    var center = new paper.Point(115, 115); 

    angular.forEach(s, function(x, i) {
      angular.forEach(s, function(y, j) {

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
          e.target.selected = !e.target.selected;
          e.target.fillColor = (e.target.selected) ? 'white' : 'black';
          // angular.element(p).trigger('tonegrid.Click', e.target);
        }

        p.rects[i % 4].push(rect);
        // p.rects.push(rect);
      });
    });
        
    var viewSize = new paper.Size(230, 230);
    paper.view.viewSize = viewSize;
    paper.view.draw();
  } 

  return p;
});

