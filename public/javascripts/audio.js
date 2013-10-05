var audio = angular.module("audio", []);

audio.factory('timbre', function() {
  var t = {};

  var notes = [880.00, 739.99, 659.26, 587.33, 493.88, 440.00, 369.99, 293.66, 246.94, 220.00, 185.00, 164.81, 146.83, 123.47, 110.00]
  // var notes = [246, 293, 369, 587].reverse();
  var synth = T("OscGen", {wave:"saw", mul:0.25}).play();

  t.play = function(i) {
    synth.noteOnWithFreq(notes[i], 100);
  }
  return t;

});


