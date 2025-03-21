function setup() {
    createCanvas(500,500);
  }
  
  let xJogador1 = 450;
  let xJogador2 = 450;
  
  function draw() {
    if (focused == true) {
      background("blue");
    } else {
      background("purple");
    }
  
    textSize(40);
    text("👿", xJogador1, 100);
    text("😇", xJogador2, 350);
    rect(15, 0, 10, 500);
    if (xJogador1 < 15) {
      text("Jogador 1 venceu!", 50, 200);
      noLoop();
    }
    if (xJogador2 < 15) {
      text("Jogador 2 venceu!", 50, 200);
      noLoop();
    }
  }
  
  function keyReleased() {
    if (key == "w") {
      xJogador1 -= random(20);
    }
    if (key == "s") {
      xJogador2 -= random(20);
    }
  }
  