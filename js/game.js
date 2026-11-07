// ===== МАППИНГ ФИЗИЧЕСКИХ КЛАВИШ НА РУССКИЕ БУКВЫ =====
const CODE_TO_RU = {
  'Backquote': 'ё', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3',
  'Digit4': '4', 'Digit5': '5', 'Digit6': '6', 'Digit7': '7',
  'Digit8': '8', 'Digit9': '9', 'Digit0': '0', 'Minus': '-',
  'Equal': '=',
  'KeyQ': 'й', 'KeyW': 'ц', 'KeyE': 'у', 'KeyR': 'к',
  'KeyT': 'е', 'KeyY': 'н', 'KeyU': 'г', 'KeyI': 'ш',
  'KeyO': 'щ', 'KeyP': 'з', 'BracketLeft': 'х', 'BracketRight': 'ъ',
  'Backslash': 'ъ',
  'KeyA': 'ф', 'KeyS': 'ы', 'KeyD': 'в', 'KeyF': 'а',
  'KeyG': 'п', 'KeyH': 'р', 'KeyJ': 'о', 'KeyK': 'л',
  'KeyL': 'д', 'Semicolon': 'ж', 'Quote': 'э',
  'KeyZ': 'я', 'KeyX': 'ч', 'KeyC': 'с', 'KeyV': 'м',
  'KeyB': 'и', 'KeyN': 'т', 'KeyM': 'ь', 'Comma': 'б',
  'Period': 'ю', 'Slash': '.',
  'Space': ' ',
};

// Обратный маппинг: буква → code
const RU_TO_CODE = {};
Object.entries(CODE_TO_RU).forEach(([code, ch]) => {
  if (!RU_TO_CODE[ch]) RU_TO_CODE[ch] = code;
});

// ===== СТРУКТУРА КЛАВИАТУРЫ (ряды) =====
const KEYBOARD_LAYOUT = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '⌫'],
  ['⇥', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
  ['⇪', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '↵'],
  ['⇧', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '.', '/', '⇧'],
  ['Space'],
];

// ===== ПОДСКАЗКА ПО ПЕРЕКЛЮЧЕНИЮ РАСКЛАДКИ =====
function getLayoutSwitchHint() {
  const ua = navigator.userAgent;
  if (/Mac|iPhone|iPad/i.test(ua)) return '⌘ + Space';
  return 'Alt + Shift';
}

// ===== КЛАСС ИГРЫ =====
class TypingGame {
  constructor(lesson, levelNumber, onComplete, onExit) {
    this.lesson = lesson;
    this.level = lesson.levels.find(l => l.id === levelNumber);
    this.onComplete = onComplete;
    this.onExit = onExit;

    this.sequence = this.level.sequence.toUpperCase();
    this.currentIndex = 0;
    this.errors = 0;
    this.lives = LIVES_PER_LEVEL;
    this.timeLeft = LEVEL_TIME_SECONDS;
    this.timerInterval = null;
    this.isPaused = false;
    this.isFinished = false;
    this.wrongLayoutDetected = false;

    this.container = null;
    this.keyHandler = this.handleKey.bind(this);
  }

  mount(container) {
    this.container = container;
    this.render();
    this.startTimer();
    document.addEventListener('keydown', this.keyHandler);
    
    // Фокус на скрытое поле для мобильных устройств
    this.enableMobileInput();
  }

  enableMobileInput() {
    const mobileInput = document.getElementById('mobile-keyboard-input');
    if (!mobileInput) return;
    
    // Определяем, тач-устройство или нет
    const isTouchDevice = ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    if (isTouchDevice) {
      // Разрешаем фокус
      mobileInput.style.pointerEvents = 'auto';
      mobileInput.style.opacity = '0.01';
      mobileInput.style.left = '0';
      mobileInput.style.top = '0';
      mobileInput.style.width = '1px';
      mobileInput.style.height = '1px';
      
      // Флаг для предотвращения двойной обработки
      let isProcessingMobileInput = false;
      
      // Фокус при старте уровня
      setTimeout(() => mobileInput.focus(), 100);
      
      // Перехватываем ввод с экранной клавиатуры
      mobileInput.addEventListener('input', (e) => {
        const char = e.data;
        if (char && !isProcessingMobileInput) {
          isProcessingMobileInput = true;
          
          // Создаём фейковый keydown event
          const fakeEvent = {
            key: char,
            code: this.getCharCode(char),
            preventDefault: () => {},
            isMobileInput: true  // Метка, что это мобильный ввод
          };
          this.handleKey(fakeEvent);
          
          // Очищаем поле
          mobileInput.value = '';
          
          // Сбрасываем флаг с небольшой задержкой
          setTimeout(() => {
            isProcessingMobileInput = false;
          }, 50);
        }
      });
      
      // Возвращаем фокус после каждого нажатия
      document.addEventListener('click', () => {
        setTimeout(() => {
          if (this.isFinished || this.isPaused) return;        // игра окончена или пауза — фокус не возвращаем
          if (document.getElementById('pause-modal')) return;  // открыта модалка паузы
          mobileInput.focus();
        }, 50);
      });
      
      // ОТКЛЮЧАЕМ обработчик keydown для тач-устройств!
      // Теперь обрабатываем только через input event
      // document.removeEventListener('keydown', this.keyHandler);
    }
  }

  getCharCode(char) {
    // Маппинг символов на коды клавиш
    const codeMap = {
      'а': 'KeyA', 'б': 'KeyB', 'в': 'KeyV', 'г': 'KeyG', 'д': 'KeyD',
      'е': 'KeyE', 'ё': 'Backquote', 'ж': 'KeyJ', 'з': 'KeyZ', 'и': 'KeyI',
      'й': 'KeyQ', 'к': 'KeyK', 'л': 'KeyL', 'м': 'KeyM', 'н': 'KeyN',
      'о': 'KeyO', 'п': 'KeyP', 'р': 'KeyR', 'с': 'KeyS', 'т': 'KeyT',
      'у': 'KeyU', 'ф': 'KeyF', 'х': 'KeyX', 'ц': 'KeyW', 
      'ч': 'KeyC',  // ← ИСПРАВЛЕНО: ч на KeyC (как на реальной клавиатуре)
      'ш': 'KeyI', 'щ': 'KeyO', 'ъ': 'BracketRight', 'ы': 'KeyS',
      'ь': 'KeyB', 'э': 'Quote', 'ю': 'Period', 'я': 'KeyZ',
      ' ': 'Space',
      // Цифры и символы
      '1': 'Digit1', '2': 'Digit2', '3': 'Digit3', '4': 'Digit4',
      '5': 'Digit5', '6': 'Digit6', '7': 'Digit7', '8': 'Digit8',
      '9': 'Digit9', '0': 'Digit0', '-': 'Minus', '=': 'Equal',
      ',': 'Comma', '.': 'Period', '/': 'Slash'
    };
    return codeMap[char.toLowerCase()] || codeMap[char] || '';
  }

  unmount() {
    document.removeEventListener('keydown', this.keyHandler);
    this.stopTimer();
    
    // Убираем фокус с мобильного поля
    const mobileInput = document.getElementById('mobile-keyboard-input');
    if (mobileInput) {
      mobileInput.blur();
      mobileInput.style.pointerEvents = 'none';
      mobileInput.style.opacity = '0';
      mobileInput.style.left = '-9999px';
    }
  }

  render() {
    const totalPieces = PUZZLE_COLS * PUZZLE_ROWS;
    const unlockedCount = this.level.id - 1;

    this.container.innerHTML = `
      <div class="screen-game">
        <div class="game-header">
          <button class="btn-icon" id="btn-exit" title="Выйти">✕</button>
          <div class="game-title">${this.lesson.title} · Уровень ${this.level.id}</div>
          <button class="btn-icon" id="btn-pause" title="Пауза">⏸</button>
        </div>

        <div class="game-stats">
          <div class="lives" id="lives">${this.renderLives()}</div>
          <div class="timer-ring" id="timer-ring">
            <div class="timer-text" id="timer-text">${this.timeLeft}</div>
          </div>
          <div class="errors" id="errors">Ошибки: ${this.errors}</div>
        </div>

        <div class="puzzle-container">
          <div id="puzzle"></div>
        </div>

        <div class="target-zone">
          <div class="target-letters" id="target"></div>
        </div>

        <div class="keyboard" id="keyboard"></div>

        <div class="layout-hint" id="layout-hint" style="display:none;">
          ⚠️ Раскладка неправильная! Нажми <b>${getLayoutSwitchHint()}</b>
        </div>
      </div>
    `;

    // Рендер пазла
    renderPuzzle(document.getElementById('puzzle'), this.lesson.image, unlockedCount, totalPieces);

    // Рендер целевой последовательности
    this.renderTarget();

    // Рендер клавиатуры
    this.renderKeyboard();

    // Кнопки
    document.getElementById('btn-exit').addEventListener('click', () => {
      if (confirm('Выйти из уровня? Прогресс не сохранится.')) {
        this.unmount();
        this.onExit();
      }
    });

    document.getElementById('btn-pause').addEventListener('click', () => this.togglePause());
  }

  renderLives() {
    return '❤️'.repeat(this.lives) + '🖤'.repeat(LIVES_PER_LEVEL - this.lives);
  }

  renderTarget() {
    const el = document.getElementById('target');
    if (!el) return;
    const chars = this.sequence.split('');
    el.innerHTML = chars.map((ch, i) => {
      if (i < this.currentIndex) return `<span class="done">${ch}</span>`;
      if (i === this.currentIndex) return `<span class="current">${ch}</span>`;
      return `<span class="pending">${ch}</span>`;
    }).join('');
  }

  renderKeyboard() {
    const kb = document.getElementById('keyboard');
    if (!kb) return;
    kb.innerHTML = '';

    KEYBOARD_LAYOUT.forEach(row => {
      const rowEl = document.createElement('div');
      rowEl.className = 'kb-row';

      row.forEach(key => {
        const keyEl = document.createElement('div');
        keyEl.className = 'kb-key';
        keyEl.textContent = key;
        keyEl.dataset.key = key;

        if (key === 'Space') {
          keyEl.classList.add('kb-space');
          keyEl.textContent = 'пробел';
        } else if (['⌫', '↵', '', '⇪', '⇧', '\\', '/'].includes(key)) {
          keyEl.classList.add('kb-special');
        }

        // Определяем, какой символ соответствует этой клавише
        const getSymbolForKey = (keyName) => {
          if (keyName === 'Space') return ' ';
          if (keyName === '⌫') return 'Backspace';
          if (keyName === '') return 'Enter';
          if (keyName === '') return 'Tab';
          if (keyName === '⇪') return 'CapsLock';
          if (keyName === '⇧') return 'Shift';
          // Для букв и символов возвращаем как есть
          return keyName;
        };

        const symbol = getSymbolForKey(key);

        // Добавляем поддержку touch событий
        const handleKeyClick = (e) => {
          e.preventDefault();
          const targetChar = this.sequence[this.currentIndex];
          if (!targetChar) return;

          // Сравниваем символы
          let isMatch = false;
          if (symbol === ' ') {
            isMatch = targetChar === ' ';
          } else if (symbol.length === 1) {
            isMatch = symbol.toLowerCase() === targetChar.toLowerCase();
          }

          if (isMatch) {
            // Имитируем нажатие правильной клавиши
            const fakeEvent = {
              key: symbol === ' ' ? ' ' : symbol,
              code: RU_TO_CODE[symbol.toLowerCase()] || 'Space',
              preventDefault: () => {}
            };
            this.handleKey(fakeEvent);
          }
        };

        keyEl.addEventListener('click', handleKeyClick);
        keyEl.addEventListener('touchstart', (e) => {
          e.preventDefault();
          handleKeyClick(e);
          keyEl.classList.add('kb-active');
          setTimeout(() => keyEl.classList.remove('kb-active'), 150);
        });

        rowEl.appendChild(keyEl);
      });

      kb.appendChild(rowEl);
    });

    this.highlightCurrentKey();
  }

  highlightCurrentKey() {
    // Снимаем подсветку со всех
    document.querySelectorAll('.kb-key').forEach(el => el.classList.remove('kb-active'));

    if (this.currentIndex >= this.sequence.length) return;

    const targetChar = this.sequence[this.currentIndex].toLowerCase();
    const code = RU_TO_CODE[targetChar];
    if (!code) return;

    const ruChar = CODE_TO_RU[code];
    if (!ruChar) return;

    // Подсвечиваем клавишу
    document.querySelectorAll('.kb-key').forEach(el => {
      if (el.dataset.key === ruChar) {
        el.classList.add('kb-active');
      }
    });
  }

  handleKey(e) {
    if (this.isFinished || this.isPaused) return;

    // Пропускаем события от физической клавиатуры на мобильных
    if (!e.isMobileInput && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
      return;
    }

    if (e.key === 'Shift' || e.key === 'Control' || e.key === 'Alt' ||
        e.key === 'Meta' || e.key === 'CapsLock' || e.key === 'Tab') {
      return;
    }

    e.preventDefault();

    const targetChar = this.sequence[this.currentIndex];
    const pressedChar = e.key;
    const pressedCode = e.code;

    const expectedCode = RU_TO_CODE[targetChar.toLowerCase()];
    const isCorrectPhysical = pressedCode === expectedCode;
    
    // Специальная обработка пробела и других символов
    let isCorrectChar = false;
    if (targetChar === ' ' && pressedChar === ' ') {
      isCorrectChar = true;
    } else if (targetChar === '-' && pressedChar === '-') {
      isCorrectChar = true;
    } else if (targetChar === '=' && pressedChar === '=') {
      isCorrectChar = true;
    } else if (targetChar === ',' && pressedChar === ',') {
      isCorrectChar = true;
    } else if (targetChar === '.' && pressedChar === '.') {
      isCorrectChar = true;
    } else if (targetChar === '/' && pressedChar === '/') {
      isCorrectChar = true;
    } else {
      // Для букв
      isCorrectChar = pressedChar.toUpperCase() === targetChar.toUpperCase();
    }

    // Проверяем, не нажата ли латинская буква вместо русской
    const isLatinChar = /^[a-zA-Z]$/.test(pressedChar);
    const isRussianExpected = /^[А-ЯЁ]$/.test(targetChar);

    if (isLatinChar && isRussianExpected) {
      // Нажата латинская буква, а нужна русская — раскладка переключена
      this.wrongLayoutDetected = true;
      document.getElementById('layout-hint').style.display = 'block';
      this.playSound('wrong');
      return;
    }

    if (isCorrectChar) {
      this.wrongLayoutDetected = false;
      document.getElementById('layout-hint').style.display = 'none';
      this.currentIndex++;
      this.renderTarget();
      this.highlightCurrentKey();
      this.playSound('correct');

      if (this.currentIndex >= this.sequence.length) {
        this.levelComplete();
      }
    } else if (isCorrectPhysical) {
      this.wrongLayoutDetected = true;
      document.getElementById('layout-hint').style.display = 'block';
      this.playSound('wrong');
    } else {
      this.errors++;
      document.getElementById('errors').textContent = `Ошибки: ${this.errors}`;

      if (!SOFT_MODE) {
        this.lives--;
        document.getElementById('lives').textContent = this.renderLives();

        if (this.lives <= 0) {
          this.levelFailed('Жизни кончились!');
          return;
        }
      }

      this.playSound('wrong');

      const target = document.getElementById('target');
      target.classList.add('shake');
      setTimeout(() => target.classList.remove('shake'), 400);
    }
  }

  startTimer() {
    this.updateTimerRing();
    this.timerInterval = setInterval(() => {
      if (this.isPaused) return;
      this.timeLeft--;
      document.getElementById('timer-text').textContent = this.timeLeft;
      this.updateTimerRing();

      if (this.timeLeft <= 0) {
        this.levelFailed('Время вышло!');
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateTimerRing() {
    const ring = document.getElementById('timer-ring');
    if (!ring) return;
    const progress = (this.timeLeft / LEVEL_TIME_SECONDS) * 100;
    ring.style.setProperty('--progress', `${progress}%`);

    if (progress < 25) {
      ring.style.setProperty('--timer-color', 'var(--error)');
    } else if (progress < 50) {
      ring.style.setProperty('--timer-color', 'var(--orange)');
    } else {
      ring.style.setProperty('--timer-color', 'var(--green)');
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    const btn = document.getElementById('btn-pause');
    btn.textContent = this.isPaused ? '▶' : '⏸';

    if (this.isPaused) {
      this.showPauseModal();
    } else {
      this.hidePauseModal();
    }
  }

  showPauseModal() {
    if (document.getElementById('pause-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'pause-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal">
        <h2>Пауза</h2>
        <p>Нажми «Продолжить», чтобы вернуться к уровню</p>
        <button class="btn btn-primary" id="btn-resume">Продолжить</button>
        <button class="btn btn-secondary" id="btn-quit" style="margin-top:8px;">Выйти</button>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('btn-resume').addEventListener('click', () => {
      modal.remove();
      this.togglePause();
    });

    document.getElementById('btn-quit').addEventListener('click', () => {
      modal.remove();
      this.unmount();
      this.onExit();
    });

     focusPrimaryButton('btn-resume');
  }

  hidePauseModal() {
    const modal = document.getElementById('pause-modal');
    if (modal) modal.remove();
  }

  levelComplete() {
    this.isFinished = true;
    this.stopTimer();
    this.unmount();

    Storage.completeLevel(this.lesson.id, this.level.id);
    this.onComplete(true, this.errors);
  }

  levelFailed(reason) {
    this.isFinished = true;
    this.stopTimer();
    this.unmount();
    this.onComplete(false, this.errors, reason);
  }

  playSound(type) {
    if (type === 'correct') audio.playCorrect();
    else if (type === 'wrong') audio.playWrong();
    else if (type === 'levelComplete') audio.playLevelComplete();
    else if (type === 'fanfare') audio.playFanfare();
    else if (type === 'place') audio.playPuzzlePlace();
  }
}
