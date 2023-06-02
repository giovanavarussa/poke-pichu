//posição,tamanhos e velocidades das bolas
class Ball{
    constructor(){
      this.imagem = imgBall[int(random(0,3.9))];
      this.posX = random(0,600);
      this.posY = 0; 
      this.velocidade = (random(1,5) + pontos)
      this.largura = 50;
      this.altura = 50;
      
      
    } //movimentos das bolas
    mova(){
      this.posY+=this.velocidade;
      image(this.imagem,this.posX,this.posY,this.largura,this.altura)
      this.yInicial = this.posY;
      this.yFinal=this.posY+this.altura;
      this.xInicial=this.posX;
      this.xFinal=this.posX+this.largura;
      
    }
    
}  