'use strict';

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

var NUMBER_OF_WIZARDS = 4;

var getRandomInt = function (min, max) {
  var randomInt = Math.round(Math.random() * (max - min));
  return randomInt;
};

var deleteHiddenClass = function (elementClass) {
  var setupBlock = document.querySelector('.' + elementClass);
  setupBlock.classList.remove('hidden');
};

var getName = function (firstName, lastName) {
  var name = firstName[getRandomInt(0, firstName.length - 1)] + ' ' + lastName[getRandomInt(0, lastName.length - 1)];
  return name;
};

var getRandomElementFromArray = function (someArray) {
  var RandomElementFromArray = someArray[getRandomInt(0, someArray.length - 1)];
  return RandomElementFromArray;
};

var getWizardDocumentFragment = function (numberOfWizard) {

  var wizardDocumentFragment = new DocumentFragment();

  for (var i = 0; i < numberOfWizard; i++) {
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

var openCharacterWindowOnClickSetupOpen = function () {
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupOpenClickHandler = function () {
    setup.classList.remove('hidden');
    closeCharacterWindowOnKeydownEsc();
  };
  setupOpen.addEventListener('click', setupOpenClickHandler);
};

var closeCharacterWindowOnClickSetupOpen = function () {
  var setupClose = document.querySelector('.setup-close');
  var setup = document.querySelector('.setup');
  var setupCloseClickHandler = function () {
    setup.classList.add('hidden');
  };
  setupClose.addEventListener('click', setupCloseClickHandler);
};

var setElementTabIndexByClass = function (classElement, tabIndex) {
  var element = document.querySelector('.' + classElement);
  element.tabIndex = tabIndex;
};

var openCharacterWindowOnKeydownEnter = function () {
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setup = document.querySelector('.setup');
  var setupOpenIconKeydownEnterHandler = function (evt) {
    if (evt.keyCode === 13) {
      setup.classList.remove('hidden');
      closeCharacterWindowOnKeydownEsc();
    }
  };
  setupOpenIcon.addEventListener('keydown', setupOpenIconKeydownEnterHandler);
};

var closeCharacterWindowOnKeydownEsc = function () {
  var setup = document.querySelector('.setup');
  var setupCloseIconKeydownEnterHandler = function (evt) {
    if (evt.keyCode === 27) {
      setup.classList.add('hidden');
      document.removeEventListener('keydown', setupCloseIconKeydownEnterHandler);
      console.log('test');
    }
  };
  document.addEventListener('keydown', setupCloseIconKeydownEnterHandler);
};

insertDocumentFragment(getWizardDocumentFragment(NUMBER_OF_WIZARDS), 'setup-similar-list');

deleteHiddenClass('setup-similar');

openCharacterWindowOnClickSetupOpen();

closeCharacterWindowOnClickSetupOpen();

setElementTabIndexByClass('setup-open-icon', 0);

openCharacterWindowOnKeydownEnter();
