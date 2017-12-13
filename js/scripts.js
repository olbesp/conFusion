$(document).ready(function() {

  $('#myCarousel').carousel({interval: 2000});

  $('#carousel-button').click(function() {

    if ($(this).children('span').hasClass('fa-pause')) {
      $('#myCarousel').carousel('pause');
      $(this).children('span').removeClass('fa-pause');
      $(this).children('span').addClass('fa-play');
    } else {
      $('#myCarousel').carousel('cycle');
      $(this).children('span').removeClass('fa-play');
      $(this).children('span').addClass('fa-pause');
    }

  });

  // LOGIN LINK
  $('#loginBtn').click(function() {
    $('#loginModal').modal('toggle');
  });

  // RESERVE BUTTON
  $('#reserveBtn').click(function() {
    $('#reserveModal').modal('toggle');
  });

});
