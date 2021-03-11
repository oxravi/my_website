$(document).ready(function () {
  $(window).scroll(function () {
    position = $(document).scrollTop();
    if (position > 880) {
      $('.html').animate({ width: '90%' }, 2000);
      $('.css').animate({ width: '85%' }, 2000);
      $('.js').animate({ width: '60%' }, 2000);
      $('.jQuery').animate({ width: '40%' }, 2000);
      $('.boot').animate({ width: '30%' }, 2000);
      $('.corej').animate({ width: '85%' }, 2000);
      $('.advj').animate({ width: '75%' }, 2000);
      $('.spring').animate({ width: '80%' }, 2000);
      $('.angular').animate({ width: '70%' }, 2000);
      $('.react').animate({ width: '85%' }, 2000);
    }
  });
});