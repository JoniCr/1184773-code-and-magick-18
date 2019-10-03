'use strict';

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

function getRandomElmFromArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

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

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomElmFromArr(COAT_COLORS);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomElmFromArr(EYES_COLORS);
});

fireball.addEventListener('click', function () {
  fireball.style.backgroundColor = getRandomElmFromArr(FIREBALL_COLORS);
});
