'use strict';

var getRandomInt = function (min, max) {
  var randomInt = Math.round(Math.random() * (max - min));
  return randomInt;
};

var showSetupBlock = function () {
  var setupBlock = document.querySelector('.setup');
  setupBlock.classList.remove('hidden');
};

showSetupBlock();

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

// console.log(name);
// console.log(coatColor);
// console.log(eyesColor);