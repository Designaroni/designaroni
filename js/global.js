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
  $('h1, h2, h3, h4, h5, h6, .site-header').each( function() {
    $(this).addClass('{{ site.fontSans }}');
  })
})
