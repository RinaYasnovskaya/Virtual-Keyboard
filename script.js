const KEYS = [
  {
    id: 'Backquote', valEng: '`', altEng: '~', valRus: 'ё', altRus: ' ',
  },
  {
    id: 'Digit1', valEng: '1', altEng: '!', valRus: '1', altRus: '!',
  },
  {
    id: 'Digit2', valEng: '2', altEng: '@', valRus: '2', altRus: '"',
  },
  {
    id: 'Digit3', valEng: '3', altEng: '#', valRus: '3', altRus: '№',
  },
  {
    id: 'Digit4', valEng: '4', altEng: '$', valRus: '4', altRus: ';',
  },
  {
    id: 'Digit5', valEng: '5', altEng: '%', valRus: '5', altRus: '%',
  },
  {
    id: 'Digit6', valEng: '6', altEng: '^', valRus: '6', altRus: ':',
  },
  {
    id: 'Digit7', valEng: '7', altEng: '&', valRus: '7', altRus: '?',
  },
  {
    id: 'Digit8', valEng: '8', altEng: '*', valRus: '8', altRus: '*',
  },
  {
    id: 'Digit9', valEng: '9', altEng: '(', valRus: '9', altRus: '(',
  },
  {
    id: 'Digit0', valEng: '0', altEng: ')', valRus: '0', altRus: ')',
  },
  {
    id: 'Minus', valEng: '-', altEng: '_', valRus: '-', altRus: '_',
  },
  {
    id: 'Equal', valEng: '=', altEng: '+', valRus: '=', altRus: '+',
  },
  {
    id: 'Backspace', valEng: 'Backspace', altEng: ' ', valRus: 'Backspace', altRus: ' ', type: 'special',
  },
  {
    id: 'Tab', valEng: 'Tab', altEng: ' ', valRus: 'Tab', altRus: ' ', type: 'special-tab',
  },
  {
    id: 'KeyQ', valEng: 'q', altEng: ' ', valRus: 'й', altRus: ' ',
  },
  {
    id: 'KeyW', valEng: 'w', altEng: ' ', valRus: 'ц', altRus: ' ',
  },
  {
    id: 'KeyE', valEng: 'e', altEng: ' ', valRus: 'у', altRus: ' ',
  },
  {
    id: 'KeyR', valEng: 'r', altEng: ' ', valRus: 'к', altRus: ' ',
  },
  {
    id: 'KeyT', valEng: 't', altEng: ' ', valRus: 'е', altRus: ' ',
  },
  {
    id: 'KeyY', valEng: 'y', altEng: ' ', valRus: 'н', altRus: ' ',
  },
  {
    id: 'KeyU', valEng: 'u', altEng: ' ', valRus: 'г', altRus: ' ',
  },
  {
    id: 'KeyI', valEng: 'i', altEng: ' ', valRus: 'ш', altRus: ' ',
  },
  {
    id: 'KeyO', valEng: 'o', altEng: ' ', valRus: 'щ', altRus: ' ',
  },
  {
    id: 'KeyP', valEng: 'p', altEng: ' ', valRus: 'з', altRus: ' ',
  },
  {
    id: 'BracketLeft', valEng: '[', altEng: '{', valRus: 'х', altRus: ' ',
  },
  {
    id: 'BracketRight', valEng: ']', altEng: '}', valRus: 'ъ', altRus: ' ',
  },
  {
    id: 'Backslash', valEng: '\\', altEng: '|', valRus: '\\', altRus: '/',
  },
  {
    id: 'Delete', valEng: 'Del', altEng: ' ', valRus: 'Del', altRus: ' ',
  },
  {
    id: 'CapsLock', valEng: 'Caps Lock', altEng: ' ', valRus: 'Caps Lock', altRus: ' ', type: 'special',
  },
  {
    id: 'KeyA', valEng: 'a', altEng: ' ', valRus: 'ф', altRus: ' ',
  },
  {
    id: 'KeyS', valEng: 's', altEng: ' ', valRus: 'ы', altRus: ' ',
  },
  {
    id: 'KeyD', valEng: 'd', altEng: ' ', valRus: 'в', altRus: ' ',
  },
  {
    id: 'KeyF', valEng: 'f', altEng: ' ', valRus: 'а', altRus: ' ',
  },
  {
    id: 'KeyG', valEng: 'g', altEng: ' ', valRus: 'п', altRus: ' ',
  },
  {
    id: 'KeyH', valEng: 'h', altEng: ' ', valRus: 'р', altRus: ' ',
  },
  {
    id: 'KeyJ', valEng: 'j', altEng: ' ', valRus: 'о', altRus: ' ',
  },
  {
    id: 'KeyK', valEng: 'k', altEng: ' ', valRus: 'л', altRus: ' ',
  },
  {
    id: 'KeyL', valEng: 'l', altEng: ' ', valRus: 'д', altRus: ' ',
  },
  {
    id: 'Semicolon', valEng: ';', altEng: ':', valRus: 'ж', altRus: ' ',
  },
  {
    id: 'Quote', valEng: '\'', altEng: '"', valRus: 'э', altRus: ' ',
  },
  {
    id: 'Enter', valEng: 'Enter', altEng: ' ', valRus: 'Enter', altRus: ' ', type: 'special',
  },
  {
    id: 'ShiftLeft', valEng: 'Shift', altEng: ' ', valRus: 'Shift', altRus: ' ', type: 'special',
  },
  {
    id: 'KeyZ', valEng: 'z', altEng: ' ', valRus: 'я', altRus: ' ',
  },
  {
    id: 'KeyX', valEng: 'x', altEng: ' ', valRus: 'ч', altRus: ' ',
  },
  {
    id: 'KeyC', valEng: 'c', altEng: ' ', valRus: 'с', altRus: ' ',
  },
  {
    id: 'KeyV', valEng: 'v', altEng: ' ', valRus: 'м', altRus: ' ',
  },
  {
    id: 'KeyB', valEng: 'b', altEng: ' ', valRus: 'и', altRus: ' ',
  },
  {
    id: 'KeyN', valEng: 'n', altEng: ' ', valRus: 'т', altRus: ' ',
  },
  {
    id: 'KeyM', valEng: 'm', altEng: ' ', valRus: 'ь', altRus: ' ',
  },
  {
    id: 'Comma', valEng: ',', altEng: '<', valRus: 'б', altRus: ' ',
  },
  {
    id: 'Period', valEng: '.', altEng: '>', valRus: 'ю', altRus: ' ',
  },
  {
    id: 'Slash', valEng: '/', altEng: '?', valRus: '.', altRus: ',',
  },
  {
    id: 'arrowUp', valEng: '\u02c4', altEng: ' ', valRus: '\u02c4', altRus: ' ',
  },
  {
    id: 'ShiftRight', valEng: 'Shift', altEng: ' ', valRus: 'Shift', altRus: ' ', type: 'special',
  },
  {
    id: 'ControlLeft', valEng: 'Ctrl', altEng: ' ', valRus: 'Ctrl', altRus: ' ', type: 'special',
  },
  {
    id: 'AltLeft', valEng: 'Alt', altEng: ' ', valRus: 'Alt', altRus: ' ', 
  },
  {
    id: 'Space', valEng: 'space', altEng: ' ', valRus: 'space', altRus: ' ', type: 'special-space',
  },
  {
    id: 'AltRight', valEng: 'Alt', altEng: ' ', valRus: 'Alt', altRus: ' ',
  },
  {
    id: 'ControlRight', valEng: 'Ctrl', altEng: ' ', valRus: 'Ctrl', altRus: ' ', type: 'special',
  },
  {
    id: 'ArrowLeft', valEng: '\u02c2', altEng: ' ', valRus: '\u02c2', altRus: ' ',
  },
  {
    id: 'ArrowDown', valEng: '\u02c5', altEng: ' ', valRus: '\u02c5', altRus: ' ',
  },
  {
    id: 'ArrowRight', valEng: '\u02c3', altEng: ' ', valRus: '\u02c3', altRus: ' ',
  },
];
const KEYBOARD = {
  elements: {
    section: null,
    input: null,
    keys: [],
    keysContainer: null,
  },
  properties: {
    value: '',
    capsLock: false,
    shift: false,
    lang: 'eng',
  },
  createBase() {
    this.elements.input = document.createElement('textarea');
    this.elements.section = document.createElement('section');
    this.elements.keysContainer = document.createElement('div');

    this.elements.input.classList.add('input');
    this.elements.section.classList.add('wrapper');
    this.elements.keysContainer.classList.add('keyboard__keys');

    document.body.append(this.elements.input);
    this.elements.section.append(this.elements.keysContainer);
    document.body.append(this.elements.section);
  },
  createKeys(keys) {
    keys.forEach((key) => {
      const keyboardElement = document.createElement('button');

      keyboardElement.setAttribute('type', 'button');
      keyboardElement.classList.add('key');

      if (key.type === 'special') {
        keyboardElement.classList.add('key_middle');
      } else if (key.type === 'special-space') {
        keyboardElement.classList.add('key_extra');
      } else if (key.type === 'special-tab') {
        keyboardElement.classList.add('key_little');
      }

      keyboardElement.innerHTML = `<span>${key.altEng} <br> ${key.valEng}</span>`;
      keyboardElement.id = key.id;

      this.elements.keysContainer.append(keyboardElement);
    });
  },
};

window.onload = () => {
  KEYBOARD.createBase();
  KEYBOARD.createKeys(KEYS);
};
