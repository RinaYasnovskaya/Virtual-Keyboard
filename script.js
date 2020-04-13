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
    id: 'Backspace', valEng: 'BACKSPACE', altEng: ' ', valRus: 'BACKSPACE', altRus: ' ', type: 'special',
  },
  {
    id: 'Tab', valEng: 'TAB', altEng: ' ', valRus: 'TAB', altRus: ' ', type: 'special-tab',
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
    id: 'Delete', valEng: 'DEL', altEng: ' ', valRus: 'DEL', altRus: ' ', type: 'special-del',
  },
  {
    id: 'CapsLock', valEng: 'CAPS LOCK', altEng: ' ', valRus: 'CAPS LOCK', altRus: ' ', type: 'special',
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
    id: 'Enter', valEng: 'ENTER', altEng: ' ', valRus: 'ENTER', altRus: ' ', type: 'special',
  },
  {
    id: 'ShiftLeft', valEng: 'SHIFT', altEng: ' ', valRus: 'SHIFT', altRus: ' ', type: 'special',
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
    id: 'ArrowUp', valEng: '\u02c4', altEng: ' ', valRus: '\u02c4', altRus: ' ', type: 'special-arrow',
  },
  {
    id: 'ShiftRight', valEng: 'SHIFT', altEng: ' ', valRus: 'SHIFT', altRus: ' ', type: 'special',
  },
  {
    id: 'ControlLeft', valEng: 'CTRL', altEng: ' ', valRus: 'CTRL', altRus: ' ', type: 'special-ctrl',
  },
  {
    id: 'Meta', valEng: 'WIN', altEng: ' ', valRus: 'WIN', altRus: ' ', type: 'special-win',
  },
  {
    id: 'LANG', valEng: 'ENG', altEng: ' ', valRus: 'RUS', altRus: ' ',
  },
  {
    id: 'AltLeft', valEng: 'ALT', altEng: ' ', valRus: 'ALT', altRus: ' ', type: 'special-alt',
  },
  {
    id: 'Space', valEng: 'space', altEng: ' ', valRus: 'space', altRus: ' ', type: 'special-space',
  },
  {
    id: 'AltRight', valEng: 'ALT', altEng: ' ', valRus: 'ALT', altRus: ' ', type: 'special-alt',
  },
  {
    id: 'ControlRight', valEng: 'CTRL', altEng: ' ', valRus: 'CTRL', altRus: ' ', type: 'special-ctrl',
  },
  {
    id: 'ArrowLeft', valEng: '\u02c2', altEng: ' ', valRus: '\u02c2', altRus: ' ', type: 'special-arrow',
  },
  {
    id: 'ArrowDown', valEng: '\u02c5', altEng: ' ', valRus: '\u02c5', altRus: ' ', type: 'special-arrow',
  },
  {
    id: 'ArrowRight', valEng: '\u02c3', altEng: ' ', valRus: '\u02c3', altRus: ' ', type: 'special-arrow',
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
    animation: true, 
  },
  createKeys(keys, lang) {
    keys.forEach((key) => {
      const keyboardElement = document.createElement('button');
      keyboardElement.setAttribute('type', 'button');
      keyboardElement.classList.add('key');
      if (key.type === 'special') {
        keyboardElement.classList.add('key_middle', 'key-special');
      }
      else if (key.type === 'special-space') {
        keyboardElement.classList.add('key_extra');
      }
      else if (key.type === 'special-ctrl') {
        keyboardElement.classList.add('key_ctrl');
      }
      if (lang === 'eng') {
        keyboardElement.setAttribute('value', key.valEng);
        keyboardElement.setAttribute('name', key.altEng);
        keyboardElement.innerHTML = `<span>${key.altEng} <br> ${key.valEng}</span>`;
      } else {
        keyboardElement.setAttribute('value', key.valRus);
        keyboardElement.setAttribute('name', key.altRus);
        keyboardElement.innerHTML = `<span>${key.altRus} <br> ${key.valRus}</span>`;
      }
      keyboardElement.id = key.id;
      this.elements.keysContainer.append(keyboardElement);
    });
  },
  changeLang() {
    if (this.properties.lang === 'eng') {
      this.properties.lang = 'rus';
    }
    else { 
      this.properties.lang = 'eng';
    }
    this.createNewState();
    this.saveLang();
  },
  createNewState() {
    document.querySelectorAll('.key').forEach((elem) => {
      elem.remove();
    });
    this.createKeys(KEYS, this.properties.lang);
    this.properties.shift = false;
  },
  saveLang() {
    sessionStorage.setItem('lang', this.properties.lang);
  },
  restoreLang() {
    if (sessionStorage.getItem('lang')) {
      this.properties.lang = sessionStorage.getItem('lang');
    } else this.properties.lang = 'eng';
  },
  createBase() {
    const center = document.createElement('div');
    this.elements.input = document.createElement('textarea');
    this.elements.section = document.createElement('section');
    this.elements.keysContainer = document.createElement('div');
    const text = document.createElement('p');
    text.innerText = `Клавиатура создана в операционной системе Windows 
    Для переключения языка комбинация: левыe ctrl + alt `;

    center.classList.add('center-block');
    this.elements.input.classList.add('input');
    this.elements.input.setAttribute('autofocus', 'true');
    this.elements.section.classList.add('wrapper');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.id = 'keyboard';

    center.append(this.elements.input);
    this.elements.section.append(this.elements.keysContainer);
    center.append(this.elements.section);
    center.append(text);
    document.body.append(center);
  },
  keyBackspace() {
    const inpuT = this.elements.input;
    inpuT.value = inpuT.value.substring(0, inpuT.value.length - 1);
    this.elements.input.focus();
  },
  keyDelete() {
    this.elements.input.setRangeText('', this.elements.input.selectionStart, this.elements.input.selectionEnd + 1, 'start');
  },
  switchProp(nameProp) {
    this.properties[`${nameProp}`] = !this.properties[`${nameProp}`];
    this.toUpAndLow();
  },
  enterSpace(value) {
    this.elements.input.value += value;
    this.elements.input.focus();
  },
  clickKeyboard() {
    const pressed = new Set();
    this.elements.keysContainer.addEventListener('mousedown', (event) => {
      this.enterValueOfKeys(event.target.id, event.target.value, event.target.name, event.target.name);
      pressed.add(event.target.id);
      if (pressed.has('AltLeft') && pressed.has('ControlLeft')) {
        this.changeLang();
      }
      if (this.properties.shift) {
        document.getElementById('ShiftLeft').classList.add('key_active');
      } else {
        document.getElementById('ShiftLeft').classList.remove('key_active');
      }
    });
    this.elements.keysContainer.addEventListener('mouseup', (event) => {
      pressed.delete(event.target.id);
    });
  },
  animationButton(keyPress, animationIsTrue) {
    const keyAnim = document.getElementById(`${keyPress}`);
    if (animationIsTrue) {
      keyAnim.style.backgroundColor = '#794a46';
      keyAnim.style.boxShadow = 'none';
      keyAnim.style.color = '#df7861';
      keyAnim.style.transition = 'all 600ms ease';
    } else {
      keyAnim.style.backgroundColor = '';
      keyAnim.style.boxShadow = '';
      keyAnim.style.color = '';
      keyAnim.style.transition = '';
    }
  },
  physicalKeyboard() {
    const pressed = new Set();
    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      this.elements.keys.forEach((key) => {
        if (event.code === key.id) {
          this.animationButton(event.code, this.properties.animation);
          KEYS.forEach((elem) => {
            if (event.code === elem.id) {
                let keyVal = '';
                let keyAlt = '';
                if (this.properties.lang === 'eng') {
                  keyVal = elem.valEng;
                  keyAlt = elem.altEng;
                } else {
                  keyVal = elem.valRus;
                  keyAlt = elem.altRus;
                }
                this.enterValueOfKeys(event.code, keyVal, keyAlt, key.name);
            }
          });
        }
      });
      pressed.add(event.code);
      if (pressed.has('AltLeft') && pressed.has('ControlLeft')) this.changeLang();
    });
    document.addEventListener('keyup', (event) => {
      this.elements.keys.forEach((key) => {
        if (event.code === key.id) {
          this.animationButton(event.code, !this.properties.animation);
          if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
            this.switchProp('shift');
          }
        }
      });
      pressed.delete(event.code);
    });
  },
  enterValueOfKeys(buttonId, keyValue, keyAlt, keyName) {
    if (buttonId === 'Tab') {
      this.enterSpace('    ');
    } else if (buttonId === 'Space' ) {
      this.enterSpace(' ');
    } else if (buttonId === 'Enter') {
      this.enterSpace('\n');
    } else if (buttonId === 'Backspace') {
      this.keyBackspace();
    } else if (buttonId === 'CapsLock') {
      this.switchProp('capsLock');
      document.getElementById(`${buttonId}`).classList.toggle('key_active', this.properties.capsLock);
    } else if (buttonId === 'ShiftLeft' || buttonId === 'ShiftRight') {
      this.switchProp('shift');
    } else if (buttonId === 'Delete') {
      this.keyDelete();
    } else if (buttonId === 'LANG') {
      this.changeLang();
    } else if (!buttonId || buttonId === 'keyboard') {
      this.elements.input.value += '';
    } else {
      if (buttonId === 'ControlLeft' || buttonId === 'ControlRight' || 
      buttonId === 'AltLeft' || buttonId === 'AltRight') {
            this.elements.input.value += '';
          } else if (this.properties.capsLock) {
            this.elements.input.value += keyValue.toUpperCase();
          } else if (this.properties.shift) {
            if (keyName !== ' ') {
              this.elements.input.value += keyAlt;
            }
            else {
              this.elements.input.value += keyValue.toUpperCase();
            }
          } else {
            this.elements.input.value += keyValue;
          }
    }
  },
  toUpAndLow() {
    document.querySelectorAll('.key').forEach((elem) => {
      const elemID = elem.id.slice(0, 3);
      if (elemID === 'Key') {
        if (KEYBOARD.properties.shift || KEYBOARD.properties.capsLock) {
          document.querySelector(`#${elem.id}`).innerHTML = `<span> ${elem.name} <br> ${elem.value.toUpperCase()} </span> `;
        } else {
          document.querySelector(`#${elem.id}`).innerHTML = `<span> ${elem.name} <br> ${elem.value} </span> `;
        }
      }
    });
  },
};
window.onload = () => {
  KEYBOARD.createBase();
  KEYBOARD.restoreLang();
  KEYBOARD.createKeys(KEYS, KEYBOARD.properties.lang);
  KEYBOARD.elements.keys = KEYBOARD.elements.keysContainer.querySelectorAll('.key');
  KEYBOARD.clickKeyboard();
  KEYBOARD.physicalKeyboard();
};
