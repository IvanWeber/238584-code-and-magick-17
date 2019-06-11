'use strict';

var getRandomInt = function (min, max) {
  var randomInt = Math.round(Math.random() * (max - min));
  return randomInt;
};

var deleteHiddenClass = function (elementClass) {
  var setupBlock = document.querySelector('.' + elementClass);
  setupBlock.classList.remove('hidden');
};

deleteHiddenClass('setup');

var FIRST_NAME = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var LAST_NAME = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getName = function (firstName, lastName) {
  var name = firstName[getRandomInt(0, firstName.length - 1)] + ' ' + lastName[getRandomInt(0, lastName.length - 1)];
  return name;
};

var getRandomElementFromArray = function (someArray) {
  var RandomElementFromArray = someArray[getRandomInt(0, someArray.length - 1)];
  return RandomElementFromArray;
};

var name = getName(FIRST_NAME, LAST_NAME);
var coatColor = getRandomElementFromArray(COAT_COLOR);
var eyesColor = getRandomElementFromArray(EYES_COLOR);

var getWizardDocumentFragment = function () {

  var wizardDocumentFragment = new DocumentFragment();

  for (var i = 0; i <= 3; i++) {
    var template = document.querySelector('#similar-wizard-template').cloneNode(true);
    var templateContent = template.content;
    templateContent.querySelector('.setup-similar-label').textContent = getName(FIRST_NAME, LAST_NAME);
    templateContent.querySelector('.wizard-coat').setAttribute('fill', getRandomElementFromArray(COAT_COLOR));
    templateContent.querySelector('.wizard-eyes').setAttribute('fill', getRandomElementFromArray(EYES_COLOR));
    wizardDocumentFragment.appendChild(templateContent);
  }
  return wizardDocumentFragment;
};

var insertDocumentFragment = function (DocumentFragment, parentClass) {
  var section = document.querySelector('.' + parentClass);
  section.appendChild(DocumentFragment);
};

insertDocumentFragment(getWizardDocumentFragment(), 'setup-similar-list');

deleteHiddenClass('setup-similar');
// console.log(name);
// console.log(coatColor);
// console.log(eyesColor);
