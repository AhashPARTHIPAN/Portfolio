document.addEventListener("DOMContentLoaded", () => {
  const puzzle = document.getElementById('puzzle-9');
  const size = 3;
  const total = size * size;
  let pieces = [];

  // Génère les positions de chaque pièce
  function createPieces() {
    pieces = [];
    for (let i = 0; i < total; i++) {
      pieces.push(i);
    }
    // Mélange sauf si déjà résolu
    do {
      shuffle(pieces);
    } while (!isSolvable(pieces) || isSolved());
  }

  // Mélange Fisher-Yates
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Vérifie si le puzzle est résoluble (pour 3x3)
  function isSolvable(arr) {
    let inv = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] !== total - 1 && arr[j] !== total - 1 && arr[i] > arr[j]) inv++;
      }
    }
    return inv % 2 === 0;
  }

  // Vérifie si le puzzle est résolu
  function isSolved() {
    for (let i = 0; i < total; i++) {
      if (pieces[i] !== i) return false;
    }
    return true;
  }

  // Affiche les pièces
  function render() {
    puzzle.innerHTML = '';
    puzzle.classList.toggle('solved', isSolved());
    for (let i = 0; i < total; i++) {
      const n = pieces[i];
      const piece = document.createElement('div');
      piece.className = 'puzzle-piece-9' + (n === total - 1 ? ' empty' : '');
      if (n !== total - 1) {
        const x = n % size;
        const y = Math.floor(n / size);
        piece.style.backgroundPosition = `-${x * 100}px -${y * 100}px`;
      }
      piece.dataset.idx = i;
      puzzle.appendChild(piece);
    }
  }

  // Déplacement au clic
  puzzle.addEventListener('click', e => {
    const idx = Number(e.target.dataset.idx);
    const emptyIdx = pieces.indexOf(total - 1);
    if (isAdjacent(idx, emptyIdx)) {
      [pieces[idx], pieces[emptyIdx]] = [pieces[emptyIdx], pieces[idx]];
      render();
      if (isSolved()) {
        setTimeout(() => puzzle.classList.add('solved'), 200);
      }
    }
  });

  // Vérifie si deux cases sont adjacentes
  function isAdjacent(i, j) {
    const xi = i % size, yi = Math.floor(i / size);
    const xj = j % size, yj = Math.floor(j / size);
    return (Math.abs(xi - xj) + Math.abs(yi - yj)) === 1;
  }

  // Initialisation
  createPieces();
  render();
  
  const solveBtn = document.getElementById('solve-puzzle-btn');
  if (solveBtn) {
    solveBtn.addEventListener('click', () => {
      // Remet les pièces dans l'ordre
      for (let i = 0; i < total; i++) {
        pieces[i] = i;
      }
      render();
      puzzle.classList.add('solved');
    });
  }
});