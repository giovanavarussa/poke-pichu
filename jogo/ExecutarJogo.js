function executarJogo(){
    background(imgCampo);
  jogador.mova();
  print(pontos);
  
  for(let i=0;i<pokes.length;i++){
    pokes[i].mova();
    if(pokes[i].posY > 600){
      pokes[i]= new Ball(pokes[i].posY);
      
      
    }
                                 
if(
     jogador.xInicial<pokes[i].xFinal &&  //para colidir com o jogador
     jogador.xFinal> pokes[i].xInicial &&
     jogador.yInicial< pokes[i].yFinal &&
     jogador.yFinal > pokes[i].yInicial
    ) {
      
      pontos++ // aumentar pontos
    som_feliz.play(); // som das bolas
    
  if(pokes[i].imagem==imgBall[3]){ //zerar pontuação
      pontos=0
      som_gato.play(); // som da bomba]
     // controleTela=("morte");
      vida++;
    }
    if(vida == 3){
      controleTela="morte";
      pontos=0;
      vida=0;
      jogador= new Jogador();
       }
       

  pokes[i]= new Ball();
  }
  text("PONTOS: " + pontos, 40,30);
  text("morte:"+ vida,250,30);
  
  
  
    
  }

   
}
    

