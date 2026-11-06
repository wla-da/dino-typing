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

  document.getElementById('btn-start').addEventListener('click', showClasses);
  document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('Сбросить весь прогресс?')) {
      Storage.reset();
      showMenu();
    }
  });
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
  const state = Storage.load();
  
  // Находим последний активный класс
  let lastActiveClass = null;
  let lastActiveLesson = null;
  let maxProgress = -1;

  LESSONS.forEach(lesson => {
    const completed = state[lesson.id] || 0;
    if (completed > 0 && completed > maxProgress) {
      maxProgress = completed;
      lastActiveClass = lesson.class;
      lastActiveLesson = lesson.id;
    }
  });

  // Группируем уроки по классам
  const classes = {};
  LESSONS.forEach(lesson => {
    if (!classes[lesson.class]) {
      classes[lesson.class] = [];
    }
    classes[lesson.class].push(lesson);
  });

  // Сортируем классы
  const sortedClasses = Object.keys(classes).sort((a, b) => parseInt(a) - parseInt(b));

  sortedClasses.forEach(classNum => {
    const classLessons = classes[classNum];
    const className = classLessons[0].title.includes('Класс') ? 
      classLessons[0].title.split('—')[0].trim() : 
      `${classNum} класс`;
    
    // Считаем прогресс класса
    let classCompleted = 0;
    classLessons.forEach(lesson => {
      const completed = state[lesson.id] || 0;
      if (completed >= lesson.levels.length) classCompleted++;
    });

    const card = document.createElement('div');
    card.className = 'class-card';
    card.innerHTML = `
      <div class="class-icon">${classNum}</div>
      <div class="info" style="flex:1;">
        <h3>${className}</h3>
        <p>${classCompleted}/${classLessons.length} уроков пройдено</p>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${(classCompleted/classLessons.length)*100}%"></div>
        </div>
      </div>
      <div class="class-toggle">▶</div>
    `;

    // Авто-разворачиваем последний активный класс
    if (lastActiveClass === parseInt(classNum)) {
      card.classList.add('expanded');
      card.querySelector('.class-toggle').textContent = '▼';
    }

    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('class-toggle') || e.target.closest('.class-toggle')) {
        card.classList.toggle('expanded');
        const toggle = card.querySelector('.class-toggle');
        toggle.textContent = card.classList.contains('expanded') ? '▼' : '▶';
        
        // Показываем/скрываем уроки
        const lessonsContainer = card.querySelector('.class-lessons');
        if (lessonsContainer) {
          lessonsContainer.style.display = card.classList.contains('expanded') ? 'block' : 'none';
        }
      } else {
        // Клик по карточке - разворачиваем и показываем уроки
        card.classList.add('expanded');
        card.querySelector('.class-toggle').textContent = '▼';
        const lessonsContainer = card.querySelector('.class-lessons');
        if (lessonsContainer) {
          lessonsContainer.style.display = 'block';
          lessonsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });

    // Контейнер для уроков
    const lessonsContainer = document.createElement('div');
    lessonsContainer.className = 'class-lessons';
    lessonsContainer.style.display = card.classList.contains('expanded') ? 'block' : 'none';
    
    classLessons.forEach((lesson, index) => {
      const completed = state[lesson.id] || 0;
      const total = lesson.levels.length;
      const isComplete = completed >= total;
      
      const lessonCard = document.createElement('div');
      lessonCard.className = 'lesson-card';
      lessonCard.innerHTML = `
        <img src="${lesson.image}" class="dino-preview" alt="">
        <div class="info">
          <h3>${index + 1}. ${lesson.title}</h3>
          <p>${lesson.description}</p>
          ${isComplete ? '<span class="complete-badge">✓ Пройден</span>' : ''}
        </div>
        <div style="display:flex; flex-direction:column; gap:8px; align-items:flex-end;">
          <div class="progress">${completed}/${total}</div>
          ${isComplete ? `<button class="btn btn-small btn-secondary" data-reset="${lesson.id}">↻ Сбросить</button>` : ''}
        </div>
      `;
      
      lessonCard.addEventListener('click', (e) => {
        if (e.target.dataset.reset) {
          e.stopPropagation();
          if (confirm(`Сбросить прогресс урока "${lesson.title}"?`)) {
            Storage.resetLesson(lesson.id);
            showClasses();
          }
        } else {
          showLevel(lesson, completed + 1);
        }
      });
      
      lessonsContainer.appendChild(lessonCard);
    });

    card.appendChild(lessonsContainer);
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

  document.getElementById('btn-back').addEventListener('click', () => showClasses());

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
      showClasses();
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
        <div class="puzzle-modal-container" style="margin:16px 0; height:140px; max-height:140px; background:var(--card); border-radius:var(--radius); padding:8px; display:flex; align-items:center; justify-content:center;">
          <div id="puzzle-result" style="width:100%; height:100%;"></div>
        </div>
        <button class="btn btn-primary" id="btn-next" style="margin-top:8px;">
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
    showClasses();
  });

  puzzleGame.mount(container);
}

// Старт
showMenu();