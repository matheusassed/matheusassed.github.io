//mapa de teclas
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// o konami code em si
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// posição do usuario no konami code
var konamiCodePosition = 0;

// adiocona event listener no key down
document.addEventListener('keydown', function(e) {
  // pega o valor da tecla no mapa de teclas
  var key = allowedKeys[e.keyCode];
  // pega o valor da tecla no konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compara as teclas
  if (key == requiredKey) {

    // vai para a próxima tecla na sequência do konami code
    konamiCodePosition++;

    // se chegar na última tecla corretamente...
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

// XABLAU
function activateCheats() {
  document.body.style.backgroundColor = "blue";
  alert('Bill');
}
