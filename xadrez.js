var game = new Chess();

var board = Chessboard('board', {
  draggable: true,
  position: 'start',
  onDrop: onDrop
});

function onDrop(source, target) {
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q'
  });

  if (move === null) return 'snapback';

  atualizarStatus();
}

function atualizarStatus() {
  let status = '';

  if (game.in_checkmate()) {
    status = 'Xeque-mate!';
  } else if (game.in_check()) {
    status = 'Xeque!';
  } else {
    status = game.turn() === 'w' ? 'Vez das brancas' : 'Vez das pretas';
  }

  document.getElementById('status').innerText = status;
}

function reiniciar() {
  game.reset();
  board.start();
  atualizarStatus();
}

// DESAFIO: mate em 1
function carregarDesafio() {
  game.load('6k1/5ppp/8/8/8/8/5PPP/6K1 w - - 0 1');
  board.position(game.fen());
  atualizarStatus();

  document.getElementById('status').innerText += ' | Desafio: mate em 1';
}