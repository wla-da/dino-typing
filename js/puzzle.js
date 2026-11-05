// Рендер пазла. Каждый кусочек — div с background-image и background-position.
function renderPuzzle(container, imageUrl, unlockedCount, totalPieces) {
  container.innerHTML = '';
  container.className = 'puzzle-grid';
  container.style.gridTemplateColumns = `repeat(${PUZZLE_COLS}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${PUZZLE_ROWS}, 1fr)`;
  container.style.gap = '4px';
  container.style.aspectRatio = `${PUZZLE_COLS} / ${PUZZLE_ROWS}`;

  for (let i = 0; i < totalPieces; i++) {
    const piece = document.createElement('div');
    piece.className = 'puzzle-piece';

    const col = i % PUZZLE_COLS;
    const row = Math.floor(i / PUZZLE_COLS);

    const bgX = (col / (PUZZLE_COLS - 1)) * 100;
    const bgY = (row / (PUZZLE_ROWS - 1)) * 100;

    piece.style.backgroundImage = `url('${imageUrl}')`;
    piece.style.backgroundPosition = `${bgX}% ${bgY}%`;
    piece.style.backgroundSize = `${PUZZLE_COLS * 100}% ${PUZZLE_ROWS * 100}%`;

    if (i < unlockedCount) {
      piece.classList.add('unlocked');
    } else {
      piece.classList.add('locked');
    }

    container.appendChild(piece);
  }
}
