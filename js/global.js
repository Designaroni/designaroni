---
---

function fadeImg(el) {
  $(el).delay(100).fadeIn(300);
}
function scrollCheck() {
  console.log($(document).scrollTop())
  if ($(document).scrollTop() >= 50) {
    $('html').addClass('scrolled');
  } else {
    $('html').removeClass('scrolled');
  }
}
// function leadImgHeight(el) {
//   var ratioHeight = $(window).width() * (9/26);
//   $(el).css('height', ratioHeight);
// }
$(window).on('resize', function() {
  //$('.leadImage').removeAttr('style');
});
$(document).ready( function() {
  $('{{ site.headingEls }}').each( function() {
    $(this).addClass('{{ site.fontSans }}');
  })
  // $('.post-group .post-title').succinct({
  //   size: 45,
  //   ignore: false
  // });
  $('.post-group .post-subtitle').succinct({
    size: 55,
    ignore: true
  });
})
$(document).scroll(function() {
  scrollCheck();
});
$(window).load(function() {
  $('body').removeClass('preload');
  $('html').addClass('preloaded');
});
