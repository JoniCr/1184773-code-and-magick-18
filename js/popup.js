'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireball = document.querySelector('.setup-fireball-wrap');
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var upload = document.querySelector('.upload');
  var POSITION_DIALOG_Y = '80px';
  var POSITION_DIALOG_X = '50%';


  function onPopupEscPress(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  }

  function openPopup() {
    setup.classList.remove('hidden');
  }

  function closePopup() {
    setup.classList.add('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  function onWizardCoatClick() {
    var currentColor = window.getRandomElmFromArr(COAT_COLORS);
    wizardCoat.style.fill = currentColor;
    document.querySelector('input[name="coat-color"]').value = currentColor;
  }

  function onWizardEyesClick() {
    var currentColor = window.getRandomElmFromArr(EYES_COLORS);
    wizardEyes.style.fill = currentColor;
    document.querySelector('input[name="eyes-color"]').value = currentColor;
  }

  function onFireballClick() {
    var currentColor = window.getRandomElmFromArr(FIREBALL_COLORS);
    fireball.style.backgroundColor = currentColor;
    document.querySelector('input[name="fireball-color"]').value = currentColor;
  }

  wizardCoat.addEventListener('click', onWizardCoatClick);
  wizardEyes.addEventListener('click', onWizardEyesClick);
  fireball.addEventListener('click', onFireballClick);


  upload.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var coords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: coords.x - moveEvt.clientX,
        y: coords.y - moveEvt.clientY
      };

      coords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (draggedEvt) {
          draggedEvt.preventDefault();
          upload.removeEventListener('click', onClickPreventDefault);
        };
        upload.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  function restartSetupPosition() {
    setup.style.top = POSITION_DIALOG_Y;
    setup.style.left = POSITION_DIALOG_X;
  }

  setupOpen.addEventListener('click', restartSetupPosition);
})();
