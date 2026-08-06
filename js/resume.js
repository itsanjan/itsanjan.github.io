(function () {
  "use strict";

  // Smooth scrolling for in-page nav links
  var scrollTriggers = document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])');
  scrollTriggers.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var hash = this.hash;
      if (!hash) {
        return;
      }
      var target = document.querySelector(hash);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Closes responsive menu when a scroll trigger link is clicked
  var navbarCollapseEl = document.querySelector(".navbar-collapse");
  if (navbarCollapseEl && window.bootstrap) {
    scrollTriggers.forEach(function (link) {
      link.addEventListener("click", function () {
        var collapse = window.bootstrap.Collapse.getOrCreateInstance(navbarCollapseEl, { toggle: false });
        collapse.hide();
      });
    });
  }

})();
