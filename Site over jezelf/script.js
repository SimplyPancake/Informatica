//------------------------------------------------------------------------------
//JQuery animatie dinges!!
$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
var i = 0
var ii = 0
var iii = 0

$(window).on('scroll', function(){
  var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

  var scrollPercent = (s / (d - c)) * 100;

  console.clear();
  console.log(scrollPercent);

  if (scrollPercent > 10 && i == 0) {
    i++;
    $('.landing').animateCss('bounceOutUp');
    $(".landing").fadeOut();
  }
  if (scrollPercent < 10 && i == 1) {
    $(".landing").fadeIn();
    $('.landing').animateCss('zoomIn');
    i = 0;
  }

  if (scrollPercent > 13 && ii == 0) {
    ii++;
    $('.text1').animateCss('fadeInDown');
  }
  if (scrollPercent < 13 && ii == 1) {
    ii = 0;
  }

  if (scrollPercent > 60 && iii == 0) {
    iii++;
    $('.text2').animateCss('fadeInDown');
  }
  if (scrollPercent < 60 && iii == 1) {
    iii = 0;
  }
})
