var app = angular.module('paper-service', []);

app.factory('paper', function() {
  var p = {};

  var rects_arr = {};
  p.rects = {};
  var coords = []; 

  for (var i = 0; i < 16; i++) {
    rects_arr[i] = new Array(); 
    coords.push(i * 60);
  }

  p.init = function(elm) {
    paper.setup(elm);
    paper.install(p);
   
    var size = new paper.Size(50, 50);
    var center = new paper.Point(115, 115); 

    for(var x = 0; x < 960; x += 60) {
      for(var y = 0; y < 960; y += 60) {
        var rect = new paper.Path.Rectangle(new paper.Point(x, y), size);
        rect.fillColor = 'black';
        
        rect.onMouseDown = function(e) {
          e.target.data.selected = !e.target.data.selected;
          e.target.fillColor = (e.target.data.selected) ? 'white' : 'black';
          // angular.element(p).trigger('tonegrid.Click', e.target);
        }
        rect.data.selected = false;
        rects_arr[(x / 60) % 16].push(rect);
      }
    }

    angular.forEach(rects_arr, function(arr, i){
      p.rects[i] = new paper.Group(arr);
    });

    var viewSize = new paper.Size(960, 960);
    paper.view.viewSize = viewSize;
    paper.view.draw();
 } 
  return p;
});
