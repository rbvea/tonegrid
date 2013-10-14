var app = angular.module('paper-service', []);

app.factory('paper', function($log) {
  var p = function (elm) {
    paper.install(window);
    paper.setup(elm);
    this.BOXES = 16;
    this.SIZE = 50;
    this.GUTTER = 10;

    var total_size = this.GUTTER + this.SIZE;
    var viewSize = new Size(total_size * this.BOXES, total_size * this.BOXES);

    var rects_arr = new Array(this.BOXES);

    for (var i = 0; i < this.BOXES; i++) {
      rects_arr[i] = new Array();
    }

    var size = new Size(this.SIZE, this.SIZE);

    for(var x = 0; x < this.BOXES; x++) {
      for(var y = 0; y < this.BOXES; y++) {
        var rect = new Path.Rectangle(new paper.Point(x * total_size, y * total_size), size);
        rect.fillColor = 'black';
        rect.onMouseDown = function(e) {
          e.target.data.selected = !e.target.data.selected;
          e.target.fillColor = (e.target.data.selected) ? 'white' : 'black';
          // angular.element(p).trigger('tonegrid.Click', e.target);
        }
        rect.data.selected = false;
        rects_arr[x % this.BOXES].push(rect);
      }
    }

    var rects = []; 
    angular.forEach(rects_arr, function(arr, i){
     rects[i] = new paper.Group(arr);
    });
    this.rects = rects;

    var dimensions = total_size * this.BOXES;
    angular.element("#wrapper").width(dimensions).height(dimensions);
    angular.element(elm).width(dimensions).height(dimensions);
    view.viewSize = viewSize;
    view.draw();
  } 
  return p;
});
