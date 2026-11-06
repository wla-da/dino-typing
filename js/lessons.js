// ===== КОНСТАНТЫ =====
const PUZZLE_COLS = 4;
const PUZZLE_ROWS = 4;
const LEVEL_TIME_SECONDS = 45;
const LIVES_PER_LEVEL = 3;
const SOFT_MODE = false; // true = ошибки не снимают жизни (для обучения)

// ===== УРОКИ =====
const LESSONS = [
  // ==================== КЛАСС 1: ФЫВА (левая рука) ====================
  {
    id: 'c1-l1',
    class: 1,
    title: 'Буква Ф',
    description: 'Мизинец левой руки',
    image: 'assets/images/dino-class1.png',
    letters: ['Ф'],
    levels: [
      { id: 1, sequence: 'ФФФ' }, { id: 2, sequence: 'ФФФФ' },
      { id: 3, sequence: 'Ф Ф Ф' }, { id: 4, sequence: 'ФФФ ФФФ' },
      { id: 5, sequence: 'Ф Ф Ф Ф' }, { id: 6, sequence: 'ФФФФ ФФФФ' },
      { id: 7, sequence: 'Ф ФФ Ф ФФ' }, { id: 8, sequence: 'ФФ Ф ФФ Ф' },
      { id: 9, sequence: 'ФФФ Ф ФФФ' }, { id: 10, sequence: 'Ф Ф Ф Ф Ф Ф' },
      { id: 11, sequence: 'ФФФФ Ф ФФФФ' }, { id: 12, sequence: 'Ф ФФФ Ф ФФФ Ф' },
      { id: 13, sequence: 'ФФ ФФ ФФ ФФ' }, { id: 14, sequence: 'ФФФ ФФФ ФФФ' },
      { id: 15, sequence: 'Ф Ф Ф Ф Ф Ф Ф Ф' }, { id: 16, sequence: 'ФФФФ ФФФФ ФФФФ' }
    ]
  },
  {
    id: 'c1-l2',
    class: 1,
    title: 'Буква Ы',
    description: 'Безымянный палец левой руки',
    image: 'assets/images/dino-class1.png',
    letters: ['Ы'],
    levels: [
      { id: 1, sequence: 'ЫЫЫ' }, { id: 2, sequence: 'ЫЫЫЫ' },
      { id: 3, sequence: 'Ы Ы Ы' }, { id: 4, sequence: 'ЫЫЫ ЫЫ' },
      { id: 5, sequence: 'Ы Ы Ы Ы' }, { id: 6, sequence: 'ЫЫЫЫ ЫЫЫ' },
      { id: 7, sequence: 'Ы ЫЫ Ы ЫЫ' }, { id: 8, sequence: 'ЫЫ Ы ЫЫ Ы' },
      { id: 9, sequence: 'ЫЫЫ Ы ЫЫЫ' }, { id: 10, sequence: 'Ы Ы Ы Ы Ы Ы' },
      { id: 11, sequence: 'ЫЫЫЫ Ы ЫЫЫЫ' }, { id: 12, sequence: 'Ы ЫЫЫ Ы ЫЫЫ Ы' },
      { id: 13, sequence: 'ЫЫ Ы ЫЫ ЫЫ' }, { id: 14, sequence: 'ЫЫЫ ЫЫЫ ЫЫЫ' },
      { id: 15, sequence: 'Ы Ы Ы Ы Ы Ы Ы Ы' }, { id: 16, sequence: 'ЫЫЫЫ ЫЫЫ ЫЫЫЫ' }
    ]
  },
  {
    id: 'c1-l3',
    class: 1,
    title: 'Буква В',
    description: 'Средний палец левой руки',
    image: 'assets/images/dino-class1.png',
    letters: ['В'],
    levels: [
      { id: 1, sequence: 'ВВВ' }, { id: 2, sequence: 'ВВВВ' },
      { id: 3, sequence: 'В В В' }, { id: 4, sequence: 'ВВВ ВВВ' },
      { id: 5, sequence: 'В В В В' }, { id: 6, sequence: 'ВВВВ ВВВВ' },
      { id: 7, sequence: 'В ВВ В ВВ' }, { id: 8, sequence: 'ВВ В ВВ В' },
      { id: 9, sequence: 'ВВВ В ВВВ' }, { id: 10, sequence: 'В В В В В В' },
      { id: 11, sequence: 'ВВВВ В ВВВВ' }, { id: 12, sequence: 'В ВВВ В ВВВ В' },
      { id: 13, sequence: 'ВВ ВВ ВВ ВВ' }, { id: 14, sequence: 'ВВВ ВВВ ВВВ' },
      { id: 15, sequence: 'В В В В В В В В' }, { id: 16, sequence: 'ВВВВ ВВВВ ВВВВ' }
    ]
  },
  {
    id: 'c1-l4',
    class: 1,
    title: 'Буква А',
    description: 'Указательный палец левой руки',
    image: 'assets/images/dino-class1.png',
    letters: ['А'],
    levels: [
      { id: 1, sequence: 'ААА' }, { id: 2, sequence: 'АААА' },
      { id: 3, sequence: 'А А А' }, { id: 4, sequence: 'ААА ААА' },
      { id: 5, sequence: 'А А А А' }, { id: 6, sequence: 'АААА АААА' },
      { id: 7, sequence: 'А АА А АА' }, { id: 8, sequence: 'АА А АА А' },
      { id: 9, sequence: 'ААА А ААА' }, { id: 10, sequence: 'А А А А А А' },
      { id: 11, sequence: 'АААА А АААА' }, { id: 12, sequence: 'А ААА А ААА А' },
      { id: 13, sequence: 'АА АА АА АА' }, { id: 14, sequence: 'ААА ААА ААА' },
      { id: 15, sequence: 'А А А А А А А А' }, { id: 16, sequence: 'АААА АААА АААА' }
    ]
  },
  {
    id: 'c1-l5',
    class: 1,
    title: 'Ф и Ы вместе',
    description: 'Мизинец и безымянный левой руки',
    image: 'assets/images/dino-class1.png',
    letters: ['Ф', 'Ы'],
    levels: [
      { id: 1, sequence: 'ФЫ' }, { id: 2, sequence: 'ЫФ' },
      { id: 3, sequence: 'ФЫ ФЫ' }, { id: 4, sequence: 'ЫФ ЫФ' },
      { id: 5, sequence: 'ФЫФ' }, { id: 6, sequence: 'ЫФЫ' },
      { id: 7, sequence: 'ФЫ Ф ЫФ' }, { id: 8, sequence: 'ЫФ Ы ФЫ' },
      { id: 9, sequence: 'ФЫФЫ' }, { id: 10, sequence: 'ЫФЫФ' },
      { id: 11, sequence: 'Ф Ф Ы Ф' }, { id: 12, sequence: 'Ы Ф Ы Ф Ы' },
      { id: 13, sequence: 'ФЫ ФЫ ФЫ' }, { id: 14, sequence: 'ЫФ ЫФ ЫФ' },
      { id: 15, sequence: 'ФЫФ ЫФЫ ФЫФ' }, { id: 16, sequence: 'ЫФЫ ФЫФ ЫФЫ' }
    ]
  },
  {
    id: 'c1-l6',
    class: 1,
    title: 'В и А вместе',
    description: 'Средний и указательный левой руки',
    image: 'assets/images/dino-class1.png',
    letters: ['В', 'А'],
    levels: [
      { id: 1, sequence: 'ВА' }, { id: 2, sequence: 'АВ' },
      { id: 3, sequence: 'ВА ВА' }, { id: 4, sequence: 'АВ АВ' },
      { id: 5, sequence: 'ВАВ' }, { id: 6, sequence: 'АВА' },
      { id: 7, sequence: 'ВА В АВ' }, { id: 8, sequence: 'АВ А ВА' },
      { id: 9, sequence: 'ВАВА' }, { id: 10, sequence: 'АВАВ' },
      { id: 11, sequence: 'В А В А В' }, { id: 12, sequence: 'А В А В А' },
      { id: 13, sequence: 'ВА ВА ВА' }, { id: 14, sequence: 'АВ АВ АВ' },
      { id: 15, sequence: 'ВАВ АВА ВАВ' }, { id: 16, sequence: 'АВА ВАВ АВА' }
    ]
  },
  {
    id: 'c1-l7',
    class: 1,
    title: 'ФЫ и ВА',
    description: 'Все 4 пальца левой руки',
    image: 'assets/images/dino-class1.png',
    letters: ['Ф', 'Ы', 'В', 'А'],
    levels: [
      { id: 1, sequence: 'ФЫВА' }, { id: 2, sequence: 'АВЫФ' },
      { id: 3, sequence: 'ФЫ ФЫ ВА ВА' }, { id: 4, sequence: 'АВ АВ ЫФ ЫФ' },
      { id: 5, sequence: 'ФЫВА ФЫВА' }, { id: 6, sequence: 'АВЫФ АВЫФ' },
      { id: 7, sequence: 'Ф Ы В А Ф Ы' }, { id: 8, sequence: 'А В Ы Ф А В' },
      { id: 9, sequence: 'ФЫ ВА ФЫ ВА' }, { id: 10, sequence: 'АВ ЫФ АВ ЫФ' },
      { id: 11, sequence: 'ФЫВА АВЫФ ФЫВА' }, { id: 12, sequence: 'АВЫФ ФЫВА АВЫФ' },
      { id: 13, sequence: 'Ф В А Ф Ы В А' }, { id: 14, sequence: 'А В Ы Ф А В Ы Ф' },
      { id: 15, sequence: 'ФЫВА ФЫВА ФЫВА' }, { id: 16, sequence: 'АВЫФ АВЫФ АВЫФ' }
    ]
  },
  {
    id: 'c1-l8',
    class: 1,
    title: 'ФЫВА — закрепление',
    description: 'Свободная печать левой рукой',
    image: 'assets/images/dino-class1.png',
    letters: ['Ф', 'Ы', 'В', 'А'],
    levels: [
      { id: 1, sequence: 'ФА ВА ФА' }, { id: 2, sequence: 'ЫВ ФА ЫВ' },
      { id: 3, sequence: 'АВЫ ФВА' }, { id: 4, sequence: 'ФЫА ВАФ' },
      { id: 5, sequence: 'ВА ФЫ АВ ЫФ' }, { id: 6, sequence: 'ЫФА ВАФ ЫФА' },
      { id: 7, sequence: 'АВЫ ФВА ВАФ' }, { id: 8, sequence: 'ФЫВА АВЫФ ФЫВА' },
      { id: 9, sequence: 'ВАФ ЫФА ВАФ ЫФА' }, { id: 10, sequence: 'АВЫФ ФЫВА АВЫФ ФЫВА' },
      { id: 11, sequence: 'Ф А Ы В Ф А Ы В' }, { id: 12, sequence: 'В А Ф В Ы А Ф' },
      { id: 13, sequence: 'ФЫВА ФЫВА ФЫВА ФЫВА' }, { id: 14, sequence: 'АВЫФ АВЫФ АВЫФ АВЫФ' },
      { id: 15, sequence: 'ФАВЫ ВАФ ФАВЫ ЫВАФ' }, { id: 16, sequence: 'ФЫВА АВЫФ ВАФЫ ЫФВА' }
    ]
  },

  // ==================== КЛАСС 2: ОЛДЖ (правая рука) ====================
  {
    id: 'c2-l1',
    class: 2,
    title: 'Буква О',
    description: 'Указательный палец правой руки',
    image: 'assets/images/dino-class2.png',
    letters: ['О'],
    levels: [
      { id: 1, sequence: 'ООО' }, { id: 2, sequence: 'ОООО' },
      { id: 3, sequence: 'О О О' }, { id: 4, sequence: 'ООО ООО' },
      { id: 5, sequence: 'О О О О' }, { id: 6, sequence: 'ОООО ОООО' },
      { id: 7, sequence: 'О ОО О ОО' }, { id: 8, sequence: 'ОО О ОО О' },
      { id: 9, sequence: 'ООО О ООО' }, { id: 10, sequence: 'О О О О О О' },
      { id: 11, sequence: 'ОООО О ОООО' }, { id: 12, sequence: 'О ООО О ООО О' },
      { id: 13, sequence: 'ОО ОО ОО ОО' }, { id: 14, sequence: 'ООО ООО ООО' },
      { id: 15, sequence: 'О О О О О О О О' }, { id: 16, sequence: 'ОООО ОООО ОООО' }
    ]
  },
  {
    id: 'c2-l2',
    class: 2,
    title: 'Буква Л',
    description: 'Средний палец правой руки',
    image: 'assets/images/dino-class2.png',
    letters: ['Л'],
    levels: [
      { id: 1, sequence: 'ЛЛЛ' }, { id: 2, sequence: 'ЛЛЛЛ' },
      { id: 3, sequence: 'Л Л Л' }, { id: 4, sequence: 'ЛЛЛ ЛЛЛ' },
      { id: 5, sequence: 'Л Л Л Л' }, { id: 6, sequence: 'ЛЛЛЛ ЛЛЛЛ' },
      { id: 7, sequence: 'Л ЛЛ Л ЛЛ' }, { id: 8, sequence: 'ЛЛ Л ЛЛ Л' },
      { id: 9, sequence: 'ЛЛЛ Л ЛЛЛ' }, { id: 10, sequence: 'Л Л Л Л Л Л' },
      { id: 11, sequence: 'ЛЛЛЛ Л ЛЛЛЛ' }, { id: 12, sequence: 'Л ЛЛЛ Л ЛЛЛ Л' },
      { id: 13, sequence: 'ЛЛ ЛЛ ЛЛ ЛЛ' }, { id: 14, sequence: 'ЛЛЛ ЛЛЛ ЛЛЛ' },
      { id: 15, sequence: 'Л Л Л Л Л Л Л Л' }, { id: 16, sequence: 'ЛЛЛЛ ЛЛЛЛ ЛЛЛЛ' }
    ]
  },
  {
    id: 'c2-l3',
    class: 2,
    title: 'Буква Д',
    description: 'Безымянный палец правой руки',
    image: 'assets/images/dino-class2.png',
    letters: ['Д'],
    levels: [
      { id: 1, sequence: 'ДДД' }, { id: 2, sequence: 'ДДДД' },
      { id: 3, sequence: 'Д Д Д' }, { id: 4, sequence: 'ДДД ДДД' },
      { id: 5, sequence: 'Д Д Д Д' }, { id: 6, sequence: 'ДДДД ДДДД' },
      { id: 7, sequence: 'Д ДД Д ДД' }, { id: 8, sequence: 'ДД Д ДД Д' },
      { id: 9, sequence: 'ДДД Д ДДД' }, { id: 10, sequence: 'Д Д Д Д Д Д' },
      { id: 11, sequence: 'ДДДД Д ДДДД' }, { id: 12, sequence: 'Д ДДД Д ДДД Д' },
      { id: 13, sequence: 'ДД ДД ДД ДД' }, { id: 14, sequence: 'ДДД ДДД ДДД' },
      { id: 15, sequence: 'Д Д Д Д Д Д Д Д' }, { id: 16, sequence: 'ДДДД ДДДД ДДДД' }
    ]
  },
  {
    id: 'c2-l4',
    class: 2,
    title: 'Буква Ж',
    description: 'Мизинец правой руки',
    image: 'assets/images/dino-class2.png',
    letters: ['Ж'],
    levels: [
      { id: 1, sequence: 'ЖЖЖ' }, { id: 2, sequence: 'ЖЖЖЖ' },
      { id: 3, sequence: 'Ж Ж Ж' }, { id: 4, sequence: 'ЖЖЖ ЖЖЖ' },
      { id: 5, sequence: 'Ж Ж Ж Ж' }, { id: 6, sequence: 'ЖЖЖЖ ЖЖЖЖ' },
      { id: 7, sequence: 'Ж ЖЖ Ж ЖЖ' }, { id: 8, sequence: 'ЖЖ Ж ЖЖ Ж' },
      { id: 9, sequence: 'ЖЖЖ Ж ЖЖЖ' }, { id: 10, sequence: 'Ж Ж Ж Ж Ж Ж' },
      { id: 11, sequence: 'ЖЖЖЖ Ж ЖЖЖЖ' }, { id: 12, sequence: 'Ж ЖЖЖ Ж ЖЖЖ Ж' },
      { id: 13, sequence: 'ЖЖ ЖЖ ЖЖ ЖЖ' }, { id: 14, sequence: 'ЖЖЖ ЖЖЖ ЖЖЖ' },
      { id: 15, sequence: 'Ж Ж Ж Ж Ж Ж Ж Ж' }, { id: 16, sequence: 'ЖЖЖЖ ЖЖЖЖ ЖЖЖЖ' }
    ]
  },
  {
    id: 'c2-l5',
    class: 2,
    title: 'О и Л вместе',
    description: 'Указательный и средний правой руки',
    image: 'assets/images/dino-class2.png',
    letters: ['О', 'Л'],
    levels: [
      { id: 1, sequence: 'ОЛ' }, { id: 2, sequence: 'ЛО' },
      { id: 3, sequence: 'ОЛ ОЛ' }, { id: 4, sequence: 'ЛО ЛО' },
      { id: 5, sequence: 'ОЛО' }, { id: 6, sequence: 'ЛОЛ' },
      { id: 7, sequence: 'ОЛ О ЛО' }, { id: 8, sequence: 'ЛО Л ОЛ' },
      { id: 9, sequence: 'ОЛОЛ' }, { id: 10, sequence: 'ЛОЛО' },
      { id: 11, sequence: 'О Л О Л О' }, { id: 12, sequence: 'Л О Л О Л' },
      { id: 13, sequence: 'ОЛ ОЛ ОЛ' }, { id: 14, sequence: 'ЛО ЛО ЛО' },
      { id: 15, sequence: 'ОЛО ЛОЛ ОЛО' }, { id: 16, sequence: 'ЛОЛ ОЛО ЛОЛ' }
    ]
  },
  {
    id: 'c2-l6',
    class: 2,
    title: 'Д и Ж вместе',
    description: 'Безымянный и мизинец правой руки',
    image: 'assets/images/dino-class2.png',
    letters: ['Д', 'Ж'],
    levels: [
      { id: 1, sequence: 'ДЖ' }, { id: 2, sequence: 'ЖД' },
      { id: 3, sequence: 'ДЖ ДЖ' }, { id: 4, sequence: 'ЖД ЖД' },
      { id: 5, sequence: 'ДЖД' }, { id: 6, sequence: 'ЖДЖ' },
      { id: 7, sequence: 'ДЖ Д ЖД' }, { id: 8, sequence: 'ЖД Ж ДЖ' },
      { id: 9, sequence: 'ДЖДЖ' }, { id: 10, sequence: 'ЖДЖД' },
      { id: 11, sequence: 'Д Ж Д Ж Д' }, { id: 12, sequence: 'Ж Д Ж Д Ж' },
      { id: 13, sequence: 'ДЖ ДЖ ДЖ' }, { id: 14, sequence: 'ЖД ЖД ЖД' },
      { id: 15, sequence: 'ДЖД ЖДЖ ДЖД' }, { id: 16, sequence: 'ЖДЖ ДЖД ЖДЖ' }
    ]
  },
  {
    id: 'c2-l7',
    class: 2,
    title: 'ОЛ и ДЖ',
    description: 'Все 4 пальца правой руки',
    image: 'assets/images/dino-class2.png',
    letters: ['О', 'Л', 'Д', 'Ж'],
    levels: [
      { id: 1, sequence: 'ОЛДЖ' }, { id: 2, sequence: 'ЖДЛО' },
      { id: 3, sequence: 'ОЛ ОЛ ДЖ ДЖ' }, { id: 4, sequence: 'ЖД ЖД ЛО ЛО' },
      { id: 5, sequence: 'ОЛДЖ ОЛДЖ' }, { id: 6, sequence: 'ЖДЛО ЖДЛО' },
      { id: 7, sequence: 'О Л Д Ж О Л' }, { id: 8, sequence: 'Ж Д Л О Ж Д' },
      { id: 9, sequence: 'ОЛ ДЖ ОЛ ДЖ' }, { id: 10, sequence: 'ЖД ЛО ЖД ЛО' },
      { id: 11, sequence: 'ОЛДЖ ЖДЛО ОЛДЖ' }, { id: 12, sequence: 'ЖДЛО ОЛДЖ ЖДЛО' },
      { id: 13, sequence: 'О Л Д Ж О Л Д Ж' }, { id: 14, sequence: 'Ж Д Л О Ж Д Л О' },
      { id: 15, sequence: 'ОЛДЖ ОЛДЖ ОЛДЖ' }, { id: 16, sequence: 'ЖДЛО ЖДЛО ЖДЛО' }
    ]
  },
  {
    id: 'c2-l8',
    class: 2,
    title: 'ОЛДЖ — закрепление',
    description: 'Свободная печать правой рукой',
    image: 'assets/images/dino-class2.png',
    letters: ['О', 'Л', 'Д', 'Ж'],
    levels: [
      { id: 1, sequence: 'ОЖ ЛД ОЖ' }, { id: 2, sequence: 'ЛД ОЖ ЛД' },
      { id: 3, sequence: 'ДЛО ОЖД' }, { id: 4, sequence: 'ОЛЖ ДЛО' },
      { id: 5, sequence: 'ЛД ОЖ ЛО ДЖ' }, { id: 6, sequence: 'ОЖЛ ДЛО ОЖЛ' },
      { id: 7, sequence: 'ДЛО ОЖЛ ЛОЖ' }, { id: 8, sequence: 'ОЛДЖ ЖДЛО ОЛДЖ' },
      { id: 9, sequence: 'ЛОЖ ОЖЛ ЛОЖ ОЖЛ' }, { id: 10, sequence: 'ДЛОЖ ОЛДЖ ДЛОЖ ОЛДЖ' },
      { id: 11, sequence: 'О Л Д Ж О Л Д Ж' }, { id: 12, sequence: 'Ж Д Л О Ж Д Л О' },
      { id: 13, sequence: 'ОЛДЖ ОЛДЖ ОЛДЖ ОЛДЖ' }, { id: 14, sequence: 'ЖДЛО ЖДЛО ЖДЛО ЖДЛО' },
      { id: 15, sequence: 'ОЛДЖ ЖДЛО ЛОЖД ДЛОЖ' }, { id: 16, sequence: 'ОЛДЖ ДЖОЛ ЛОЖД ЖДЛО' }
    ]
  },

  // ==================== КЛАСС 3: ФЫВА + ОЛДЖ (обе руки) ====================
  {
    id: 'c3-l1',
    class: 3,
    title: 'А и О',
    description: 'Указательные пальцы',
    image: 'assets/images/dino-class3.png',
    letters: ['А', 'О'],
    levels: [
      { id: 1, sequence: 'АО' }, { id: 2, sequence: 'ОА' },
      { id: 3, sequence: 'АО АО' }, { id: 4, sequence: 'ОА ОА' },
      { id: 5, sequence: 'АОА' }, { id: 6, sequence: 'ОАО' },
      { id: 7, sequence: 'АО А ОА' }, { id: 8, sequence: 'ОА О АО' },
      { id: 9, sequence: 'АОАО' }, { id: 10, sequence: 'ОАОА' },
      { id: 11, sequence: 'А О А О А' }, { id: 12, sequence: 'О А О А О' },
      { id: 13, sequence: 'АО АО АО' }, { id: 14, sequence: 'ОА ОА ОА' },
      { id: 15, sequence: 'АОА ОАО АОА' }, { id: 16, sequence: 'ОАО ААО ОАО' }
    ]
  },
  {
    id: 'c3-l2',
    class: 3,
    title: 'Ф и Ж',
    description: 'Мизинцы',
    image: 'assets/images/dino-class3.png',
    letters: ['Ф', 'Ж'],
    levels: [
      { id: 1, sequence: 'ФЖ' }, { id: 2, sequence: 'ЖФ' },
      { id: 3, sequence: 'ФЖ ФЖ' }, { id: 4, sequence: 'ЖФ ЖФ' },
      { id: 5, sequence: 'ФЖФ' }, { id: 6, sequence: 'ЖФЖ' },
      { id: 7, sequence: 'ФЖ Ф ЖФ' }, { id: 8, sequence: 'ЖФ Ж ФЖ' },
      { id: 9, sequence: 'ФЖФЖ' }, { id: 10, sequence: 'ЖФЖФ' },
      { id: 11, sequence: 'Ф Ж Ф Ж Ф' }, { id: 12, sequence: 'Ж Ф Ж Ф Ж' },
      { id: 13, sequence: 'ФЖ ФЖ ФЖ' }, { id: 14, sequence: 'ЖФ ЖФ ЖФ' },
      { id: 15, sequence: 'ФЖФ ЖФЖ ФЖФ' }, { id: 16, sequence: 'ЖФЖ ФЖФ ЖФЖ' }
    ]
  },
  {
    id: 'c3-l3',
    class: 3,
    title: 'Пробел',
    description: 'Большие пальцы',
    image: 'assets/images/dino-class3.png',
    letters: ['А', 'О', ' '],
    levels: [
      { id: 1, sequence: 'А А' }, { id: 2, sequence: 'О О' },
      { id: 3, sequence: 'А О А' }, { id: 4, sequence: 'О А О' },
      { id: 5, sequence: 'А А О' }, { id: 6, sequence: 'О О А' },
      { id: 7, sequence: 'А О А О' }, { id: 8, sequence: 'О А О А' },
      { id: 9, sequence: 'АО АО' }, { id: 10, sequence: 'ОА ОА' },
      { id: 11, sequence: 'А О АО' }, { id: 12, sequence: 'О А ОА' },
      { id: 13, sequence: 'АО А ОА' }, { id: 14, sequence: 'ОА О АО' },
      { id: 15, sequence: 'АО АО ОА ОА' }, { id: 16, sequence: 'АОА ОАО А О' }
    ]
  },
  {
    id: 'c3-l4',
    class: 3,
    title: 'ФЫ и ОЛ',
    description: 'Левая и правая руки (основные)',
    image: 'assets/images/dino-class3.png',
    letters: ['Ф', 'Ы', 'О', 'Л'],
    levels: [
      { id: 1, sequence: 'ФО' }, { id: 2, sequence: 'ЫЛ' },
      { id: 3, sequence: 'ФО ЫЛ' }, { id: 4, sequence: 'ЫЛ ФО' },
      { id: 5, sequence: 'ФОЛ' }, { id: 6, sequence: 'ЫФО' },
      { id: 7, sequence: 'ФО Ы ЛО' }, { id: 8, sequence: 'ЫЛ Ф ОФ' },
      { id: 9, sequence: 'ФОЛЫ' }, { id: 10, sequence: 'ЫФОЛ' },
      { id: 11, sequence: 'Ф О Ы Л Ф' }, { id: 12, sequence: 'Ы Л Ф О' },
      { id: 13, sequence: 'ФО ЫЛ ФО ЫЛ' }, { id: 14, sequence: 'ЫЛ ФО ЫЛ ФО' },
      { id: 15, sequence: 'ФОЛ ФО ЛОФ ЫЛФ' }, { id: 16, sequence: 'ФОЛЫ ЫФОЛ ЛОФЫ ЫЛФО' }
    ]
  },
  {
    id: 'c3-l5',
    class: 3,
    title: 'ВА и ДЖ',
    description: 'Средние и безымянные пальцы',
    image: 'assets/images/dino-class3.png',
    letters: ['В', 'А', 'Д', 'Ж'],
    levels: [
      { id: 1, sequence: 'ВД' }, { id: 2, sequence: 'АЖ' },
      { id: 3, sequence: 'ВД АЖ' }, { id: 4, sequence: 'АЖ ВД' },
      { id: 5, sequence: 'ВАД' }, { id: 6, sequence: 'АЖВ' },
      { id: 7, sequence: 'ВА Д ЖА' }, { id: 8, sequence: 'ЖД А ВД' },
      { id: 9, sequence: 'ВАДЖ' }, { id: 10, sequence: 'АЖВД' },
      { id: 11, sequence: 'В А Д Ж В' }, { id: 12, sequence: 'А Ж В Д А' },
      { id: 13, sequence: 'ВА ДЖ ВА ДЖ' }, { id: 14, sequence: 'АЖ ВД АЖ ВД' },
      { id: 15, sequence: 'ВАД АЖВ ДВА ЖВА' }, { id: 16, sequence: 'ВАДЖ АЖВД ДЖВА ЖВАД' }
    ]
  },
  {
    id: 'c3-l6',
    class: 3,
    title: 'ФЫВА и О',
    description: 'Левая рука + указательный правой',
    image: 'assets/images/dino-class3.png',
    letters: ['Ф', 'Ы', 'В', 'А', 'О'],
    levels: [
      { id: 1, sequence: 'АО' }, { id: 2, sequence: 'ФАО' },
      { id: 3, sequence: 'ВАО ФАО' }, { id: 4, sequence: 'ЫАО ВАЗ' },
      { id: 5, sequence: 'ФЫАО' }, { id: 6, sequence: 'ВАОЫ' },
      { id: 7, sequence: 'А О ФАО' }, { id: 8, sequence: 'О А ВАЗ' },
      { id: 9, sequence: 'ФЫВАО' }, { id: 10, sequence: 'ВАОЫФ' },
      { id: 11, sequence: 'А О Ф В' }, { id: 12, sequence: 'О А В Ы Ф' },
      { id: 13, sequence: 'ФЫВА О ФЫВА' }, { id: 14, sequence: 'ВАОЫ Ф ФЫВА' },
      { id: 15, sequence: 'АВЫО ФАОЫ ВФАО' }, { id: 16, sequence: 'ФЫВАО ВАОЫФ АОФЫВ ОФЫВА' }
    ]
  },
  {
    id: 'c3-l7',
    class: 3,
    title: 'А и ОЛДЖ',
    description: 'Указательный левой + правая рука',
    image: 'assets/images/dino-class3.png',
    letters: ['А', 'О', 'Л', 'Д', 'Ж'],
    levels: [
      { id: 1, sequence: 'АО' }, { id: 2, sequence: 'АЛ' },
      { id: 3, sequence: 'АО АЛ' }, { id: 4, sequence: 'АЛ АО' },
      { id: 5, sequence: 'АОЛ' }, { id: 6, sequence: 'АЛД' },
      { id: 7, sequence: 'АО Л АД' }, { id: 8, sequence: 'АЛ О АЖ' },
      { id: 9, sequence: 'АОЛД' }, { id: 10, sequence: 'АЛДЖ' },
      { id: 11, sequence: 'А О Л Д Ж' }, { id: 12, sequence: 'А Л Д Ж О' },
      { id: 13, sequence: 'АО ЛД АЛ ДЖ' }, { id: 14, sequence: 'АЛ ДО АЖ ЛД' },
      { id: 15, sequence: 'АОЛД АЛДЖ ЛДОА ЖАОЛ' }, { id: 16, sequence: 'АОЛДЖ АЛДЖО ЛДОЖА ДЖАОЛ' }
    ]
  },
  {
    id: 'c3-l8',
    class: 3,
    title: 'ФЫВА и ОЛДЖ',
    description: 'Все 8 букв домашнего ряда',
    image: 'assets/images/dino-class3.png',
    letters: ['Ф', 'Ы', 'В', 'А', 'О', 'Л', 'Д', 'Ж'],
    levels: [
      { id: 1, sequence: 'ФАО' }, { id: 2, sequence: 'ВЛД' },
      { id: 3, sequence: 'ФАО ВЛД' }, { id: 4, sequence: 'ВЛД ФАО' },
      { id: 5, sequence: 'ФЫАО' }, { id: 6, sequence: 'ВЛДЖ' },
      { id: 7, sequence: 'ФАО ЛДВ' }, { id: 8, sequence: 'ВЛД ЖОФ' },
      { id: 9, sequence: 'ФЫВА ОЛДЖ' }, { id: 10, sequence: 'ОЛДЖ ФЫВА' },
      { id: 11, sequence: 'Ф А О Л В Д' }, { id: 12, sequence: 'Ы Ж Д О Л А' },
      { id: 13, sequence: 'ФЫВА ОЛДЖ ФЫВА' }, { id: 14, sequence: 'ОЛДЖ ФЫВА ОЛДЖ' },
      { id: 15, sequence: 'ФАО ВЛД ЫЖО АДЛ' }, { id: 16, sequence: 'ФЫВА ОЛДЖ АВЫО ЛДЖФ' }
    ]
  },
  {
    id: 'c3-l9',
    class: 3,
    title: 'Слова из 8 букв',
    description: 'Простые слова',
    image: 'assets/images/dino-class3.png',
    letters: ['Ф', 'Ы', 'В', 'А', 'О', 'Л', 'Д', 'Ж'],
    levels: [
      { id: 1, sequence: 'ОЛОВА' }, { id: 2, sequence: 'ВОДА' },
      { id: 3, sequence: 'ЛАВА' }, { id: 4, sequence: 'ДОВАД' },
      { id: 5, sequence: 'ОЛОВА ВОДА' }, { id: 6, sequence: 'ЛАВА ДОВАД' },
      { id: 7, sequence: 'ВОДА ЛАВА' }, { id: 8, sequence: 'ДОВАД ОЛОВА' },
      { id: 9, sequence: 'ВОДА ЛАВА ОЛОВА' }, { id: 10, sequence: 'ЛАВА ДОВАД ВОДА' },
      { id: 11, sequence: 'ОЛОВА ВОДА ЛАВА' }, { id: 12, sequence: 'ДОВАД ЛАВА ОЛОВА' },
      { id: 13, sequence: 'ВОДА ЛАВА ДОВАД ОЛОВА' }, { id: 14, sequence: 'ЛАВА ОЛОВА ВОДА ДОВАД' },
      { id: 15, sequence: 'ОЛОВА ДОВАД ЛАВА ВОДА' }, { id: 16, sequence: 'ВОДА ЛАВА ОЛОВА ДОВАД' }
    ]
  },
  {
    id: 'c3-l10',
    class: 3,
    title: 'ФЫВА+ОЛДЖ — итог',
    description: 'Закрепление домашнего ряда',
    image: 'assets/images/dino-class3.png',
    letters: ['Ф', 'Ы', 'В', 'А', 'О', 'Л', 'Д', 'Ж'],
    levels: [
      { id: 1, sequence: 'ФАО ЛДВ' }, { id: 2, sequence: 'ВЛД ЖОФ' },
      { id: 3, sequence: 'ОЛАВ ДФЫО' }, { id: 4, sequence: 'ДЖОЛ АФВЫ' },
      { id: 5, sequence: 'ФЫВА ОЛДЖ ФЫВА' }, { id: 6, sequence: 'ОЛДЖ ФЫВА ОЛДЖ' },
      { id: 7, sequence: 'АВЫО ЛДЖФ ДЛОВА' }, { id: 8, sequence: 'ФАОЛДЖ ВЛДФОЫ' },
      { id: 9, sequence: 'ФЫВА ОЛДЖ АВЫО ЛДЖФ' }, { id: 10, sequence: 'ОЛДЖ ФЫВА ДЛОВА ЖОФЫ' },
      { id: 11, sequence: 'Ф А О Л В Д Ж Ы' }, { id: 12, sequence: 'А Л Д Ж О Ф Ы В' },
      { id: 13, sequence: 'ФЫВА ОЛДЖ ФЫВА ОЛДЖ' }, { id: 14, sequence: 'ОЛДЖ ФЫВА ОЛДЖ ФЫВА' },
      { id: 15, sequence: 'ФЫВА ОЛДЖ АВЫО ЛДЖФ ДЛОВА' }, { id: 16, sequence: 'ФЫВА ОЛДЖ ФЫВА ОЛДЖ ФЫВА ОЛДЖ' }
    ]
  },


    // ==================== КЛАСС 4: Верхний ряд, левая рука (Й, Ц, У, К, Е) ====================
  {
    id: 'c4-l1', class: 4, title: 'У и К', description: 'Средний и указательный левой руки',
    image: 'assets/images/dino-class4.png', letters: ['У', 'К'],
    levels: [
      { id: 1, sequence: 'УУУ' }, { id: 2, sequence: 'ККК' },
      { id: 3, sequence: 'УК УК' }, { id: 4, sequence: 'КУ КУ' },
      { id: 5, sequence: 'УКУ' }, { id: 6, sequence: 'КУК' },
      { id: 7, sequence: 'У У К К' }, { id: 8, sequence: 'К К У У' },
      { id: 9, sequence: 'УКУК' }, { id: 10, sequence: 'КУКУ' },
      { id: 11, sequence: 'У К У К У' }, { id: 12, sequence: 'К У К У К' },
      { id: 13, sequence: 'УКУ УКУ' }, { id: 14, sequence: 'КУК КУК' },
      { id: 15, sequence: 'У КУК У КУК' }, { id: 16, sequence: 'К УКУ К УКУ' }
    ]
  },
  {
    id: 'c4-l2', class: 4, title: 'Буква Е', description: 'Указательный палец левой руки',
    image: 'assets/images/dino-class4.png', letters: ['Е'],
    levels: [
      { id: 1, sequence: 'ЕЕЕ' }, { id: 2, sequence: 'ЕЕЕЕ' },
      { id: 3, sequence: 'Е Е Е' }, { id: 4, sequence: 'ЕЕЕ ЕЕЕ' },
      { id: 5, sequence: 'ЕУ ЕК' }, { id: 6, sequence: 'УЕ КУ' },
      { id: 7, sequence: 'Е У Е К' }, { id: 8, sequence: 'К Е У Е' },
      { id: 9, sequence: 'ЕУК КУЕ' }, { id: 10, sequence: 'КЕУ УЕК' },
      { id: 11, sequence: 'Е У К Е У К' }, { id: 12, sequence: 'К Е У К Е У' },
      { id: 13, sequence: 'ЕУК ЕУК' }, { id: 14, sequence: 'КУЕ КУЕ' },
      { id: 15, sequence: 'Е УКУ Е УКУ' }, { id: 16, sequence: 'К УЕК К УЕК' }
    ]
  },
  {
    id: 'c4-l3', class: 4, title: 'Буква Ц', description: 'Безымянный палец левой руки',
    image: 'assets/images/dino-class4.png', letters: ['Ц'],
    levels: [
      { id: 1, sequence: 'ЦЦЦ' }, { id: 2, sequence: 'ЦЦЦЦ' },
      { id: 3, sequence: 'Ц Ц Ц' }, { id: 4, sequence: 'ЦЦЦ ЦЦЦ' },
      { id: 5, sequence: 'ЦУ ЦК' }, { id: 6, sequence: 'УЦ КУ' },
      { id: 7, sequence: 'Ц У Ц К' }, { id: 8, sequence: 'К Ц У Ц' },
      { id: 9, sequence: 'ЦУК КУЦ' }, { id: 10, sequence: 'КЦУ УЦК' },
      { id: 11, sequence: 'Ц У К Ц У К' }, { id: 12, sequence: 'К Ц У К Ц У' },
      { id: 13, sequence: 'ЦУК ЦУК' }, { id: 14, sequence: 'КУЦ КУЦ' },
      { id: 15, sequence: 'Ц УКУ Ц УКУ' }, { id: 16, sequence: 'К УЦК К УЦК' }
    ]
  },
  {
    id: 'c4-l4', class: 4, title: 'Буква Й', description: 'Мизинец левой руки',
    image: 'assets/images/dino-class4.png', letters: ['Й'],
    levels: [
      { id: 1, sequence: 'ЙЙЙ' }, { id: 2, sequence: 'ЙЙЙЙ' },
      { id: 3, sequence: 'Й Й Й' }, { id: 4, sequence: 'ЙЙЙ ЙЙЙ' },
      { id: 5, sequence: 'ЙЦ ЙУ' }, { id: 6, sequence: 'ЦЙ УЙ' },
      { id: 7, sequence: 'Й Ц У Й' }, { id: 8, sequence: 'У Й Ц Й' },
      { id: 9, sequence: 'ЙЦУ УЦЙ' }, { id: 10, sequence: 'УЙЦ ЦЙУ' },
      { id: 11, sequence: 'Й Ц У Й Ц У' }, { id: 12, sequence: 'У Й Ц У Й Ц' },
      { id: 13, sequence: 'ЙЦУ ЙЦУ' }, { id: 14, sequence: 'УЦЙ УЦЙ' },
      { id: 15, sequence: 'Й ЦУК Й ЦУК' }, { id: 16, sequence: 'К УЦЙ К УЦЙ' }
    ]
  },
  {
    id: 'c4-l5', class: 4, title: 'У, К, Е вместе', description: 'Указательный и средний левой',
    image: 'assets/images/dino-class4.png', letters: ['У', 'К', 'Е'],
    levels: [
      { id: 1, sequence: 'УКЕ' }, { id: 2, sequence: 'ЕКУ' },
      { id: 3, sequence: 'УКЕ УКЕ' }, { id: 4, sequence: 'ЕКУ ЕКУ' },
      { id: 5, sequence: 'У Е К У' }, { id: 6, sequence: 'К У Е К' },
      { id: 7, sequence: 'УК ЕК УК' }, { id: 8, sequence: 'КУ УЕ КУ' },
      { id: 9, sequence: 'УКЕУ КУЕК' }, { id: 10, sequence: 'ЕКУК УЕКУ' },
      { id: 11, sequence: 'У К Е У К Е' }, { id: 12, sequence: 'Е У К Е У К' },
      { id: 13, sequence: 'УКЕ УКЕ УКЕ' }, { id: 14, sequence: 'ЕКУ ЕКУ ЕКУ' },
      { id: 15, sequence: 'УКЕУ ЕКУК УКЕУ' }, { id: 16, sequence: 'ЕКУК УКЕУ ЕКУК' }
    ]
  },
  {
    id: 'c4-l6', class: 4, title: 'Й, Ц, У, К, Е', description: 'Весь верхний ряд левой руки',
    image: 'assets/images/dino-class4.png', letters: ['Й', 'Ц', 'У', 'К', 'Е'],
    levels: [
      { id: 1, sequence: 'ЙЦУКЕ' }, { id: 2, sequence: 'ЕКУЦЙ' },
      { id: 3, sequence: 'ЙЦУ КЕ' }, { id: 4, sequence: 'ЕК УЦЙ' },
      { id: 5, sequence: 'Й Ц У К Е' }, { id: 6, sequence: 'Е К У Ц Й' },
      { id: 7, sequence: 'ЙЦУ ЙЦУ КЕ КЕ' }, { id: 8, sequence: 'ЕКУ ЕКУ ЦЙ ЦЙ' },
      { id: 9, sequence: 'ЙЦУКЕ ЕКУЦЙ' }, { id: 10, sequence: 'ЕКУЦЙ ЙЦУКЕ' },
      { id: 11, sequence: 'Й Ц У К Е Й Ц' }, { id: 12, sequence: 'Е К У Ц Й Е К' },
      { id: 13, sequence: 'ЙЦУКЕ ЙЦУКЕ' }, { id: 14, sequence: 'ЕКУЦЙ ЕКУЦЙ' },
      { id: 15, sequence: 'ЙЦУ КЕ УЦ ЙЕ' }, { id: 16, sequence: 'ЕК УЦ ЙЕ КУ ЦЙ' }
    ]
  },
  {
    id: 'c4-l7', class: 4, title: 'Верхний + Домашний (А, В)', description: 'Связка рядов',
    image: 'assets/images/dino-class4.png', letters: ['У', 'К', 'Е', 'А', 'В'],
    levels: [
      { id: 1, sequence: 'УА КА' }, { id: 2, sequence: 'АУ АК' },
      { id: 3, sequence: 'ЕВ ВЕ' }, { id: 4, sequence: 'ВЕ ЕВ' },
      { id: 5, sequence: 'УАВ КАВ' }, { id: 6, sequence: 'ВАУ ВАК' },
      { id: 7, sequence: 'У А К А Е А' }, { id: 8, sequence: 'А У А К А Е' },
      { id: 9, sequence: 'УКА ВЕА УКА' }, { id: 10, sequence: 'АКУ АВЕ АКУ' },
      { id: 11, sequence: 'УАВ КАВ ЕАВ' }, { id: 12, sequence: 'ВАУ ВАК ВАЕ' },
      { id: 13, sequence: 'УКАВ КАВУ' }, { id: 14, sequence: 'ВАКУ ВАУК' },
      { id: 15, sequence: 'У А В К Е А У' }, { id: 16, sequence: 'А У К А В Е А' }
    ]
  },
  {
    id: 'c4-l8', class: 4, title: 'Закрепление 4 класса', description: 'Свободная печать верхнего левого',
    image: 'assets/images/dino-class4.png', letters: ['Й', 'Ц', 'У', 'К', 'Е', 'А', 'В'],
    levels: [
      { id: 1, sequence: 'УКА ВЕК' }, { id: 2, sequence: 'КАВ ЕЦУ' },
      { id: 3, sequence: 'ЙУК ЦЕА' }, { id: 4, sequence: 'АЕК УЦЙ' },
      { id: 5, sequence: 'УКАВ ЕЦУЙ' }, { id: 6, sequence: 'ЙЦУК ЕАВУ' },
      { id: 7, sequence: 'У К А В Е К У' }, { id: 8, sequence: 'А В Е К У Ц А' },
      { id: 9, sequence: 'ЙЦУКЕ УКАВЙ' }, { id: 10, sequence: 'ЕКУЦЙ ВАУКЕ' },
      { id: 11, sequence: 'УКА ВЕК УЦА' }, { id: 12, sequence: 'КАВ ЕЦУ ЙВА' },
      { id: 13, sequence: 'ЙУК ЦЕА УКА' }, { id: 14, sequence: 'АЕК УЦЙ ВАУ' },
      { id: 15, sequence: 'УКАВ ЕЦУЙ ЙЦУК' }, { id: 16, sequence: 'ЕАВУ ВАУК ЕКУЦ' }
    ]
  },

  // ==================== КЛАСС 5: Верхний ряд, правая рука (Н, Г, Ш, Щ, З, Х) ====================
  {
    id: 'c5-l1', class: 5, title: 'Н и Г', description: 'Указательные пальцы правой руки',
    image: 'assets/images/dino-class5.png', letters: ['Н', 'Г'],
    levels: [
      { id: 1, sequence: 'ННН' }, { id: 2, sequence: 'ГГГ' },
      { id: 3, sequence: 'НГ НГ' }, { id: 4, sequence: 'ГН ГН' },
      { id: 5, sequence: 'НГН' }, { id: 6, sequence: 'ГНГ' },
      { id: 7, sequence: 'Н Н Г Г' }, { id: 8, sequence: 'Г Г Н Н' },
      { id: 9, sequence: 'НГНГ' }, { id: 10, sequence: 'ГНГН' },
      { id: 11, sequence: 'Н Г Н Г Н' }, { id: 12, sequence: 'Г Н Г Н Г' },
      { id: 13, sequence: 'НГН НГН' }, { id: 14, sequence: 'ГНГ ГНГ' },
      { id: 15, sequence: 'Н ГНГ Н ГНГ' }, { id: 16, sequence: 'Г НГН Г НГН' }
    ]
  },
  {
    id: 'c5-l2', class: 5, title: 'Буква Ш', description: 'Средний палец правой руки',
    image: 'assets/images/dino-class5.png', letters: ['Ш'],
    levels: [
      { id: 1, sequence: 'ШШШ' }, { id: 2, sequence: 'ШШШШ' },
      { id: 3, sequence: 'Ш Ш Ш' }, { id: 4, sequence: 'ШШШ ШШШ' },
      { id: 5, sequence: 'ШН ШГ' }, { id: 6, sequence: 'НШ ГШ' },
      { id: 7, sequence: 'Ш Н Ш Г' }, { id: 8, sequence: 'Г Ш Н Ш' },
      { id: 9, sequence: 'ШНГ ГНШ' }, { id: 10, sequence: 'ГШН НШГ' },
      { id: 11, sequence: 'Ш Н Г Ш Н Г' }, { id: 12, sequence: 'Г Ш Н Г Ш Н' },
      { id: 13, sequence: 'ШНГ ШНГ' }, { id: 14, sequence: 'ГНШ ГНШ' },
      { id: 15, sequence: 'Ш НГН Ш НГН' }, { id: 16, sequence: 'Г ШНГ Г ШНГ' }
    ]
  },
  {
    id: 'c5-l3', class: 5, title: 'Щ и З', description: 'Безымянные пальцы правой руки',
    image: 'assets/images/dino-class5.png', letters: ['Щ', 'З'],
    levels: [
      { id: 1, sequence: 'ЩЩЩ' }, { id: 2, sequence: 'ЗЗЗ' },
      { id: 3, sequence: 'ЩЗ ЩЗ' }, { id: 4, sequence: 'ЗЩ ЗЩ' },
      { id: 5, sequence: 'ЩЗЩ' }, { id: 6, sequence: 'ЗЩЗ' },
      { id: 7, sequence: 'Щ Щ З З' }, { id: 8, sequence: 'З З Щ Щ' },
      { id: 9, sequence: 'ЩЗЩЗ' }, { id: 10, sequence: 'ЗЩЗЩ' },
      { id: 11, sequence: 'Щ З Щ З Щ' }, { id: 12, sequence: 'З Щ З Щ З' },
      { id: 13, sequence: 'ЩЗЩ ЩЗЩ' }, { id: 14, sequence: 'ЗЩЗ ЗЩЗ' },
      { id: 15, sequence: 'Щ ЗЩЗ Щ ЗЩЗ' }, { id: 16, sequence: 'З ЩЗЩ З ЩЗЩ' }
    ]
  },
  {
    id: 'c5-l4', class: 5, title: 'Буква Х', description: 'Мизинец правой руки',
    image: 'assets/images/dino-class5.png', letters: ['Х'],
    levels: [
      { id: 1, sequence: 'ХХХ' }, { id: 2, sequence: 'ХХХХ' },
      { id: 3, sequence: 'Х Х Х' }, { id: 4, sequence: 'ХХХ ХХХ' },
      { id: 5, sequence: 'ХЩ ХЗ' }, { id: 6, sequence: 'ЩХ ЗХ' },
      { id: 7, sequence: 'Х Щ Х З' }, { id: 8, sequence: 'З Х Щ Х' },
      { id: 9, sequence: 'ХЩЗ ЗЩХ' }, { id: 10, sequence: 'ЗХЩ ЩХЗ' },
      { id: 11, sequence: 'Х Щ З Х Щ З' }, { id: 12, sequence: 'З Х Щ З Х Щ' },
      { id: 13, sequence: 'ХЩЗ ХЩЗ' }, { id: 14, sequence: 'ЗЩХ ЗЩХ' },
      { id: 15, sequence: 'Х ЩЗЩ Х ЩЗЩ' }, { id: 16, sequence: 'З ХЩЗ З ХЩЗ' }
    ]
  },
  {
    id: 'c5-l5', class: 5, title: 'Н, Г, Ш вместе', description: 'Центр верхнего правого ряда',
    image: 'assets/images/dino-class5.png', letters: ['Н', 'Г', 'Ш'],
    levels: [
      { id: 1, sequence: 'НГШ' }, { id: 2, sequence: 'ШГН' },
      { id: 3, sequence: 'НГШ НГШ' }, { id: 4, sequence: 'ШГН ШГН' },
      { id: 5, sequence: 'Н Ш Г Н' }, { id: 6, sequence: 'Г Н Ш Г' },
      { id: 7, sequence: 'НГ ШГ НГ' }, { id: 8, sequence: 'ГН ШН ГН' },
      { id: 9, sequence: 'НГШН ШНГШ' }, { id: 10, sequence: 'ШНГН НШНГ' },
      { id: 11, sequence: 'Н Г Ш Н Г Ш' }, { id: 12, sequence: 'Ш Н Г Ш Н Г' },
      { id: 13, sequence: 'НГШ НГШ НГШ' }, { id: 14, sequence: 'ШГН ШГН ШГН' },
      { id: 15, sequence: 'НГШН ШНГШ НГШН' }, { id: 16, sequence: 'ШНГН НШНГ ШНГН' }
    ]
  },
  {
    id: 'c5-l6', class: 5, title: 'Щ, З, Х вместе', description: 'Периферия верхнего правого ряда',
    image: 'assets/images/dino-class5.png', letters: ['Щ', 'З', 'Х'],
    levels: [
      { id: 1, sequence: 'ЩЗХ' }, { id: 2, sequence: 'ХЗЩ' },
      { id: 3, sequence: 'ЩЗХ ЩЗХ' }, { id: 4, sequence: 'ХЗЩ ХЗЩ' },
      { id: 5, sequence: 'Щ Х З Щ' }, { id: 6, sequence: 'З Щ Х З' },
      { id: 7, sequence: 'ЩЗ ХЗ ЩЗ' }, { id: 8, sequence: 'ЗЩ ХЩ ЗЩ' },
      { id: 9, sequence: 'ЩЗХЩ ХЩЗХ' }, { id: 10, sequence: 'ХЩЗЩ ЩХЩЗ' },
      { id: 11, sequence: 'Щ З Х Щ З Х' }, { id: 12, sequence: 'Х Щ З Х Щ З' },
      { id: 13, sequence: 'ЩЗХ ЩЗХ ЩЗХ' }, { id: 14, sequence: 'ХЗЩ ХЗЩ ХЗЩ' },
      { id: 15, sequence: 'ЩЗХЩ ХЩЗХ ЩЗХЩ' }, { id: 16, sequence: 'ХЩЗЩ ЩХЩЗ ХЩЗЩ' }
    ]
  },
  {
    id: 'c5-l7', class: 5, title: 'Н, Г, Ш, Щ, З, Х', description: 'Весь верхний ряд правой руки',
    image: 'assets/images/dino-class5.png', letters: ['Н', 'Г', 'Ш', 'Щ', 'З', 'Х'],
    levels: [
      { id: 1, sequence: 'НГШЩЗХ' }, { id: 2, sequence: 'ХЗЩШГН' },
      { id: 3, sequence: 'НГШ ЩЗХ' }, { id: 4, sequence: 'ХЗЩ ШГН' },
      { id: 5, sequence: 'Н Г Ш Щ З Х' }, { id: 6, sequence: 'Х З Щ Ш Г Н' },
      { id: 7, sequence: 'НГШ НГШ ЩЗХ ЩЗХ' }, { id: 8, sequence: 'ХЗЩ ХЗЩ ШГН ШГН' },
      { id: 9, sequence: 'НГШЩЗХ ХЗЩШГН' }, { id: 10, sequence: 'ХЗЩШГН НГШЩЗХ' },
      { id: 11, sequence: 'Н Г Ш Щ З Х Н Г' }, { id: 12, sequence: 'Х З Щ Ш Г Н Х З' },
      { id: 13, sequence: 'НГШЩЗХ НГШЩЗХ' }, { id: 14, sequence: 'ХЗЩШГН ХЗЩШГН' },
      { id: 15, sequence: 'НГШ ЩЗХ НГЗ ХЩШ' }, { id: 16, sequence: 'ХЗЩ ШГН ХЗГ НЩШ' }
    ]
  },
  {
    id: 'c5-l8', class: 5, title: 'Закрепление 5 класса', description: 'Свободная печать верхнего правого',
    image: 'assets/images/dino-class5.png', letters: ['Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'О', 'Л'],
    levels: [
      { id: 1, sequence: 'НО ГШ' }, { id: 2, sequence: 'ОЛ ЩЗ' },
      { id: 3, sequence: 'НГШ ОЛЩ' }, { id: 4, sequence: 'ЩЗХ ЛОГ' },
      { id: 5, sequence: 'НОГ ШЩЗ ХЛН' }, { id: 6, sequence: 'ЛОН ГШЩ ЗХГ' },
      { id: 7, sequence: 'Н О Г Ш Щ З Х' }, { id: 8, sequence: 'Х З Щ Ш Г О Н' },
      { id: 9, sequence: 'НОГШ ЩЗХЛ' }, { id: 10, sequence: 'ЛХЗЩ ШГОН' },
      { id: 11, sequence: 'НОГ ШЩЗ ХЛН' }, { id: 12, sequence: 'ЛОН ГШЩ ЗХГ' },
      { id: 13, sequence: 'НГШЩЗХ НОЛГ' }, { id: 14, sequence: 'ХЗЩШГН ЛОНЩ' },
      { id: 15, sequence: 'НОГ ШЩЗ ХЛН ОНГ' }, { id: 16, sequence: 'ЛОН ГШЩ ЗХГ НОЛ' }
    ]
  },

  // ==================== КЛАСС 6: Нижний ряд, левая рука (Я, Ч, С, М, И) ====================
  {
    id: 'c6-l1', class: 6, title: 'М и И', description: 'Указательные пальцы левой руки',
    image: 'assets/images/dino-class6.png', letters: ['М', 'И'],
    levels: [
      { id: 1, sequence: 'МММ' }, { id: 2, sequence: 'ИИИ' },
      { id: 3, sequence: 'МИ МИ' }, { id: 4, sequence: 'ИМ ИМ' },
      { id: 5, sequence: 'МИМ' }, { id: 6, sequence: 'ИМИ' },
      { id: 7, sequence: 'М М И И' }, { id: 8, sequence: 'И И М М' },
      { id: 9, sequence: 'МИМИ' }, { id: 10, sequence: 'ИМИМ' },
      { id: 11, sequence: 'М И М И М' }, { id: 12, sequence: 'И М И М И' },
      { id: 13, sequence: 'МИМ МИМ' }, { id: 14, sequence: 'ИМИ ИМИ' },
      { id: 15, sequence: 'М ИМИ М ИМИ' }, { id: 16, sequence: 'И МИМ И МИМ' }
    ]
  },
  {
    id: 'c6-l2', class: 6, title: 'Буква С', description: 'Средний палец левой руки',
    image: 'assets/images/dino-class6.png', letters: ['С'],
    levels: [
      { id: 1, sequence: 'ССС' }, { id: 2, sequence: 'СССС' },
      { id: 3, sequence: 'С С С' }, { id: 4, sequence: 'ССС ССС' },
      { id: 5, sequence: 'СМ СИ' }, { id: 6, sequence: 'МС ИС' },
      { id: 7, sequence: 'С М С И' }, { id: 8, sequence: 'И С М С' },
      { id: 9, sequence: 'СМИ ИМС' }, { id: 10, sequence: 'ИСМ МСИ' },
      { id: 11, sequence: 'С М И С М И' }, { id: 12, sequence: 'И С М И С М' },
      { id: 13, sequence: 'СМИ СМИ' }, { id: 14, sequence: 'ИМС ИМС' },
      { id: 15, sequence: 'С МИМ С МИМ' }, { id: 16, sequence: 'М ИСИ М ИСИ' }
    ]
  },
  {
    id: 'c6-l3', class: 6, title: 'Буква Ч', description: 'Безымянный палец левой руки',
    image: 'assets/images/dino-class6.png', letters: ['Ч'],
    levels: [
      { id: 1, sequence: 'ЧЧЧ' }, { id: 2, sequence: 'ЧЧЧЧ' },
      { id: 3, sequence: 'Ч Ч Ч' }, { id: 4, sequence: 'ЧЧЧ ЧЧЧ' },
      { id: 5, sequence: 'ЧС ЧМ' }, { id: 6, sequence: 'СЧ МЧ' },
      { id: 7, sequence: 'Ч С Ч М' }, { id: 8, sequence: 'М Ч С Ч' },
      { id: 9, sequence: 'ЧСМ МСЧ' }, { id: 10, sequence: 'МСЧ СЧМ' },
      { id: 11, sequence: 'Ч С М Ч С М' }, { id: 12, sequence: 'М Ч С М Ч С' },
      { id: 13, sequence: 'ЧСМ ЧСМ' }, { id: 14, sequence: 'МСЧ МСЧ' },
      { id: 15, sequence: 'Ч СМС Ч СМС' }, { id: 16, sequence: 'С ЧМС С ЧМС' }
    ]
  },
  {
    id: 'c6-l4', class: 6, title: 'Буква Я', description: 'Мизинец левой руки',
    image: 'assets/images/dino-class6.png', letters: ['Я'],
    levels: [
      { id: 1, sequence: 'ЯЯЯ' }, { id: 2, sequence: 'ЯЯЯЯ' },
      { id: 3, sequence: 'Я Я Я' }, { id: 4, sequence: 'ЯЯЯ ЯЯЯ' },
      { id: 5, sequence: 'ЯЧ ЯС' }, { id: 6, sequence: 'ЧЯ СЯ' },
      { id: 7, sequence: 'Я Ч Я С' }, { id: 8, sequence: 'С Я Ч Я' },
      { id: 9, sequence: 'ЯЧС СЧЯ' }, { id: 10, sequence: 'СЯЧ ЧЯС' },
      { id: 11, sequence: 'Я Ч С Я Ч С' }, { id: 12, sequence: 'С Я Ч С Я Ч' },
      { id: 13, sequence: 'ЯЧС ЯЧС' }, { id: 14, sequence: 'СЧЯ СЧЯ' },
      { id: 15, sequence: 'Я ЧСЧ Я ЧСЧ' }, { id: 16, sequence: 'Ч ЯСЧ Ч ЯСЧ' }
    ]
  },
  {
    id: 'c6-l5', class: 6, title: 'М, И, С вместе', description: 'Центр нижнего левого ряда',
    image: 'assets/images/dino-class6.png', letters: ['М', 'И', 'С'],
    levels: [
      { id: 1, sequence: 'МИС' }, { id: 2, sequence: 'СИМ' },
      { id: 3, sequence: 'МИС МИС' }, { id: 4, sequence: 'СИМ СИМ' },
      { id: 5, sequence: 'М С И М' }, { id: 6, sequence: 'И М С И' },
      { id: 7, sequence: 'МИ СИ МИ' }, { id: 8, sequence: 'ИМ СМ ИМ' },
      { id: 9, sequence: 'МИСИ СИМС' }, { id: 10, sequence: 'ИСМИ МИСИ' },
      { id: 11, sequence: 'М И С М И С' }, { id: 12, sequence: 'С М И С М И' },
      { id: 13, sequence: 'МИС МИС МИС' }, { id: 14, sequence: 'СИМ СИМ СИМ' },
      { id: 15, sequence: 'МИСИ СИМС МИСИ' }, { id: 16, sequence: 'ИСМИ МИСИ ИСМИ' }
    ]
  },
  {
    id: 'c6-l6', class: 6, title: 'Ч, Я вместе с М, И, С', description: 'Весь нижний ряд левой руки',
    image: 'assets/images/dino-class6.png', letters: ['Я', 'Ч', 'С', 'М', 'И'],
    levels: [
      { id: 1, sequence: 'ЯЧСМИ' }, { id: 2, sequence: 'ИМСЧЯ' },
      { id: 3, sequence: 'ЯЧС МИ' }, { id: 4, sequence: 'ИМ СЧЯ' },
      { id: 5, sequence: 'Я Ч С М И' }, { id: 6, sequence: 'И М С Ч Я' },
      { id: 7, sequence: 'ЯЧС ЯЧС МИ МИ' }, { id: 8, sequence: 'ИМ ИМ СЧЯ СЧЯ' },
      { id: 9, sequence: 'ЯЧСМИ ИМСЧЯ' }, { id: 10, sequence: 'ИМСЧЯ ЯЧСМИ' },
      { id: 11, sequence: 'Я Ч С М И Я Ч' }, { id: 12, sequence: 'И М С Ч Я И М' },
      { id: 13, sequence: 'ЯЧСМИ ЯЧСМИ' }, { id: 14, sequence: 'ИМСЧЯ ИМСЧЯ' },
      { id: 15, sequence: 'ЯЧС МИ ЧСЯ' }, { id: 16, sequence: 'ИМ СЧЯ МИС' }
    ]
  },
  {
    id: 'c6-l7', class: 6, title: 'Нижний + Домашний (А, В)', description: 'Связка нижнего и домашнего рядов',
    image: 'assets/images/dino-class6.png', letters: ['Я', 'Ч', 'С', 'М', 'И', 'А', 'В'],
    levels: [
      { id: 1, sequence: 'МА ИА' }, { id: 2, sequence: 'АМ АИ' },
      { id: 3, sequence: 'СВ ВС' }, { id: 4, sequence: 'ВС СВ' },
      { id: 5, sequence: 'МАС ИВС' }, { id: 6, sequence: 'САМ СВИ' },
      { id: 7, sequence: 'М А С И М А' }, { id: 8, sequence: 'А М И С А М' },
      { id: 9, sequence: 'МАСИ ВСМА' }, { id: 10, sequence: 'АИСМ АВСМ' },
      { id: 11, sequence: 'МАС ИВС ЧА' }, { id: 12, sequence: 'САМ СВИ ЯА' },
      { id: 13, sequence: 'МАСИ ВСМА' }, { id: 14, sequence: 'АИСМ АВСМ' },
      { id: 15, sequence: 'М А С И Ч Я В А' }, { id: 16, sequence: 'А М И С Я Ч А В' }
    ]
  },
  {
    id: 'c6-l8', class: 6, title: 'Закрепление 6 класса', description: 'Свободная печать нижнего левого',
    image: 'assets/images/dino-class6.png', letters: ['Я', 'Ч', 'С', 'М', 'И', 'А', 'В', 'У', 'К'],
    levels: [
      { id: 1, sequence: 'МАС КУ' }, { id: 2, sequence: 'УК ИЯ' },
      { id: 3, sequence: 'МАСИ КУЧЯ' }, { id: 4, sequence: 'ЯЧСИ УКМА' },
      { id: 5, sequence: 'МАС УК ИЯ ЧС' }, { id: 6, sequence: 'ЯЧС МАУ КИС' },
      { id: 7, sequence: 'М А С И У К Я Ч' }, { id: 8, sequence: 'Ч Я К У И С А М' },
      { id: 9, sequence: 'МАСИ КУЧЯ МАС' }, { id: 10, sequence: 'ЯЧСИ УКМА ЯЧС' },
      { id: 11, sequence: 'МАС УК ИЯ ЧС МА' }, { id: 12, sequence: 'ЯЧС МАУ КИС ЧЯ' },
      { id: 13, sequence: 'МАСИ КУЧЯ МАСИ' }, { id: 14, sequence: 'ЯЧСИ УКМА ЯЧСИ' },
      { id: 15, sequence: 'М А С И Ч Я У К В А' }, { id: 16, sequence: 'А В К У Я Ч И С А М' }
    ]
  }
];
