function fadeIn(el) {
  $(el).fadeIn(1000);
}
function leadImgHeight(el) {
  var ratioHeight = $(window).width() * (9/26);
  $(el).css('height', ratioHeight);
}
$(window).on('resize', function() {
  $('.leadImage').removeAttr('style');
});
