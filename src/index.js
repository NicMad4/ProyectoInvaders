const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "lightgray";

let naveImagen = new Image();
naveImagen.src = "src/imagenes/spaceship.png";

let alienImagen = new Image();
alienImagen.src = "src/imagenes/alien.png";

const aliens = [];

const nave = new Objeto(300, 600, 100, 100, naveImagen, ctx);

const jugar = () => {
  for (let alien of aliens) {
    alien.borrar();
    alien.y += 5;
    alien.dibujar();
    if (nave.detectarColision(alien)) {
      console.log("Has perdido");
    }
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

const cargaInicial = () => {
  nave.dibujar();
  setInterval(jugar, 200);
  setInterval(crearAliens, 2000);
};

const moverNave = (e) => {
  nave.borrar();
  if (e.key === "ArrowLeft") {
    nave.x -= 10;
  }
  if (e.key === "ArrowRight") {
    nave.x += 10;
  }
  if (e.key === "ArrowUp") {
    nave.y -= 10;
  }
  if (e.key === "ArrowDown") {
    nave.y += 10;
  }
  nave.dibujar();
};

window.addEventListener("load", cargaInicial);

window.addEventListener("keydown", moverNave);

//Rotar imagen
//Que vaya a unas coordenadas
//Mover(1,-1)
