

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "black";


let imagenNave = document.getElementById('nave')
//console.log(imagenNave)


const nave= new Nave(300,600,100,100,imagenNave);
//console.log(nave)

let imagenEnemigo = document.getElementById('enemigo')
//console.log(imagenEnemigo)


const enemigo= new Enemigo(300,0,50,50,imagenEnemigo);
//console.log(enemigo)
/*const jugar = () => {
    for (let obstaculo of obstaculos) {
      obstaculo.borrar();
      obstaculo.y -= 5;
      obstaculo.dibujar();
      if (coche.detectarColision(obstaculo)) {
        console.log("Has perdido");
      }
    }
  };
  
  const crearObstaculos = () => {
    const randomPositionX = Math.floor(Math.random() * 480);
    const obstaculo = new Objeto(
      randomPositionX,
      570,
      120,
      60,
      obstaculoImagen,
      ctx
    );
    obstaculos.push(obstaculo);
  };*/

  const cargaInicial = () => {
    console.log('entra')
    nave.dibujar(ctx);
    enemigo.dibujar(ctx);
    //setInterval(jugar, 200);
  //setInterval(crearObstaculos, 3000);
  
  };

  const logKey = (e) => {
    e.preventDefault();
    //nave.borrar();
    nave.moverNave(e.key);
    //nave.dibujar();
  };


  window.addEventListener("load", cargaInicial);
  window.addEventListener("keydown", logKey);