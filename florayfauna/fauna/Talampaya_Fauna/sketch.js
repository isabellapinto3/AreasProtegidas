var Avid1, avid2, Bvid1, Bvid2, Cvid1, Cvid2;
let largo, alto;
let cont;


function preload() {
  Avid1 = createImg("gifs/Avideo1.gif");
  //
  Avid1.size(0,0);
  Avid1.position(0,0);
  //
  Avid2 = createImg("gifs/Avideo2.gif");
  //
  Avid2.size(0,0);
  Avid2.position(0,0);
  //
  Bvid1 = createImg("gifs/Bvideo1.gif");
  //
  Bvid1.size(0,0);
  Bvid1.position(0,0);
  //
  Bvid2 = createImg("gifs/Bvideo2.gif");
  //
  Bvid2.size(0,0);
  Bvid2.position(0,0);
  //
  Cvid1 = createImg("gifs/Cvideo1.gif");
  //
  Cvid1.size(0,0);
  Cvid1.position(0,0);
  //
  Cvid2 = createImg("gifs/Cvideo2.gif");
  //
  Cvid2.size(0,0);
  Cvid2.position(0,0);
}

function setup() {
  createCanvas(100, 100);
  cont = new Contenedores();
  cont.completarVariables();
}

function draw() {
  largo = windowWidth;
  alto = windowHeight;
  resizeCanvas(largo, alto);
  background(230);
  cont.dibujar();
  cont.funcionalidad();
  cont.animar();
}