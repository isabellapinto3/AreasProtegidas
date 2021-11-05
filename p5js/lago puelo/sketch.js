let largo, alto;
let cont;
function setup() {
  createCanvas(100, 100);
  cont = new Contenedores();
}

function draw() {
  largo = windowWidth;
  alto = windowHeight;
  resizeCanvas(largo, alto);
  background(235);
  cont.dibujar();
  cont.funcionalidad();
}