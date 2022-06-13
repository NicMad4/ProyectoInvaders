const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "lightgray";

let naveImagen = new Image();
naveImagen.src = "src/imagenes/spaceship.png";

let alienImagen = new Image();
alienImagen.src = "src/imagenes/alien.png";

let balaImagen = new Image();
balaImagen.src = "src/imagenes/bala.png"

const aliens = [];
const balas =[];

const nave = new Objeto(300, 600, 100, 100, naveImagen, ctx);


const jugar = () => {
  for (let alien of aliens) {
    alien.borrar();
    alien.y += 5;
    alien.dibujar();
    
    
    
    if (alien.detectarColision(nave)) {
      console.log('Game Over')
      //alert ("Game Over");
      if (alien.detectarColision(balas)) {
        console.log('muere marciano')
        }
      
      
    }
  }
  animarBalas();
};
//frustación mode ON
const animarBalas = () => {
  for (let bala of balas) {
    bala.borrar();
    bala.y -= 60;
    bala.dibujar();
    
  
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
  nave.dibujar();
  setInterval(jugar, 200);
  setInterval(crearAliens, 2500);
  
 
};

const moverNave = (e) => {
  nave.borrar();
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
};

const dispara = (i) => {
 console.log(i.key)
  if ( i.key === ' '){ //el puto Space no se llama Space 
    console.log('dispara')
   crearBalas();
  
  }
};



window.addEventListener("load", cargaInicial);

window.addEventListener("keydown", moverNave);

window.addEventListener("keydown", dispara);


