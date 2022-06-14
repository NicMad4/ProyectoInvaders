const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "lightgray";//color de fondo del canvas (una estupidez porque no se ve)

let naveImagen = new Image();
naveImagen.src = "src/imagenes/spaceship2.png";

let alienImagen = new Image();
alienImagen.src = "src/imagenes/alien2.png";

let balaImagen = new Image();
balaImagen.src = "src/imagenes/bala.png"
let intervalId=''
let intervalIdAlien=''

const aliens = [];
const balas =[];

const nave = new Objeto(300, 600, 100, 100, naveImagen, ctx);
let estaCorriendo = true;

const jugar = () => {
  if(!estaCorriendo){
    clearInterval(intervalId)
    clearInterval(intervalIdAlien)
    
  }
  //console.log(estaCorriendo)
  animarAlien()

  animarBalas();
  comproColision()
};
const comproColision =() =>{
  for (let i=0;i<aliens.length;i++) {
    for (let j=0;j<balas.length;j++) {
       enemigosArr = aliens[i];
       balasArr = balas[j];
      
      
      
      if(balasArr.x===enemigosArr.x&&balasArr.y===enemigosArr.y){
        console.log('hit')
      }
    }
  }
}
const animarAlien=() => {
  for (let alien of aliens) {
    alien.borrar();
    alien.y += 5;
    alien.dibujar();
    //console.log(alien)
    
    
    
    if (alien.detectarColision(nave)) {
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
    40,
    40,
    balaImagen,
    ctx
  );
  balas.push(bala);
}

const cargaInicial = () => {
  
    intervalId = setInterval(jugar, 200);
    intervalIdAlien = setInterval(crearAliens, 2500);
    nave.dibujar();

  
   
  

  //setInterval(crearAliens, 2500);
  
 
};

const moverNave = (e) => {
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

const dispara = (i) => {
 //console.log(i.key)
  if ( i.key === ' '){ //el puto Space no se llama Space 
    
   crearBalas();
  
  }
};

const botonStart = document.getElementById('botonStart')
const divBotonStart = document.getElementById('startMenu')

botonStart.addEventListener('click',function(){
  cargaInicial()
  divBotonStart.classList.add('hidden')//esconde la división
  botonStart.classList.add('hidden')//esconde el botón
})
//window.addEventListener("load", cargaInicial);//Aqui empieza todo

window.addEventListener("keydown", moverNave);//aqui empieza el movimiento de comandos

window.addEventListener("keydown", dispara);//aqui empieza el pew pew


