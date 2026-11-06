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
  }
];