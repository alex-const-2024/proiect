
$(document).ready(function () {
  $('.mobile-dropdown').show();
  $('.hamburger').click(function () {
    if ($('header').hasClass('open')) {
      $('.mobile-dropdown').slideUp(function () {
        $('header').removeClass('open');
      });
    } else {
      $('header').addClass('open');
      $('.mobile-dropdown').slideDown();
    }
  });

  $('.mobile-dropdown li').click(function () {
    if ($(this).hasClass('selected')) {
      $('.arrow').removeClass('rotated');
      $('.submenu-dropdown').slideUp(() => {
        $(this).removeClass('selected');
      });
    } else {
      $(this).addClass('selected');
      $('.arrow').addClass('rotated');
      $('.submenu-dropdown').slideDown();
    }
  });
});