const app = document.getElementById('app');
let currentGame = null;

// ===== РОУТИНГ =====
function showMenu() {
  app.innerHTML = `
    <div class="screen-menu">
      <img src="assets/images/mascot.png" alt="Динозавр" class="mascot">
      <h1>Дино-Печать</h1>
      <p class="subtitle">Учимся печатать вместе с динозаврами!</p>
      <button class="btn btn-primary" id="btn-start">Начать</button>
      <button class="btn btn-secondary" id="btn-reset">Сбросить прогресс</button>
    </div>
  `;

  document.getElementById('btn-start').addEventListener('click', showLessons);
  document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('Сбросить весь прогресс?')) {
      Storage.reset();
      showMenu();
    }
  });
}

function showLessons() {
  const state = Storage.load();
  app.innerHTML = `
    <div class="screen-lessons">
      <button class="btn btn-back" id="btn-back">← Назад</button>
      <h2>Выбери урок</h2>
      <div id="lessons-list"></div>
    </div>
  `;

  document.getElementById('btn-back').addEventListener('click', showMenu);

  const list = document.getElementById('lessons-list');
  LESSONS.forEach(lesson => {
    const completed = state[lesson.id] || 0;
    const total = lesson.levels.length;
    const isComplete = completed >= total;
    
    const card = document.createElement('div');
    card.className = 'lesson-card';
    card.innerHTML = `
      <img src="${lesson.image}" class="dino-preview" alt="">
      <div class="info">
        <h3>${lesson.title}</h3>
        <p>${lesson.description}</p>
        ${isComplete ? '<span class="complete-badge">✓ Пройден</span>' : ''}
      </div>
      <div style="display:flex; flex-direction:column; gap:8px; align-items:flex-end;">
        <div class="progress">${completed}/${total}</div>
        ${isComplete ? `<button class="btn btn-small btn-secondary" data-reset="${lesson.id}">↻ Сбросить</button>` : ''}
      </div>
    `;
    
    card.addEventListener('click', (e) => {
      if (e.target.dataset.reset) {
        e.stopPropagation();
        if (confirm(`Сбросить прогресс урока "${lesson.title}"?`)) {
          Storage.resetLesson(lesson.id);
          showLessons();
        }
      } else {
        showLevel(lesson, completed + 1);
      }
    });
    
    list.appendChild(card);
  });
}

function showLevel(lesson, levelNumber) {
  if (levelNumber > lesson.levels.length) {
    showLessonComplete(lesson);
    return;
  }

  const level = lesson.levels.find(l => l.id === levelNumber);
  const totalPieces = PUZZLE_COLS * PUZZLE_ROWS;
  const unlockedCount = levelNumber - 1;

  app.innerHTML = `
    <div class="screen-level">
      <button class="btn btn-back" id="btn-back">← Назад</button>
      <div class="level-header">
        <span class="title">${lesson.title} · Уровень ${levelNumber}</span>
        <span class="progress-text">Пазл: ${unlockedCount}/${totalPieces}</span>
      </div>

      <div class="puzzle-container">
        <div id="puzzle"></div>
      </div>

      <div class="input-zone">
        <div class="target-letters" id="target"></div>
        <p class="hint">Нажми «Старт» чтобы начать</p>
        <button class="btn btn-primary" id="btn-start-level" style="margin-top:16px;">
          ▶ Старт
        </button>
      </div>
    </div>
  `;

  document.getElementById('btn-back').addEventListener('click', () => showLessons());

  renderPuzzle(document.getElementById('puzzle'), lesson.image, unlockedCount, totalPieces);
  renderTargetStatic(level.sequence, 0);

  document.getElementById('btn-start-level').addEventListener('click', () => {
    startGame(lesson, levelNumber);
  });
}

function renderTargetStatic(sequence, currentIndex) {
  const el = document.getElementById('target');
  if (!el) return;
  const chars = sequence.split('');
  el.innerHTML = chars.map((ch, i) => {
    if (ch === ' ') return ' ';
    if (i < currentIndex) return `<span class="done">${ch}</span>`;
    if (i === currentIndex) return `<span class="current">${ch}</span>`;
    return `<span class="pending">${ch}</span>`;
  }).join('');
}

function startGame(lesson, levelNumber) {
  app.innerHTML = '<div id="game-container"></div>';
  const container = document.getElementById('game-container');

  currentGame = new TypingGame(lesson, levelNumber,
    (success, errors, reason) => {
      currentGame = null;
      showLevelResult(lesson, levelNumber, success, errors, reason);
    },
    () => {
      currentGame = null;
      showLessons();
    }
  );

  currentGame.mount(container);
}

function showLevelResult(lesson, levelNumber, success, errors, reason) {
  const totalPieces = PUZZLE_COLS * PUZZLE_ROWS;
  const unlockedCount = success ? levelNumber : levelNumber - 1;
  const stars = errors === 0 ? '⭐⭐⭐' : errors <= 2 ? '⭐⭐' : '⭐';

  if (success) {
    audio.playLevelComplete();
  }
  
  app.innerHTML = `
    <div class="modal-overlay">
      <div class="modal">
        <h2>${success ? 'Отлично!' : 'Не получилось'}</h2>
        ${reason ? `<p class="fail-reason">${reason}</p>` : ''}
        <div class="stars">${success ? stars : '💪'}</div>
        ${success ? '<p>Ты открыл кусочек пазла!</p>' : '<p>Попробуй ещё раз</p>'}
        <div class="puzzle-container" style="margin-top:16px;">
          <div id="puzzle-result"></div>
        </div>
        <button class="btn btn-primary" id="btn-next" style="margin-top:16px;">
          ${success ? 'Дальше' : 'Попробовать снова'}
        </button>
      </div>
    </div>
  `;

  renderPuzzle(document.getElementById('puzzle-result'), lesson.image, unlockedCount, totalPieces);

  document.getElementById('btn-next').addEventListener('click', () => {
    if (success) {
      showLevel(lesson, levelNumber + 1);
    } else {
      startGame(lesson, levelNumber);
    }
  });
}

function showLessonComplete(lesson) {
  app.innerHTML = '<div id="puzzle-game-container"></div>';
  const container = document.getElementById('puzzle-game-container');

  const puzzleGame = new PuzzleGame(lesson, () => {
    showMenu();
  });

  puzzleGame.mount(container);
}

function showClasses() {
  app.innerHTML = `
    <div class="screen-classes">
      <button class="btn btn-back" id="btn-back">← Назад</button>
      <h2>Выбери класс</h2>
      <div id="classes-list"></div>
    </div>
  `;

  document.getElementById('btn-back').addEventListener('click', showMenu);

  const list = document.getElementById('classes-list');
  DataLoader.classes.forEach(cls => {
    const progress = DataLoader.getClassProgress(cls.id);
    const card = document.createElement('div');
    card.className = 'class-card';
    card.innerHTML = `
      <div class="class-icon">${cls.id.replace('class-', '')}</div>
      <div class="info">
        <h3>${cls.title}</h3>
        <p>${cls.description}</p>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${(progress.completed/progress.total)*100}%"></div>
        </div>
        <div class="progress-text">${progress.completed}/${progress.total} уроков</div>
      </div>
    `;
    card.addEventListener('click', () => showClassLessons(cls));
    list.appendChild(card);
  });
}

function showClassLessons(cls) {
  const lessons = DataLoader.getLessonsByClass(cls.id);
  const state = Storage.load();
  
  app.innerHTML = `
    <div class="screen-lessons">
      <button class="btn btn-back" id="btn-back">← К классам</button>
      <h2>${cls.title}</h2>
      <div id="lessons-list"></div>
    </div>
  `;

  document.getElementById('btn-back').addEventListener('click', showClasses);

  const list = document.getElementById('lessons-list');
  lessons.forEach(lesson => {
    const completed = state[lesson.id] || 0;
    const total = lesson.levels.length;
    const card = document.createElement('div');
    card.className = 'lesson-card';
    card.innerHTML = `
      <img src="${lesson.image}" class="dino-preview" alt="">
      <div class="info">
        <h3>${lesson.title}</h3>
        <p>${lesson.description}</p>
      </div>
      <div class="progress">${completed}/${total}</div>
    `;
    card.addEventListener('click', () => showLevel(lesson, completed + 1));
    list.appendChild(card);
  });
}

// Старт
showMenu();
