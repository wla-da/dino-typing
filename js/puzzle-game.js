// Игра со сборкой пазла после прохождения урока
class PuzzleGame {
  constructor(lesson, onComplete) {
    this.lesson = lesson;
    this.onComplete = onComplete;
    this.pieces = [];
    this.selectedPiece = null;
    this.totalPieces = PUZZLE_COLS * PUZZLE_ROWS;
    this.placedPieces = 0;
  }

  mount(container) {
    this.container = container;
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="screen-puzzle-game">
        <h2>Собери пазл!</h2>
        <p class="subtitle">Нажми на кусочки в правильном порядке</p>
        
        <div class="puzzle-progress">
          Собрано: <span id="placed-count">0</span> / ${this.totalPieces}
        </div>

        <div class="puzzle-board" id="puzzle-board"></div>
        <div class="puzzle-pieces" id="puzzle-pieces"></div>

        <button class="btn btn-secondary" id="btn-back" style="margin-top:16px;">
          Назад к урокам
        </button>
      </div>
    `;

    this.renderBoard();
    this.renderPieces();

    document.getElementById('btn-back').addEventListener('click', () => {
      this.onComplete();
    });
  }

  renderBoard() {
    const board = document.getElementById('puzzle-board');
    board.innerHTML = '';
    board.style.display = 'grid';
    board.style.gridTemplateColumns = `repeat(${PUZZLE_COLS}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${PUZZLE_ROWS}, 1fr)`;
    board.style.gap = '4px';
    board.style.aspectRatio = `${PUZZLE_COLS} / ${PUZZLE_ROWS}`;
    board.style.maxWidth = '500px';
    board.style.margin = '0 auto';

    for (let i = 0; i < this.totalPieces; i++) {
      const slot = document.createElement('div');
      slot.className = 'puzzle-slot';
      slot.dataset.index = i;
      slot.style.background = '#E0E0E0';
      slot.style.borderRadius = '6px';
      slot.style.border = '2px dashed #BDBDBD';
      slot.style.display = 'flex';
      slot.style.alignItems = 'center';
      slot.style.justifyContent = 'center';
      slot.style.fontSize = '24px';
      slot.style.cursor = 'pointer';
      // Убираем выделение текста на мобильных
      slot.style.userSelect = 'none';
      slot.style.webkitUserSelect = 'none';

      const handleSlotClick = (e) => {
        e.preventDefault();
        this.handleSlotClick(i);
      };

      slot.addEventListener('click', handleSlotClick);
      slot.addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleSlotClick(e);
        slot.style.background = '#BDBDBD';
        setTimeout(() => {
          if (!slot.style.backgroundImage) {
            slot.style.background = '#E0E0E0';
          }
        }, 150);
      });

      board.appendChild(slot);
    }
  }

  renderPieces() {
    const piecesContainer = document.getElementById('puzzle-pieces');
    piecesContainer.innerHTML = '';
    piecesContainer.style.display = 'flex';
    piecesContainer.style.flexWrap = 'wrap';
    piecesContainer.style.gap = '8px';
    piecesContainer.style.justifyContent = 'center';
    piecesContainer.style.marginTop = '20px';

    // Перемешиваем кусочки
    const shuffled = [...Array(this.totalPieces).keys()].sort(() => Math.random() - 0.5);

    shuffled.forEach(index => {
      const piece = document.createElement('div');
      piece.className = 'puzzle-piece-clickable';
      piece.dataset.index = index;

      const col = index % PUZZLE_COLS;
      const row = Math.floor(index / PUZZLE_COLS);
      const bgX = (col / (PUZZLE_COLS - 1)) * 100;
      const bgY = (row / (PUZZLE_ROWS - 1)) * 100;

      piece.style.backgroundImage = `url('${this.lesson.image}')`;
      piece.style.backgroundPosition = `${bgX}% ${bgY}%`;
      piece.style.backgroundSize = `${PUZZLE_COLS * 100}% ${PUZZLE_ROWS * 100}%`;
      piece.style.width = '60px';
      piece.style.height = '60px';
      piece.style.borderRadius = '6px';
      piece.style.cursor = 'pointer';
      piece.style.border = '2px solid var(--green)';
      piece.style.transition = 'transform 0.2s';
      // Убираем выделение на мобильных
      piece.style.userSelect = 'none';
      piece.style.webkitUserSelect = 'none';
      // Убираем стандартное поведение тача
      piece.style.touchAction = 'manipulation';

      const handlePieceClick = (e) => {
        e.preventDefault();
        this.handlePieceClick(index, piece);
      };

      piece.addEventListener('click', handlePieceClick);
      piece.addEventListener('touchstart', (e) => {
        e.preventDefault();
        handlePieceClick(e);
        if (!piece.classList.contains('placed')) {
          piece.style.transform = 'scale(0.95)';
          setTimeout(() => {
            if (!piece.classList.contains('selected')) {
              piece.style.transform = 'scale(1)';
            }
          }, 150);
        }
      });

      piecesContainer.appendChild(piece);
    });
  }

  handlePieceClick(index, pieceElement) {
    if (pieceElement.classList.contains('placed')) return;

    // Снимаем выделение с предыдущего
    document.querySelectorAll('.puzzle-piece-clickable').forEach(p => {
      p.style.transform = 'scale(1)';
      p.style.borderColor = 'var(--green)';
    });

    // Выделяем текущий
    pieceElement.style.transform = 'scale(1.1)';
    pieceElement.style.borderColor = 'var(--orange)';
    this.selectedPiece = { index, element: pieceElement };
  }


  handleSlotClick(slotIndex) {
    if (!this.selectedPiece) return;

    const slot = document.querySelector(`.puzzle-slot[data-index="${slotIndex}"]`);
    
    if (slotIndex === this.selectedPiece.index) {
      // Правильное место!
      const col = slotIndex % PUZZLE_COLS;
      const row = Math.floor(slotIndex / PUZZLE_COLS);
      const bgX = (col / (PUZZLE_COLS - 1)) * 100;
      const bgY = (row / (PUZZLE_ROWS - 1)) * 100;

      slot.style.backgroundImage = `url('${this.lesson.image}')`;
      slot.style.backgroundPosition = `${bgX}% ${bgY}%`;
      slot.style.backgroundSize = `${PUZZLE_COLS * 100}% ${PUZZLE_ROWS * 100}%`;
      slot.style.border = '2px solid var(--green)';
      // УБРАЛИ slot.textContent = '✓'; - текст перекрывал изображение на мобильных!
      slot.textContent = '';  // ← Явно очищаем текст

      this.selectedPiece.element.classList.add('placed');
      this.selectedPiece.element.style.opacity = '0.3';
      this.selectedPiece.element.style.cursor = 'default';

      this.placedPieces++;
      document.getElementById('placed-count').textContent = this.placedPieces;

      this.playSound('place');

      if (this.placedPieces === this.totalPieces) {
        setTimeout(() => {
          this.puzzleComplete();
        }, 500);
      }
    } else {
      // Неправильное место
      slot.style.background = '#FFCDD2';
      setTimeout(() => {
        slot.style.background = '#E0E0E0';
      }, 300);
      this.playSound('wrong');
    }

    // Снимаем выделение
    this.selectedPiece.element.style.transform = 'scale(1)';
    this.selectedPiece.element.style.borderColor = 'var(--green)';
    this.selectedPiece = null;
  }

  puzzleComplete() {
    this.container.innerHTML = `
      <div class="modal-overlay">
        <div class="modal">
          <h2>Пазл собран! 🎉</h2>
          <div class="stars">⭐⭐⭐</div>
          <img src="${this.lesson.image}" style="max-width:300px; border-radius:12px; margin:16px 0;">
          <p>Молодец! Ты собрал динозавра!</p>
          <button class="btn btn-primary" id="btn-finish" style="margin-top:16px;">
            Отлично!
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-finish').addEventListener('click', () => {
      this.onComplete();
    });

    this.playSound('fanfare');
  }

  playSound(type) {
    if (type === 'place') audio.playPuzzlePlace();
    else if (type === 'wrong') audio.playWrong();
    else if (type === 'fanfare') audio.playFanfare();
  }
}
