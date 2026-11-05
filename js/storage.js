// Простая обёртка над localStorage
const Storage = {
  KEY: 'dino-typing-progress-v1',

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      const oldState = raw ? JSON.parse(raw) : {};
      
      // Создаём новое состояние с всеми уроками
      const newState = this.defaultState();
      
      // Сливаем старый прогресс с новыми уроками
      return { ...newState, ...oldState };
    } catch {
      return this.defaultState();
    }
  },

  save(state) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Не удалось сохранить прогресс:', e);
    }
  },

  defaultState() {
    // Для каждого урока храним номер последнего пройденного уровня (0 = ничего не пройдено)
    const state = {};
    LESSONS.forEach(l => { 
      if (state[l.id] === undefined) {
        state[l.id] = 0; 
      }
    });
    return state;
  },

  // Пройден ли уровень
  isLevelComplete(lessonId, levelId) {
    const state = this.load();
    return state[lessonId] >= levelId;
  },

  // Отметить уровень как пройденный
  completeLevel(lessonId, levelId) {
    const state = this.load();
    if (state[lessonId] < levelId) {
      state[lessonId] = levelId;
      this.save(state);
    }
  },

  // Сбросить прогресс (для тестирования)
  reset() {
    localStorage.removeItem(this.KEY);
  },
  
  resetLesson(lessonId) {
    const state = this.load();
    state[lessonId] = 0;
    this.save(state);
  },
};