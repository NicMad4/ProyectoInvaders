const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let naveImagen = new Image();
naveImagen.src = "./src/imagenes/spaceship2.png";

let alienImagen = new Image();
alienImagen.src = "./src/imagenes/alien2.png";

let balaImagen = new Image();
balaImagen.src = "./src/imagenes/bala.png"

let intervalId=''
let intervalIdAlien=''

const aliens = [];
const balas =[];
let puntos=0

const nave = new Objeto(300, 600, 100, 100, naveImagen, ctx);
let estaCorriendo = true;

const choqueAudio = new Audio("./src/sonidos/choque.mp3");
const disparoLaserAudio = new Audio("./src/sonidos/disparolaser.mp3");
const gameOverAudio = new Audio("./src/sonidos/game-over.mp3");
const puntosAudio = new Audio("./src/sonidos/puntos.mp3");
const risaMalvadaAudio = new Audio("./src/sonidos/risa-malvada-restart.mp3");
const startAudio = new Audio("./src/sonidos/start.mp3");


function playMusicaJuego(musicaJuego) {   
  musicaJuego.currentTime = 0;
  musicaJuego.volume = 1;
  musicaJuego.loop = false;
  musicaJuego.play();
}


const jugar = () => {
  if(!estaCorriendo){
    clearInterval(intervalId)
    clearInterval(intervalIdAlien)
    
  }
  //console.log(estaCorriendo)
  animarAlien();

  animarBalas();
  comproColision();
  score();
};
const comproColision =() =>{
  for (let i=0;i<aliens.length;i++) {
    for (let j=0;j<balas.length;j++) {
      let unAlien = aliens[i];
      let unaBala = balas[j];
      unAlien.detectarColision(unaBala)
      //console.log(unAlien.detectarColision(unaBala))
      if(unAlien.detectarColision(unaBala)){
        aliens.splice(i,1) //compara con array de aliens 
        unAlien.borrar()
        balas.splice(j,1) //compara con array de balas
        unaBala.borrar()
        playMusicaJuego(puntosAudio)
        puntos+=100;
      }

      
      
      
    }
  }
};
function score() {
  ctx.fillStyle = "white";
  ctx.clearRect(0, 0, canvas.width, 40);
  ctx.font = "normal 20px 'Press Start 2P'";
  ctx.fillText("SCORE " + puntos, 10, 20);
  

};

const animarAlien=() => {
  for (let alien of aliens) {
    alien.borrar();
    alien.y += 5;
    alien.dibujar();
    //console.log(alien)
    
    
    
    if (alien.detectarColision(nave)) {
      playMusicaJuego(choqueAudio)
      playMusicaJuego(gameOverAudio)
      estaCorriendo=false
      //console.log('Game Over')
      const gameOver= document.getElementById('GameOver')
      gameOver.classList.remove('hidden')
      //alert ("Game Over");
     
      
      
    }
  }
}
//frustación mode ON
const animarBalas = () => {
  for (let bala of balas) {
    bala.borrar();
    bala.y -= 60;
    bala.dibujar();
    //console.log(bala)
   /* if (bala.detectarColision(aliens)) {
      console.log('muerte a los verdes')
      }*/
  
  }
};

const crearAliens = () => {
  const randomPositionX = Math.floor(Math.random() * 650);
  const alien = new Objeto(
    randomPositionX,
    0,
    50,
    50,
    alienImagen,
    ctx
  );
  aliens.push(alien);
 
};
const crearBalas = () => {
  const randomPositionX = Math.floor(Math.random() * 650);
  const bala = new Objeto(
    nave.x + 49,
     nave.y,
    4,
    4,
    balaImagen,
    ctx
  );
  balas.push(bala);
}

const cargaInicial = () => {
  
    intervalId = setInterval(jugar, 200);
    intervalIdAlien = setInterval(crearAliens, 2500);
    nave.dibujar();
    playMusicaJuego(startAudio);

  
   
  

  //setInterval(crearAliens, 2500);
  
 
};

const moverNave = (e) => {  //mueve la nave
  nave.borrar();
  if (estaCorriendo){
  if (e.key === "ArrowLeft"&& nave.x > 0) {
    nave.x -= 10;
  }
  if (e.key === "ArrowRight"&&nave.x<600) {
    nave.x += 10;
  }
  if (e.key === "ArrowUp"&&nave.y>0) {
    nave.y -= 10;
  }
  if (e.key === "ArrowDown"&& nave.y<600) {
    nave.y += 10;
  }
  nave.dibujar();
  }
};

const dispara = (i) => {  //funcion que llama a la funcion crear balas cuando pulsas la key selecionada
 //console.log(i.key)
  if ( i.key === ' '){ //el puto Space no se llama Space 
    
   crearBalas();
   playMusicaJuego(disparoLaserAudio);
  
  }
};


//boton de start
const botonStart = document.getElementById('botonStart')
const divBotonStart = document.getElementById('startMenu')

botonStart.addEventListener('click',function(){
  cargaInicial()
  divBotonStart.classList.add('hidden')//esconde la división
  botonStart.classList.add('hidden')//esconde el botón
})

function resetCanvas(){ //boton de reset
  playMusicaJuego(risaMalvadaAudio)
  restartGame = document.getElementById("restart");
  restartGame.addEventListener("click",function(){
    window.location.reload();
    
  }); 
  } 



window.addEventListener("keydown", moverNave);//aqui empieza el movimiento de comandos

window.addEventListener("keydown", dispara);//aqui empieza el pew pew


