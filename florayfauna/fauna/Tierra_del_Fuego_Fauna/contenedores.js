class Contenedores {
  constructor() {
    //
    // IMAGENES
    //
    this.imagenBoton1 = loadImage("img/botones/boton.png");
    this.imagenBoton2 = loadImage("img/botones/botonInv.png");
    //
    // CONTENEDORES
    //
    this.contenedorA = true;
    this.contenedorB = false;
    this.contenedorC = false;
    this.contador = 30;
    //
    // ANIMACION
    //
    this.actual = 0;
    this.desdeA = false;
    this.desdeB = false;
    this.paraA = false;
    this.paraB = false;
    this.animacion = false;
    this.gpx1 = windowWidth / 2.5;
    this.gpx2 = windowWidth / 2.5 + windowWidth / 2.8;
    this.gpx3 = windowWidth / 2.5 + windowWidth / 2.8 + windowWidth / 8;
    this.px1 = 0;
    this.px2 = 0;
    this.px3 = 0;
    //
    // BOTONES
    //bot1
    this.botpx = 0;
    this.botpy = 0;
    this.cardpx = 0;
    this.cardpy = 0;
    this.botDistActivar = 100;
    this.botActivo = false;
    this.cdboton = 0;
    //bot2
    this.botpx2 = 0;
    this.botpy2 = 0;
    this.cardpx2 = 0;
    this.cardpy2 = 0;
    this.botDistActivar2 = 100;
    this.botActivo2 = false;
    this.cdboton2 = 0;
  }

  completarVariables(){
    //
    //
    //### CONTENEDOR A CONTENEDOR A CONTENEDOR A ###
    //
    //
    // intro
    this.AimgContenedor = loadImage("img/AimgContenedor.jpg");
    this.AimgContenedorCut = loadImage("img/AimgContenedorCut.jpg");
    this.Atitulo = "Caranca";
    this.AdescripcionLinea1= "El macho es blanco con el pico negro y las patas amarillas. La hembra ";
    this.AdescripcionLinea2= "posee una zona alrededor del ojo, la porción posterior del abdomen y la cola ";
    this.AdescripcionLinea3= "blancos.";
    this.AdescripcionLinea4= "";
    this.AdescripcionLinea5= "";
    // boton
    this.Ar = 104;
    this.Ag = 139;
    this.Ab = 166;
    this.AimgBoton1 = loadImage("img/AimgBoton1.jpg");
    this.AtituloBoton1 = "Alimentacio";
    this.AdescripcionBoton1Linea1 = "Vive cerca de las costas de mar donde se ";
    this.AdescripcionBoton1Linea2 = " alimenta de algas. Generalmente se la puede";
    this.AdescripcionBoton1Linea3 = "ver en parejas.";
    this.AdescripcionBoton1Linea4 = "";
    this.AdescripcionBoton1Linea5 = "";
    this.AdescripcionBoton1Linea6 = "";
    this.AimgBoton2 = loadImage("img/AimgBoton2.jpg");
    this.AtituloBoton2 = "Aceite cosmetico";
    this.AdescripcionBoton2Linea1 = "El aceite extraído de sus semillas se aprovecha";
    this.AdescripcionBoton2Linea2 = "en cosmetica.";
    this.AdescripcionBoton2Linea3 = "";
    this.AdescripcionBoton2Linea4 = "";
    this.AdescripcionBoton2Linea5 = "";
    this.AdescripcionBoton2Linea6 = "";
    // grafico
    this.Agrafico= loadImage ("img/Agrafico.png")
    //
    //
    //### CONTENEDOR B CONTENEDOR B CONTENEDOR B ###
    //
    //
    // intro
    this.BimgContenedor = loadImage("img/BimgContenedor.jpg");
    this.BimgContenedorCut = loadImage("img/BimgContenedorCut.jpg");
    this.Btitulo = "Guanaco";
    this.BdescripcionLinea1= "Fue el herbívoro que dominó la Patagonia árida hasta el siglo";
    this.BdescripcionLinea2= "XIX y la principal fuente de alimento de los pueblos indígenas";
    this.BdescripcionLinea3= "de la región, el puma y especies carroñeras como el cóndor.";
    this.BdescripcionLinea4= "";
    this.BdescripcionLinea5= "";
    // boton
    this.Br = 215;
    this.Bg = 160;
    this.Bb = 88;
    this.BimgBoton1 = loadImage("img/BimgBoton1.jpg");
    this.BtituloBoton1 = "Historia";
    this.BdescripcionBoton1Linea1 = "Era un importante recurso para los nativos, ";
    this.BdescripcionBoton1Linea2 = "tanto por su carne como su cuero. Su";
    this.BdescripcionBoton1Linea3 = "largo pelaje es utilizado en tejidos.";
    this.BdescripcionBoton1Linea4 = "";
    this.BdescripcionBoton1Linea5 = "";
    this.BdescripcionBoton1Linea6 = "";
    this.BimgBoton2 = loadImage("img/BimgBoton2.jpg");
    this.BtituloBoton2 = "Habitat";
    this.BdescripcionBoton2Linea1 = "El guanaco es el mamífero terrestre de ";
    this.BdescripcionBoton2Linea2 = "mayor tamaño de la Patagonia, es una ";
    this.BdescripcionBoton2Linea3 = "especie socialque se puede observar en ";
    this.BdescripcionBoton2Linea4 = "ambientes esteparios.";
    this.BdescripcionBoton2Linea5 = "";
    this.BdescripcionBoton2Linea6 = "";
  // grafico
    this.Bgrafico= loadImage ("img/Bgrafico.png")
    //
    //
    //### CONTENEDOR C CONTENEDOR C CONTENEDOR C ###
    //
    //
    // intro
    this.CimgContenedor = loadImage("img/CimgContenedor.jpg");
    this.CimgContenedorCut = loadImage("img/CimgContenedorCut.jpg");
    this.Ctitulo = "Zorzal Patagonico";
    this.CdescripcionLinea1= "Es el ave más vista en el bosque y el ecotono de la Patagonia andina a lo";
    this.CdescripcionLinea2= "largo del año, incluso en zonas pobladas, donde suele ser abundante";
    this.CdescripcionLinea3= "";
    this.CdescripcionLinea4= "";
    this.CdescripcionLinea5= "";
    // boton
    this.Cr = 192;
    this.Cg = 142;
    this.Cb = 91;
    this.CimgBoton1 = loadImage("img/CimgBoton1.jpg");
    this.CtituloBoton1 = "Plumas";
    this.CdescripcionBoton1Linea1 = "El plumaje no es muy colorido, pero el pico";
    this.CdescripcionBoton1Linea2 = "amarillo brillante a menudo es llamativo. El";
    this.CdescripcionBoton1Linea3 = "macho tiene la cabeza más negra y las partes";
    this.CdescripcionBoton1Linea4 = "superiores.";
    this.CdescripcionBoton1Linea5 = "";
    this.CdescripcionBoton1Linea6 = "";
    this.CimgBoton2 = loadImage("img/CimgBoton2.jpg");
    this.CtituloBoton2 = "Alimentacion";
    this.CdescripcionBoton2Linea1 = "Comen lombrices, caracoles u otros animales ";
    this.CdescripcionBoton2Linea2 = "de cuerpo blando y frutos maduros. Se";
    this.CdescripcionBoton2Linea3 = "reproducen entre septiembre y octubre.";
    this.CdescripcionBoton2Linea4 = "";
    this.CdescripcionBoton2Linea5 = "";
    this.CdescripcionBoton2Linea6 = "";
    // grafico
    this.Cgrafico= loadImage ("img/Cgrafico.png")
  }

  dibujar() {
    this.ocultarVideos();
    push();
    noStroke();
    //cuadro de información
    fill(255);
    rect(0, 0, width / 2.5, height);
    if (this.contenedorA && !this.animacion) {
      //
      // CONTENEDORES CONTENEDORES CONTENEDORES CONTENEDORES
      //
      //contenedor 1
      fill(255, 90, 90);
      image(this.AimgContenedor ,width / 2.5, 0, width / 2.8, height);
      //contenedor 2
      fill(90, 255, 90);
      image(this.BimgContenedorCut, width / 2.5 + width / 2.8, 0, width / 8, height);
      //contenedor 3
      fill(90, 90, 255);
      image(this.CimgContenedorCut,width / 2.5 + width / 2.8 + width / 8, 0, width / 8, height);
      pop();
      //
      // TITULO E INFO TITULO E INFO TITULO E INFO TITULO E INFO
      //
      push();
      push();
      textStyle(BOLD);
      fill(this.Ar,this.Ag,this.Ab);
      textSize(height / 20);
      text(this.Atitulo, width / 20, height / 9); // titulo
      pop();
      fill(27);
      textSize(height / 52.5);
      text(this.AdescripcionLinea1, width / 20, height / 6.5); // información
      text(this.AdescripcionLinea2, width / 20, height / 5.7); // información
      text(this.AdescripcionLinea3, width / 20, height / 5.18); // información
      text(this.AdescripcionLinea4, width / 20, height / 4.7); // información
      text(this.AdescripcionLinea5, width / 20, height / 4.33); // información
      pop();
      //
      // BOTONES Y VIDEOS BOTONES Y VIDEOS BOTONES Y VIDEOS
      //
      push();
      this.boton(width / 20, height / 3.9, this.Ar, this.Ag, this.Ab, this.AimgBoton1);
      if(this.botActivo){
      //
      Avid1.size(width / 2.8, height);
      Avid1.position(width / 2.5, 0);
      //
      }
      /*this.boton2(width / 20, height / 2.15, this.Ar, this.Ag, this.Ab, this.AimgBoton2);
      if(this.botActivo2){
    //
      Avid2.size(width / 2.8, height);
      Avid2.position(width / 2.5, 0);
      //
      }*/
      imageMode (CORNERS);
      image(this.Agrafico,width / 19, height / 1.48, this.gpx1, windowHeight-alto/15);
      pop();
      pop();
    }
    if (this.contenedorB && !this.animacion) {
      //contenedor 1
      fill(90, 255, 90);
      image(this.BimgContenedor, width / 2.5, 0, width / 2.8, height);
      //contenedor 2
      fill(255, 90, 90);
      image(this.AimgContenedorCut ,width / 2.5 + width / 2.8, 0, width / 8, height);
      //contenedor 3
      fill(90, 90, 255);
      image(this.CimgContenedorCut ,width / 2.5 + width / 2.8 + width / 8, 0, width / 8, height);
      pop();
      // titulo e información
      push();
      fill(this.Br,this.Bg,this.Bb);
      textSize(height / 20);
      push();
      push();
      textStyle(BOLD);
      text(this.Btitulo, width / 20, height / 9); // titulo
      pop();
      fill(27);
      textSize(height / 52.5);
      text(this.BdescripcionLinea1, width / 20, height / 6.5); // información
      text(this.BdescripcionLinea2, width / 20, height / 5.7); // información
      text(this.BdescripcionLinea3, width / 20, height / 5.18); // información
      text(this.BdescripcionLinea4, width / 20, height / 4.7); // información
      text(this.BdescripcionLinea5, width / 20, height / 4.33); // información
      pop();
      //
      // BOTONES Y VIDEOS BOTONES Y VIDEOS BOTONES Y VIDEOS
      //
      push();
      this.boton(width / 20, height / 3.9, this.Br, this.Bg, this.Bb, this.BimgBoton1);
      if(this.botActivo){
      //
      Bvid1.size(width / 2.8, height);
      Bvid1.position(width / 2.5, 0);
      //
      }
      this.boton2(width / 20, height / 2.15, this.Br, this.Bg, this.Bb, this.BimgBoton2);
      if(this.botActivo2){
      //
      Bvid2.size(width / 2.8, height);
      Bvid2.position(width / 2.5, 0);
      //
      }
      imageMode (CORNERS);
      image(this.Bgrafico,width / 19, height / 1.48, this.gpx1, windowHeight-alto/15);
      pop();
      pop();
    }
    if (this.contenedorC && !this.animacion) {
      //contenedor 1
      fill(90, 90, 255);
      image(this.CimgContenedor ,width / 2.5, 0, width / 2.8, height);
      //contenedor 2
      fill(255, 90, 90);
      image(this.AimgContenedorCut,width / 2.5 + width / 2.8, 0, width / 8, height);
      //contenedor 3
      fill(90, 255, 90);
      image(this.BimgContenedorCut,width / 2.5 + width / 2.8 + width / 8, 0, width / 8, height);
      pop();
      // titulo e información
      push();
      fill(this.Cr,this.Cg,this.Cb);
      textSize(height / 20);
      push();
      push();
      textStyle(BOLD);
      text(this.Ctitulo, width / 20, height / 9); // titulo
      pop();
      fill(27);
      textSize(height / 52.5);
      text(this.CdescripcionLinea1, width / 20, height / 6.5); // información
      text(this.CdescripcionLinea2, width / 20, height / 5.7); // información
      text(this.CdescripcionLinea3, width / 20, height / 5.18); // información
      text(this.CdescripcionLinea4, width / 20, height / 4.7); // información
      text(this.CdescripcionLinea5, width / 20, height / 4.33); // información
      pop();
      //
      // BOTONES Y VIDEOS BOTONES Y VIDEOS BOTONES Y VIDEOS
      //
      push();
      this.boton(width / 20, height / 3.9, this.Cr, this.Cg, this.Cb, this.CimgBoton1);
      if(this.botActivo){
      //
      Cvid1.size(width / 2.8, height);
      Cvid1.position(width / 2.5, 0);
      //
      }
      this.boton2(width / 20, height / 2.15, this.Cr, this.Cg, this.Cb, this.CimgBoton2);
      if(this.botActivo2){
      //
      Cvid2.size(width / 2.8, height);
      Cvid2.position(width / 2.5, 0);
      //
      }
      imageMode (CORNERS);
      image(this.Cgrafico,width / 19, height / 1.48, this.gpx1, windowHeight-alto/15);
      pop();
      pop();
    }
    /*push();
    fill(0);
    text("mX_" + mouseX, width - 100, 20);
    text("mY_" + mouseY, width - 100, 30);
    text("A_" + this.contenedorA, 20, 20);
    text("B_" + this.contenedorB, 20, 30);
    text("C_" + this.contenedorC, 20, 40);
    text("cd_" + this.contador, 20, 55);
    text("paraA " + this.paraA, 20, 75);
    text("paraB " + this.paraB, 20, 85);
    pop();*/
  }

  funcionalidad() {
    if (this.contador <= 29 && this.contador >= 0) {
      this.contador--;
    }
    if (this.contador <= 0) {
      this.contador = 30;
      this.animacion = false;
      this.desdeA = false;
      this.desdeB = false;
      this.paraA = false;
      this.paraB = false;
      this.botActivo = false;
      this.botActivo2 = false;
    }
    if (mouseIsPressed) {
      //  CONTENEDOR A CONTENEDOR A CONTENEDOR A CONTENEDOR A
      if (this.contenedorA && this.contador == 30) {
        if (mouseX >= this.gpx2 && mouseX <= this.gpx3) {
          this.actual = "B";
          this.contenedorB = true;
          this.contenedorA = false;
          this.contenedorC = false;
          this.contador = 29;
          this.animacion = true;
        }
        if (mouseX >= this.gpx3 && mouseX <= windowWidth) {
          this.actual = "C";
          this.contenedorC = true;
          this.contenedorA = false;
          this.contenedorB = false;
          this.contador = 29;
          this.animacion = true;
          this.desdeA = true;
        }
      } //CONTENEDOR B CONTENEDOR B CONTENEDOR B CONTENEDOR B
      if (this.contenedorB && this.contador == 30) {
        if (mouseX >= this.gpx2 && mouseX <= this.gpx3) {
          this.actual = "A";
          this.contenedorA = true;
          this.contenedorB = false;
          this.contenedorC = false;
          this.contador = 29;
          this.animacion = true;
        }
        if (mouseX >= this.gpx3 && mouseX <= windowWidth) {
          this.actual = "C";
          this.contenedorC = true;
          this.contenedorA = false;
          this.contenedorB = false;
          this.contador = 29;
          this.animacion = true;
          this.desdeB = true;
        }
      } //CONTENEDOR C CONTENEDOR C CONTENEDOR C CONTENEDOR C
      if (this.contenedorC && this.contador == 30) {
        if (mouseX >= this.gpx2 && mouseX <= this.gpx3) {
          this.actual = "A";
          this.contenedorA = true;
          this.contenedorB = false;
          this.contenedorC = false;
          this.contador = 29;
          this.animacion = true;
          this.paraA = true;
        }
        if (mouseX >= this.gpx3 && mouseX <= windowWidth) {
          this.actual = "B";
          this.contenedorB = true;
          this.contenedorA = false;
          this.contenedorC = false;
          this.contador = 29;
          this.animacion = true;
          this.paraB = true;
        }
      }
      //
      // BOTONES Y CARDS PARA VIDEO
      //
      //
      // BOTON 1
      //
      this.botDistActivar = dist(mouseX, mouseY, this.botpx, this.botpy);
      if (this.botDistActivar <= 25 && this.cdboton <= 0) {
        this.botActivo = !this.botActivo;
        this.botActivo2 = false;
        this.cdboton = 1;
      }
      if (this.cdboton >= 1) {
        this.cdboton++;
      }
      if (this.cdboton >= 10) {
        this.cdboton = 0;
      }
      //
      // BOTON 2
      //
      this.botDistActivar2 = dist(mouseX, mouseY, this.botpx2, this.botpy2);
      if (this.botDistActivar2 <= 25 && this.cdboton2 <= 0) {
        this.botActivo2 = !this.botActivo2;
        this.botActivo = false;
        this.cdboton2 = 1;
      }
      if (this.cdboton2 >= 1) {
        this.cdboton2++;
      }
      if (this.cdboton2 >= 10) {
        this.cdboton2 = 0;
      }
    }
    //cursor
    this.botDistActivar = dist(mouseX, mouseY, this.botpx, this.botpy);
    this.botDistActivar2 = dist(mouseX, mouseY, this.botpx2, this.botpy2);
    if (mouseX >= 0 && mouseX <= this.gpx2) {
    if (this.botDistActivar <= 25) {
      cursor(HAND);
    } else if (this.botDistActivar2 <= 25) {
      cursor(HAND);
    } else {
      cursor(AUTO);
    }
    }
    if (mouseX >= this.gpx2 && mouseX <= this.gpx3) {
      cursor(HAND);
    }
    if (mouseX >= this.gpx3 && mouseX <= windowWidth) {
      cursor(HAND);
    }
  }

  boton(x, y, colR, colG, colB, img) {
    push();
    this.cardpx = x;
    this.cardpy = y;
    this.botpx = this.cardpx + windowWidth / 3.2;
    this.botpy = this.cardpy + windowHeight / 5.5 / 2;
    this.R = colR;
    this.G = colG;
    this.B = colB;
    this.img = img;
    if (!this.botActivo) {
      fill(255, 0);
      stroke(this.R, this.G, this.B);
      rect(this.cardpx, this.cardpy, windowWidth / 2.85, windowHeight / 5.5);
      image(
        this.img,
        this.cardpx,
        this.cardpy,
        windowHeight / 5.5,
        windowHeight / 5.5
      );
      push(); // DIBUJO BOTON
      imageMode(CENTER);
      fill(this.R,this.G,this.B);
      ellipse(this.botpx, this.botpy, windowHeight/12.5, windowHeight/12.5);
      image(this.imagenBoton2, this.botpx, this.botpy, windowHeight/12.5, windowHeight/12.5);
      pop(); // DIBUJO BOTON
      //
      // TEXTO
      //
      if(this.contenedorA){
      noStroke();
      fill(this.Ar, this.Ag, this.Ab);
      textSize(windowHeight/42.5);
      push();
      textStyle(BOLD);
      text(this.AtituloBoton1,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 25);
      pop();
      fill(0);
      textSize(windowHeight/52.5);
      text(this.AdescripcionBoton1Linea1,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 14.3);
      text(this.AdescripcionBoton1Linea2,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 11.1);
      text(this.AdescripcionBoton1Linea3,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 9.1);
      text(this.AdescripcionBoton1Linea4,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 7.7);
      text(this.AdescripcionBoton1Linea5,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 6.77);
      text(this.AdescripcionBoton1Linea6,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 6);
      }
      if(this.contenedorB){
      noStroke();
      fill(this.Br, this.Bg, this.Bb);
      textSize(windowHeight/42.5);
      push();
      textStyle(BOLD);
      text(this.BtituloBoton1,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 25);
      pop();
      fill(0);
      textSize(windowHeight/52.5);
      text(this.BdescripcionBoton1Linea1,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 14.3);
      text(this.BdescripcionBoton1Linea2,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 11.1);
      text(this.BdescripcionBoton1Linea3,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 9.1);
      text(this.BdescripcionBoton1Linea4,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 7.7);
      text(this.BdescripcionBoton1Linea5,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 6.77);
      text(this.BdescripcionBoton1Linea6,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 6);
      }
      if(this.contenedorC){
      noStroke();
      fill(this.Cr, this.Cg, this.Cb);
      textSize(windowHeight/42.5);
      push();
      textStyle(BOLD);
      text(this.CtituloBoton1,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 25);
      pop();
      fill(0);
      textSize(windowHeight/52.5);
      text(this.CdescripcionBoton1Linea1,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 14.3);
      text(this.CdescripcionBoton1Linea2,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 11.1);
      text(this.CdescripcionBoton1Linea3,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 9.1);
      text(this.CdescripcionBoton1Linea4,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 7.7);
      text(this.CdescripcionBoton1Linea5,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 6.77);
      text(this.CdescripcionBoton1Linea6,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 6);
      }
    }
    if (this.botActivo) {
      fill(this.R, this.G, this.B, 220);
      stroke(this.R, this.G, this.B);
      rect(this.cardpx, this.cardpy, windowWidth / 2.85, windowHeight / 5.5);
      image(
        this.img,
        this.cardpx,
        this.cardpy,
        windowHeight / 5.5,
        windowHeight / 5.5
      );
      push(); // DIBUJO BOTON
      imageMode(CENTER);
      image(this.imagenBoton1, this.botpx, this.botpy, windowHeight/12.5, windowHeight/12.5);
      pop(); // DIBUJO BOTON
      if(this.contenedorA){
      noStroke();
      fill(255);
      textSize(windowHeight/42.5);
      push();
      textStyle(BOLD);
      text(this.AtituloBoton1,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 25);
      pop();
      textSize(windowHeight/52.5);
      text(this.AdescripcionBoton1Linea1,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 14.3);
      text(this.AdescripcionBoton1Linea2,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 11.1);
      text(this.AdescripcionBoton1Linea3,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 9.1);
      text(this.AdescripcionBoton1Linea4,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 7.7);
      text(this.AdescripcionBoton1Linea5,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 6.77);
      text(this.AdescripcionBoton1Linea6,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 6);
      }
      if(this.contenedorB){
      noStroke();
      fill(255);
      textSize(windowHeight/42.5);
      push();
      textStyle(BOLD);
      text(this.BtituloBoton1,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 25);
      pop();
      textSize(windowHeight/52.5);
      text(this.BdescripcionBoton1Linea1,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 14.3);
      text(this.BdescripcionBoton1Linea2,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 11.1);
      text(this.BdescripcionBoton1Linea3,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 9.1);
      text(this.BdescripcionBoton1Linea4,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 7.7);
      text(this.BdescripcionBoton1Linea5,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 6.77);
      text(this.BdescripcionBoton1Linea6,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 6);
      }
      if(this.contenedorC){
      noStroke();
      fill(255);
      textSize(windowHeight/42.5);
      push();
      textStyle(BOLD);
      text(this.CtituloBoton1,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 25);
      pop();
      textSize(windowHeight/52.5);
      text(this.CdescripcionBoton1Linea1,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 14.3);
      text(this.CdescripcionBoton1Linea2,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 11.1);
      text(this.CdescripcionBoton1Linea3,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 9.1);
      text(this.CdescripcionBoton1Linea4,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 7.7);
      text(this.CdescripcionBoton1Linea5,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 6.77);
      text(this.CdescripcionBoton1Linea6,this.cardpx+windowHeight / 5,this.cardpy+windowHeight / 6);
      }
    }
    pop();
  }

  boton2(x, y, colR, colG, colB, img) {
    push();
    this.cardpx2 = x;
    this.cardpy2 = y;
    this.botpx2 = this.cardpx2 + windowWidth / 3.2;
    this.botpy2 = this.cardpy2 + windowHeight / 5.5 / 2;
    this.R2 = colR;
    this.G2 = colG;
    this.B2 = colB;
    this.img2 = img;
    if (!this.botActivo2) {
      fill(255, 0);
      stroke(this.R2, this.G2, this.B2);
      rect(this.cardpx2, this.cardpy2, windowWidth / 2.85, windowHeight / 5.5);
      image(
        this.img2,
        this.cardpx2,
        this.cardpy2,
        windowHeight / 5.5,
        windowHeight / 5.5
      );
      push(); // DIBUJO BOTON
      imageMode(CENTER);
      fill(this.R2,this.G2,this.B2);
      ellipse(this.botpx2, this.botpy2, windowHeight/12.5, windowHeight/12.5);
      image(this.imagenBoton2, this.botpx2, this.botpy2, windowHeight/12.5, windowHeight/12.5);
      pop(); // DIBUJO BOTON
      //
      // TEXTO
      //
      if(this.contenedorA){
      noStroke();
      fill(this.Ar, this.Ag, this.Ab);
      textSize(windowHeight/42.5);
      push();
      textStyle(BOLD);
      text(this.AtituloBoton2,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 25);
      pop();
      fill(0);
      textSize(windowHeight/52.5);
      text(this.AdescripcionBoton2Linea1,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 14.3);
      text(this.AdescripcionBoton2Linea2,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 11.1);
      text(this.AdescripcionBoton2Linea3,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 9.1);
      text(this.AdescripcionBoton2Linea4,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 7.7);
      text(this.AdescripcionBoton2Linea5,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 6.77);
      text(this.AdescripcionBoton2Linea6,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 6);
     }
      if(this.contenedorB){
      noStroke();
      fill(this.Br, this.Bg, this.Bb);
      textSize(windowHeight/42.5);
      push();
      textStyle(BOLD);
      text(this.BtituloBoton2,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 25);
      pop();
      fill(0);
      textSize(windowHeight/52.5);
      text(this.BdescripcionBoton2Linea1,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 14.3);
      text(this.BdescripcionBoton2Linea2,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 11.1);
      text(this.BdescripcionBoton2Linea3,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 9.1);
      text(this.BdescripcionBoton2Linea4,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 7.7);
      text(this.BdescripcionBoton2Linea5,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 6.77);
      text(this.BdescripcionBoton2Linea6,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 6);
     }
      if(this.contenedorC){
      noStroke();
      fill(this.Cr, this.Cg, this.Cb);
      textSize(windowHeight/42.5);
      push();
      textStyle(BOLD);
      text(this.CtituloBoton2,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 25);
      pop();
      fill(0);
      textSize(windowHeight/52.5);
      text(this.CdescripcionBoton2Linea1,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 14.3);
      text(this.CdescripcionBoton2Linea2,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 11.1);
      text(this.CdescripcionBoton2Linea3,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 9.1);
      text(this.CdescripcionBoton2Linea4,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 7.7);
      text(this.CdescripcionBoton2Linea5,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 6.77);
      text(this.CdescripcionBoton2Linea6,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 6);
     }
    }
    if (this.botActivo2) {
      fill(this.R2, this.G2, this.B2, 220);
      stroke(this.R2, this.G2, this.B2);
      rect(this.cardpx2, this.cardpy2, windowWidth / 2.85, windowHeight / 5.5);
      image(
        this.img2,
        this.cardpx2,
        this.cardpy2,
        windowHeight / 5.5,
        windowHeight / 5.5
      );
      push(); // DIBUJO BOTON
      imageMode(CENTER);
      image(this.imagenBoton1, this.botpx2, this.botpy2, windowHeight/12.5, windowHeight/12.5);
      pop(); // DIBUJO BOTON
      if(this.contenedorA){
      noStroke();
      fill(255);
      textSize(windowHeight/42.5);
      push();
      textStyle(BOLD);
      text(this.AtituloBoton2,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 25);
      pop();
      textSize(windowHeight/52.5);
      text(this.AdescripcionBoton2Linea1,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 14.3);
      text(this.AdescripcionBoton2Linea2,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 11.1);
      text(this.AdescripcionBoton2Linea3,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 9.1);
      text(this.AdescripcionBoton2Linea4,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 7.7);
      text(this.AdescripcionBoton2Linea5,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 6.77);
      text(this.AdescripcionBoton2Linea6,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 6);
     }
      if(this.contenedorB){
      noStroke();
      fill(255);
      textSize(windowHeight/42.5);
      push();
      textStyle(BOLD);
      text(this.BtituloBoton2,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 25);
      pop();
      textSize(windowHeight/52.5);
      text(this.BdescripcionBoton2Linea1,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 14.3);
      text(this.BdescripcionBoton2Linea2,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 11.1);
      text(this.BdescripcionBoton2Linea3,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 9.1);
      text(this.BdescripcionBoton2Linea4,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 7.7);
      text(this.BdescripcionBoton2Linea5,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 6.77);
      text(this.BdescripcionBoton2Linea6,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 6);
     }
      if(this.contenedorC){
      noStroke();
      fill(255);
      textSize(windowHeight/42.5);
      push();
      textStyle(BOLD);
      text(this.CtituloBoton2,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 25);
      pop();
      textSize(windowHeight/52.5);
      text(this.CdescripcionBoton2Linea1,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 14.3);
      text(this.CdescripcionBoton2Linea2,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 11.1);
      text(this.CdescripcionBoton2Linea3,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 9.1);
      text(this.CdescripcionBoton2Linea4,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 7.7);
      text(this.CdescripcionBoton2Linea5,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 6.77);
      text(this.CdescripcionBoton2Linea6,this.cardpx2+windowHeight / 5,this.cardpy2+windowHeight / 6);
     }
    }
    pop();
  }

  animar() {
    push();
    if (this.animacion) {
      if (this.contenedorA) {
        // CUANDO QUIERO IR A "A"
        if (this.contador <= 29 && this.actual == "A") {
          // DESDE B
          //cont1
          this.px1 = map(this.contador, 29, 0, this.gpx2, this.gpx1);
          fill(255, 90, 90);
          image(this.AimgContenedor,this.px1, 0, width / 2.8, height);
          //cont2
          this.px2 = map(this.contador, 29, 0, this.gpx1, this.gpx2);
          fill(90, 255, 90);
          image(this.BimgContenedor,this.px2, 0, width / 2.8, height);
          //cont3
          this.px3 = map(this.contador, 29, 0, this.gpx3, this.gpx3);
          fill(90, 90, 255);
          image(this.CimgContenedorCut,this.px3, 0, width / 8, height);
        }
        if (this.contador <= 29 && this.actual == "A" && this.paraA) {
          // DESDE C
          //cont3
          this.px3 = map(this.contador, 29, 0, this.gpx1, this.gpx3);
          fill(90, 90, 255);
          image(this.CimgContenedor, this.px3, 0, width / 2.8, height);
          //cont1
          this.px1 = map(this.contador, 29, 0, this.gpx2, this.gpx1);
          fill(255, 90, 90);
          image(this.AimgContenedor ,this.px1, 0, width / 2.8, height);
          //cont2
          this.px2 = map(this.contador, 29, 0, this.gpx3, this.gpx2);
          fill(90, 255, 90);
          image(this.BimgContenedorCut ,this.px2, 0, width / 8, height);
        }
      }
      if (this.contenedorB) {
        // CUANDO QUIERO IR A "B"
        if (this.contador <= 29 && this.actual == "B") {
          // DESDE A
          //cont2
          this.px2 = map(this.contador, 29, 0, this.gpx2, this.gpx1);
          fill(90, 255, 90);
          image(this.BimgContenedor ,this.px2, 0, width / 2.8, height);
          //cont1
          this.px1 = map(this.contador, 29, 0, this.gpx1, this.gpx2);
          fill(255, 90, 90);
          image(this.AimgContenedor ,this.px1, 0, width / 2.8, height);
          //cont3
          this.px3 = map(this.contador, 29, 0, this.gpx3, this.gpx3);
          fill(90, 90, 255);
          image(this.CimgContenedorCut,this.px3, 0, width / 8, height);
        }
        if (this.contador <= 29 && this.actual == "B" && this.paraB) {
          // DESDE C
          //cont3
          this.px3 = map(this.contador, 29, 0, this.gpx1, this.gpx3);
          fill(90, 90, 255);
          image(this.CimgContenedor ,this.px3, 0, width / 2.8, height);
          //cont1
          this.px1 = map(this.contador, 29, 0, this.gpx3, this.gpx1);
          fill(255, 90, 90);
          image(this.AimgContenedorCut,this.px1, 0, width / 8, height);
          //cont2
          this.px2 = map(this.contador, 29, 0, this.gpx3, this.gpx1);
          fill(90, 255, 90);
          image(this.BimgContenedor ,this.px2, 0, width / 2.8, height);
        }
      }
      if (this.contenedorC) {
        // CUANDO QUIERO IR A "C"
        if (this.contador <= 29 && this.actual == "C" && this.desdeA) {
          // DESDE A
          //cont1
          this.px1 = map(this.contador, 29, 0, this.gpx1, this.gpx2);
          fill(255, 90, 90);
          image(this.AimgContenedor, this.px1, 0, width / 2.8, height);
          //cont2
          this.px2 = map(this.contador, 29, 0, this.gpx2, this.gpx3);
          fill(90, 255, 90);
          image(this.BimgContenedor ,this.px2, 0, width / 2.8, height);
          //cont3
          this.px3 = map(this.contador, 29, 0, this.gpx3, this.gpx1);
          fill(90, 90, 255);
          image(this.CimgContenedor, this.px3, 0, width / 2.8, height);
        }
        if (this.contador <= 29 && this.actual == "C" && this.desdeB) {
          // DESDE B
          //cont2
          this.px2 = map(this.contador, 29, 0, this.gpx1, this.gpx2);
          fill(90, 255, 90);
          image(this.BimgContenedor,this.px2, 0, width / 2.8, height);
          //cont1
          this.px1 = map(this.contador, 29, 0, this.gpx2, this.gpx2);
          fill(255, 90, 90);
          image(this.AimgContenedorCut,this.px1, 0, width / 8, height);
          //cont3
          this.px3 = map(this.contador, 29, 0, this.gpx3, this.gpx1);
          fill(90, 90, 255);
          image(this.CimgContenedor,this.px3, 0, width / 2.8, height);
        }
      }
    }
    pop();
  }

  ocultarVideos(){
    if(!this.botActivo1 || !this.botActivo2){
      //
      Avid1.size(0,0);
      Avid1.position(0,0);
      //
      //
      Avid2.size(0,0);
      Avid2.position(0,0);
      //
      //
      Bvid1.size(0,0);
      Bvid1.position(0,0);
      //
      //
      Bvid2.size(0,0);
      Bvid2.position(0,0);
      //
      //
      Cvid1.size(0,0);
      Cvid1.position(0,0);
      //
      //
      Cvid2.size(0,0);
      Cvid2.position(0,0);
      //
    }
  }
}
