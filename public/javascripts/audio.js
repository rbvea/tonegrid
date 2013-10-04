var audio = angular.module("audio", []);

audio.factory('timbre', function() {
  var t = {};

  var notes = [246, 293, 369, 587].reverse();
  var synth = T("OscGen", {wave:"saw", mul:0.25}).play();

  t.play = function(i) {
    synth.noteOnWithFreq(notes[i], 100);
  }
  return t;

});