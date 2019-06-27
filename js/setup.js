'use strict';
(function () {

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

  var ENTER_KEY_CODE = 13;

  var ESC_KEY_CODE = 27;

  var SETUP_STYLE_TOP_DEFAULT = '80px';

  var SETUP_STYLE_LEFT_DEFAULT = '50%';


  var onError = function (message) {
  };

  var onSuccess = function (data) {
    insertDocumentFragment(getWizardsDocumentFragment(data, NUMBER_OF_WIZARDS), 'setup-similar-list');
  };


  var getRandomInt = function (min, max) {
    var randomInt = Math.round(Math.random() * (max - min));
    return randomInt;
  };

  var getWizardsDocumentFragment = function (wizardsDataArray, numberOfWizards) {

    var wizardsDocumentFragment = new DocumentFragment();

    for (var i = 0; i < numberOfWizards; i++) {
      var randomIndexOfElementToBeDeleted = getRandomInt(0, wizardsDataArray.length - 1);
      var template = document.querySelector('#similar-wizard-template').cloneNode(true);
      var templateContent = template.content;
      templateContent.querySelector('.setup-similar-label').textContent = wizardsDataArray[randomIndexOfElementToBeDeleted].name;
      templateContent.querySelector('.wizard-coat').setAttribute('fill', wizardsDataArray[randomIndexOfElementToBeDeleted].colorCoat);
      templateContent.querySelector('.wizard-eyes').setAttribute('fill', wizardsDataArray[randomIndexOfElementToBeDeleted].colorEyes);
      wizardsDocumentFragment.appendChild(templateContent);
      wizardsDataArray.splice(randomIndexOfElementToBeDeleted, 1);
    }
    return wizardsDocumentFragment;
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

  var insertDocumentFragment = function (DocumentFragment, parentClass) {
    var section = document.querySelector('.' + parentClass);
    section.appendChild(DocumentFragment);
  };

  var initialiseOpeningCharacterWindowOnClickSetupOpen = function () {
    var setupOpen = document.querySelector('.setup-open');
    var setup = document.querySelector('.setup');
    var setupOpenClickHandler = function () {
      var section = document.querySelector('.setup-similar-list');
      while (section.firstChild) {
        section.removeChild(section.firstChild);
      }
      window.load('https://js.dump.academy/code-and-magick/data', onSuccess, onError);
      setup.style.top = SETUP_STYLE_TOP_DEFAULT;
      setup.style.left = SETUP_STYLE_LEFT_DEFAULT;
      setup.classList.remove('hidden');
      initialiseClosingCharacterWindowOnKeydownEsc();
    };
    setupOpen.addEventListener('click', setupOpenClickHandler);
  };

  var initialiseСlosingCharacterWindowOnClickSetupClose = function () {
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

  var initialiseOpeningCharacterWindowOnKeydownEnterSetupOpen = function () {
    var setupOpenIcon = document.querySelector('.setup-open-icon');
    var setup = document.querySelector('.setup');
    var setupOpenIconKeydownEnterHandler = function (evt) {
      var section = document.querySelector('.setup-similar-list');
      while (section.firstChild) {
        section.removeChild(section.firstChild);
      }
      window.load('https://js.dump.academy/code-and-magick/data', onSuccess, onError);
      setup.style.top = SETUP_STYLE_TOP_DEFAULT;
      setup.style.left = SETUP_STYLE_LEFT_DEFAULT;
      if (evt.keyCode === ENTER_KEY_CODE) {
        setup.classList.remove('hidden');
        initialiseClosingCharacterWindowOnKeydownEsc();
      }
    };
    setupOpenIcon.addEventListener('keydown', setupOpenIconKeydownEnterHandler);
  };

  var initialiseClosingCharacterWindowOnKeydownEsc = function () {
    var setup = document.querySelector('.setup');
    var setupCloseIconKeydownEscHandler = function (evt) {
      if (evt.keyCode === ESC_KEY_CODE) {
        setup.classList.add('hidden');
        document.removeEventListener('keydown', setupCloseIconKeydownEscHandler);
      }
    };
    document.addEventListener('keydown', setupCloseIconKeydownEscHandler);
  };

  var initialiseStoppingPropagationOfKeydownEscOnFocusOnUserName = function () {
    var setupUserName = document.querySelector('.setup-user-name');
    var setupUserNameKeydownEscHandler = function (evt) {
      if (evt.keyCode === ESC_KEY_CODE) {
        evt.stopPropagation();
      }
    };
    setupUserName.addEventListener('keydown', setupUserNameKeydownEscHandler);
  };

  var initialiseClosingCharacterWindowOnKeydownEnterSetupClose = function () {
    var setupClose = document.querySelector('.setup-close');
    var setup = document.querySelector('.setup');
    var setupOpenIconKeydownEnterHandler = function (evt) {
      if (evt.keyCode === ENTER_KEY_CODE) {
        setup.classList.add('hidden');
        initialiseClosingCharacterWindowOnKeydownEsc();
      }
    };
    setupClose.addEventListener('keydown', setupOpenIconKeydownEnterHandler);
  };

  var initialiseChangingColorOfWizardCoatOnClick = function () {
    var wizardCoat = document.querySelector('.wizard-coat');
    var wizardCoatClickHandler = function () {
      var wizardCoatInput = document.querySelector('input[name="coat-color"]');
      for (var i = 0; i < WIZARD_COAT_COLOR_SELECTION.length; i++) {
        var isWizardCoatFitsPrevCoatOrIsWizardCoatUndefined = WIZARD_COAT_COLOR_SELECTION[i] === wizardCoat.style.fill || wizardCoat.style.fill === undefined;
        var isWizardCoatNotLastWizardCoat = wizardCoat.style.fill !== WIZARD_COAT_COLOR_SELECTION[WIZARD_COAT_COLOR_SELECTION.length - 1];
        var isWizardCoatLastWizardCoat = wizardCoat.style.fill === WIZARD_COAT_COLOR_SELECTION[WIZARD_COAT_COLOR_SELECTION.length - 1];
        if (isWizardCoatFitsPrevCoatOrIsWizardCoatUndefined && isWizardCoatNotLastWizardCoat) {
          wizardCoat.style.fill = WIZARD_COAT_COLOR_SELECTION[i + 1];
          wizardCoatInput.value = WIZARD_COAT_COLOR_SELECTION[i + 1];
          break;
        }
        if (isWizardCoatFitsPrevCoatOrIsWizardCoatUndefined && isWizardCoatLastWizardCoat) {
          wizardCoat.style.fill = WIZARD_COAT_COLOR_SELECTION[0];
          wizardCoatInput.value = WIZARD_COAT_COLOR_SELECTION[0];
          break;
        }
      }
    };
    wizardCoat.addEventListener('click', wizardCoatClickHandler);
  };

  var initialiseChangingColorOfWizardEyesOnClick = function () {
    var wizardEyes = document.querySelector('.wizard-eyes');
    var wizardEyesClickHandler = function () {
      var wizardEyesColorInput = document.querySelector('input[name="eyes-color"]');
      for (var i = 0; i < WIZARD_EYES_COLOR_SELECTION.length; i++) {
        var isWizardEyesFitsPrevEyesOrIsWizardEyesUndefined = WIZARD_EYES_COLOR_SELECTION[i] === wizardEyes.style.fill || wizardEyes.style.fill === undefined || wizardEyes.style.fill === '';
        var isWizardEyesNotLastWizardEyes = wizardEyes.style.fill !== WIZARD_EYES_COLOR_SELECTION[WIZARD_EYES_COLOR_SELECTION.length - 1];
        var isWizardEyesLastWizardEyes = wizardEyes.style.fill === WIZARD_EYES_COLOR_SELECTION[WIZARD_EYES_COLOR_SELECTION.length - 1];
        if (isWizardEyesFitsPrevEyesOrIsWizardEyesUndefined && isWizardEyesNotLastWizardEyes) {
          wizardEyes.style.fill = WIZARD_EYES_COLOR_SELECTION[i + 1];
          wizardEyesColorInput.value = WIZARD_EYES_COLOR_SELECTION[i + 1];
          break;
        }
        if (isWizardEyesFitsPrevEyesOrIsWizardEyesUndefined && isWizardEyesLastWizardEyes) {
          wizardEyes.style.fill = WIZARD_EYES_COLOR_SELECTION[0];
          wizardEyesColorInput.value = WIZARD_EYES_COLOR_SELECTION[0];
          break;
        }
      }
    };
    wizardEyes.addEventListener('click', wizardEyesClickHandler);
  };

  var initialiseChangingColorOfWizardFireballOnClick = function () {
    var wizardFireball = document.querySelector('.setup-fireball-wrap');
    var wizardFireballClickHandler = function () {
      var wizardFireballColorInput = document.querySelector('input[name="fireball-color"]');
      for (var i = 0; i < WIZARD_FIREBALL_COLOR_SELECTION.length; i++) {
        var isWizardFireballFitsPrevFireballOrIsWizardFireballUndefined = WIZARD_FIREBALL_COLOR_SELECTION[i] === wizardFireballColorInput.value || wizardFireballColorInput.value === undefined || wizardFireballColorInput.value === '';
        var isWizardFireballNotLastWizardFireball = wizardFireballColorInput.value !== WIZARD_FIREBALL_COLOR_SELECTION[WIZARD_FIREBALL_COLOR_SELECTION.length - 1];
        var isWizardFireballLastWizardFireball = wizardFireballColorInput.value === WIZARD_FIREBALL_COLOR_SELECTION[WIZARD_FIREBALL_COLOR_SELECTION.length - 1];
        if (isWizardFireballFitsPrevFireballOrIsWizardFireballUndefined && isWizardFireballNotLastWizardFireball) {
          wizardFireball.style.backgroundColor = WIZARD_FIREBALL_COLOR_SELECTION[i + 1];
          wizardFireballColorInput.value = WIZARD_FIREBALL_COLOR_SELECTION[i + 1];
          break;
        }
        if (isWizardFireballFitsPrevFireballOrIsWizardFireballUndefined && isWizardFireballLastWizardFireball) {
          wizardFireball.style.backgroundColor = WIZARD_FIREBALL_COLOR_SELECTION[0];
          wizardFireballColorInput.value = WIZARD_FIREBALL_COLOR_SELECTION[0];
          break;
        }
      }
    };
    wizardFireball.addEventListener('click', wizardFireballClickHandler);
  };

  // insertDocumentFragment(getWizardDocumentFragment(NUMBER_OF_WIZARDS), 'setup-similar-list');

  deleteHiddenClass('setup-similar');

  initialiseOpeningCharacterWindowOnClickSetupOpen();

  initialiseСlosingCharacterWindowOnClickSetupClose();

  setElementTabIndexByClass('setup-open-icon', 0);

  setElementTabIndexByClass('setup-close', 0);

  initialiseOpeningCharacterWindowOnKeydownEnterSetupOpen();

  initialiseStoppingPropagationOfKeydownEscOnFocusOnUserName();

  initialiseClosingCharacterWindowOnKeydownEnterSetupClose();

  initialiseChangingColorOfWizardCoatOnClick();

  initialiseChangingColorOfWizardEyesOnClick();

  initialiseChangingColorOfWizardFireballOnClick();

})();
