class Jogador{
    constructor(){
      this.imagem=loadImage("jogo/imagem/pikachu.png");
      this.posX=200;
      this.posY=280;
      this.largura=90;
      this.altura=100;
      this.velocidade=5;
      this.yInicial = this.posY;
      this.yFinal=this.posY+this.altura;
      this.xInicial=this.posX;
      this.xFinal=this.posX+this.largura;
                
  }
  // movimentos do jogador
   mova(){
     image(this.imagem,this.posX,this.posY,this.largura,this.altura)
     // movimenta para esquerda
     if((keyIsDown(37)) && (this.xInicial>0)){
            this.posX -= this.velocidade;
     }
     //movimenta para direita
     if((keyIsDown(39)) && (this.xFinal<580)){
            this.posX += this.velocidade;
     }
         this.yInicial = this.posY;
          this.yFinal=this.posY+this.altura;
          this.xInicial=this.posX;
          this.xFinal=this.posX+this.largura;
  
    }
    }
 