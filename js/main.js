$(document).ready( function(){

  //Get the canvas & context
  var c = $('#respondCanvas');
  var ct = c.get(0).getContext('2d');
  var container = $(c).parent();

  //Run function when browser  resize
  $(window).resize( respondCanvas );

  function respondCanvas(){
    c.attr('width', $(container).width() ); //max width
    c.attr('height', $(container).width() ); //set the heigh to the width

    //Redraw & reposition content
    var x = c.width();
    var y = c.height();

}

//Initial call
respondCanvas();
});

// Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('.work-content', {
  duration: 800,
  delay: 400,
  distance: '1px',
  mobile: true,
  scale: 0.999
});


sr.reveal('.footer-icon', {
  duration: 500,
  delay: 500,
  distance: '3px',
  mobile: true,
  scale: 0.98
}, 150);

// Animate CSS
setTimeout(function () {
    $('.banner-content').show().addClass('animated fadeIn');}, 650
);

$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd'
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function')
        callback();
      }
    );

    return this;
  }
});

// Sroll to SECTION
// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});
