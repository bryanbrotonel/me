// Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('.work-item', {
  duration: 500,
  delay: 500,
  distance: '3px',
  mobile: true,
  scale: 0.98
}, 150);

sr.reveal('.about-icon', {
  duration: 500,
  delay: 500,
  distance: '3px',
  mobile: true,
  scale: 0.98
}, 150);

// Typed JS
var typed = new Typed(".typed", {
  strings: [
    "<b>I build websites", "I build <b>beautiful</b> websites", "I build <b>clean</b> websites", "I build <b>responsive</b> websites", "I build websites for <b>you</b> ^1250 <span class='ec ec-yellow-heart'></span>"

  ],
  typeSpeed: 30,
  backSpeed: 30,
  startDelay: 1000,
  backDelay: 1500,
  showCursor: false,
  smartBackspace: true
});

// Animate CSS
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

$('.fa-2x').hover(function() {
  $(this).animateCss('pulse');
});

$('.banner-arrow').hover(function() {
  $(this).animateCss('bounce');
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
