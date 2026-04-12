// =====================================================
// NEONQUARTER — GAME CONFIG
// =====================================================
// To ADD a new game: copy one block and change values
// To REMOVE a game: delete its block
// To EDIT a game: change the values in its block
// =====================================================

const GAMES = [

  // ── ARCADE ──────────────────────────────────────
  {
    slug:        'pacman',
    title:       'PAC-MAN',
    category:    'arcade',
    emoji:       '🟡',
    description: 'Eat every dot. Dodge every ghost. The legend never dies.',
    file:        'games/pacman/pacman.html',
    badge:       'HOT',          // HOT, NEW, FAV or null
    color:       '#ffb000',      // neon glow colour
  },
  {
    slug:        'mspacman',
    title:       'MS. PAC-MAN',
    category:    'arcade',
    emoji:       '💗',
    description: '4 unique mazes, faster ghosts, and a bow. The sequel that topped the original.',
    file:        'games/mspacman/mspacman.html',
    badge:       'NEW',
    color:       '#ff88ff',
  },
  {
    slug:        'snake',
    title:       'SNAKE',
    category:    'arcade',
    emoji:       '🐍',
    description: 'Grow longer. Move faster. Don\'t eat yourself.',
    file:        'games/snake/snake.html',
    badge:       'FAV',
    color:       '#00ff41',
  },
  {
    slug:        'spaceinvaders',
    title:       'SPACE INVADERS',
    category:    'arcade',
    emoji:       '👾',
    description: 'Shoot the aliens before they reach you. The classic that defined a genre.',
    file:        'games/spaceinvaders/spaceinvaders.html',
    badge:       null,
    color:       '#00ff41',
  },
  {
    slug:        'breakout',
    title:       'BREAKOUT',
    category:    'arcade',
    emoji:       '🏓',
    description: 'Smash every brick. Collect powerups. 50 levels of neon chaos.',
    file:        'games/breakout/breakout.html',
    badge:       null,
    color:       '#00e5ff',
  },
  {
    slug:        'frogger',
    title:       'FROGGER',
    category:    'arcade',
    emoji:       '🐸',
    description: 'Cross the road. Ride the logs. Reach home safely.',
    file:        'games/frogger/frogger.html',
    badge:       null,
    color:       '#00ff41',
  },

  // ── PUZZLE ──────────────────────────────────────
  {
    slug:        'tetris',
    title:       'TETRIS',
    category:    'puzzle',
    emoji:       '🧱',
    description: 'Stack the pieces. Clear the lines. Beat the clock.',
    file:        'games/tetris/tetris.html',
    badge:       null,
    color:       '#00e5ff',
  },
  {
    slug:        '2048',
    title:       '2048',
    category:    'puzzle',
    emoji:       '🔢',
    description: 'Slide and merge until you hit the magic number.',
    file:        'games/2048/2048.html',
    badge:       null,
    color:       '#ffb000',
  },

  // ── CARD ────────────────────────────────────────
  {
    slug:        'solitaire',
    title:       'SOLITAIRE',
    category:    'card',
    emoji:       '🃏',
    description: 'Stack the suits. Clear the board. Beat your best.',
    file:        'games/solitaire/solitaire.html',
    badge:       null,
    color:       '#cc00ff',
  },

  {
    slug:        'asteroids',
    title:       'ASTEROIDS',
    category:    'arcade',
    emoji:       '🚀',
    description: 'Blast the rocks. Don\'t get hit. Survive the void.',
    file:        'games/asteroids/asteroids.html',
    badge:       'NEW',
    color:       '#00e5ff',
  },

  // =====================================================

];
