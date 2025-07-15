// Floating Action Buttons Frontend Script
document.addEventListener("DOMContentLoaded", function () {
  // Animate on scroll (for future enhancements)
  // All button and icon animations use CSS. This JS can be extended for scroll-triggered or custom animation.

  // Optionally, trigger appearance on scroll if you want "on scroll" animation:
  // Example: add a class when scrolled 100px for extra effects.
  /*
    var fabContainer = document.querySelector('.fab-container');
    if (fabContainer) {
        function checkFabInView() {
            if (window.scrollY > 100) {
                fabContainer.classList.add('fab-visible');
            } else {
                fabContainer.classList.remove('fab-visible');
            }
        }
        window.addEventListener('scroll', checkFabInView);
        checkFabInView();
    }
    */

  // Accessibility: Allow tab focus on buttons and show tooltip on focus
  var fabBtns = document.querySelectorAll(".fab-btn[data-tooltip]");
  fabBtns.forEach(function (btn) {
    btn.addEventListener("focus", function () {
      btn.classList.add("fab-tooltip-focus");
    });
    btn.addEventListener("blur", function () {
      btn.classList.remove("fab-tooltip-focus");
    });
  });

  // Optionally, support "close all" or mobile toggler, if you want to add a floating menu.
  // (Not implemented by default for this plugin)
});
