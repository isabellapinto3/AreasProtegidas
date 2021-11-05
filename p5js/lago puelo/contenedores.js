class Contenedores {
  constructor() {
    this.contenedorA = true;
    this.contenedorB = false;
    this.contenedorC = false;
    this.contador = 30;
  }

  dibujar() {
    push();
    noStroke();
    //cuadro de información
    fill(255);
    rect(0, 0, width / 2.5, height);
    if(this.contenedorA){
    //contenedor 1
    fill(255, 90, 90);
    rect(width / 2.5, 0, width / 2.8, height);
    //contenedor 2
    fill(90, 255, 90);
    rect(width / 2.5 + width / 2.8, 0, width / 8, height);
    //contenedor 3
    fill(90, 90, 255);
    rect(width / 2.5 + width / 2.8 + width / 8, 0, width / 8, height);
    pop();
    // titulo e información
    push();
    fill(27);
    textSize(height / 35);
    text("Rosa mosqueta", width / 20, height / 9); // titulo
    textSize(height / 52.5);
    text(
      "La rosa mosqueta es una planta exótica invasora que se", // información 
      width / 20,
      height / 6.5
    );
    text(
      "diseminó en varios sectores de la región. Su fruto silvestre,", // información
      width / 20,
      height / 6.5 + 14
    );
    text("también conocido como escaramujo.", width / 20, height / 6.5 + 28); // información
    pop();
    }
    if(this.contenedorB){
    //contenedor 1
    fill(90, 255, 90);
    rect(width / 2.5, 0, width / 2.8, height);
    //contenedor 2
    fill(255, 90, 90);
    rect(width / 2.5 + width / 2.8, 0, width / 8, height);
    //contenedor 3
    fill(90, 90, 255);
    rect(width / 2.5 + width / 2.8 + width / 8, 0, width / 8, height);
    pop();
    // titulo e información
    push();
    fill(27);
    textSize(height / 35);
    text("Pitra", width / 20, height / 9); // titulo
    textSize(height / 52.5);
    text(
      "Árbol pequeño de corteza rugosa, hojas grandes y flores blancas", // información 
      width / 20,
      height / 6.5
    );
    pop();
    }
    if(this.contenedorC){
    //contenedor 1
    fill(90, 90, 255);
    rect(width / 2.5, 0, width / 2.8, height);
    //contenedor 2
    fill(255, 90, 90);
    rect(width / 2.5 + width / 2.8, 0, width / 8, height);
    //contenedor 3
    fill(90, 255, 90);
    rect(width / 2.5 + width / 2.8 + width / 8, 0, width / 8, height);
    pop();
    // titulo e información
    push();
    fill(27);
    textSize(height / 35);
    text("Avellano", width / 20, height / 9); // titulo
    textSize(height / 52.5);
    text(
      "Es un árbol o arbusto caducifolio oriundo de Europa y Asia.", // información 
      width / 20,
      height / 6.5
    );
    pop();
    }
    push();
    fill(0);
    text("mX_" + mouseX, width - 100, 20);
    text("mY_" + mouseY, width - 100, 30);
    text("A_" + this.contenedorA, 20, 20);
    text("B_" + this.contenedorB, 20, 30);
    text("C_" + this.contenedorC, 20, 40);
    text("cd_" + this.contador, 20, 55);
    pop();
  }

  funcionalidad() {
    if(this.contador <= 29 && this.contador >= 0){
      this.contador--;
    }
    if(this.contador <= 0){
       this.contador = 30;
       }
    if (mouseIsPressed) {
      //  CONTENEDOR A CONTENEDOR A CONTENEDOR A CONTENEDOR A  
      if (this.contenedorA&& this.contador == 30) {
        if (mouseX >= 1030 && mouseX <= 1205) {
          this.contenedorB = true;
          this.contenedorA = false;
          this.contenedorC = false;
          this.contador = 29;
        }
        if (mouseX >= 1205 && mouseX <= windowWidth) {
          this.contenedorC = true;
          this.contenedorA = false;
          this.contenedorB = false;
          this.contador = 29;
        }
      } //CONTENEDOR B CONTENEDOR B CONTENEDOR B CONTENEDOR B 
      if (this.contenedorB && this.contador == 30) {
        if (mouseX >= 1030 && mouseX <= 1205) {
          this.contenedorA = true;
          this.contenedorB = false;
          this.contenedorC = false;
          this.contador = 29;
        }
        if (mouseX >= 1205 && mouseX <= windowWidth) {
          this.contenedorC = true;
          this.contenedorA = false;
          this.contenedorB = false;
          this.contador = 29;
        }
      } //CONTENEDOR C CONTENEDOR C CONTENEDOR C CONTENEDOR C
      if (this.contenedorC && this.contador == 30) {
        if (mouseX >= 1030 && mouseX <= 1205) {
          this.contenedorA = true;
          this.contenedorB = false;
          this.contenedorC = false;
          this.contador = 29;
        }
        if (mouseX >= 1205 && mouseX <= windowWidth) {
          this.contenedorB = true;
          this.contenedorA = false;
          this.contenedorC = false;
          this.contador = 29;
        }
      }
    }
  }
}
