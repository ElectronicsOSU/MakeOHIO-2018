console.clear();

$('img').tooltip({
   trigger: 'manual'
});
$(document).ready(function() {
    setTimeout(function(){
    $('img').tooltip('show'); }, 750);
    setTimeout(function(){
    $('img').tooltip('hide'); }, 7000);
});

movingAnimation.create("#knob", {
  type: "rotation",
  kineticFriction: true
});
