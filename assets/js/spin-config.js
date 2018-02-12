console.clear();

$('img').tooltip({
   trigger: 'manual'
});
$(document).ready(function() {
    $('img').tooltip('show');
    setTimeout(function(){
    $('img').tooltip('hide'); }, 7000);
});

movingAnimation.create("#knob", {
  type: "rotation",
  kineticFriction: true
});
