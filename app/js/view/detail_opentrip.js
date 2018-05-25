
$(document).ready(function(){
  var parents = $('.detail-container')
  var pos = $('.op-detail__price').offset().left

  $(".op-detail__price").stick_in_parent({
    parent : parents,
    offset_top : 80
  }).on("sticky_kit:stick", function(e) {
    e.target.style.left = pos + 'px'
    console.log(e.target.style)
  }).on("sticky_kit:unstick", function(e) {
    e.target.style.left = 0 + 'px'
  });
})
