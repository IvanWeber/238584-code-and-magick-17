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

var WIZARD_COAT_COLOR_SELECTION = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var WIZARD_EYES_COLOR_SELECTION = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var WIZARD_FIREBALL_COLOR_SELECTION = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',

];

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

var closeCharacterWindowOnClickSetupClose = function () {
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

var openCharacterWindowOnKeydownEnterSetupOpen = function () {
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
  var setupCloseIconKeydownEscHandler = function (evt) {
    if (evt.keyCode === 27) {
      setup.classList.add('hidden');
      document.removeEventListener('keydown', setupCloseIconKeydownEscHandler);
    }
  };
  document.addEventListener('keydown', setupCloseIconKeydownEscHandler);
};

var stopPropagationOfKeydownEscOnFocusOnUserName = function () {
  var setupUserName = document.querySelector('.setup-user-name');
  var setupUserNameKeydownEscHandler = function (evt) {
    if (evt.keyCode === 27) {
      evt.stopPropagation();
    }
  };
  setupUserName.addEventListener('keydown', setupUserNameKeydownEscHandler);
};

var closeCharacterWindowOnKeydownEnterSetupClose = function () {
  var setupClose = document.querySelector('.setup-close');
  var setup = document.querySelector('.setup');
  var setupOpenIconKeydownEnterHandler = function (evt) {
    if (evt.keyCode === 13) {
      setup.classList.add('hidden');
      closeCharacterWindowOnKeydownEsc();
    }
  };
  setupClose.addEventListener('keydown', setupOpenIconKeydownEnterHandler);
};

var changeColorOfWizardCoatOnClick = function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardCoatClickHandler = function () {
    var wizardCoatInput = document.querySelector('input[name="coat-color"]');
    for (var i = 0; i < WIZARD_COAT_COLOR_SELECTION.length; i++) {
      if ((WIZARD_COAT_COLOR_SELECTION[i] === wizardCoat.style.fill || wizardCoat.style.fill === undefined) && wizardCoat.style.fill !== WIZARD_COAT_COLOR_SELECTION[WIZARD_COAT_COLOR_SELECTION.length - 1]) {
        wizardCoat.style.fill = WIZARD_COAT_COLOR_SELECTION[i + 1];
        wizardCoatInput.value = WIZARD_COAT_COLOR_SELECTION[i + 1];
        break;
      }
      if ((WIZARD_COAT_COLOR_SELECTION[i] === wizardCoat.style.fill || wizardCoat.style.fill === undefined) && wizardCoat.style.fill === WIZARD_COAT_COLOR_SELECTION[WIZARD_COAT_COLOR_SELECTION.length - 1]) {
        wizardCoat.style.fill = WIZARD_COAT_COLOR_SELECTION[0];
        wizardCoatInput.value = WIZARD_COAT_COLOR_SELECTION[i + 1];
        break;
      }
    }
  };
  wizardCoat.addEventListener('click', wizardCoatClickHandler);
};

var changeColorOfWizardEyesOnClick = function () {
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardEyesClickHandler = function () {
    var eyesColorInput = document.querySelector('input[name="eyes-color"]');
    for (var i = 0; i < WIZARD_EYES_COLOR_SELECTION.length; i++) {
      if ((WIZARD_EYES_COLOR_SELECTION[i] === wizardEyes.style.fill || wizardEyes.style.fill === undefined || wizardEyes.style.fill === '') && wizardEyes.style.fill !== WIZARD_EYES_COLOR_SELECTION[WIZARD_EYES_COLOR_SELECTION.length - 1]) {
        wizardEyes.style.fill = WIZARD_EYES_COLOR_SELECTION[i + 1];
        eyesColorInput.value = WIZARD_EYES_COLOR_SELECTION[i + 1];
        break;
      }
      if ((WIZARD_EYES_COLOR_SELECTION[i] === wizardEyes.style.fill || wizardEyes.style.fill === undefined || wizardEyes.style.fill === '') && wizardEyes.style.fill === WIZARD_EYES_COLOR_SELECTION[WIZARD_EYES_COLOR_SELECTION.length - 1]) {
        wizardEyes.style.fill = WIZARD_EYES_COLOR_SELECTION[0];
        eyesColorInput.value = WIZARD_EYES_COLOR_SELECTION[i + 1];
        break;
      }
    }
  };
  wizardEyes.addEventListener('click', wizardEyesClickHandler);
};

insertDocumentFragment(getWizardDocumentFragment(NUMBER_OF_WIZARDS), 'setup-similar-list');

deleteHiddenClass('setup-similar');

openCharacterWindowOnClickSetupOpen();

closeCharacterWindowOnClickSetupClose();

setElementTabIndexByClass('setup-open-icon', 0);

setElementTabIndexByClass('setup-close', 0);

openCharacterWindowOnKeydownEnterSetupOpen();

stopPropagationOfKeydownEscOnFocusOnUserName();

closeCharacterWindowOnKeydownEnterSetupClose();

changeColorOfWizardCoatOnClick();

changeColorOfWizardEyesOnClick();
