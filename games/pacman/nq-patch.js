// NeonQuarter Patch — applies fixes to pacman.js at runtime
// This small file overrides the startup behaviour after pacman.js loads

(function() {
  // Wait for pacman.js to fully initialize
  window.addEventListener('load', function() {
    // Small delay to let pacman.js finish its own load handler first
    setTimeout(function() {

      // ── DETERMINE WHICH MODE TO RUN ──
      var isMsPacMan = window.__nq_mspacman === true;

      // ── FIX 1: Set correct game mode ──
      if (typeof GAME_PACMAN !== 'undefined' && typeof GAME_MSPACMAN !== 'undefined') {
        gameMode = isMsPacMan ? GAME_MSPACMAN : GAME_PACMAN;
      }

      // ── FIX 2: Disable ghost paths and practice mode ──
      if (typeof practiceMode !== 'undefined') {
        practiceMode = false;
      }
      if (typeof ghosts !== 'undefined') {
        for (var i = 0; i < ghosts.length; i++) {
          ghosts[i].isDrawPath   = false;
          ghosts[i].isDrawTarget = false;
        }
      }

      // ── FIX 3: Skip home menu, go straight to game ──
      if (typeof switchState !== 'undefined' && typeof newGameState !== 'undefined') {
        switchState(newGameState);
      }

    }, 100);
  }, true); // capture phase so we run after pacman.js load handler

})();
