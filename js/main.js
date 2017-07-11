var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 25,
  backSpeed: 60,
  showCursor: false,
  smartBackspace: true,
  backDelay: 800,
  onComplete: (self) => {
    document.getElementById("typed").onclick = function() {
      $('#typed').animateCss('pulse')
    };
  }
});



$.fn.extend({
  animateCss: function(animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
    });
    return this;
  }
});
