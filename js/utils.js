'use strict';

(function () {

  window.getRandomElmFromArr = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  window.getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };


})();
