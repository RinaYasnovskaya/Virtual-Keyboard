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
    id: 'ArrowUp', valEng: '\u02c4', altEng: ' ', valRus: '\u02c4', altRus: ' ',
  },
  {
    id: 'ShiftRight', valEng: 'Shift', altEng: ' ', valRus: 'Shift', altRus: ' ', type: 'special',
  },
  {
    id: 'ControlLeft', valEng: 'Ctrl', altEng: ' ', valRus: 'Ctrl', altRus: ' ', type: 'special',
  },
  {
    id: 'Lang', valEng: 'EN', altEng: ' ', valRus: 'РУ', altRus: ' ',
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
    capsLock: false,
    shift: false,
    lang: 'eng',
    cursor: 0,
  },

  createKeys(keys, lang) {
    keys.forEach((key) => {
      const keyboardElement = document.createElement('button');

      keyboardElement.setAttribute('type', 'button');
      keyboardElement.classList.add('key');

      switch (key.id) {
        case 'Backspace':
          keyboardElement.classList.add('key_middle');
          keyboardElement.addEventListener('click', () => {
            document.querySelector('.input').value = document.querySelector('.input').value.substring(0, document.querySelector('.input').value.length - 1);
            this.elements.input.focus();
            this.properties.cursor -= 1;
            this.elements.input.selectionStart = this.properties.cursor;
          });
          break;

        case 'CapsLock':
          keyboardElement.classList.add('key_middle');
          keyboardElement.addEventListener('click', () => {
            this.pickCaps();
            keyboardElement.classList.toggle('key_active', this.properties.capsLock);
          });
          break;

        case 'Enter':
          keyboardElement.classList.add('key_middle');
          keyboardElement.addEventListener('click', () => {
            document.querySelector('.input').value += '\n';
            this.elements.input.focus();
            this.properties.cursor += 1;
            this.elements.input.selectionStart = this.properties.cursor;
          });
          break;

        case 'Space':
          keyboardElement.classList.add('key_extra');
          keyboardElement.addEventListener('click', () => {
            document.querySelector('.input').value += ' ';
            this.elements.input.focus();
            this.properties.cursor += 1;
            this.elements.input.selectionStart = this.properties.cursor;
          });
          break;

        case 'ShiftLeft':
          keyboardElement.classList.add('key_middle');
          keyboardElement.addEventListener('click', () => {
            this.clickShift();
            keyboardElement.classList.toggle('key_active', this.properties.shift);
          });
          break;

        case 'ShiftRight':
          keyboardElement.classList.add('key_middle');
          keyboardElement.addEventListener('click', () => {
            this.clickShift();
            keyboardElement.classList.toggle('key_active', this.properties.shift);
          });
          break;

        case 'Tab':
          keyboardElement.addEventListener('click', () => {
            document.querySelector('.input').value += '    ';
            this.elements.input.focus();
            this.properties.cursor += 4;
            this.elements.input.selectionStart = this.properties.cursor;
          });
          break;

        case 'Delete':
          keyboardElement.addEventListener('click', () => {
            let beforeText = document.querySelector('.input').value.slice(0, this.getCursorPosition(document.querySelector('.input')));
            let afterText = document.querySelector('.input').value.slice(this.getCursorPosition(document.querySelector('.input')));
            document.querySelector('.input').value = beforeText + afterText.slice(1);
            this.elements.input.focus();
            this.properties.cursor = this.getCursorPosition(document.querySelector('.input'));
            this.elements.input.selectionStart = this.properties.cursor;
          });
          break;

        case 'Lang':
          keyboardElement.addEventListener('click', () => {
            document.querySelectorAll('.key').forEach((elem) => {
              elem.remove();
            });
            this.changeLang();
          });
          break;

        default:
          keyboardElement.addEventListener('click', () => {
            const keyVal = this.properties.lang === 'eng' ? key.valEng : key.valRus;
            const keyAlt = this.properties.lang === 'eng' ? key.altEng : key.altRus;

            if (key.id === 'ControlLeft' || key.id === 'ControlRight' || key.id === 'AltLeft' || key.id === 'AltRight') {
              document.querySelector('.input').value += '';
            } else if (this.properties.capsLock) {
              document.querySelector('.input').value += keyVal.toUpperCase();
            } else if (this.properties.shift) {
              if (keyAlt !== ' ') document.querySelector('.input').value += keyAlt;
              else document.querySelector('.input').value += keyVal.toUpperCase();
            } else document.querySelector('.input').value += keyVal.toLowerCase();

            this.elements.input.focus();
            this.properties.cursor += 1;
            this.elements.input.selectionStart = this.properties.cursor;
          });
      }

      if (key.type === 'special') {
        keyboardElement.classList.add('key_middle');
      }

      if (lang === 'eng') {
        keyboardElement.setAttribute('value', key.valEng);
        keyboardElement.setAttribute('name', key.altEng);
        keyboardElement.innerHTML = `<span>${key.altEng} <br> ${key.valEng.toUpperCase()}</span>`;
      } else {
        keyboardElement.setAttribute('value', key.valRus);
        keyboardElement.setAttribute('name', key.altRus);
        keyboardElement.innerHTML = `<span>${key.altRus} <br> ${key.valRus.toUpperCase()}</span>`;
      }

      keyboardElement.id = key.id;

      this.elements.keysContainer.append(keyboardElement);
    });
  },

  getCursorPosition(ctrl) {
    let CaretPos = this.properties.cursor;
    if (document.selection) {
      let Sel = document.selection.createRange();
      Sel.moveStart('character', -ctrl.value.length);
      CaretPos = Sel.text.length;
    } else if (ctrl.selectionStart || ctrl.selectionStart === '0') {
      CaretPos = ctrl.selectionStart;
    }
    return CaretPos;
  },

  changeLang() {
    if (this.properties.lang === 'eng') this.properties.lang = 'rus';
    else this.properties.lang = 'eng';
    this.createNewState();
    this.saveLang();
  },

  createNewState() {
    document.querySelectorAll('.key').forEach((elem) => {
      elem.remove();
    });
    this.createKeys(KEYS, this.properties.lang);
  },

  saveLang() {
    sessionStorage.setItem('lang', this.properties.lang);
  },
  restoreLang() {
    if (sessionStorage.getItem('lang')) {
      this.properties.lang = sessionStorage.getItem('lang');
    } else this.properties.lang = 'eng';
  },

  clickShift() {
    this.properties.shift = !this.properties.shift;
  },
  pickCaps() {
    this.properties.capsLock = !this.properties.capsLock;
  },

  createBase() {
    this.elements.input = document.createElement('textarea');
    this.elements.section = document.createElement('section');
    this.elements.keysContainer = document.createElement('div');
    this.properties.cursor = this.elements.input.selectionStart;

    this.elements.input.classList.add('input');
    this.elements.input.setAttribute('autofocus', 'true');
    this.elements.section.classList.add('wrapper');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.id = 'keyboard';

    document.body.append(this.elements.input);
    this.elements.section.append(this.elements.keysContainer);
    document.body.append(this.elements.section);

    this.runOnKeys();
  },

  runOnKeys() {
    const pressed = new Set();
    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      const keysDown = document.querySelectorAll('.key');
      keysDown.forEach((key) => {
        if (event.code === key.id) {
          key.classList.add('key_active');
          switch (event.code) {
            case 'Space':
              document.querySelector('.input').value += ' ';
              break;
            case 'Backspace':
              document.querySelector('.input').value = document.querySelector('.input').value.substring(0, document.querySelector('.input').value.length - 1);
              break;
            case 'CapsLock':
              this.pickCaps();
              break;
            case 'Enter':
              document.querySelector('.input').value += '\n';
              break;
            case 'ShiftLeft':
              this.clickShift();
              break;
            case 'ShiftRight':
              this.clickShift();
              break;
            case 'Tab':
              document.querySelector('.input').value += '    ';
              break;
            default:
              if (event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'AltLeft' || event.code === 'AltRight') {
                document.querySelector('.input').value += '';
              } else if (this.properties.capsLock) {
                document.querySelector('.input').value += key.value.toUpperCase();
              } else if (this.properties.shift) {
                if (key.name !== ' ') document.querySelector('.input').value += key.name;
                else document.querySelector('.input').value += key.value.toUpperCase();
              } else document.querySelector('.input').value += key.value.toLowerCase();
          }
        }
      });

      pressed.add(event.code);
      if (pressed.has('ShiftLeft') && pressed.has('ControlLeft')) KEYBOARD.changeLang();
    });
    document.addEventListener('keyup', (event) => {
      const keysDown = document.querySelectorAll('.key');
      keysDown.forEach((key) => {
        if (event.code === key.id) {
          if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
            this.clickShift();
            key.classList.toggle('key_active', this.properties.shift);
          } else if (event.code === 'CapsLock') {
            key.classList.toggle('key_active', this.properties.capsLock);
          } else key.classList.remove('key_active');
        }
      });
      pressed.delete(event.code);
    });
  },
};

window.onload = () => {
  KEYBOARD.createBase();
  KEYBOARD.restoreLang();
  KEYBOARD.createKeys(KEYS, KEYBOARD.properties.lang);
  KEYBOARD.elements.keys = KEYBOARD.elements.keysContainer.querySelectorAll('.key');
};


// TODO: refactoring
