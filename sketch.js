var imgCampo;
var jodador;
var imgBall=[];
var pokes = [];
var pontos=0;
var som;
var imgAbertura;
var controleTela = "inicio";
var imgFinal;
var vida = 0;





 //carregamento de imagens e sons
 function preload(){
  imgCampo= loadImage("jogo/imagem/campo.jpg");
  jogador = new Jogador();
  imgBall[0]= loadImage("jogo/imagem/bola1.png");
  imgBall[1]= loadImage("jogo/imagem/bola2.png");
  imgBall[2]= loadImage("jogo/imagem/bola3.png");
  imgBall[3]= loadImage("jogo/imagem/bomba.png");
   pokes[0]= new Ball();
   pokes[1]= new Ball();  // listas
   pokes[2]= new Ball(); 
   pokes[3]= new Ball();
   imgAbertura= loadImage("img/tela inicial.gif");
   imgFinal= loadImage("img/Final.gif");
  som_gato=loadSound("som/gato.wav");
  som_feliz=loadSound("som/som feliz.wav"); //sons
 
}
    
    function setup() {
  createCanvas(600, 400).parent("jogo");
   }
function keyPressed(){
  if(keyCode==13)
  controleTela= "jogo"
}

// função para a direção que as bolas estão caindo
function draw() {

  if (controleTela == "inicio"){
    mostraAbertura();
    }
    else{
      executarJogo();
    } if (controleTela == "morte"){
      mostraFinal();
    }
      }




