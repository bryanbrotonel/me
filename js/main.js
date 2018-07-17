// Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('.work-item', {
  duration: 500,
  delay: 250,
  distance: '2px',
  mobile: true,
  scale: 0.98
});

sr.reveal('.footer-icon', {
  duration: 500,
  delay: 500,
  distance: '3px',
  mobile: true,
  scale: 0.98
}, 150);

// // Animate CSS
// $.fn.extend({
//   animateCss: function(animationName, callback) {
//     var animationEnd = (function(el) {
//       var animations = {
//         animation: 'animationend',
//         OAnimation: 'oAnimationEnd',
//         MozAnimation: 'mozAnimationEnd',
//         WebkitAnimation: 'webkitAnimationEnd'
//       };
//
//       for (var t in animations) {
//         if (el.style[t] !== undefined) {
//           return animations[t];
//         }
//       }
//     })(document.createElement('div'));
//
//     this.addClass('animated ' + animationName).one(animationEnd, function() {
//       $(this).removeClass('animated ' + animationName);
//
//       if (typeof callback === 'function')
//         callback();
//       }
//     );
//
//     return this;
//   }
// });
//
// $('.fa-2x').hover(function() {
//   $(this).animateCss('pulse');
// });

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
