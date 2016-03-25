---
---
function fadeImg(el) {
  $(el).delay(100).fadeIn(300);
}
// function leadImgHeight(el) {
//   var ratioHeight = $(window).width() * (9/26);
//   $(el).css('height', ratioHeight);
// }
$(window).on('resize', function() {
  $('.leadImage').removeAttr('style');
});
$(document).ready( function() {
  $('{{ site.headingEls }}').each( function() {
    $(this).addClass('{{ site.fontSans }}');
  })
})
