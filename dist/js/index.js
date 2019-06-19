"use strict";

(function () {
  function navigate() {
    var hash = window.location.hash || '';

    if (hash === '' || hash === '#todo') {
      history.replaceState('', '', '#todo');
      $('.select-items.active').removeClass('active');
      $('[data-nav="#todo"]').addClass('active');
    } else {
      history.replaceState('', '', '#done');
      $('.select-items.active').removeClass('active');
      $('[data-nav="#done"]').addClass('active');
    }
  }

  function init() {
    navigate();
  }

  init();
})();