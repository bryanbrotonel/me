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

window.sr = ScrollReveal();
sr.reveal('.work-item', {
  duration: 500,
  distance: '3px',
  mobile: true,
  scale: 0.98
}, 150);

var typed = new Typed(".typed", {
  strings: [
    "I make websites", "I make beautiful websites", "I make clean websites", "I make responsive websites", "I make websites for you"
  ],
  typeSpeed: 40,
  backSpeed: 35,
  startDelay: 1200,
  backDelay: 2500,
  showCursor: false,
  contentType: 'h1',
  smartBackspace: true // Default value
});

$('.fa-2x').hover(function() {
  $(this).animateCss('pulse');
});
