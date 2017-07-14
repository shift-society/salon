$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });

  window.onresize = function () {
    var height = document.getElementById("art-meta").offsetHeight;
    var width = document.getElementById("art-meta").offsetWidth;        
    var nav = document.getElementById("nav");
    if (width * height > 1000000) {
      // On big screens, navigation is always sticky
      function stick() {             
        nav.className = document.body.scrollTop > height ? "sticky" : "";
      }
      nav.style.opacity = 1;
      window.onscroll	= stick;
      stick();
    } else {
      // On small screens, navigation appears on scroll up and then disappears
      var lastTop = 0;
      var hideTimer = -1;
      function update() { 
        nav.style.opacity = document.body.scrollTop <= height ? 1 : 0;
        nav.className = document.body.scrollTop <= height ? "" : "sticky";
        
        if (document.body.scrollTop < lastTop) {
          nav.style.opacity = 1;
          clearTimeout(hideTimer);
          hideTimer = setTimeout(function() { 
            if (nav.className == "sticky") nav.style.opacity = 0;
          }, 3000);
        }
        lastTop = document.body.scrollTop;
      }
      nav.style.opacity = (document.body.scrollTop < lastTop) ? 1 : 0;
      window.onscroll	= update;
      update();
    }
  }
  window.onresize();

});
