$(document).ready(function(){
  // Anchor link smooth scrolling using jQuery easing
  $('a.nav-link[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 1)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
  });
  $(window).bind('contextmenu', false);
});
$(window).scroll(function() {
    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 700){
        buynow_open();
    };
});
$(document).mouseleave(function() {
    buynow_open();
});
$(document).bind('keydown', function(e) {
  if(e.ctrlKey && (e.which == 83)) {
    e.preventDefault();
    buynow_open();//alert('Ctrl+S');
    return false;
  }
});

function buynow_open(){
  $("#push_buy_now").slideDown();
  $("#mainsection").css("padding-top","78px");
}
