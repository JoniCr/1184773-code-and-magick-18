'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');


var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardList = document.querySelector('.setup-similar-list');
var wizardsNumber = 4;
var getRandomElmFromArr = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getRandomName = function (names, lastnames) {
  return getRandomElmFromArr(names) + ' ' + getRandomElmFromArr(lastnames);

};

var getRandomWizard = function (name, coatColor, eyesColor) {
  var wizard = {
    name: name,
    coatColor: coatColor,
    eyesColor: eyesColor
  };
  return wizard;
};

var wizards = [];
var getWizards = function (wizardsAmount) {
  for (var i = 0; i < wizardsAmount; i++) {
    wizards[i] = getRandomWizard(getRandomName(NAMES, LAST_NAMES), getRandomElmFromArr(COAT_COLORS), getRandomElmFromArr(EYES_COLORS));
  }
  return wizards;
};
wizards = getWizards(wizardsNumber);

var addWizards = function (wizardsAmount) {
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardFragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsAmount; i++) {
    var similarWizard = template.cloneNode(true);
    similarWizard.querySelector('.setup-similar-label').textContent = wizards[i].name;
    similarWizard.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    similarWizard.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    wizardFragment.append(similarWizard);
  }

  wizardList.append(wizardFragment);
};

addWizards(wizardsNumber);
