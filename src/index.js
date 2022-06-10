import {Nave} from './Nave.js'

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "lightgray";
console.log('hola')

let imagenNave = document.getElementById('nave')
console.log(imagenNave)


const nave= new Nave(0,200,100,100,imagenNave);
console.log(nave)
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
    //setInterval(jugar, 200);
  //setInterval(crearObstaculos, 3000);
  
  };

  window.addEventListener("load", cargaInicial);